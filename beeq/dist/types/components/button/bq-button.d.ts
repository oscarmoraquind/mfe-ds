import { EventEmitter } from '../../stencil-public-runtime';
import { TButtonAppearance, TButtonBorderRadius, TButtonSize, TButtonType, TButtonVariant } from './bq-button.types';
/**
 * Buttons are designed for users to take action on a page or a screen.
 *
 * @example How to use it
 * ```html
 * <bq-button appearance="primary" border="m" size="medium">
 *   <bq-icon name="arrow-circle-left" slot="prefix"></bq-icon>
 *   Go back
 * </bq-button>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/286b43-buttons
 * @status stable
 *
 * @dependency bq-icon
 *
 * @attr {"primary" | "secondary" | "link" | "text"} appearance - The appearance style to apply to the button
 * @attr {boolean} block - If `true`, it will make the button fit to its parent width.
 * @attr {string} border - The corner radius of the button
 * @attr {boolean} disabled - If `true`, the button will be disabled (no interaction allowed)
 * @attr {string} download - Tells the browser to treat the linked URL as a download. Only used when `href` is set.
 * @attr {string} href - When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`
 * @attr {"left" | "center" | "right"} justify-content - It determinate how the content should be aligned
 * @attr {boolean} loading - If `true` it will display the button in a loading state
 * @attr {"small" | "medium" | "large"} size - The size of the button
 * @attr {"_blank" | "_parent" | "_self" | "_top"} target - Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`)
 * @attr {"button" | "submit" | "reset"} type - The default behavior of the button
 * @attr {"standard" | "ghost" | "danger"} variant - The variant of button to apply on top of the appearance (applicable only to `appearance="primary"`)
 *
 * @event bqBlur - Handler to be called when the button loses focus
 * @event bqFocus - Handler to be called when button gets focus
 * @event bqClick - Handler to be called when the button is clicked
 *
 * @slot prefix - The prefix content to be displayed before the button label
 * @slot - The button label content
 * @slot suffix - The suffix content to be displayed after the button label
 *
 * @part button - The `<a>` or `<button>` HTML element used under the hood.
 * @part prefix - The `<span>` tag element that acts as prefix container.
 * @part label - The `<span>` tag element that renders the text of the button.
 * @part suffix - The `<span>` tag element that acts as suffix container.
 *
 * @cssprop --bq-button--border-color - Button border color
 * @cssprop --bq-button--border-radius - Button border radius
 * @cssprop --bq-button--border-style - Button border style
 * @cssprop --bq-button--border-width - Button border width
 * @cssprop --bq-button--small-height - Button small height
 * @cssprop --bq-button--small-paddingX - Button small padding block (top and bottom)
 * @cssprop --bq-button--small-paddingY - Button small padding inline (left and right)
 * @cssprop --bq-button--small-font-size - Button small font size
 * @cssprop --bq-button--medium-height - Button medium height
 * @cssprop --bq-button--medium-paddingX - Button medium padding block (top and bottom)
 * @cssprop --bq-button--medium-paddingY - Button medium padding inline (left and right)
 * @cssprop --bq-button--medium-font-size - Button medium font size
 * @cssprop --bq-button--large-height - Button large height
 * @cssprop --bq-button--large-paddingX - Button large padding block (top and bottom)
 * @cssprop --bq-button--large-paddingY - Button large padding inline (left and right)
 * @cssprop --bq-button--large-font-size - Button large font size
 */
export declare class BqButton {
    private prefixElem;
    private suffixElem;
    el: HTMLBqButtonElement;
    internals: ElementInternals;
    private hasPrefix;
    private hasSuffix;
    /** The appearance style to apply to the button */
    appearance: TButtonAppearance;
    /** If `true`, it will make the button fit to its parent width. */
    block: boolean;
    /** The corner radius of the button */
    border: TButtonBorderRadius;
    /** If true, the button will be disabled (no interaction allowed) */
    disabled: boolean;
    /**
     * Tells the browser to treat the linked URL as a download. Only used when `href` is set.
     * Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
     */
    download?: string;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>` */
    href: string;
    /** It determinate how the content should be aligned */
    justifyContent: 'left' | 'center' | 'right';
    /** If `true` it will display the button in a loading state */
    loading: boolean;
    /** The size of the button */
    size: TButtonSize;
    /**
     * Where to display the linked URL, as the name for a browsing context (a `tab`, `window`, or `<iframe>`)
     * Details: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
     */
    target: '_blank' | '_parent' | '_self' | '_top';
    /** The default behavior of the button */
    type: TButtonType;
    /** The variant of button to apply on top of the appearance (applicable only to `appearance="primary"`) */
    variant: TButtonVariant;
    checkPropValues(): void;
    /** Handler to be called when the button loses focus */
    bqBlur: EventEmitter<HTMLBqButtonElement>;
    /** Handler to be called when the button is clicked */
    bqFocus: EventEmitter<HTMLBqButtonElement>;
    /** Handler to be called when button gets focus */
    bqClick: EventEmitter<HTMLBqButtonElement>;
    componentWillLoad(): void;
    private handleBlur;
    private handleFocus;
    private handleClick;
    private handleFormAction;
    private formActions;
    private submitAssociatedForm;
    private handleSlotChange;
    private preventEvent;
    render(): any;
}
