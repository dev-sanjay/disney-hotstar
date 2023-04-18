import { TextIconButton } from '@atoms/button/text-icon-button';
import { StyledActions } from './styles';

const Actions: React.FC = () => (
  <StyledActions>
    <TextIconButton
      varient="secondary"
      icon={{ name: 'play' }}
      typography="Montserrat/Bold/16px"
      text="WATCH NOW"
    />
    <TextIconButton
      varient="outline"
      icon={{ name: 'info' }}
      typography="Montserrat/Bold/16px"
      text="MORE INFORMATION"
    />
  </StyledActions>
);

export default Actions;
