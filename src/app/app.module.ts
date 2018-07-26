import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { OrderComponent } from './components/order/order.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductDetailGuard } from './components/product/product-detail/product-detail.guard';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'product', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ProductComponent,
    ConvertToSpacesPipe,
    StarComponent,
    OrderComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
