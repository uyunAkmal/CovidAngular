import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  
constructor(
  
  private httpClient: HttpClient,
  private confirmationDialogService: ConfirmationDialogService
  ) { 
    // constructor
}

public loggingData: any;

public getLogging(value: string): any {
   return this.httpClient.get(`http://localhost:8081/covid/logging?aNumberOnly=` + value, { responseType: 'text' });
}

public getLoggingWithPromise(value: string): Promise<any> 
      {
          let getURL = `http://localhost:8081/covid/logging?aNumberOnly=` + value;

          return new Promise((resolve) => 
          {

              return this.httpClient.get(getURL, { responseType: 'text' })
              .subscribe((data: any) => 
              {
                  console.log(data); 
                  this.loggingData = data;
                  resolve(data);
              }
              ,
              (error) => {
                console.log(error);
                this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError (error));
              })


          });// new Promise
    }//end getLoggingWithPromise

      

}
