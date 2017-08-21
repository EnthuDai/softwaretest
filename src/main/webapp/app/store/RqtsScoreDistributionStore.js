Ext.define('SoftwareTest.store.RqtsScoreDistributionStore', {
    extend: 'Ext.data.Store',
    alias: 'store.RqtsScoreDistributionStore',

    storeId: 'RqtsScoreDistributionStore',

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