import { Component, Input } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { Post } from '../../Types/post';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent, ListViewModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  @Input() posts: Post[] = [];
}
