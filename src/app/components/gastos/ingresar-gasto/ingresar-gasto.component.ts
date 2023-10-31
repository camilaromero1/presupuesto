import { Component } from '@angular/core';
import { PresupuestoService, Gasto } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
  gasto: string = '';
  cantidad: number = 0;

  constructor(private presupuestoService: PresupuestoService) {}

  agregarGasto() {
    this.presupuestoService.agregarGasto({gasto: this.gasto, cantidad: this.cantidad});
    this.gasto = '';
    this.cantidad = 0;
  }
}

