Ext.define('OC.view.mtree.Tree', {
    extend: 'Ext.tree.Panel', // fix it
    alias: 'widget.objtree',

    title: 'Obj tree',
    width: 200,

    store: 'ExampleDataStore',

    initComponent: function() {

        this.callParent(arguments);
    }
});