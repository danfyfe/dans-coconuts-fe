

const Coconuts = ({ page }) => {
    console.log(page)
    return (
        <p>coconuts</p>
    )
};

Coconuts.getInitialProps = async () => {
    const res = await fetch('http://127.0.0.1:8000/coconuts');
    const json = await res.json();
    return {
        page: json
    }
};

export default Coconuts;
