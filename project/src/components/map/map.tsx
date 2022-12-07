import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {Icon, LayerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City, Location, Offer} from '../../types/offer';
import {ICON_SIZE, URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';


type MapProps = {
  city: City;
  points: Offer[];
  selectedPoint: Location | undefined;
  mapHeight?: number;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [ICON_SIZE, ICON_SIZE],
  iconAnchor: [ICON_SIZE / 2, ICON_SIZE]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [ICON_SIZE, ICON_SIZE],
  iconAnchor: [ICON_SIZE / 2, ICON_SIZE]
});

function Map({city, points, selectedPoint, mapHeight}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const mapHeightStyle = mapHeight ? mapHeight.toString().concat('px') : 'auto';

  useEffect(() => {

    const markers = new LayerGroup();
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.location === selectedPoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markers);
      });

      markers.addTo(map);
    }

    return() => {
      map?.removeLayer(markers);
    };
  }, [map, points, selectedPoint, city]);

  return <section className="cities__map map" ref={mapRef} style={{height: mapHeightStyle}}></section>;
}

export default Map;
