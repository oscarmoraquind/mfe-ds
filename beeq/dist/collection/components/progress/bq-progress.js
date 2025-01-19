/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
import { PROGRESS_BORDER_SHAPE, PROGRESS_THICKNESS, PROGRESS_TYPE, } from "./bq-progress.types";
import { validatePropValue } from "../../shared/utils";
/**
 * The progress bar is a user interface component that visually represents the completion status of a task or process.
 *
 * @example How to use it
 * ```html
 * <bq-progress value="50"></bq-progress>
 * ```
 *
 * @documentation https://www.beeq.design/3d466e231/p/691cb3-progress
 * @status stable
 *
 * @dependency bq-tooltip
 *
 * @attr {"rounded" | "rounded-full"} border-shape - It will set the border style of the progress bar
 * @attr {boolean} enable-tooltip - If `true`, a tooltip will be shown displaying the progress value
 * @attr {boolean} indeterminate - If `true` the indeterminate state of progress bar is enabled
 * @attr {boolean} label - If `true`, a label text showing the value (in percentage) will be shown
 * @attr {"small" | "medium" | "large"} thickness - Progress bar thickness
 * @attr {"default" | "error"} type - Progress type
 * @attr {number} value - A number representing the current value of the progress bar
 *
 * @part wrapper - The component wrapper container inside the shadow DOM
 * @part progress - The `<div>` container that holds the native progress element
 * @part progress-bar - The native html for progress element
 * @part label - The `<div>` container that holds the label value (in percentage)
 * @part indeterminate - The `<div>` container that holds the indeterminate progress bar
 * @part base - The base container for the tooltip component inside the shadow DOM when hovering over the progress bar
 * @part trigger - The container holding the element that triggers the tooltip display when hovering over the progress bar
 * @part panel - The container holding the content of the tooltip when hovering over the progress bar
 *
 * @cssprop --bq-progress-bar--height - The progress bars height
 * @cssprop --bq-progress-bar--indeterminateWidth - The progress bar width when its indeterminate
 * @cssprop --bq-progress-bar--indicatorColor - The progress bar color (inside the track area)
 * @cssprop --bq-progress-bar--trackColor - The progress bar track area (the grey one)
 */
