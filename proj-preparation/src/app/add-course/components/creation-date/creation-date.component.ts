import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-creation',
  templateUrl: './creation-date.component.html',
  styleUrls: ['./creation-date.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreationDateComponent),
      multi: true
    }
  ]
})
export class CreationDateComponent implements ControlValueAccessor {
  @Input() public creationDate: string;

  public onChange: any = () => {}
  public onTouch: any = () => {};
  private disabled: boolean = true;
  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch= fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: string): void {
    this.creationDate = value;

  }
}
