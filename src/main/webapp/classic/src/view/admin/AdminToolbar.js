
Ext.define('SoftwareTest.view.admin.AdminToolbar',{
    extend: 'Ext.toolbar.Toolbar',
    xtype:'admintoolbar',

    requires: [
        'SoftwareTest.view.admin.AdminToolbarController',
        'SoftwareTest.view.admin.AdminToolbarModel'
    ],

    controller: 'admin-admintoolbar',
    viewModel: {
        type: 'admin-admintoolbar'
    },
    items:[{
        xtype:'label',
        text:'系统管理员',
        iconCls: 'fa-user'
    }]
});
