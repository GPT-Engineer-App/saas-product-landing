import { Box, Button, Container, Flex, Heading, Icon, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCheckCircle, FaCloud, FaLock, FaRocket, FaUserFriends } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Flex bgImage="https://images.unsplash.com/photo-1669295384050-a1d4357bd1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHx8fDE3MTQ2NjI5NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" bgRepeat="no-repeat" align="center" justify="center" h="100vh" color="white" direction="column" textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Revolutionize Your Workflow with Our SaaS
        </Heading>
        <Text fontSize="xl" mb={8}>
          The ultimate solution for managing your projects efficiently.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Flex>

      {/* Features Overview */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Core Features
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <FeatureCard icon={FaCloud} title="Cloud-Based" description="Access your data from anywhere in the world." />
          <FeatureCard icon={FaLock} title="Secure" description="Top-notch security measures to protect your data." />
          <FeatureCard icon={FaRocket} title="Fast" description="Quick processing and updates in real time." />
        </SimpleGrid>
      </Box>

      {/* Benefits Section */}
      <VStack bg="gray.100" py={20} spacing={4} align="start">
        <Heading as="h2" size="xl" textAlign="center">
          Why Choose Us?
        </Heading>
        <Text pl={8} fontSize="lg">
          <Icon as={FaCheckCircle} color="green.500" /> Seamless Integration
        </Text>
        <Text pl={8} fontSize="lg">
          <Icon as={FaCheckCircle} color="green.500" /> User-Friendly Interface
        </Text>
        <Text pl={8} fontSize="lg">
          <Icon as={FaCheckCircle} color="green.500" /> Excellent Customer Support
        </Text>
      </VStack>

      {/* Pricing Plans */}
      <Box py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Pricing Plans
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <PricingPlan planType="Basic" price="Free" features={["10 Projects", "5 GB Storage", "Community Support"]} />
          <PricingPlan planType="Pro" price="$9.99/month" features={["Unlimited Projects", "100 GB Storage", "Priority Support"]} />
          <PricingPlan planType="Enterprise" price="Contact Us" features={["Custom Solutions", "Dedicated Support", "Advanced Analytics"]} />
        </SimpleGrid>
      </Box>

      {/* Testimonials and Trust Signals */}
      <Box py={20} bg="gray.50">
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          What Our Users Say
        </Heading>
        <Text textAlign="center" fontSize="lg" mb={4}>
          "This software has transformed the way our team works. Highly recommended!"
        </Text>
        <Text textAlign="center" fontSize="lg">
          - Jane Doe, CEO of Innovate Ltd.
        </Text>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={10}>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} justify="center">
          <Text>About Us</Text>
          <Text>Contact</Text>
          <Text>Privacy Policy</Text>
        </Stack>
      </Box>

      {/* Call-to-Action Reiteration */}
      <Flex bg="teal.500" color="white" py={10} align="center" justify="center" direction="column" textAlign="center">
        <Heading as="h2" size="lg" mb={4}>
          Ready to Get Started?
        </Heading>
        <Button colorScheme="teal" size="lg">
          Sign Up Now
        </Button>
      </Flex>
    </Container>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <VStack bg="white" p={8} borderRadius="md" boxShadow="md" align="start">
    <Icon as={icon} w={10} h={10} color="teal.500" mb={4} />
    <Text fontWeight="bold" fontSize="lg">
      {title}
    </Text>
    <Text>{description}</Text>
  </VStack>
);

const PricingPlan = ({ planType, price, features }) => (
  <VStack bg="white" p={8} borderRadius="md" boxShadow="md" align="start">
    <Text fontWeight="bold" fontSize="xl">
      {planType}
    </Text>
    <Text fontSize="2xl" color="teal.500">
      {price}
    </Text>
    <Stack spacing={2}>
      {features.map((feature, index) => (
        <Text key={index}>
          <Icon as={FaCheckCircle} color="green.500" /> {feature}
        </Text>
      ))}
    </Stack>
    <Button mt={4} colorScheme="teal" size="md">
      Choose Plan
    </Button>
  </VStack>
);

export default Index;
