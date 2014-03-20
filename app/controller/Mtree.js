Ext.define('OC.controller.Mtree', {
    extend: 'Ext.app.Controller',

    views: [
        'mtree.Tree'
    ],

    init: function() {
        this.control({
            'objtree': {
                itemclick: this.changeGrid
            }
        });
    },

    changeGrid: function(tree, record) {
        console.log('The object were clicked!' + record.get('text'));
    }
});