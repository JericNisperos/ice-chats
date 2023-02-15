import { trigger, transition, style, animate, query, state, stagger, animateChild } from '@angular/animations';

export const floatonload1 = trigger('floatonload1', [
    transition(':enter', [
      style({ transform: 'translateY(20px)', opacity: 0 }),
      animate('500ms 0.1s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('500ms 0.2s ease-out', style({ transform: 'translateY(10%)', opacity: 0 }))
      ])
  ]);

  export const floatonload2 = trigger('floatonload2', [
    transition(':enter', [
      style({ transform: 'translateY(20px)', opacity: 0 }),
      animate('500ms 0.3s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('500ms 0.2s ease-out', style({ transform: 'translateY(10%)', opacity: 0 }))
      ])
  ]);

  export const floatonload3 = trigger('floatonload3', [
    transition(':enter', [
      style({ transform: 'translateY(20px)', opacity: 0 }),
      animate('500ms 0.5s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('500ms 0.2s ease-out', style({ transform: 'translateY(10%)', opacity: 0 }))
      ])
  ]);

  export const floatonload4 = trigger('floatonload4', [
    transition(':enter', [
      style({ transform: 'translateY(20px)', opacity: 0 }),
      animate('500ms 0.7s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('500ms 0.2s ease-out', style({ transform: 'translateY(10%)', opacity: 0 }))
      ])
  ]);

  export const floatonload5 = trigger('floatonload5', [
    transition(':enter', [
      style({ transform: 'translateY(20px)', opacity: 0 }),
      animate('500ms 0.9s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1 }),
        animate('500ms 0.2s ease-out', style({ transform: 'translateY(10%)', opacity: 0 }))
      ])
  ]);