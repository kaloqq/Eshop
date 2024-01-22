import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "https://opamy.com/eshop/index.php";

  constructor(private httpClient: HttpClient) { }

  public Get(data: any){
    return this.httpClient.get(this.REST_API_SERVER, {params: data});
  }
}
