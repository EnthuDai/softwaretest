
Ext.define('SoftwareTest.view.admin.ClassEdit',{
    extend: 'Ext.window.Window',

    requires: [
        'SoftwareTest.view.admin.ClassEditController',
        'SoftwareTest.view.admin.ClassEditModel'
    ],

    controller: 'admin-classedit',
    viewModel: {
        type: 'admin-classedit'
    },

    autoShow:true,
    modal:true,
    width:310,
    border:0,
    items:[{
        xtype:'form',
        padding:'10 0 0 0',
        id:'classform',
        items:[{
            xtype:'textfield',
            allowBlank:true,
            msgTarget:'side',
            name:'id',
            fieldLabel:'id',
            emptyText:'无需输入',
            labelAlign:'right',
            hidden:true,
            readOnly:true
        },{
            xtype:'numberfield',
            allowBlank:false,
            id:'classsession',
            msgTarget:'side',
            name:'session',
            width:200,
            allowDecimals:false,
            minValue:14,//设置起始值
            maxValue:100,
            value:14,
            labelAlign:'right',
            fieldLabel:'届'
        },{
            xtype:'textfield',
            name:'major',
            id:'classmajor',
            allowBlank:false,
            msgTarget:'side',
            fieldLabel:'专业',
            labelAlign:'right'
        },{
            xtype:'textfield',
            name:'name',
            id:'classname',
            allowBlank:false,
            msgTarget:'side',
            fieldLabel:'班级名称',
            labelAlign:'right'
        }],
        buttons:[{
            text:'保存',
            handler:'save'
        },{
            text:'取消',
            handler:'cancel'
        }]
    }]
});
