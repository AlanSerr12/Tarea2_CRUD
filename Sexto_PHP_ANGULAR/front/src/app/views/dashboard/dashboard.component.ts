import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { ProductosService } from '../../Services/productos.service';
import { ProveedoresService } from '../../Services/proveedores.service';
import { StocksService } from '../../Services/stocks.service';
import { IProductos } from 'src/app/Interface/iproductos';
import { Iproveedor } from 'src/app/Interface/iproveedor';
import { Stock } from 'src/app/Interface/stock';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  productos: IProductos[];
  proveedores: Iproveedor[];
  stocks: Stock[];
  constructor(
    //private chartsData: DashboardChartsData,
    private productosServicio: ProductosService, private proveedorServicio: ProveedoresService, private stocksServicio: StocksService
  ) {}

  ngOnInit(): void {
    this.cargalista();
    this.cargalistaProveedor();
    this.cargalistaStock();
    //this.initCharts();
  }
  private cargalista() {
    this.productosServicio.todos().subscribe((data) => {
      console.log(data);
      this.productos = data;
    });
  }

  private cargalistaProveedor() {
    this.proveedorServicio.todos().subscribe((data) => {
      console.log(data);
      this.proveedores = data;
    });
  }

  private cargalistaStock() {
    this.stocksServicio.todos().subscribe((data) => {
      console.log(data);
      this.stocks = data;
    });
  }
  // initCharts(): void {
  //   this.mainChart = this.chartsData.mainChart;
  // }

  /* setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }*/
}
