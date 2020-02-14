import { NgModule } from '@angular/core';
import { EntityMetadataMap, EntityDataModule } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Todo: {},
};


@NgModule({
  declarations: [],
  imports: [
    EntityDataModule.forRoot({ entityMetadata })
  ]
})
export class EntityStoreModule { }
