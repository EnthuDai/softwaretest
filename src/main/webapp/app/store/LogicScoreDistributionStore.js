Ext.define('SoftwareTest.store.LogicScoreDistributionStore', {
    extend: 'Ext.data.Store',
    alias: 'store.LogicScoreDistributionStore',

    storeId: 'LogicScoreDistributionStore',

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