var m = require('mithril')
var Navmenu = require('./Navmenu')

module.exports = {
    view: function() {
        var logo = m('div', {class: 'db v-mid tc flex justify-center w-100'},
            m('a', {href: '/', class: 'f5 f3-ns fw6 link dim white'},
                'ABHAY SINGH BHADORIYA'
            )
        );

        var topbar = m('div', {class: 'pa3 ph5-ns bg-near-black'}, logo);

        return m('header', {class: 'w-100 fixed z-3', id: 'header'}, 
            [topbar, m(Navmenu)])
    }
}