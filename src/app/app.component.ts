import { Component } from '@angular/core';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
