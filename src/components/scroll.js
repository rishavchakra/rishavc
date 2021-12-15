import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function ScrollContainer(props) {
    const containerRef = useRef(null)

    return (
        <LocomotiveScrollProvider
            options={
                {
                    smooth:true,
                }
            }
            containerRef={containerRef}
        >
            <main data-scroll-container ref={containerRef}>
                {props.children}
            </main>
        </LocomotiveScrollProvider>
    );
}

export default ScrollContainer;