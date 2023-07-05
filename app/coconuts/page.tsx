import Coconut from "./coconut";
import CoconutForm from "./coconut-form";

interface Page {
    slug: string
};

const Coconuts = async () => {
    const res = await fetch('http://127.0.0.1:8000/coconuts');
    const pages = await res.json();

    return(
        <>
            <div className="border-2">
                {
                    pages?.map((page: Page, idx: number) => {
                        return (
                            <Coconut slug={page.slug} key={`slug-${idx}`}/>
                        )
                    })
                }
            </div>
            <CoconutForm />
        </>
    )
};

export default Coconuts;
