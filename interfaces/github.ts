interface GitHubResponse {
  data: {
    user: {
      name: string;
      pinnedItems: {
        nodes: GitHubRepo[]
      }
    }
  },
  status: number;
  error?: string;
};

interface GitHubRepo {
  name: string;
  url: string;
  updatedAt: string;
};
