import { Pipe, PipeTransform } from '@angular/core';
import { MediaProvider } from './../../providers/media/media';
import { Picture } from '../../interfaces/posting';

/**
 * Generated class for the GetByTagPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'getByTag',
})
export class GetByTagPipe implements PipeTransform {
  constructor(public mediaProvider: MediaProvider) {

  }

  async transform(tag: string) {
    return new Promise((resolve, reject) => {
      this.mediaProvider.getFilesByTag(tag).subscribe((files: Picture[]) => {
        files.forEach((file: Picture) => {
          console.log('Giva pics: ', file);
          console.log('pic_id: ', file.file_id);
          resolve(file.file_id);
          // this.mediaProvider.getSingleMedia(file.file_id);
        });
      });
    });
  }
}
