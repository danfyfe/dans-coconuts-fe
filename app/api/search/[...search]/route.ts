export async function GET(request: Request) {
  const queries = request.json();
  console.log('QUERIES?', queries)
};
