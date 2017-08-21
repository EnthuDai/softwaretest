Ext.define('SoftwareTest.view.admin.chart.AnalysePageController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.analysepage',

    name_select:function(t,record){
        Ext.getCmp('rqtspie').getStore().load({
            params:{
                classId:record.id,
                questionId:1
            }
        });
        Ext.getCmp('zlqpie').getStore().load({
            params:{
                classId:record.id,
                questionId:2
            }
        });
        Ext.getCmp('logicpie').getStore().load({
            params:{
                classId:record.id,
                questionId:3
            }
        });
    },
    refresh:function () {
        if(Ext.getCmp('chart_name_filter_box').getSelection())
            this.name_select(null,Ext.getCmp('chart_name_filter_box').getSelection());
    }
});