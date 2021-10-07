import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MacHomeContainerComponent } from './modules/core/Mac/mac-home-container/mac-home-container.component';
import { HeaderNavbarComponent } from './shared/components/header/header-navbar/header-navbar.component';
import { HeaderDeviceComponent } from './shared/components/header/header-device/header-device/header-device.component';
import { SingleDeviceHeaderComponent } from './shared/components/header/header-device/single-device-header/single-device-header.component';
import { MacMainContainerComponent } from './modules/core/Mac/mac-main-container/mac-main-container.component';
import { FullSizeCardComponent } from './shared/components/main/full-size-card/full-size-card.component';
import { ProductSpecsTableComponent } from './shared/components/main/product-specs-table/product-specs-table/product-specs-table.component';
import { ProductSingleSpecsComponent } from './shared/components/main/product-specs-table/product-single-specs/product-single-specs/product-single-specs.component';
import { UpperSingleSpecsComponent } from './shared/components/main/product-specs-table/product-single-specs/upper-single-specs/upper-single-specs.component';
import { LowerSingleSpecsComponent } from './shared/components/main/product-specs-table/product-single-specs/lower-single-specs/lower-single-specs.component';
import { FooterContainerComponent } from './shared/components/footer/footer-container/footer-container.component';
import { FooterNotesComponent } from './shared/components/footer/footer-notes/footer-notes.component';
import { FooterNavComponent } from './shared/components/footer/footer-nav/footer-nav.component';
import { CopyrightComponent } from './shared/components/footer/copyright/copyright.component';
import { FooterNavLinksComponent } from './shared/components/footer/footer-nav-links/footer-nav-links.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderContainerComponent } from './shared/components/header/header-container/header-container.component';
import { DiscountDeviceComponent } from './shared/components/header/discount-device/discount-device.component';



@NgModule({
  declarations: [
    AppComponent,
    MacHomeContainerComponent,
    HeaderNavbarComponent,
    HeaderDeviceComponent,
    SingleDeviceHeaderComponent,
    MacMainContainerComponent,
    FullSizeCardComponent,
    ProductSpecsTableComponent,
    ProductSingleSpecsComponent,
    UpperSingleSpecsComponent,
    LowerSingleSpecsComponent,
    FooterContainerComponent,
    FooterNotesComponent,
    FooterNavComponent,
    CopyrightComponent,
    FooterNavLinksComponent,
    HeaderContainerComponent,
    DiscountDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
