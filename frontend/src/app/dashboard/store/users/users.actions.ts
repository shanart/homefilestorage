import { Action } from '@ngrx/store';
import { User } from '../../globals/models';

export enum UsersActionTypes {
    LOAD_USER = '[User] Start load user',
    LOADING_USER_END = '[User] User loading end',
}

export class LoadUserAction implements Action {
    readonly type = UsersActionTypes.LOAD_USER;
}

export class LoadUserEndAction implements Action {
    readonly type = UsersActionTypes.LOADING_USER_END;
    constructor(public payload: { user: User }) { }
}
