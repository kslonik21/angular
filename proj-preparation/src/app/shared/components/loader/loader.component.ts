import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { LoaderService } from '../../services/loader.service';
import { LoaderService } from '../../../core/service/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public isLoading;

  constructor(private loaderService: LoaderService) {}
  ngOnInit() {
    this.loaderService.loaderState.subscribe(val => this.isLoading = val);
  }
}
