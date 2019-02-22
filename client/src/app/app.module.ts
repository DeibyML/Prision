import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JuezComponent } from './components/juez/juez.component';
import { CeldaComponent } from './components/celda/celda.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './routes';

// Services
import { PrisioneroService } from './services/prisionero.service';
import { CondenaService } from './services/condena.service';

// Components
import { HomeComponent } from './components/home/home.component';
import { BatallasComponent } from './components/batallas/batallas.component';
import { PrisioneroComponent } from './components/prisionero/prisionero.component';
import { CreatePrisioneroComponent } from './components/prisionero/create-prisionero/create-prisionero.component';
import { CondenaComponent } from './components/condena/condena.component';
import { CreateCondenaComponent } from './components/condena/create-condena/create-condena.component';
import { GuardianComponent } from './components/guardian/guardian.component';
import { CreateGuardianComponent } from './components/guardian/create-guardian/create-guardian.component';
import { PeleasComponent } from './components/peleas/peleas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrisioneroComponent,
    CondenaComponent,
    CreateCondenaComponent,
    JuezComponent,
    CeldaComponent,
    GuardianComponent,
    HomeComponent,
    BatallasComponent,
    CreatePrisioneroComponent,
    CreateGuardianComponent,
    CreateCondenaComponent,
    PeleasComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PrisioneroService,
    CondenaService
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
