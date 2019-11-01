import { Component, forwardRef, Input} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CreationDateComponent } from '../creation-date/creation-date.component';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  providers: [
   {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => CreationDateComponent),
     multi: true
   }
 ]
})

export class DurationComponent {
  @Input() exist: boolean;
  @Input() duration: number;
}
