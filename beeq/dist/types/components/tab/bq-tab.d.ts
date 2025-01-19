import { EventEmitter } from '../../stencil-public-runtime';
import { TTabOrientation, TTabPlacement, TTabSize } from './bq-tab.types';
/**
 * The tab is a user interface element that allows users to navigate between different sections of a page.
 * It should be used inside `<bq-tab-group>` component.
 *
 * @example How to use it
 * ```html
 * <bq-tab tab-id="1" controls="panel-1">Tab 1</bq-tab>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/775321-tabs
 * @status stable
 *
 * @attr {boolean} active - If `true` tab is active
 * @attr {string} controls - The tab panel id that the tab controls
 * @attr {boolean} disabled - If `true` tab is disabled
 * @attr {string} orientation - The direction that tab should be render
 * @attr {string} placement - The placement that tab should be render
 * @attr {string} size - The size of the tab
 * @attr {string} tab-id - The id of the tab
 *
 * @event bqClick - Handler to be called when the tab state changes
 * @event bqFocus - Handler to be called when the tab gets focus
 * @event bqBlur - Handler to be called when the tab loses focus
 * @event bqKeyDown - Handler to be called when the tab key is pressed
 *
 * @method vClick - Simulate a click event on the native `<button>` HTML element used under the hood
 * @method vFocus - Sets focus on the native `<button>` HTML element used under the hood
 * @method vBlur - Remove focus from the native `<button>` HTML element used under the hood
 *
 * @part base - The HTML button used under the hood.
 * @part content - The HTML `<div>` element that holds the content.
 * @part icon - The HTML `<div>` element that holds the icon content.
 * @part text - The HTML `<div>` element that holds the text content.
 * @part underline - The HTML `<div>` element that display active state.
 *
 * @cssprop --bq-tab--font-size - Font size
 * @cssprop --bq-tab--font-weight - Font weight
 * @cssprop --bq-tab--icon-size-large - Icon size for large tab
 * @cssprop --bq-tab--icon-size-medium - Icon size for medium tab
 * @cssprop --bq-tab--icon-size-small - Icon size for small tab
 * @cssprop --bq-tab--label-icon-gap - Gap between label and icon
 * @cssprop --bq-tab--line-height - Line height
 * @cssprop --bq-tab--padding-horizontal-large - Horizontal padding for large tab
 * @cssprop --bq-tab--padding-horizontal-medium - Horizontal padding for medium tab
 * @cssprop --bq-tab--padding-horizontal-small - Horizontal padding for small tab
 * @cssprop --bq-tab--padding-vertical-large - Vertical padding for large tab
 * @cssprop --bq-tab--padding-vertical-medium - Vertical padding for medium tab
 * @cssprop --bq-tab--padding-vertical-small - Vertical padding for small tab
 */
export declare class BqTab {
    private buttonElement;
    private iconElement;
    el: HTMLBqTabElement;
    tabIndex: number | null;
    hasIcon: boolean;
    /** If true tab is active */
    active?: boolean;
    /** The tab panel id that the tab controls */
    controls: string;
    /** If true tab is disabled */
    disabled: boolean;
    /** The direction that tab should be render */
    orientation?: TTabOrientation;
    /** The placement that tab should be render */
    placement?: TTabPlacement;
    /** The size of the tab */
    size: TTabSize;
    /** The id of the tab */
    tabId: string;
    checkPropValues(): void;
    /** Handler to be called when the tab state changes */
    bqClick: EventEmitter<HTMLBqTabElement>;
    /** Handler to be called when the tab gets focus */
    bqFocus: EventEmitter<HTMLBqTabElement>;
    /** Handler to be called when the tab loses focus */
    bqBlur: EventEmitter<HTMLBqTabElement>;
    /** Handler to be called when the tab key is pressed */
    bqKeyDown: EventEmitter<KeyboardEvent>;
    componentWillLoad(): void;
    /**
     * Simulate a click event on the native `<button>` HTML element used under the hood.
     * Use this method instead of the global `element.click()`.
     */
    vClick(): Promise<void>;
    /**
     * Sets focus on the native `<button>` HTML element used under the hood.
     * Use this method instead of the global `element.focus()`.
     */
    vFocus(): Promise<void>;
    /**
     * Remove focus from the native `<button>` HTML element used under the hood.
     * Use this method instead of the global `element.blur()`.
     */
    vBlur(): Promise<void>;
    /**
     * @internal Sets tabindex on the native `<button>` HTML element used under the hood.
     * This method is used inside `<bq-tab-group>` to make tab focusable after the active one is focused
     */
    enableFocus(value: boolean): Promise<void>;
    private handleClick;
    private handleOnFocus;
    private handleOnBlur;
    private handleOnKeyDown;
    private handleIconSlotChange;
    private get tabindex();
    render(): any;
}
