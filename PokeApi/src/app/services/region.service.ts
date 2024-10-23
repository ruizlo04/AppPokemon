import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegionListResponse } from '../interfaces/reg.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) {}

  getRegionList(): Observable<RegionListResponse> {
    return this.http.get<RegionListResponse>('https://pokeapi.co/api/v2/region/');
  }
}
