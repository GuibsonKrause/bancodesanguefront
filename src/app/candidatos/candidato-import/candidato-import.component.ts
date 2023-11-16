import { Component } from '@angular/core';
import { CandidatoService } from '../shared/services/candidato.service';

@Component({
  selector: 'app-candidato-import',
  templateUrl: './candidato-import.component.html',
  styleUrls: ['./candidato-import.component.css']
})
export class CandidatoImportComponent {
  file: File | null = null;
  resultado: any = null; // Substitua 'any' pelo tipo adequado conforme o DTO definido

  constructor(private candidatoService: CandidatoService) {}

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  onSubmit(): void {
    if (this.file) {
      this.candidatoService.importarCandidatos(this.file).subscribe(
        (dto) => {
          this.resultado = dto;
        },
        (error) => {
          console.error('Erro ao enviar arquivo:', error);
        }
      );
    }
  }
}
