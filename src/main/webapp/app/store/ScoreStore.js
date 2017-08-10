Ext.define('SoftwareTest.store.ScoreStore', {
    extend: 'Ext.data.Store',
    alias:'store.ScoreStore',

    storeId:'ScoreStore',

    model:'SoftwareTest.model.ScoreModel',
    autoLoad: true,
    pageSize: 25,
    proxy:{
        type:'ajax',
        api:{
            read:'student/getScore.do'
        },
        actionMethods: {
            create : 'POST'
        },
        reader:{
            type:'json',
            rootProperty:'data'	,
            successProperty:'success'
        }
    }
});