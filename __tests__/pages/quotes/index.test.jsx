import { render, screen, fireEvent} from '@testing-library/react';
import Quotes from '../../../pages/quotes';

describe('<Quotes />', () => {
  it('should have a quote', () => {
    render(<Quotes />);

    expect(screen.getByTestId('quote-id')).toBeVisible();
  });

  it('should display Not implemented if Like clicked', () => {
    render(<Quotes />);

    expect(screen.queryByText('Not implemented')).toBeNull();
    const likeButton = screen.getAllByRole('button')[0];
    fireEvent.click(likeButton);

    expect(screen.getByText('Not implemented')).toBeInTheDocument();
  });
});
