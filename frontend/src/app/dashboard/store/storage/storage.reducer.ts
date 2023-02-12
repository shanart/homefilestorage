import { StorageActionTypes } from './storage.actions';
import { Action, createSelector } from '@ngrx/store';
import { FileItem, FolderItem } from '../../globals/models';

export interface StorageState {
    files: FileItem[]
    folders: FolderItem[]
    loading: boolean
}

const initialStorageState: StorageState = {
    files: [],
    folders: [],
    loading: true
};


export function storageReducer(appStorageState = initialStorageState, action: Action): StorageState {
    switch (action.type) {
        case StorageActionTypes.FILES_LOADING_START:
            return {
                ...appStorageState,
                loading: true
            };
        case StorageActionTypes.FILES_LOADING_START:
            return {
                ...appStorageState,
                loading: true
            };
    }
    return appStorageState;
}