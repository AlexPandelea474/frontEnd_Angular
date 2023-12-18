import { Component, OnInit } from '@angular/core';
import { AthleteService } from './athlete.service';
import { Athlete } from './athlete.model';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css']
})
export class AthletesComponent implements OnInit {
  athletes: any[] = [];
  isAddingAthlete : boolean = false;
  newAthlete :any = { firstName: '', lastName: '', gender: '', age: null };

  constructor(private athleteService: AthleteService) { }

  ngOnInit() {
    this.loadAthletes();
  }

  loadAthletes() {
    this.athleteService.getAthletes().subscribe((data: Athlete[]) => {
      this.athletes = data.map(athlete => ({ ...athlete, isEditing: false}));
    });
  }

  addAthlete() {
    this.athleteService.addAthlete(this.newAthlete).subscribe(() => {
      this.loadAthletes();
      this.isAddingAthlete = false;
      this.newAthlete = { firstName: '', lastName: '', gender: '', age: null };
    });
  }

  deleteAthlete(id: number) {
    this.athleteService.deleteAthlete(id).subscribe(() => {
      this.loadAthletes();
    });
  }
  editAthlete(athlete: any) {
    athlete.isEditing = true;

  }

  saveAthlete(athlete: any) {
    this.athleteService.updateAthlete(athlete).subscribe({
      next: (updatedAthlete) => {
        // You might want to update your athlete array here or reload athletes
        this.loadAthletes();
        athlete.isEditing = false;
      },
      error: (error) => {
        console.error('Error updating athlete:', error);
        
      }
    });
  }
}
