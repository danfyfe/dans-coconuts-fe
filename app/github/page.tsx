import CoconutContainer from "@/components/coconuts/coconut-container";
import GitHubContent from "@/components/github/github-content";
import GitHubRepos from "@/components/github/github-repos";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts | GitHub",
  description: 'GitHub Repos'
}

const GitHubPage = () => (
  <>
    {/* <CoconutContainer /> */}
    <GitHubContent>
      <GitHubRepos />
    </GitHubContent>
  </>
);

export default GitHubPage;
