import { Component,AfterViewInit, OnInit,ViewChildren,ViewChild,AfterViewChecked } from '@angular/core';
import{GetWordService} from 'app/services/get-word.service';
import {Word} from 'app/word';
import{AutofocusDirective} from 'app/directives/autofocus.directive'
declare var $:any;


@Component({
  selector: 'answer-input',
  templateUrl: './answer-input.component.html',
  styleUrls: ['./answer-input.component.css']
})
export class AnswerInputComponent implements OnInit,AfterViewChecked {
@ViewChildren('input') vc;

subscription:any;
word:Word;
hiragana:Object[];
romanjiArr:Object[];
answer:string[];
  constructor(private getWordService: GetWordService) { }

  ngOnInit() {
    var that = this;
    this.answer = [];
    this.subscription = this.getWordService.getChangedWordEmitter()
    .subscribe(function(){that.word = that.getWordService.getCurrentWord();
    that.hiragana = that.word.hiragana;
    that.romanjiArr = that.word.romanjiArr;
    that.focusOnFirst()});
  }

  focusOnFirst(){
    $("#answer-input_1").focus();
  }

  onKeyUp(string,char,index){
    if(string===char.value){
      $("#" + char.id).css("background","green");
      $("#answer-input_" + (index + 2).toString()).focus();
      this.answer[index] = string;
      if(this.answer.join("")===this.word.romanji){
        this.answer = [];
        this.getWordService.getWord()
        .then(c =>this.getWordService.emitChangeWordEvent("come on an shlam"));
      }
    }
  }

  shouldFocusFirst(index){
    return this.answer.length<1&&index==1;
  }
  
  ngAfterViewChecked(){
    if(this.shouldFocusFirst(1)){
      $("#answer-input_1").focus();
    }
  }



  debugger(){
  }

}
