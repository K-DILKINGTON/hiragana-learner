import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import{RouterModule} from '@angular/router';
import { routes } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnswerInputComponent } from './components/answer-input/answer-input.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import {GetWordService} from 'app/services/get-word.service';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { HiraganaGameComponent } from './components/hiragana-game/hiragana-game.component';
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnswerInputComponent,
    DictionaryComponent,
    CustomInputComponent,
    AutofocusDirective,
    HiraganaGameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GetWordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
