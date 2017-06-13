import { Component,OnInit,Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { jsonModel } from './json.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css']
})

export class AppComponent {
  articles: jsonModel[];
  errorMessage: string;
  @Input() l: string;

  constructor(private _articleService: ArticleService) {
    this.articles = [];
    this.l = "loading";
  }

  ngOnInit():void {
    let self = this;
    self._articleService.getArticles().subscribe(response => this.articles = response, error => this.errorMessage = < any > error, () => this.completed())
  }

  completed() {
    this.l="random";
  }
}
