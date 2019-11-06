import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { AccountsComponent } from "./pages/accounts/accounts.component"
import { DnsComponent } from "./pages/dns/dns.component"
import { DkimDialogEntryComponent } from "./pages/domains/components/dkim-dialog/dkim-dialog.component"
import { DomainsComponent } from "./pages/domains/domains.component"
import { ForwardersComponent } from "./pages/forwarders/forwarders.component"
import { LoginComponent } from "./pages/login/login.component"

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: {
      isFullscreen: true
    }
  },
  {
    path: "domains",
    component: DomainsComponent,
    children: [
      {
        path: ":domain/dkim/:action",
        component: DkimDialogEntryComponent
      }
    ]
  },
  {
    path: "accounts",
    redirectTo: "accounts/"
  },
  {
    path: "accounts/:id",
    component: AccountsComponent
  },
  {
    path: "forwarders",
    redirectTo: "forwarders/"
  },
  {
    path: "forwarders/:id",
    component: ForwardersComponent
  },
  {
    path: "dns",
    component: DnsComponent
  },
  {
    path: "**",
    redirectTo: "accounts/"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
