import { BlurFilter } from 'pixi.js';
import { Container, Sprite, Text } from '@pixi/react';
import { useMemo } from 'react';

const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(4), []);
  return (
    <Container x={400} y={330}>
      <Sprite
        image="https://pixijs.io/pixi-react/img/bunny.png"
        x={0}
        y={0}
        anchor={{ x: 0.5, y: 0.5 }}
      />
      <Text text="Hello World" anchor={{ x: 0.5, y: 0.5 }} filters={[blurFilter]} />
    </Container>
  );
};
export default App
