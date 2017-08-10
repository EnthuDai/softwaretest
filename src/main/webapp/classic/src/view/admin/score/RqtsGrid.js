
Ext.define('SoftwareTest.view.admin.score.RqtsGrid',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.rqtsgrid',

    requires: [
        'SoftwareTest.view.admin.score.RqtsGridController',
        'SoftwareTest.view.admin.score.RqtsGridModel'
    ],

    controller: 'admin-score-rqtsgrid',
    viewModel: {
        type: 'admin-score-rqtsgrid'
    },

    id:'reqsgrid',
    closable:true,
    store:{
        type:'ScoreStore'
    },

    tbar: [{
        xtype: 'combobox',
        emptyText: '筛选届',
        reference:'session',
        publishes:'value',
        id: 'score_session_filter_box',
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
        id: 'score_major_filter_box',
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
        id: 'score_name_filter_box',
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
        xtype:'combobox',
        emptyText: '筛选题目',
        width: 130,
        displayField: 'title',
        id: 'score_question_filter_box',
        anchor: '-15',
        listeners: {
            select: 'question_select'
        },
        store: {
            type: 'QuestionStore'
        },
        queryMode: 'local'
    },{
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
        store: 'ScoreStore',
        dock: 'bottom'
    }],
    columns: [
        {text: '学号', dataIndex: 'studentid', flex: 1},
        {text: '姓名', dataIndex: 'studentname', flex: 1},
        {text: '班级名称', dataIndex: 'classname', flex: 1},
        {text: '题目', dataIndex: 'questionid', flex: 1,renderer:function(value){
            if(value===1)
                return '日期推算';
            else if(value === 2)
                return '找零钱';
            else if(value === 3)
                return '逻辑覆盖'
        }},
        {text: '得分', dataIndex: 'score', flex: 1}
    ],
    selModel: {
        type: 'checkboxmodel',
        mode: 'SINGLE',
        checkOnly: false
    }
});
