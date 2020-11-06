
enum LearningLevel {
    NEW_WORD,
    SEEN_ONCE,
    SEEN_TWICE,
    CAN_YOU_REMEMBER_IT,
    KEEP_GOING,
    HALF_THE_JOB,
    GETTING_BETTER,
    GETTING_KNOWN,
    ALMOST_KNOWN,
    ONE_LAST,
    KNOWN_WORD 
}


export class Card {

    private id : String;
    private recto : String;
    private verso : String;
    private creationDate : Date;
    private modificationDate : Date;
    private learningLevel : LearningLevel;
    public getId() : String {
        return this.id;
    }

    public getRecto() : String {
        return this.recto;
    }

    public setRecto(recto : String){
        this.recto = recto;
    }

    public getVerso() : String {
        return this.verso;
    }

    public setVerso(verso : String){
        this.verso = verso;
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

    public getLearningLevel() : LearningLevel {
        return this.learningLevel;
    }

    public setLearningLevel(learningLevel : LearningLevel){
        this.learningLevel = learningLevel;
    }

}