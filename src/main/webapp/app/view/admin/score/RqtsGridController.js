Ext.define('SoftwareTest.view.admin.score.RqtsGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-score-rqtsgrid',

    session_select:function(combo){
        var data = Ext.getStore('ClassStore').getData();
        var majorResult=[];
        var nameResult = [];
        var hits1 = {};
        var hits2 = {};
        for(var i=0;i<data.length;i++){
            var temp = Ext.getStore('ClassStore').getData().getAt(i);
            if(temp.data.session===combo.getValue()){
                if(!hits1[temp.get('major')]){
                    hits1[temp.get('major')] = true;
                    majorResult.push(temp.get('major'));
                }
                if(!hits2[temp.get('name')]){
                    hits2[temp.get('name')] = true;
                    nameResult.push(temp.get('name'));
                }
            }
        }
        Ext.getCmp('score_major_filter_box').clearValue();
        Ext.getCmp('score_major_filter_box').setStore(majorResult);
        Ext.getCmp('score_name_filter_box').clearValue();
        Ext.getCmp('score_name_filter_box').setStore(nameResult);
        this.name_select();
    },

    major_select:function (combo) {
        var session = Ext.getCmp('score_session_filter_box').getValue();
        var data = Ext.getStore('ClassStore').getData();
        var nameResult = [];
        var hits2 = {};
        for(var i=0;i<data.length;i++){
            var temp = Ext.getStore('ClassStore').getData().items[i];
            if(temp.data.major===combo.getValue()){
                if(session && session !== temp.data.session) {
                    continue;
                }
                if(!hits2[temp.get('name')]){
                    hits2[temp.get('name')] = true;
                    nameResult.push(temp.get('name'));
                }
            }
        }
        Ext.getCmp('score_name_filter_box').clearValue();
        Ext.getCmp('score_name_filter_box').setStore(nameResult);
        this.name_select();
    },

    name_select:function () {
        this.question_select();
    },

    question_select:function(){
        var session = Ext.getCmp('score_session_filter_box').getValue();
        var major = Ext.getCmp('score_major_filter_box').getValue();
        var name = Ext.getCmp('score_name_filter_box').getValue();
        var title = Ext.getCmp('score_question_filter_box').getValue();
        if(title)
            var question =Ext.getCmp('score_question_filter_box').findRecordByValue( Ext.getCmp('score_question_filter_box').getValue()).data.id;
        // console.log(session+' '+major+' '+name);
        Ext.getStore('ScoreStore').load({
            params:{
                session:session,
                major:major,
                className:name,
                questionId:question
            }
        })
    }
});
