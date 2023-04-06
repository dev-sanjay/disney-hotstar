import { ComponentMeta, ComponentStory } from '@storybook/react';

import Brands from '.';

export default {
  title: 'Components/Brands',
} as ComponentMeta<typeof Brands>;

export const Template: ComponentStory<typeof Brands> = (args) => (
  <Brands {...args} />
);
Template.storyName = 'Brands';
