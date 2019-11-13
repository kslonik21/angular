import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { RouterModule,Routes } from '@angular/router';
// import { CourseItemPublicService } from './core/service/course-item-public.service';
import { AddCourseModule } from './add-course/add-course.module';
import { CanActivateGuard } from './shared/guards/canactivate.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { ROUTES } from './app.routes';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    SharedModule,
    PagesModule,
    AddCourseModule,
    HttpClientModule
  ],
  providers: [
    CanActivateGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
