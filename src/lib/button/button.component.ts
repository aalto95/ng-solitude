import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button[sol-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  @Input() fill = false;
  @Input() warning = false;
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() iconSource = {
    left: '',
    right: '',
  };

  @HostBinding('class.sol-button') private button = true;

  @HostBinding('class.sol-button--fill')
  private get isFill(): boolean {
    return this.fill;
  }

  @HostBinding('class.sol-button--warning')
  private get isWarning(): boolean {
    return this.warning;
  }

  @HostBinding('class.sol-button-primary')
  private get isPrimary(): boolean {
    return this.variant === 'primary';
  }

  @HostBinding('class.sol-button-secondary')
  private get isSecondary(): boolean {
    return this.variant === 'secondary';
  }

  @HostBinding('class.sol-button-outline')
  private get isOutline(): boolean {
    return this.variant === 'outline';
  }

  ngOnInit(): void {}
}
