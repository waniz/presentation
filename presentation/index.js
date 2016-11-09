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
  city: require("../assets/city.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  kelly: require("../assets/kelly.jpg"),
  cover: require("../assets/cover.jpg"),
  layout: require("../assets/layout.jpg"),
  brain_1: require("../assets/brain_willpower.png"),
  brain_2: require("../assets/brain_willpower2.png"),
  cheesecake: require("../assets/cheesecake.jpg")
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


          <Slide transition={["zoom"]} bgImage={images.cheesecake.replace("/", "")}>
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

          <Slide transition={["zoom"]} bgImage={images.cheesecake.replace("/", "")}>

          </Slide>










          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
