import { Component, OnInit } from '@angular/core';
import { Evolution } from '../../interfaces/evo.interface';
import { EvoService } from '../../services/evo.service';

@Component({
  selector: 'app-evo-list',
  templateUrl: './evo-list.component.html',
  styleUrl: './evo-list.component.css'
})
export class EvoListComponent implements OnInit {
  listadoEvos: Evolution[] = [];

  constructor(private evoService: EvoService){}

  ngOnInit(): void {
    this.evoService.getEvosList().subscribe(respuesta => {
      this.listadoEvos = respuesta.results.slice(0, 18);
    });

  }

}