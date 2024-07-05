import { NgModule } from '@angular/core'
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  exports: [
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzMessageModule,
    NzLayoutModule,
    NzSelectModule,
    NzDatePickerModule,
  ],
})
export class NgZorroImportsModule {}

