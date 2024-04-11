export const GetGitHubRepos = `
  query GetGitHubRepos {
    user(login: "danfyfe") {
      name
      pinnedItems(first: 4, types: REPOSITORY) {
        nodes {
          ...on Repository {
            name
            url
            description
            updatedAt
          }
        }
      }
    }
  }
`;
