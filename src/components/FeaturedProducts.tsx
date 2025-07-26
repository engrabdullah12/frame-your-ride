import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hotWheelFrame from "@/assets/hot-wheel-frame.jpg";
import neonCarFrame from "@/assets/neon-car-frame.jpg";
import chargerFrame from "@/assets/charger-frame.jpg";

export const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Dodge Charger Hot Wheel Art Frame",
      price: 89.99,
      originalPrice: 129.99,
      image: chargerFrame,
      category: "Hot Wheel" as const,
      isCustomizable: true,
      isBestSeller: true,
    },
    {
      id: "2", 
      name: "McLaren Neon LED Car Frame",
      price: 159.99,
      image: neonCarFrame,
      category: "Neon Frame" as const,
      isNew: true,
    },
    {
      id: "3",
      name: "Classic Hot Wheel Collector Frame",
      price: 79.99,
      image: hotWheelFrame,
      category: "Hot Wheel" as const,
      isCustomizable: true,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-glow">
          Featured Collection
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our most popular automotive art pieces, crafted for true car enthusiasts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="text-center">
        <Link to="/products">
          <Button variant="neon" size="lg">
            View All Products
          </Button>
        </Link>
      </div>
    </section>
  );
};