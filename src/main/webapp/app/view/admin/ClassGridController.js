Ext.define('SoftwareTest.view.admin.ClassGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-classgrid',

    add:function () {
        Ext.create('SoftwareTest.view.admin.ClassEdit',{
            title:'添加班级'
        })
    },
    edit:function () {
        var grid = Ext.getCmp('classgrid');
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length===0){
            Ext.Msg.alert('消息提示','请先选择一条数据');
        }else if(rows.length>1){
            Ext.Msg.alert('消息提示','一次只能修改一条数据');
        }else if(rows.length===1){
            var edit = Ext.create('SoftwareTest.view.admin.ClassEdit',{
                title:'修改班级'
            });
            edit.down('form').loadRecord(rows[0]);
        }
    },
    delete:function(){
        var grid = Ext.getCmp('classgrid');
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length===0){
            Ext.Msg.alert('消息提示','请至少选择一条记录');
        }else{
            if(rows[0].data.count!=0){
                Ext.Msg.alert('错误','只能删除人数为0的班级')
            }else{
                grid.store.remove(rows[0]);
                grid.store.sync();
            }
        }
        Ext.getStore('ClassStore').reload();
    }
});
