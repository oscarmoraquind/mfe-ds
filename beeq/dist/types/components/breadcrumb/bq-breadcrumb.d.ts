/**
 * The Breadcrumb is used to wraps a series of breadcrumb items to indicate the current page's location within a navigational hierarchy.
 *
 * @example How to use it
 * ```html
 * <bq-breadcrumb label="Breadcrumb">
 *   <bq-breadcrumb-item>Home</bq-breadcrumb-item>
 *   <bq-breadcrumb-item>Men's clothing</bq-breadcrumb-item>
 *   <bq-breadcrumb-item>Shirt</bq-breadcrumb-item>
 *   <bq-breadcrumb-item>Casual shirts</bq-breadcrumb-item>
 * </bq-breadcrumb>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/194fd1-breadcrumb
 * @status stable
 *
 * @attr {string} label - The `aria-label` attribute to describe the type of navigation
 *
 * @slot - The default slot is used to add `bq-breadcrumb-item` items to the breadcrumb.
 * @slot separator - The slot to add a separator between breadcrumb items. Default separator is `/`.
 *
 * @part navigation - The `nav` tag that loads the breadcrumb items
 * @part separator - The container that wraps the separator element
 */
export declare class BqBreadcrumb {
    private navElem;
    private spanElem;
    el: HTMLBqBreadcrumbElement;
    /** The `aria-label` attribute to describe the type of navigation */
    label: string;
    private handleSlotChange;
    private getSeparatorElem;
    private get separatorFromSlot();
    private get breadcrumbItems();
    render(): any;
}
