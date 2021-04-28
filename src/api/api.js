export const fetchRepo = (name) => fetch(`https://api.github.com/repos/godaddy/${name}`).then((res) => res.json());

export const fetchAllRepos = () => fetch('https://api.github.com/orgs/godaddy/repos')
  .then((res) => res.json())