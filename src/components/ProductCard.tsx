import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "Hot Wheel" | "Neon Frame";
  isCustomizable?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isCustomizable = false, 
  isNew = false, 
  isBestSeller = false 
}: ProductCardProps) => {
  return (
    <Card className="product-card card-automotive group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge variant="destructive" className="bg-neon-red text-background">
              New
            </Badge>
          )}
          {isBestSeller && (
            <Badge variant="secondary" className="bg-neon-yellow text-background">
              Best Seller
            </Badge>
          )}
          {isCustomizable && (
            <Badge variant="outline" className="border-primary text-primary">
              Customizable
            </Badge>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary" 
            className={`${
              category === "Neon Frame" 
                ? "bg-neon-blue/90 text-background" 
                : "bg-muted text-muted-foreground"
            }`}
          >
            {category}
          </Badge>
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link to={`/product/${id}`}>
            <Button variant="neon-outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
          </Link>
          <Button variant="neon" size="sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          
          {originalPrice && (
            <Badge variant="destructive" className="bg-neon-red text-background">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          variant="outline" 
          className="w-full hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};