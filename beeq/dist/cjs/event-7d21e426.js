/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

/**
 * Check if the event target is a child of the host element
 * @param event - The event to check
 * @param hostElement - The host element to check against
 * @returns True if the event target is a child of the host element
 */
const isEventTargetChildOfElement = (event, hostElement) => {
    const path = event.composedPath();
    return path.includes(hostElement);
};

exports.isEventTargetChildOfElement = isEventTargetChildOfElement;

//# sourceMappingURL=event-7d21e426.js.map