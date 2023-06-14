import Fruits360 from "./Fruits360";
import Suhail from "./Suhail";

export default function Products() {
  return (
    <div className="py-24 px-24">
      <h3 className="text-3xl font-bold">Products</h3>
      <p className="text-neutral-500 pt-5 w-72">
        With excellence in mind, our products solve complex industry challenges.
      </p>
      <Suhail />
      <Fruits360 />
    </div>
  );
}
