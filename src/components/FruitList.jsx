import FruitRow from './FruitRow';

export default function FruitList({ fruitData, setFruitID }) {
  return fruitData.map((fruit) => (
    <FruitRow key={fruit.id} fruit={fruit} setFruitID={setFruitID} />
  ));
}
