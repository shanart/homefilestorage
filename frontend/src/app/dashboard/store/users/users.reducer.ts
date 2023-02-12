import { UsersActionTypes } from './users.actions';
import { User } from '../../globals/models';

export interface UserState {
    user: User | null
    loading: boolean
}

const initialUserState: UserState = {
    user: null,
    loading: false
};


export function userReducer(appUserState = initialUserState, action: any): UserState {
    switch (action.type) {
        case UsersActionTypes.LOAD_USER:
            return {
                ...appUserState,
                loading: true
            };
        case UsersActionTypes.LOADING_USER_END:
            return {
                user: action.payload,
                loading: false
            };
    }
    return initialUserState;
}