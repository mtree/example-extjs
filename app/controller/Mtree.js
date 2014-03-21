Ext.define('OC.controller.Mtree', {
    require: 'OC.stores.ExampleDataStore2',
    extend: 'Ext.app.Controller',

    views: ['mtree.Tree'],
    models: ['ExampleDataModel'],
    stores: ['ExampleDataStore'],


    init: function() {
        this.control({
             'objtree': {
                  itemdblclick: this.changeGrid
             }
        });
    },

    changeGrid: function(tree, record, index) {
        var store = Ext.getStore('ExampleDataStore2');

        store.removeAll();
        for (var key in record.raw['daytemp']) {
            store.loadRawData(record.raw['daytemp'][key], true); // pewnie mozna to zrobic lepiej (np. z Ext.each)
        }
    }
});