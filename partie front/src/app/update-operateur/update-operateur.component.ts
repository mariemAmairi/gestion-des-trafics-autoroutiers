import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { OperateurService } from '../operateur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-operateur',
  templateUrl: './update-operateur.component.html',
  styleUrls: ['./update-operateur.component.scss']
})
export class UpdateOperateurComponent implements OnInit {
  id:number;
  operateur: User = new User()

  constructor(private operateurService: OperateurService , private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.operateurService.getOperateurById(this.id).subscribe(data=>{
      this.operateur = data;
    }
    );
  }
  onSubmit(){
    this.operateurService.updateTrafic(this.id, this.operateur).subscribe(data =>{
      alert("operateur modifié avec succès");
      this.goToOperateurList()

    })
    
  }
  goToOperateurList(){
    this.router.navigate(['/operateurs']);
  }

}
