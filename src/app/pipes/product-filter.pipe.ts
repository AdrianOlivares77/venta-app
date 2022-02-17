import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../service/producto';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Producto[], arg: string): Producto[] {
    const resultPosts = [];
    for (const post of value) {
      if ((post.categoria.indexOf(arg) > -1 || post.categoria.toLowerCase().indexOf(arg) > -1) || 
      (post.nombre.indexOf(arg) > -1 || post.nombre.toLowerCase().indexOf(arg) > -1)) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
