import { EventEmitter } from '../../stencil-public-runtime';
import { TTabOrientation, TTabPlacement, TTabSize } from '../tab/bq-tab.types';
/**
 * The tab group is a user interface element that allows users wrap a set of tab items.
 *
 * @example How to use it
 * ```html
 * <bq-tab-group value="5">
 *   <bq-tab tab-id="1">Tab</bq-tab>
 *   <bq-tab tab-id="2" active>Tab</bq-tab>
 *   <bq-tab tab-id="3">Long Tab name</bq-tab>
 *   <bq-tab tab-id="4" disabled>Tab</bq-tab>
 * </bq-tab-group>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/775321-tabs
 * @status stable
 *
 * @attr {number} debounce-time - A number representing the delay value applied to bqChange event handler
 * @attr {boolean} disable-divider - If true, the underline divider below the tabs won't be shown
 * @attr {string} orientation - The direction that tab should be render
 * @attr {string} placement - The placement that tab should be render
 * @attr {string} size - The size of the tab
 * @attr {string} value - A string representing the id of the selected tab.
 *
 * @event bqChange - Handler to be called when the tab value changes
 *
 * @slot - The bq-tab items
 *
 * @part base - The HTML div wrapper inside the shadow DOM.
 * @part tabs - The HTML div used to hold the tab buttons.
 */
export declare class BqTabGroup {
    private debouncedBqChange;
    el: HTMLBqTabGroupElement;
    /** A number representing the delay value applied to bqChange event handler */
    debounceTime: number;
    /** If true, the underline divider below the tabs won't be shown  */
    disableDivider: boolean;
    /** The direction that tab should be render */
    orientation?: TTabOrientation;
    /** The placement that tab should be render */
    placement?: TTabPlacement;
    /** The size of the tab */
    size: TTabSize;
    /** A string representing the id of the selected tab. */
    value: string;
    checkDebounceChange(): void;
    checkPropValues(): void;
    /** Handler to be called when the tab value changes */
    bqChange: EventEmitter<{
        target: HTMLBqTabElement;
        value: string;
    }>;
    componentWillLoad(): void;
    componentDidLoad(): void;
    onKeyUp(event: KeyboardEvent): void;
    onBqClick(event: CustomEvent<HTMLBqTabElement>): void;
    onBqKeyDown(event: CustomEvent<KeyboardEvent>): Promise<void>;
    onBqBlur(): void;
    private focusTabSibling;
    private makeTabsFocusable;
    private restoreTabsFocus;
    private get bqTabElements();
    private selectTab;
    render(): any;
}
