import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {

  constructor(private httpClient: HttpClient,) { 

  }

  ngOnInit(): void {
  }
  hello: string = 'Covid mining';

  public getBasicHelloSubscribe(): any {
    this.httpClient.get(`http://localhost:8091/covid/mining/my/`, { responseType: 'text' })
      .subscribe((data: any) => 
                  {
                    // assign HTTP response with local variable
                    this.hello = data;
                  }
                );   
  }
}
