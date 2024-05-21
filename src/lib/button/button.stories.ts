import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { html } from 'code-tag';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  args: {
    fill: false,
    warning: false,
    loading: false,
    variant: 'primary',
    iconSource: {
      left: './icons/cap.svg',
      right: './icons/download.svg',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
};

export default meta;

export const Default: StoryObj<ButtonComponent> = {
  render: (args, context) => ({
    template: html`<button
      sol-button
      [fill]="fill"
      [warning]="warning"
      [variant]="variant"
    >
      Кнопка
    </button>`,
    props: {
      ...context.initialArgs,
      ...args,
    },
  }),
  args: {},
};

export const Disabled: StoryObj<ButtonComponent> = {
  render: (args, context) => ({
    template: html`<button
      sol-button
      [fill]="fill"
      [warning]="warning"
      [variant]="variant"
      disabled
    >
      Кнопка
    </button>`,
    props: {
      ...context.initialArgs,
      ...args,
    },
  }),
  args: {},
};

export const WithIcons: StoryObj<ButtonComponent> = {
  render: (args, context) => ({
    template: html`<button
      sol-button
      [fill]="fill"
      [warning]="warning"
      [variant]="variant"
      [iconSource]="iconSource"
      [loading]="loading"
    >
      Кнопка
    </button>`,
    props: {
      ...context.initialArgs,
      ...args,
    },
  }),
  args: {},
};

export const Loading: StoryObj<ButtonComponent> = {
  render: (args, context) => ({
    template: html`<button
      sol-button
      [fill]="fill"
      [warning]="warning"
      [variant]="variant"
      [loading]="true"
    >
      Кнопка
    </button>`,
    props: {
      ...context.initialArgs,
      ...args,
    },
  }),
  args: {},
};
