export const GetGitHubRepos = `
  query GetGitHubRepos {
    user(login: "danfyfe") {
      name
      pinnedItems(first: 3, types: REPOSITORY) {
        nodes {
          ...on Repository {
            name
            url
            updatedAt
          }
        }
      }
    }
  }
`;
