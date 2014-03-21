Ext.define('OC.view.mtree.Chart', {
    extend: 'Ext.chart.Chart',
    alias: 'widget.objchart',

    width: 600,
    height: 300,
    animate: true,
    store: 'ChartStore',
    axes: [{
        type: 'Numeric',
        position: 'bottom',
        fields: ['temp'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title: 'Average temperature (C*)',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'left',
        fields: ['day'],
        title: 'Day'
    }],
    series: [{
        type: 'bar',
        axis: 'bottom',
        highlight: true,
        tips: {
          trackMouse: true,
          width: 140,
          height: 28,
          renderer: function(storeItem, item) {
            this.setTitle('Day ' + storeItem.get('day') + ': ' + storeItem.get('temp') + ' C*');
          }
        },
        label: {
          display: 'insideEnd',
            field: 'temp',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'horizontal',
            color: '#333',
            'text-anchor': 'middle'
        },
        xField: 'day',
        yField: ['temp']
    }],

    initComponent: function() {

        this.callParent(arguments);
    }
});