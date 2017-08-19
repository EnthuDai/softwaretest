
Ext.define('SoftwareTest.view.student.ChangePassword',{
    extend: 'Ext.window.Window',
    xtype:'change-password-win',

    requires: [
        'SoftwareTest.view.student.ChangePasswordController',
        'SoftwareTest.view.student.ChangePasswordModel'
    ],

    controller: 'student-changepassword',
    viewModel: {
        type: 'student-changepassword'
    },

    title:'修改密码',
    modal:true,
    id:'changPassWin',

    width:300,

    items:[{
        xtype:'form',
        padding:10,
        items:[{
            xtype:'textfield',
            name:'studentId',
            hidden:true,
            value:sessionStorage.getItem('studentId')
        },{
            xtype:'textfield',
            name:'oldPassword',
            labelAlign:'right',
            allowBlank:false,
            fieldLabel:'旧密码',
            inputType:'password'
        },{
            xtype:'textfield',
            name:'newPassword',
            id:'newPassword',
            labelAlign:'right',
            fieldLabel:'新密码',
            allowBlank:false,
            vtype:'confirmPassword',
            inputType:'password'
        },{
            xtype:'textfield',
            fieldLabel:'确认密码',
            allowBlank:false,
            labelAlign:'right',
            inputType:'password',
            submitValue:false
        }],
        buttons:[{
            text:'提交',
            handler:function(t){
                var form = t.ownerCt.ownerCt;
                if(!form.hasInvalidField()){
                    Ext.Ajax.request({
                        url:'student/changePassword.do',
                        params:form.getValues(),
                        success:function(response){
                            var res = Ext.JSON.decode(response.responseText);
                            if(!res.success) Ext.Msg.alert('错误','原密码不正确');
                            else form.ownerCt.close();
                        },
                        failure:function () {
                            Ext.Msg.alert('错误','网络错误');
                        }
                    })
                }
            }
        }]
    }],
    initComponent:function() {
        Ext.define('MyMonitor.form.field.VTypes', {
            override: 'Ext.form.field.VTypes',
            confirmPassword: function (value) {
                return Ext.getCmp('newPassword').getValue() === value;
            },
            confirmPasswordText: '密码不一致'
        });
        this.callParent(arguments);
    }


});
