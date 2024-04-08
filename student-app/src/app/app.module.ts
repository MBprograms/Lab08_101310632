import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
    declarations: [
        AppComponent,
        StudentsComponent

    ],
    imports: [
        BrowserModule
    ],
    providers: []
})
export class AppModule {
    constructor(private appComponent: AppComponent) {
        platformBrowserDynamic().bootstrapModule(AppComponent);
    }
}
