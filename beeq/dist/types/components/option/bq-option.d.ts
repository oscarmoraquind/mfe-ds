import { EventEmitter } from '../../stencil-public-runtime';
/**
 * An option refers to a specific choice that appears in a list of selectable items that can be opened or closed by the user.
 * It can be an element of the navigation system that allows users to select different sections or pages within an application or it can be used within a dropdown list.
 *
 * @example How to use it
 * ```html
 * <bq-option value="user">
 *   <span>User profile</span>
 *   <bq-icon slot="suffix" name="user"></bq-icon>
 * </bq-option>
 * ```
 *
 * @documentation https://storybook.beeq.design/?path=/story/components-option--with-option-group
 * @status stable
 *
 * @attr {boolean} disabled - If true, the option is disabled.
 * @attr {boolean} hidden - If true, the option is hidden.
 * @attr {string} value - A string representing the value of the option. Can be used to identify the item.
 * @attr {boolean} selected - If true, the option is selected and active.
 *
 * @event bqBlur - Handler to be called when item loses focus.
 * @event bqFocus - Handler to be called when item is focused.
 * @event bqClick - Handler to be called when item is clicked.
 * @event bqEnter - Handler to be called on enter key press.
 *
 * @slot prefix - The prefix content to be displayed before the label.
 * @slot - The label content to be displayed.
 *
 * @part base - The component's internal wrapper.
 * @part label - The `span` element in which the label text is displayed.
 * @part prefix - The `span` element in which the prefix is displayed (generally `bq-icon`).
 * @part suffix - The `span` element in which the suffix is displayed (generally `bq-icon`).
 *
 * @cssprop --bq-option--background - background color
 * @cssprop --bq-option--font-size - font size
 * @cssprop --bq-option--border-color - border color
 * @cssprop --bq-option--border-style - border style
 * @cssprop --bq-option--border-width - border width
 * @cssprop --bq-option--border-radius - border radius
 * @cssprop --bq-option--box-shadow - box shadow
 * @cssprop --bq-option--gap-start - gap space between prefix and label
 * @cssprop --bq-option--gap-end - gap space between label and suffix
 * @cssprop --bq-option--paddingY - padding Y axis
 * @cssprop --bq-option--padding-start - option label padding start
 * @cssprop --bq-option--padding-end - option label padding end
 */
export declare class BqOption {
    private prefixElem;
    private suffixElem;
    el: HTMLBqOptionElement;
    hasPrefix: boolean;
    hasSuffix: boolean;
    /** If true, the option is hidden. */
    hidden: boolean;
    /** If true, the option is disabled. */
    disabled?: boolean;
    /** A string representing the value of the option. Can be used to identify the item */
    value?: string;
    /** If true, the option is selected and active. */
    selected: boolean;
    /** Handler to be called when item loses focus */
    bqBlur: EventEmitter<HTMLBqOptionElement>;
    /** Handler to be called when item is focused */
    bqFocus: EventEmitter<HTMLBqOptionElement>;
    /** Handler to be called when item is clicked */
    bqClick: EventEmitter<HTMLBqOptionElement>;
    /** Handler to be called on enter key press */
    bqEnter: EventEmitter<HTMLBqOptionElement>;
    onKeyDown(event: KeyboardEvent): void;
    private onBlur;
    private onFocus;
    private onClick;
    private onSlotChange;
    private handleSuffixSlotChange;
    private get isDisabledOrHidden();
    render(): any;
}
