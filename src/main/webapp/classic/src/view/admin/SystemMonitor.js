Ext.define('SoftwareTest.view.admin.SystemMonitor', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.systemmonitor',

    requires: [
        'SoftwareTest.view.admin.SystemMonitorController',
        'SoftwareTest.view.admin.SystemMonitorModel'
    ],

    viewModel: {
        type: 'admin-systemmonitor'
    },

    id: 'systemmonitor',
    closable: true,
    layout: {
        type: 'table',
        columns: 2,
        tableAttrs: {
            style: {
                width: '100%',
                height: '100%'
            }
        }
    },
    defaults: {
        xtype: 'panel',
        width: '100%',
        height: '100%',
        padding: 3
    },
    items: [{
        title:'服务器信息',
        padding:'20 20 20 20',
        items: [{
            xtype: 'gridpanel',
            width:'100%',
            store: Ext.create("SoftwareTest.store.SystemInfoStore"),
            columns: [{
                text: '属性',
                dataIndex: 'key',
                sortable: false,
                flex:1
            }, {
                text: '值',
                dataIndex: 'value',
                sortable: false,
                flex:2
            }]
        }]
    }, {
        controller:'admin-systemmonitor',
        items: [{
            layout: 'fit',
            items: {
                xtype: 'cartesian',
                reference: 'time-chart',
                insetPadding: '40 40 20 20',
                width: 500,
                height: 300,
                store: Ext.create('Ext.data.JsonStore', {
                    fields: [ 'xValue','upload', 'download']
                }),
                legend: {
                    docked: 'bottom'
                },sprites: [{
                    type: 'text',
                    text: '服务器流量监控',
                    fontSize: 16,
                    width: 100,
                    height: 30,
                    x: 40, // the sprite x position
                    y: 20  // the sprite y position
                }],
                axes: [{
                    type: 'numeric',
                    minimum: 0,
                    grid: true,
                    position: 'left',
                    title: '上/下行流量(KB/s)'
                }, {
                    type: 'time',
                    dateFormat: 'G:i:s',
                    segmenter: {
                        type: 'time',
                        step: {
                            unit: Ext.Date.SECOND,
                            step: 2
                        }
                    },
                    label: {
                        fontSize: 10
                    },
                    grid: true,
                    position: 'bottom',
                    // title: '时间',
                    fields: ['xValue'],
                    majorTickSteps: 60*2
                }],
                series: [{
                    type: 'line',
                    title: '上行',
                    // marker: {
                    //     type: 'cross',
                    //     size: 5
                    // },
                    style: {
                        miterLimit: 0
                    },
                    xField: 'xValue',
                    yField: 'upload'
                }, {
                    type: 'line',
                    title: '下行',
                    // marker: {
                    //     type: 'arrow',
                    //     size: 5
                    // },
                    style: {
                        miterLimit: 0
                    },
                    xField: 'xValue',
                    yField: 'download'
                }],
                listeners: {
                    afterrender: 'onTimeChartRendered',
                    destroy: 'onTimeChartDestroy'
                }
            }
        }]
    }, {
        controller:'admin-cpuchartcontroller',
        items: [{
            layout: 'fit',
            items: {
                xtype: 'cartesian',
                reference: 'cpu-chart',
                insetPadding: '40 40 20 20',
                width: 500,
                height: 300,
                store: Ext.create('Ext.data.JsonStore', {
                    fields: [ 'xValue','percent']
                }),sprites: [{
                    type: 'text',
                    text: '服务器CPU监控',
                    fontSize: 16,
                    width: 100,
                    height: 30,
                    x: 40, // the sprite x position
                    y: 20  // the sprite y position
                }],
                axes: [{
                    type: 'numeric',
                    minimum: 0,
                    maximum:100,
                    fill: true,
                    position: 'left',
                    title: 'CPU使用率',
                    renderer: 'onAxisLabelRender'
                }, {
                    type: 'time',
                    dateFormat: 'G:i:s',
                    segmenter: {
                        type: 'time',
                        step: {
                            unit: Ext.Date.SECOND,
                            step: 1
                        }
                    },
                    label: {
                        fontSize: 10
                    },
                    grid: true,
                    position: 'bottom',
                    title: '时间',
                    fields: ['xValue'],
                    majorTickSteps: 60*2
                }],
                series: [{
                    type: 'line',
                    style: {
                        miterLimit: 0
                    },
                    xField: 'xValue',
                    yField: 'percent'
                }],
                listeners: {
                    afterrender: 'onCpuTimeChartRendered',
                    destroy: 'onCpuTimeChartDestroy'
                }
            }
        }]
    }, {
        controller:'admin-memchartcontroller',
        items: [{
            layout: 'fit',
            items: {
                xtype: 'cartesian',
                reference: 'mem-chart',
                insetPadding: '40 40 20 20',
                width: 500,
                height: 300,
                store: Ext.create('Ext.data.JsonStore', {
                    fields: [ 'xValue','percent']
                }),sprites: [{
                    type: 'text',
                    text: '服务器内存监控',
                    fontSize: 16,
                    width: 100,
                    height: 30,
                    x: 40, // the sprite x position
                    y: 20  // the sprite y position
                }],
                axes: [{
                    type: 'numeric',
                    minimum: 0,
                    maximum:100,
                    fill: true,
                    position: 'left',
                    title: '内存使用率',
                    renderer: 'onAxisLabelRender'
                }, {
                    type: 'time',
                    dateFormat: 'G:i:s',
                    segmenter: {
                        type: 'time',
                        step: {
                            unit: Ext.Date.SECOND,
                            step: 1
                        }
                    },
                    label: {
                        fontSize: 10
                    },
                    grid: true,
                    position: 'bottom',
                    title: '时间',
                    fields: ['xValue'],
                    majorTickSteps: 60*2
                }],
                series: [{
                    type: 'line',
                    style: {
                        miterLimit: 0
                    },
                    xField: 'xValue',
                    yField: 'percent'
                }],
                listeners: {
                    afterrender: 'onMemTimeChartRendered',
                    destroy: 'onMemTimeChartDestroy'
                }
            }
        }]
    }]

});
