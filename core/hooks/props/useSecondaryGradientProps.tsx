import * as gradients from "../../../styles/constants";

const useSecondaryGradientProps = () => ({
  bgGradient: gradients.K_GRADIENT2,
  _hover: { bgGradient: gradients.K_GRADIENT2 },
  _active: { bgGradient: "none", bgColor: "brand.secondary" },
});

export default useSecondaryGradientProps;
