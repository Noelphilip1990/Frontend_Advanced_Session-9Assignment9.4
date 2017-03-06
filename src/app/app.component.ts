import { Component,ElementRef} from '@angular/core';
import {Logger} from './LoggerService'
import {HighLight} from './app.HighLightDirective'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
	title = 'Assignament 9.1!';

	constructor(private logger:Logger, hl:HighLight)
	{
		logger.getLog("This is App1 Log..");
		hl.setColor('blue');
	}
	
}
