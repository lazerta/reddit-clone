import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from 'src/app/article/article.model';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    @HostBinding('attr.class') cssClass = 'row';
    @Input()
    article: Article;

    constructor() {
    }

    ngOnInit() {
    }

    voteUp() {
        this.article.upVote();
        return false;
    }

    voteDown() {
        this.article.downVote();
        return false;
    }
}

