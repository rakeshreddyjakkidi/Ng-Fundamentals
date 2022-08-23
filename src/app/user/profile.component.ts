import { Component,OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormControl } from '@angular/forms';
@Component({
  template: `
  <div>
  <h1>Edit Your Profile </h1>
  <hr>
  <div class="col-md-4">
    <form [formGroup]="profileForm" (ngSubmit)="saveProfile(profileForm.value)" autocomplete="off" novalidate>
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input formControlName="firstName" id="firstName" type="text" class="form-control" placeholder="First Name..." />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input formControlName="lastName" id="lastName" type="text" class="form-control" placeholder="Last Name..." />
      </div>

      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" (click)="cancel()" class="btn btn-default">Cancel</button>
    </form>
  </div>
</div>

  `,
})
export class ProfileComponent implements OnInit {
       
  profileForm:FormGroup|any;

  constructor(private authService:AuthService,private router:Router){}

ngOnInit(): void {
  let firstName=new FormControl(this.authService.currentUser.firstName);
  let lastName=new FormControl(this.authService.currentUser.lastName);

  this.profileForm=new FormGroup({
    firstName:firstName,
    lastName:lastName
  })
}

saveProfile(formValues:any){
  this.authService.updateCurrentUser(formValues.firstName,formValues.lastName);
  this.router.navigate(['events'])
  }
  cancel(){
  this.router.navigate(['events'])
  }
}