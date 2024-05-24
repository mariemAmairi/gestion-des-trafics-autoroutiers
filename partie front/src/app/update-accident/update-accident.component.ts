import { Component, OnInit } from '@angular/core';
import { Accident } from '../accident';
import { AccidentService } from '../accident.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-accident',
  templateUrl: './update-accident.component.html',
  styleUrls: ['./update-accident.component.scss']
})
export class UpdateAccidentComponent implements OnInit {
  id:number;
  accident:Accident = new Accident()

  constructor(private accidentService: AccidentService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.accidentService.getAccidentById(this.id).subscribe(data=>{
      this.accident = data;
    }
    )
  }
  onSubmit(){
    this.accidentService.updateAccident(this.id,this.accident).subscribe(data =>{
      alert("accident updated succefully");
      this.goToAccidentList();

    })
  }
  goToAccidentList(){
    this.router.navigate(['/accident']);
  }

}
