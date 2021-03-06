import { Component, OnInit } from '@angular/core';
import { ClientService } from '../servicios/client.service';
import { NegociosService } from '../servicios/negocios.service';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoClickService} from '../servicios/carrito-click.service';
import { IItem } from '../interfaces/item.interface';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {

  negocioData1;
  productoData1;

  dataEmpresaId: any;
  dataProducto: any;
  id;
  form: FormGroup;

  //public listaProductos:Array<IItem>[]

  public abrirCart:boolean = false;

  //Esta variable es donde vamos a guardar los datos de cada compra
  public detallesFact : Array<IItem>=[];

  constructor(
    private fb: FormBuilder,
    private client: ClientService,
    private negocioService: NegociosService,
    private route: ActivatedRoute,
    public carro : CarritoClickService
    ) {}

  ngOnInit(): void {
    this.carro.init();

    this.id = localStorage.getItem('id_negocio')
    console.log("id del localStorage:", this.id)

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id += params.get('id')
      let data = {"id": this.id}
      console.log("data: ", data)

    this.client.postRequestEmpresaId('http://localhost:5000/api/v01/user/datosempresaid', data).subscribe(

    (data): any => {
      this.dataEmpresaId = data['negocio_id']
      console.log("Mostrar negocio por id: ", data['negocio_id'])
      var correo = data['negocio_id']
      for (const add of correo){
        localStorage.setItem("correoNegocio",add.correo);
      }
      },

      (error: any) => {
        console.log(error)
      })


      this.client.postRequestProductosIdEmpresa('http://localhost:5000/api/v01/user/productoempresa', data).subscribe(

        (data): any => {
          this.dataProducto = data["data"]
          console.log("productos empresa por id:", data['data'])
        },

        (error: any) => {
          console.log(error)

        })

      });

        this.negocioService.negociocomprar$.subscribe( dataNegocio => {
          this.negocioData1 = dataNegocio
          console.log("Este es el negocio", this.negocioData1)
        });

        this.negocioService.productocomprar$.subscribe( dataProducto1 => {
          this.productoData1 = dataProducto1
          console.log("esto son los productos:", this.productoData1)
        })

      }

       //Metodo para agregar en el carrito de compras
       async OnSubmit(id:any){
           //Consumo a un servicio del carro
           this.carro.addProductCars(id, this.dataProducto,1);
       }
    }






