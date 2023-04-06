import Actions from './actions';
import Details from './details';
import { StyledInformation } from './styles';

const Information: React.FC = () => (
  <StyledInformation>
    <Details />
    <Actions />
  </StyledInformation>
);

export default Information;
