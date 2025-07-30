// --- pages/RecipeListPage.jsx ---
import { useState } from "react";
import { Input, SimpleGrid, Box } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard.jsx";

export default function RecipeListPage({ data, onSelect }) {
  const [search, setSearch] = useState("");

  const filtered = data.filter(({ recipe }) => {
    const nameMatch = recipe.label.toLowerCase().includes(search.toLowerCase());
    const healthMatch = recipe.healthLabels.some((label) =>
      label.toLowerCase().includes(search.toLowerCase())
    );
    return nameMatch || healthMatch;
  });

  return (
    <Box>
      <Input
        placeholder="Search by name or health label"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={6}
      />
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {filtered.map(({ recipe }) => (
          <RecipeCard
            key={recipe.uri}
            recipe={recipe}
            onClick={() => onSelect(recipe)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
