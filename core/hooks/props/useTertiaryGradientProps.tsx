import gradients from "../../../styles/constants";

const useTertiaryGradientProps = () => ({
  bgGradient: gradients.K_GRADIENT3,
  _hover: { bgGradient: gradients.K_GRADIENT3 },
  _active: { bgGradient: gradients.K_GRADIENT4 },
});

export default useTertiaryGradientProps;
