import { Component } from '@angular/core';
import { CandidatoService } from 'src/app/shared/services/candidato.service';

@Component({
  selector: 'app-candidato-import',
  templateUrl: './candidato-import.component.html',
  styleUrls: ['./candidato-import.component.css'],
})
export class CandidatoImportComponent {
  selectedFile: File | null = null;
  isLoading = false;
  resultado: any = null;

  constructor(private candidatoService: CandidatoService) {}

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.isLoading = true;
      this.candidatoService.importarCandidatos(this.selectedFile).subscribe({
        next: (resultado) => {
          this.isLoading = false;
          this.resultado = resultado;
        },
        error: (error) => {
          this.isLoading = false;
          console.error('Erro ao importar dados:', error);
        },
      });
    } else {
      console.warn('Por favor, selecione um arquivo para fazer upload.');
    }
  }

  getResultArray(data: any): Array<any> {
    return [
      { title: 'Candidatos Por Estado', data: data.candidatosPorEstado },
      {
        title: 'IMC Médio Por Faixa Etária',
        data: data.imcMedioPorFaixaEtaria,
      },
      {
        title: 'Percentual de Obesos',
        data: {
          Homens: `${data.percentualObesosHomens}%`,
          Mulheres: `${data.percentualObesosMulheres}%`,
        },
      },
      {
        title: 'Média de Idade Por Tipo Sanguíneo',
        data: data.mediaIdadePorTipoSanguineo,
      },
      {
        title: 'Possíveis Doadores Por Tipo Sanguíneo',
        data: data.possiveisDoadoresPorTipoSanguineo,
      },
    ];
  }

  isObjectType(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  get estadosArray(): { sigla: string; quantidade: number }[] {
    const estados = this.resultado?.candidatosPorEstado || {};
    return Object.entries(estados).map(([sigla, quantidade]) => ({
      sigla,
      quantidade: quantidade as number, // asserção de tipo aqui
    }));
  }
}
