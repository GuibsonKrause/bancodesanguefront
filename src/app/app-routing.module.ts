import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoImportComponent } from './candidatos/candidato-import/candidato-import.component';

const routes: Routes = [{ path: '', component: CandidatoImportComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
