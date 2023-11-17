import { Component } from '@angular/core';
import { CandidatoService } from 'src/app/shared/services/candidato.service';

@Component({
  selector: 'app-candidato-import',
  templateUrl: './candidato-import.component.html',
  styleUrls: ['./candidato-import.component.css'],
})
export class CandidatoImportComponent {
  selectedFile: File | null = null; 
  isLoading: boolean = false; 

  constructor(private candidatoService: CandidatoService) {}

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) { 
      this.isLoading = true; 
      this.candidatoService.importarCandidatos(this.selectedFile).subscribe(
        (resultado) => {
          this.isLoading = false; 
          //debugger
          console.log('Dados importados com sucesso:', resultado);
          // Aqui você pode adicionar uma mensagem de sucesso ou redirecionar o usuário
        },
        (error) => {
          this.isLoading = false; // Para o indicador de carregamento em caso de erro
          //debugger
          console.error('Erro ao importar dados:', error);
          // Aqui você pode adicionar uma mensagem de erro para o usuário
        }
      );
    } else {
      // Aqui você pode adicionar uma mensagem para avisar que nenhum arquivo foi selecionado
      console.warn('Por favor, selecione um arquivo para fazer upload.');
    }
  }
}
