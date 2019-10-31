import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LoginComponent } from './components/login/login.component';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { BorderDirective } from './directive/border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BreadcrumbComponent,
    DurationPipe,
    OrderByPipe,
    BorderDirective,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BreadcrumbComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    BorderDirective,
  ]
})
export class SharedModule {}
