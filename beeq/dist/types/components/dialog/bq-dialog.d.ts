import { EventEmitter } from '../../stencil-public-runtime';
import { TDialogBorderRadius, TDialogFooterAppearance, TDialogSize } from './bq-dialog.types';
/**
 * The Dialog component is used to display additional content or prompt a user for action.
 * It provides a way to display additional information, options, or controls in a separate, non-obstructive interface element.
 *
 * @example How to use it
 * ```html
 * <bq-dialog footer-appearance="standard" border="m" size="medium">
 *   <h5 class="bold flex items-center gap-s" slot="title">
 *     <bq-icon name="info" size="30" color="text--accent" role="img" title="Info"></bq-icon>
 *     Title
 *   </h5>
 *   <p>
 *     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
 *     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
 *     type specimen book.
 *   </p>
 *   <div class="flex gap-xs" slot="footer">
 *     <bq-button appearance="link">Button</bq-button>
 *     <bq-button variant="ghost">Button</bq-button>
 *     <bq-button variant="standard" slot="footer">Button</bq-button>
 *   </div>
 * </bq-dialog>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/15b6fc-dialog
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 *
 * @attr {"none" | "xs2" | "xs" | "s" | "m" | "l" | "full"} border - Border radius of the dialog component.
 * @attr {boolean} disable-backdrop - If true, the backdrop overlay won't be shown when the dialog opens.
 * @attr {boolean} disable-close-esc-keydown - If true, the dialog will not close when the [Esc] key is pressed.
 * @attr {boolean} disable-close-click-outside - If true, the dialog will not close when clicking on the backdrop overlay.
 * @attr {"standard" | "highlight"} footer-appearance - The appearance of the footer.
 * @attr {boolean} hide-close-button - If true, it hides the close button.
 * @attr {boolean} open - If true, the dialog will be shown as open.
 * @attr {"small" | "medium" | "large"} size - The size of the dialog.
 *
 * @method show - Open the dialog.
 * @method hide - Closes the dialog.
 * @method cancel - Dismiss or cancel the dialog.
 *
 * @event bqCancel - Callback handler emitted when the dialog has been canceled or dismissed.
 * @event bqClose - Callback handler emitted when the dialog will close.
 * @event bqOpen - Callback handler emitted when the dialog will open.
 * @event bqAfterOpen - Callback handler emitted when the dialog finish opening.
 * @event bqAfterClose - Callback handler emitted when the dialog finish closing.
 *
 * @slot title - The title content of the dialog.
 * @slot - The body content of the dialog.
 * @slot footer - The footer content of the dialog.
 * @slot button-close - The close button content of the dialog.
 *
 * @part body - The `<main>` that holds the dialog body content.
 * @part button-close - The button that closes the dialog on click.
 * @part content - The `<div>` container that holds the dialog title and body content.
 * @part dialog - The `<dialog>` wrapper container inside the shadow DOM.
 * @part footer - The `<footer>` that holds footer content.
 * @part header - The `<header>` that holds the icon, title, description and close button.
 * @part title - The `<div>` that holds the title content.
 *
 * @cssprop --bq-dialog--background - Dialog background color
 * @cssprop --bq-dialog--background-backdrop - Dialog backdrop background color
 * @cssprop --bq-dialog--box-shadow - Dialog box shadow
 * @cssprop --bq-dialog--border-color - Dialog border color
 * @cssprop --bq-dialog--border-style - Dialog border style
 * @cssprop --bq-dialog--border-width - Dialog border width
 * @cssprop --bq-dialog--border-radius - Dialog border radius
 * @cssprop --bq-dialog--padding - Dialog padding
 * @cssprop --bq-dialog--content-footer-gap - Dialog gap distance between content and footer elements
 * @cssprop --bq-dialog--title-body-gap - Dialog gap distance between title and body elements
 * @cssprop --bq-dialog--width-small - Dialog small width
 * @cssprop --bq-dialog--width-medium - Dialog medium width
 * @cssprop --bq-dialog--width-large - Dialog large width
 * @cssprop --bq-dialog-z-index - Dialog z-index applied when opened
 */
export declare class BqDialog {
    private dialogElem;
    private contentElem;
    private footerElem;
    private closeSlotElem;
    private OPEN_CSS_CLASS;
    el: HTMLBqDialogElement;
    private hasContent;
    private hasFooter;
    /** Border radius of the dialog component */
    border: TDialogBorderRadius;
    /** If true, the backdrop overlay won't be shown when the dialog opens */
    disableBackdrop: boolean;
    /** If true, the dialog will not close when the [Esc] key is press */
    disableCloseEscKeydown: boolean;
    /** If true, the dialog will not close when clicking on the backdrop overlay */
    disableCloseClickOutside: boolean;
    /** The appearance of footer */
    footerAppearance: TDialogFooterAppearance;
    /** If true, it hides the close button */
    hideCloseButton: boolean;
    /** If true, the dialog will be shown as open */
    open: boolean;
    /** The size of the dialog */
    size: TDialogSize;
    checkPropValues(): void;
    handleOpenChange(): Promise<void>;
    /** Callback handler emitted when the dialog has been canceled or dismissed */
    bqCancel: EventEmitter<void>;
    /** Callback handler emitted when the dialog will close */
    bqClose: EventEmitter<void>;
    /** Callback handler emitted when the dialog will open */
    bqOpen: EventEmitter<void>;
    /** Callback handler emitted when the dialog finish opening */
    bqAfterOpen: EventEmitter<void>;
    /** Callback handler emitted when the dialog finish closing */
    bqAfterClose: EventEmitter<void>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleMouseClick(event: MouseEvent): Promise<void>;
    handleKeyDown(ev: KeyboardEvent): Promise<void>;
    /** Open the dialog */
    show(): Promise<void>;
    /** Closes the dialog */
    hide(): Promise<void>;
    /** Dismiss or cancel the dialog */
    cancel(): Promise<void>;
    private handleClose;
    private handleOpen;
    private handleTransitionEnd;
    private handleContentSlotChange;
    private handleFooterSlotChange;
    render(): any;
}
