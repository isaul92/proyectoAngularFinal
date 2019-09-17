import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, Router} from  '@angular/router';
import {SobremiComponent}  from './components/sobremi/sobremi.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {CreateComponent} from './components/create/create.component';
import {ContactComponent} from './components/contact/contact.component';
import {ErrorComponent} from './components/error/error.component';
import {DetalleComponent} from './components/detalle/detalle.component';
const appRoutes : Routes=[
    {path:'home',component:SobremiComponent},
    {path:'sobre-mi',component:SobremiComponent},
    {path:'proyectos',component:ProjectsComponent},
    {path:'crear-proyecto',component:CreateComponent},
    {path:'contacto',component:ContactComponent},
    {path:'detalle/:id',component:DetalleComponent},
    {path:'**',component:ErrorComponent}
];

export const appRoutingProviders: any []=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);