import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Accident } from 'src/app/accident';
import { AccidentService } from 'src/app/accident.service';

@Component({
  selector: 'app-add-accident',
  templateUrl: './add-accident.component.html',
  styleUrls: ['./add-accident.component.scss']
})
export class AddAccidentComponent implements OnInit {
  accident: Accident = new Accident()

  constructor(private accidentService: AccidentService, private router: Router) { }

  ngOnInit(): void {
    console.log("hello");
  }
  addAccidentData(){
    this.accidentService.crateAccident(this.accident).subscribe
    (
      data =>{
        alert("accident ajouté avec succès");
        this.goToAccidentList();

      },
      error => alert("error") 
       );

  
    
  }
  goToAccidentList(){
    this.router.navigate(['/accident']);
  }

}
