import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Stack,
  Badge,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

export default function ({ recipe, onBack }) {
  return (
    <Box p={6} maxW="7xl" mx="auto">
      <Button mb={4} onClick={onBack}>
        ← Back to Recipes
      </Button>

      <Image
        src={recipe.image}
        alt={recipe.label}
        borderRadius="md"
        mb={6}
        maxH="300px"
        objectFit="cover"
        width="100%"
      />

      <SimpleGrid columns={[1, null, 2]} spacing={10} mb={8}>
        {/* Left Column */}
        <Box>
          <Text
            fontSize="sm"
            fontWeight="bold"
            mb={1}
            textTransform="uppercase"
            color="gray.600"
          >
            {recipe.mealType.join(", ").toUpperCase()}
          </Text>

          <Heading as="h2" size="md" fontWeight="bold" mb={3}>
            {recipe.label}
          </Heading>

          <Text mb={1}>
            <b>Total Cooking Time:</b> {recipe.totalTime || "N/A"} minutes
          </Text>
          <Text mb={4}>
            <b>Servings:</b> {recipe.yield || "N/A"}
          </Text>

          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Ingredients:
          </Text>
          <Stack spacing={1}>
            {recipe.ingredientLines.map((line, idx) => (
              <Text key={idx}>{line}</Text>
            ))}
          </Stack>
        </Box>

        {/* Right Column */}
        <Box>
          <Heading size="md" mb={4}>
            Health Labels
          </Heading>

          <Flex wrap="wrap" gap={2} mb={6}>
            {recipe.healthLabels.map((label, idx) => (
              <Badge
                key={idx}
                colorScheme="purple"
                textTransform="uppercase"
                fontWeight="bold"
                px={2}
                py={1}
                borderRadius="md"
              >
                {label}
              </Badge>
            ))}
          </Flex>

          <Text
            fontWeight="bold"
            fontSize="lg"
            mb={2}
            textTransform="uppercase"
            color="green.600"
          >
            Diet
          </Text>
          <Flex wrap="wrap" gap={2} mb={6}>
            {recipe.dietLabels.length > 0 ? (
              recipe.dietLabels.map((diet, idx) => (
                <Badge
                  key={idx}
                  colorScheme="green"
                  textTransform="uppercase"
                  fontWeight="bold"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {diet}
                </Badge>
              ))
            ) : (
              <Text>No diet labels</Text>
            )}
          </Flex>

          <Text
            fontWeight="bold"
            fontSize="lg"
            mb={2}
            textTransform="uppercase"
            color="red.600"
          >
            Cautions
          </Text>
          <Flex wrap="wrap" gap={2} mb={6}>
            {recipe.cautions.length > 0 ? (
              recipe.cautions.map((caution, idx) => (
                <Badge
                  key={idx}
                  colorScheme="red"
                  textTransform="uppercase"
                  fontWeight="bold"
                  px={2}
                  py={1}
                  borderRadius="md"
                >
                  {caution}
                </Badge>
              ))
            ) : (
              <Text>No cautions</Text>
            )}
          </Flex>
        </Box>
      </SimpleGrid>

      {/* Nutritional Info */}
      <Heading size="md" mb={4}>
        Nutritional Info (Total)
      </Heading>
      <SimpleGrid columns={[2, 3]} spacing={4}>
        {[
          { label: "Energy (kcal)", key: "ENERC_KCAL" },
          { label: "Protein (g)", key: "PROCNT" },
          { label: "Fat (g)", key: "FAT" },
          { label: "Carbs (g)", key: "CHOCDF" },
          { label: "Cholesterol (mg)", key: "CHOLE" },
          { label: "Sodium (mg)", key: "NA" },
        ].map(({ label, key }) => {
          const nutrient = recipe.totalNutrients[key];
          return (
            <Box
              key={key}
              borderWidth="1px"
              borderRadius="md"
              p={3}
              textAlign="center"
            >
              <Text fontWeight="bold">{label}</Text>
              <Text>{nutrient ? nutrient.quantity.toFixed(2) : "N/A"}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
