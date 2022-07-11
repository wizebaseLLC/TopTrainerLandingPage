import { Box, HStack, VStack, Image, Text, Flex } from "@chakra-ui/react";
import {
  MailChimpSignUp,
  SocialIcon,
  SocialIconType,
} from "../core/components";
// import Image from "next/image";

export const HomePage = () => {
  return (
    <HStack w="100vw">
      <Flex w="100%" h="100vh" align="center" justify="center">
        <VStack>
          <Image
            src="/images/Top-trainer-1.png"
            alt="Top Trainer"
            width={350}
            height={350}
          />
          <Box pt={12}>
            {/* <EmailTextField /> */}
            <MailChimpSignUp />
          </Box>

          <Box pt={12}>
            <Text fontWeight="bold" color="#fff">
              Follow us to learn more
            </Text>
          </Box>
          <HStack spacing={4} pt={6}>
            <SocialIcon
              alt="Instagram"
              url="https://www.instagram.com/ toptrainer_fitness/"
              iconType={SocialIconType.Instagram}
            />
            <SocialIcon
              alt="TikTok"
              url="https://www.instagram.com/toptrainer_fitness/"
              iconType={SocialIconType.TikTok}
            />
          </HStack>
        </VStack>
      </Flex>
      <Box
        w={{ base: 0, md: "100%" }}
        h="100vh"
        boxShadow="inset 30px 30px 90px rgba(0, 0, 0, 0.6)"
        backgroundImage="/images/rightSideContainer.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundPosition="center"
      />
    </HStack>
  );
};
