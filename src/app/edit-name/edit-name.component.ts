import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectName } from '../NgRx/selectors';
import { updateName } from '../NgRx/actions';

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit, OnDestroy {
  name;
  name$: Observable<string>;
  varSub!: null | Subscription;

  constructor(private store: Store){
    this.name$ = this.store.select(selectName);
    this.name = new FormControl('');
  }
  ngOnInit(): void {
    this.varSub = this.name$.subscribe((val)=>{
      this.name = new FormControl(val);
    });
  }
  ngOnDestroy(): void {
    if(this.varSub) this.varSub.unsubscribe();
  }
  updateName(): void{
    let nameTemp: string = '';
    if(this.name.value) nameTemp = this.name.value;
    this.store.dispatch(updateName(nameTemp));
  }
}
