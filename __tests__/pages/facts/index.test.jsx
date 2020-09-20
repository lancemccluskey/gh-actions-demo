import { render, screen, fireEvent } from '@testing-library/react';
import Facts from '../../../pages/facts';

const testFact = "testfact";

describe('<Facts />', () => {
  it('renders', () => {
    const { container } = render(<Facts data={testFact} />);

    expect(container).toMatchSnapshot();
  });

  it('should display Not implemented if Like clicked', () => {
    render(<Facts data={testFact} />);

    expect(screen.queryByText('Not implemented')).toBeNull();
    const likeButton = screen.getAllByRole('button')[0];
    fireEvent.click(likeButton);

    expect(screen.getByText('Not implemented')).toBeInTheDocument();
  });

  it('should display new fact when clicking next', async () => {
    fetch.resetMocks();

    render(<Facts data={testFact} />);

    fetch.mockResponseOnce('newfact');

    const nextButton = screen.getAllByRole('button')[1];
    fireEvent.click(nextButton);

    await screen.findByText('newfact');
  });
});
