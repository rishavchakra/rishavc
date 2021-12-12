import { Locomotive } from 'locomotive-scroll'

function Page(props) {
    return (
        <div
            // Scroll behaviour
            data-scroll-section
            // Tailwind styling
            // snap-start for css-based scroll snapping
            className="h-screen border-8">
            {props.children}
        </div>
    );
}

export default Page;