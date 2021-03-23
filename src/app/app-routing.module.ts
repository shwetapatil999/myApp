import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './products/home/home.component';
import { NokiyaComponent } from './products/nokiya/nokiya.component';
import { PagenofoundComponent } from './products/pagenofound/pagenofound.component';
import { RealmeComponent } from './products/realme/realme.component';
import { SamComponent } from './products/sam/sam.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },/// redirect to `home-component`
  { path: 'home', component:HomeComponent},
  { path:'sam', component:SamComponent },
  { path:'nokiya', component:NokiyaComponent },
  { path:'realme', component:RealmeComponent },
  { path: '**', component: PagenofoundComponent }//// Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
