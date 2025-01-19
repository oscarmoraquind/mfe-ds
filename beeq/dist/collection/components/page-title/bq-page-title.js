/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { hasSlotContent } from "../../shared/utils";
/**
 * The Page Title component is a versatile and essential element used to display the main title of a page or section within an application.
 *
 * @example How to use it
 * ```html
 * <bq-page-title>
 *   <bq-button appearance="link" slot="back">
 *     <bq-icon
 *       color="text--primary"
 *       name="arrow-left"
 *       weight="bold"
 *       role="img"
 *       title="Navigate back to the previous page"
 *     ></bq-icon>
 *   </bq-button>
 *   Title
 *   <div slot="sub-title">Sub-title</div>
 * </bq-page-title>
 * ```
 *
 * @documentation https://storybook.beeq.design/?path=/docs/components-page-title--overview
 * @status stable
 *
 * @slot back - The back navigation button.
 * @slot - The main title content.
 * @slot sub-title - The sub-title content.
 * @slot suffix - The suffix content.
 *
 * @part base - The inner container `<div>`of element that contains the base page title component.
 * @part content - Defines the main container of the page title component, which includes the title and subtitle elements.
 * @part title-suffix - Defines the container that holds the title and any suffix content.
 * @part back - The container `<div>` page title element that acts as back slot container.
 * @part title - The `<h1>` element serves as a container for the page title content, to improve accessibility.
 * @part suffix - The `<div>` page title element that acts as suffix slot container.
 * @part sub-title - The `<div>` page title element that acts as sub-title slot container.
 *
 * @cssprop --paddingY - Padding top and bottom of the page title wrapper
 * @cssprop --subtitle-borderBlockEnd - Page title border end color
 * @cssprop --subtitle-fontWeight - Page title font weight for subtitle
 * @cssprop --subtitle-textColor - Page title color for sub-title
 * @cssprop --subtitle-textSize - Page title text size for subtitle
 * @cssprop --title-fontWeight - Page title font weight for title
 * @cssprop --title-lineHeight - Page title text line height
 * @cssprop --title-textColor - Page title color for title
 * @cssprop --title-textSize - Page title text size for title
 */
export class BqPageTitle {
    // Own Properties
    // ====================
    backNavigationElem;
    suffixElem;
    subTitleElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    haveBackNavigation = false;
    hasSuffix = false;
    hasSubTitle = false;
    // Public Property API
    // ========================
    // Prop lifecycle events
    // =======================
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    // Listeners
    // ==============
    // Public methods API
    // These methods are exposed on the host element.
    // Always use two lines.
    // Public Methods must be async.
    // Requires JSDocs for public API documentation.
    // ===============================================
    // Local methods
    // Internal business logic.
    // These methods cannot be called from the host element.
    // =======================================================
    handleSlotChange = () => {
        this.haveBackNavigation = hasSlotContent(this.backNavigationElem, 'back');
        this.hasSuffix = hasSlotContent(this.suffixElem, 'suffix');
        this.hasSubTitle = hasSlotContent(this.subTitleElem, 'sub-title');
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '8262a9f08ac662a63411f589dbbdabd01e313fcc', class: "flex gap-xs p-b-[--paddingY] [border-block-end:--subtitle-borderBlockEnd]", part: "base" }, h("div", { key: '8bfcff17dad344d2c1757bd6b6a6a00cd72812f6', class: { flex: true, '!hidden': !this.haveBackNavigation }, ref: (divElem) => (this.backNavigationElem = divElem), part: "back" }, h("slot", { key: '56dd22bc0151559201ce6fe71987aa7b86e64c4d', name: "back", onSlotchange: this.handleSlotChange })), h("div", { key: '46a33ac72486476e213036da2414dc7577b4a12a', class: "flex flex-grow flex-col gap-xs", part: "content" }, h("div", { key: '6d72e970e59b50ab628cc5d8bb592f962c708006', class: "flex items-center gap-xs", part: "title-suffix" }, h("h1", { key: '0e3bc97cef801a4c804ea11502b19ec53e3a1f15', class: "title-font text-[length:--title-textSize] font-[--title-fontWeight] leading-[--title-lineHeight] text-[color:--title-textColor]", part: "title" }, h("slot", { key: '099b714e07c2ea0a140bfe57164fa696c86a118d' })), h("div", { key: '125f651c485345819bb9da0044e937ec15932c79', class: { 'flex flex-grow gap-xs p-b-xs2 p-i-xs2': true, '!hidden': !this.hasSuffix }, ref: (divElem) => (this.suffixElem = divElem), part: "suffix" }, h("slot", { key: 'a80988ac358fc3afdac06c8a781390262ae03907', name: "suffix", onSlotchange: this.handleSlotChange }))), h("div", { key: '7a290e1d72ebcdbe5ebe4dabfbb33267272ec372', class: {
                'title-font text-[length:--subtitle-textSize] font-[--subtitle-fontWeight] leading-[--title-lineHeight] text-[color:--subtitle-textColor]': true,
                hidden: !this.hasSubTitle,
            }, ref: (divElem) => (this.subTitleElem = divElem), part: "sub-title" }, h("slot", { key: '567ffa2a6c940b4fb2c980f876a5062cc4445112', name: "sub-title", onSlotchange: this.handleSlotChange })))));
    }
    static get is() { return "bq-page-title"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-page-title.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-page-title.css"]
        };
    }
    static get states() {
        return {
            "haveBackNavigation": {},
            "hasSuffix": {},
            "hasSubTitle": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bq-page-title.js.map
