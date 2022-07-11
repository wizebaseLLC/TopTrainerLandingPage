import * as gradients from "../../../styles/constants";

const usePrimaryGradientProps = () => ({
  bgGradient: gradients.K_GRADIENT1,
  _hover: { bgGradient: gradients.K_GRADIENT1 },
  _active: { bgGradient: "none", bgColor: "brand.primary" },
});

export default usePrimaryGradientProps;
