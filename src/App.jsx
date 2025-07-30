import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { data } from "./utils/data.js";
import RecipeListPage from "./pages/RecipeListPage.jsx";
import RecipeDetailPage from "./pages/RecipeDetailPage.jsx";

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <Box p={4} maxW="1200px" mx="auto">
      <Heading textAlign="center" mb={6}>
        Winc Recipe Checker
      </Heading>
      {selectedRecipe ? (
        <RecipeDetailPage
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <RecipeListPage data={data.hits} onSelect={setSelectedRecipe} />
      )}
    </Box>
  );
}
