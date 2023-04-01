import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from './index';

export default {
  title: 'Components/Common/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const LogoStory: ComponentStory<typeof Logo> = () => <Logo />;
LogoStory.storyName = 'Logo';
