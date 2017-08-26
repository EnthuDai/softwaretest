Ext.define('SoftwareTest.view.admin.MemChartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-memchartcontroller',

    addMemNewTimeData: function (percent) {
        var me = this,
            chart = me.lookupReference('mem-chart'),
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

    addMemData: function () {
        var me = this;
        Ext.Ajax.request({
            url: "system/getMemoryInfo.do",
            success: function (response) {
                var res = Ext.JSON.decode(response.responseText);
                me.addMemNewTimeData(res.percent);
            }
        })
    },
    onMemTimeChartRendered: function (chart) {
        chart.getStore().removeAll();
        this.addMemNewTimeData();
        this.MemTimeChartTask = Ext.TaskManager.start({
            run: this.addMemData,
            interval: 1000,
            // repeat: 120,
            scope: this
        });
    },
    onMemTimeChartDestroy: function () {
        if (this.timeChartTask) {
            Ext.TaskManager.stop(this.MemTimeChartTask);
        }
    },
    onAxisLabelRender: function (axis, label, layoutContext) {
        return layoutContext.renderer(label) + '%';
    }
});