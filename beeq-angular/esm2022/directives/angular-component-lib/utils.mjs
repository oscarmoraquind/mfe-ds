/* eslint-disable */
/* tslint:disable */
import { fromEvent } from 'rxjs';
export const proxyInputs = (Cmp, inputs) => {
    const Prototype = Cmp.prototype;
    inputs.forEach((item) => {
        Object.defineProperty(Prototype, item, {
            get() {
                return this.el[item];
            },
            set(val) {
                this.z.runOutsideAngular(() => (this.el[item] = val));
            },
            /**
             * In the event that proxyInputs is called
             * multiple times re-defining these inputs
             * will cause an error to be thrown. As a result
             * we set configurable: true to indicate these
             * properties can be changed.
             */
            configurable: true,
        });
    });
};
export const proxyMethods = (Cmp, methods) => {
    const Prototype = Cmp.prototype;
    methods.forEach((methodName) => {
        Prototype[methodName] = function () {
            const args = arguments;
            return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
        };
    });
};
export const proxyOutputs = (instance, el, events) => {
    events.forEach((eventName) => (instance[eventName] = fromEvent(el, eventName)));
};
export const defineCustomElement = (tagName, customElement) => {
    if (customElement !== undefined && typeof customElements !== 'undefined' && !customElements.get(tagName)) {
        customElements.define(tagName, customElement);
    }
};
// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts) {
    const decorator = function (cls) {
        const { defineCustomElementFn, inputs, methods } = opts;
        if (defineCustomElementFn !== undefined) {
            defineCustomElementFn();
        }
        if (inputs) {
            proxyInputs(cls, inputs);
        }
        if (methods) {
            proxyMethods(cls, methods);
        }
        return cls;
    };
    return decorator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9iZWVxLWFuZ3VsYXIvc3JjL2RpcmVjdGl2ZXMvYW5ndWxhci1jb21wb25lbnQtbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVqQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFRLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO0lBQ3hELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtZQUNyQyxHQUFHO2dCQUNELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixDQUFDO1lBQ0QsR0FBRyxDQUFDLEdBQVE7Z0JBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQ0Q7Ozs7OztlQU1HO1lBQ0gsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFRLEVBQUUsT0FBaUIsRUFBRSxFQUFFO0lBQzFELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQzdCLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRztZQUN0QixNQUFNLElBQUksR0FBRyxTQUFTLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLFFBQWEsRUFBRSxFQUFPLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBZSxFQUFFLGFBQWtCLEVBQUUsRUFBRTtJQUN6RSxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksT0FBTyxjQUFjLEtBQUssV0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3pHLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7QUFDSCxDQUFDLENBQUM7QUFFRixpREFBaUQ7QUFDakQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxJQUF5RTtJQUNoRyxNQUFNLFNBQVMsR0FBRyxVQUFVLEdBQVE7UUFDbEMsTUFBTSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFeEQsSUFBSSxxQkFBcUIsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN4QyxxQkFBcUIsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1gsV0FBVyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNaLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjb25zdCBwcm94eUlucHV0cyA9IChDbXA6IGFueSwgaW5wdXRzOiBzdHJpbmdbXSkgPT4ge1xuICBjb25zdCBQcm90b3R5cGUgPSBDbXAucHJvdG90eXBlO1xuICBpbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcm90b3R5cGUsIGl0ZW0sIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxbaXRlbV07XG4gICAgICB9LFxuICAgICAgc2V0KHZhbDogYW55KSB7XG4gICAgICAgIHRoaXMuei5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiAodGhpcy5lbFtpdGVtXSA9IHZhbCkpO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogSW4gdGhlIGV2ZW50IHRoYXQgcHJveHlJbnB1dHMgaXMgY2FsbGVkXG4gICAgICAgKiBtdWx0aXBsZSB0aW1lcyByZS1kZWZpbmluZyB0aGVzZSBpbnB1dHNcbiAgICAgICAqIHdpbGwgY2F1c2UgYW4gZXJyb3IgdG8gYmUgdGhyb3duLiBBcyBhIHJlc3VsdFxuICAgICAgICogd2Ugc2V0IGNvbmZpZ3VyYWJsZTogdHJ1ZSB0byBpbmRpY2F0ZSB0aGVzZVxuICAgICAgICogcHJvcGVydGllcyBjYW4gYmUgY2hhbmdlZC5cbiAgICAgICAqL1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwcm94eU1ldGhvZHMgPSAoQ21wOiBhbnksIG1ldGhvZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IFByb3RvdHlwZSA9IENtcC5wcm90b3R5cGU7XG4gIG1ldGhvZHMuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAgIFByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICByZXR1cm4gdGhpcy56LnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuZWxbbWV0aG9kTmFtZV0uYXBwbHkodGhpcy5lbCwgYXJncykpO1xuICAgIH07XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb3h5T3V0cHV0cyA9IChpbnN0YW5jZTogYW55LCBlbDogYW55LCBldmVudHM6IHN0cmluZ1tdKSA9PiB7XG4gIGV2ZW50cy5mb3JFYWNoKChldmVudE5hbWUpID0+IChpbnN0YW5jZVtldmVudE5hbWVdID0gZnJvbUV2ZW50KGVsLCBldmVudE5hbWUpKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9ICh0YWdOYW1lOiBzdHJpbmcsIGN1c3RvbUVsZW1lbnQ6IGFueSkgPT4ge1xuICBpZiAoY3VzdG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBjdXN0b21FbGVtZW50cyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBjdXN0b21FbGVtZW50KTtcbiAgfVxufTtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBvbmx5LWFycm93LWZ1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIFByb3h5Q21wKG9wdHM6IHsgZGVmaW5lQ3VzdG9tRWxlbWVudEZuPzogKCkgPT4gdm9pZDsgaW5wdXRzPzogYW55OyBtZXRob2RzPzogYW55IH0pIHtcbiAgY29uc3QgZGVjb3JhdG9yID0gZnVuY3Rpb24gKGNsczogYW55KSB7XG4gICAgY29uc3QgeyBkZWZpbmVDdXN0b21FbGVtZW50Rm4sIGlucHV0cywgbWV0aG9kcyB9ID0gb3B0cztcblxuICAgIGlmIChkZWZpbmVDdXN0b21FbGVtZW50Rm4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVmaW5lQ3VzdG9tRWxlbWVudEZuKCk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0cykge1xuICAgICAgcHJveHlJbnB1dHMoY2xzLCBpbnB1dHMpO1xuICAgIH1cbiAgICBpZiAobWV0aG9kcykge1xuICAgICAgcHJveHlNZXRob2RzKGNscywgbWV0aG9kcyk7XG4gICAgfVxuICAgIHJldHVybiBjbHM7XG4gIH07XG4gIHJldHVybiBkZWNvcmF0b3I7XG59XG4iXX0=