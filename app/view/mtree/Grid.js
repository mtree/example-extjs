Ext.define('OC.view.mtree.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.objgrid',

    title: 'Grid',

    store: 'ExampleDataStore2',

    initComponent: function() {

    	this.columns = [
            {header: 'Week',  dataIndex: 'week',  flex: 1},
            {header: 'Day 1', dataIndex: '1', flex: 1},
            {header: 'Day 2', dataIndex: '2', flex: 1},
            {header: 'Day 3', dataIndex: '3', flex: 1},
            {header: 'Day 4', dataIndex: '4', flex: 1},
            {header: 'Day 5', dataIndex: '5', flex: 1},
            {header: 'Day 6', dataIndex: '6', flex: 1},
            {header: 'Day 7', dataIndex: '7', flex: 1}
        ];

        this.callParent(arguments);
    }
});