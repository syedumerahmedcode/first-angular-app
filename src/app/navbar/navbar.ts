import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template: `<h1>Navbar Component</h1>
                <p>Dummy paragraph</p>
                <button>submit</button>`,
    styles:  `h1{
                color:red;
                background: black
                } `



})

export class AppNavbar {

}