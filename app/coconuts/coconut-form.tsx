'use client'
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { clearLine } from "readline";


interface FormData {
    slug: string
}

const CoconutForm = () => {
    const router = useRouter();
    const [slug, setSlug] = useState('');
    console.log(slug)

    const handleSubmit = async (e: FormEvent, { slug }: FormData) => {
        e.preventDefault();
        await fetch('/api/coconuts', {
            method: 'POST',
            body: JSON.stringify({
                slug
            })
        });
        router.refresh();
    };

    return(
        <form className="m-[4%] relative" onSubmit={(e) => handleSubmit(e, { slug })}>
            <label className="absolute mt-[-20px]" htmlFor="slug-input">Slug:</label>
            <input id="slug-input" className="p-2" value={slug} onChange={(e) => setSlug(e.target.value)}></input>
            <button className="m-2 border-2 p-2" type='submit'>Make a new one</button>
        </form>
    )
};

export default CoconutForm;
