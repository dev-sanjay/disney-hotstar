// eslint-disable-next-line import/order
import Button from '@atoms/button/base-button';
import IconButton from '@atoms/button/icon-button';
import TextButton from '@atoms/button/text-button';
import TextIconButton from '@atoms/button/text-icon-button';

import Icon from '@atoms/icon';
import Typography from '@typography';

const Home: React.FC = () => (
  <>
    <h1>Wow, It is working.</h1>
    <Icon name="fullscreen" size="icon-2.5x" />

    <Button varient="primary" />

    <Button varient="primary">You can put whatever you want</Button>

    <TextButton typography="Montserrat/Bold/32px">
      My name is <i>Sanjay</i>
    </TextButton>

    <IconButton icon={{ name: 'home', size: 'icon-2.5x' }}>My Icon</IconButton>

    <TextIconButton
      varient="outline"
      text="Play"
      icon={{ name: 'play' }}
      typography="Montserrat/Bold/32px"
    >
      My TextIconButon
    </TextIconButton>
    <Typography typography="Montserrat/Bold/32px">
      Montserrat/Bold/32px
    </Typography>
  </>
);

export default Home;
