Ext.define('SoftwareTest.model.ClassModel', {
    extend: 'Ext.data.Model',
    alias: 'model.classmodel',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'session', type: 'int' },
        { name: 'major', type: 'string' },
        { name: 'name', type: 'string' }
    ]
});
