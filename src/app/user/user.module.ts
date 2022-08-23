import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from './profile.component';
import { userRoutes } from "./user.routes";
import { AuthService } from "./auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";

@NgModule({
    declarations:[ProfileComponent,LoginComponent],
    providers:[],
    imports:[  ReactiveFormsModule,  
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule
    ]
})

export class UserModule{}