import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({transform: 'translateX(+100%)'}),
        animate('.5s ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit{
  public products:any[] = [];
  public isCatHovered:string = '';

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef,
  ) {
  }


  ngOnInit() {
    this.getHomeProducts();
  }

  getHomeProducts(){
    var data = [];
    data['controller'] = 'base';
    data['action'] = 'home_products'
    this.dataService.Get(data).subscribe((res:[]) => {
      this.products = res['data'];
      this.cdr.detectChanges();
    })
  }

  catHovered(value){
    console.log(value);
    this.isCatHovered = value;
  }

}
