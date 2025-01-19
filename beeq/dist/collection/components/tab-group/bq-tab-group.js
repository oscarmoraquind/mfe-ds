/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { debounce, getNextElement, isHTMLElement, isNil, validatePropValue } from "../../shared/utils";
import { TAB_ORIENTATION, TAB_PLACEMENT, TAB_SIZE, } from "../tab/bq-tab.types";
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
export class BqTabGroup {
    // Own Properties
    // ====================
    debouncedBqChange;
    // Reference to host HTML element
    // ===================================
    el;
    // State() variables
    // Inlined decorator, alphabetical order
    // =======================================
    // Public Property API
    // ========================
    /** A number representing the delay value applied to bqChange event handler */
    debounceTime = 0;
    /** If true, the underline divider below the tabs won't be shown  */
    disableDivider = false;
    /** The direction that tab should be render */
    orientation = 'horizontal';
    /** The placement that tab should be render */
    placement = 'start';
    /** The size of the tab */
    size = 'medium';
    /** A string representing the id of the selected tab. */
    value;
    // Prop lifecycle events
    // =======================
    checkDebounceChange() {
        if (this.debounceTime < 0) {
            this.debounceTime = Math.max(0, this.debounceTime);
        }
        if (this.debouncedBqChange) {
            this.debouncedBqChange.cancel();
        }
        this.debouncedBqChange = debounce((event) => {
            this.bqChange.emit(event);
        }, this.debounceTime);
    }
    checkPropValues() {
        validatePropValue(TAB_SIZE, 'medium', this.el, 'size');
        validatePropValue(TAB_ORIENTATION, 'horizontal', this.el, 'orientation');
        validatePropValue(TAB_PLACEMENT, 'start', this.el, 'placement');
        this.bqTabElements.forEach((bqTabElement) => {
            bqTabElement.size = this.size;
            bqTabElement.orientation = this.orientation;
            bqTabElement.placement = this.placement;
            bqTabElement.active = !isNil(this.value) ? bqTabElement.tabId === this.value : false;
        });
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    /** Handler to be called when the tab value changes */
    bqChange;
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.checkDebounceChange();
        this.checkPropValues();
    }
    componentDidLoad() {
        this.checkPropValues();
    }
    // Listeners
    // ==============
    onKeyUp(event) {
        const { target } = event;
        if (!isHTMLElement(target, 'bq-tab'))
            return;
        this.makeTabsFocusable();
    }
    onBqClick(event) {
        const { detail: target } = event;
        this.bqTabElements.forEach((bqTabElement) => (bqTabElement.active = bqTabElement === target));
        this.debouncedBqChange({ value: target.tabId, target });
        this.selectTab(target);
    }
    async onBqKeyDown(event) {
        const { target } = event;
        // NOTE: ensures the target is an HTML element with the tag name 'bq-tab'
        if (!isHTMLElement(target, 'bq-tab'))
            return;
        const keyActions = {
            ArrowDown: 'forward',
            ArrowRight: 'forward',
            ArrowUp: 'backward',
            ArrowLeft: 'backward',
        };
        // NOTE: gets the direction based on key pressed
        const direction = keyActions[event.detail.key];
        if (!direction)
            return;
        await this.focusTabSibling(target, direction);
    }
    onBqBlur() {
        this.restoreTabsFocus();
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
    focusTabSibling = async (currentTarget, direction) => {
        let target = null;
        this.bqTabElements.forEach((bqTabElement, index, elements) => {
            bqTabElement.active = false;
            if (bqTabElement === currentTarget) {
                target = getNextElement(elements, index, direction);
            }
        });
        if (target) {
            await target.vFocus();
            this.selectTab(target);
        }
    };
    makeTabsFocusable = () => {
        this.bqTabElements.forEach((bqTabElement) => {
            if (bqTabElement.disabled)
                return;
            /**
             * This is a "fire and forget" operation. The callback itself doesn't do anything special
             * with the asynchronous code (doesn't await it or do anything with the result)
             * Details: https://stackoverflow.com/a/63488201
             */
            (async () => {
                await bqTabElement.enableFocus(true);
            })();
        });
    };
    restoreTabsFocus = () => {
        this.bqTabElements.forEach((bqTabElement) => {
            if (bqTabElement.disabled || bqTabElement.active)
                return;
            /** @See line #173 */
            (async () => {
                await bqTabElement.enableFocus(false);
            })();
        });
    };
    get bqTabElements() {
        return Array.from(this.el.querySelectorAll('bq-tab'));
    }
    selectTab = (target) => {
        const { tabId } = target;
        target.active = true;
        this.value = tabId;
        this.debouncedBqChange({ value: tabId, target });
    };
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        return (h(Host, { key: 'd9a0a66efe6184e314a1a34905463c2884704c70', class: { 'inline-block': this.orientation === 'vertical' } }, h("div", { key: '5b83f1843322861cf8a3916fd3d40a8d0954e4c6', class: {
                [`bq-tab-group bq-tab-group--${this.orientation}-${this.placement} flex is-full`]: true,
                'no-divider': this.disableDivider,
            }, part: "base" }, h("div", { key: '818859120417fe54104893d18c084f409e6770e1', class: {
                'bq-tab-group--container flex overflow-x-auto': true,
                'flex-col': this.orientation !== 'horizontal',
            }, role: "tablist", part: "tabs" }, h("slot", { key: 'c5b78305a7f9645c4c806cdf6cc63a3d48e34236' })))));
    }
    static get is() { return "bq-tab-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-tab-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-tab-group.css"]
        };
    }
    static get properties() {
        return {
            "debounceTime": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A number representing the delay value applied to bqChange event handler"
                },
                "getter": false,
                "setter": false,
                "attribute": "debounce-time",
                "reflect": true,
                "defaultValue": "0"
            },
            "disableDivider": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the underline divider below the tabs won't be shown"
                },
                "getter": false,
                "setter": false,
                "attribute": "disable-divider",
                "reflect": true,
                "defaultValue": "false"
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTabOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "TTabOrientation": {
                            "location": "import",
                            "path": "../tab/bq-tab.types",
                            "id": "../../packages/beeq/src/components/tab/bq-tab.types.ts::TTabOrientation"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The direction that tab should be render"
                },
                "getter": false,
                "setter": false,
                "attribute": "orientation",
                "reflect": true,
                "defaultValue": "'horizontal'"
            },
            "placement": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTabPlacement",
                    "resolved": "\"end\" | \"start\"",
                    "references": {
                        "TTabPlacement": {
                            "location": "import",
                            "path": "../tab/bq-tab.types",
                            "id": "../../packages/beeq/src/components/tab/bq-tab.types.ts::TTabPlacement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The placement that tab should be render"
                },
                "getter": false,
                "setter": false,
                "attribute": "placement",
                "reflect": true,
                "defaultValue": "'start'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TTabSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "TTabSize": {
                            "location": "import",
                            "path": "../tab/bq-tab.types",
                            "id": "../../packages/beeq/src/components/tab/bq-tab.types.ts::TTabSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the tab"
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'medium'"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "A string representing the id of the selected tab."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true
            }
        };
    }
    static get events() {
        return [{
                "method": "bqChange",
                "name": "bqChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Handler to be called when the tab value changes"
                },
                "complexType": {
                    "original": "{ target: HTMLBqTabElement; value: string }",
                    "resolved": "{ target: HTMLBqTabElement; value: string; }",
                    "references": {
                        "HTMLBqTabElement": {
                            "location": "global",
                            "id": "global::HTMLBqTabElement"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "debounceTime",
                "methodName": "checkDebounceChange"
            }, {
                "propName": "size",
                "methodName": "checkPropValues"
            }, {
                "propName": "value",
                "methodName": "checkPropValues"
            }, {
                "propName": "orientation",
                "methodName": "checkPropValues"
            }, {
                "propName": "placement",
                "methodName": "checkPropValues"
            }];
    }
    static get listeners() {
        return [{
                "name": "keyup",
                "method": "onKeyUp",
                "target": "body",
                "capture": true,
                "passive": true
            }, {
                "name": "bqClick",
                "method": "onBqClick",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "bqKeyDown",
                "method": "onBqKeyDown",
                "target": undefined,
                "capture": false,
                "passive": true
            }, {
                "name": "bqBlur",
                "method": "onBqBlur",
                "target": undefined,
                "capture": true,
                "passive": true
            }];
    }
}
//# sourceMappingURL=bq-tab-group.js.map
