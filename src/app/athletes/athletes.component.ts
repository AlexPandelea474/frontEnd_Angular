import { Component, OnInit } from '@angular/core';
import { AthleteService } from './athlete.service';

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
    this.athleteService.getAthletes().subscribe(data => {
      this.athletes = data;
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
}
