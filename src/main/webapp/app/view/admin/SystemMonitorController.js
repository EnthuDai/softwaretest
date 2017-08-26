Ext.define('SoftwareTest.view.admin.SystemMonitorController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-systemmonitor',

    onTimeChartRendered: function (chart) {
        chart.getStore().removeAll();
        this.addNewTimeData();
        this.timeChartTask = Ext.TaskManager.start({
            run: this.addNetInterfaceData,
            interval: 2000,
            // repeat: 120,
            scope: this
        });
    },

    onTimeChartDestroy: function () {
        if (this.timeChartTask) {
            Ext.TaskManager.stop(this.timeChartTask);
        }
    },

    addNetInterfaceData:function(){
        var me = this;
        Ext.Ajax.request({
            url:"system/getInternetInfo.do",
            success:function (response) {
                var res = Ext.JSON.decode(response.responseText);
                me.addNewTimeData(res.upload,res.download);
            }
        })
    },

    addNewTimeData: function(upload,download) {
        var me = this,
            chart = me.lookupReference('time-chart'),
            store = chart.getStore(),
            count = store.getCount(),
            xAxis = chart.getAxes()[1],
            visibleRange = 1000*60*2,
            second = 2000,
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
                upload: upload,
                download:download
            });

        } else {
            chart.animationSuspended = true;
            me.startTime = Math.floor(Ext.Date.now() / second) * second;
            xAxis.setMinimum(me.startTime);
            xAxis.setMaximum(me.startTime + visibleRange);

            store.add({
                xValue: this.startTime,
                upload: upload,
                download:download
            });
            chart.animationSuspended = false;
        }
    }
});
