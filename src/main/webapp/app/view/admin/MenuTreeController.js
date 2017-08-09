Ext.define('SoftwareTest.view.admin.MenuTreeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-menutree',

    treeclick:function(record, item, index, e, eOpts ){
        if(item.data.text==='班级管理'){
            if(!Ext.getCmp('classgrid')){
                Ext.getCmp('tabpage').add({
                    xtype:'classgrid',
                    title:'班级列表'
                }).show();
            }else{
                Ext.getCmp('classgrid').show();
            }
        }else if(item.data.text==='学生管理'){
            if(!Ext.getCmp('studentgrid')){
                Ext.getCmp('tabpage').add({
                    xtype:'studentgrid',
                    title:'学生列表'
                }).show();
            }else{
                Ext.getCmp('studentgrid').show();
            }
        }
    }
});
