import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import './repo-card.scss';

const Field = ({ name, data }) => {
  return (
    <div className="field-container">
      <span>
        <span className="field-name">{name}:</span>
        <span className="field-data">{data}</span>
      </span>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    padding: 15,
    minWidth: 275,
    minHeight: 275,
    display: 'flex',
    alignItems: 'center',
    width: 600,
  },
});

const RepoCard = ({ repo }) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Field name="Name" data={repo.name} />
        <Field name="Description" data={repo.description} />
        <Field name="ID" data={repo.id} />
        <Field name="URL" data={repo.url} />
        <Field name="Language" data={repo.language} />
        <Field name="Forks" data={repo.forks} />
        <Field name="Open Issues" data={repo.open_issues} />
        <Field name="Watchers" data={repo.watchers} />
        <Field name="Subscribers Count" data={repo.subscribers_count} />
        <Field name="Private" data={repo.private ? 'Yes' : 'No'} />
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: '15px' }}
          onClick={() => history.push('/')}
        >
          Go Back
        </Button>
      </CardContent>
    </Card>
  );
};

export default RepoCard;
