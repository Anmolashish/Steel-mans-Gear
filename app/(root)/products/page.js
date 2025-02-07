import AboutPage1 from "@/app/aboutComponents/AboutPage1";
import ProductPage1 from "@/app/productComponents/ProductPage1";

export default function page() {
  return (
    <div className="products">
      <AboutPage1 name={"Products"} />
      <ProductPage1 />
    </div>
  );
}
