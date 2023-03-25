import IconButtonComponent from '@atoms/button/icon-button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseButton, { Button } from '../base-button/button.stories';

export default {
  title: 'Atoms/Button/Icon Button',
  component: IconButtonComponent,
  argTypes: {
    ...BaseButton.argTypes,
  },
} as ComponentMeta<typeof IconButtonComponent>;

export const IconButton: ComponentStory<typeof IconButtonComponent> = (
  args
) => <IconButtonComponent {...args}>My Icon</IconButtonComponent>;

IconButton.args = {
  ...Button.args,
  icon: { name: 'home', size: 'icon-2.5x' },
};
