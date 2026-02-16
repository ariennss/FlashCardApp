import styles from "./button.module.css";

let buttonTypes = [
    { text: "Shuffle", path: "/images/icon-shuffle.svg", class: "shuffle-btn" },
    { text: "Reset", path: "" },
    { text: "I Know This", path: "/images/icon-check.svg" },
    { text: "Reset Progress", path: "/images/icon-reset.svg" },
    { text: "Previous", path: "" },
    { text: "Next", path: "" },
    { text: "Study Mode", class: "studymode-btn" },
    { text: "All Cards", class: "allcards" },
];

export default function Button({ btnText }) {
    let buttonType = buttonTypes.find((x) => x.text === btnText);

    if (!buttonType) {
        return <>Missing component</>;
    }

    let iconPath;
    if (buttonType.path && buttonType.path != "") {
        iconPath = buttonType.path;
    }

    return (
        <>
            <button className={`${styles[buttonType.class]}`}>
                {iconPath && (
                    <img src={iconPath} className={styles["btn-icon"]} />
                )}
                <span>{btnText}</span>
            </button>
        </>
    );
}
