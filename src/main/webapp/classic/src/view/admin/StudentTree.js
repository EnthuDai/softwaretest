
Ext.define('SoftwareTest.view.admin.StudentTree',{
	extend:'Ext.tree.Panel',
	alias:'widget.coachtree',
	rootVisible: false,
	expanded: true,
	id:'coach',
	root:{
		text:'教练管理',
		children:[{
			text:'教练信息管理',
			leaf:true
		}]
	}
});