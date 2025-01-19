/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { h, Host } from "@stencil/core";
/**
 * The bq-grid component provides a responsive grid layout system.
 *
 * @example Usage
 * ```html
 * <bq-grid fixed no-padding>Content</bq-grid>
 * ```
 *
 * @status progress
 * @slot - Content to display inside the grid.
 * @cssprop --bq-grid--margin - Margin for the grid container.
 */
export class BqGrid {
    fixed = false;
    noPadding = false;
    render() {
        return (h(Host, { key: 'e7cc947dc3111bb573e84af8596519ed9de47a72', class: {
                'bq-grid': true,
                'fixed': this.fixed,
                'no-padding': this.noPadding,
            } }, h("slot", { key: '622debc93e8a34d4d4de501f8fb48952c94e288a' })));
    }
    static get is() { return "bq-grid"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./scss/bq-grid.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["scss/bq-grid.css"]
        };
    }
    static get properties() {
        return {
            "fixed": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "fixed",
                "reflect": false,
                "defaultValue": "false"
            },
            "noPadding": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "no-padding",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=bq-grid.js.map
