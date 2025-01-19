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
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: BooleanValueAccessor, isStandalone: true, selector: "bq-checkbox, bq-switch", host: { listeners: { "bqChange": "handleChangeEvent($event.target.checked)" } }, providers: [
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
                    ], standalone: true
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2JlZXEtYW5ndWxhci9zdGFuZGFsb25lL3NyYy9kaXJlY3RpdmVzL2Jvb2xlYW4tdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQWdCakQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGFBQWE7SUFDckQsWUFBWSxFQUFjO1FBQ3hCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7SUFDUSxVQUFVLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRixDQUFDO2tJQU5VLG9CQUFvQjtzSEFBcEIsb0JBQW9CLHNKQVJwQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7NEZBRVUsb0JBQW9CO2tCQWRoQyxTQUFTO21CQUFDO29CQUNULGlEQUFpRDtvQkFDakQsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsSUFBSSxFQUFFO3dCQUNKLFlBQVksRUFBRSwwQ0FBMEM7cUJBQ3pEO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLHNCQUFzQjs0QkFDakMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0YsRUFBQyxVQUFVLEVBQUUsSUFBSTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi92YWx1ZS1hY2Nlc3Nvcic7XG5cbkBEaXJlY3RpdmUoe1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG4gIHNlbGVjdG9yOiAnYnEtY2hlY2tib3gsIGJxLXN3aXRjaCcsXG4gIGhvc3Q6IHtcbiAgICAnKGJxQ2hhbmdlKSc6ICdoYW5kbGVDaGFuZ2VFdmVudCgkZXZlbnQudGFyZ2V0LmNoZWNrZWQpJ1xuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBCb29sZWFuVmFsdWVBY2Nlc3NvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhblZhbHVlQWNjZXNzb3IgZXh0ZW5kcyBWYWx1ZUFjY2Vzc29yIHtcbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYpIHtcbiAgICBzdXBlcihlbCk7XG4gIH1cbiAgb3ZlcnJpZGUgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoZWNrZWQgPSB0aGlzLmxhc3RWYWx1ZSA9IHZhbHVlID09IG51bGwgPyBmYWxzZSA6IHZhbHVlO1xuICB9XG59XG4iXX0=