import {useWindowDimensions} from "react-native";
import Touchable, {useGestureHandler,} from "react-native-skia-gesture"
import {useSharedValue} from "react-native-reanimated";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const radius = 80;

export default function App() {

    const {width: windowWidth, height: windowHeight} = useWindowDimensions();

    const cx = useSharedValue(windowWidth / 2);
    const cy = useSharedValue(windowHeight / 2);

    const context = useSharedValue({x: 0, y: 0});

    const gestureHandler = useGestureHandler({
        onStart: () => {
            context.value = {
                x: cx.value,
                y: cy.value,
            }
        },
        onActive: ({translationX, translationY}) => {
            cx.value = context.value.x + translationX;
            cy.value = context.value.y + translationY;
        }
    })

    return (
        <GestureHandlerRootView>
            <Touchable.Canvas style={{flex: 1, backgroundColor: 'white'}}>
                <Touchable.Circle {...gestureHandler} cx={cx} cy={cy} r={radius} color={'blue'}></Touchable.Circle>
            </Touchable.Canvas>
        </GestureHandlerRootView>
  );
}
