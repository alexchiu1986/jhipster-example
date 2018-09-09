import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TasksTaskModule } from './task/task.module';
import { TasksRegionModule } from './region/region.module';
import { TasksCountryModule } from './country/country.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        TasksTaskModule,
        TasksRegionModule,
        TasksCountryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksEntityModule {}
