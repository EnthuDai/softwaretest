Ext.define('SoftwareTest.view.admin.StudentGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-studentgrid',


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
        console.log(majorResult);
        console.log(nameResult);
        Ext.getCmp('major_filter_box').clearValue();
        Ext.getCmp('major_filter_box').setStore(majorResult);
        Ext.getCmp('name_filter_box').clearValue();
        Ext.getCmp('name_filter_box').setStore(nameResult);
    },
    
    major_select:function (combo) {
        console.log(combo.getValue());
        var session = Ext.getCmp('session_filter_box').getValue();
        var data = Ext.getStore('ClassStore').getData();
        var nameResult = [];
        var hits2 = {};
        for(var i=0;i<data.length;i++){
            var temp = Ext.getStore('ClassStore').getData().items[i];
            if(temp.data.major===combo.getValue()){
                console.log(session);
                if(session && session !== temp.data.session) {
                    console.log(session);
                    console.log(temp.data.session);
                    console.log(session === temp.data.session);
                    continue;
                }
                if(!hits2[temp.get('name')]){
                    hits2[temp.get('name')] = true;
                    nameResult.push(temp.get('name'));
                }
            }
        }
        Ext.getCmp('name_filter_box').clearValue();
        Ext.getCmp('name_filter_box').setStore(nameResult);
        console.log(nameResult);
    },
    
    name_select:function () {
        
    }

});
