interface GitHubResponse {
  data: {
    user: {
      name: string;
      pinnedItems: {
        nodes: GitHubRepo[]
      }
    }
  }
};

interface GitHubRepo {
  name: string;
  url: string;
  updatedAt: string;
};
