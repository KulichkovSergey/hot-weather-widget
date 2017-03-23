import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-resort-info',
  templateUrl: './resort-info.component.html',
  styleUrls: ['./resort-info.component.css']
})
export class ResortInfoComponent implements OnInit {

  @Input()
  public photoUrl: string;

  @Input()
  public selectedResort: resort;

  public constructor() {
  }

  public  ngOnInit() {
  }

}
