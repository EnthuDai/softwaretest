
Ext.define('SoftwareTest.view.admin.TabPage',{
    extend: 'Ext.tab.Panel',
    xtype:'tabpage',

    requires: [
        'SoftwareTest.view.admin.TabPageController',
        'SoftwareTest.view.admin.TabPageModel'
    ],

    controller: 'admin-tabpage',
    viewModel: {
        type: 'admin-tabpage'
    },
    id:'tabpage',

    items:[{
        html:'hell'
    }]
});
