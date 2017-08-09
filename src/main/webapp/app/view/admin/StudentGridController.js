Ext.define('SoftwareTest.view.admin.StudentGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-studentgrid',


    session_select:function(combo){
        var data = Ext.getStore('ClassStore').getData();
        var majorResult=[];
        var nameResult = [];
        var hits1 = {};
        var hits2 = {};
        for(var i=0;i<data.length;i++){
            var temp = Ext.getStore('ClassStore').getData().getAt(i);
            if(temp.data.session===combo.getValue()){
                if(!hits1[temp.get('major')]){
                    hits1[temp.get('major')] = true;
                    majorResult.push(temp.get('major'));
                }
                if(!hits2[temp.get('name')]){
                    hits2[temp.get('name')] = true;
                    nameResult.push(temp.get('name'));
                }
            }
        }
        Ext.getCmp('major_filter_box').clearValue();
        Ext.getCmp('major_filter_box').setStore(majorResult);
        Ext.getCmp('name_filter_box').clearValue();
        Ext.getCmp('name_filter_box').setStore(nameResult);
        this.name_select();
    },
    
    major_select:function (combo) {
        var session = Ext.getCmp('session_filter_box').getValue();
        var data = Ext.getStore('ClassStore').getData();
        var nameResult = [];
        var hits2 = {};
        for(var i=0;i<data.length;i++){
            var temp = Ext.getStore('ClassStore').getData().items[i];
            if(temp.data.major===combo.getValue()){
                if(session && session !== temp.data.session) {
                    continue;
                }
                if(!hits2[temp.get('name')]){
                    hits2[temp.get('name')] = true;
                    nameResult.push(temp.get('name'));
                }
            }
        }
        Ext.getCmp('name_filter_box').clearValue();
        Ext.getCmp('name_filter_box').setStore(nameResult);
        this.name_select();
    },
    
    name_select:function () {
        var session = Ext.getCmp('session_filter_box').getValue();
        var major = Ext.getCmp('major_filter_box').getValue();
        var name = Ext.getCmp('name_filter_box').getValue();
        // console.log(session+' '+major+' '+name);
        Ext.getStore('StudentStore').load({
            params:{
                session:session,
                major:major,
                name:name
            }
        })
    },
    add:function(){
        var session = Ext.getCmp('session_filter_box').getValue();
        var major = Ext.getCmp('major_filter_box').getValue();
        var name = Ext.getCmp('name_filter_box').getValue();
        if(session && major && name) {
            var index = Ext.getStore('ClassStore').findBy(function (record) {
               if(record.get('session')===session && record.get('major')===major && record.get('name')===name) return true;
            });
            if(index===-1) {
                Ext.Msg.alert('错误','数据异常，请刷新本页面再试');
                return;
            }
            sessionStorage.setItem('classId',Ext.getStore('ClassStore').getAt(index).get('id'));
            sessionStorage.setItem('className',major+'专业'+name);
            Ext.create('SoftwareTest.view.admin.StudentEdit',{
                title:'添加学生'
            }).show();
        }else{
            Ext.Msg.alert('提示','请先在工具栏左侧选择班级信息');
        }
    },
    edit:function () {
        var grid = Ext.getCmp('studentgrid');
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length===0){
            Ext.Msg.alert('消息提示','请先选择一条数据');
        }else if(rows.length>1){
            Ext.Msg.alert('消息提示','一次只能修改一条数据');
        }else if(rows.length===1){
            var edit = Ext.create('SoftwareTest.view.admin.StudentEdit',{
                title:'修改学生'
            });
            edit.down('form').loadRecord(rows[0]);
            edit.down('form').down('textfield[name=studentId]').setDisabled(true);
        }
    },
    delete:function(){
        var grid = Ext.getCmp('studentgrid');
        var rows = grid.getSelectionModel().getSelection();
        if(rows.length===0){
            Ext.Msg.alert('消息提示','请至少选择一条记录');
        }else{
            grid.store.remove(rows[0]);
            grid.store.sync({
                failure:function(){
                    Ext.Msg.alert('删除失败，该学生有其他数据关联数据未被删除');
                }
            });
        }
        Ext.getStore('StudentStore').reload({
            params:{
                session : Ext.getCmp('session_filter_box').getValue(),
                major : Ext.getCmp('major_filter_box').getValue(),
                name : Ext.getCmp('name_filter_box').getValue()
            }
        });
    }
});
