Ext.application({
    name: 'OC', // namespace
    requires: ['Ext.container.Viewport', 
               'Ext.util.Point',
               'Ext.layout.container.Border',
               'Ext.chart.series.Bar',
               'Ext.chart.axis.Numeric',
               'Ext.chart.axis.Category'
              ],
    appFolder: 'app',

    controllers: ['Mtree', 'Mgrid'], // couldn't find better name ;p

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region:'west',
                    xtype: 'objtree'
                },
                {
                    title: 'Main Content',
                    region: 'center',
                    items: [
                        {
                            region:'north',
                            xtype: 'objgrid'
                        },
                        {
                            region:'south',
                            title: 'Chart',
                            xtype: 'objchart'
                        },
                    ]
                }

            ]
        });
    }
});