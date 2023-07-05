async function GET(request: Request) {
    console.log(request)
    return new Response('test')
}
async function POST(request: Request) {
    const body = await request.json();

    const response = await fetch('http://127.0.0.1:8000/coconuts', {
        "method": 'POST',
        "body": body,
        "headers": {
            'content-type': 'application/json'
        }
    }).then((res) => res.json());
    console.log('response:', response)
    return new Response('k')
}

export {
    GET,
    POST
}