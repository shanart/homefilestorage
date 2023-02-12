import { Action } from '@ngrx/store';


export enum StorageActionTypes {
    FILES_LOADING_START = '[Storage] Files loading start',
    FOLDER_LOADING_START = '[Storage] Folders loading start',
}

export class StorageFilesLoadingStart implements Action {
    readonly type = StorageActionTypes.FILES_LOADING_START;
}

export class StorageFoldersLoadingStart implements Action {
    readonly type = StorageActionTypes.FOLDER_LOADING_START;
}
