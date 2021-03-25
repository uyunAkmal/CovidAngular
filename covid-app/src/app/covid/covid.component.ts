import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CovidApiService } from '../covidapi.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';
import { CovidCasesDesc } from 'src/model/CovidCasesDesc';

@Component({
  selector: 'app-covid',
  providers: [CovidApiService],
  styleUrls: ['./covid.component.css'],
  templateUrl: './covid.component.html',

})
export class CovidComponent implements OnInit {
  public covidTotalDaily: any;

  public covidTotalDesc: any[] = [];

  public desc: any;

  public descObject: any;

  public newDesc: any;

  public updateDesc: any;

  constructor(
    private httpClient: HttpClient,
    public covidApiService: CovidApiService,
    private confirmationDialogService: ConfirmationDialogService

  ) { }

  ngOnInit(): void {
    this.descObject = {};
    this.updateDesc = {};
    this.getCovid();
    this.getCovidDesc();

    console.log("Covid Component Inited");
    console.log("Total of Description Column Row --->" + this.descObject.length);
  }

  getCovid(): any {
    this.covidTotalDaily = this.covidApiService.getCovid().subscribe((data: any) => {
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

  getCovidDesc(): any {
    this.covidApiService.getCovidDesc().subscribe((data: any) => {
      console.log(data);
      this.covidTotalDesc = data;
    });

    return this.covidTotalDesc;
  }

  onSelectDesc(desc: any) {

    console.log("desc-->" + this.desc);
    if (this.desc[0]) {
      this.descObject = this.desc[0];
      console.log("desc id-->" + this.descObject.id);
      console.log("desc description-->" + this.descObject.description);
    }
  }

  deleteDesc() {
    console.log("covidTotalDesc length-->" + this.covidTotalDesc.length);

    if (this.covidTotalDesc.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.covidApiService.deleteDesc(this.descObject.id).then(
        resolve => {
          this.getCovidDesc();
        });
    }


  }

  addDesc() {
    this.covidApiService.addDesc(this.newDesc).then(
      resolve => {
        this.getCovidDesc();
      });
  }

  onSelectUpdateDesc(desc: any) {

    console.log("updateDesc-->" + this.updateDesc);
    if (this.desc[0]) {
    
      let clonedDesc = Object.assign({}, this.desc[0]);
      // use a new cloned Object to prevent pass by reference value in the class
      this.updateDesc = clonedDesc;
      console.log("updateDesc id-->" + this.updateDesc.id);
      console.log("updateDesc description-->" + this.updateDesc.description);
    }
  }

  putDesc() {

    this.covidApiService.putDesc(this.updateDesc).then(
      resolve => {
        this.getCovidDesc();
      });
  }
}
