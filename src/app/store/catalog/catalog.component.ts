import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  productos: any[] = [
    {"id": "1", "name": "Batería", "price":"100", "cant":"10", "photo": "https://bateriasmegaforce.com/wp-content/uploads/2018/07/bateriamegaforce_-3.png", "sell":true, "job": false, "treding": false},
    {"id": "2" , "name":"Trending" ,"price":"" ,"cant":"" ,"photo":"https://revistacentrozaragoza.com/wp-content/uploads/2017/09/foto_3.jpg", "sell":false, "job": false, "treding": true},
    {"id":"3" , "name":"Cable de Bujía" ,"price":"20" ,"cant":"10" ,"photo":"https://www.actualidadmotor.com/wp-content/uploads/2008/01/cables-bujias.jpg", "sell":true, "job": false, "treding": false},
    {"id":"4" , "name":"Rolineras" ,"price":"70" ,"cant":"5" ,"photo":"https://irp-cdn.multiscreensite.com/b328aee3/dms3rep/multi/860.jpg", "sell":true, "job": false, "treding": false},
    {"id":"5" , "name":"Amortiguadores" ,"price":"65" ,"cant":"15" ,"photo":"https://www.bardahlindustria.com/wp-content/uploads/2019/11/amortiguadores-clave-maquinas-industrial-blog-bardahl.jpg", "sell":true, "job": false, "treding": false},
    {"id":"6" , "name":"Anillos" ,"price":"35" ,"cant":"40" ,"photo":"https://cdn.shopify.com/s/files/1/0574/5353/products/Grant_Ring_set_Plain_1995_8dab38f8-08a2-455d-8ceb-ea477d61f637.jpg?v=1587787910", "sell":true, "job": false, "treding": false},
    {"id":"7" , "name":"Pistones" ,"price":"140" ,"cant":"12" ,"photo":"https://cdn.shopify.com/s/files/1/0558/2834/9115/products/D_693473-MLV29645934727_032019-B_1200x1200.jpg?v=1647958350", "sell":true, "job": false, "treding": false},
    {"id":"8" , "name":"Buje" ,"price":"82" ,"cant":"4" ,"photo":"https://fraemma.com/wp-content/uploads/2016/06/1799-BUJE-RUEDA-DEL-CDE120.jpg", "sell":true, "job": false, "treding": false},
    {"id":"9" , "name":"Árbol de leva" ,"price":"120" ,"cant":"6" ,"photo":"https://como-funciona.co/wp-content/uploads/2018/09/Como-funciona-un-árbol-de-levas.jpg", "sell":true, "job": false, "treding": false},
    {"id":"10" , "name":"Alternador" ,"price":"210" ,"cant":"20" ,"photo":"https://m.media-amazon.com/images/I/816srAIIQhL.jpg", "sell":true, "job": false, "treding": false},
    {"id":"11" , "name":"Kit Cadena de tiempo" ,"price":"55" ,"cant":"" ,"photo":"https://http2.mlstatic.com/D_NQ_NP_969853-MLV31250463479_062019-O.jpg", "sell":true, "job": false, "treding": false},
    {"id":"12" , "name":"Oferta de trabajo" ,"price":"" ,"cant":"" ,"photo":"https://ocp.tech/img/hero-img3.png", "sell":false, "job": true, "treding": false},
  ];

  public Date = (new Date(Date.now())).toLocaleDateString();

  ngOnInit(): void {
  }

}
