import { ApplicationConfig } from "@angular/core";
import { provideRouter, withPreloading, withViewTransitions } from "@angular/router";
import { QuicklinkStrategy, quicklinkProviders } from "ngx-quicklink";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(QuicklinkStrategy), withViewTransitions({ skipInitialTransition: true })),
    quicklinkProviders,
  ],
};
