import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
})
export class HelloComponent implements OnInit {

  constructor(
    // Inject your HTTP Client Service here
    private httpClient: HttpClient,

    // Inject your Hello Service Here
    private helloService: HelloService,
    
    // Inject your confirmation dialog
    private confirmationDialogService: ConfirmationDialogService
    ) {     
  }

  ngOnInit(): void {
    // onInit and Constructor difference
    // https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit#:~:text=The%20main%20difference%20between%20constructor,how%20the%20code%20is%20structured.

    // initialize by call the component method here. 

    // this.getBasicHello();
    // this.getBasicHelloSubscribe();
  }

  hello: string = 'hello world';

  input: string = 'input';

  // Basic Method without calling a service
  public getBasicHello(): any {
    this.httpClient.get(`http://localhost:8081/covid/hello`, { responseType: 'text' })
      .subscribe((data: any) => 
                  {
                    // no action yet
                  }
                );
   
  }

  // related to mining component exercise 
  // Method with response data subscription and assign hello variable with response data
  // Get Method without Service
  public getBasicHelloSubscribe(): any {
    this.httpClient.get(`http://localhost:8081/covid/hello`, { responseType: 'text' })
      .subscribe((data: any) => 
                  {
                    // assign HTTP response with local variable
                    this.hello = data;
                  }
                );   
  }

  // Call HTTP Hello Get with Service
  // Use of Service is for ease of maintenance especially maintenance the HTTP URL
  // get Method with Service
  public getLogging() {
    this.helloService.getLogging(this.input)
      .subscribe((data: any) => 
                  {
                      // assign HTTP response with local variable
                      this.hello = data;
                  }
                );   
  }


  // Call HTTP Get Logging with Promise
  // Only useful for async HTTP call 

  public getLoggingWithPromise() {
      this.helloService.getLoggingWithPromise(this.input).then(
        resolve => {

          // this line below will be executed only after HTTP response is completed
          this.hello = this.helloService.loggingData;
        });;
  }

  public getLoggingWithoutPromiseThen() {
    this.helloService.getLoggingWithPromise(this.input);

    // this line below will be executed WIHOUT HTTP response is completed
    this.hello = this.helloService.loggingData;
}

public getLoggingData() {
      return this.helloService.loggingData;
  }

}
