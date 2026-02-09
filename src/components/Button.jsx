let buttonIcons = [
  { text: "Shuffle", path: "/images/icon-shuffle.svg" },
  { text: "Reset", path: "" },
];

export default function Button({ btnText, hasIcon }) {
  let iconPath;
  if (hasIcon) {
    iconPath = buttonIcons.find((x) => x.text === btnText).path;
  }

  return (
    <>
      <button>
        {hasIcon && <img src={iconPath} />}
        <span>{btnText}</span>
      </button>
    </>
  );
}
