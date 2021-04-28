import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import RepoCard from '../../components/repo-card/RepoCard';
import { fetchRepo } from '../../api/api';

import './detail.scss';

const Detail = () => {
  const [repo, setRepo] = useState();
  const { name } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (!state?.[0]) {
      fetchRepo(name).then(setRepo);
    } else {
      setRepo(state?.[0]);
    }
  }, [name, state]);

  return (
    <div className="detail-container">
      {repo ? (
        <RepoCard repo={repo} />
      ) : (
        <CircularProgress style={{ margin: 'auto' }} color="secondary" role="loading" />
      )}
    </div>
  );
};

export default Detail;
