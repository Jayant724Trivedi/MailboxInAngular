import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MailComponent} from './mail/mail.component';
import { ComposeComponent } from './compose/compose.component';
import { SentComponent } from './sent/sent.component';
const routes: Routes = [
  {path: 'mail', component: MailComponent},
  {path: '', redirectTo:'mail',pathMatch:'full'},
  {path: 'compose', component: ComposeComponent},
  {path: 'sent', component: SentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MailComponent, ComposeComponent, SentComponent]
