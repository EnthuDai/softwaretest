Ext.define('SoftwareTest.store.SystemInfoStore', {
    extend: 'Ext.data.Store',
    alias: 'store.SystemInfoStore',

    storeId: 'SystemInfoStore',
    autoLoad: true,
    fields: [
        { name : 'key'    },
        { name : 'value' }
    ],
    proxy: {
        type: 'ajax',
        filterParam : undefined,
        limitParam  : undefined,
        startParam  : undefined,
        pageParam   : undefined,
        api: {
            read: 'system/getSystemInfo.do'
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});