
Ext.define('SoftwareTest.view.student.LoginStatus',{
    extend: 'Ext.panel.Panel',
    alias:'widget.loginStatus',

    requires: [
        'SoftwareTest.view.student.LoginStatusController',
        'SoftwareTest.view.student.LoginStatusModel'
    ],

    controller: 'student-loginstatus',
    viewModel: {
        type: 'student-loginstatus'
    },

    height:50,
    id:'loginStatus',

    layout:{
        type:'hbox',
        pack:'end',
        align:'middle',
        padding:'5px'
    },
    items:[{
        xtype:'label',
        text:'你好，欢迎！'
    },{
        xtype: 'tbspacer',
        width: 8
    },{
        xtype:'label',
        id:'studentId',
        text:'',
        hidden:true
    },{
        xtype: 'tbspacer',
        width: 8
    },{
        xtype: 'component',
        id:'login',
        autoEl: {
            tag: 'a',
            href:'#',
            html: '登录'
        },
        listeners:{
            el:{
                click:'login',
                mouseenter:'loginMouseEnter',
                mouseout:'loginMouseOut'
            }
        }
    },{
        xtype: 'component',
        id:'logout',
        hidden:true,
        autoEl: {
            tag: 'a',
            href:'#',
            html: '注销'
        },
        listeners:{
            el:{
                click:'logout',
                mouseenter:'loginMouseEnter',
                mouseout:'loginMouseOut'
            }
        }
    },{
        xtype: 'tbspacer',
        width:8
    }, {
        xtype:'label',
        id:'name',
        text:''
    },{
        xtype: 'component',
        autoEl: {
            tag: 'a',
            href:'/index.html?admin',
            html: '管理员登录'
        },
        listeners:{
            el:{
                mouseenter:'loginMouseEnter',
                mouseout:'loginMouseOut'
            }
        }
    }],

    listeners:{
        //在渲染完毕后，动态设置qq昵称和qq头像
        afterrender:'afterRender',
        beforerender:'beforeRender'
    }
});
