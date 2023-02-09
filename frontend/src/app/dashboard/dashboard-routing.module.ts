import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: 'files', loadChildren: () => import('./apps/files/files.module').then(m => m.FilesModule) },
            { path: 'notes', loadChildren: () => import('./apps/notes/notes.module').then(m => m.NotesModule) },
            { path: '', redirectTo: 'files', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
