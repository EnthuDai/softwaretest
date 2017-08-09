Ext.define('SoftwareTest.store.ClassStore', {
    extend: 'Ext.data.Store',
    alias:'store.ClassStore',
    storeId:'ClassStore',

    model:'SoftwareTest.model.ClassModel',

    autoLoad: true,
    pageSize: 0,
    proxy:{
        type:'ajax',
        api:{
            read:'admin/classes/get.do',
            update:'admin/classes/update.do',
            create:'admin/classes/create.do',
            destroy:'admin/classes/delete.do'
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
