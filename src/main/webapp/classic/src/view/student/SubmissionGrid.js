
Ext.define('SoftwareTest.view.student.SubmissionGrid',{
    extend: 'Ext.grid.Panel',
    xtype:'submissiongrid',

    requires: [
        'SoftwareTest.view.student.SubmissionGridController',
        'SoftwareTest.view.student.SubmissionGridModel',
        'SoftwareTest.store.StudentSubmissionStore'
    ],

    controller: 'student-submissiongrid',
    viewModel: {
        type: 'student-submissiongrid'
    },
    store:{
        type:'StudentSubmissionStore'
    },
    emptyText:'暂无数据',
    columns:[
        {text:'题目',dataIndex:'questiontitle',flex:1},
        {text:'得分',dataIndex:'score',flex:1},
        {text:'提交时间',dataIndex:'submittime',flex:1}
    ],
    listeners:{
        beforerender:function(t){
            t.store.load({
                params:{
                    studentId:sessionStorage.getItem("studentId")
                }
            })
        }
    }
});
