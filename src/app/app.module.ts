import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MacHomeContainerComponent } from './Mac/mac-home-container/mac-home-container.component';
import { HeaderContainerComponent } from './shared/header/header-container/header-container.component';
import { HeaderNavbarComponent } from './shared/header/header-navbar/header-navbar.component';
import { HeaderDeviceComponent } from './shared/header/header-device/header-device/header-device.component';
import { SingleDeviceHeaderComponent } from './shared/header/header-device/single-device-header/single-device-header.component';
import { MacMainContainerComponent } from './Mac/mac-main-container/mac-main-container.component';
import { FullSizeCardContainerComponent } from './shared/main/full-size-card-container/full-size-card-container/full-size-card-container.component';
import { SingleFullSizeCardComponent } from './shared/main/full-size-card-container/single-full-size-card/single-full-size-card.component';
import { ProductSpecsTableComponent } from './shared/main/product-specs-table/product-specs-table/product-specs-table.component';
import { ProductSingleSpecsComponent } from './shared/main/product-specs-table/product-single-specs/product-single-specs/product-single-specs.component';
import { UpperSingleSpecsComponent } from './shared/main/product-specs-table/product-single-specs/upper-single-specs/upper-single-specs.component';
import { LowerSingleSpecsComponent } from './shared/main/product-specs-table/product-single-specs/lower-single-specs/lower-single-specs.component';
import { FooterContainerComponent } from './shared/footer/footer-container/footer-container.component';
import { FooterNotesComponent } from './shared/footer/footer-notes/footer-notes.component';
import { FooterNavComponent } from './shared/footer/footer-nav/footer-nav.component';
import { CopyrightComponent } from './shared/footer/copyright/copyright.component';
import { FooterNavLinksComponent } from './shared/footer/footer-nav-links/footer-nav-links.component';


@NgModule({
  declarations: [
    AppComponent,
    MacHomeContainerComponent,
    HeaderContainerComponent,
    HeaderNavbarComponent,
    HeaderDeviceComponent,
    SingleDeviceHeaderComponent,
    MacMainContainerComponent,
    FullSizeCardContainerComponent,
    SingleFullSizeCardComponent,
    ProductSpecsTableComponent,
    ProductSingleSpecsComponent,
    UpperSingleSpecsComponent,
    LowerSingleSpecsComponent,
    FooterContainerComponent,
    FooterNotesComponent,
    FooterNavComponent,
    CopyrightComponent,
    FooterNavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
