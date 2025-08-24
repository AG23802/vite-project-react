export interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

export default function Search({ query, setQuery }: SearchProps) {

  return (
    <div>
      <input
        type="text"
        placeholder="Search for fruits"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}
