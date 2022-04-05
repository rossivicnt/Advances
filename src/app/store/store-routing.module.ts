import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./catalog/catalog.component";
import { StoreComponent } from "./store.component";

const routes: Routes = [
    { 
        path: '', 
        component: StoreComponent,
        children: [
            { path: '', component: CatalogComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule {}