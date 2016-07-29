import {Component} from '@angular/core';
import {AuthorsService} from './authors.service'


@Component({
    selector: 'authors',
    template: `
        <h1>Authors</h1>
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let author of authors">
                <span>{{author}}</span>
            </li>
        </ul>
    `,
    providers:[AuthorsService]

})

export class AuthorsComponent {
    title = "Name of the Authors";
    authors;

    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }

}