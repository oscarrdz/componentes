import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatatimePageRoutingModule } from './datatime-routing.module';

import { DatatimePage } from './datatime.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatatimePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatatimePage]
})
export class DatatimePageModule {}
