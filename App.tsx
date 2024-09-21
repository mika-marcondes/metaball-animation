import {useWindowDimensions} from "react-native";
import Touchable, {useGestureHandler,} from "react-native-skia-gesture"
import {useSharedValue} from "react-native-reanimated";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Circle, Group, SweepGradient, vec} from "@shopify/react-native-skia";


const radius = 80;

export default function App() {

    const {width: windowWidth, height: windowHeight} = useWindowDimensions();

    const cx = useSharedValue(windowWidth / 2);
    const cy = useSharedValue(windowHeight / 2);

    const context = useSharedValue({x: 0, y: 0});

    const circleGesture = useGestureHandler({
        onStart: () => {
            'worklet';
            context.value = {
                x: cx.value,
                y: cy.value,
            }
        },
        onActive: ({translationX, translationY}) => {
            'worklet';
            cx.value = context.value.x + translationX;
            cy.value = context.value.y + translationY;
        },
    })

    return (
        <GestureHandlerRootView>
            <Touchable.Canvas style={{flex: 1, backgroundColor: 'white'}}>
                <Group>
                    <Touchable.Circle {...circleGesture} cx={cx} cy={cy} r={radius}></Touchable.Circle>
                    <Circle cx={windowWidth / 2} cy={windowHeight / 2} r={radius}></Circle>
                    <SweepGradient c={vec(0, 0)} colors={['cyan', 'magenta', 'cyan']}></SweepGradient>
                </Group>
            </Touchable.Canvas>
        </GestureHandlerRootView>
  );
}
