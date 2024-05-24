import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operateur } from 'src/app/operateur';
import { OperateurService } from 'src/app/operateur.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-operateur',
  templateUrl: './operateur.component.html',
  styleUrls: ['./operateur.component.scss']
})
export class OperateurComponent implements OnInit {
  operateurs: Operateur[]

  constructor(private operateurService: OperateurService, private route: Router) { }

  ngOnInit(): void {
    this.getOperateur();
  }
  private getOperateur(){
    this.operateurService.getOperateurList().subscribe(
      data => {
        this.operateurs = data;
       });
      }


     goToAddOperateur(){
      this.route.navigate(['/register']);
     }

      goToUpdateOperateur(id:number){
        this.route.navigate(['/update-operateur', id]);
      }


      deleteOperateur(id:number){
        this.operateurService.deleteOperateur(id).subscribe
        (data => {
          alert("voulez vous supprimer cet operateur!");
          this.getOperateur();
        },
        error => alert("error") 
       );
        

        
      }

  }
  

