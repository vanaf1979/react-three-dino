/*
 * Import remote dependencies
 */
import {Canvas} from "@react-three/fiber";

/*
 * Import local dependencies
 */
import Dino from "./Dino.jsx";

const App = () => {
    return (
        <>
            <div className="title">
                <p>Hello there, I'm...</p>
                <h1>Shaun Hume,</h1>
                <p>Senior Software Engineer and Dad Tech-Rex.</p>
                <a href="#">Contact me</a>
            </div>
            <Canvas shadows camera={{position: [0, 6, 10]}}>
                <ambientLight intensity={.5} color={`hsl(0, 0%, 100%)`}/>
                <pointLight intensity={1} args={[`hsl(160, 100%, 50%)`, 1, 100]} position={[-4, 0, 0]}/>
                <fog attach="fog" args={['hsl(75, 40%, 1%)', 0, 14]}/>
                <Dino/>
            </Canvas>
            <div className="credits">
                <a href="https://sketchfab.com/3d-models/dino-fight-e06271daec3b431388640435f211f874" target="_blank">3D model by: Pebegou</a>
            </div>
        </>
    )
}

export default App
