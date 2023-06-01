import {
  useGLTF,
  Environment,
  Float,
  ContactShadows,
  PresentationControls,
  Html,
  Text,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.4}
            height={1.65}
            intensity={65}
            color={"white"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          {/* position-y={-0.9}
            position-x={-0.7}
            position-z={1}
            rotation-y={-0.7}
            rotation-x={-0.11} */}
          <primitive position-y={-1.2} object={computer.scene}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://ayers-moviefinder.netlify.app/" />
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
          >
            MOVIE FINDER
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows opacity={0.4} scale={5} blur={2.4} position-y={-1.4} />
    </>
  );
}
