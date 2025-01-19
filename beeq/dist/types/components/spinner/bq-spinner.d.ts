import { TSpinnerSize, TSpinnerTextPosition } from './bq-spinner.types';
/**
 * Spinners are designed for users to display data loading.
 *
 * @example How to use it
 * ```html
 * <bq-spinner size="medium" text-position="bellow">
 *   <span>Loading...</span>
 * </bq-spinner>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/275f10-spinner/b/09d7b1
 * @status stable
 *
 * @attr {boolean} animation - If `false`, the animation on the icon element will be stopped.
 * @attr {"small" | "medium" | "large"} size - It defines the size of the icon element displayed.
 * @attr {"above" | "below" | "left" | "right" | "none"} text-position - It defines the position of the label text.
 *
 * @slot icon - The icon slot container.
 * @slot - The content of the spinner component.
 *
 * @part base - The div wrapper container used under the hood.
 * @part icon - The `<svg>` icon element used to spin/animate.
 * @part custom-icon - The `<span>` tag element that holds the custom icon element passed.
 * @part text - The `<span>` tag element that renders the label text inside the component.
 *
 * @cssprop --bq-spinner--color - Spinner color
 * @cssprop --bq-spinner--size-large - Spinner large size
 * @cssprop --bq-spinner--size-medium - Spinner medium size
 * @cssprop --bq-spinner--size-small - Spinner small size
 * @cssprop --bq-spinner--large-text-fontSize - Spinner large text font size
 * @cssprop --bq-spinner--medium-text-fontSize - Spinner medium text font size
 * @cssprop --bq-spinner--small-text-fontSize - Spinner small text font size
 * @cssprop --bq-spinner--text-lineHeight - Spinner text line height
 */
export declare class BqSpinner {
    private iconSlotElem;
    private slotElem;
    private observer;
    el: HTMLBqSpinnerElement;
    private hasIconSlot;
    private hasSlot;
    private slotContentLength;
    /** If `false`, the animation on the icon element will be stopped */
    animation?: boolean;
    /** It defines the position of the label text */
    textPosition: TSpinnerTextPosition;
    /** It defines the size of the icon element displayed */
    size: TSpinnerSize;
    handleTextPositionProp(): void;
    handleSizeProp(): void;
    handleHasIconSlot(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private handleSlotChange;
    private handleIconSlotChange;
    private checkPropValues;
    private get isTextDisplayed();
    private setIconSize;
    private get bqIcon();
    render(): any;
}
