import { Metadata } from 'next';
import React from 'react'

interface Props {}

export async function generateMetadata({ params }): Promise<Metadata> {
    const { slug } = params
    const res = await fetch(`http://127.0.0.1:8000/coconuts/${slug}`);
    const page = await res.json();

    return {
        title: page.slug,
        description: page.slug,
        alternates: {
            canonical:'/bloop'
        }
    }
}

const Coconut = async ({ params }) => {
    const { slug } = params;
    const res = await fetch(`http://127.0.0.1:8000/coconuts/${slug}`);
    const page = await res.json();
    return <div>{page.slug}</div>
}

export default Coconut
