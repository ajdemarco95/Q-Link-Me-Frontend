import HomeHeader from "./components/home-page/HomeHeader";
import HomeHero from "./components/home-page/HomeHero";
import HomeFeatures from "./components/home-page/HomeFeatures";
import HomePricing from "./components/home-page/HomePricing";
import HomeFAQ from "./components/home-page/HomeFAQ";
import HomeFooter from "./components/home-page/HomeFooter";
import HomeMobileHeader from "./components/home-page/HomeMobileHeader";
export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeMobileHeader />
      <HomeHero />
      <HomeFeatures />
      <HomePricing />
      <HomeFAQ />
      <HomeFooter />
    </>
  );
}
