Ext.define('SoftwareTest.view.admin.LoginController',{
    extend: 'Ext.app.ViewController',
    alias:'controller.admin-login',

    loginSubmit:function () {
        var form = Ext.getCmp('admin_login_form');
        // Ext.Ajax.request({
        //     url:SoftwareTest.server+'admin/login.do',
        //     params:form.getValues(),
        //     success:function(response){
        //         var res = Ext.JSON.decode(response.responseText);
        //         if(res.success){
        //             sessionStorage.setItem('adminLogin',true);
        //             sessionStorage.setItem('adminId',form.getValues().name);
        //             window.location.href='/index.html?admin';
        //         }else{
        //             Ext.Msg.alert('错误','账号或密码错误');
        //         }
        //     },
        //     failure:function(){
        //         Ext.Msg.alert('错误','请检查网络状况或联系管理员');
        //     }
        //
        // });

        sessionStorage.setItem('adminLogin',true);
        sessionStorage.setItem('adminId',form.getValues().name);
        window.location.href='/index.html?admin';

    }
});