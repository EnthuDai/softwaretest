Ext.define('SoftwareTest.store.StudentSubmissionStore', {
    extend: 'Ext.data.Store',
    alias:'store.StudentSubmissionStore',

    storeId:'StudentSubmissionStore',


    model:'SoftwareTest.model.StudentSubmissionModel',
    autoLoad: true,
    pageSize: 10,
    proxy:{
        type:'ajax',
        api:{
            read:'student/getSubmission.do'
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