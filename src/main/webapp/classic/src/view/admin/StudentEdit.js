
Ext.define('SoftwareTest.view.admin.StudentEdit',{
    extend: 'Ext.window.Window',
    alias: 'widget.studentedit',

    requires: [
        'SoftwareTest.view.admin.StudentEditController',
        'SoftwareTest.view.admin.StudentEditModel',
        'SoftwareTest.view.admin.StudentGrid'
    ],

    controller: 'admin-studentedit',
    viewModel: {
        type: 'admin-studentedit'
    },

    autoShow:true,
    modal:true,
    width:310,
    border:0,
    hello:'',
    items:[{
        xtype:'form',
        padding:'10 0 0 0',
        id:'studentform',
        items:[{
            xtype:'numberfield',
            name:'classId',
            id:'studentEdit_classId',
            hidden:true
        },{
            xtype:'textfield',
            msgTarget:'side',
            readOnly:true,
            id:'studentEdit_className',
            labelAlign:'right',
            disabled:true,
            fieldLabel:'班级'
        },{
            xtype:'textfield',
            allowBlank:false,
            id:'studentId',
            msgTarget:'side',
            name:'studentId',
            labelAlign:'right',
            fieldLabel:'学号'
        },{
            xtype:'textfield',
            name:'studentName',
            id:'studentName',
            allowBlank:false,
            msgTarget:'side',
            fieldLabel:'姓名',
            labelAlign:'right'
        }],
        buttons:[{
            text:'保存',
            handler:'save'
        },{
            text:'取消',
            handler:'cancel'
        }]
    }],
    listeners: {
        beforeRender: 'renderClass'
    }
});
