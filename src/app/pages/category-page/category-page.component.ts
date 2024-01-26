import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PagingConfig} from "../../models/paging-config.model";


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent implements OnInit{
  public categoryID:string = this.route.snapshot.paramMap.get('category');
  public trademark:string = this.route.snapshot.paramMap.get('trademark');
  public currentPage:number  = Number(this.route.snapshot.paramMap.get('page'));
  public categoryName:string = this.route.snapshot.paramMap.get('name');
  public search:string = this.route.snapshot.paramMap.get('search');
  public itemsPerPage: number = 20;
  public totalItems: number = 0;
  public pagingConfig: PagingConfig = {} as PagingConfig;
  public products:any;
  public categoryInfo = {
    mattresses: {
      heading: 'Матраци',
      description: 'Матракът е в основата на спокойния и здравословен сън. В тази категория ще откриете голям диапазон от висококачествени матраци и убедени сме, че те ще удовлетворят всяка ваша нужда.',
      icon: 'assets/images/icons/mattress-icon.svg'
    },
    topMattresses: {
      heading: 'Топ Матраци',
      description: 'В този раздел ще откриете топ матраци за спалня, единично легло и диван. Ако сегашният ви матрак не е особено удобен, то топ матраците са бюджетното решение на този проблем.',
      icon: 'assets/images/icons/top-mattresses.svg'
    },
    pillows: {
      heading: 'Възглавници',
      description: 'Не сте доволни от сегашната си възглавница и търсите нещо подходящо за вас или вашето дете? Значи сте на точното място.',
      icon: 'assets/images/icons/pillows.svg'
    },
    bedLinen: {
      heading: 'Спално бельо',
      description: 'Ние имаме точният отговор за вас – изпробвайте мекотата на луксозно българско спално бельо!',
      icon: 'assets/images/icons/bed-linen.svg'
    },
    children: {
      heading: 'Детски продукти',
      description: 'Създадохме серия от продукти за сън, специално проектирани за деца, за да можете не само вие, но и те да се чувстват спокойно през нощта.',
      icon: 'assets/images/icons/children.svg'
    },
    accessories: {
      heading: 'Аксесоари',
      description: 'С аксесоарите за спалня на Екотекс ще придадете индивидуалност и стил във вашето спално помещение.',
      icon: 'assets/images/icons/accessories.svg'
    }
  }
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
  }

  ngOnInit() {
    console.log(this.search)
    this.route.paramMap.subscribe(params => {
      this.getProducts();
    });
  }

  getProducts(){
    var data = [];
    data['controller'] = 'base';
    data['action'] = 'category_products';
    data['language'] = 'bg';
    data['category'] = this.categoryID;
    data['page'] = this.currentPage;
    data['trademark'] = this.trademark;
    data['search'] = this.search;
    data['sizing'] = '';
    this.dataService.Get(data).subscribe((res) => {
      this.products = res['data'];
      this.cdr.detectChanges();
      this.pagingConfig.totalItems = this.products.total;
    })
  }

  onTableDataChange(event:any){
    this.currentPage = event;
    this.router.navigate(['c', this.categoryName,this.categoryID,this.trademark,event,this.search]);
    this.pagingConfig.currentPage  = event;
  }

}
