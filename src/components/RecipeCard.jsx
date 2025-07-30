import { Box, Image, Text, Flex, Tag } from "@chakra-ui/react";

export default function RecipeCard({ recipe, onClick }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={onClick}
      cursor="pointer"
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        objectFit="cover"
        width="100%"
        height="200px"
      />
      <Box p={4}>
        <Text fontWeight="bold">{recipe.label}</Text>
        <Flex wrap="wrap" mt={2} gap={2}>
          {recipe.healthLabels.map((label) => (
            <Tag key={label}>{label}</Tag>
          ))}
        </Flex>
        <Text mt={2}>
          <strong>Meal:</strong> {recipe.mealType?.[0]}
        </Text>
        <Text>
          <strong>Dish:</strong> {recipe.dishType?.[0]}
        </Text>
        {recipe.cautions?.length > 0 && (
          <Text mt={2}>
            <strong>Cautions:</strong> {recipe.cautions.join(", ")}
          </Text>
        )}
      </Box>
    </Box>
  );
}
