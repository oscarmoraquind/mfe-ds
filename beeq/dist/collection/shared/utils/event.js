/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
/**
 * Check if the event target is a child of the host element
 * @param event - The event to check
 * @param hostElement - The host element to check against
 * @returns True if the event target is a child of the host element
 */
export const isEventTargetChildOfElement = (event, hostElement) => {
    const path = event.composedPath();
    return path.includes(hostElement);
};
//# sourceMappingURL=event.js.map
