
export class TodoForm {
    _id: string;
    ownerId: string
    text: string
    constructor(_id: string, ownerId: string, text: string) {
        this._id = _id;
        this.ownerId = ownerId
        this.text = text
    }
}