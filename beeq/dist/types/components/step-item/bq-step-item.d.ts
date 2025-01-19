import { EventEmitter } from '../../stencil-public-runtime';
import { TStepItemStatus } from './bq-step-item.types';
import { TStepsSize, TStepsType } from '../steps/bq-steps.types';
/**
 * The Step Item Component is a UI element used to display a single step or stage in a process or task.
 * It should be used inside the Steps component.
 *
 * @example How to use it
 * ```html
 * <bq-step-item status="completed">
 *   <bq-icon slot="prefix" name="check-circle"></bq-icon>
 *   <span>Title</span>
 *   <span slot="description">Description</span>
 * </bq-step-item>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/896b66-stepper
 * @status stable
 *
 * @attr {"small" | "medium"} size - It defines prefix size
 * @attr {"completed" | "current" | "error" | "default" | "disabled"} status - It defines step item appearance based on its status
 * @attr {"numeric" | "icon" | "dot"} type - It defines the step item type used
 *
 * @event bqClick - Callback handler emitted when the step item is clicked
 *
 * @slot - The step item content
 * @slot prefix - The step item prefix
 * @slot description - The step item description
 *
 * @part base - The component's base wrapper.
 * @part title - The component's title.
 * @part description - The component's description.
 *
 * @cssprop --bq-step-item--prefix-color - Color of the prefix icon
 * @cssprop --bq-step-item--prefix-color-current - Color of the prefix icon when current
 * @cssprop --bq-step-item--prefix-color-completed - Color of the prefix icon when completed
 * @cssprop --bq-step-item--prefix-color-error - Color of the prefix icon when error
 * @cssprop --bq-step-item--prefix-num-size - Size of the prefix number
 * @cssprop --bq-step-item--prefix-num-bg-color - Background color of the prefix number
 */
export declare class BqStepItem {
    el: HTMLBqStepItemElement;
    /** It defines prefix size */
    size?: TStepsSize;
    /** It defines step item appearance based on its status */
    status?: TStepItemStatus;
    /** It defines the step item type used */
    type?: TStepsType;
    checkPropValues(): void;
    /** Callback handler emitted when the step item is clicked */
    bqClick: EventEmitter<{
        target: HTMLBqStepItemElement;
        value: string;
    }>;
    connectedCallback(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    private get isDisabled();
    private get isCurrent();
    private handleIconPrefix;
    render(): any;
}
