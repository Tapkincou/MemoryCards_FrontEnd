import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ControllerService } from './service/controller/controller.service';
import { BusinessService } from './business/business-service.service';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { Deck } from './data/Deck';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


 // private _todos: BehaviorSubject<Array<Deck>> = new BehaviorSubject([]);
//public readonly todos: Observable<Array<Deck>> = this._todos.asObservable();

  public listDecks : Deck[];
  public test : String[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private business : BusinessService
  ) {

    this.initializeApp();

    // Subcriptions to get the list of Decks
    this.business.getListDeckName()
      .subscribe(
        (deck) => {  console.log("ICILALALA");console.log(deck);  this.listDecks.push(deck) }, //this.listDecks.push(deck);
        (error) => {console.log("grosfail")});


   /* let obs = this.business.callListDeck();
    obs.subscribe(
      res => {
        this._todos.next(this._todos.getValue()); //.push(this.listDeck)//this.listDecks =
        console.log("est que ca marche ?");
        console.log(this._todos.getValue());
        console.log(res);
        this.listDecks = < Deck[]>res;
      }
    )*/

    //-------------------
  /*  this.business.getListDeckName().subscribe(
      (name) => {this.test.push(name);
      console.log(name);}
    );*/

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
