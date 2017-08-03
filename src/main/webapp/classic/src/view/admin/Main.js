Ext.define('SoftwareTest.view.admin.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'admin-main',

    requires:['SoftwareTest.view.admin.AdminToolbar',
        'SoftwareTest.view.admin.MenuTree',
        'SoftwareTest.view.admin.TabPage'],

    // ui: 'navigation',

    layout:{
        type:'border'
    },
    items:[{
        xtype:'admintoolbar',
        region:'north'
    },{
        xtype:'menutree',
        region:'west',
        width:200
    },{
        xtype:'tabpage',
        region:'center'
    }]
});