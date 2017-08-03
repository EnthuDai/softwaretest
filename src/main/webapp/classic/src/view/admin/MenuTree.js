
Ext.define('SoftwareTest.view.admin.MenuTree',{
    extend: 'Ext.panel.Panel',
    xtype:'menutree',
    padding:'0 3 0 0',

    requires: [
        'SoftwareTest.view.admin.MenuTreeController',
        'SoftwareTest.view.admin.MenuTreeModel',
        'SoftwareTest.store.MenuTreeStore',
        'SoftwareTest.view.admin.StudentTree'
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
        xtype:'coachtree'
    }]
});
