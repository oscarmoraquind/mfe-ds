import { TAccordionAppearance, TAccordionSize } from '../accordion/bq-accordion.types';
/**
 * The accordion group component is a container for multiple accordion elements.
 * It allows to manage the appearance and size of all accordions at once.
 *
 * @example How to use it
 * ```html
 * <bq-accordion-group appearance="filled" size="medium">
 *   <bq-accordion> ... </bq-accordion>
 *   <bq-accordion> ... </bq-accordion>
 *   <bq-accordion> ... </bq-accordion>
 * </bq-accordion-group>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/713eae-accordion
 * @status stable
 *
 * @attr {"filled" | "ghost"} [appearance="filled"] - The appearance style of accordion to be applied to all accordions
 * @attr {boolean} [expandAll=false] - If true all accordions are expanded
 * @attr {boolean} [no-animation=false] - Animation is set through JS when the browser does not support CSS calc-size() If true, the accordion animation, will be disabled. No animation will be applied.
 * @attr {boolean} [multiple=false] - If true multiple accordions can be expanded at the same time
 * @attr {"small" | "medium"} [size="medium"] - The size of accordion to be applied to all accordions
 *
 * @slot - The default slot where the bq-accordion elements are placed.
 *
 * @part base - The component's base wrapper.
 *
 * @cssprop --bq-accordion-group--gap - Accordion group distance between elements
 */
export declare class BqAccordionGroup {
    el: HTMLBqAccordionGroupElement;
    /** The appearance style of accordion to be applied to all accordions */
    appearance: TAccordionAppearance;
    /** If true all accordions are expanded */
    expandAll: boolean;
    /**
     * Animation is set through JS when the browser does not support CSS calc-size()
     * If true, the accordion animation, will be disabled. No animation will be applied.
     */
    noAnimation: boolean;
    /** If true multiple accordions can be expanded at the same time */
    multiple: boolean;
    /** The size of accordion to be applied to all accordions */
    size: TAccordionSize;
    checkPropValues(): void;
    onBqClick(event: CustomEvent<HTMLBqAccordionElement>): void;
    componentWillLoad(): void;
    private get bqAccordionElements();
    render(): any;
}
