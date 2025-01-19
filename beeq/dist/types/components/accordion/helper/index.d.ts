export declare class Accordion {
    private el;
    private header;
    private panel;
    private animation;
    private isClosing;
    private isExpanding;
    private animationOptions;
    constructor(el: HTMLDetailsElement);
    open(): void;
    close(): void;
    private expand;
    private onAnimationFinish;
}
