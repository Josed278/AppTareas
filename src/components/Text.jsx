function Text() {
  return (
    <div
      className="text-nowrap bg-body-secondary border"
      style={{ width: "8rem" }}
    >
      This text should overflow the parent.
    </div>
  );
}

export default Text;
