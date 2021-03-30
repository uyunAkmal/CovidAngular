import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { CovidApiServiceBonus } from '../covidapibonus.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit {

  public covidTotalDaily: any;

  public covidTotalDescBonus: any[] = [];

  public desc: any;

  public descObjectBonus: any;

  public newDescBonus: any;

  public updateDescBonus: any;

  public postDescBonus: any;

  constructor(
    private httpClient: HttpClient,
    public covidApiServiceBonus: CovidApiServiceBonus,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {

    this.descObjectBonus = {};
    this.updateDescBonus = {};
    this.postDescBonus = {};
    this.getCovid();
    this.getCovidBonus();

    console.log("Covid Bonus Component Inited");
    console.log("Total of Description Column Row --->" + this.descObjectBonus.length);
  }

  //display daily covid case
  getCovid(): any {
    this.covidTotalDaily = this.covidApiServiceBonus.getCovid().subscribe((data: any) => {
      console.log(data); this.covidTotalDaily = data;
    }
      ,
      (error: { error: { message: string; }; }) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      }
    );

    return this.covidTotalDaily;
  }
  //retrieve data in table trx_covid_case_bonus 
  getCovidBonus(): any {
    this.covidApiServiceBonus.getCovidBonus().subscribe((data: any) => {
      console.log(data);
      this.covidTotalDescBonus = data;
    });

    return this.covidTotalDescBonus;
  }

  onSelectDescBonus(desc: any) {

    console.log("desc-->" + this.desc);
    if (this.desc[0]) {
      this.descObjectBonus = this.desc[0];
      console.log("desc id-->" + this.descObjectBonus.id);
      console.log("desc description-->" + this.descObjectBonus.description);
    }
  }

    //add function into the table
    addBonus() {
      this.covidApiServiceBonus.addBonus(this.newDescBonus).then(
        resolve => {
          this.getCovidBonus();
        });
    }
  
    onSelectUpdateDescBonus(desc: any) {
  
      console.log("updateDesc-->" + this.updateDescBonus);
      if (this.desc[0]) {
      
        let clonedDesc = Object.assign({}, this.desc[0]);
        // use a new cloned Object to prevent pass by reference value in the class
        this.updateDescBonus = clonedDesc;
        console.log("updateDescBonus id-->" + this.updateDescBonus.id);
        console.log("updateDescBonus description-->" + this.updateDescBonus.description);
      }
    }

    //put record (update)
    //add code below
    putDescBonus(){

      this.covidApiServiceBonus.putDescBonus(this.updateDescBonus).then(
      resolve => {
        this.getCovidBonus();
      });
      

    }

    //delete a record from trx_covid_cases_bonus
    deleteDescBonus() {
      console.log("covidTotalDescBonus length-->" + this.covidTotalDescBonus.length);

      if (this.covidTotalDescBonus.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
      }
      else {
        this.covidApiServiceBonus.deleteDescBonus(this.descObjectBonus.id).then(
        resolve => {
          this.getCovidBonus();
      });
    }
  }

  addPostBonus(){
    this.covidApiServiceBonus.addPostBonus(this.postDescBonus).then(
      resolve => {
        this.getCovidBonus();
      });
  }

  //delete
  deleteDescriptionBonus(){

    if (this.covidTotalDescBonus.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.covidApiServiceBonus.deleteDescriptionBonus(this.descObjectBonus.description).then(
        resolve => {
          this.getCovidBonus();
        });
    }

  }

}