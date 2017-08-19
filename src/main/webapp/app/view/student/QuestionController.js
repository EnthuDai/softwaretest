Ext.define('SoftwareTest.view.student.QuestionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.student-question',

    showResultText: function (text) {
        this.showToast(Ext.String.format(text));
    },

    showToast: function (s) {
        Ext.toast({
            html: s,
            closable: false,
            align: 't',
            slideInDuration: 400,
            minWidth: 400
        });
    },
    rqts_reset: function () {
        Ext.getCmp('rqtsAnswer').setValue('');
    },

    rqtsSubmit: function () {
        if (!sessionStorage.isLogin || sessionStorage.isLogin === 'false') {
            this.showResultText('尚未登录，请先登录');
            Ext.create('SoftwareTest.view.student.LoginWindow').show();
        } else {
            var cmp = Ext.getCmp('rqtsAnswer');
            if (cmp.getValue() && cmp.isValid()) {
                var predata = sessionStorage.getItem('preRqts');
                if (predata === cmp.getValue()) {
                    this.showResultText('当前答案与上次提交重复');
                } else {
                    sessionStorage.setItem('preRqts', cmp.getValue());
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
                                        align: 'center',
                                        width: 580,
                                        store: {
                                            fields: ['WX', 'YX', 'CW', 'FG', 'CF', 'score'],
                                            data: res
                                        },
                                        columns: [
                                            {text: '无效等价类', align: 'center', dataIndex: 'WX'},
                                            {text: '有效等价类', align: 'center', dataIndex: 'YX'},
                                            {text: '错误数据', align: 'center', dataIndex: 'CW'},
                                            {text: '覆盖到的种类', align: 'center', dataIndex: 'FG'},
                                            {text: '重复的等价类', align: 'center', dataIndex: 'CF'},
                                            {text: '得分', align: 'center', dataIndex: 'score', flex: 0.5}
                                        ]
                                    }],
                                    buttons: [{
                                        text: '确定',
                                        handler: function () {
                                            this.up('window').close();
                                        }
                                    }]
                                }).show();
                            }
                        },
                        failure: function () {
                            Ext.Msg.alert('错误', '请检查网络状况或联系管理员');
                        }
                    });
                }
            } else {
                this.showResultText('数据格式不符合要求');
            }
        }
    },

    zlq_reset: function () {
        Ext.getCmp('zlqAnswer').setValue('');
    },

    zlqSubmit: function () {
        if (!sessionStorage.isLogin || sessionStorage.isLogin === 'false') {
            this.showResultText('尚未登录，请先登录');
            Ext.create('SoftwareTest.view.student.LoginWindow').show();
        } else {
            var cmp = Ext.getCmp('zlqAnswer');
            if (cmp.getValue() && cmp.isValid()) {
                var predata = sessionStorage.getItem('preZlq');
                if (predata === cmp.getValue()) {
                    this.showResultText('当前答案与上次提交重复');
                } else {
                    sessionStorage.setItem('preZlq', cmp.getValue());
                    Ext.Ajax.request({
                        url: SoftwareTest.server + 'question/zlq.do',
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
                                        align: 'center',
                                        width: 580,
                                        store: {
                                            fields: ['ZS', 'FG', 'YX', 'YLZS', 'FG', 'BAD', 'score'],
                                            data: res
                                        },
                                        columns: [
                                            {text: '需覆盖', align: 'center', dataIndex: 'ZS'},
                                            {text: '已覆盖', align: 'center', dataIndex: 'FG'},
                                            {text: '有效用例数', align: 'center', dataIndex: 'YLZS'},
                                            {text: '错误数据', align: 'center', dataIndex: 'BAD'},
                                            {text: '覆盖到的种类', align: 'center', dataIndex: 'FG'},
                                            {text: '得分', align: 'center', dataIndex: 'score', flex: 0.5}
                                        ]
                                    }],
                                    buttons: [{
                                        text: '确定',
                                        handler: function () {
                                            this.up('window').close();
                                        }
                                    }]
                                }).show();
                            }
                        },
                        failure: function () {
                            Ext.Msg.alert('错误', '请检查网络状况或联系管理员');
                        }
                    });
                }
            } else {
                this.showResultText('数据格式不符合要求');
            }
        }
    },

    logic_reset: function () {
        Ext.getCmp('statement').setValue();
        Ext.getCmp('branch').setValue();
        Ext.getCmp('condition').setValue();
        Ext.getCmp('branchCondition').setValue();
        Ext.getCmp('conditionAssemble').setValue();
        Ext.getCmp('path').setValue();
    },

    logicIsValid: function () {
        if (!Ext.getCmp('statement').isValid()) return false;
        if (!Ext.getCmp('branch').isValid()) return false;
        if (!Ext.getCmp('condition').isValid()) return false;
        if (!Ext.getCmp('branchCondition').isValid()) return false;
        if (!Ext.getCmp('conditionAssemble').isValid()) return false;
        if (!Ext.getCmp('path').isValid()) return false;
        return true;
    },

    logicSubmit: function (t) {
        var me = t;
        me.setDisabled(true);
        if (!sessionStorage.isLogin || sessionStorage.isLogin === 'false') {
            this.showResultText('尚未登录，请先登录');
            Ext.create('SoftwareTest.view.student.LoginWindow').show();
        } else {
            if (this.logicIsValid) {
                Ext.Ajax.request({
                    url: SoftwareTest.server + 'question/logic.do',
                    params: {
                        statement: Ext.getCmp('statement').getValue(),
                        branch: Ext.getCmp('branch').getValue(),
                        condition: Ext.getCmp('condition').getValue(),
                        branchCondition: Ext.getCmp('branchCondition').getValue(),
                        conditionAssemble: Ext.getCmp('conditionAssemble').getValue(),
                        path: Ext.getCmp('path').getValue()
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
                                    align: 'center',
                                    width: 700,
                                    store: {
                                        fields: ['statementScore', 'branchScore', 'conditionScore', 'branchConditionScore', 'conditionAssembleScore', 'path', 'score'],
                                        data: res
                                    },
                                    columns: [
                                        {text: '语句覆盖', align: 'center', dataIndex: 'statementScore',renderer:function(value){if(value) return '<font color="green">通过</font>';return '<font color="red">未通过</font>'}},
                                        {text: '分支覆盖', align: 'center', dataIndex: 'branchScore',renderer:function(value){if(value) return '<font color="green">通过</font>';return '<font color="red">未通过</font>'}},
                                        {text: '条件覆盖', align: 'center', dataIndex: 'conditionScore',renderer:function(value){if(value) return '<font color="green">通过</font>';return '<font color="red">未通过</font>'}},
                                        {text: '分支/条件覆盖', align: 'center', dataIndex: 'branchConditionScore',renderer:function(value){if(value) return '<font color="green">通过</font>';return '<font color="red">未通过</font>'}},
                                        {text: '条件组合覆盖', align: 'center', dataIndex: 'conditionAssembleScore',renderer:function(value){if(value) return '<font color="green">通过</font>';return '<font color="red">未通过</font>'}},
                                        {text: '路径覆盖', align: 'center', dataIndex: 'path',renderer:function(value){if(value) return '<font color="green">通过</font>';return '<font color="red">未通过</font>'}},
                                        {text: '得分', align: 'center', dataIndex: 'score', flex: 0.5}
                                    ]
                                }],
                                buttons: [{
                                    text: '确定',
                                    handler: function () {
                                        this.up('window').close();
                                    }
                                }]
                            }).show();
                            me.setDisabled(false);
                        }
                    },
                    failure: function () {
                        Ext.Msg.alert('错误', '请检查网络状况或联系管理员');
                        me.setDisabled(false);
                    }
                });

            } else {
                this.showResultText('数据格式不符合要求');
            }
        }
    },

    tabchange: function (tabPanel, newCard, oldCard) {
        // console.log(newCard.items);
        // this.renderLoginStatus(newCard.items);
    },

    beforerender: function (t) {
        this.renderLoginStatus(t);
    },

    renderLoginStatus: function (t) {
        var loginStatus = Ext.getCmp('loginStatus');
        if (loginStatus) {
            t.dockedItems.items[0].add(loginStatus);
        } else {
            t.dockedItems.items[0].add(Ext.create('SoftwareTest.view.student.LoginStatus'));
            if (sessionStorage.getItem('isLogin') === 'true') {
                Ext.Ajax.request({
                    url: SoftwareTest.server + 'student/isLogin.do',
                    success: function (response) {
                        if (response.responseText) {
                            Ext.getCmp('login').setHidden(true);
                            Ext.getCmp('logout').setHidden(false);
                            var tmp = Ext.getCmp('studentId');
                            tmp.setText(response.responseText);
                            tmp.setHidden(false);
                            sessionStorage.setItem('isLogin', true);
                            sessionStorage.setItem('studentId', response.responseText);
                        } else {
                            sessionStorage.setItem('isLogin', false);
                            sessionStorage.setItem('studentId', '');
                        }
                    }
                });
            }
        }
    }
});