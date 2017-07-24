
Ext.define('SoftwareTest.view.student.LoginWindow',{
    extend: 'Ext.window.Window',
    alias: 'widget.loginwindow',

    requires: [
        'SoftwareTest.view.student.LoginWindowController',
        'SoftwareTest.view.student.LoginWindowModel'
    ],

    controller: 'student-loginwindow',
    viewModel: {
        type: 'student-loginwindow'
    },

    width:300,
    height:200,
    modal:true,
    resizable:false,

    header:{
        title:'登录'
    },

    items:[{
        xtype:'form',
        id:'loginForm',
        layout:{
            type:'vbox',
            align:'center'
        },
        style:{
            marginTop:'25px'
        },
        items:[{
            xtype:'textfield',
            fieldLabel:'学号',
            name:'id',
            labelAlign:'right',
            labelWidth:40,
            emptyText:'请输入10位数学号'
        },{
            xtype:'textfield',
            fieldLabel:'密码',
            name:'password',
            labelAlign:'right',
            labelWidth:40,
            inputType:'password',
            emptyText:'默认密码为123456'
        },{
            xtype:'panel',
            layout:{
                type:'hbox',
                align:'center'
            },
            items:[{
                xtype:'button',
                text:'登录',
                scale:'medium',
                handler:'submit'
            },{
                xtype: 'tbspacer',
                width: 30
            },{
                xtype:'button',
                text:'重置',
                scale:'medium',
                handler:'reset' 
            }]
        }]
    }]
});
