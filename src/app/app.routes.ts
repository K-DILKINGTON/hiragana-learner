import { Routes } from '@angular/router';
import {HiraganaGameComponent} from 'app/components/hiragana-game/hiragana-game.component';
import {HomeComponent} from 'app/components/home/home.component'



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: HiraganaGameComponent }
];