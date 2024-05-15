import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { WordDataService } from '../word-data.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-word-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './word-input.component.html',
  styleUrl: './word-input.component.css'
})
export class WordInputComponent {
  wordDataService = inject(WordDataService);

  word: FormControl<string> = new FormControl('', {
    nonNullable: true
  });

  checkWord(): void {
    const isValid = this.wordDataService.isValidWord(this.word.value);
    if (isValid) {
      console.log('Valid word!');
    } else {
      console.log('Invalid word - try again!')
    };
  };

  onInputChange(): void {
    // once word is 5 characters long, check validity
    if (this.word.value.length === 5) {
      this.checkWord();
    };
  };
}
