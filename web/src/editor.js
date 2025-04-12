import * as monaco from "monaco-editor";

const DEFAULT_CODE = `# player.rb
class Player
  def play_turn(warrior)
    # add your code here
  end
end

`;

const THEMES = {
  light: "vs-light",
  dark: "hc-black",
};

export const init = (target, opts) => {
  const theme = window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return monaco.editor.create(target, {
    theme: THEMES[theme],
    value: DEFAULT_CODE,
    language: "ruby",
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
    ...opts,
  });
};
