import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// primeng-lts
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { DataViewModule } from 'primeng-lts/dataview';
import { RippleModule } from 'primeng/ripple';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';

import { ProgressBarModule } from 'primeng-lts/progressbar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { OrderListModule } from 'primeng/orderlist';
import { TreeModule } from 'primeng/tree';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { MultiSelectModule } from 'primeng/multiselect';
import { TimelineModule } from 'primeng/timeline';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MenuModule } from 'primeng/menu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { StepsModule } from 'primeng/steps';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { CarouselModule } from 'primeng/carousel';
import { CaptchaModule } from 'primeng/captcha';

// Forms
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import {FormsModule} from '@angular/forms';
//FILES
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
   exports: [
      ButtonModule,
      CardModule,
      FieldsetModule,
      MenubarModule,
      PanelMenuModule,
      SidebarModule,
      DropdownModule,
      ToolbarModule,
      SplitButtonModule,
      TableModule,
      DynamicDialogModule,
      ToastModule,
      ConfirmDialogModule,
      MessagesModule,
      DialogModule,
      TooltipModule,
      DataViewModule,
      RippleModule,
      PanelModule,
      RatingModule,
      DividerModule,
      BadgeModule,
      TagModule,
      ProgressBarModule,
      MessageModule,
      TabViewModule,
      BreadcrumbModule,
      OrderListModule,
      TreeModule,
      AccordionModule,
      OverlayPanelModule,
      ConfirmPopupModule,
      MultiSelectModule,
      TimelineModule,
      SkeletonModule,
      ProgressSpinnerModule,
      MenuModule,
      ContextMenuModule,
      StepsModule,
      TieredMenuModule,
      CarouselModule,
      CaptchaModule,
      HttpClientModule,


      //Forms
      FormsModule,
      InputTextModule,
      CheckboxModule,
      RadioButtonModule,
      InputTextareaModule,
      InputNumberModule,
      AutoCompleteModule,
      CalendarModule,
      InputSwitchModule,
      PasswordModule,
      InputMaskModule,

      //File
      FileUploadModule,
   ],
})
export class PrimeNgModule { }
