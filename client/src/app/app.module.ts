import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrisioneroComponent } from './components/prisionero/prisionero.component';
import { CondenaComponent } from './components/condena/condena.component';
import { JuezComponent } from './components/juez/juez.component';
import { CeldaComponent } from './components/celda/celda.component';
import { GuardianComponent } from './components/guardian/guardian.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './routes';

import { HomeComponent } from './components/home/home.component';

import { PrisioneroService } from './services/prisionero.service';
import { BatallasComponent } from './components/batallas/batallas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrisioneroComponent,
    CondenaComponent,
    JuezComponent,
    CeldaComponent,
    GuardianComponent,
    HomeComponent,
    BatallasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PrisioneroService
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
