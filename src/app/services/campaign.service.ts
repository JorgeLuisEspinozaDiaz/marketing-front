import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10'; 
  constructor(private http: HttpClient) {
   }


 getpokemon(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }


  //   // Registrar una nueva campaña
  // createCampaign(campaign: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/campaigns`, campaign);
  // }

  // // Obtener campañas por rango de fechas
  // getCampaignsByDateRange(startDate: string, endDate: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/campaigns?startDate=${startDate}&endDate=${endDate}`);
  // }

  // // Obtener mensajes de una campaña
  // getMessagesByCampaignId(campaignId: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/campaigns/${campaignId}/messages`);
  // }
}
