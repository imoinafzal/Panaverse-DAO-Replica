import CoreTracks from "@/components/widgets/CoreTracks";
import Hero from "@/components/widgets/Hero";
import Outcome from "@/components/widgets/Outcome";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreTracks />
      <SpecializedTracks />
      <Outcome />
    </main>
  )
}
