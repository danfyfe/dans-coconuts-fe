import getErrorMessage from "@/lib/errors/getErrorMessage";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  const { url } = request;
  try {
    const params = new URL(url).searchParams;
    const searchTerm = params.get('search');
    if (params && searchTerm) {

      const searcher_aggregate = {
        "$search": {
          "index": "users",
          autocomplete: {
            query: searchTerm,
            path: 'username'
          }

        }
      }

      return NextResponse.json({
        success: true
      })
    }
    return NextResponse.json({
      success: false,
      message: 'No search term.'
    })
  } catch(error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      success: false,
      message
    })
  }
};
