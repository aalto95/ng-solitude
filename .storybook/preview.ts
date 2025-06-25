import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

export const parameters = {
  controls: { expanded: true },

  docs: {
    codePanel: true
  }
};
export const tags = ['autodocs'];
