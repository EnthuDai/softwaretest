Ext.define('SoftwareTest.view.admin.StudentGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.studentgrid',

    requires: [
        'SoftwareTest.view.admin.StudentGridController',
        'SoftwareTest.view.admin.StudentGridModel'
    ],

    controller: 'admin-studentgrid',
    viewModel: {
        type: 'admin-studentgrid'
    },

    store: {
        type: 'StudentStore'
    },
    closable: true,
    id: 'studentgrid',

    tbar: [{
        xtype: 'combobox',
        emptyText: '筛选届',
        reference:'session',
        publishes:'value',
        id: 'session_filter_box',
        width: 100,
        // fieldLabel: 'Select State',
        displayField: 'session',
        anchor: '-15',
        listeners: {
            select: 'session_select'
        },
        store: {
            type: 'ClassStore',
            listeners: {
                load: function (store) {
                    console.log('读取数据');
                    var hits = {};
                    store.filterBy(function (record) {
                        var name = record.get('session');
                        if (hits[name]) {
                            return false;
                        } else {
                            hits[name] = true;
                            return true;
                        }
                    })
                }
            }
        },
        queryParam: 'q',
        queryMode: 'local'
    }, {
        xtype: 'combobox',
        emptyText: '筛选专业',
        reference:'major',
        publishes:'value',
        id: 'major_filter_box',
        width: 130,
        displayField: 'major',
        anchor: '-15',
        listeners: {
            select: 'major_select'
        },
        store: {
            type: 'ClassStore',
            queryCaching: false,
            listeners: {
                load: function (store) {
                    var hits = {};
                    store.filterBy(function (record) {
                        var name = record.get('major');
                        if (hits[name]) {
                            return false;
                        } else {
                            hits[name] = true;
                            return true;
                        }
                    })
                }
            }
        },
        queryMode: 'local'
    }, {
        xtype: 'combobox',
        emptyText: '筛选班级',
        reference:'classes',
        publishes:'value',
        width: 130,
        displayField: 'name',
        id: 'name_filter_box',
        anchor: '-15',
        listeners: {
            select: 'name_select'
        },
        store: {
            type: 'ClassStore',
            queryCaching: false,
            listeners: {
                load: function (store) {
                    var hits = {};
                    store.filterBy(function (record) {
                        var name = record.get('name');
                        if (hits[name]) {
                            return false;
                        } else {
                            hits[name] = true;
                            return true;
                        }
                    })
                }
            }
        },
        queryParam: 'q',
        queryMode: 'local'
    }, {
        xtype: 'button',
        text: '添加',
        iconCls: 'icon-add',
        handler: 'add'
    }, {
        xtype: 'button',
        text: '修改',
        iconCls: 'icon-edit',
        handler: 'edit'
    }, {
        xtype: 'button',
        text: '删除',
        iconCls: 'icon-remove',
        handler: 'delete'
    }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'StudentStore',
        dock: 'bottom'
    }],
    columns: [
        {text: '学号', dataIndex: 'studentId', flex: 2},
        {text: '姓名', dataIndex: 'studentName', flex: 1},
        {text: '班级名称', dataIndex: 'className', flex: 1}

    ],
    selModel: {
        type: 'checkboxmodel',
        mode: 'SINGLE',
        checkOnly: false
    }
});
