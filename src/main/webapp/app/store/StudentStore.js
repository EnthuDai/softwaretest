Ext.define('SoftwareTest.store.StudentStore', {
    extend: 'Ext.data.Store',
    alias:'store.StudentStore',

    storeId:'StudentStore',


    model:'SoftwareTest.model.StudentModel',
    autoLoad: true,
    pageSize: 25,
    proxy:{
        type:'ajax',
        api:{
            read:'student/selectByClass.do',
            update:'student/update.do',
            create:'student/create.do',
            destroy:'student/delete.do'
        },
        actionMethods: {
            create : 'POST',
            read   : 'POST', // by default GET
            update : 'POST',
            destroy: 'POST'
        },
        reader:{
            type:'json',
            rootProperty:'data'	,
            successProperty:'success'
        }
    }
});