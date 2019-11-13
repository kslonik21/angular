import { Component,OnInit } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { LoaderService } from '../../../core/service/loader.service';
import { ILoader } from '../../models/loader.model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public isLoading: Subject<boolean> = this.loaderService.isLoading;a
  constructor(private loaderService: LoaderService) {}
  ngOnInit() {}
}
