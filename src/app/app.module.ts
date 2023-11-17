// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatoImportComponent } from './candidatos/candidato-import/candidato-import.component';
import { CandidatoService } from './shared/services/candidato.service';

@NgModule({
  declarations: [AppComponent, CandidatoImportComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CandidatoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
