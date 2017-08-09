
Ext.define('SoftwareTest.view.admin.ClassGrid',{
    extend: 'Ext.grid.Panel',
    alias:'widget.classgrid',

    requires: [
        'SoftwareTest.view.admin.ClassGridController',
        'SoftwareTest.view.admin.ClassGridModel',
        'SoftwareTest.store.ClassStore',
        'SoftwareTest.model.ClassModel'
    ],

    controller: 'admin-classgrid',
    viewModel: {
        type: 'admin-classgrid'
    },

    store:{
        type:'ClassStore'
    },
    model:'ClassModel',
    id:'classgrid',

    closable:true,
    tbar:[{
        xtype:'button',
        text:'添加',
        iconCls:'icon-add',
        handler:'add'
    },{
        xtype:'button',
        text:'修改',
        iconCls:'icon-edit',
        handler:'edit'
    },{
        xtype:'button',
        text:'删除',
        iconCls:'icon-remove',
        handler:'delete'
    }],
    dockedItems:[{
        xtype:'pagingtoolbar',
        store:'ClassStore',
        dock:'bottom'
    }],
    columns:[
        {text:'届',dataIndex:'session',flex:1},
        {text:'专业',dataIndex:'major',flex:1},
        {text:'班级名称',dataIndex:'name',flex:2},
        {text:'人数', dataIndex:'count',flex:1}
    ],
    selModel:{
        type:'checkboxmodel',
        mode:'SINGLE',
        checkOnly:false
    }
});
