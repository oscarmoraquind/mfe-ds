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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtYWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9iZWVxLWFuZ3VsYXIvc3RhbmRhbG9uZS9zcmMvZGlyZWN0aXZlcy92YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSXBFLE1BQU0sT0FBTyxhQUFhO0lBTXhCLFlBQXNCLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSjVCLGFBQVEsR0FBeUIsR0FBRyxFQUFFLEdBQU0sQ0FBQyxDQUFDO1FBQzlDLGNBQVMsR0FBZSxHQUFHLEVBQUUsR0FBTSxDQUFDLENBQUM7SUFHTixDQUFDO0lBRXhDLFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVFLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFVO1FBQzFCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBR0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUF3QjtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM5QyxDQUFDO2tJQWpDVSxhQUFhO3NIQUFiLGFBQWE7OzRGQUFiLGFBQWE7a0JBRHpCLFNBQVM7bUJBQUMsRUFBRTsrRUFxQlgsZ0JBQWdCO3NCQURmLFlBQVk7dUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7fSlcbmV4cG9ydCBjbGFzcyBWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIHByaXZhdGUgb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4gey8qKi99O1xuICBwcml2YXRlIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHsvKiovfTtcbiAgcHJvdGVjdGVkIGxhc3RWYWx1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBlbDogRWxlbWVudFJlZikge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmxhc3RWYWx1ZSA9IHZhbHVlID09IG51bGwgPyAnJyA6IHZhbHVlO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlRXZlbnQodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5sYXN0VmFsdWUpIHtcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c291dCcpXG4gIF9oYW5kbGVCbHVyRXZlbnQoKSB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==