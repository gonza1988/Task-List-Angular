export interface Task {
    id?: number; // cuando creamos una list podría no venir el id
    text: string;
    day: string;
    reminder: boolean;
}