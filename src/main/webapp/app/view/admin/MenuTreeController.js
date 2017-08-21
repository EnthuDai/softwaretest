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
        }else if(item.data.text==='分数查看'){
            if(!Ext.getCmp('rqtsgrid')){
                Ext.getCmp('tabpage').add({
                    xtype:'rqtsgrid',
                    title:'分数查看'
                }).show();
            }else{
                Ext.getCmp('rqtsgrid').show();
            }
        }else if(item.data.text==='统计分析'){
            if(!Ext.getCmp('analysepage')){
                Ext.getCmp('tabpage').add({
                    xtype:'analysepage',
                    title:'统计分析'
                }).show();
            }else{
                Ext.getCmp('analysepage').show();
            }
        }
    }
});
