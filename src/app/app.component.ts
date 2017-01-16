import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
	<nav class="navbar navbar-inverse-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Harjot Singh Github</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
	<div class="container">
	<profile></profile>
	</div>
	`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}