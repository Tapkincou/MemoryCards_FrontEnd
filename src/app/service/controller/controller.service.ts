import { HttpClient } from '@angular/common/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(private http : HttpClient) { }


  getAllDecks(test: string) {
      return this.http.get("http://localhost:8081/decks");
  }


}
