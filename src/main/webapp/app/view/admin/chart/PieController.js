Ext.define('SoftwareTest.view.admin.chart.PieController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.pie',

    onSeriesTooltipRender: function (tooltip, record, item) {
        tooltip.setHtml(record.get('score') + ': ' + record.get('count') + '人');
    },
    rqtsRender:function(t){
        t.getStore().load({
            params:{
                classId:1,
                questionId:1
            }
        })
    },
    zlqRender:function(t){
        t.getStore().load({
            params:{
                classId:1,
                questionId:2
            }
        })
    },
    logicRender:function(t){
        t.getStore().load({
            params:{
                classId:1,
                questionId:3
            }
        })
    }
});