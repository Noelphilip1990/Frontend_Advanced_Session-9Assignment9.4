import { Component } from '@angular/core';
import {Logger } from './LoggerService';

@Component({
  selector: 'sec-root',
  template: `
 <div class="container">
<h1>
  {{title}}
</h1>
<h3>Example!!!</h3>  
  <div class="container-fluid">
<div class="jumbotron">
<h2>App Componenet 2</h2>
</div>
</div>
</div>`,
  
 
})

export class AppComponent2 {
	title = 'AppComponent 2';

	constructor(private logger:Logger)
	{
		logger.getLog("This is App2 Log..");
	}
	
}
