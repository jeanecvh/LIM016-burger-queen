import { NgModule } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
  ]


})

export class MaterialModule {}
