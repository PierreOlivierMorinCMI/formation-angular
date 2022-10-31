import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  AfterViewInit, AfterViewChecked, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
  implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };

  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('text Content' + this.header.nativeElement.textContent);
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('After content Init');
    console.log('text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('After content checked');
  }

  ngAfterViewInit() {
    console.log('After view Init');
  }

  ngAfterViewChecked() {
    console.log('After view checked');
  }

  ngOnDestroy(): void {
    console.log('on destroyed');
  }

}
