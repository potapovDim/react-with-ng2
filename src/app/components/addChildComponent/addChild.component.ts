import { Component, Injectable, Inject, Input, ViewChildren, AfterViewInit, ElementRef} from '@angular/core'


@Component(addTemplateFromDOM({
  template: '<div>Child</div>',
	selector: 'child-component'
}))
class ChildComponent {
	@Input() name: string;
}

@Component(addTemplateFromDOM({
	selector: 'main-component',
  template: `<div>
    <h1>Main</h1>
    <child-component></child-component>
  </div>`,
	directives: [ChildComponent]
}))
class MainComponent implements AfterViewInit {
	names: string[];
	@ViewChildren('input') childChildren;
	constructor() {
		this.names = ['Wednesday', 'Pugsley', 'Pubert'];
	}
	
	ngAfterViewInit() {
		this.childChildren.changes.subscribe(children => {
			children.last.nativeElement.focus();
		});
	}
	
	addName() {
		this.names.push('Child-'+Math.floor(Math.random()*100));
	}
}

function addTemplateFromDOM(selector: string | {template?: string, selector: string}) : string | {template: string, selector: string} {
	if (typeof selector === 'string') {
		let element = document.querySelector(`[selector=${selector}]`);
		if (!element) {
			console.error(`Cannot load template for component "${selector}"`);
			return '';
		}
		return element.innerHTML;
	} else if (typeof selector === 'object') {
		selector.template = addTemplateFromDOM(selector.selector);
		return selector;
	}
}
