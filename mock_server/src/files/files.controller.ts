import { Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';

class FileItem {
    constructor(
        public id: number,
        public name: string,
        public size: number,
        public created_at: string,
        public ispublic: boolean,
        public parent: number | null,
        public type: string) { }
}

class FolderItem {
    constructor(
        public id: number,
        public name: string,
        public created_at: string,
        public ispublic: boolean,
        public parent: number | null,
    ) { }
}

const FOLDER_LIST: FolderItem[] = [
    new FolderItem(1, 'main', new Date().toString(), false, null),
    new FolderItem(5, 'main', new Date().toString(), false, 1),
]

const FILE_LIST: FileItem[] = [
    new FileItem(2, 'Book2', 123123, new Date().toString(), false, 1, 'application/pdf'),
    new FileItem(3, 'Book3', 123123, new Date().toString(), false, 1, 'application/pdf'),
    new FileItem(4, 'Book4', 123123, new Date().toString(), false, 1, 'application/pdf'),
    new FileItem(6, 'Book5', 123123, new Date().toString(), false, 5, 'application/pdf'),
    new FileItem(7, 'Book6', 123123, new Date().toString(), false, 5, 'application/pdf'),
    new FileItem(8, 'Book7', 123123, new Date().toString(), false, 5, 'application/pdf'),
    new FileItem(9, 'Book8', 123123, new Date().toString(), false, 5, 'application/pdf'),
    new FileItem(10, 'Book2', 123123, new Date().toString(), false, null, 'application/pdf'),
    new FileItem(11, 'Book3', 123123, new Date().toString(), false, null, 'application/pdf'),
    new FileItem(12, 'Book4', 123123, new Date().toString(), false, null, 'application/pdf'),
]

@Controller('api/v1/storage')
export class FilesController {
    @Get('files')
    getAllFiles(@Req() request: Request): FileItem[] {
        if (request.query['parent']) {
            let parent_id = +request.query['parent'];
            return FILE_LIST.filter(file => file.parent === parent_id);
        }
        return FILE_LIST;
    }

    @Get('folders')
    getAllFolders(@Req() request: Request): FolderItem[] {
        if (request.query['parent']) {
            let parent_id = +request.query['parent'];
            return FOLDER_LIST.filter(file => file.parent === parent_id);
        }
        return FOLDER_LIST;
    }
}