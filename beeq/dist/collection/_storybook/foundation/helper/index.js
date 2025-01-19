/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
import { getCSSVariableValue } from "../../../shared/utils";
export function capitalize(text) {
    if (!text)
        return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
}
export function getVariableValue(name) {
    return getCSSVariableValue(name, document.body);
}
//# sourceMappingURL=index.js.map
