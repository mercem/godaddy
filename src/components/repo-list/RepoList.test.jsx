import { render, screen } from '@testing-library/react';
import RepoList from './RepoList';

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

test('Renders RepoList Table', () => {
  const { container } = render(<RepoList data={repoArr} />);

  // should render repos in the given data
  const tableContent = container.getElementsByTagName('tbody')[0].children;
  expect(tableContent.length).toBe(repoArr.length);

  // should render repo name
  const firstRepoName = screen.getByText(repoArr[0].name);
  expect(firstRepoName).toBeInTheDocument();
});
