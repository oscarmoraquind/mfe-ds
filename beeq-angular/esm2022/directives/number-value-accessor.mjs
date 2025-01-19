import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class NumericValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    registerOnChange(fn) {
        super.registerOnChange(value => {
            fn(value === '' ? null : parseFloat(value));
        });
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumericValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: NumericValueAccessor, selector: "bq-input[type=\"number\"], bq-slider:not[type=\"range\"]", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: NumericValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NumericValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-input[type="number"], bq-slider:not[type="range"]',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: NumericValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvYmVlcS1hbmd1bGFyL3NyYy9kaXJlY3RpdmVzL251bWJlci12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBZ0JqRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFBYTtJQUNyRCxZQUFZLEVBQWM7UUFDeEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNRLGdCQUFnQixDQUFDLEVBQThCO1FBQ3RELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixFQUFFLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7a0lBUlUsb0JBQW9CO3NIQUFwQixvQkFBb0Isa0tBUnBCO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGOzs0RkFFVSxvQkFBb0I7a0JBZGhDLFNBQVM7bUJBQUM7b0JBQ1QsaURBQWlEO29CQUNqRCxRQUFRLEVBQUUsc0RBQXNEO29CQUNoRSxJQUFJLEVBQUU7d0JBQ0osWUFBWSxFQUFFLHdDQUF3QztxQkFDdkQ7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsc0JBQXNCOzRCQUNqQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL3ZhbHVlLWFjY2Vzc29yJztcblxuQERpcmVjdGl2ZSh7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbiAgc2VsZWN0b3I6ICdicS1pbnB1dFt0eXBlPVwibnVtYmVyXCJdLCBicS1zbGlkZXI6bm90W3R5cGU9XCJyYW5nZVwiXScsXG4gIGhvc3Q6IHtcbiAgICAnKGJxQ2hhbmdlKSc6ICdoYW5kbGVDaGFuZ2VFdmVudCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogTnVtZXJpY1ZhbHVlQWNjZXNzb3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOdW1lcmljVmFsdWVBY2Nlc3NvciBleHRlbmRzIFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsKTtcbiAgfVxuICBvdmVycmlkZSByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyIHwgbnVsbCkgPT4gdm9pZCkge1xuICAgIHN1cGVyLnJlZ2lzdGVyT25DaGFuZ2UodmFsdWUgPT4ge1xuICAgICAgZm4odmFsdWUgPT09ICcnID8gbnVsbCA6IHBhcnNlRmxvYXQodmFsdWUpKTtcbiAgICB9KTtcbiAgfVxufVxuIl19