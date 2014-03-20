Ext.define('OC.view.mtree.Tree', {
    extend: 'Ext.tree.Panel', // fix it
    alias: 'widget.objtree',

    title: 'Obj tree',
    width: 200,

    initComponent: function() {
        this.store = {
            root: {
                    text: 'Root',
                    expanded: true,
                    children: 
                    [
                        { text: '2013-11-10', leaf: true },
                        { text: '2013-11-08', leaf: true },
                        { text: '2013-11-02', leaf: true },
                        { text: '2013-11-10', leaf: true },
                        { text: '2013-11-08', leaf: true },
                        { text: '2013-11-02', leaf: true },
                        { text: '2013-11-10', leaf: true },
                        { text: '2013-11-08', leaf: true },
                        { text: '2013-11-02', leaf: true }
                    ]
                }
        };
        this.callParent(arguments);
    }
});