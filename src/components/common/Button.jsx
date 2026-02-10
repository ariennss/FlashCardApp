let buttonIcons = [
  { text: "Shuffle", path: "/images/icon-shuffle.svg" },
  { text: "Reset", path: "" },
  { text: "I Know This", path: "/images/icon-check.svg" },
  { text: "Reset Progress", path: "/images/icon-reset.svg" },
];

export default function Button({ btnText, hasIcon }) {
  let iconPath;
  if (hasIcon) {
    iconPath = buttonIcons.find((x) => x.text === btnText).path;
  }

  return (
    <>
      <button className="btn-style">
        {hasIcon && <img src={iconPath} />}
        <span>{btnText}</span>
      </button>
    </>
  );
}
