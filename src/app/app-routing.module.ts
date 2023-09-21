import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { StoresListPageComponent } from './pages/stores-list-page/stores-list-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'stores', component: StoresListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
