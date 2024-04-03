import { NextResponse } from "next/server";
import { GetGitHubRepos } from "@/graphql/github/queries";

export async function GetRepos() {
  // cannot currently fetch on the server using local routes, since
  // the server api isn't available during build
  // this mocks the functionality
  const headers = {
    'content-type': 'application/json',
    'Authorization': `Bearer ${process.env.GRAPHQL_TOKEN_GITHUB}`
  };

  const requestBody = {
    query: GetGitHubRepos
  };
  
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(requestBody),
    next: {
      revalidate: 30
    }
  };
  
  const response = await fetch(process.env.GRAPHQL_URL_GITHUB ?? '', options);
  const jsonRespData = await response.json();
  const { status } = response;
  const { message } = jsonRespData;
  if (status === 200) {
    return NextResponse.json({ ...jsonRespData, status })
  }
  return NextResponse.json({ error: message, status })
}
