import { useMemo } from "react";
import Fuse from "fuse.js";
import type { InjuryData } from "@/types/injury";
import { useLanguageStore } from "@/stores/languageStore";

interface SearchResult {
  item: InjuryData;
  matches?: Array<{ key: string; value: string }>;
}

export function useSearch(query: string): SearchResult[] {
  const { injuries } = useLanguageStore();

  return useMemo(() => {
    if (!query || query.trim().length < 2) return [];

    const fuse = new Fuse<InjuryData>(injuries, {
      keys: [
        { name: "title", weight: 0.4 },
        { name: "keywords", weight: 0.3 },
        { name: "description", weight: 0.2 },
        { name: "steps", weight: 0.1 },
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
    });

    return fuse.search(query.trim()) as unknown as SearchResult[];
  }, [query, injuries]);
}
