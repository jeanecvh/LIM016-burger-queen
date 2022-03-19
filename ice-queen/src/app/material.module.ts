import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatPseudoCheckboxModule } from "@angular/material/core";
import {MatCheckboxModule  } from '@angular/material/checkbox';
//import { MatCheckboxModule } from '@angular/Material'



@NgModule({
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class MaterialModule {}
