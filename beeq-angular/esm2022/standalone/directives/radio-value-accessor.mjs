import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class RadioValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RadioValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: RadioValueAccessor, isStandalone: true, selector: "bq-radio-group", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: RadioValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RadioValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-radio-group',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: RadioValueAccessor,
                            multi: true
                        }
                    ], standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tdmFsdWUtYWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9iZWVxLWFuZ3VsYXIvc3RhbmRhbG9uZS9zcmMvZGlyZWN0aXZlcy9yYWRpby12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBZ0JqRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsYUFBYTtJQUNuRCxZQUFZLEVBQWM7UUFDeEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQztrSUFIVSxrQkFBa0I7c0hBQWxCLGtCQUFrQiw0SUFSbEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsa0JBQWtCO2dCQUMvQixLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUVVLGtCQUFrQjtrQkFkOUIsU0FBUzttQkFBQztvQkFDVCxpREFBaUQ7b0JBQ2pELFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsd0NBQXdDO3FCQUN2RDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxvQkFBb0I7NEJBQy9CLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGLEVBQUMsVUFBVSxFQUFFLElBQUk7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vdmFsdWUtYWNjZXNzb3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuICBzZWxlY3RvcjogJ2JxLXJhZGlvLWdyb3VwJyxcbiAgaG9zdDoge1xuICAgICcoYnFDaGFuZ2UpJzogJ2hhbmRsZUNoYW5nZUV2ZW50KCRldmVudC50YXJnZXQudmFsdWUpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBSYWRpb1ZhbHVlQWNjZXNzb3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxzdGFuZGFsb25lOiB0cnVlXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvVmFsdWVBY2Nlc3NvciBleHRlbmRzIFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsKTtcbiAgfVxufVxuIl19