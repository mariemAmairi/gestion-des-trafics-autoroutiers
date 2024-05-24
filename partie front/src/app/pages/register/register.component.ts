import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperateurService } from 'src/app/operateur.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  operateur: User = new User()

  constructor(private operateurService: OperateurService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.operateurService.crateOperateur(this.operateur).subscribe
    (
      data =>{
        //alert("operateur ajouté avec succès");
        this.goToOperateurList();

      }, error => alert("operateur ajouté avec succès")
      );


  }
  goToOperateurList(){
    this.router.navigate(['/operateurs']);
  }

}
