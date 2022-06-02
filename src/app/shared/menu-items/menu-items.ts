import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface SubChildren {
  state: string;
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  child?: SubChildren[];
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '',
    name: 'Personal',
    type: 'saperator',
    icon: 'av_timer'
  },
  {
    state: 'dashboards',
    name: 'MENÚ DE OPCIONES',
    type: 'sub',
    icon: 'list_alt',
    children: [
      { state: 'dashboard1', name: 'Dashboard 1', type: 'link', icon: 'list_alt'},
      { state: 'dashboard2', name: 'Dashboard 2', type: 'link' }
    ]
  },
  // empieza la de formulario
  {
    state: 'forms',
    name: 'Forms',
    type: 'sub',
    icon: 'insert_drive_file',
    children: [
        { state: 'form-validation', name: 'Form Validation', type: 'link' },
    ]
    },
// termina la de formilario
  {
    state: 'material',
    name: 'Clientes',
    type: 'sub',
    icon: 'face',
    badge: [{ type: 'red', value: '5' }],
    children: [
      {state:"guardar-cliente",name: "Guardar Cliente", type:"link"},
    
      {state:'buscar-clientes',name:'Buscar clientes',type:'link'},
      {state:'borrar-clientes',name:'Borrar clientes',type:'link'},
      {state:'actualizar-clientes',name:'Actualizar clientes',type:'link'},
      {state:'buscar-todosclientes',name:'Buscar todos los Clientes actuales',type:'link'},
     /* { state: 'badge', name: 'Badge', type: 'link' },
      { state: 'button', name: 'Buttons', type: 'link' },
      { state: 'cards', name: 'Cards', type: 'link' },
      { state: 'grid', name: 'Grid List', type: 'link' },
      { state: 'lists', name: 'Lists', type: 'link' },
      { state: 'menu', name: 'Menu', type: 'link' },
      { state: 'tabs', name: 'Tabs', type: 'link' },
      { state: 'stepper', name: 'Stepper', type: 'link' },
      { state: 'ripples', name: 'Ripples', type: 'link' },
      { state: 'expansion', name: 'Expansion Panel', type: 'link' },
      { state: 'chips', name: 'Chips', type: 'link' },
      { state: 'toolbar', name: 'Toolbar', type: 'link' },
      { state: 'progress-snipper', name: 'Progress snipper', type: 'link' },
      { state: 'progress', name: 'Progress Bar', type: 'link' },
      { state: 'dialog', name: 'Dialog', type: 'link' },
      { state: 'tooltip', name: 'Tooltip', type: 'link' },
      { state: 'snackbar', name: 'Snackbar', type: 'link' },
      { state: 'slider', name: 'Slider', type: 'link' },
      { state: 'slide-toggle', name: 'Slide Toggle', type: 'link' }*/
    ]
  }
 
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}