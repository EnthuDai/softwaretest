Ext.define('SoftwareTest.view.admin.CpuChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-cpuchartcontroller',

    onCpuTimeChartRendered: function (chart) {
        chart.getStore().removeAll();
        this.addCpuNewTimeData();
        this.CpuTimeChartTask = Ext.TaskManager.start({
            run: this.addCpuData,
            interval: 1000,
            // repeat: 120,
            scope: this
        });
    },
    onCpuTimeChartDestroy: function () {
        if (this.timeChartTask) {
            Ext.TaskManager.stop(this.CpuTimeChartTask);
        }
    },
    addCpuData: function () {
        var me = this;
        Ext.Ajax.request({
            url: "system/getCpuInfo.do",
            success: function (response) {
                var res = Ext.JSON.decode(response.responseText);
                me.addCpuNewTimeData(res.percent);
            }
        })
    },
    addCpuNewTimeData: function (percent) {
        var me = this,
            chart = me.lookupReference('cpu-chart'),
            store = chart.getStore(),
            count = store.getCount(),
            xAxis = chart.getAxes()[1],
            visibleRange = 1000 * 60 *2,
            second = 1000,
            xValue, lastRecord;

        if (count > 0) {
            lastRecord = store.getAt(count - 1);
            xValue = lastRecord.get('xValue') + second;
            if (xValue - me.startTime > visibleRange) {
                me.startTime = xValue - visibleRange;
                xAxis.setMinimum(this.startTime);
                xAxis.setMaximum(xValue);
            }
            store.add({
                xValue: xValue,
                percent: percent
            });

        } else {
            chart.animationSuspended = true;
            me.startTime = Math.floor(Ext.Date.now() / second) * second;
            xAxis.setMinimum(me.startTime);
            xAxis.setMaximum(me.startTime + visibleRange);

            store.add({
                xValue: me.startTime,
                percent: percent
            });
            chart.animationSuspended = false;
        }
    },
    onAxisLabelRender: function (axis, label, layoutContext) {
        return layoutContext.renderer(label) + '%';
    }
});