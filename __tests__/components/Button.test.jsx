import { render, screen } from '@testing-library/react';
import Button from '../../src/components/Button';

describe('<Button />', () => {
  it('renders', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });

  it('should have Next and Like', () => {
    render(<Button />);

    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Like')).toBeInTheDocument();
  });
});
