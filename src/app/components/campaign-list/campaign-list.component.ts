import { Component } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campaign-list',
  imports: [CommonModule],
  templateUrl: './campaign-list.component.html',
  styleUrl: './campaign-list.component.css',
  standalone: true,  

})
export class CampaignListComponent {
  campaigns: any[] = [];
  startDate: string = '';
  endDate: string = '';

  constructor(private campaignService: CampaignService) {}

  ngOnInit(): void {

    this.fetchCampaigns();

  }

  fetchCampaigns() {
    this.campaignService.getpokemon().subscribe(
      (response) => {
        console.log('Respuesta API:', response);
        this.campaigns = response.results;  
      },
      (error) => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }
}
