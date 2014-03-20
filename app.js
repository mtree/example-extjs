Ext.application({
    name: 'OC', // namespace
    requires: ['Ext.container.Viewport'],
    appFolder: 'app',

    controllers: ['Mtree'], // couldn't find better name ;p

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'objtree'
                }            
            ]
        });
    }
});