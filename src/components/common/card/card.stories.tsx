import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '.';

export default {
  title: 'Components/common/Card',
  component: Card,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as ComponentMeta<typeof Card>;

export const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);
Template.storyName = 'Card';
Template.args = {
  size: 'small',
};
