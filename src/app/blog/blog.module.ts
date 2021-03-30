import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule, NzInputModule,
    NzSelectModule,
    NzTagModule,
    NzListModule,
    NzIconModule,],
})
export class BlogModule {}
