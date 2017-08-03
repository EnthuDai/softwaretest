Ext.define('SoftwareTest.view.student.LoginStatusController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.student-loginstatus',

    login:function(e,t){
        Ext.create('SoftwareTest.view.student.LoginWindow').show();
    },

    logout:function(){
        Ext.Msg.confirm('提示','确定注销当前用户？',function(b){
            if(b=='yes'){
                Ext.Ajax.request({
                    url:SoftwareTest.server+'student/logout.do',
                    success:function(response){
                        var res = Ext.JSON.decode(response.responseText);
                        if(res.success){
                            Ext.getCmp('login').setHidden(false);
                            Ext.getCmp('logout').setHidden(true);
                            Ext.getCmp('studentId').setHidden(true);
                            sessionStorage.setItem("isLogin",true);
                            sessionStorage.setItem("isLogin",false);
                            // SoftwareTest.apply(SoftwareTest,{isLogin:false});
                        }else{
                            console.log('注销失败');
                        }
                    },
                    failure:function(){
                        Ext.Msg.alert('错误','请检查网络状况或联系管理员');
                    }
                })
            }
        });
    },

    loginMouseEnter:function(e, t, eOpts){
        var tmp = Ext.get(t);
        tmp.addCls('loginPatternEnter');
        tmp.repaint();
    },

    loginMouseOut:function(e, t, eOpts){
        var tmp = Ext.get(t);
        tmp.removeCls('loginPatternEnter');
        tmp.repaint();
    },

    afterRender:function(t){

    },
    beforeRender:function(t){

    }
});
