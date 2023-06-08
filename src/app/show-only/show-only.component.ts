import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount, selectName } from '../NgRx/selectors';

@Component({
  selector: 'app-show-only',
  templateUrl: './show-only.component.html',
  styleUrls: ['./show-only.component.css']
})
export class ShowOnlyComponent implements OnInit, OnDestroy {
  count$: Observable<number>;
  name$: Observable<string>;
  name: string;
  varSub!: null | Subscription;

  constructor(private store: Store) {
    this.count$ = this.store.select(selectCount);
    this.name$ = this.store.select(selectName);
    this.name = '';
  }

  ngOnInit(): void {
    this.varSub = this.name$.subscribe((val) => {
      this.name = val;
    });
  }
  ngOnDestroy(): void{
    if(this.varSub) this.varSub.unsubscribe();
  }
}
