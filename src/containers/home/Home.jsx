import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import RepoList from '../../components/repo-list/RepoList';
import { fetchAllRepos } from '../../api/api';

import './home.scss';

const Home = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    fetchAllRepos().then((data) => {
      setRepos(data);
    });
  }, []);

  return (
    <div className="home-container">
      <div className="repo-list-header">GoDaddy Public Repositories</div>
      {repos ? (
        <div>
          <RepoList data={repos} />
        </div>
      ) : (
        <CircularProgress role="loading" />
      )}
    </div>
  );
};

export default Home;
