import Hero from "./home/page"
import Roller3D from "./{Compoents}/Roller3D";

export default function Home() {
  return (
    <div className="w-full h-full flex-1 ">
      <Hero />
      <Roller3D />
    </div>
  );
}
