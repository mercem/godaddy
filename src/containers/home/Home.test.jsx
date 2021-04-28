import { render, screen, waitFor } from '@testing-library/react';
import Home from './Home';
import { fetchAllRepos } from '../../api/api';

jest.mock('../../api/api');

test('Renders Home Page', async () => {
  const repoArr = [
    {
      name: 'interesting repo',
      language: 'ts',
      forks: 1,
      archieved: false,
      watchers: 2,
    },
    {
      name: 'another repo',
      language: 'js',
      forks: 3,
      archieved: true,
      watchers: 4,
    },
  ];

  fetchAllRepos.mockResolvedValueOnce(repoArr);

  render(<Home />);

  expect(screen.getByRole('loading')).toBeInTheDocument();

  expect(fetchAllRepos).toHaveBeenCalledTimes(1);
  expect(fetchAllRepos).toHaveBeenCalledWith();

  await waitFor(() => expect(screen.getByText('interesting repo')).toBeInTheDocument());

  repoArr.forEach((repo) => expect(screen.getByText(repo.name)).toBeInTheDocument());
});
