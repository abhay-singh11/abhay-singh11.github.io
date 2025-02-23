var m = require('mithril');
var Layout = require('./views/Layout');
const Home = require('./views/Home')
const PublicationBox = require('./views/PublicationBox');
const ExperienceBox = require('./views/ExperienceBox');
const ResearchBox = require('./views/ResearchBox');
// const StudentBox = require('./views/StudentBox');

// Details on how the following route is designed can be found at:
// https://mithril.js.org/route.html#advanced-component-resolution
function buildRouteResolver(component) {
  return {
    render: function() {
      return m(Layout, m(component))
    }
  }
};

m.route(document.body, '/#!', {
  // Ensure the base route uses hash-based routing
  '/': buildRouteResolver(Home),
  '/research': buildRouteResolver(ResearchBox),
  '/experience': buildRouteResolver(ExperienceBox),
  '/publications': buildRouteResolver(PublicationBox)
});