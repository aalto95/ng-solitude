import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';
import { html } from 'code-tag';

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
    label: 'Himeno',
    paragraph: 'is best girl',
    image: 'https://wegotthiscovered.com/wp-content/uploads/2022/11/himeno.jpg',
  },
  {
    label: 'It gets lonely',
    paragraph: 'at the top',
    image:
      'https://mountainhouse.com/cdn/shop/articles/denali-national-park-in-alaska-feature-image-min_1024x.jpg?v=1624973320',
  },
  {
    label: 'All I know is grind',
    image: 'https://medialeaks.ru/wp-content/uploads/2023/01/sajt-dasha-4.jpg',
  },
];

export default meta;

export const Default: StoryObj<SliderComponent> = {
  render: (args, context) => ({
    template: html`<sol-slider [slides]="slides"></sol-slider>`,
    props: {
      ...context.initialArgs,
      ...args,
    },
  }),
  args: {
    slides,
  },
};
