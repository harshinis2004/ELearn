import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [HomeComponent]
})
export class LoginComponent {

}
