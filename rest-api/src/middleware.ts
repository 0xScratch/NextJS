/*
    Why we use middle ware? -> To get all api requests in advance, some more changes need to make in order to avoid all requests at one time or in other words, we can control which requests are to be made in advance and which aren't
*/

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:3000', 'https://www.google.com']
export function middleware(request: Request){
    
    const origin = request.headers.get('origin')
    console.log(origin)

    // Sometimes we really need to block the restapi tools too during production, like thunderclient ones
    // in those cases, change the if `condition` to -> if (!allowedOrigins.includes(origin) || !origin)

    // Here we are using the thunderclient tool, so won't be doing the above case
    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: 'Bad Request',
            headers: {
                "Content-Type": 'text/plain'
            }
        })
    }

    // using regex
    // const regex = new RegExp('/api/*')

    // if (regex.test(request.url)){

    // }

    console.log('Middleware!')

    console.log(request.method)
    console.log(request.url)


    return NextResponse.next()
}

// One option for adding paths for the middleware is this..
export const config = {
    matcher: '/api/:path*',
}