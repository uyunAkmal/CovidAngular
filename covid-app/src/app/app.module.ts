import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidComponent } from './covid/covid.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { HelloComponent } from './hello/hello.component';
import { MiningComponent } from './mining/mining.component';
import { BonusComponent } from './bonus/bonus.component';
import { CovidDeleteComponent } from './covid-delete/covid-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    HeaderComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    HelloComponent,
    MiningComponent,
    BonusComponent,
    CovidDeleteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
        
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
