Ext.define('SoftwareTest.view.student.Main',{
    extend:'Ext.tab.Panel',
    xtype:'student-main',

    requires:[
        'SoftwareTest.view.student.Rqts',
        'SoftwareTest.view.student.Zlq',
        'SoftwareTest.view.student.MainModel',
        'SoftwareTest.view.student.QuestionController'

    ],
    ui: 'navigation',

    controller: 'student-question',
    viewModel: 'student.main',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

        tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    items: [{
        iconCls: 'fa-caret-right',
        items: [{
            xtype: 'rqts'
        }],
        bind:{
            title:'{questionName1}'
        }
    }, {
        iconCls: 'fa-caret-right',
        bind: {
            title:'{questionName2}'},
        items:[{
            xtype:'zlq'
        }]
    }, {
        title: 'Groups',
        iconCls: 'fa-caret-right',
        bind: {
            title:'{questionName3}',
            html: '{loremIpsum}'
        }
    }, {
        title: '修改密码',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
    ,
    listeners:{
        tabchange:'tabchange'
    }

});