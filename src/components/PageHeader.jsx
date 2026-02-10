import Button from "./common/Button";

export default function PageHeader() {
  return (
    <>
      <img src="/images/logo-small.svg" alt="" />
      <div className="page-toggler">
        <Button btnText={"Study Mode"} />
        <Button btnText={"All Cards"} />
      </div>
    </>
  );
}
