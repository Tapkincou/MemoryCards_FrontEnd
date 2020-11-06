import { Card } from './Card';

export class Deck {

    private id : String;
    private name : String;
    private creationDate : Date;
    private modificationDate : Date;
    private description : String;
    private cards : Card[];

    public getId() : String {
        return this.id;
    }

    public getName() : String {
        return this.name;
    }

    public setName(name : String){
        this.name = name;
    }

    public getCreationDate() : Date {
        return this.creationDate;
    }

    public setCreationDate(creationDate : Date){
        this.creationDate = creationDate;
    }

    public getModificationDate() : Date {
        return this.modificationDate;
    }

    public setModificationDate(modificationDate : Date){
        this.modificationDate = modificationDate;
    }

    public getDescription() : String {
        return this.description;
    }

    public setDescription(description : String){
        this.description = description;
    }

    public getCards() : Card[] {
        return this.cards;
    }

    public setCards(cards : Card[]){
        this.cards = cards;
    }
}


