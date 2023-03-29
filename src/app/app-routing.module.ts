import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './dashboard/Components/contacts/contacts.component';
import { FormComponent } from './dashboard/Components/form/form.component';


const routes: Routes = [
  {path:'contacts', component:ContactsComponent },
  {path:'form', component:FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
