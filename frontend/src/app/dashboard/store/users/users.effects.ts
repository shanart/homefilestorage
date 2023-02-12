import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, catchError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../globals/user.service';
import { LoadUserEndAction } from './users.actions';
import { User } from '../../globals/models';


@Injectable()
export class UserEffects {

    @Effect()
    loadMovies$ = this.actions$
        .pipe(
            ofType('[Movies Page] Load Movies'),
            mergeMap(() => this.moviesService.getUser()
                .pipe(
                    map((response: User) => (new LoadUserEndAction({ user: response }))),
                    catchError(() => EMPTY)
                ))
        )
    );

    constructor(
        private actions$: Actions,
        private moviesService: UserService
    ) { }
}