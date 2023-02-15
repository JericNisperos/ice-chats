import { trigger, transition, style, animate, query, state, stagger, animateChild } from '@angular/animations';

export const floatAnim1 = trigger('floatAnim1', [
  transition('void => *', [
    style({ transform: 'translateY(50%)', opacity: 0 }),
    animate('500ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
  ])
]);

export const floatAnim2 = trigger('floatAnim2', [
    transition('void => *', [
      style({ transform: 'translateY(50%)', opacity: 0 }),
      animate('750ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);

  export const floatAnim3 = trigger('floatAnim3', [
    transition('void => *', [
      style({ transform: 'translateY(50%)', opacity: 0 }),
      animate('1000ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);

  export const float = trigger('float', [
    transition('void => *', [
      style({ transform: 'translateY(30%)', opacity: 0.25 }),
      animate('1000ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);
  export const floatsm = trigger('floatsm', [
    transition('void => *', [
      style({ transform: 'translateY(10%)', opacity: 0.25 }),
      animate('500ms ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);

  export const floatsm1 = trigger('floatsm1', [
    transition(':enter', [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate('500ms 0.1s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition('* => *', [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate('500ms 0.1s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);

  export const floatsm2 = trigger('floatsm2', [
    transition('void => *', [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate('500ms 0.2s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);

  export const floatsm3 = trigger('floatsm3', [
    transition('void => *', [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate('500ms 0.3s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);


  export const onload = trigger('onload', [
    transition(':enter', [
      style({ transform: 'translateY(10%)', opacity: 0 }),
      animate('500ms 0.3s ease-in', style({ transform: 'translateY(0)', opacity: 1 }))
    ])
  ]);


  export const firstload = trigger('firstload', [
    state('inactive', 
      style({ transform: 'translateY(10%)', opacity: 0 })),
      state('active', 
      style({ transform: 'translateY(0%)', opacity: 1 })),

      transition('inactive => active', animate('500ms ease-in'))
  ]);


