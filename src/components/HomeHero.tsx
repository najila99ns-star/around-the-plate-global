import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomeHero = () => {
  useEffect(() => {
    // Load globe.gl library dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/globe.gl@2.32.0/dist/globe.gl.min.js';
    script.async = true;
    script.onload = initGlobe;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initGlobe = () => {
    const globeElem = document.getElementById("globeContainer");
    if (!globeElem || !(window as any).Globe) return;

    const countrySpots = [
      {
        name: "Morocco – Tagine",
        lat: 31.7917,
        lng: -7.0926,
        color: "#E89A61",
        url: "/product/morocco-tagine"
      },
      {
        name: "Nigeria – Jollof Rice",
        lat: 9.0820,
        lng: 8.6753,
        color: "#ECD677",
        url: "/product/nigeria-jollof"
      },
      {
        name: "Japan – Ramen",
        lat: 36.2048,
        lng: 138.2529,
        color: "#ABC4F2",
        url: "/product/japan-ramen"
      }
    ];

    const worldGlobe = (window as any).Globe()
      (globeElem)
      .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-dark.jpg")
      .bumpImageUrl("https://unpkg.com/three-globe/example/img/earth-topology.png")
      .backgroundColor("rgba(0,0,0,0)")
      .pointOfView({ lat: 20, lng: 0, altitude: 2.5 })
      .labelsData(countrySpots)
      .labelLat((d: any) => d.lat)
      .labelLng((d: any) => d.lng)
      .labelText((d: any) => d.name)
      .labelSize(1.1)
      .labelDotRadius(0.6)
      .labelColor((d: any) => d.color)
      .labelResolution(4)
      .onLabelClick((d: any) => {
        if (d.url) window.location.href = d.url;
      });

    worldGlobe.controls().autoRotate = true;
    worldGlobe.controls().autoRotateSpeed = 0.6;

    const onResize = () => {
      const { clientWidth } = globeElem;
      globeElem.style.height = (clientWidth * 0.55) + "px";
    };
    window.addEventListener("resize", onResize);
    onResize();
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-heading uppercase leading-tight text-foreground">
              Travel the World Through Taste
            </h1>
            <p className="text-xl font-body text-muted-foreground">
              Explore authentic recipe boxes from around the globe, curated for ambitious home chefs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary-dark hover:bg-primary text-white">
                Explore the Globe
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/catalog">View All Boxes</Link>
              </Button>
            </div>
            <p className="text-sm font-body text-muted-foreground italic">
              Spin the globe and click a highlighted country to start your culinary journey.
            </p>
          </div>
          
          <div className="relative">
            <div 
              id="globeContainer" 
              className="w-full rounded-2xl overflow-hidden"
              style={{ height: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
