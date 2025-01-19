/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
'use strict';

/**
 * Gets the next element that is not disabled
 *
 * @param {Array} elements - The array to search in
 * @param {Numebr} startAt - Position to start at
 * @param {String} direction - The direction to look on
 * @returns {Element} Next available element
 */
const getNextElement = (elements, startAt = 0, direction = 'forward') => {
    let elementIndex = startAt;
    do {
        elementIndex = getNextIndex(elementIndex, elements.length, direction);
        if (elementIndex === startAt) {
            break;
        }
    } while (elements[elementIndex].disabled);
    return elements[elementIndex];
};
const getNextIndex = (currentIndex, length, direction) => {
    const nextIndex = currentIndex + (direction === 'forward' ? 1 : -1);
    return (length + nextIndex) % length;
};

exports.getNextElement = getNextElement;

//# sourceMappingURL=getNextElement-4b790655.js.map