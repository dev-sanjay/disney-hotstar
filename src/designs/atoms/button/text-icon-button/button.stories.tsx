import TextIconButtonComponent from '@atoms/button/text-icon-button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BaseButton, { Button } from '../base-button/button.stories';
import { IconButton } from '../icon-button/button.stories';
import TextStories, { TextButton } from '../text-button/button.stories';

export default {
  title: 'Atoms/Button/Text Icon Button',
  component: TextIconButtonComponent,
  argTypes: {
    ...BaseButton.argTypes,
    ...TextStories.argTypes,
  },
} as ComponentMeta<typeof TextIconButtonComponent>;

export const TextIconButton: ComponentStory<typeof TextIconButtonComponent> = (
  args
) => (
  <TextIconButtonComponent {...args}>My TextIconButon</TextIconButtonComponent>
);

TextIconButton.args = {
  ...Button.args,
  ...IconButton.args,
  ...TextButton.args,
  text: 'text button',
  typography: 'Montserrat/Bold/16px',
};
