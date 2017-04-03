import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { ContactComponent } from './contact/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
 // { path: 'contato', component: ContactComponent, canActivate: [AuthGuard] },   (canActivate para validar login)
    { path: 'contato', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);