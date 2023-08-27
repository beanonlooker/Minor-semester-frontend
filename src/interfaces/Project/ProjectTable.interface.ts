import { h } from "vue";

export interface ProjectRowData {
    key: string;    // pid
    projectname: string;
    description: string;
    creator: string;
    isEditing: boolean;
}

export interface Column {
    title: string;
    key: string;
    width?: number;
    render: (row: ProjectRowData) => ReturnType<typeof h>;
}