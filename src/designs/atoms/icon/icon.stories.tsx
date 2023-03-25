/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icon, { IconName } from '.';

export default {
  title: 'Iconography/Icons',
  component: Icon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Icon>;

const iconsList: IconName[] = [
  'add',
  'arrow-back',
  'check-circle',
  'close',
  'done',
  'expand',
  'forward',
  'fullscreen',
  'group',
  'help',
  'home',
  'info',
  'info-line',
  'movie',
  'pause',
  'play',
  'plus',
  'replay',
  'serach',
  'skip-next',
  'star',
  'subtitles',
  'tv',
  'video-library',
  'volume-up',
];

const copyIconToClipboard = async (iconName: IconName) => {
  const icon = `<Icon name="${iconName}" />`;

  await navigator.clipboard.writeText(icon);
  window.alert(`Icon(${iconName}) is copied`);
};

const Template: ComponentStory<typeof Icon> = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      maxWidth: '50%',
      margin: 'auto',
    }}
  >
    {iconsList.map((iconName) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexBasis: '110px',
          flexShrink: '0',
          flexGrow: '0',
        }}
        onClick={() => copyIconToClipboard(iconName)}
      >
        <Icon
          name={iconName}
          size="icon-3x"
          style={{ color: '#FF42A5', cursor: 'pointer' }}
        />
        <span style={{ marginTop: '5px', fontSize: '12px' }}>{iconName}</span>
      </div>
    ))}
  </div>
);

export const Icons = Template.bind({});
