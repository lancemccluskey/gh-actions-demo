import { render, screen, fireEvent } from '@testing-library/react';
import Jokes from '../../../pages/jokes';

const testData = { data: { joke: 'testJoke', } };

describe('<Jokes />', () => {
  it('renders', () => {
    const { container } = render(<Jokes data={testData} />);

    expect(container).toMatchSnapshot();
  });

  it('should display Not implemented if Like clicked', () => {
    render(<Jokes data={testData} />);

    expect(screen.queryByText('Not implemented')).toBeNull();
    const likeButton = screen.getAllByRole('button')[0];
    fireEvent.click(likeButton);

    expect(screen.getByText('Not implemented')).toBeInTheDocument();
  });

  it('should display new joke if next clicked', async () => {
    fetch.resetMocks();

    render(<Jokes data={testData} />);

    fetch.mockResponseOnce(JSON.stringify({ joke: 'newjoke' }));

    const nextButton = screen.getAllByRole('button')[1];
    fireEvent.click(nextButton);

    await screen.findByText('newjoke');
  })
});
