export default function Fruits() {
  const fruits = [
    { name: 'Apple', price: 1.2, emoji: '🍎' },
    { name: 'Pear', price: 1.5, emoji: '🍐' },
    { name: 'Strawberry', price: 2.0, emoji: '🍓' },
    { name: 'Banana', price: 1.0, emoji: '🍌' },
  ];

  return (
    <ul>
      {fruits.map((fruit, key) => {
        var row = null;

        if (fruit.price > 1.5) {
          row = <li key={key}>too expensive</li>;
        } else {
          row = (
            <li key={key}>
              {fruit.name} (CHF {fruit.price}) {fruit.emoji}
            </li>
          );
        }

        return row;
      })}
    </ul>
  );
}
