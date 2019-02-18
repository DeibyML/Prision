import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrisioneroComponent } from './components/prisionero/prisionero.component';
import { CondenaComponent } from './components/condena/condena.component';
import { JuezComponent } from './components/juez/juez.component';
import { CeldaComponent } from './components/celda/celda.component';
import { GuardianComponent } from './components/guardian/guardian.component';


@NgModule({
  declarations: [
    AppComponent,
    PrisioneroComponent,
    CondenaComponent,
    JuezComponent,
    CeldaComponent,
    GuardianComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
