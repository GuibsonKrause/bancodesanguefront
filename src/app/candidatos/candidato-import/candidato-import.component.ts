import { Component } from '@angular/core';
import { CandidatoService } from 'src/app/shared/services/candidato.service';

@Component({
  selector: 'app-candidato-import',
  templateUrl: './candidato-import.component.html',
  styleUrls: ['./candidato-import.component.css'],
})
export class CandidatoImportComponent {
  selectedFile!: File;

  constructor(private candidatoService: CandidatoService) {}

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    this.candidatoService.importarCandidatos(this.selectedFile).subscribe(
      (response) => {
        console.log(response);
        // Aqui você pode manipular a resposta
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
