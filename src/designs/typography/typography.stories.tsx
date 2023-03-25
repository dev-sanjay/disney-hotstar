import { ComponentMeta, ComponentStory } from '@storybook/react';

import Typography from '@typography';

import { Typographies, typographies } from './styles';

export default {
  title: 'Typographies/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = () => (
  <>
    {Object.keys(typographies).map((type) => (
      <Typography typography={type as Typographies}>
        The quick brown fox jumps over the lazy dog
      </Typography>
    ))}
  </>
);
export const TitleAndText = Template.bind({});
