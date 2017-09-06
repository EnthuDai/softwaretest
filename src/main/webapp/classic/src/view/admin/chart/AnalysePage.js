Ext.define('SoftwareTest.view.admin.chart.AnalysePage', {
    extend: 'Ext.panel.Panel',
    xtype: 'analysepage',

    requires:['SoftwareTest.view.admin.chart.AnalysePageController'],

    controller:'analysepage',

    title: '统计分析',
    closable: true,
    scrollable:true,

    id: 'analysepage',
    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%',
                height:'100%'
            }
        }
    },
    tbar: [
        '->', {
            xtype: 'combobox',
            emptyText: '选择班级',
            reference:'classes',
            publishes:'value',
            width: 130,
            displayField: 'name',
            id: 'chart_name_filter_box',
            anchor: '-15',
            listeners: {
                select: 'name_select'
            },
            store: {
                type: 'ClassStore',
                queryCaching: false
            },
            queryParam: 'q',
            queryMode: 'local'
        },' ',{
            xtype:'button',
            text:'刷新',
            handler:'refresh'
        }
    ],

    items: [{
        xtype: 'scorepie'
    }]
});