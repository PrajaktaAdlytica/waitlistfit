import {Composition} from 'remotion';
// The same source is lazy-loaded by the homepage's Remotion Player.
// @ts-expect-error The composition is deliberately shared as JSX with Vite.
import {IntroFilm} from './IntroFilm';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="InsideTheBoard" component={IntroFilm} durationInFrames={240} fps={30} width={1920} height={1080} defaultProps={{embedded:false,target:null}} />
      <Composition id="InsideTheBoardMobile" component={IntroFilm} durationInFrames={240} fps={30} width={1080} height={1920} defaultProps={{embedded:false,target:null}} />
    </>
  );
};
