import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datas : any =[];
  constructor(private http: HttpClient) {}
  ngOnInit(){
    this.getdata().subscribe(res=>{
      console.log(res);
      this.datas = res;
    });
  }

  getdata(){
    return this.http
    .get("assets/api.json")
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }

}
