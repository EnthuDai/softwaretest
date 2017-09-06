
Ext.define('SoftwareTest.view.admin.AdminToolbar',{
    extend: 'Ext.toolbar.Toolbar',
    xtype:'admintoolbar',

    requires: [
        'SoftwareTest.view.admin.AdminToolbarController',
        'SoftwareTest.view.admin.AdminToolbarModel'
    ],

    style: {
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'red'
    },
    padding:'1',
    height:30,
    controller: 'admin-admintoolbar',
    viewModel: {
        type: 'admin-admintoolbar'
    },
    items:['用例分析系统后台管理',
        '->',{
            iconCls:'icon-role',
            id:'adminName'
        },{
            text:'退出后台',
            iconCls:'icon-quit',
            handler:function(){
                Ext.Msg.confirm('提示','确定退出？',function (b) {
                    if(b==='yes'){
                        sessionStorage.setItem('adminLogin',false);
                        window.location.href='index.html?admin';
                    }
                });
            }
    }],
    listeners:{
        beforeRender:'beforeRender'
    }
});
