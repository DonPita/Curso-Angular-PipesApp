import { NgModule } from '@angular/core';


import { MenuModule } from 'primeng/menu';



//Modulo centralizado para importar todo lo del PrimeNG y exportarlo al exterior.

@NgModule({

  exports: [
    MenuModule,

  ]
}
)
export class PrimeNgModule { }
