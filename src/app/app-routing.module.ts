import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatoImportComponent } from './candidatos/candidato-import/candidato-import.component';
import { AuthTwoFactorComponent } from './auth-two-factor/auth-two-factor.component';

const routes: Routes = [
  { path: 'two-factor-auth', component: AuthTwoFactorComponent },
  { path: '', component: CandidatoImportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
