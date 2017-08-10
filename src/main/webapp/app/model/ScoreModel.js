Ext.define('SoftwareTest.model.ScoreModel', {
    extend: 'Ext.data.Model',
    alias: 'model.scoremodel',

    idProperty: 'studentId',
    fields: [
        { name: 'studentid', type: 'string' },
        { name: 'studentname', type: 'string' },
        { name: 'classid', type:'int'},
        { name: 'session', type: 'int' },
        { name: 'major', type: 'string' },
        { name: 'classname', type:'string'},
        { name: 'score', type:'int'},
        { name: 'questionid', type: 'int'}
    ]
});
