import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { PostList } from './app/post-list/post-list';
import { Home } from './app/home/home';
import { SinglePost } from './app/single-post/single-post';
import { Pagenotfound } from './app/pagenotfound/pagenotfound';


/* bootstrapApplication(App,  appConfig)
  .catch((err) => console.error(err));
 */

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: Home},
      { path: 'posts', component: PostList },
      { path: 'post/:id/:title' , component:SinglePost},
      /**
       * This wild card router must always be at the end of the router list . Otherwise, it is alqways selected.
       */
      { path: '**' , component: Pagenotfound}
    ])
  ]
});