Ext.define('OC.store.ExampleDataStore', {
    extend: 'Ext.data.TreeStore',
    model: 'OC.model.ExampleDataModel',

    proxy: {
		type: 'ajax', // Because it's a cross-domain request
		url : './app/data/tree.json',
		reader:{
			type: 'json'
		}
	},
	root: { 
		id: 'root',
		expanded: true
	}
});