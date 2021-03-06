
Ext.define('SoftwareTest.view.admin.MenuTree',{
    extend: 'Ext.panel.Panel',
    xtype:'menutree',
    padding:'0 3 0 0',

    requires: [
        'SoftwareTest.view.admin.MenuTreeController',
        'SoftwareTest.view.admin.MenuTreeModel'
    ],
    title:'导航菜单',
    collapsible: true,
    collapseDirection:'right',

    layout:'accordion',
    layoutConfig: {
        titleCollapse: false,
        animate: true,
        activeOnTop: true,
        align:'west'
    },

    controller: 'admin-menutree',
    viewModel: {
        type: 'admin-menutree'
    },
    items:[{
        xtype:'treepanel',
        title:'学生管理',
        rootVisible:false,
        root:{
            children:[{
                text:'班级管理',
                leaf:true
            },{
                text:'学生管理',
                leaf:true
            }]
        },
        listeners:{
            itemclick:'treeclick'
        }
    },{
        xtype:'treepanel',
        title:'成绩管理',
        rootVisible:false,
        root:{
            children:[{
                text:'分数查看',
                leaf:true
            },{
                text:'统计分析',
                leaf:true
            }]
        },
        listeners:{
            itemclick:'treeclick'
        }
    },{
        xtype:'treepanel',
        title:'系统管理',
        rootVisible:false,
        root:{
            children:[{
                text:'服务器监控',
                leaf:true
            }]
        },
        listeners:{
            itemclick:'treeclick'
        }
    }]
});
