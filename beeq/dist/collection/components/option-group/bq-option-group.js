/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
/**
 * The option group component is a container for multiple option elements.
 * It allows to manage the appearance and size of all options at once.
 *
 * @example How to use it
 * ```html
 * <bq-option-group class="hydrated">
 *   <span slot="header-label">Sport</span>
 *   <bq-option value="football">Football</bq-option>
 *   <bq-option value="basketball">Basketball</bq-option>
 *   <bq-option value="tennis">Tennis</bq-option>
 * </bq-option-group>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/3b1b7b-option-group
 * @status stable
 *
 * @slot header-label - The label of the option group
 * @slot header-prefix - The prefix of the label
 * @slot header-suffix - The suffix of the label
 * @slot - The option items
 *
 * @part label - The `legend` tag element which acts as a container for the label
 * @part prefix - The prefix of the label
 * @part label - The text of the label
 * @part suffix - The suffix of the label
 * @part group - The `div` element which holds the option items
 *
 * @cssprop --bq-option-group--background - option group background color
 * @cssprop --bq-option-group--font-size - option group font size
 * @cssprop --bq-option-group--line-height - option group line height
 * @cssprop --bq-option-group--label-padding-start - option group header padding start
 * @cssprop --bq-option-group--label-padding-end - option group header padding start
 * @cssprop --bq-option-group--label-paddingY - option group header padding Y axis
 * @cssprop --bq-option-group--label-text-padding-start - option group text within label padding start
 * @cssprop --bq-option-group--label-text-padding-end - option group text within label padding start
 * @cssprop --bq-option-group--container-padding-start - option group container padding start
 */
export class BqOptionGroup {
    // Own Properties
    // ====================
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
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
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h("div", { key: '556f076284daba9601e2089dcbef850f23744ae4', class: "bg-ui-primary" }, h("legend", { key: '0d305ce8a8c6a73742985e039a82b2bda04245ec', class: "bq-option-group m-be-[--bq-option-group--gapY-list]", part: "label" }, h("span", { key: 'e22e9ffc99c3412cacc23094b9517f66f3d06f73', class: "option-group__prefix flex items-center", part: "prefix" }, h("slot", { key: 'c819d8beef5f797a3de458822503d623e5397fd3', name: "header-prefix" })), h("span", { key: '9939cc33498ab6cf2082cf9610a49ab032376ba9', class: "bq-option-group__label inline-block overflow-hidden text-ellipsis whitespace-nowrap is-auto", part: "label" }, h("slot", { key: '7ed860a4dc6b6b12d4fb19698403d519752f90a9', name: "header-label" })), h("span", { key: 'ac2dc5d6ae1d90f923cbab78afef7edecadf3c6b', class: "bq-option-group__suffix", part: "suffix" }, h("slot", { key: '07679ef9808f25a4e79fd7025293bb4ca39dd144', name: "header-suffix" }))), h("div", { key: '8951234b489b87a93ef303c96e7602f31e1d425e', class: "bq-option-group__container flex flex-col gap-[--bq-option-group--gapY-list]", role: "group", "aria-label": "Options", part: "group" }, h("slot", { key: '6fa7c17d94d909685f50546495ef6c78fad385ca' }))));
    }
    static get is() { return "bq-option-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-option-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-option-group.css"]
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bq-option-group.js.map
