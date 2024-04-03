import { GetRepos } from "../api/graphql/github";
import ErrorContainer from "@/components/core/errors/error-container";
import ErrorSpan from "@/components/core/errors/error-span";
import P from "@/components/core/typography/P";

const GitHubRepos = async () => {
  const gitHubRepoResp = await GetRepos();
  const gitHubRepos: GitHubResponse = await gitHubRepoResp.json();
  const { status, error } = gitHubRepos;
  const repos: GitHubRepo[] = gitHubRepos?.data?.user?.pinnedItems?.nodes;

  return (
    <>
      {
        status === 200 ? (
          <ul className="flex flex-col gap-3">
            {
              repos?.map((repo, index) => (
                <li key={`${index}-repo-name`}>
                  <a href={repo?.url} className="underline" target="_blank">
                    {repo?.name}
                  </a>
                </li>
              ))
            }
          </ul>
        ) : (
          <ErrorContainer>
            <P className="text-xl text-center mb-3">Oh No!</P>
            <P className="mb-1">It looks like something went wrong when loading the data</P>
            <P>Error from server: <ErrorSpan>{error}</ErrorSpan></P>
          </ErrorContainer>
        )
      }
    </> 
  )
};

export default GitHubRepos;
