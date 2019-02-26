import { NgModule } from '@angular/core';
import { ThumbnailPipe } from './thumbnail/thumbnail';
import { GetByTagPipe } from './get-by-tag/get-by-tag';
import { GetUserTagPipe } from './get-user-tag/get-user-tag';

@NgModule({
	declarations: [ThumbnailPipe,
    GetByTagPipe,
    GetUserTagPipe],
	imports: [],
	exports: [ThumbnailPipe,
    GetByTagPipe,
    GetUserTagPipe]
})
export class PipesModule {}
