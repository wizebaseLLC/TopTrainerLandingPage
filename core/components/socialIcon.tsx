import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface Props {
  url: string;
  alt: string;
  iconType: SocialIconType;
}

export enum SocialIconType {
  TikTok = "/icons/socialMedia/tikTok.png",
  Instagram = "/icons/socialMedia/Instagram.png",
}

const SocialIcon = ({ alt, url, iconType }: Props) => {
  return (
    <Box as="a" href={url} target="_blank">
      <Image src={iconType} alt={alt} width={50} height={50} />
    </Box>
  );
};

export default SocialIcon;
