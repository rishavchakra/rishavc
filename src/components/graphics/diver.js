import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const ACCEL = 0.06
const MAX_SPEED = 1

// Not currently used
function Diver(props) {
    const [vel, setV] = useState(new THREE.Vector2())

    useFrame(() => {
    })

    return (
        <mesh>
            <boxGeometry args={1, 1, 1} />
        </mesh>
    );
}

export default Diver;