import type { Fruit } from '../types/Fruit.js';
import FruitRow from './FruitRow.js';

export interface FruitListProps {
  fruits: Fruit[];
}

export default function FruitList({ fruits } : FruitListProps) {
  return (
    <div className="flex flex-col h-[400px] overflow-y-auto border border-gray-300 rounded-lg">
      {fruits.map((fruit) => (
        <FruitRow key={fruit.id} fruit={fruit} />
      ))}
    </div>
  )
}
