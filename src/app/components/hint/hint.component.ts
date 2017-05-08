import { Component, OnInit } from '@angular/core';
import{GetWordService} from 'app/services/get-word.service'
import{Word} from 'app/word'



@Component({
  selector: 'hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
  word:Word;
  hiragana:Object[];
  romanjiArr:Object[];
  hintsvisibility:boolean[];

  constructor(private getWordService:GetWordService) { }

  ngOnInit() {
    var that= this;
    this.getWordService.getChangedWordEmitter()
    .subscribe(c => {that.word = that.getWordService.getCurrentWord();
    that.hiragana = that.word.hiragana;
    that.romanjiArr = that.word.romanjiArr;
  that.populatHintsVis();})
  }

  populatHintsVis(){
    this.hintsvisibility = [];
    for(var x =0;x<this.romanjiArr.length;x++){
      this.hintsvisibility.push(false);
    }
  }

  visible(index){
    return this.hintsvisibility[index];
  }

  makeVisible(index){
    this.hintsvisibility[index] = true;
  }

}
