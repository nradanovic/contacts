import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ServicesModule } from './services/services.module';
import { ModulesModule } from './modules/modules.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { LocalStorageService } from './services/storage/local-storage.service';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		ReactiveFormsModule,
		FormsModule,
		AppRoutingModule,
		ComponentsModule,
		ModulesModule,
		ServicesModule
	],
	providers: [LocalStorageService],
	bootstrap: [AppComponent]
})
export class AppModule {}
