import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';
import { ILoader } from '../../shared/interfaces/loader.model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSubject = new Subject<ILoader>();
  loaderState = new Observable(fn => this.loaderSubject.subscribe(fn));
  constructor(){}
  show() {
    this.loaderSubject.next(<ILoader>{show:true});
  }
  hide() {
    this.loaderSubject.next(<ILoader>{show:false});
  }
}
