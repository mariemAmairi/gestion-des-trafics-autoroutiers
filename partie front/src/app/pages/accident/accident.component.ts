import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accident } from 'src/app/accident';
import { AccidentService } from 'src/app/accident.service';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {
  accidents: Accident[]

  constructor(private accidentService: AccidentService , private route: Router) { }

  ngOnInit(): void {
    this.getAccident()
  }
  private getAccident(){
    this.accidentService.getAccidentList().subscribe(data => {
      this.accidents = data;
     });
  }
  goToAddAccident(){
    this.route.navigate(['/addaccident']);
  }
  goToUpdateAccident(id:number){
    this.route.navigate(['/update-accident', id]);


  }

}
