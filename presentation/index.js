// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  kelly: require("../assets/kelly.jpg"),
  cover: require("../assets/cover.jpg"),
  layout: require("../assets/layout.jpg"),
  brain_1: require("../assets/brain_willpower.png"),
  brain_2: require("../assets/brain_willpower2.png"),
  cheesecake: require("../assets/cheesecake.jpg"),
  muscle: require("../assets/muscle.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "black"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="black">
            <Image src={images.kelly.replace("/", "")} margin="0px auto 40px" height="500px"/>
            <Image src={images.cover.replace("/", "")} margin="0px auto 40px" height="500px"/>
            <Heading size={1} fit caps lineHeight={1} textColor="orange">
              Келли Макгонигал, Сила воли. Как развить и укрепить.
            </Heading>
              <Text textSize="0.4em" margin="0px auto 40px" bold textColor="yellow">Лучше сразу скажи нет :)</Text>
          </Slide>


          <Slide transition={["zoom"]} bgImage={images.layout.replace("/", "")}>
            <Appear fid="1">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="black">1. Зачем нам сила воли?</Text>
            </Appear>
            <Appear fid="2">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="black">2. Как все устроено?</Text>
            </Appear>
            <Appear fid="3">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="black">3. Самоконтроль и импульсивная составляющая. Неосознанные выборы ':tramp'</Text>
            </Appear>
            <Appear fid="4">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="black">4. Тренировка воли</Text>
            </Appear>
            <Image src={images.brain_1.replace("/", "")} margin="0px auto 40px" height="200px"/>
            <Image src={images.brain_2.replace("/", "")} margin="0px auto 40px" height="200px"/>

          </Slide>


          <Slide transition={["zoom", "spin"]} bgImage={images.cheesecake.replace("/", "")}>
            <Appear fid="1">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="orange">1. Почему иногда легко сопротивляться чизкейку, а иногда нет</Text>
            </Appear>
            <Appear fid="2">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="black">2. Защитные рефлексы мозга</Text>
            </Appear>
            <Appear fid="3">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="black">3. pause-and-plan, fight-or-flight</Text>
            </Appear>
            <Appear fid="4">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="black">4. Реакция сердца и дыхания и зрачков на вкусняшку и угрозу</Text>
            </Appear>
            <Appear fid="4">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="white">5. Цена постоянного самоконтроля</Text>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "spin"]} bgImage={images.muscle.replace("/", "")}>
            <Appear fid="1">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="orange">1. Самоконтроль - мышца?</Text>
            </Appear>
            <Appear fid="2">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="orange">2. Почему самоконтроль ограничен? Сахарок</Text>
            </Appear>
            <Appear fid="3">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="orange">3. Энергетический кризис</Text>
            </Appear>
            <Appear fid="4">
              <Text textSize="1em" margin="0px auto 40px" bold textColor="orange">4. Простая тренировка:</Text>
            </Appear>
            <Appear fid="4">
              <Text textSize="0.75em" margin="0px auto 40px" bold textColor="white">-    I wont (отказаться от вредной привычки); </Text>
            </Appear>
            <Appear fid="5">
              <Text textSize="0.75em" margin="0px auto 40px" bold textColor="white">-    I will (делать что-то ежедневно); </Text>
            </Appear>
            <Appear fid="6">
              <Text textSize="0.75em" margin="0px auto 40px" bold textColor="white">-    самоконтроль (вести блог/дневник ежедневно) </Text>
            </Appear>

          </Slide>

          <Slide transition={["zoom", "spin"]} bgImage={images.muscle.replace("/", "")}>

          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
