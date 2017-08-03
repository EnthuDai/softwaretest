Ext.define('SoftwareTest.view.admin.AdminToolbarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-admintoolbar',

    beforeRender:function () {
        Ext.getCmp('adminName').setText(sessionStorage.getItem('adminId'));
    }
});
