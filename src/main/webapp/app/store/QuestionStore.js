Ext.define('SoftwareTest.store.QuestionStore', {
    extend: 'Ext.data.Store',
    alias:'store.QuestionStore',
    storeId:'QuestionStore',

    model:'SoftwareTest.model.ClassModel',

    fields: [
        'id', 'title'
    ],

    data: { data: [
        { id: 1, title: '日期推算' },
        { id: 2, title: '找零钱'},
        { id: 3, title: '逻辑覆盖'}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});
