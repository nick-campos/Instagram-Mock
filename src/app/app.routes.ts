import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';

export const routes: Routes = [
    {
        component: PostComponent,
        path: "/user/:userId"
    }
];
