Ext.define('OC.controller.Mgrid', {
	extend: 'Ext.app.Controller',

	views: ['mtree.Grid', 'mtree.Chart'],
    models: ['ExampleDataModel2'],
    stores: ['ExampleDataStore2', 'ChartStore'],


    init: function() {
        this.control({
            'objgrid': {
                itemclick: this.loadChart
            }
        });
    },

    loadChart: function(grid, record) {
        var store = Ext.getStore('ChartStore');

        // Translate object list for a Chart.
        var current_days = Object.keys(record.raw).map(
            function (k) {
                return {"day": +k, "temp": +record.raw[k]}; 
            }
        );

        // Dirty fix for NaN (week key)
        delete current_days[7];

        store.removeAll();
        for (var key in current_days) {
            store.loadRawData(current_days[key], true);
        }
    }
});