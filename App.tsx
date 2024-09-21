import {Canvas, Circle} from "@shopify/react-native-skia";

export default function App() {
  return (
      <Canvas style={{flex: 1, backgroundColor: 'white'}}>
          <Circle cx={100} cy={100} r={50} color={'blue'}></Circle>
      </Canvas>
  );
}
