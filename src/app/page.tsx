import Category from "../components/CategoryCard/Category";
import Headline from "../components/ListCard/Headline";
import Logo from "../components/LogoCloud/Logo";
import ListOrder from "../components/OrderCard/ListOrder";
import State from "../components/State-sections/State";
import Team from "../components/Team-sections/Team";
import Testimonials from "../components/Testimonials-sections/Testimonials";
import Book from "../components/Booking/Book";
import Hero from "../components/Hero-Sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Headline />
      <ListOrder />
      <Category />
      <State />
      <Team />
      <Testimonials />
      <Logo />
      <Book />
    </>
  );
}
