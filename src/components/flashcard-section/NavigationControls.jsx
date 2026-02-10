import Button from "../common/Button";

export default function NavigationControls() {
  return (
    <>
      <Button
        btnText={"Previous"}
        hasIcon={false}
        color={"yellow"}
        hasShadow={true}
      />
      <p>Card of 40</p>
      <Button btnText={"Next"} hasIcon={false} />
    </>
  );
}
