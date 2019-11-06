import { Component, forwardRef, Input, OnInit} from '@angular/core';
import { CreationDateComponent } from '../creation-date/creation-date.component';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  providers: [
   {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() =>  DurationComponent),
     multi: true
   }
 ]
})

export class DurationComponent implements ControlValueAccessor,OnInit {
  @Input() exist: boolean;
  @Input() duration: number;
  public durationControl: FormControl = new FormControl();
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
    this.durationControl.setValue(value);
  }
  ngOnInit () {
    this.durationControl.valueChanges.subscribe((value: string) => {
      this.onChange(value);
      this.onTouch();
    });
  }
}
