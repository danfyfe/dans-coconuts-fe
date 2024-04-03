import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1";
import P from "@/components/core/typography/P";
import ErrorContainer from "@/components/core/errors/error-container";
import ErrorSpan from "@/components/core/errors/error-span";
import CoconutContainer from "@/components/coconuts/coconut-container";

const GitHubPage = async () => {
  const gitHubRepoResp = await fetch(`http://localhost:3000/api/graphql/github`, { next: { revalidate: 60 }});
  const gitHubRepos: GitHubResponse = await gitHubRepoResp.json();
  const { status, error } = gitHubRepos;
  const repos: GitHubRepo[] = gitHubRepos?.data?.user?.pinnedItems?.nodes;
  console.log('inside github page')
  return (
    <>
      <CoconutContainer />
      <ContentContainer className="flex flex-col w-3/4 md:w-1/4">
        <H1 className="mb-2">GitHub Links</H1>
        <P className="text-lg mb-4">Here are the links to the repositories used in this project</P>
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
        <P className="text-sm mt-4">This page is built using the GitHub GraphQL endpoint</P>
      </ContentContainer>
    </>
  )
};

export default GitHubPage;
