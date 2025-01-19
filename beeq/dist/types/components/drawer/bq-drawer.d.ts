import { EventEmitter } from '../../stencil-public-runtime';
import { TDrawerPlacement, TDrawerPosition } from './bq-drawer.types';
/**
 * The Drawer component provides a sliding panel interface commonly used for navigation or presenting additional content without taking up significant screen space.
 *
 * @example How to use it
 * ```html
 * <bq-drawer position="end">
 *   <div class="flex gap-xs" slot="title">Title</div>
 *   <div class="...">
 *     Content
 *   </div>
 *   <div class="flex flex-1 justify-center gap-xs" slot="footer">
 *     <bq-button appearance="primary" block="" size="small">Button</bq-button>
 *     <bq-button appearance="link" block="" size="small">Button</bq-button>
 *   </div>
 * </bq-drawer>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/871139-drawer
 * @status stable
 *
 * @dependency bq-button
 * @dependency bq-icon
 * @dependency bq-divider
 *
 * @attr {boolean} enable-backdrop - If true, the backdrop overlay will be shown when the drawer opens.
 * @attr {boolean} close-on-click-outside - If true, the drawer will not close when clicking outside the panel.
 * @attr {boolean} close-on-esc - If true, the drawer will not close when the [Esc] key is pressed.
 * @attr {boolean} open - If true, the drawer component will be shown.
 * @attr {"start" | "end"} position - Defines the position of the drawer.
 *
 * @method show - Method to be called to show the drawer component.
 * @method hide - Method to be called to hide the drawer component.
 *
 * @event bqClose - Callback handler to be called when the drawer is closed.
 * @event bqOpen - Callback handler to be called when the drawer is opened.
 * @event bqAfterOpen - Callback handler to be called after the drawer has been opened.
 * @event bqAfterClose - Callback handler to be called after the drawer has been closed.
 *
 * @slot title - The title content of the drawer.
 * @slot - The body content of the drawer.
 * @slot footer - The footer content of the drawer.
 * @slot button-close - The close button content of the drawer.
 * @slot footer-divider - The footer divider content of the drawer.
 *
 * @part backdrop - The `<div>` that holds the backdrop overlay.
 * @part button-close - The BqButton that closes the drawer.
 * @part button-close__btn - The native button used under the hood that closes the drawer.
 * @part button-close__label - The text inside the native button that closes the drawer.
 * @part panel - The `<div>` that holds the drawer entire content.
 * @part header - The `<header>` that holds the icon, title, and close button.
 * @part title - The `<div>` that holds the title content.
 * @part body - The `<main>` that holds the drawer body content.
 * @part footer - The `<footer>` that holds footer content.
 *
 * @cssprop --bq-drawer--backgroundBackdrop - Background color of the backdrop
 * @cssprop --bq-drawer--gap - Gap between the drawer and the viewport
 * @cssprop --bq-drawer--width - Width of the drawer
 * @cssprop --bq-drawer--paddingX - Padding left and right of the drawer
 * @cssprop --bq-drawer--paddingY - Padding top and bottom of the drawer
 * @cssprop --bq-drawer--zIndex - Z-index of the drawer component
 */
export declare class BqDrawer {
    private footerElem;
    private drawerElem;
    private OPEN_CSS_CLASS;
    el: HTMLBqDrawerElement;
    private hasFooter;
    hasIcon: boolean;
    /** If true, the backdrop overlay will be shown when the drawer opens */
    enableBackdrop: boolean;
    /** If true, the drawer will not close when clicking outside the panel */
    closeOnClickOutside: boolean;
    /** If true, the dialog will not close when the [Esc] key is pressed */
    closeOnEsc: boolean;
    /** If true, the drawer component will be shown */
    open: boolean;
    /** @deprecated Defines the position of the drawer */
    placement: TDrawerPlacement;
    /** Defines the position of the drawer */
    position: TDrawerPosition;
    handleOpenChange(): Promise<void>;
    /**
     * !TO BE REMOVED: Delete this `@Watch()` once the deprecated `placement` property is removed
     * We need to maintain retro-compatibility with the deprecated `placement` property
     */
    handlePlacementChange(): void;
    handlePositionChange(): void;
    /** Callback handler to be called when the drawer is closed */
    bqClose: EventEmitter;
    /** Callback handler to be called when the drawer is opened */
    bqOpen: EventEmitter;
    /** Callback handler to be called after the drawer has been opened */
    bqAfterOpen: EventEmitter;
    /** Callback handler to be called after the drawer has been closed */
    bqAfterClose: EventEmitter;
    componentWillLoad(): void;
    handleMouseClick(event: MouseEvent): Promise<void>;
    handleKeyDown(event: KeyboardEvent): Promise<void>;
    /** Method to be called to hide the drawer component */
    hide(): Promise<void>;
    /** Method to be called to show the drawer component */
    show(): Promise<void>;
    private handleFooterSlotChange;
    private handleAfterHide;
    private handleAfterShow;
    private handleTransitionEnd;
    private get isPositionStart();
    private get isPositionEnd();
    render(): any;
}
