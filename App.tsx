import {useWindowDimensions} from "react-native";
import Touchable, {useGestureHandler,} from "react-native-skia-gesture"
import {useSharedValue} from "react-native-reanimated";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const radius = 80;

export default function App() {

    const {width: windowWidth, height: windowHeight} = useWindowDimensions();

    const cx = useSharedValue(windowWidth / 2);
    const cy = useSharedValue(windowHeight / 2);

    const gestureHandler = useGestureHandler({
        onActive: ({translationX, translationY}) => {
            cx.value = translationX;
            cy.value = translationY;
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
