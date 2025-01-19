import { EventEmitter } from '../../stencil-public-runtime';
import { TTagBorderRadius, TTagColor, TTagSize, TTagVariant } from './bq-tag.types';
/**
 * The Tag Component is a UI element used to label and categorize content within an application.
 * Tags are commonly used to label items with keywords or categories, making it easier to find and organize content.
 *
 * @example How to use it
 * ```html
 * <bq-tag color="success" size="medium" variant="filled">Success</bq-tag>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/42f8c9-tag
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 *
 * @attr {string} border - The corner radius of the Tag (will override size's predefined border)
 * @attr {boolean} clickable - If `true`, the Tag can be clickable
 * @attr {"error" | "gray" | "info" | "success" | "warning"} color - The color style of the Tag
 * @attr {boolean} disabled - If `true`, the Tag will be disabled (only if clickable = `true`, no interaction allowed)
 * @attr {boolean} hidden - If `true`, the Tag component will hidden (only if removable = `true`)
 * @attr {boolean} removable - If `true`, the Tag component can be removed
 * @attr {boolean} selected - If `true`, the Tag is selected (only if clickable = `true`)
 * @attr {"xsmall" | "small" | "medium"} size - The size of the Tag component
 * @attr {"outline" | "filled"} variant - The variant of Tag to apply on top of the variant
 *
 * @method hide - Method to be called to remove the tag component
 * @method show - Method to be called to show the tag component
 *
 * @event bqClose - Callback handler to be called when the tag is close/hidden
 * @event bqOpen - Callback handler to be called when the tag is not open/shown
 * @event bqBlur - Handler to be called when tag loses focus
 * @event bqClick - Handler to be called when tag is clicked
 * @event bqFocus - Handler to be called when tag is focused
 *
 * @slot prefix - The prefix slot to add an icon or any other content before the text
 * @slot - The text content of the tag
 *
 * @part wrapper - The wrapper container `<div>` of the element inside the shadow DOM.
 * @part prefix - The `<span>` tag element that acts as prefix container (when icon exists in front of tag).
 * @part text - The `<div>` element containing the text of the tag component.
 * @part btn-close - The close button element to remove the tag component.
 *
 * @cssprop --bq-tag--background-color - Tag background color
 * @cssprop --bq-tag--border-color - Tag border color
 * @cssprop --bq-tag--border-radius - Tag border radius
 * @cssprop --bq-tag--border-style - Tag border style
 * @cssprop --bq-tag--border-width - Tag border width
 * @cssprop --bq-tag--small-border-radius - Tag small border radius
 * @cssprop --bq-tag--small-gap - Tag small gap between content
 * @cssprop --bq-tag--small-padding-x - Tag small padding horizontal
 * @cssprop --bq-tag--small-padding-y - Tag small padding vertical
 * @cssprop --bq-tag--medium-gap - Tag medium gap between content
 * @cssprop --bq-tag--medium-padding-x - Tag medium padding horizontal
 * @cssprop --bq-tag--medium-padding-y - Tag medium padding vertical
 */
export declare class BqTag {
    private prefixElem;
    el: HTMLBqTagElement;
    private hasPrefix;
    /** The corner radius of the Tag (will override size's predefined border) */
    border: TTagBorderRadius;
    /** If true, the Tag can be clickable */
    clickable: boolean;
    /** The color style of the Tag */
    color: TTagColor;
    /** If true, the Tag will be disabled (only if clickable = `true`, no interaction allowed) */
    disabled?: boolean;
    /** If true, the Tag component will hidden (only if removable = `true`) */
    hidden: boolean;
    /** If true, the Tag component can be removed */
    removable: boolean;
    /** If true, the Tag is selected (only if clickable = `true`) */
    selected: boolean;
    /** The size of the Tag component */
    size: TTagSize;
    /** The variant of Tag to apply on top of the variant */
    variant: TTagVariant;
    checkPropValues(): void;
    /** Callback handler to be called when the tag is close/hidden  */
    bqClose: EventEmitter;
    /** Callback handler to be called when the tag is not open/shown */
    bqOpen: EventEmitter;
    /** Handler to be called when tag loses focus */
    bqBlur: EventEmitter<HTMLBqTagElement>;
    /** Handler to be called when tag is clicked */
    bqClick: EventEmitter<HTMLBqTagElement>;
    /** Handler to be called when tag is focused */
    bqFocus: EventEmitter<HTMLBqTagElement>;
    componentWillLoad(): void;
    /** Method to be called to remove the tag component */
    hide(): Promise<void>;
    /** Method to be called to show the tag component */
    show(): Promise<void>;
    private handleHide;
    private handleShow;
    private handleClick;
    private handleBlur;
    private handleFocus;
    private handleSlotChange;
    private get isClickable();
    private get isRemovable();
    private get isHidden();
    private get hasCustomColor();
    render(): any;
}
