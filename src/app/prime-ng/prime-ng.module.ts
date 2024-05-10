import { NgModule } from '@angular/core';


import { MenubarModule } from 'primeng/menubar';



//Modulo centralizado para importar todo lo del PrimeNG y exportarlo al exterior.

@NgModule({

  exports: [
    MenubarModule,

  ]
}
)
export class PrimeNgModule { }
