
Ext.define('SoftwareTest.view.student.Logic',{
    extend: 'Ext.panel.Panel',
    xtype:'logic',

    requires: [
        'SoftwareTest.view.student.QuestionController',
        'SoftwareTest.view.student.MainModel'
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
        layout:'fit',
        width:'100%',
        padding:'0 20 0 0',
        height:50
    }],

    items:[{
        xtype: 'panel',
        width: '90%',
        margin:'10 0 0 0',
        // height:'100%',
        layout: {
            type: 'hbox',
            pack: 'start'
        },
        items: [{
            xtype: 'panel',
            width:'50%',
            layout: {
                type: 'vbox',
                pack: 'start'
            },
            items: [{
                xtype: 'label',
                bind: {
                    html: '题目名称:{questionName3}'
                },
                height: 36,
                margin: 3,
                style: {
                    fontSize: '24px'
                }
            }, {
                xtype: 'label',
                bind: {
                    text: '题目描述:'
                },
                height: 36,
                margin: 3,
                style: {
                    fontSize: '24px'
                }
            },{
                xtype:'panel',
                width:'80%',
                ui:'rqts',
                padding:'0 0 10 0',
                height:'auto',
                // readOnly:true,
                bind:{
                    html:'{questionDescription3}'
                }
            },{
                xtype:'panel',
                ui:'rqts',
                scrollable:true,
                width:'80%',
                height:400,
                bind:{
                    html:'{code}'
                }
            }]
        },{
            xtype:'panel',
            width:'50%',
            height:550,
            layout:{
                type:'vbox',
                align:'center'
            },
            scrollable:true,
            defaults:{
                frame: true,
                collapsible: true,
                collapsed: true,
                layout: 'fit',
                width: '95%',
                height: 200,
                margin:'0 0 5 0'
            },
            items:[{
                xtype:'label',
                bind:{
                    text:'用例输入区域：'
                },
                height:36,
                margin:3,
                style:{
                    fontSize:'24px'
                }
            },{
                xtype:'panel',
                title:'语句覆盖',
                collapsed: false,
                items:[{
                    xtype:'textarea',
                    vtype:'logic',
                    id:'statement',
                    emptyText:'x，y之间用逗号‘,’分开，多个用例用分号‘;’分开,例如：2,30;3,7;22,1'
                }]
            },{
                xtype:'panel',
                title:'分支覆盖',
                items:[{
                    xtype:'textarea',
                    vtype:'logic',
                    id:'branch',
                    emptyText:'x，y之间用逗号‘,’分开，多个用例用分号‘;’分开,例如：2,30;3,7;22,1'
                }]
            },{
                xtype:'panel',
                title:'条件覆盖',
                items:[{
                    xtype:'textarea',
                    vtype:'logic',
                    id:'condition',
                    emptyText:'x，y之间用逗号‘,’分开，多个用例用分号‘;’分开,例如：2,30;3,7;22,1'
                }]
            },{
                xtype:'panel',
                title:'分支/条件覆盖',
                items:[{
                    xtype:'textarea',
                    vtype:'logic',
                    id:'branchCondition',
                    emptyText:'x，y之间用逗号‘,’分开，多个用例用分号‘;’分开,例如：2,30;3,7;22,1'
                }]
            },{
                xtype:'panel',
                title:'条件组合覆盖',
                items:[{
                    xtype:'textarea',
                    vtype:'logic',
                    id:'conditionAssemble',
                    emptyText:'x，y之间用逗号‘,’分开，多个用例用分号‘;’分开,例如：2,30;3,7;22,1'
                }]
            },{
                xtype:'panel',
                title:'路劲覆盖',
                items:[{
                    xtype:'textarea',
                    vtype:'logic',
                    id:'path',
                    emptyText:'x，y之间用逗号‘,’分开，多个用例用分号‘;’分开,例如：2,30;3,7;22,1'
                }]
            },{
                xtype:'panel',
                width:'90%',
                frame: false,
                collapsible: false,
                collapsed: false,
                height: 35,
                margin:'0 0 5 0',
                title:false,
                layout:'hbox',
                items:[{
                    xtype: 'tbfill'
                }, {
                    xtype:'button',
                    text:'重置',
                    scale:'medium',
                    handler:'logic_reset'
                },{
                    xtype:'tbspacer',
                    width:8
                },{
                    xtype:'button',
                    text:'提交',
                    scale:'medium',
                    handler:'logicSubmit'
                }]
            }]
        }]
    }],

    initComponent:function(){
        Ext.define('SoftwareTest.form.field.VTypes',{
            override: 'Ext.form.field.VTypes',
            logic:function(value){
                return this.rqtsTest.test(value);
            },
            logicTest:/^\d+|,|，|;/,
            logicMask:/^\d+|,|，|;/,
            logicText:'出现非法字符'
        });
        this.callParent(arguments);
    }
});
