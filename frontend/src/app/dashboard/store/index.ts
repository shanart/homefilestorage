import { ActionReducerMap } from "@ngrx/store";
import { storageReducer, StorageState } from "./storage/storage.reducer";
import { userReducer, UserState } from "./users/users.reducer";

interface AppState {
    storage: StorageState;
    user: UserState;
}

export const rootReducers: ActionReducerMap<AppState> = {
    storage: storageReducer,
    user: userReducer
};
