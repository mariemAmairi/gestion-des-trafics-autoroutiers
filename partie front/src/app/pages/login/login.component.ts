import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import{AuthentificationService} from'src/app/authentification.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isAdmin:boolean = false;
  utilisateur = new User();
  constructor(private userservice : AuthentificationService, private router: Router) {}

  ngOnInit() : void {
  }
  loginUser(){
   // console.log(this.utilisateur)
  this.userservice.loginUtilisateur(this.utilisateur).subscribe(data=>{
    console.log("response recieved")
    this.goToDashboard();
  });
    

    /*if (this.isAdmin) {
      this.router.navigate(['/not-authorized']); 
      return true; // Allow access to the route
     else {
      this.router.navigate(['/not-authorized']); // Redirect to a different route
      return false;
    }*/
    
  }
  goToDashboard(){
    this.router.navigate(['/trafic']);
  }
   
}

    

