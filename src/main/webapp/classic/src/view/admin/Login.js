Ext.define('SoftwareTest.view.admin.Login',{
   extend:'Ext.panel.Panel',
    requires:['SoftwareTest.view.admin.LoginController'],

    controller:'admin-login',
    layout: {
        type: 'vbox',
        align: 'middle',
        pack: 'center'
    },
    items:[{
        xtype: 'panel',
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'center'
        },
        items: [{
            xtype: 'panel',
            width: 580,
            height: 320,
            layout: {
                type: 'vbox',
                align: 'begin',
                pack: 'center'
            },
            style: {
                marginTop: '100px'
            },
            bodyStyle: {
                background: 'url(/resources/pic/pic_4.png) no-repeat right top'
            }
        }, {
            xtype: 'panel',
            width: 334,
            height: 280,
            shadow: 'drop',
            shadowOffset: 12,
            border: true,
            style: {
                marginTop: '100px',
                marginLeft: '30px',
                // borderColor: 'red',
                // borderStyle: 'solid'
                borderRadius: '3px'
            },
            items: [{
                xtype: 'panel',
                border: true,
                ui: 'register_login',
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                },
                height: 50,
                items: [{
                    xtype: 'button',
                    id: 'login_button',
                    ui: 'login-register-select-button',
                    scale: 'large',
                    text: '用例分析系统管理员登录',
                    handler: 'login_select'
                }]
            }, {
                xtype: 'form',
                id: 'admin_login_form',
                layout: {
                    type: 'vbox',
                    align: 'middle'
                },
                items: [{
                    xtype: 'textfield',
                    emptyText: '输入用户名',
                    hideLabel: true,
                    name:'name',
                    ui: 'login-form',
                    width: 290,
                    style: {
                        marginTop: '30px'
                    }
                }, {
                    xtype: 'textfield',
                    inputType: 'password',
                    name:'password',
                    ui: 'login-form',
                    width: 290,
                    emptyText: '输入密码',
                    style: {
                        marginTop: '10px'
                    }
                }, {
                    xtype: 'button',
                    width: 290,
                    height: 39,
                    scale: 'large',
                    handler: 'loginSubmit',
                    text: '登录'
                }]
            }]
        }]
    }]
});