import { render, screen } from '@testing-library/react';
import Card from '../../src/components/Card';

describe('<Card />', () => {
  it('renders', () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
  });
});
