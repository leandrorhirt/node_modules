"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./contact/index");
var index_3 = require("./login/index");
var index_4 = require("./register/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent },
    // { path: 'contato', component: ContactComponent, canActivate: [AuthGuard] },   (canActivate para validar login)
    { path: 'contato', component: index_2.ContactComponent },
    { path: 'login', component: index_3.LoginComponent },
    { path: 'cadastro', component: index_4.RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map