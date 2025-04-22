import { Component } from '@angular/core';
import { HeadersComponent } from "../headers/headers.component";
import { RouterModule } from '@angular/router';
import { NavigationMenuComponent } from "../navigation-menu/navigation-menu.component";
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-candidates',
  imports: [HeadersComponent, RouterModule, NavigationMenuComponent, TableComponent],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {
  headerTitle = "Candidates"
}
