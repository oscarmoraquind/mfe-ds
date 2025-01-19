/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h } from "@stencil/core";
import { isEventTargetChildOfElement, isHTMLElement } from "../../shared/utils";
/**
 * The option list component is a container for multiple option elements.
 * It allows to manage the appearance and size of all options at once.
 *
 * @example How to use it
 * ```html
 * <bq-option-list>
 *   <bq-option value="football">Football</bq-option>
 *   <bq-option value="basketball">Basketball</bq-option>
 *   <bq-option value="tennis">Tennis</bq-option>
 * </bq-option-list>
 * ```
 *
 * @documentation https://storybook.beeq.design/?path=/story/components-option--default
 * @status stable
 *
 * @attr {string} aria-label - Aria label for the list.
 *
 * @slot - The option items
 *
 * @part base - The component's internal wrapper.
 *
 * @cssprop --bq-option-group--gapY-list - Option group gap between items Y axis
 */
export class BqOptionList {
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
    /** Aria label for the list. */
    ariaLabel = 'Options';
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when `bq-option` is selected (on click/enter press). */
    bqSelect;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentDidLoad() {
        this.el.setAttribute('role', 'listbox');
    }
    // Listeners
    // ==============
    onBqSelect(event) {
        const { target: item } = event;
        if (!isHTMLElement(item, 'bq-option') || !isEventTargetChildOfElement(event, this.el))
            return;
        this.bqSelect.emit({ item, value: item.value });
    }
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
        return (h("div", { key: 'd5f037b60e7ac54197828440ea9f240316305cbb', class: "bq-option__list flex flex-col gap-y-[--bq-option-group--gapY-list]", part: "base" }, h("slot", { key: 'b28ffcbf109fabc746041b71bdfb69e778bf8d04' })));
    }
    static get is() { return "bq-option-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-option-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-option-list.css"]
        };
    }
    static get properties() {
        return {
            "ariaLabel": {
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
                    "text": "Aria label for the list."
                },
                "getter": false,
                "setter": false,
                "attribute": "aria-label",
                "reflect": true,
                "defaultValue": "'Options'"
            }
        };
    }
    static get events() {
        return [{
                "method": "bqSelect",
                "name": "bqSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when `bq-option` is selected (on click/enter press)."
                },
                "complexType": {
                    "original": "{ value: string; item: HTMLBqOptionElement }",
                    "resolved": "{ value: string; item: HTMLBqOptionElement; }",
                    "references": {
                        "HTMLBqOptionElement": {
                            "location": "global",
                            "id": "global::HTMLBqOptionElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "bqClick",
                "method": "onBqSelect",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "bqEnter",
                "method": "onBqSelect",
                "target": undefined,
                "capture": false,
                "passive": true
            }];
    }
}
//# sourceMappingURL=bq-option-list.js.map
