import { Directive, ElementRef, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class ValueAccessor {
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
    }
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
    }
    _handleBlurEvent() {
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ValueAccessor, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    /** @nocollapse */ static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.2.13", type: ValueAccessor, host: { listeners: { "focusout": "_handleBlurEvent()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: ValueAccessor, decorators: [{
            type: Directive,
            args: [{}]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { _handleBlurEvent: [{
                type: HostListener,
                args: ['focusout']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtYWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wYWNrYWdlcy9iZWVxLWFuZ3VsYXIvc3JjL2RpcmVjdGl2ZXMvdmFsdWUtYWNjZXNzb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUlwRSxNQUFNLE9BQU8sYUFBYTtJQU14QixZQUFzQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUo1QixhQUFRLEdBQXlCLEdBQUcsRUFBRSxHQUFNLENBQUMsQ0FBQztRQUM5QyxjQUFTLEdBQWUsR0FBRyxFQUFFLEdBQU0sQ0FBQyxDQUFDO0lBR04sQ0FBQztJQUV4QyxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1RSxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBVTtRQUMxQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUdELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDOUMsQ0FBQztrSUFqQ1UsYUFBYTtzSEFBYixhQUFhOzs0RkFBYixhQUFhO2tCQUR6QixTQUFTO21CQUFDLEVBQUU7K0VBcUJYLGdCQUFnQjtzQkFEZixZQUFZO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe30pXG5leHBvcnQgY2xhc3MgVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHsvKiovfTtcbiAgcHJpdmF0ZSBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7LyoqL307XG4gIHByb3RlY3RlZCBsYXN0VmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZUV2ZW50KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMubGFzdFZhbHVlKSB7XG4gICAgICB0aGlzLmxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxuICBfaGFuZGxlQmx1ckV2ZW50KCkge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG59XG4iXX0=