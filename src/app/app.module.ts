import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BowlsComponent } from './pages/bowls/bowls.component'
import { SmoothiesComponent } from './pages/smoothies/smoothies.component';
import { CoffeeComponent } from './pages/coffee/coffee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bowls', component: BowlsComponent },
  { path: 'smoothies', component: SmoothiesComponent },
  { path: 'coffee', component: CoffeeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BowlsComponent,
    SmoothiesComponent,
    CoffeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
