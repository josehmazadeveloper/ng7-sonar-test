import { Component, OnInit } from '@angular/core';
import { MiClase } from '@services/otro/miclase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-sonar';
  mensajeCustom: string;
  ngOnInit() {
    const jose = new MiClase();
    this.mensajeCustom = jose.title;
  }

}
