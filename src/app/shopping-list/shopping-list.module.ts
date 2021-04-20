import { NgModule } from "@angular/core";

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent,],
    imports: [
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingListComponent }
        ]),
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
    ],
})
export class ShoppingListModule {}

// CommonModule unlock *ngFor and *ngIf