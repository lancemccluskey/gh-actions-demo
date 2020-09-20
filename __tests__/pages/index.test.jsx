import { render, screen } from '@testing-library/react';
import Homepage from '../../pages/index';

describe('<Homepage />', () => {
  it('renders', () => {
    const { container } = render(<Homepage />);

    expect(container).toMatchSnapshot();
  });

  it('should have GH Actions title', () => {
    render(<Homepage />);

    expect(screen.getByText('GH Actions')).toBeInTheDocument();
  });
});
