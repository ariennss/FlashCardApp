import Button from "./Button";

export default function Header() {
  return (
    <>
      <img src="/images/logo-small.svg" alt="" />
      <div>
        <Button btnText={"Study Mode"} />
        <Button btnText={"All Cards"} />
      </div>
    </>
  );
}
