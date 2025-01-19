import { EventEmitter } from '../../stencil-public-runtime';
import { TSideMenuAppearance, TSideMenuSize } from './bq-side-menu.types';
/**
 *The default side menu serves as a versatile container for organizing and displaying navigation elements,
 * with default side menu items providing a clean and straightforward way to represent individual menu options.
 * Together, they form the foundation for building structured and intuitive side menu layouts.
 *
 * @example How to use it
 * ```html
 * <bq-side-menu>
 *   <div slot="logo">
 *     <h1>Your Logo</h1>
 *   </div>
 *   <bq-side-menu-item active>
 *     <bq-icon name="home" slot="prefix"></bq-icon>
 *     Home
 *   </bq-side-menu-item>
 *   <bq-side-menu-item>
 *     <bq-icon name="settings" slot="prefix"></bq-icon>
 *     Settings
 *   </bq-side-menu-item>
 *   <bq-side-menu-item disabled>
 *     <bq-icon name="help" slot="prefix"></bq-icon>
 *     Help
 *   </bq-side-menu-item>
 * </bq-side-menu>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/99822d-side-menu/b/09d7b1
 * @status stable
 *
 * @attr {"brand" | "default" | "inverse"} appearance - It sets a predefined appearance of the side menu.
 * @attr {boolean} collapse - If `true`, the container will reduce its width.
 * @attr {"medium" | "small"} - size - It sets the size of the navigation menu items.
 *
 * @method toggleCollapse - Method to be called to toggle the collapse state of the side menu.
 *
 * @event bqCollapse - Callback handler to be called when the Side menu changes its width from expanded to collapse and vice versa.
 * @event bqSelect - Callback handler to be called when the active/selected menu item changes.
 *
 * @slot logo - The section for displaying the logo or brand in the side menu.
 * @slot The main section that holds all menu items.
 * @slot footer - The section for adding footer content to the side menu.
 *
 * @part base - HTML `<aside>` root container
 * @part footer - HTML `<div>` element that holds the footer
 * @part logo - HTML `<div>` element that holds the logo
 * @part nav - HTML `<nav>` element that holds the navigation items
 *
 * @cssprop --bq-side-menu--bg-color - Side menu background color
 * @cssprop --bq-side-menu--brand-color - Side menu logo color
 * @cssprop --bq-side-menu--border-color - Side menu border color
 */
export declare class BqSideMenu {
    private menuItemCssSelector;
    private bodyCss;
    private bodyCssExpand;
    private bodyCssCollapse;
    private menuElem;
    private documentBody;
    /** It sets a predefined appearance of the side menu */
    appearance: TSideMenuAppearance;
    /** If true, the container will reduce its width */
    collapse: boolean;
    /** It sets the size of the navigation menu items */
    size: TSideMenuSize;
    onCollapsePropChange(): void;
    /** Callback handler to be called when the Side menu changes its width from expanded to collapse and vice versa */
    bqCollapse: EventEmitter<{
        collapse: boolean;
    }>;
    /** Callback handler to be called when the active/selected menu item changes */
    bqSelect: EventEmitter<HTMLBqSideMenuItemElement>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    onMenuItemClick(event: Event): void;
    /** Toggle the collapse state of the side menu */
    toggleCollapse(): Promise<void>;
    private get menuItems();
    private handleCollapse;
    private collapseDocumentBody;
    private expandDocumentBody;
    private cleanDocumentBodyClass;
    render(): any;
}
