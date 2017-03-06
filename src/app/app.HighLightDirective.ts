import {Injectable, Inject} from '@angular/core';
import {Directive, ElementRef} from '@angular/core';
@Injectable()
@Directive({
	selector : '[myHighlight]'
})

export class HighLight
{
	 color:string='red';
	  
	
	constructor( @Inject(ElementRef) private el:ElementRef)
	{
		//el.nativeElement.style.color='red';
	}
	setColor(colors:string):void
	{
		this.el.nativeElement.style.backgroundColor=colors ;
		//this.color=colors;
	}
}