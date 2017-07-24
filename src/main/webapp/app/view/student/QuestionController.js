Ext.define('SoftwareTest.view.student.QuestionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.student-question',

    showResultText: function(text) {
        this.showToast(Ext.String.format(text));
    },

    showToast: function(s) {
        Ext.toast({
            html: s,
            closable: false,
            align: 't',
            slideInDuration: 400,
            minWidth: 400
        });
    },

    rqtsSubmit:function(){
        if(!localStorage.isLogin){
            this.showResultText('尚未登录，请先登录');
            Ext.create('SoftwareTest.view.student.LoginWindow').show();
        }else{
            var cmp = Ext.getCmp('rqtsAnswer');
            if(cmp.getValue()&&cmp.isValid()) {
                var predata = localStorage.getItem('preRqts');
                if (predata == cmp.getValue()) {
                    this.showResultText('请勿重复提交');
                } else {
                    localStorage.setItem('preRqts',cmp.getValue());
                    Ext.Ajax.request({
                        url: SoftwareTest.server + 'question/rqts.do',
                        params: {
                            data: cmp.getValue()
                        },
                        success: function (response) {
                            var res = Ext.JSON.decode(response.responseText);
                            if (!res.success) {
                                Ext.Msg.alert("错误", "登录超时，请重新登录！");
                            } else {
                                Ext.create('Ext.window.Window', {
                                    height: 180,
                                    title: '得分情况',
                                    items: [{
                                        xtype: 'grid',
                                        align:'center',
                                        width:580,
                                        store: {
                                            fields: ['WX', 'YX', 'CW', 'FG', 'CF', 'score'],
                                            data: res
                                        },
                                        columns: [
                                            {text: '无效等价类', align:'center',dataIndex: 'WX'},
                                            {text: '有效等价类', align:'center',dataIndex: 'YX'},
                                            {text: '错误数据', align:'center',dataIndex: 'CW'},
                                            {text: '覆盖到的种类', align:'center', dataIndex: 'FG'},
                                            {text: '重复的等价类', align:'center', dataIndex: 'CF'},
                                            {text: '得分', align:'center', dataIndex: 'score',flex:0.5}
                                        ]
                                    }]
                                }).show();
                            }
                        },
                        failure: function () {
                            Ext.Msg.alert('错误', '请检查网络状况或联系管理员');
                        }
                    });
                }
            } else{
                this.showResultText('数据格式不符合要求');
            }
        }
    },

    beforerender:function(t){
        this.renderLoginStatus(t);
    },

    renderLoginStatus:function(t){
        var loginStatus = Ext.getCmp('loginStatus');
        if(loginStatus){
             t.dockedItems.items[0].add(loginStatus);
        }else{
            t.dockedItems.items[0].add(Ext.create('SoftwareTest.view.student.LoginStatus'));
            if(localStorage.getItem('isLogin')=='true'){
                Ext.Ajax.request({
                    url:SoftwareTest.server+'student/isLogin.do',
                    success:function(response){
                        if(response.responseText){
                            Ext.getCmp('login').setHidden(true);
                            Ext.getCmp('logout').setHidden(false);
                            var tmp = Ext.getCmp('studentId');
                            tmp.setText(response.responseText);
                            tmp.setHidden(false);
                            localStorage.setItem('isLogin',true);
                            localStorage.setItem('studentId',response.responseText);
                        }else{
                            localStorage.setItem('isLogin',false);
                            localStorage.setItem('studentId','');
                        }
                    }
                });
            }
        }
    }
});
