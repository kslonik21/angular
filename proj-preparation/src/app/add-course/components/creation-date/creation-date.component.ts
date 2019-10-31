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
export class CreationDateComponent implements ControlValueAccessor, OnInit {
  @Input() public creationDate: string;
  public creationControl: FormControl = new FormControl();

  public onChangeCallback: (data: any) => void;
  public onTouchedCallback: () => void;

  ngOnInit () {
    this.creationControl.valueChanges.subscribe((value: string) => {
      this.onChangeCallback(value);
      this.onTouchedCallback();
    });
  }

  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: string): void {
    this.creationControl.setValue(value);
    console.log(value);
  }
}
