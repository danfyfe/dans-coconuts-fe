'use client'
import { GetRepos } from "@/app/api/graphql/github";
import { useState, useEffect } from "react";

/**
 * 
 * DO NOT USE - github component is a server component, so this isn't needed 
 * 
 * 
 */

const useGitHubRepos = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>();
  const [status, setStatus] = useState<number>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const gitHubRepoResp = await GetRepos();
      const gitHubRepos: GitHubResponse = await gitHubRepoResp.json();
      const { status, error } = gitHubRepos;
      setStatus(status);
      setError(error);
      const repos: GitHubRepo[] = gitHubRepos?.data?.user?.pinnedItems?.nodes;
      setRepos(repos);
      // console.log(repos)
      setLoading(false);
    };
    fetchData();
  },[]);
  
  

  return {
    loading,
    repos,
    status,
    error
  }
};

export default useGitHubRepos;
