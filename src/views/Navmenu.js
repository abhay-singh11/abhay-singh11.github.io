var m = require('mithril');

class Link {
  constructor(name, route) {
    this.name = name;
    this.route = route;
  }
};

module.exports = {
    view: function() {
        var links = [
            new Link('Home', '/#!/'),
            new Link('Projects', '/#!/projects'),
            new Link('Research', '/#!/research'),
            new Link('Experience', '/#!/experience'),
            new Link('Publications', '/#!/publications'),
        ];

        var items = links.map(function(item) {
            return m('a', {
                href: item.route,
                class: 'pv1-ns f6 fw6 dim link black mr3 mr3-m mr4-l dib'
            }, item.name);
        });

        var nav = m('div', {class: 'flex justify-center'}, items);

        return m('nav', {
            class: 'ph3 ph5-ns w-100 bg-near-white pv3 mb3 mb5-ns bt bb b--black-10 overflow-auto'
        }, nav);
    }
};