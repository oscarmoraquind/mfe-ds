import { EventEmitter } from '../../stencil-public-runtime';
/**
 * The option list component is a container for multiple option elements.
 * It allows to manage the appearance and size of all options at once.
 *
 * @example How to use it
 * ```html
 * <bq-option-list>
 *   <bq-option value="football">Football</bq-option>
 *   <bq-option value="basketball">Basketball</bq-option>
 *   <bq-option value="tennis">Tennis</bq-option>
 * </bq-option-list>
 * ```
 *
 * @documentation https://storybook.beeq.design/?path=/story/components-option--default
 * @status stable
 *
 * @attr {string} aria-label - Aria label for the list.
 *
 * @slot - The option items
 *
 * @part base - The component's internal wrapper.
 *
 * @cssprop --bq-option-group--gapY-list - Option group gap between items Y axis
 */
export declare class BqOptionList {
    el: HTMLBqOptionListElement;
    /** Aria label for the list. */
    ariaLabel: string;
    /** Handler to be called when `bq-option` is selected (on click/enter press). */
    bqSelect: EventEmitter<{
        value: string;
        item: HTMLBqOptionElement;
    }>;
    componentDidLoad(): void;
    onBqSelect(event: CustomEvent<HTMLElement>): void;
    render(): any;
}
