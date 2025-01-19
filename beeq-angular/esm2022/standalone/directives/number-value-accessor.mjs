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
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: NumericValueAccessor, isStandalone: true, selector: "bq-input[type=\"number\"], bq-slider:not[type=\"range\"]", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
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
                    ], standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYmVlcS1hbmd1bGFyL3N0YW5kYWxvbmUvc3JjL2RpcmVjdGl2ZXMvbnVtYmVyLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFnQmpELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBQ3JELFlBQVksRUFBYztRQUN4QixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDO0lBQ1EsZ0JBQWdCLENBQUMsRUFBOEI7UUFDdEQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLEVBQUUsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztrSUFSVSxvQkFBb0I7c0hBQXBCLG9CQUFvQixzTEFScEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsb0JBQW9CO2dCQUNqQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUVVLG9CQUFvQjtrQkFkaEMsU0FBUzttQkFBQztvQkFDVCxpREFBaUQ7b0JBQ2pELFFBQVEsRUFBRSxzREFBc0Q7b0JBQ2hFLElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsd0NBQXdDO3FCQUN2RDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxzQkFBc0I7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGLEVBQUMsVUFBVSxFQUFFLElBQUk7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vdmFsdWUtYWNjZXNzb3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuICBzZWxlY3RvcjogJ2JxLWlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGJxLXNsaWRlcjpub3RbdHlwZT1cInJhbmdlXCJdJyxcbiAgaG9zdDoge1xuICAgICcoYnFDaGFuZ2UpJzogJ2hhbmRsZUNoYW5nZUV2ZW50KCRldmVudC50YXJnZXQudmFsdWUpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBOdW1lcmljVmFsdWVBY2Nlc3NvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgTnVtZXJpY1ZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbCk7XG4gIH1cbiAgb3ZlcnJpZGUgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlciB8IG51bGwpID0+IHZvaWQpIHtcbiAgICBzdXBlci5yZWdpc3Rlck9uQ2hhbmdlKHZhbHVlID0+IHtcbiAgICAgIGZuKHZhbHVlID09PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KHZhbHVlKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==