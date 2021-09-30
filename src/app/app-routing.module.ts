import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./show/show.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path : "",
    component:ShowComponent
  },
  {path :"create",
    component: CreateComponent

  },
  {path :"edit/:id",
    component: EditComponent
  },
  {
    path : "delete/:id",
    component :DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
