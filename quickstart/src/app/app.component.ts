import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div>
        <h1> This is a {{name}} </h1>
      </div>`,
})
export class AppComponent  { name = 'Angular'; }
