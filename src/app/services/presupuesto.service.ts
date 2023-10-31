import { Injectable } from '@angular/core';

export interface Gasto {
  gasto: string;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class PresupuestoService {
  presupuesto: number;
  restante: number;
  gastos: Gasto[] = [];

  constructor() {
    this.presupuesto = 0;
    this.restante = 0;
  }

  establecerPresupuesto(presupuesto: number) {
    this.presupuesto = presupuesto;
    this.restante = presupuesto;
  }

  agregarGasto(gasto: Gasto) {
    this.gastos.push(gasto);
    this.restante -= gasto.cantidad;
  }
}

