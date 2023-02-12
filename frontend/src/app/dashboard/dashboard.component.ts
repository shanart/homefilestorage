import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
import { UserState } from './store/users/users.reducer';
import { LoadUserAction } from './store/users/users.actions';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

    constructor(private store: Store<UserState>) { }

    ngOnInit() {
        this.store.dispatch(new LoadUserAction());
    }
    // count$: Observable<number>;

    // constructor(private store: Store<{ count: number }>) {
    //     this.count$ = store.select('count');
    // }

    // increment() {
    //     this.store.dispatch(increment());
    // }
    // decrement() {
    //     this.store.dispatch(decrement());
    // }
    // reset() {
    //     this.store.dispatch(reset());
    // }
}
