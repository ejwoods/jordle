import { Injectable } from '@angular/core';
import possibleWords from '../assets/possible-words';
import utilityWords from '../assets/utility-words';

@Injectable({
  providedIn: 'root'
})
export class WordDataService {

  constructor() { }

  isValidWord(word: string): boolean {
    return possibleWords.includes(word) || utilityWords.includes(word);
  };
}
