Ext.define('SoftwareTest.view.student.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',

    width:1000,

    id:'user',

    layout:{
        type:'vbox',
        align: 'center'
    },
    items:[{
        xtype:'panel',
        bodyStyle: 'background:rgba(239, 242, 245, 0.55); padding:10px;',
        height:100,
        width:'100%',
        layout:{
            type:'absolute'
        },
        items:[{
            x:10,
            y:10,
            xtype:'label',
            html:'<font size="4px">姓名</font>'
        }]
    }],

    listeners:{
        beforerender:function () {
            if (!sessionStorage.isLogin || sessionStorage.isLogin === 'false') {
                Ext.create('SoftwareTest.view.student.LoginWindow').show();
            }
            console.log('hh');
        }
    }
});