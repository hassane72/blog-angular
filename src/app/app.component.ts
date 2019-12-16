import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Machine à laver',
      content: 'juste un test',
      loveIts: 2,
      created_at: Date()
    },
    {
      title: 'Machine à laver 1',
      content: 'juste un test',
      loveIts: -2,
      created_at: Date()
    },
    {
      title: 'Machine à laver 2',
      content: 'juste un test',
      loveIts: 0,
      created_at: Date()
    },
    {
      title: 'Machine à laver 3',
      content: 'juste un test',
      loveIts: 0,
      created_at: Date()
    },
  ];
}
