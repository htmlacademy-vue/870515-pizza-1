import sizes from "@/common/enums/sizes";
import sauces from "@/common/enums/sauces";
import filling from "@/common/enums/filling";
import dough from "@/common/enums/dough";

export const normalizeSize = (size) => ({
  ...size,
  code: size.multiplier ? sizes[size.multiplier] : "",
});

export const normalizeSauce = (sauce) => ({
  ...sauce,
  code: sauces[sauce.id],
});

export const normalizeFilling = (fillingItem) => ({
  ...fillingItem,
  code: filling[fillingItem.id],
});

export const normalizeDough = (doughItem) => ({
  ...doughItem,
  code: dough[doughItem.id],
});

export const calcPizzaPrice = ({ dough, sauce, ingredients, size }) => {
  let price = 0;

  if (dough) {
    price += dough.price;
  }

  if (sauce) {
    price += sauce.price;
  }

  if (Array.isArray(ingredients)) {
    ingredients.forEach((ingredient) => {
      price += ingredient.price;
    });
  }

  if (size) {
    price *= size.multiplier;
  }

  return price;
};
