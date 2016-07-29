"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var contact_component_1 = require('./contact/contact.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map