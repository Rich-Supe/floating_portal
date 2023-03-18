import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
import { FloatingIsland } from "./FloatingIsland";
import { FloatingRocks } from "./FloatingRocks";
import { Portal } from "./Portal";
import { Trees } from "./Trees";
import { Words } from "./Words";
import { Grass } from "./Grass";


export function SceneContainer() {
    return (
        <Suspense fallback={null}>
            <Environment background={"only"} files={process.env.PUBLIC_URL + "textures/bg.hdr"} />
            <Environment background={false} files={process.env.PUBLIC_URL + "textures/envmap.hdr"} />

            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5}/>

            <Float
                speed={0.5}
                rotationIntensity={0.7}
                floatIntensity={0.7}
            >
                <FloatingIsland />
                <Portal />
                <Trees />
                <Words />
                <Grass />
            </Float>

            <FloatingRocks />
        </Suspense>
    )
}