import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Zap, Car } from "lucide-react";

export const Categories = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-glow">
          Shop by Category
        </h2>
        <p className="text-xl text-muted-foreground">
          Choose your preferred style of automotive art
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hot Wheel Frames */}
        <Card className="card-automotive group overflow-hidden relative min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background/90"></div>
          <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div className="text-center">
              <Car className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                Hot Wheel Art Frames
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Premium collectible frames featuring your favorite Hot Wheels cars. 
                Perfect for collectors and automotive enthusiasts.
              </p>
              
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Custom nameplate engraving
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Premium black or wood frames
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  100+ car models available
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Starting from $69.99
                </div>
              </div>
            </div>

            <Link to="/hot-wheels" className="w-full">
              <Button variant="neon" size="lg" className="w-full">
                Shop Hot Wheel Frames
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Neon Car Frames */}
        <Card className="card-automotive group overflow-hidden relative min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/90"></div>
          <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div className="text-center">
              <Zap className="w-16 h-16 mx-auto mb-4 text-neon-blue" />
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                Neon Car Frames
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Stunning LED-illuminated frames showcasing luxury sports cars. 
                Create an amazing ambiance in any room.
              </p>
              
              <div className="space-y-2 mb-6 text-left">
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  RGB LED lighting effects
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  Remote control included
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  Multiple color options
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-neon-blue rounded-full mr-3"></span>
                  Starting from $149.99
                </div>
              </div>
            </div>

            <Link to="/neon-frames" className="w-full">
              <Button variant="neon" size="lg" className="w-full neon-glow">
                Shop Neon Frames
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};