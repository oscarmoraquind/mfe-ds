import { EventEmitter } from '../../stencil-public-runtime';
/**
 * Represents the default side menu item for standard navigation elements, providing a clean and straightforward way to display menu options.
 *
 * @example How to use it
 * ```html
 * <bq-side-menu-item>
 *   <bq-icon name="star-four" slot="prefix"></bq-icon>
 *   Menu item
 *   <bq-badge slot="suffix">5</bq-badge>
 * </bq-side-menu-item>
 * ```
 * @documentation https://www.beeq.design/3d466e231/p/99822d-side-menu/b/09d7b1
 * @status stable
 *
 * @dependency bq-tooltip
 *
 * @attr {boolean} active - If `true`, the menu item will be shown as active/selected.
 * @attr {boolean} collapse - If `true`, the item label and suffix will be hidden and the with will be reduced according to its parent.
 * @attr {boolean} disabled - If `true`, the menu item will be disabled (no interaction allowed).
 *
 * @event bqBlur - Handler to be called when the button loses focus.
 * @event bqClick - Handler to be called when the button gets focused.
 * @event bqFocus - Handler to be called when the button is clicked.
 *
 * @slot prefix - The prefix part of menu item.
 * @slot - The content of the menu item.
 * @slot suffix - The suffix part of menu item.
 *
 * @part base - The component wrapper container inside the shadow DOM
 * @part label - The label slot
 * @part prefix - The prefix slot
 * @part suffix - The suffix slot
 * @part panel - The `<div>` container that holds the tooltip content (when the side menu is collapsed)
 * @part trigger - The `<div>` container that holds the element which displays tooltip on hover (when the side menu is collapsed)
 *
 * @cssprop --bq-side-menu-item--bg-default - Side menu item default background color
 * @cssprop --bq-side-menu-item--bg-hover - Side menu item hover background color
 * @cssprop --bq-side-menu-item--bg-active - Side menu item active background color
 * @cssprop --bq-side-menu-item--text-default - Side menu item default text color
 * @cssprop --bq-side-menu-item--text-hover - Side menu item hover text color
 * @cssprop --bq-side-menu-item--text-active - Side menu item active text color
 * @cssprop --bq-side-menu-item--text-disabled - Side menu item disable text color
 * @cssprop --bq-side-menu-item--paddingX - Side menu item vertical padding
 * @cssprop --bq-side-menu-item--paddingY - Side menu item horizontal padding
 */
export declare class BqSideMenuItem {
    private labelElem;
    el: HTMLBqSideMenuItemElement;
    textContent: string;
    /** If true, the menu item will be shown as active/selected. */
    active: boolean;
    /** If true, the item label and suffix will be hidden and the with will be reduce according to its parent */
    collapse: boolean;
    /** If true, the menu item will be disabled (no interaction allowed) */
    disabled: boolean;
    /** Handler to be called when the button loses focus */
    bqBlur: EventEmitter<HTMLBqSideMenuItemElement>;
    /** Handler to be called when the button is clicked */
    bqFocus: EventEmitter<HTMLBqSideMenuItemElement>;
    /** Handler to be called when button gets focus */
    bqClick: EventEmitter<HTMLBqSideMenuItemElement>;
    componentDidLoad(): void;
    private handleSlotChange;
    handleBlur: (ev: Event) => void;
    handleFocus: (ev: Event) => void;
    handleClick: (ev: Event) => void;
    private menuItem;
    render(): any;
}
