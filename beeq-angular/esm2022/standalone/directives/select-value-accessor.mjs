import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class SelectValueAccessor extends ValueAccessor {
    constructor(el) {
        super(el);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SelectValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: SelectValueAccessor, isStandalone: true, selector: "bq-select", host: { listeners: { "bqChange": "handleChangeEvent($event.target.value)" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectValueAccessor,
                multi: true
            }
        ], usesInheritance: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SelectValueAccessor, decorators: [{
            type: Directive,
            args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'bq-select',
                    host: {
                        '(bqChange)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: SelectValueAccessor,
                            multi: true
                        }
                    ], standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYmVlcS1hbmd1bGFyL3N0YW5kYWxvbmUvc3JjL2RpcmVjdGl2ZXMvc2VsZWN0LXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFnQmpELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxhQUFhO0lBQ3BELFlBQVksRUFBYztRQUN4QixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDO2tJQUhVLG1CQUFtQjtzSEFBbkIsbUJBQW1CLHVJQVJuQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxtQkFBbUI7Z0JBQ2hDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBRVUsbUJBQW1CO2tCQWQvQixTQUFTO21CQUFDO29CQUNULGlEQUFpRDtvQkFDakQsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLElBQUksRUFBRTt3QkFDSixZQUFZLEVBQUUsd0NBQXdDO3FCQUN2RDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxxQkFBcUI7NEJBQ2hDLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGLEVBQUMsVUFBVSxFQUFFLElBQUk7aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vdmFsdWUtYWNjZXNzb3InO1xuXG5ARGlyZWN0aXZlKHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuICBzZWxlY3RvcjogJ2JxLXNlbGVjdCcsXG4gIGhvc3Q6IHtcbiAgICAnKGJxQ2hhbmdlKSc6ICdoYW5kbGVDaGFuZ2VFdmVudCgkZXZlbnQudGFyZ2V0LnZhbHVlKSdcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogU2VsZWN0VmFsdWVBY2Nlc3NvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0VmFsdWVBY2Nlc3NvciBleHRlbmRzIFZhbHVlQWNjZXNzb3Ige1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIHN1cGVyKGVsKTtcbiAgfVxufVxuIl19