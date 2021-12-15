import { useLocomotiveScroll } from 'react-locomotive-scroll'

function SectionTitle(props) {
    // const { scroll } = useLocomotiveScroll()

    return (<div
            data-scroll data-scroll-speed="2"
        className="h-full grid place-items-center">
        <h1
            className="text-6xl hover:tracking-[0.4em]">
            {props.text}
        </h1>
    </div>);
}

export default SectionTitle;