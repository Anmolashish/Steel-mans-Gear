"use client";
import { createContext } from "react";

const Products = createContext();

export function ProductsData({ children }) {
  const data = [
    {
      id: 1,
      name: "Gear hobs",
      slug: "gear-hobs",
      items: [
        {
          id: 1,
          name: "Involute Gear Hobs",
          description:
            " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          review: 4,
        },

        {
          id: 2,
          name: "Chamfer Hobs ",
          description:
            " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          review: 1,
        },

        {
          id: 3,
          name: "Sharper Cutters ",
          description:
            " Sharper cutters is used to cut internal gears of small diameter and spline holes. They can also be designed for external gears depending on the job. ",
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          review: 3,
        },

        {
          id: 4,
          name: "Inserted Blade Gear Hobs ",
          description:
            " Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carton steel. ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
      ],
      description: "",
    },
    {
      id: 2,
      name: "Gear cutters",
      slug: "gear-cutters",
      items: [
        {
          id: 11,
          name: "Involute Gear Hobs",
          description:
            " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          review: 4,
        },

        {
          id: 12,
          name: "Chamfer Hobs ",
          description:
            " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          review: 1,
        },

        {
          id: 13,
          name: "Sharper Cutters ",
          description:
            " Sharper cutters is used to cut internal gears of small diameter and spline holes. They can also be designed for external gears depending on the job. ",
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          review: 3,
        },

        {
          id: 14,
          name: "Inserted Blade Gear Hobs ",
          description:
            " Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carton steel. ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
      ],
      description: "",
    },
    {
      id: 3,
      name: "Spiral bevel cutters",
      slug: "spiral-bevel-cutters",
      items: [
        {
          id: 21,
          name: "Involute Gear Hobs",
          description:
            " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          review: 4,
        },

        {
          id: 22,
          name: "Chamfer Hobs ",
          description:
            " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          review: 1,
        },

        {
          id: 23,
          name: "Sharper Cutters ",
          description:
            " Sharper cutters is used to cut internal gears of small diameter and spline holes. They can also be designed for external gears depending on the job. ",
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          review: 3,
        },

        {
          id: 24,
          name: "Inserted Blade Gear Hobs ",
          description:
            " Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carton steel. ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
      ],
      description: "",
    },
    {
      id: 4,
      name: "Straight bevel cutters",
      slug: "straight-bevel-cutters",
      items: [
        {
          id: 31,
          name: "Involute Gear Hobs",
          description:
            " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
          image:
            "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
          review: 4,
        },

        {
          id: 32,
          name: "Chamfer Hobs ",
          description:
            " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
          image: "https://steelmansgears.com/imgs/chamfer_hobs.jpg",
          review: 1,
        },

        {
          id: 33,
          name: "Sharper Cutters ",
          description:
            " Sharper cutters is used to cut internal gears of small diameter and spline holes. They can also be designed for external gears depending on the job. ",
          image: "https://steelmansgears.com/imgs/involute-gear-hobs-big.jpg",
          review: 3,
        },

        {
          id: 34,
          name: "Inserted Blade Gear Hobs ",
          description:
            " Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carton steel. ",
          image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
          review: 12,
        },
      ],
      description: "",
    },
  ];

  return <Products.Provider value={{ data }}>{children}</Products.Provider>;
}

export default Products;
