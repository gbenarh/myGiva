import { Pipe, PipeTransform } from '@angular/core';
import { MediaProvider } from '../../providers/media/media';
import { Picture } from '../../interfaces/posting';

/**
 * Generated class for the ThumbnailPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private mediaProvider: MediaProvider) {

  }

  async transform(id: number, ...args) {
    // console.log('*id ni: ', id);

    return new Promise((resolve, reject) => {
      this.mediaProvider.getSingleMedia(id).subscribe((response: Picture) => {
        console.log('resp: ', response);
        // console.log('args ni: ', args[0])
        // const url = this.mediaProvider.uploadFilePath;
          switch (args[0]) {
            case 'large':
              resolve(response.thumbnails.w640);
              break;
            case 'medium':
              resolve(response.thumbnails.w320);
              break;
            case 'screenshot':
              resolve(response.screenshot);
              break;
            default:
              resolve(response.thumbnails.w160);
          }
      });
    });
  }

}
