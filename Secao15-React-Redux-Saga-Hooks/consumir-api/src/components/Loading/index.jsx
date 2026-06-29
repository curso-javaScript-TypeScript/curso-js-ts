import PropTypes from 'proptypes';

import { Container } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div>
        <span>Carregando...</span>
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.PropTypes = {
  isLoading: PropTypes.bool,
};
