Ext.define('SoftwareTest.model.StudentSubmissionModel', {
    extend: 'Ext.data.Model',
    alias: 'model.StudentSubmissionModel',

    idProperty: 'studentId',
    fields: [
        { name: 'studentid', type: 'string' },
        { name: 'submissionid', type: 'int' },
        { name: 'questionid', type:'int'},
        { name: 'questiontitle', type: 'string' },
        { name: 'score', type: 'int' },
        { name: 'submittime', type: 'string'}
    ]
});
