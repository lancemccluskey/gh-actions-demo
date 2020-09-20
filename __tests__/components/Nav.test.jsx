import { render, screen } from '@testing-library/react';
import Nav from '../../src/components/Nav';

describe('<Nav />', () => {
  it('should render', () => {
    const { container } = render(<Nav />);

    expect(container).toMatchSnapshot();
  });

  it('should have correct links', () => {
    render(<Nav />);

    expect(screen.getByText('Facts')).toBeInTheDocument();
    expect(screen.getByText('Jokes')).toBeInTheDocument();
    expect(screen.getByText('Pics')).toBeInTheDocument();
    expect(screen.getByText('Quotes')).toBeInTheDocument();
  });
});
