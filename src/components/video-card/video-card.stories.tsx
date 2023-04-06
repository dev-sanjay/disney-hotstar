import { ComponentMeta, ComponentStory } from '@storybook/react';

import VideoCard from '.';

export default {
  title: 'Components/VideoCard',
} as ComponentMeta<typeof VideoCard>;

export const Template: ComponentStory<typeof VideoCard> = (args) => (
  <VideoCard {...args} />
);
Template.storyName = 'VideoCard';
