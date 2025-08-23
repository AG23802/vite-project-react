import FruitRow from './FruitRow';

export default function FruitList({ fruits }) {
  return (
    <div className="flex flex-col h-[400px] overflow-y-auto border border-gray-300 rounded-lg">
      {fruits.map((fruit) => (
        <FruitRow key={fruit.id} fruit={fruit} />
      ))}
    </div>
  )
}
