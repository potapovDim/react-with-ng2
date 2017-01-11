import { Component, OnInit, Injector } from '@angular/core';
import { ReactChildComponentView } from './react/child.tsx'
@Component({
  selector: 'my-app',
  template: `<div>
      <h2>{{title}}</h2>
      <h1>Hello {{name}}</h1>
      <div class="react-container" id="react-component-container">
    </div>`,
})
export class AppComponent implements OnInit {
  name = 'Angular';
  title = 'Some title';
  constructor (public injector: Injector) {

  }
  public ngOnInit() {
		ReactChildComponentView.initialize('react-component-container', this.injector);
	}
}