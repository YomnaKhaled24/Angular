import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FavouritsComponent } from './favourits/favourits.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: 
Routes = [
    {
        path: "",
        component: ProductListComponent
    },
    {
        path: "details/:id",
        component: ProductDetailsComponent

    },
    {
        path: "cards",
        component: CardsComponent

    },
    {
        path: "login",
        component: LoginComponent

    },
    {
        path: "register",
        component: RegisterComponent

    },
    {
        path: "favourits",
        component: FavouritsComponent

    },
    {
        path: "**",
        component: NotFoundComponent

    },
];

