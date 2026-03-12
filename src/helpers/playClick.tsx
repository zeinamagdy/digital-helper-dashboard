import mouseClick from "../assets/sounds/mouse-click.mp3";
export const playClick = () => {
  const audio = new Audio(mouseClick);
  audio.volume = 0.4;
  audio
    .play()
    .catch((e) =>
      console.log("Audio blocked until user interacts with page" + e),
    );
};
