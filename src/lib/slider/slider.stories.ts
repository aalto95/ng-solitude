import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import { SliderComponent } from './slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Components/Slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      declarations: [SliderComponent],
    }),
  ],
};

const slides = [
  {
    label: 'Label 1',
    paragraph: 'Paragraph 1',
    image:
      'https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8yZGQxMmY4MjcxNzc3ZTMxMDc1NWIxMjNjM2U4M2I2ND9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.3aUNpksrz3VtIOjV67WWRZRnUvlNHmvVRlSxPY0CfSs',
  },
];

export default meta;

export const Default: StoryObj<SliderComponent> = {
  render: (args, context) => ({
    template: `
      <sol-slider [slides]="slides"
      ></sol-slider>
    `,
    props: {
      ...context.initialArgs,
      ...args,
    },
  }),
  args: {
    slides,
  },
};
