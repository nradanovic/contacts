import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { MemoryStorage } from './services/storage/memory-storage.service';

@NgModule({
	imports: [AppModule, ServerModule],
	providers: [{ provide: 'LocalStorageService', useFactory: MemoryStorage }],
	bootstrap: [AppComponent]
})
export class AppServerModule {}
