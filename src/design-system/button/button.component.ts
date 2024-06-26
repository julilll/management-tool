import { ChangeDetectionStrategy, Component, ViewChild, computed, input } from '@angular/core';
import { IconName } from '../icon/icon.interface';
import { IconComponent } from '../icon/icon.component';
import { NgClass, UpperCasePipe } from '@angular/common';

export interface Button {
  type?: string;
  color?: 'success';
  content?: string;
  icon?: IconName;
}

@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="buttonClasses()" [type]="type()">
      @if (icon()) {
        <app-icon [size]="16" [ngClass]="iconClasses()" [name]="icon()"/>
        }
      <p [ngClass]="color()? 'text-white': 'text-app-font-color'">{{ content() | uppercase }}</p>
    </button>
  `,
  imports: [IconComponent, NgClass, UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ButtonComponent {
  public color = input<Button['color']>();
  public type = input<Button['type']>();
  public content = input<Button['content']>();
  public icon = input<Button['icon']>();

  protected buttonClasses(): string {
    return 'rounded-md py-3 px-10 border-2 flex items-center gap-2 ' + (this.color() ? 'bg-app-success' : '')
  }

  protected iconClasses(): string {
    return this.color() ? "fill-white": "fill-app-font-color"
  }
}
