export interface ITodo {
    Id: number;
    Title: string;
    CreationDate: Date;
    DueDate?: Date;
    Backlog: boolean;
    Working: boolean;
    Complete: boolean;
}
