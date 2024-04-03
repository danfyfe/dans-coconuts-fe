import CoconutContainer from "@/components/coconuts/coconut-container";
import GitHubContent from "./github-content";
import GitHubRepos from "./github-repos";

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
