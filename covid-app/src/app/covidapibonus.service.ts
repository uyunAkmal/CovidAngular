import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';

@Injectable({
  providedIn: 'root'
})
export class CovidApiServiceBonus {
  removeDuplicateDesc(descRemove: any) {
    throw new Error('Method not implemented.');
  }
  //comment line below if got error
  public descObject: any;

  constructor(private httpClient: HttpClient, private confirmationDialogService: ConfirmationDialogService) { }


  public getCovid(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/latest`, { responseType: 'text' });
  }

  //retrieve data in trx_covid_case_bonus table
  public getCovidBonus(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/bonus`);
  }

  //add data in trx_covid_case_bonus table
  public addBonus(desc: string): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.get(`http://localhost:8081/covid/add/bonus?desc=` + desc).subscribe((data: any) => {

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

  //delete data in trx_covid_case_bonus table
  public deleteDescBonus(id: number): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete/bonus?id=` + id).subscribe((data: any) => {
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

  //Put function, Update Record in trx_covid_cases_bonus
  public putDescBonus(body: any): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.put(`http://localhost:8081/covid/put/bonus`, body).subscribe((data: any) => {

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

  //Post function. adding record via POST method into trx_covid_cases_bonus
  public addPostBonus(body: any) {
    //body.description = body.desc;
    return new Promise((resolve) => {
      return this.httpClient.post(`http://localhost:8081/covid/post/bonus`, body).subscribe((data: any) => {

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

  //Delete record by description from trx_covid_cases_bonus table
  public deleteDescriptionBonus(description: string): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/deletesoap/bonus?desc=` + description).subscribe((data: any) => {

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
  descRemoveDuplicate(): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete/duplicate/bonus`).subscribe((data: any) => {

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