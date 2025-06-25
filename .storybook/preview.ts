import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { Preview } from '@storybook/angular'
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
  controls: { expanded: true },
  },
  tags: ['autodocs']
};

export default preview;