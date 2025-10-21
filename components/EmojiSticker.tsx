import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { ImageSourcePropType } from "react-native";

type Props = {
  stickerSource: ImageSourcePropType;
  imageSize?: number;
};

export default function EmojiSticker({ stickerSource, imageSize = 100 }: Props) {
  const scaleImage = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      if (scaleImage.value > 2) {
        scaleImage.value = withSpring(1);
      } else {
        scaleImage.value = withSpring(scaleImage.value * 2);
      }
    });

  const drag = Gesture.Pan()
    .onChange((event) => {
      translateX.value += event.changeX;
      translateY.value += event.changeY;
    });

  const composed = Gesture.Simultaneous(drag, doubleTap);

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scaleImage.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={{ position: "absolute", top: -350 }}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </Animated.View>
    </GestureDetector>
  );
}
