import ButtonComponent from '@atoms/button/base-button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/Button/Button',
  component: ButtonComponent,
  argTypes: {
    varient: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outline'],
      },
    },
    shape: {
      options: ['normal', 'circular', 'square'],
      mapping: {
        normal: {},
        circular: { circular: { diameter: '100px' } },
        square: { square: { side: '100px' } },
      },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

export const Button: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>Button</ButtonComponent>
);
Button.args = {
  varient: 'primary',
  shape: {},
};
