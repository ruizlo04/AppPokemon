import { Component } from '@angular/core';
import { Region } from '../../interfaces/reg.interface';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-reg-list',
  templateUrl: './reg-list.component.html',
  styleUrl: './reg-list.component.css'
})
export class RegListComponent {

  listadoRegion: Region[] = [];

  constructor(private regionService: RegionService ){}

  ngOnInit(): void {
    this.regionService.getRegionList().subscribe(respuesta => {
      this.listadoRegion = respuesta.results;
    });

  }
}
