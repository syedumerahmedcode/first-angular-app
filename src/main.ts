import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { PostList } from './app/post-list/post-list';
import { Home } from './app/home/home';


/* bootstrapApplication(App,  appConfig)
  .catch((err) => console.error(err));
 */

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: Home},
      { path: 'posts', component: PostList }
    ])
  ]
});