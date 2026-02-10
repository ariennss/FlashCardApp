import "./common.css";

let buttonIcons = [
  { text: "Shuffle", path: "/images/icon-shuffle.svg" },
  { text: "Reset", path: "" },
  { text: "I Know This", path: "/images/icon-check.svg" },
  { text: "Reset Progress", path: "/images/icon-reset.svg" },
];

export default function Button({ btnText, hasIcon, color, hasShadow }) {
  let iconPath;
  if (hasIcon) {
    let icon = buttonIcons.find((x) => x.text === btnText);
    iconPath = icon ? icon.path : "";
  }

  let className = `btn-style ${color} ${hasShadow ? "btn-shadow" : ""}`;

  return (
    <>
      <button className={className}>
        {hasIcon && <img src={iconPath} />}
        <span>{btnText}</span>
      </button>
    </>
  );
}
