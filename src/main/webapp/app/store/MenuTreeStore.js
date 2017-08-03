Ext.define('SoftwareTest.store.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',

    root: {
        text: 'First Component',
        expanded: true,
        children: [{text: 'Child'}]
    }
});
