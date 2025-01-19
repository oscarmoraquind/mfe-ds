import { ReferenceElement } from '@floating-ui/dom';
import { FloatingUIOptions } from '../../interfaces';
export declare class FloatingUI {
    panel: HTMLElement;
    trigger: ReferenceElement;
    options: FloatingUIOptions;
    cleanUp: () => void;
    constructor(trigger: ReferenceElement, panel: HTMLElement, options?: FloatingUIOptions);
    init(options: FloatingUIOptions): void;
    update(): void;
    destroy(): void;
    positionChange(): {
        name: string;
        fn: ({ placement: position }: {
            placement: any;
        }) => {};
    };
    private roundByDPR;
}
