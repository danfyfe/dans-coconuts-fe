import CoconutContainer from "@/components/coconuts/coconut-container";
import GitHubContent from "@/components/github/github-content";
import GitHubRepos from "@/components/github/github-repos";

const GitHubPage = () => (
  <>
    <CoconutContainer />
    <GitHubContent>
      {/* @ts-expect-error */}
      <GitHubRepos />
    </GitHubContent>
  </>
);

export default GitHubPage;
