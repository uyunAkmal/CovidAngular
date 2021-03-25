import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private httpClient: HttpClient, private confirmationDialogService: ConfirmationDialogService) { }

  public getCovid(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/latest`, { responseType: 'text' });
  }

  public getCovidDesc(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/desc`);
  }

  public deleteDesc(id: number): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete?id=` + id).subscribe((data: any) => {
        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        }
      )
    });
  }

  public addDesc(desc: string): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.get(`http://localhost:8081/covid/add?desc=` + desc).subscribe((data: any) => {

        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })

    });
  }


  public putDesc(body : any): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.put(`http://localhost:8081/covid/put`, body).subscribe((data: any) => {

        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })

    });
  }
}
