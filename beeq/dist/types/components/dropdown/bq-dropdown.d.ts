import { EventEmitter } from '../../stencil-public-runtime';
import { Placement } from '../../services/interfaces';
/**
 * The Dropdown Component is commonly used when presenting a list of selectable options that are too numerous to fit comfortably on the screen.
 * They provide an efficient way to save space and present a long list of options in a compact and organized manner.
 *
 * @example How to use it
 * ```html
 * <bq-dropdown placement="bottom-start">
 *   <bq-button slot="trigger">Dropdown</bq-button>
 *   <bq-option-list>
 *     <bq-option value="users">...</bq-option>
 *     <bq-option value="user">...</bq-option>
 *     <bq-option value="dashboard">...</bq-option>
 *     <bq-option value="settings">...</bq-option>
 *     <bq-option value="logout">...</bq-option>
 *   </bq-option-list>
 * </bq-dropdown>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/47ff4b-dropdown
 * @status stable
 *
 * @dependency bq-panel
 *
 * @attr {boolean} disabled - If true, the dropdown panel will be visible and won't be shown.
 * @attr {number} distance - Represents the distance (gutter or margin) between the panel and the trigger element.
 * @attr {boolean} keep-open-on-select - If true, the panel will remain open after a selection is made.
 * @attr {"top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end"} placement - Position of the panel.
 * @attr {boolean} open - If true, the panel will be visible.
 * @attr {string} panel-height - When set, it will override the height of the dropdown panel.
 * @attr {boolean} same-width - Whether the panel should have the same width as the trigger element.
 * @attr {number} skidding - Represents the skidding between the panel and the trigger element.
 * @attr {"fixed" | "absolute"} strategy - Defines the strategy to position the panel.
 *
 * @event bqOpen - Callback handler to be called when the dropdown panel is opened or closed.
 *
 * @slot trigger - The trigger element that opens the dropdown panel.
 * @slot - The content of the dropdown panel.
 *
 * @part base - The component's internal wrapper.
 * @part dropdown - The `<bq-panel>` element used under the hood to display the dropdown panel.
 * @part panel - The `<div>` element used to display and style the panel inside the `<bq-panel>` element.
 * @part trigger - The `<div>` element that hosts the trigger element.
 *
 * @cssprop --bq-panel--background - Panel background color
 * @cssprop --bq-panel--border-color - Panel border color
 * @cssprop --bq-panel--border-radius - Panel border radius
 * @cssprop --bq-panel--border-style - Panel border style
 * @cssprop --bq-panel--border-width - Panel border width
 * @cssprop --bq-panel--box-shadow - Panel box shadow
 * @cssprop --bq-panel--padding - Panel padding
 * @cssprop --bq-panel--height - Panel height
 * @cssprop --bq-panel--width - Panel width
 * @cssprop --bq-panel-z-index - Panel z-index applied when opened
 */
export declare class BqDropdown {
    private dropdownPanelId;
    private triggerElem;
    el: HTMLBqDropdownElement;
    /** If true, the dropdown panel will be visible and won't be shown. */
    disabled?: boolean;
    /** Represents the distance (gutter or margin) between the panel and the trigger element. */
    distance?: number;
    /** If true, the panel will remain open after a selection is made. */
    keepOpenOnSelect?: boolean;
    /** Position of the panel */
    placement?: Placement;
    /** If true, the panel will be visible. */
    open?: boolean;
    /** When set, it will override the height of the dropdown panel */
    panelHeight?: string;
    /** Whether the panel should have the same width as the trigger element */
    sameWidth?: boolean;
    /**  Represents the skidding between the panel and the trigger element. */
    skidding?: number;
    /** Defines the strategy to position the panel */
    strategy?: 'fixed' | 'absolute';
    onOpenChange(): void;
    handleDisabledChange(): void;
    /** Callback handler to be called when the dropdown panel is opened or closed. */
    bqOpen: EventEmitter<{
        open: boolean;
    }>;
    componentDidLoad(): void;
    /** Listens for the 'click' event on the document object
     * and closes the dropdown panel if the click is outside the component.
     */
    onClickOutside(event: MouseEvent): void;
    /**
     * Listens for the 'keyup' event on the window object
     * and closes the dropdown panel if the 'Escape' key or 'Tab' key outside the component is pressed.
     */
    onEscape(event: KeyboardEvent): void;
    onItemSelect(): void;
    private togglePanel;
    render(): any;
}
