import Image from "next/image";
import HeroSlider from "./(home)/HeroSlider";
import Categories from "./(home)/Categories";
import Gallary from "./(home)/Gallary";

export default function Home() {
  return (
    <main>
      <HeroSlider></HeroSlider>
      <Categories></Categories>
      <Gallary></Gallary>
    </main>
  );
}
