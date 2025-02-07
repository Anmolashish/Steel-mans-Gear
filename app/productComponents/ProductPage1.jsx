import ProductCard from "../components/ProductCard";

export default function ProductPage1() {
  const data = [
    {
      id: 1,
      name: "Involute Gear Hobs",
      description:
        " Involute Gear Hobs for generating gears of maximum accuracy, manufactured in finishing, pre-shaving with or without protuberance and semi topping profiles. ",
      image: "https://steelmansgears.com/imgs/shank_type_shaper_cutters.jpg",
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
    {
      id: 5,
      name: "Inserted Blade Gear Hobs ",
      description:
        " Inserted Blade Gear Hobs are manufactured in the range 20 to 32 module having blades of HSS (M-2 or M-35) materials and body made of carton steel. ",
      image: "https://steelmansgears.com/imgs/inserted_blade_gear_hobs.jpg",
      review: 12,
    },
  ];

  return (
    <div className="product-page-1">
      <div className="top-text">
        <div className="product-page-heading">All products</div>
        <small className="product-page-subline">
          Here's the list for the all the category available int the Steel's man
          gear
        </small>
      </div>

      <div className="products-category">
        {data.map((element) => {
          return (
            <ProductCard
              key={element.id}
              name={element.name}
              description={element.description}
              review={element.review}
              image={element.image}
            />
          );
        })}
      </div>
    </div>
  );
}
