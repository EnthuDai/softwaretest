/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'SoftwareTest',

    extend: 'SoftwareTest.Application',

    requires: [
        'SoftwareTest.view.student.Main',
        'SoftwareTest.view.admin.Login'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    // mainView: 'SoftwareTest.view.student.Main',

    //-------------------------------------------------------------------------
    // Most customizations should be made to SoftwareTest.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

    init:function(){
        Ext.apply(SoftwareTest,{server :'/'});
    },
    launch:function(){
        var me = this;
        if(location.href.indexOf('admin') != -1){
            me.setMainView('SoftwareTest.view.admin.Login');
            console.log('1');
        }else{
            me.setMainView('SoftwareTest.view.student.Main');
        }
    }
});
