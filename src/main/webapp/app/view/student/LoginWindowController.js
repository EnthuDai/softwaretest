Ext.define('SoftwareTest.view.student.LoginWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.student-loginwindow',

    submit:function(){
        var form = Ext.getCmp('loginForm');
        Ext.Ajax.request({
            url:SoftwareTest.server+'student/login.do',
            params:form.getValues(),
            success:function(response){
                var res = Ext.JSON.decode(response.responseText);
                if(res.success){
                    Ext.getCmp('login').setHidden(true);
                    Ext.getCmp('logout').setHidden(false);
                    var tmp = Ext.getCmp('studentId');
                    tmp.setText(form.getValues().id);
                    tmp.setHidden(false);
                    localStorage.setItem('isLogin',true);
                    localStorage.setItem('studentId',form.getValues().id);
                    form.ownerCt.close();
                }else{
                    Ext.Msg.alert('错误','账号或密码错误');
                }
            },
            failure:function(){
                Ext.Msg.alert('错误','请检查网络状况或联系管理员');
            }
        
        })
    }
});