export class BqProgress {
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
    /** It will set the border style of the progress bar */
    borderShape = 'rounded';
    /** If `true`, a tooltip will be shown displaying the progress value */
    enableTooltip = false;
    /** If `true` the indeterminate state of progress bar is enabled */
    indeterminate = false;
    /** If `true, a label text showing the value (in percentage) will be shown */
    label = false;
    /** Progress bar thickness */
    thickness = 'medium';
    /** Progress type */
    type = 'default';
    /** A number representing the current value of the progress bar */
    value = 0;
    // Prop lifecycle events
    // =======================
    handleTypePropChange() {
        validatePropValue(PROGRESS_BORDER_SHAPE, 'rounded', this.el, 'borderShape');
        validatePropValue(PROGRESS_THICKNESS, 'medium', this.el, 'thickness');
        validatePropValue(PROGRESS_TYPE, 'default', this.el, 'type');
    }
    handleValuePropChange(newValue) {
        this.validateValue(newValue);
    }
    // Events section
    // Requires JSDocs for public API documentation
    // ==============================================
    // Component lifecycle events
    // Ordered by their natural call order
    // =====================================
    componentWillLoad() {
        this.handleTypePropChange();
        this.handleValuePropChange(this.value);
    }
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
    validateValue(newValue) {
        const clampedValue = Math.max(0, Math.min(100, newValue));
        if (newValue !== clampedValue) {
            this.value = clampedValue;
        }
        return this.value;
    }
    // render() function
    // Always the last one in the class.
    // ===================================
    render() {
        const style = {
            ...(this.thickness === 'large' && { '--bq-progress-bar--height': 'var(--bq-spacing-xs)' }),
            ...(this.type === 'error' && { '--bq-progress-bar--indicatorColor': 'var(--bq-ui--danger)' }),
        };
        return (h(Host, { key: '94ee87109cb371e2f1b7c591b92df467d623d12b', style: style }, h("div", { key: 'c1d0dbc10c05c9135d5ccefc0dcb21187594d01b', class: "flex items-center", part: "wrapper" }, h("div", { key: '7214693d2fc6fd289e77fe83aee92f1b3d0cfea6', class: "relative flex items-center is-full", part: "progress" }, h("progress", { key: '034e297cccca7e704492080a91d3c4cbaf6837df', class: {
                [`progress-bar progress-bar__${this.type} ${this.thickness}`]: true,
                'progress-bar__border-shape rounded-full': this.borderShape === 'rounded',
            }, value: this.indeterminate ? undefined : this.value, max: "100", part: "progress-bar" }), this.enableTooltip && !this.indeterminate && (h("bq-tooltip", { key: 'e442a8aa15d7f5aaae6779cefe01a741d9248d85', class: "absolute [&::part(panel)]:absolute", exportparts: "base,trigger,panel", alwaysVisible: true, distance: 16, style: { insetInlineStart: `${this.value}%`, fontVariant: 'tabular-nums' } }, h("div", { key: 'a41fb88ae771e006d7a3c8dd1b9ceb250d5ed76f', class: "absolute bs-1 is-1", slot: "trigger" }), this.value)), this.indeterminate && (h("div", { key: '11e76daacb55801f556e673b71f69f5a69409b27', class: {
                'progress-bar__indeterminate absolute bg-[--bq-progress-bar--indicatorColor] bs-[--bq-progress-bar--height] is-[--bq-progress-bar--indeterminateWidth]': true,
                'rounded-full': this.borderShape === 'rounded',
            }, part: "indeterminate" }))), h("div", { key: '2f30a0596ce6ed47aa80b56b325e571ee402d830', "aria-hidden": !this.label || this.indeterminate ? 'true' : 'false', class: {
                'ms-xs font-medium leading-regular': true,
                'text-primary': this.type !== 'error',
                'text-danger': this.type === 'error',
                'invisible ms-0 is-0': !this.label || this.indeterminate,
            }, style: { fontVariant: 'tabular-nums' }, part: "label" }, h("span", { key: '6d41e110f20a3789860dde81333959284cd180d6' }, this.value, "%")))));
    }
    static get is() { return "bq-progress"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-progress.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-progress.css"]
        };
    }
    static get properties() {
        return {
            "borderShape": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TProgressBorderShape",
                    "resolved": "\"rounded\" | \"square\"",
                    "references": {
                        "TProgressBorderShape": {
                            "location": "import",
                            "path": "./bq-progress.types",
                            "id": "../../packages/beeq/src/components/progress/bq-progress.types.ts::TProgressBorderShape"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "It will set the border style of the progress bar"
                },
                "getter": false,
                "setter": false,
                "attribute": "border-shape",
                "reflect": true,
                "defaultValue": "'rounded'"
            },
            "enableTooltip": {
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
                    "text": "If `true`, a tooltip will be shown displaying the progress value"
                },
                "getter": false,
                "setter": false,
                "attribute": "enable-tooltip",
                "reflect": true,
                "defaultValue": "false"
            },
            "indeterminate": {
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
                    "text": "If `true` the indeterminate state of progress bar is enabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "indeterminate",
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
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
                    "text": "If `true, a label text showing the value (in percentage) will be shown"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": true,
                "defaultValue": "false"
            },
            "thickness": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TProgressThickness",
                    "resolved": "\"large\" | \"medium\"",
                    "references": {
                        "TProgressThickness": {
                            "location": "import",
                            "path": "./bq-progress.types",
                            "id": "../../packages/beeq/src/components/progress/bq-progress.types.ts::TProgressThickness"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Progress bar thickness"
                },
                "getter": false,
                "setter": false,
                "attribute": "thickness",
                "reflect": true,
                "defaultValue": "'medium'"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "TProgressType",
                    "resolved": "\"default\" | \"error\"",
                    "references": {
                        "TProgressType": {
                            "location": "import",
                            "path": "./bq-progress.types",
                            "id": "../../packages/beeq/src/components/progress/bq-progress.types.ts::TProgressType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Progress type"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": true,
                "defaultValue": "'default'"
            },
            "value": {
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
                    "text": "A number representing the current value of the progress bar"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true,
                "defaultValue": "0"
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "borderShape",
                "methodName": "handleTypePropChange"
            }, {
                "propName": "thickness",
                "methodName": "handleTypePropChange"
            }, {
                "propName": "type",
                "methodName": "handleTypePropChange"
            }, {
                "propName": "value",
                "methodName": "handleValuePropChange"
            }];
    }
}
//# sourceMappingURL=bq-progress.js.map
