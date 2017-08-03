Ext.define('SoftwareTest.view.student.Rqts',{
    extend: 'Ext.panel.Panel',
    xtype:'rqts',

    requires: [
        'SoftwareTest.view.student.QuestionController',
        'SoftwareTest.view.student.MainModel',
        'SoftwareTest.view.student.LoginStatus'
    ],

    controller: 'student-question',
    viewModel: {
        type: 'student.main'
    },
    layout:{
        type:'vbox',
        align:'center'
    },

    dockedItems:[{
        xtype:'toolbar',
        dock:'top',
        id:'loginToolBar',
        layout:'fit',
        width:'100%',
        padding:'0 20 0 0',
        height:50
    }],

    items:[{
        xtype:'panel',
        width:'90%',
        margin:'10 0 0 0',
        // height:'100%',
        layout:{
            type:'vbox',
            pack:'start'
        },
        items:[{
            xtype:'label',
            bind:{
                html:'题目名称:{questionName1}'
            },
            height:36,
            margin:3,
            style:{
                fontSize:'24px'
            }
        },{
            xtype:'label',
            bind:{
                text:'题目描述:'
            },
            height:36,
            margin:3,
            style:{
                fontSize:'24px'
            }
        },{
            xtype:'textarea',
            ui:'rqts',
            width:'100%',
            height:'auto',
            // readOnly:true,
            bind:{
                value:'{questionDescription1}'
            }
        },{
            xtype:'label',
            bind:{
                text:'用例输入区域:'
            },
            height:36,
            margin:3,
            style:{
                fontSize:'24px'
            }
        },{
            xtype:'textarea',
            width:'100%',
            height:250,
            id:'rqtsAnswer',
            emptyText:"多个用例用半角分号 ; 隔开,例如2012-1-1;2012-1-2",
            vtype:'rqts'
        }]
    },{
        xtype:'panel',
        width:'90%',
        padding:'0 5 0 0',
        layout:'hbox',
        items:[{
            xtype: 'tbfill'
        }, {
            xtype:'button',
            text:'重置',
            scale:'medium',
            handler:'rqts_reset'
        },{
            xtype:'tbspacer',
            width:8
        },{
            xtype:'button',
            text:'提交',
            scale:'medium',
            handler:'rqtsSubmit'
        }]
    }],
    listeners:{
        beforerender:'beforerender'
    },

    initComponent:function(){
        Ext.define('SoftwareTest.form.field.VTypes',{
            override: 'Ext.form.field.VTypes',
            rqts:function(value){
                return this.rqtsTest.test(value);
            },
            rqtsTest:/^\d+|-|;$/,
            rqtsMask:/^\d+|-|;$/,
            rqtsText:'出现非法字符'
        });
        this.callParent(arguments);
    }
});
