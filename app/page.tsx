import Image from "next/image";
import HeroSlider from "./(home)/HeroSlider";
import Categories from "./(home)/Categories";

export default function Home() {
  return (
    <main>
      <HeroSlider></HeroSlider>
      <Categories></Categories>
    </main>
  );
}
