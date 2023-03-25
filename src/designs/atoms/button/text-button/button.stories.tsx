import TextButtonComponent from '@atoms/button/text-button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { typographies } from '@typography/styles';

import BaseButton, { Button } from '../base-button/button.stories';

export default {
  title: 'Atoms/Button/Text Button',
  component: TextButtonComponent,
  argTypes: {
    ...BaseButton.argTypes,
    typography: {
      control: {
        type: 'select',
        options: Object.keys(typographies),
      },
    },
  },
} as ComponentMeta<typeof TextButtonComponent>;

export const TextButton: ComponentStory<typeof TextButtonComponent> = (
  args
) => (
  <TextButtonComponent {...args}>
    My name is <i>Sanjay</i>
  </TextButtonComponent>
);

TextButton.args = {
  ...Button.args,
  typography: 'Montserrat/Bold/16px',
};
