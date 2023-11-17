import { AuthService } from "../shared/services/auth.service";

export class LoginComponent {
  loginData = {
      username: '',
      password: ''
  };

  // Variáveis para armazenar mensagens de sucesso ou erro
  successMessage: string | undefined;
  errorMessage: string | undefined;

  constructor(private authService: AuthService) {}

  onSubmit() {
      this.authService.login(this.loginData).subscribe({
          next: (response: any) => {
              this.successMessage = 'Login bem-sucedido!';
              localStorage.setItem('token', response.token); // Supondo que 'token' seja a propriedade na resposta

              // Redirecione o usuário para a área protegida ou atualize a interface do usuário conforme necessário
              // Por exemplo: this.router.navigate(['/home']);
          },
          error: (error: Error) => {
              // Se o back-end enviar um objeto de erro estruturado, você pode precisar ajustar a forma como lê a mensagem de erro
              this.errorMessage = error.message || 'Ocorreu um erro durante o login.';
              console.log(this.errorMessage);
          }
      });
  }
}
