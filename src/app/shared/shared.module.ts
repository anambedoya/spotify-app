import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
