import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CampaignListComponent],
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marketing-frontend';
}
