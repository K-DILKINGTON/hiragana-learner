import { Injectable } from '@angular/core';
import {Word} from 'app/word';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {EventEmitter} from '@angular/core';

import 'rxjs/Rx';



@Injectable()
export class GetWordService {
  wordLength:number;
  currentWord:Word;
  changeWordEmitter:EventEmitter<string> = new EventEmitter();
getWord():Promise<Word>{
return this.http.get('../api/wordatrandom')
 .map((res) => {
        this.currentWord = res.json();
        this.convertToHiragana(this.currentWord.romanji);
        return res.json()
        
      }).toPromise();
}

getChangedWordEmitter(){
  return this.changeWordEmitter;
}


emitChangeWordEvent(string){
  this.changeWordEmitter.emit(string);
}

getCurrentWord(){
  return this.currentWord;
}

hiraToRomanMap = {
	"a":"あ",
	"i":"い",
	"u":"う",
	"e":"え",
	"o":"お",
	"ka":"か",
	"ki":"き",
	"ku":"く",
	"ke":"け",
	"ko":"こ",
	"sa":"さ",
	"shi":"し",
	"su":"す",
	"se":"せ",
	"so":"そ",
	"ta":"た",
	"chi":"ち",
	"tsu":"つ",
	"te":"て",
	"to":"と",
	"na":"な",
	"ni":"に",
	"nu":"ぬ",
	"ne":"ね",
	"no":"の",
	"ha":"は",
	"hi":"ひ",
	"hu":"ふ",
	"he":"へ",
	"ho":"ほ",
	"ma":"ま",
	"mi":"み",
	"mu":"む",
	"me":"め",
	"mo":"も",
	"ya":"や",
	"yu":"ゆ",
	"yo":"よ",
	"ra":"ら",
	"ri":"り",
	"ru":"る",
	"re":"れ",
	"ro":"ろ",
	"wa":"わ",
	"wo":"を",
	"n":"ん",
	"ga":"が",
	"gi":"ぎ",
	"gu":"ぐ",
	"ge":"げ",
	"go":"ご",
	"za":"ざ",
	"ji":"じ",
	"zu":"す゛",
	"ze":"ぜ",
	"zo":"ぞ",
	"da":"だ",
	"di":"ぢ",
	"du":"ず",
	"de":"で",
	"do":"ど",
	"ba":"ば",
	"bi":"び",
	"bu":"ぶ",
	"be":"べ",
	"bo":"ぼ",
	"pa":"ぱ",
	"pi":"ぴ",
	"pu":"ぷ",
	"pe":"ぺ",
	"po":"ぽ",
	"kya":"きゃ",
	"kyu":"きゅ",
	"kyo":"きょ",
	"gya":"ぎゃ",
	"gyu":"ぎゅ",
	"gyo":"ぎょ",
	"sha":"しゃ",
	"shu":"しゅ",
	"sho":"しょ",
	"ja":"じゃ",
	"ju":"じゅ",
	"jo":"じょ",
	"cha":"ちゃ",
	"chu":"ちゅ",
	"cho":"ちょ",
	"nya":"にゃ",
	"nyu":"にゅ",
	"nyo":"にょ",
	"hya":"ひゃ",
	"hyu":"ひゅ",
	"hyo":"ひょ",
	"bya":"びゃ",
	"byu":"びゅ",
	"byo":"びょ",
	"pya":"ぴゃ",
	"pyu":"ぴゅ",
	"pyo":"ぴょ",
	"mya":"みゃ",
	"myu":"みゅ",
	"myo":"みょ"
}
getWordLength(){
  return this.wordLength;
}
 convertToHiragana(romanjiWord){
	var charArray = romanjiWord.split("");
	var holdOver = "";
	var hiraganaArray = [];
  var length = 0;
    this.currentWord.hiragana = [];
      this.currentWord.romanjiArr= [];
	for(var x = 0;x<charArray.length;x++){
		var temp = holdOver!=""?holdOver + charArray[x]:charArray[x];
		var hiraChar="";
    holdOver = holdOver + charArray[x];
   if((temp!="n"&&this.hiraToRomanMap[temp]!=undefined)||this.isN(charArray,x)){
    hiraChar = this.hiraToRomanMap[temp];
    holdOver = "";
   }
  
  if(holdOver===""){
			hiraChar = hiraChar.replace(/\s+/g, '');
    
      			this.currentWord.hiragana.push({value:hiraChar});
      this.currentWord.romanjiArr.push({value:temp});
      length++;
		}
	}
  this.wordLength = length;
	return hiraganaArray;
}

isN(charArray,index){
  if(charArray[index]==="n"){
  if(index === charArray.length-1){
    return true
  }
  else{
    return charArray[index+1]!=("a"||"i"||"u"||"e"||"o")
  }
  }
}

  constructor(private http:Http) { }

}
