import { AfterContentChecked,
         AfterContentInit,
         Component,
         AfterViewChecked,
         AfterViewInit,
         DoCheck,
         OnChanges,
         OnDestroy,
         OnInit, 
         SimpleChanges} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  name: string = 'Diego';
  seconds: number = 0;
  mySubscription!: Subscription;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    this.mySubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.mySubscription = interval(1000).subscribe( i => {
      this.seconds = i;
    })
  }


  //
  save() {

  }

}
