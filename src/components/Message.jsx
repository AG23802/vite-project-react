export default function Message({ count, setCount }) {
  function buttonClicked(message, event) {
    console.log(message, event);

    setCount((count) => count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={(e) => buttonClicked('hey', e)}>Message</button>
    </>
  );
}
