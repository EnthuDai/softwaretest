Ext.define('SoftwareTest.view.admin.StudentEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-studentedit',

    renderClass:function(){
        Ext.getCmp('studentEdit_classId').setValue(sessionStorage.getItem('classId'));
        Ext.getCmp('studentEdit_className').setValue(sessionStorage.getItem('className'));
    },

    cancel:function(){
        var form = Ext.getCmp('studentform');
        form.ownerCt.close();

    },

    save:function () {
        var form = Ext.getCmp('studentform');
        if(!form.hasInvalidField()){
            var grid = Ext.getCmp('studentgrid');
            var rows = grid.getSelectionModel().getSelection();//获得选中行
            var row = rows[0];
            var record = form.getRecord();
            var value = form.getValues();
            console.log(record);
            if(record){
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
                record=Ext.create('SoftwareTest.model.StudentModel');
                record.set(value);
                grid.store.add(record);
                grid.store.sync({
                    success:function(){
                        form.ownerCt.close();
                        Ext.getStore('StudentStore').reload({
                            params: {
                                session: Ext.getCmp('session_filter_box').getValue(),
                                major: Ext.getCmp('major_filter_box').getValue(),
                                name: Ext.getCmp('name_filter_box').getValue()
                            }
                        })
                    },
                    failure:function(){
                        grid.store.remove(record);
                        Ext.Msg.alert('错误','添加失败，请检查学号是否重复');
                    }
                });
            }
        }else{
            Ext.Msg.alert('错误提示','数据不完整或者存在错误数据');
        }
    }

});
