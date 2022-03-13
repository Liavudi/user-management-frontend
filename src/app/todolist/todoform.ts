export class TodoForm {
    _id: string;
    username: string
    todo: string
    constructor(_id: string, username: string, todo: string) {
        this._id = _id;
        this.username = username
        this.todo = todo
    }
}