import { Component, forwardRef, Input, OnInit} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AuthorsService } from '../../../core/service/authors.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [
   {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() =>  AuthorsComponent),
     multi: true
   }
 ]
})
export class AuthorsComponent implements ControlValueAccessor,OnInit {
  public authors = [];
  public authorSelects = [];
  public show: boolean = false;
  constructor(private authorsService: AuthorsService){}
  public ngOnInit() {
    this.setAuthors();
  }
  public setAuthors() {
    this.authorsService.getAuthors().subscribe(authors => {
      this.authors = authors;
    })
  }
  public authorsControl: FormControl = new FormControl([]);
  public onChange: any = () => {}
  public onTouch: any = () => {};
  public registerOnChange(fn: any) {
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouch= fn;
  }
  setDisabledState(isDisabled: boolean): void {
  }
  writeValue(value: string): void {
    this.authorsControl.setValue(value);
  }
  public selectSuggestion(s) {
    this.authorSelects.find((item) => item.id === s.id) ?
    this.authorSelects = this.authorSelects.filter((item) => item.id !== s.id) :
    this.authorSelects.push(s);
    this.show=false;
  }
  public deleteSelects(s) {
    this.authorSelects = this.authorSelects.filter((item) => item.id !== s.id);
  }
  public suggest() {
    this.show = true;
  }
  public isSelected(s:any): boolean {
    return this.authorSelects.findIndex((item) => item.id === s.id) > -1 ? true : false;
  }
}
