import getErrorMessage from "@/lib/errors/getErrorMessage";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
  const { url } = request;
  try {
    const params = new URL(url).searchParams;
    const searchTerm = params.get('search');
    if (params && searchTerm) {
      const db = await connectMongoDB();
      const usersCollection = db?.connection.collection('Users');
      // console.log(usersCollection)
      const searcher_aggregate = {
        $search: {
          index: "users",
          text: {
            query: "danfyfe",
            path: "username"
          }
        }
      };

      const projection = {
        $project: {
          username: 1,
          email: 1,
          image: 1
        }
      }
      const results = await usersCollection?.aggregate([ searcher_aggregate, projection ]).limit(50).toArray();

      return NextResponse.json({
        success: true,
        users: results
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
