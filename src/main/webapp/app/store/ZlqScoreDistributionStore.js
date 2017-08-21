Ext.define('SoftwareTest.store.ZlqScoreDistributionStore', {
    extend: 'Ext.data.Store',
    alias: 'store.ZlqScoreDistributionStore',

    storeId: 'ZlqScoreDistributionStore',

    fields: ['score', 'count', 'proportion'],
    proxy: {
        type: 'ajax',
        api: {
            read: 'student/getScoreDistribution.do'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        }
    }
});