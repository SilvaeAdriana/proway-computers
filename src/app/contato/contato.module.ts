import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';


import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
//import { NgxMaskModule}   from  'ngx-mask';



@NgModule({
  declarations: [
    ContatoComponent
  ],


  imports: [
    CommonModule,
    ContatoRoutingModule,
    ReactiveFormsModule,
    //NgxMaskModule.forRoot(),
   
  ]
})


export class ContatoModule implements OnInit{ 
 
  ngOnInit(): void {
      
  }


}
