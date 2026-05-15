import { renderAccordion, decorateAccordion } from './accordion.js';
import './accordion.css';

export default {
  title: 'Components/Accordion',

  argTypes: {
    items: { control: 'object' },
  },
};

const Template = (args) => {
  const el = renderAccordion(args);

  decorateAccordion(el);

  return el;
};

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      title: 'What is Storybook?',
      content: 'Storybook lets you build components in isolation.',
    },
    {
      title: 'Why AEM blocks?',
      content: 'AEM blocks are reusable content components.',
    },
  ],
};