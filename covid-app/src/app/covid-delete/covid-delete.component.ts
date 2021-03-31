import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';
import { BonusComponent } from '../bonus/bonus.component';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { CovidApiServiceBonus } from '../covidapibonus.service';

@Component({
  selector: 'app-covid-delete',
  providers: [CovidApiServiceBonus],
  templateUrl: './covid-delete.component.html',
  styleUrls: ['../share/css/share.component.css'],
})
export class CovidDeleteComponent implements OnInit {
  
  public covidTotalDaily: any;

  public covidTotalDescBonus: any[] = [];

  public desc: any;

  public descObjectBonus: any;

  public newDescBonus: any;

  public updateDescBonus: any;

  public postDescBonus: any;

  getCovidDesc: any;

  constructor(
    private httpClient: HttpClient,
    public covidApiServiceBonus: CovidApiServiceBonus,
    private confirmationDialogService: ConfirmationDialogService,
    public bonusComponent : BonusComponent
  ) { }

  ngOnInit(): void {

    this.descObjectBonus = {};
    this.updateDescBonus = {};
    this.postDescBonus = {};
    this.getCovidDesc();

    console.log("Covid Bonus Component Inited");
    console.log("Total of Description Column Row --->" + this.descObjectBonus.length);
  }
 
deleteDescriptionBonus(){

    if (this.bonusComponent.covidTotalDescBonus.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.covidApiServiceBonus.deleteDescriptionBonus(this.descObjectBonus.description).then(
        resolve => {
          this.bonusComponent.getCovidBonus();
        });
    }

  }
  descRemoveDuplicate() {
    console.log("covidTotalDesc lenght-->" + this.covidTotalDescBonus.length);
    if (this.bonusComponent.covidTotalDescBonus.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.covidApiServiceBonus.descRemoveDuplicate().then(
        resolve => {
          this.bonusComponent.getCovidBonus();
      });
  }
}
}
