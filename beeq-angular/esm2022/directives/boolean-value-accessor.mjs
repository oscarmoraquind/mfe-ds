import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class BooleanValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BooleanValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: BooleanValueAccessor, selector: "bq-checkbox, bq-switch", host: { listeners: { "bqChange": "handleChangeEvent($event.target.checked)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: BooleanValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BooleanValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-checkbox, bq-switch',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.checked)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: BooleanValueAccessor,
                            multi: true
                        }
                    ]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhY2thZ2VzL2JlZXEtYW5ndWxhci9zcmMvZGlyZWN0aXZlcy9ib29sZWFuLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFnQmpELE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxhQUFhO0lBQ3JELFlBQVksRUFBYztRQUN4QixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDO0lBQ1EsVUFBVSxDQUFDLEtBQVU7UUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakYsQ0FBQztrSUFOVSxvQkFBb0I7c0hBQXBCLG9CQUFvQixrSUFScEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsb0JBQW9CO2dCQUNqQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7OzRGQUVVLG9CQUFvQjtrQkFkaEMsU0FBUzttQkFBQztvQkFDVCxpREFBaUQ7b0JBQ2pELFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsMENBQTBDO3FCQUN6RDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxzQkFBc0I7NEJBQ2pDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vdmFsdWUtYWNjZXNzb3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuICBzZWxlY3RvcjogJ2JxLWNoZWNrYm94LCBicS1zd2l0Y2gnLFxuICBob3N0OiB7XG4gICAgJyhicUNoYW5nZSknOiAnaGFuZGxlQ2hhbmdlRXZlbnQoJGV2ZW50LnRhcmdldC5jaGVja2VkKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogQm9vbGVhblZhbHVlQWNjZXNzb3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBCb29sZWFuVmFsdWVBY2Nlc3NvciBleHRlbmRzIFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsKTtcbiAgfVxuICBvdmVycmlkZSB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCA9IHRoaXMubGFzdFZhbHVlID0gdmFsdWUgPT0gbnVsbCA/IGZhbHNlIDogdmFsdWU7XG4gIH1cbn1cbiJdfQ==