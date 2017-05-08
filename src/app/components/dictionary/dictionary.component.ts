import { Component, OnInit } from '@angular/core';
import{GetWordService} from 'app/services/get-word.service'
import{Word} from 'app/word'

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  word:Word;
  wordString:String;
  wordLength:number;
  subscription:any;
  joinedWord:string;
  definition:string;

 

  constructor(private getWordService: GetWordService) { 
  
  }

  emitServiceEvent(){
    this.getWordService.emitChangeWordEvent("slap");
  }

    startGame(): void {
    var that = this;
    this.subscription = this.getWordService.getChangedWordEmitter()
    .subscribe(function(){that.word = that.getWordService.getCurrentWord();
    that.joinWord(that.word.hiragana)});
    this.getWordService.getWord().then(function(){that.word = that.getWordService.getCurrentWord();
    that.emitServiceEvent()}).then(c => {that.joinWord(that.word.hiragana);
  });
    


  }

    joinWord(array):void{
    var tarry = [];
    array.map(function(c){
      tarry.push(c.value)
    });
    this.joinedWord = tarry.join("");

  }

  ngOnInit() {
    this.startGame();
  }

}
