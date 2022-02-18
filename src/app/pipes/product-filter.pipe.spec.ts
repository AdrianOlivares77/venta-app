import { Producto } from '../service/producto';
import { ProductFilterPipe } from './product-filter.pipe';

describe('ProductFilterPipe', () => {

  let productos: Producto[] = [];
  const pipe = new ProductFilterPipe();

  beforeEach(() => {
    productos= [
      {
        id: '1', nombre: 'Pelota', precio: 5000, categoria: 'Deportes', caracteristicasPrincipales: 'Redonda', imagen: 'https://monterosport.com.ar/wp-content/uploads/2016/05/pelota-futbol-nassau-fick-off-500x500.jpg'
      },
      {
        id: '2', nombre: 'Escritorio', precio: 100000, categoria: 'Muebles', caracteristicasPrincipales: 'Grande, cafe, con cajones', imagen: 'https://importclub.imgix.net/escritorio-oficina-simple_1269.jpg?w=500&h=500&lossless=true&auto=format&fill-color=FFFFFF&fit=fill&fill=solid'
      },
      {
        id: '3', nombre: 'Notebook', precio: 500000, categoria: 'Tecnologia', caracteristicasPrincipales: '500gb de disco duro, procesador Intel i9', imagen: 'https://www.tiendaentelvisa.cl/image/cache/catalog/products/68024g1-500x500.jpg'
      },
      {
        id: '4', nombre: 'Cama', precio: 350000, categoria: 'Hogar', caracteristicasPrincipales: 'Box spring, con colchon incluido', imagen: 'https://multicentro.vteximg.com.br/arquivos/ids/175934-500-500/040202173-1.jpg?v=637719931522630000'
      },
      {
        id: '5', nombre: 'Cuaderno', precio: 500000, categoria: 'Hogar', caracteristicasPrincipales: 'Rojo de 100 hojas', imagen: 'https://s3.amazonaws.com/bsalemarket/55956/product/alb05040default.jpg'
      }
    ]
  });

  it('Creacion de Instancia', () => {
    const pipe = new ProductFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('Filtrar por Categoria', () => {
    let productosFiltrados = pipe.transform(productos,'Hogar');
    expect(productosFiltrados.length).toEqual(2);
  });

  it('Filtrar por Nombre', () => {
    let productosFiltrados = pipe.transform(productos,'Pelota');
    expect(productosFiltrados[0].nombre).toEqual('Pelota');
  });




});
