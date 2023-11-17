import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

export interface VerifyTokenResponse {
  message: string;
}

@Component({
  selector: 'app-auth-two-factor',
  templateUrl: './auth-two-factor.component.html',
  styleUrls: ['./auth-two-factor.component.css']
})
export class AuthTwoFactorComponent {
  token: string = ''; 
  errorMessage: string = ''; 
  successMessage: string = '';

  constructor(private authService: AuthService) {}

  verifyToken() {
    this.authService.verifyTwoFactorToken(this.token).subscribe({
      next: (message: string) => { // agora a resposta é tratada como uma string
        this.successMessage = message;
        // Continue para a área protegida ou faça outra ação necessária
      },
      error: (error: Error) => {
        // Como estamos usando o tipo Error, a propriedade 'message' deve existir.
        // Se você quiser mais detalhes do erro HTTP, você pode precisar usar um tipo diferente
        this.errorMessage = error.message || 'Ocorreu um erro durante a verificação do token.';
        console.log(this.errorMessage);
      }
    });
  }
  
}
