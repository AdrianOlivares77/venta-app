import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../service/producto';
import { PRODUCTOS } from '../service/productos.json';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Producto[], arg: string): Producto[] {
    const resultPosts: Producto[] = [];
    for (const post of value) {
      if ((post.categoria.indexOf(arg) > -1 || post.categoria.toLowerCase().indexOf(arg) > -1) ||
      (post.nombre.indexOf(arg) > -1 || post.nombre.toLowerCase().indexOf(arg) > -1)) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
