export interface User {
    id?: number
    first_name: string
    last_name: string
    email: string
    lang: string
    phone: string
    password?: string
}

export interface FileItem {
    id?: number
    name: string
    size: number
    created_at: Date
    public: boolean
    type: string
}

export interface FolderItem {
    id?: number
    name: string
    created_at: Date
    public: boolean
}

export interface ServerResponse {
    items: Array<FolderItem|FileItem>
    parent: number,
    offset: number,
    limit: number
}

export class Note {
    constructor(
        public id: number, 
        public title: string,
        public content: string,
        public created_at: Date,
        public color: 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark',
        public labels: number[]
    ) {}
}
