Ext.define('SoftwareTest.view.student.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',

    width:1000,

    id:'user',

    layout:{
        type:'vbox',
        align: 'center'
    },
    items:[{
        xtype:'panel',
        bodyStyle: 'background:rgba(239, 242, 245, 0.55); padding:10px;',
        height:100,
        width:'80%',
        layout:{
            type:'absolute'
        },
        items:[{
            x:10,
            y:15,
            xtype:'label',
            html:'<font size="4px">姓名:</font>'
        },{
            x:60,
            y:15,
            xtype:'label',
            id:'user_name_label',
            html:'<font size="4px" color="grey">'+sessionStorage.getItem('studentName')+'</font>'
        },{
            x:10,
            y:55,
            xtype:'label',
            id:'user_session_label',
            html:'<font size="2px" color="grey">'+sessionStorage.getItem('session')+'级</font>'
        },{
            x:60,
            y:55,
            xtype:'label',
            id:'user_major_label',
            html:'<font size="2px" color="grey">'+sessionStorage.getItem("major")+'专业</font>'
        },{
            x:170,
            y:55,
            xtype:'label',
            id:'user_className_label',
            html:'<font size="2px">'+sessionStorage.getItem("className")+'</font>'
        },{
            x:800,
            y:10,
            xtype:'button',
            ui:'changePassword_button',
            scale:'small',
            text:'修改密码',
            handler:function(){
                Ext.create({xtype:'change-password-win'}).show();}
        },{
            x:800,
            y:50,
            ui:'logout_button',
            cls:'but1',
            scale:'small',
            xtype:'button',
            text:'退出登录',
            handler:function(){
                Ext.Msg.confirm('提示','确定注销当前用户？',function(b){
                    if(b==='yes'){
                        Ext.Ajax.request({
                            url:SoftwareTest.server+'student/logout.do',
                            success:function(response){
                                var res = Ext.JSON.decode(response.responseText);
                                if(res.success){
                                    Ext.getCmp('login').setHidden(false);
                                    Ext.getCmp('logout').setHidden(true);
                                    Ext.getCmp('studentId').setHidden(true);
                                    sessionStorage.setItem("isLogin",true);
                                    sessionStorage.setItem("isLogin",false);
                                    // SoftwareTest.apply(SoftwareTest,{isLogin:false});
                                    Ext.getCmp('user').close();
                                    sessionStorage.clear();
                                }else{
                                    console.log('注销失败');
                                }
                            },
                            failure:function(){
                                Ext.Msg.alert('错误','请检查网络状况或联系管理员');
                            }
                        })
                    }
                });
            }
        }]
    },{
        xtype:'panel',
        height:120,
        width:'100%',
        // bodyStyle: 'background:#d4d9dc;',
        layout:'column',
        // border:true,
        defaults:{
            height:120,
            margin:10
            // bodyStyle: 'background:#d4d9dc;'
        },
        items:[{
            columnWidth:0.2
        },{
            columnWidth: 0.2,
            xtype:'panel',
            layout:{
                type:'vbox',
                align:'middle',
                pack:'center'
            },
            items:[{
                xtype:'label',
                html:'<font size="4px" color="#bababa">日期推算</font>'
            },{
                xtype:'label',
                padding:20,
                id:'score1'
            }]
        },{
            columnWidth: 0.2,
            xtype:'panel',
            layout:{
                type:'vbox',
                align:'middle',
                pack:'center'
            },
            items:[{
                xtype:'label',
                html:'<font size="4px" color="#bababa">找零钱</font>'
            },{
                xtype:'label',
                padding:20,
                id:'score2'
            }]
        },{
            columnWidth:0.2,
            xtype:'panel',
            layout:{
                type:'vbox',
                align:'center',
                pack:'center'
            },
            items:[{
                xtype:'label',
                html:'<font size="4px" color="#bababa">逻辑覆盖</font>'
            }, {
                xtype: 'label',
                padding: 20,
                id: 'score3'
            }]
        },{
            columnWidth:0.2
        }]
    },{
        xtype:'submissiongrid',
        title:'最近提交记录',
        width:'80%',
        height:400
    }],

    listeners:{
        beforerender:function(){
            console.log('nei bu');
            Ext.getCmp('user_name_label').setHtml('<font size="4px" color="grey">'+sessionStorage.getItem('studentName')+'</font>');
            Ext.getCmp('user_session_label').setHtml('<font size="2px" color="grey">'+sessionStorage.getItem('session')+'级</font>');
            Ext.getCmp('user_major_label').setHtml('<font size="2px" color="grey">'+sessionStorage.getItem('major')+'专业</font>');
            Ext.getCmp('user_className_label').setHtml('<font size="2px" color="grey">'+sessionStorage.getItem('className')+'</font>');
            Ext.Ajax.request({
                url:'student/getScoreById.do',
                params:{
                    studentId:sessionStorage.getItem("studentId"),
                    questionId:1
                },
                success:function (response) {
                    Ext.getCmp('score1').setHtml('<font size="5px">'+response.responseText+'</font>');
                }
            });
            Ext.Ajax.request({
                    url:'student/getScoreById.do',
                    params:{
                        studentId:sessionStorage.getItem("studentId"),
                        questionId:2
                    },
                    success:function (response) {
                        Ext.getCmp('score2').setHtml('<font size="5px">'+response.responseText+'</font>');
                    }
                });
            Ext.Ajax.request({
                url:'student/getScoreById.do',
                params:{
                    studentId:sessionStorage.getItem("studentId"),
                    questionId:3
                },
                success:function (response) {
                    Ext.getCmp('score3').setHtml('<font size="5px">'+response.responseText+'</font>');
                }
            })

        }
    }
});