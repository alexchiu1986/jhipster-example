export interface ITask {
    id?: number;
    name?: string;
    content?: string;
}

export class Task implements ITask {
    constructor(public id?: number, public name?: string, public content?: string) {}
}
