import { useRouter } from "next/router";


const BlogPage = () => {
    const router = useRouter();
    const { slug } = router.query
    return (
        <p>blog page {slug}</p>
    )
};


export default BlogPage;
