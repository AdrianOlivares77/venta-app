import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPosts = [];
    for (const post of value) {
      if (post.categoria.indexOf(arg) > -1 || post.categoria.toLowerCase().indexOf(arg) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
