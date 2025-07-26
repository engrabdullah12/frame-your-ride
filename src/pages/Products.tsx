import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";
import hotWheelFrame from "@/assets/hot-wheel-frame.jpg";
import neonCarFrame from "@/assets/neon-car-frame.jpg";
import chargerFrame from "@/assets/charger-frame.jpg";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");

  // Mock product data
  const allProducts = [
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
    {
      id: "4",
      name: "Lexus LC 500 Neon Frame",
      price: 179.99,
      image: neonCarFrame,
      category: "Neon Frame" as const,
    },
    {
      id: "5",
      name: "Mercedes-AMG GT Hot Wheel Frame",
      price: 94.99,
      image: hotWheelFrame,
      category: "Hot Wheel" as const,
      isCustomizable: true,
    },
    {
      id: "6",
      name: "Honda Civic Neon Car Frame",
      price: 139.99,
      image: neonCarFrame,
      category: "Neon Frame" as const,
    },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPriceRange = 
      priceRange === "all" ||
      (priceRange === "under-100" && product.price < 100) ||
      (priceRange === "100-150" && product.price >= 100 && product.price <= 150) ||
      (priceRange === "over-150" && product.price > 150);
    
    return matchesSearch && matchesCategory && matchesPriceRange;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("featured");
    setPriceRange("all");
  };

  const activeFiltersCount = [
    searchQuery,
    selectedCategory !== "all" ? selectedCategory : null,
    priceRange !== "all" ? priceRange : null
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-glow mb-4">Our Collection</h1>
          <p className="text-xl text-muted-foreground">
            Discover premium automotive art frames for every car enthusiast
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card p-6 rounded-lg mb-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Hot Wheel">Hot Wheel Frames</SelectItem>
                <SelectItem value="Neon Frame">Neon Car Frames</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Range */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-100">Under $100</SelectItem>
                <SelectItem value="100-150">$100 - $150</SelectItem>
                <SelectItem value="over-150">Over $150</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Active filters:</span>
              
              {searchQuery && (
                <Badge variant="secondary">
                  Search: {searchQuery}
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => setSearchQuery("")}
                  />
                </Badge>
              )}
              
              {selectedCategory !== "all" && (
                <Badge variant="secondary">
                  Category: {selectedCategory}
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => setSelectedCategory("all")}
                  />
                </Badge>
              )}
              
              {priceRange !== "all" && (
                <Badge variant="secondary">
                  Price: {priceRange}
                  <X 
                    className="w-3 h-3 ml-1 cursor-pointer" 
                    onClick={() => setPriceRange("all")}
                  />
                </Badge>
              )}

              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {sortedProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse our featured products.
            </p>
            <Button variant="neon" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}