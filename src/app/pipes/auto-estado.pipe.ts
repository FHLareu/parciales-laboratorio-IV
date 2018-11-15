import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoEstado'
})
export class AutoEstadoPipe implements PipeTransform {

  transform(estado: any, args?: any): any {

    let retorno: string = "";

    if (estado < 1000)
      retorno = "Nuevo";
    else
      if (estado > 1000 && estado < 5000)
        retorno = "En blande";
      else
        retorno = "Usado";

    return retorno;
  }

}
