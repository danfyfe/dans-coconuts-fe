import { NextResponse } from "next/server";
import { GetGitHubRepos } from "@/graphql/github/queries";

export async function GET() {
  const headers = {
    'content-type': 'application/json',
    'Authorization': `Bearer ${process.env.GITHUB_GRAPHQL_TOKEN}`
  };

  const requestBody = {
    query: GetGitHubRepos
  };
  
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody)
  };
  
  const response = await fetch(process.env.GITHUB_GRAPHQL_URL ?? '', options);
  const jsonRespData = await response.json();
  const { status } = response;
  const { message } = jsonRespData;
  if (status === 200) {
    return NextResponse.json({ ...jsonRespData, status })
  }
  return NextResponse.json({ error: message, status })
}
