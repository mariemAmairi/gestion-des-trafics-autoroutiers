import { Component, OnInit } from '@angular/core';
import { Trafic } from '../trafic';
import { TraficService } from '../trafic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-trafic',
  templateUrl: './update-trafic.component.html',
  styleUrls: ['./update-trafic.component.scss']
})
export class UpdateTraficComponent implements OnInit {
  id:number;
  trafic:Trafic = new Trafic()


  constructor(private traficService: TraficService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.traficService.getTraficById(this.id).subscribe(data=>{
      this.trafic = data;
    }
    );
  }
  onSubmit(){
    this.traficService.updateTrafic(this.id, this.trafic).subscribe(data =>{
      alert("trafic modifié avec succès");
      this.goToTraficList()

    })
    
  }
  goToTraficList(){
    this.router.navigate(['/trafic']);
  }

}
