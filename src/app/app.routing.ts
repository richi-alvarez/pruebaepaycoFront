import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { WhalletRecargaComponent } from './components/whallet-recarga/whallet-recarga.component';
import { WhalletConsultaComponent } from './components/whallet-consulta/whallet-consulta.component';
import { WhalletPagarComponent } from './components/whallet-pagar/whallet-pagar.component';
import { IdentityGuard } from './services/identity.guard';

const appRoutes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'inicio',component: HomeComponent},
    {path: 'login',component: LoginComponent},
    {path: 'logout/:sure',component: LoginComponent},
    {path: 'recargar',component: WhalletRecargaComponent,canActivate: [IdentityGuard]},
    {path: 'consulta',component: WhalletConsultaComponent,canActivate: [IdentityGuard]},
    {path: 'pago',component: WhalletPagarComponent,canActivate: [IdentityGuard]},
    {path: 'registro',component: RegisterComponent},
    {path: '**',component: ErrorComponent}

];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);