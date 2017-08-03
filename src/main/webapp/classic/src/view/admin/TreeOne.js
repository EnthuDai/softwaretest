
Ext.define('SoftwareTest.view.admin.TreeOne',{
    extend:'Ext.tree.Panel',
    alias:'widget.studenttree',
    rootVisible: false,
    expanded: true,
    title:'学生管理',
    root:{
        text:'教练管理',
        children:[{
            text:'教练信息管理',
            leaf:true
        }]
    }
});