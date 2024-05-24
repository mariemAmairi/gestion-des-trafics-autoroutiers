import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ Trafic} from 'src/app/trafic'
import { TraficService } from 'src/app/trafic.service';
@Component({
  selector: 'app-trafic',
  templateUrl: './trafic.component.html',
  styleUrls: ['./trafic.component.scss']
})
export class TraficComponent implements OnInit {

  trafics: Trafic[]

  constructor(private traficService: TraficService , private route: Router) { }

  ngOnInit(): void {
    this.getTrafic();
  }

  private getTrafic(){
    this.traficService.getTraficList().subscribe(data => {
     this.trafics = data;
    });
  }
  goToAddTrafic(){
    this.route.navigate(['/addtrafic']);

  }
  goToUpdateTrafic(id:number){
    this.route.navigate(['/update-trafic', id]);
  }
}
