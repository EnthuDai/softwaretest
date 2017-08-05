Ext.define('SoftwareTest.view.admin.ClassEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-classedit',

    cancel:function(){
        var form = Ext.getCmp('classform');
        form.ownerCt.close();

    },

    save:function () {
        var form = Ext.getCmp('classform');
        if(!form.hasInvalidField()){
            var grid = Ext.getCmp('classgrid');
            var rows = grid.getSelectionModel().getSelection();//获得选中行
            var row = rows[0];
            var record = form.getRecord();
            var value = form.getValues();
            if(record!=null){
                row.set(value);
                grid.store.sync({
                    success:function(){
                        form.ownerCt.close();
                    },
                    failure:function(){
                        Ext.Msg.alert('错误提示','修改失败');
                    }
                });
            }else{
                record=Ext.create('SoftwareTest.model.ClassModel');
                record.set(value);
                grid.store.add(record);
                grid.store.sync({
                    success:function(){
                        form.ownerCt.close();
                        Ext.getStore('ClassStore').reload();
                    },
                    failure:function(){
                        grid.store.remove(record);
                        Ext.Msg.alert('错误提示','添加失败');
                    }
                });
            }
        }else{
            Ext.Msg.alert('错误提示','数据不完整或者存在错误数据');
        }
    }
});
