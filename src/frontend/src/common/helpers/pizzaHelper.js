import sizes from "@/common/enums/sizes";
import sauces from "@/common/enums/sauces";
import filling from "@/common/enums/filling";
import dough from "@/common/enums/dough";

export const normalizeSize = (size) => ({
  ...size,
  code: size.multiplier ? sizes[size.multiplier] : "",
});

export const normalizeSauce = (souse) => ({
  ...souse,
  code: sauces[souse.id],
});

export const normalizeFilling = (fillingItem) => ({
  ...fillingItem,
  code: filling[fillingItem.id],
});

export const normalizeDough = (doughItem) => ({
  ...doughItem,
  code: dough[doughItem.id],
});
