import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

test('Should render loader component', () => {
  render(<Loader />)

  expect(screen.getByRole('img')).toBeInTheDocument()
});