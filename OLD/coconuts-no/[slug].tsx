import { useRouter } from "next/router";


const BlogPage = async () => {
    const res = await fetch(`http://127.0.0.1:8000/coconuts/${slug}`);
    const page = await res.json();
    console.log(page)
    return (
        <p>blog page</p>
    )
};

BlogPage.getInitialProps = async (ctx) => {
    const { slug } = ctx.query;
    const res = await fetch(`http://127.0.0.1:8000/coconuts/${slug}`);
    const json = await res.json();
    return {
        page: json
    }
};

export default BlogPage;
