import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Trafic } from 'src/app/trafic';
import { TraficService } from 'src/app/trafic.service';

@Component({
  selector: 'app-add-trafic',
  templateUrl: './add-trafic.component.html',
  styleUrls: ['./add-trafic.component.scss']
})
export class AddTraficComponent implements OnInit {
  trafic: Trafic = new Trafic()

  constructor(private traficService: TraficService ,  private route: Router) { }

  ngOnInit(): void {
    console.log("hello");
  }
  addTraficData(){
    
    this.traficService.crateTrafic(this.trafic).subscribe
    (
      data =>{
        alert("trafic ajouté avec succès");
        this.goToTraficList();

      },
      error => alert("error") 
       );

  }
  goToTraficList(){
    this.route.navigate(['/trafic']);
  }
  

}

