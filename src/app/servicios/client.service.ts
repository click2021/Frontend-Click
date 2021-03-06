import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  //Servio del registro de los usuarios
  postRequestRegistroUsers(route: string, data?: any, token?: string) {
    let config: any = {
      reponseType: "json"
    }

    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['header'] = header;

    }
    return this.http.post(route, data, config);
  }

  postRequestLogin(route: string, data?: any, token?: string) {

    let config: any = {
      responseType: "json"
    }

    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config['header'] = header;
    }
    return this.http.post(route, data, config);
  }


  postRequestEmpresaId(route: string, data?: any, token?: string) {
    let config: any = {
      reponseType: "json"
    }
    
    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['headers'] = header;
    }

    return this.http.post(route, data, config)
  }

  postRequestPedido(route: string, data?: any, token?: string) {
    let config: any = {
      responseType: "json"
    }

    if (token) {
      const herder = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['herders'] = herder
    }

    return this.http.post(route, data, config);
  }



  getRequestDataEmpresa(route: string, token?: string) {

    let config: any = {
      responseType: "json"
    }

    if (token) {
      const heder = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['headers'] = heder
    }
    return this.http.get(route, config);
  }

  /* 
 getRequestToken(route: string, token?:string) {

    let config:any = {
      responseType: "json"
    }
    if (token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config["headers"] = header;
    }
    console.log(config);

    return this.http.get(route, config);
  } */


  postRequestProductosIdEmpresa(route: string, data?: any, token?: string) {
    let config: any = {
      responseType: "json"
    }

    if (token) {
      const herder = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['herders'] = herder
    }

    return this.http.post(route, data, config);
  }

  postRequestId(route: string, id: any, token?: string) {
    let config: any = {
      responseType: "json"
    }
    if (token) {
      const herder = new Headers().set('Authorization', `Bearer ${token}`)
      config['herder'] = herder;
    }
    return this.http.post(route, id, config);
  }

  /*Servicio del formulario de pedido*/
  postRequestFormularioPedido(route: string, data?: any) {
    let config: any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;

    return this.http.post(route, data, config);
  }


  postRequestEnviarProductos(route: string, id: any, token?: string) {
    let config: any = {
      responseType: "json"
    }
    if (token) {
      const herder = new Headers().set('Authorization', `Bearer ${token}`)
      config['herder'] = herder;
    }
    return this.http.post(route, id, config);
  }

  //servicio pedir id del pedido
  getRequestPedirIdPedido(route: string, token?: string) {
    let config:any = {
      responseType: "json"
    }
    if(token) {
      const herder = new HttpHeaders().set(`Authorization`, `Bearer ${token}`)
      config['heders'] = herder
    }
    return this.http.get(route, config);
  }


  postRequestEnviarPedidoDetalles(route: string, data?: any, token?: string) {
    let config: any = {
      reponseType: "json"
    }

    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['header'] = header;

    }
    return this.http.post(route, data, config);
  }

  //Modulo Negocio
  getRequestMostrarTodosLosNegocios(route: string, token?: string){
    let config:any = {
      responseType: "json"
    }

    if(token){
      const herder = new HttpHeaders().set('Authorization', `Bearer ${token}`)
      config['heders'] = herder
    }

    return this.http.get(route, config);
  }

  getRequestMostrarNegocio(route: string, id: number) {
    let config:any = {
      responseType: "json"
    }
    const params = new HttpParams().set('id', `${id}`);
    config["params"] = params;

    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;

    return this.http.get(route, config);
  }

  getRequestMostrarNegocios(route: string,data? : any){
    let config:any = {
      responseType: "json"
    }
    return this.http.post(route,data,config);
  }

  getRequestMostrarNegocioId(route: string, id: number) {
    let config:any = {
      responseType: "json"
    }
    const params = new HttpParams().set('id', `${id}`);
    config["params"] = params;

    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;

    return this.http.get(route, config);
  }

  postRequestFormularioEmpresa(route: string ,data? :any){
    let config:any = {
      responseType: "json"
    }
    return this.http.post(route,data,config);
  }

  postRequestActualizarEmpresa(route: string ,data? :any){
    let config:any = {
      responseType: "json"
    }
    return this.http.post(route,data,config);
  }

  deleteRequestEliminarNegocioId(route: string, data:any) {
    let httpParams = new HttpParams().set('id', data);

    let options = { params: httpParams };
    return this.http.delete(route,options);
  }

  //Modulo Producto

  getRequestMostrarProductos(route: string, id: number) {
    let config:any = {
      responseType: "json"
    }
    const params = new HttpParams().set('id', `${id}`);
    config["params"] = params;

    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;

    return this.http.get(route, config);
  }

  getRequestProductoId(route: string, id: number) {
    let config:any = {
      responseType: "json"
    }

    const params = new HttpParams().set('id', `${id}`);
    config["params"] = params;

    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;

    return this.http.get(route, config);
  }

  postRequestEnviarProductoCreado(route:string, data? :any) {
    let config:any = {
      responseType: "json"
    }
    /*if
      const header = new Headers().set('Authorization', `Bearer ${}`)
      config['header'] = header;
    */
    return this.http.post(route,data,config);
  }

  postRequestActualizarProducto(route: string ,data? :any){
    let config:any = {
      responseType: "json"
    }
    return this.http.post(route,data,config);
  }
  getRequestEliminarProductoId(route: string, data :any) {
    let config: any = {
      responseType: "json"
    }
    return this.http.post(route,data, config);
  }
  deleteRequestEliminarProductos(route: string, data:any) {
    let config: any = {
      responseType: "json"
    }
    return this.http.post(route,data,config);
  }
  postDeleteUser(route: string, data?: any, token?: string) {

    let config: any = {
      responseType: "json"
    }

    if (token) {
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config['header'] = header;
    }
    return this.http.post(route, data, config);
  }

  getHistorialPedidos(route: string,data:any){
    let config:any={
      responseType:"json"
    }
    return this.http.post(route,data,config)
  }
  
}

