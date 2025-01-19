/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
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
export class BqBreadcrumb {
    // Own Properties
    // ====================
    navElem;
    spanElem;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** The `aria-label` attribute to describe the type of navigation */
    label = 'Breadcrumbs';
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
        const breadcrumbItems = this.breadcrumbItems;
        const itemCount = breadcrumbItems.length;
        const separatorElem = this.getSeparatorElem();
        breadcrumbItems.forEach((item, index) => {
            const isLastItem = index === itemCount - 1;
            const separatorSlot = item.querySelector('[slot="separator"]');
            if (!separatorSlot && !isLastItem) {
                item.append(separatorElem.cloneNode(true));
            }
            item.setAttribute('aria-current', isLastItem ? 'page' : '');
        });
    };
    getSeparatorElem = () => {
        const clone = this.separatorFromSlot.cloneNode(true);
        clone.slot = 'separator';
        return clone;
    };
    get separatorFromSlot() {
        return this.spanElem
            .querySelector('slot[name="separator"]')
            .assignedElements({ flatten: true })[0];
    }
    get breadcrumbItems() {
        return this.navElem
            .querySelector('slot')
            .assignedElements({ flatten: true });
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h(Host, { key: 'dd6120a1f9ce46d34640be5bec74cdd72ecc7406' }, h("nav", { key: '0fa31325aba9d3a0d6cb2dd66ffd8a294950217e', class: "flex items-center", "aria-label": this.label, ref: (elem) => (this.navElem = elem), part: "navigation" }, h("slot", { key: '37d82be84e798243730de8e5b4b43b46aa3e88cf', onSlotchange: this.handleSlotChange })), h("span", { key: 'efb9c389ca1a56156fb7d1da7efac323d9c38514', hidden: true, "aria-hidden": "true", ref: (element) => (this.spanElem = element), part: "separator" }, h("slot", { key: '19d1fdfacbb0a04914690d3e543fe8db0115506e', name: "separator" }, h("span", { key: '55427defc83a3b2ceff0a47327943a05414c0892', class: "flex items-center justify-center is-3" }, "/")))));
    }
    static get is() { return "bq-breadcrumb"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-breadcrumb.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-breadcrumb.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The `aria-label` attribute to describe the type of navigation"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true,
                "defaultValue": "'Breadcrumbs'"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=bq-breadcrumb.js.map
