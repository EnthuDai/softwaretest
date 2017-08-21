Ext.define('SoftwareTest.view.admin.chart.ScorePie', {
    extend: 'Ext.panel.Panel',
    xtype:'scorepie',

    requires:['SoftwareTest.view.admin.chart.PieController',
        'SoftwareTest.store.RqtsScoreDistributionStore',
        'SoftwareTest.store.ZlqScoreDistributionStore',
        'SoftwareTest.store.LogicScoreDistributionStore'
    ],

    controller: 'pie',
    layout:{
        type:'hbox'
    },
    items: [{
        xtype: 'polar',
        id:'rqtspie',
        width:400,
        height:300,
        reference: 'chart',
        // theme: 'default-gradients',
        insetPadding: 50,
        innerPadding: 20,
        store: {
            type: 'RqtsScoreDistributionStore'
        },
        interactions: ['rotate'],
        sprites: [{
            type: 'text',
            text: '日期推算成绩分布',
            fontSize: 18,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie',
            angleField: 'proportion',
            label: {
                field: 'score',
                calloutLine: {
                    length: 40,
                    width: 2
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        listeners: {
            beforerender: 'rqtsRender'
        }
    },{
        xtype: 'polar',
        id:'zlqpie',
        width:400,
        height:300,
        reference: 'chart',
        // theme: 'default-gradients',
        insetPadding: 50,
        innerPadding: 20,
        store: {
            type: 'ZlqScoreDistributionStore'
        },
        interactions: ['rotate'],
        sprites: [{
            type: 'text',
            text: '找零钱成绩分布',
            fontSize: 18,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie',
            angleField: 'proportion',
            label: {
                field: 'score',
                calloutLine: {
                    length: 40,
                    width: 2
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        listeners: {
            beforerender: 'zlqRender'
        }
    },{
        xtype: 'polar',
        id:'logicpie',
        width:400,
        height:300,
        reference: 'chart',
        // theme: 'default-gradients',
        insetPadding: 50,
        innerPadding: 20,
        store: {
            type: 'LogicScoreDistributionStore'
        },
        interactions: ['rotate'],
        sprites: [{
            type: 'text',
            text: '逻辑覆盖成绩分布',
            fontSize: 18,
            width: 100,
            height: 30,
            x: 40, // the sprite x position
            y: 20  // the sprite y position
        }],
        series: [{
            type: 'pie',
            angleField: 'proportion',
            label: {
                field: 'score',
                calloutLine: {
                    length: 40,
                    width: 2
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }],
        listeners: {
            beforerender: 'logicRender'
        }
    }]
});