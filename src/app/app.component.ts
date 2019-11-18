import {Component} from '@angular/core';
import {Article} from 'src/app/article/article.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    articles: Article[] = [];

    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        this.articles.push(new Article(title.value, link.value, 0));
        return false;
    }

    sortedArticles(): Article[] {
        return this.articles.sort((a, b) => b.votes - a.votes);
    }
}
