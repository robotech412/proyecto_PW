import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import { app_routing } from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallesComponent } from './vista/detalles/detalles.component';
import { ZapatosComponent } from './vista/zapatos/zapatos.component';
import { RopaComponent } from './vista/ropa/ropa.component';
import { InicioComponent } from './vista/inicio/inicio.component';
import { NavbarComponent } from './vista/navbar/navbar.component';
import { FooterComponent } from './vista/footer/footer.component';
import { ProductosComponent } from './vista/productos/productos.component';
import { ContactoComponent } from './vista/contacto/contacto.component';
import { LoginComponent } from './vista/login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './vista/admin/admin.component';

/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';


/* material*/

import { MaterialModule } from './material.module';
import { LoginModule } from './vista/login/login.module';
import { AdminModule } from './vista/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    DetallesComponent,
    ZapatosComponent,
    RopaComponent,
    ProductosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LoginModule,
    AdminModule,
    app_routing
  ],
  providers: [{ provide: BUCKET, useValue: 'gs://usuarios-da896.appspot.com' }], //modulo de angular para usar cookies
  bootstrap: [AppComponent],
})
export class AppModule { }
