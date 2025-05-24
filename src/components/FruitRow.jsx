export default function FruitRow({ fruit, setFruitID }) {
  return (
    <div>
      <span>{fruit.name}</span>
      <button onClick={() => setFruitID(fruit.id)}>View Fruit</button>
    </div>
  );
}
