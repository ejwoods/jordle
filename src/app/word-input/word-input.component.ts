import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {

}
