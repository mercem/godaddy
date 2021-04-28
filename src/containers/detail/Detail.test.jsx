import { render, screen, waitFor } from '@testing-library/react';
import Detail from './Detail';
import { fetchRepo } from '../../api/api';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../api/api');

test('Renders Detail  Page', async () => {
  const testRepo = {
    name: 'another-repo',
    description: 'long description',
    id: 123,
    url: 'https://exampleurl.io',
    language: 'js',
    forks: 1,
    open_issues: 2,
    watchers: 3,
    subscribers_count: 4,
    private: true,
  };

  fetchRepo.mockResolvedValueOnce(testRepo);

  render(
    <MemoryRouter initialEntries={[`/${testRepo.name}`]}>
      <Route exact path="/:name" component={Detail} />
    </MemoryRouter>,
  );

  expect(screen.getByRole('loading')).toBeInTheDocument();

  expect(fetchRepo).toHaveBeenCalledTimes(1);
  expect(fetchRepo).toHaveBeenCalledWith(testRepo.name);

  await waitFor(() => expect(screen.getByText(testRepo.name)).toBeInTheDocument());
});
