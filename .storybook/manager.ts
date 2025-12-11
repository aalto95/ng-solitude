import { addons } from '@storybook/manager-api';
import { create } from 'storybook/theming/create';

const theme = create({
  base: 'dark',
  brandTitle: 'Solitude UI'
});

addons.setConfig({
  theme
});
