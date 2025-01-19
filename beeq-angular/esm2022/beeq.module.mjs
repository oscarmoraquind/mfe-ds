import { CommonModule, DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, NgModule, NgZone } from '@angular/core';
import { defineCustomElements } from '@beeq/core/dist/loader';
import { DIRECTIVES } from './directives';
import { BooleanValueAccessor } from './directives/boolean-value-accessor';
import { NumericValueAccessor } from './directives/number-value-accessor';
import { RadioValueAccessor } from './directives/radio-value-accessor';
import { SelectValueAccessor } from './directives/select-value-accessor';
import { TextValueAccessor } from './directives/text-value-accessor';
import * as i0 from "@angular/core";
import * as i1 from "./directives/components";
const DECLARATIONS = [
    ...DIRECTIVES,
    // ngModel Accessors
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,
];
export class BeeQModule {
    static forRoot() {
        return {
            ngModule: BeeQModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: () => defineCustomElements,
                    multi: true,
                    deps: [DOCUMENT, NgZone],
                },
            ],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BeeQModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: BeeQModule, declarations: [i1.BqAccordion, i1.BqAccordionGroup, i1.BqAlert, i1.BqAvatar, i1.BqBadge, i1.BqBreadcrumb, i1.BqBreadcrumbItem, i1.BqButton, i1.BqCard, i1.BqCheckbox, i1.BqCol, i1.BqDatePicker, i1.BqDialog, i1.BqDivider, i1.BqDrawer, i1.BqDropdown, i1.BqEmptyState, i1.BqGrid, i1.BqIcon, i1.BqInput, i1.BqLogo, i1.BqNotification, i1.BqOption, i1.BqOptionGroup, i1.BqOptionList, i1.BqPageTitle, i1.BqPanel, i1.BqProgress, i1.BqRadio, i1.BqRadioGroup, i1.BqRow, i1.BqSelect, i1.BqSideMenu, i1.BqSideMenuItem, i1.BqSlider, i1.BqSpinner, i1.BqStatus, i1.BqStepItem, i1.BqSteps, i1.BqSwitch, i1.BqTab, i1.BqTabGroup, i1.BqTag, i1.BqText, i1.BqTextarea, i1.BqToast, i1.BqTooltip, 
            // ngModel Accessors
            BooleanValueAccessor,
            NumericValueAccessor,
            RadioValueAccessor,
            SelectValueAccessor,
            TextValueAccessor], imports: [CommonModule], exports: [i1.BqAccordion, i1.BqAccordionGroup, i1.BqAlert, i1.BqAvatar, i1.BqBadge, i1.BqBreadcrumb, i1.BqBreadcrumbItem, i1.BqButton, i1.BqCard, i1.BqCheckbox, i1.BqCol, i1.BqDatePicker, i1.BqDialog, i1.BqDivider, i1.BqDrawer, i1.BqDropdown, i1.BqEmptyState, i1.BqGrid, i1.BqIcon, i1.BqInput, i1.BqLogo, i1.BqNotification, i1.BqOption, i1.BqOptionGroup, i1.BqOptionList, i1.BqPageTitle, i1.BqPanel, i1.BqProgress, i1.BqRadio, i1.BqRadioGroup, i1.BqRow, i1.BqSelect, i1.BqSideMenu, i1.BqSideMenuItem, i1.BqSlider, i1.BqSpinner, i1.BqStatus, i1.BqStepItem, i1.BqSteps, i1.BqSwitch, i1.BqTab, i1.BqTabGroup, i1.BqTag, i1.BqText, i1.BqTextarea, i1.BqToast, i1.BqTooltip, 
            // ngModel Accessors
            BooleanValueAccessor,
            NumericValueAccessor,
            RadioValueAccessor,
            SelectValueAccessor,
            TextValueAccessor] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BeeQModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: BeeQModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVlcS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWNrYWdlcy9iZWVxLWFuZ3VsYXIvc3JjL2JlZXEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7QUFFckUsTUFBTSxZQUFZLEdBQUc7SUFDbkIsR0FBRyxVQUFVO0lBQ2Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDbEIsQ0FBQztBQU9GLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLG9CQUFvQjtvQkFDdEMsS0FBSyxFQUFFLElBQUk7b0JBQ1gsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztpQkFDekI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO2tJQWJVLFVBQVU7bUlBQVYsVUFBVTtZQWJyQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDbEIsbUJBQW1CO1lBQ25CLGlCQUFpQixhQUlQLFlBQVk7WUFUdEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsa0JBQWtCO1lBQ2xCLG1CQUFtQjtZQUNuQixpQkFBaUI7bUlBUU4sVUFBVSxZQUpYLFlBQVk7OzRGQUlYLFVBQVU7a0JBTHRCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsT0FBTyxFQUFFLFlBQVk7aUJBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZmluZUN1c3RvbUVsZW1lbnRzIH0gZnJvbSAnQGJlZXEvY29yZS9kaXN0L2xvYWRlcic7XG5cbmltcG9ydCB7IERJUkVDVElWRVMgfSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgQm9vbGVhblZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYm9vbGVhbi12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBOdW1lcmljVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4vZGlyZWN0aXZlcy9udW1iZXItdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHsgUmFkaW9WYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3JhZGlvLXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7IFNlbGVjdFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2VsZWN0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7IFRleHRWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RleHQtdmFsdWUtYWNjZXNzb3InO1xuXG5jb25zdCBERUNMQVJBVElPTlMgPSBbXG4gIC4uLkRJUkVDVElWRVMsXG4gIC8vIG5nTW9kZWwgQWNjZXNzb3JzXG4gIEJvb2xlYW5WYWx1ZUFjY2Vzc29yLFxuICBOdW1lcmljVmFsdWVBY2Nlc3NvcixcbiAgUmFkaW9WYWx1ZUFjY2Vzc29yLFxuICBTZWxlY3RWYWx1ZUFjY2Vzc29yLFxuICBUZXh0VmFsdWVBY2Nlc3Nvcixcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IERFQ0xBUkFUSU9OUyxcbiAgZXhwb3J0czogREVDTEFSQVRJT05TLFxufSlcbmV4cG9ydCBjbGFzcyBCZWVRTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxCZWVRTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCZWVRTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogKCkgPT4gZGVmaW5lQ3VzdG9tRWxlbWVudHMsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgZGVwczogW0RPQ1VNRU5ULCBOZ1pvbmVdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=