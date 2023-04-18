import { CSSObject } from 'styled-components';

import StyledIconWrapper, { Size, StyledIcon } from './styles';

export type IconName =
  | 'add'
  | 'arrow-back'
  | 'check-circle'
  | 'close'
  | 'done'
  | 'expand'
  | 'forward'
  | 'fullscreen'
  | 'group'
  | 'help'
  | 'home'
  | 'info'
  | 'info-line'
  | 'movie'
  | 'pause'
  | 'play'
  | 'plus'
  | 'replay'
  | 'serach'
  | 'skip-next'
  | 'star'
  | 'subtitles'
  | 'tv'
  | 'video-library'
  | 'volume-up';

export interface IconProps {
  /**
   * - Name of the icon
   */
  name: IconName;

  /**
   * - Size of the icon
   */
  size?: Size;

  /**
   * - Extra styling for the icon
   */
  style?: CSSObject;
}

const Icon: React.FC<IconProps> = ({ name, style, size, ...rest }) => (
  <StyledIconWrapper $style={style} {...rest} size={size}>
    <StyledIcon className={`icon icon-${name}`} size={size} />
  </StyledIconWrapper>
);

export default Icon;
