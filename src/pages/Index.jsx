import { Container, Text, VStack, Box, Heading, Image, Button, SimpleGrid } from "@chakra-ui/react";

const dogs = [
  {
    name: "Golden Retriever",
    description: "Friendly, Intelligent, Devoted",
    image: "/images/golden-retriever.jpg",
  },
  {
    name: "Labrador Retriever",
    description: "Outgoing, Even Tempered, Gentle",
    image: "/images/labrador-retriever.jpg",
  },
  {
    name: "German Shepherd",
    description: "Confident, Courageous, Smart",
    image: "/images/german-shepherd.jpg",
  },
];

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to Dog Haven
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Find your perfect furry friend from our selection of adorable dogs.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} mt={10}>
          {dogs.map((dog, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} textAlign="center">
              <Image src={dog.image} alt={dog.name} boxSize="200px" objectFit="cover" mx="auto" mb={4} />
              <Heading as="h3" size="lg" mb={2}>
                {dog.name}
              </Heading>
              <Text mb={4}>{dog.description}</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;