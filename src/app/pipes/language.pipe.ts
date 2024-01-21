import {Inject, Pipe, PipeTransform, PLATFORM_ID} from "@angular/core";
import * as ln from "../../assets/translations/bg.json"
import {DOCUMENT, isPlatformBrowser} from "@angular/common";

@Pipe({
  name : 'translate'
})

export class LanguagePipe implements PipeTransform{
  public lng:any
  data: any = ln;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.lng = this.document.defaultView?.localStorage.getItem("language")?.toLowerCase();
    } else {
      this.lng = 'EN';
    }
  }
  transform(value: any): any {
    if(this.data[this.lng][value])return this.data[this.lng][value];
    if(this.data[this.lng][value] === undefined) {return}
  }
}
