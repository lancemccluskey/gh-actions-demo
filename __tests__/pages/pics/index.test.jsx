import { render, screen, fireEvent } from '@testing-library/react';
import Pics from '../../../pages/pics';

describe('<Pics />', () => {
  it('should have a picture element', () => {
    render(<Pics />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should display Not implemented if Like clicked', () => {
    render(<Pics />);

    expect(screen.queryByText('Not implemented')).toBeNull();
    const likeButton = screen.getAllByRole('button')[0];
    fireEvent.click(likeButton);

    expect(screen.getByText('Not implemented')).toBeInTheDocument();
  });
});
