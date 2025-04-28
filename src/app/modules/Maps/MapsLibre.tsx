import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface Props {
  width?: any;
  height?: any;
}

function MapsLibre({ width, height }: Props) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // Free OSM style
      center: [118.0, -2.5], // Indonesia
      zoom: 4.5,
    });

    // Tambahkan atribusi OSM (wajib untuk penggunaan gratis)
    map.current.addControl(
      new maplibregl.AttributionControl({
        customAttribution:
          '',
      })
    );

    return () => {
      if (map.current) map.current.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ width: width, height: height }} />;
}

export default MapsLibre;
