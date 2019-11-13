import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/orderBy.pipe';
import { BorderDirective } from './directive/border.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DurationPipe,
    OrderByPipe,
    BorderDirective,
    FilterPipe,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    BorderDirective,
    LoaderComponent
  ]
})
export class SharedModule {}
