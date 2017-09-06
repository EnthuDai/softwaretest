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
                    sessionStorage.setItem('isLogin',true);
                    sessionStorage.setItem('studentId',form.getValues().id);
                    form.ownerCt.close();
                    if(!Ext.getCmp('user')){
                        Ext.Ajax.request({
                            url:SoftwareTest.server+'student/getInfo.do',
                            params:{
                                studentId:sessionStorage.getItem('studentId')
                            },
                            success:function (response) {
                                var res2 = Ext.JSON.decode(response.responseText);
                                sessionStorage.setItem('studentName',res2.studentName);
                                sessionStorage.setItem('session',res2.session);
                                sessionStorage.setItem('major',res2.major);
                                sessionStorage.setItem('className',res2.className);
                                Ext.getCmp('student-main').add({
                                    xtype:'user',
                                    title: '个人中心',
                                    iconCls: 'fa-user',
                                    layout:{
                                        type:'vbox',
                                        align:'center'
                                    }
                                });
                            }
                        });
                    }
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
