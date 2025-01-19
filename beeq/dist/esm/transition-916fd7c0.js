/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
/* -------------------------------------------------------------------------- */
/*            Credits to MikeMcCall for the original implementation           */
/*            Github: https://github.com/mmccall10/el-transition              */
/* -------------------------------------------------------------------------- */
/**
 * Transition an element entry
 *
 * @param element The element to enter
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
const enter = async (element, transitionName = null) => {
    element.classList.remove('hidden');
    await transition('enter', element, transitionName);
};
/**
 * Transition an element exit
 *
 * @param element The element to leave
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
const leave = async (element, transitionName = null) => {
    await transition('leave', element, transitionName);
    element.classList.add('hidden');
};
/**
 * Toggle an element entry/exit
 *
 * @param element The element to toggle
 * @param transitionName The name of the transition
 * @returns A promise that resolves when the transition is complete
 */
const toggle = async (element, transitionName = null) => {
    if (element.classList.contains('hidden')) {
        await enter(element, transitionName);
    }
    else {
        await leave(element, transitionName);
    }
};
/**
 * Perform a transition on an element
 *
 * @param direction The direction of the transition
 * @param element The element to transition
 * @param animation The animation to use
 * @returns A promise that resolves when the transition is complete
 * @internal
 */
const transition = async (direction, element, animation) => {
    const { dataset } = element;
    const animationClass = animation ? `${animation}-${direction}` : direction;
    const transitionKey = `transition${direction.charAt(0).toUpperCase() + direction.slice(1)}`;
    // Get the genesis, start, and end classes
    const genesisClasses = getDatasetValueOrDefault(dataset, transitionKey, animationClass);
    const startClasses = getDatasetValueOrDefault(dataset, `${transitionKey}Start`, `${animationClass}-start`);
    const endClasses = getDatasetValueOrDefault(dataset, `${transitionKey}End`, `${animationClass}-end`);
    // Add genesis and start classes, then wait for the next frame
    addClasses(element, genesisClasses);
    addClasses(element, startClasses);
    await nextFrame();
    // Replace start classes with end classes, then wait for the transition to finish
    removeClasses(element, startClasses);
    addClasses(element, endClasses);
    await afterTransition(element);
    // Remove end and genesis classes
    removeClasses(element, endClasses);
    removeClasses(element, genesisClasses);
};
/**
 * Get the value of a dataset key or a default value
 *
 * @param dataset The dataset to get the value from
 * @param key The key to get the value for
 * @param defaultValue The default value to return if the key is not found
 * @returns The value of the dataset key or the default value
 * @internal
 */
const getDatasetValueOrDefault = (dataset, key, defaultValue) => {
    return dataset[key] ? dataset[key].split(' ') : [defaultValue];
};
/**
 * Add classes to an element
 *
 * @param element The element to add the CSS classes to
 * @param classes The classes to add
 * @internal
 */
const addClasses = (element, classes) => {
    element.classList.add(...classes);
};
/**
 * Remove classes from an element
 *
 * @param element The element to remove the CSS classes from
 * @param classes The classes to remove
 * @internal
 */
const removeClasses = (element, classes) => {
    element.classList.remove(...classes);
};
/**
 * Wait for the next frame
 * @returns A promise that resolves when the next frame is available
 * @internal
 */
const nextFrame = () => {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => resolve());
        });
    });
};
/**
 * Wait for all animations to finish
 * @param element The element to wait for
 * @returns A promise that resolves when all animations are finished
 * @internal
 */
const afterTransition = (element) => {
    return Promise.all(element.getAnimations().map((animation) => animation.finished));
};

export { enter as e, leave as l, toggle as t };

//# sourceMappingURL=transition-916fd7c0.js.map