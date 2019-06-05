import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { CardsComponent } from './cards/cards.component';
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { ProgressComponent } from './progress/progress.component';
import { RipplesComponent } from './ripples/ripples.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { GuardarClienteComponent } from './guardar-cliente/guardar-cliente.component';
import { BuscarClientesComponent } from './buscar-clientes/buscar-clientes.component';
import { BorrarClientesComponent } from './borrar-clientes/borrar-clientes.component';
import { ActualizarClientesComponent } from './actualizar-clientes/actualizar-clientes.component';
import { BuscarTodosclientesComponent } from './buscar-todosclientes/buscar-todosclientes.component';

export const MaterialRoutes: Routes = [
  {
    path: '',
    children: [

      {
        path: "guardar-cliente",
        component: GuardarClienteComponent
      },
      {
        path: 'buscar-clientes',
        component: BuscarClientesComponent
      },
      {
        path: 'borrar-clientes',
        component: BorrarClientesComponent
      },
      {
        path: 'actualizar-clientes',
        component: ActualizarClientesComponent
      },
      {
        path: 'buscar-todosclientes',
        component: BuscarTodosclientesComponent
      },
      {
        path: 'button',
        component: ButtonsComponent
      },
      {
        path: 'badge',
        component: BadgeComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'grid',
        component: GridComponent
      },
      {
        path: 'lists',
        component: ListsComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'tabs',
        component: TabsComponent
      },
      {
        path: 'ripples',
        component: RipplesComponent
      },
      {
        path: 'stepper',
        component: StepperComponent
      },
      {
        path: 'expansion',
        component: ExpansionComponent
      },
      {
        path: 'chips',
        component: ChipsComponent
      },
      {
        path: 'toolbar',
        component: ToolbarComponent
      },
      {
        path: 'progress-snipper',
        component: ProgressSnipperComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'dialog',
        component: DialogComponent
      },
      {
        path: 'tooltip',
        component: TooltipComponent
      },
      {
        path: 'snackbar',
        component: SnackbarComponent
      },
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'slide-toggle',
        component: SlideToggleComponent
      }
    ]
  }
];
