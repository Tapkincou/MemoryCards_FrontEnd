import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, Subscriber, Subscription } from 'rxjs';
import { Deck } from '../data/Deck';
import { ControllerService } from '../service/controller/controller.service';
import { map, tap, reduce, concatMap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

 // private listDeck;
 // public $listDeckSubscribtion : Subscription;

  constructor(  private controller : ControllerService ) { 


  
  }


  public getListDeckName(): Observable<Deck> {

   // let obs : Observable<Object>;
    let list : Deck[] = [];

   this.controller.getAllDecks("ICI ON TEST").subscribe(
      (data) => { 
        console.log("ici data");
        console.log(data);
        return from(<Deck[]> data);
      },
      (err) => { 
        console.log("planté wesh");
        console.log(err);
         });


        
         console.log("return empty list ??");
         console.log(list);
        return from(list);
    
    /* .pipe(
        tap( (data) => { console.log("coucou")}),
        concatMap( <Deck>(data) =>  from(data.name)));
*/
    //,map((data) => { ""})
    
  }

  public callListDecks() : Observable<Deck[]> {
 //   try {
//this.$listDeckSubscribtion = 
      return <Observable<Deck[]>>this.controller.getAllDecks("coucoulà"); //<Deck> //subscribe( (x) => this.listDeck.push( x ) ) 

     /* return new Observable((observer) => {
          this.listDeck;
      });

    } catch(e) {
      if(e instanceof Error) {
          // IDE type hinting now available
          // handle error if possible
          // be sure to re-throw it if you can't properly resolve it
          this.$listDeckSubscribtion.unsubscribe;
      }
      else {
          // probably dealing with a naked string or number here
          // handle if you can, otherwise re-throw.
          throw e;
      }
  } finally {
  
  }
 */   
  }


}
