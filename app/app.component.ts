import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container-fluid">
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['styles.css'],
    directives: [ROUTER_DIRECTIVES,NavbarComponent,AboutComponent,ContactComponent,HomeComponent]
})

export class AppComponent{

}