import { ColumnType } from "./enum";

export interface TaskModel {
    id: string;
    title: string;
    column: ColumnType;
    color: string
}

export interface DragItem {
    index: number;
    id: TaskModel['id'];
    from: ColumnType;
}