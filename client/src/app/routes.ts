import { Routes, RouterModule } from '@angular/router';
import { PrisioneroComponent } from './components/prisionero/prisionero.component';
import { HomeComponent } from './components/home/home.component';
import { CondenaComponent } from './components/condena/condena.component';
import { GuardianComponent } from './components/guardian/guardian.component';
import { NgModule } from '@angular/core';
import { CeldaComponent } from './components/celda/celda.component';
import { BatallasComponent } from './components/batallas/batallas.component';

const appRoutes: Routes = [
    {
        path: 'prisioneros',
        component: PrisioneroComponent
    },
    {
      path: 'batallas',
      component: BatallasComponent
    },
    {
        path: 'condenas',
        component: CondenaComponent
    },
    {
        path: 'celdas',
        component: CeldaComponent
    },
    {
        path: 'guardianes',
        component: GuardianComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',   redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**', component: HomeComponent
    }
];


@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: false, // <-- debugging purposes only
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })

export class AppRoutingModule { }
