import CityTour from "@/components/CityTour";
import DesertTrip from "@/components/DesertTrips";
import SeaTrips from "@/components/SeaTrips";
import Travels from "@/components/travels";
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <div>
      <SeaTrips />
      <DesertTrip />
      <CityTour />
      <Travels />
      <Weather />
    </div>
  );
}
