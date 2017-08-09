Ext.define('SoftwareTest.model.StudentModel', {
    extend: 'Ext.data.Model',
    alias: 'model.studentmodel',

    idProperty: 'studentId',
    fields: [
        { name: 'studentId', type: 'string' },
        { name: 'studentName', type: 'string' },
        { name: 'classId', type:'int'},
        { name: 'session', type: 'int' },
        { name: 'major', type: 'string' },
        { name: 'className', type:'string'},
        { name: 'count', type:'int'}
    ]
});
