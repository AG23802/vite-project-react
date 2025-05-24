export default function FruitItem({ fruitID }) {
  return (
    <div>
      <span>{fruitID ?? 'no fruit ID'}</span>
    </div>
  );
}
