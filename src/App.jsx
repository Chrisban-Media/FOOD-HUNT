import Layout from "./components/layout";
import heroImg from "./assets/images/hero-image.png";
import chefImg from "./assets/images/chef-image.png";
import chef2 from "./assets/images/chef-2.png";

import googles from "./assets/images/google.png";
import social from "./assets/images/Socialmedia.png";

import Button from "./components/shared/button";
import { TransparentButton } from "./components/shared/button";

import { FoodCard } from "./components/shared/card";

// Food images
import egusi from "./assets/images/egusi.jpg";
import okro from "./assets/images/okro-soup.jpeg";
import jollof from "./assets/images/jollof.jpg";

function App() {
  return (
    <Layout>
      {/* hero section */}
      <section className="p-4 grid gap-4">
        {/* hero image */}
        <div>
          <img src={heroImg} alt="hero image" />
        </div>

        {/* hero content */}
        <div className="flex flex-col gap-4">
          <p className="text-xs bg-[var(--primary-color)]/10 p-2 w-max rounded-full">
            <i class="ri-heart-fill text-[var(--accent)] bg-[var(--primary-color)] rounded-full p-1 text-xs"></i>
            <span className="ml-1">People Trust Us</span>
          </p>

          <h1 className="text-5xl font-bold">
            We're <span className="text-[var(--primary-color)]">Serious</span>{" "}
            For <span className="text-[var(--primary-color)]">Food</span> &{" "}
            <span className="text-[var(--secondary-color)]">Delivery</span>
          </h1>

          <p className="text-justify">
            Best cooks and best delivery guys all at your service. Hot tasty
            food will reach you in 60 minutes.
          </p>

          {/* search */}
          <div className=""></div>

          {/* cta */}
          <div>
            <Button>Download App</Button>
          </div>
        </div>
      </section>

      {/* special offers */}
      <section className="p-4 text-center grid gap-4 max-w-5xl mx-auto">
        <h2 className="font-bold text-4xl">
          Today's <span className="text-[var(--primary-color)]">Special</span>{" "}
          Offers
        </h2>

        <p className="text-justify">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </p>

        {/* menu */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FoodCard
            title="Egusi"
            description="Premium delicious, and healthy egusi. Ericha amicha aka"
            rating="4.7"
            imageSrc={egusi}
          />
          <FoodCard
            title="Jollof Rice"
            description="Only Nigerians make the best jollof. Come and eat!"
            rating="3.4"
            imageSrc={jollof}
          />
          <FoodCard
            title="Okro"
            description="A delicious soup that goes well with all types of swallow like eba, fufu, or semo."
            imageSrc={okro}
          />
        </div>
      </section>

      {/* services */}
      <section className="p-4 grid gap-4">
        {/* chef image */}
        <div>
          <img className="w-1" src={chefImg} alt="chef" />
        </div>

        {/* services content */}
        <div className="gap-2.5">
          <h2 className="text-5xl font-bold mb-5">
            We are <span className="text-[var(--primary-color)]">more</span>{" "}
            than <span className="text-[var(--secondary-color)]">multiple</span>{" "}
            services
          </h2>

          <p className="mr-5 text-justify">
            This is a type of restaurant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes from the french meaning food.
          </p>

          {/* Services list */}
          <div className="mt-10 flex flex-col gap-3 justify-around">
            <p className="flex flex-row gap-2">
              <img src="src/assets/images/icon1.png" alt="icon" /> Online Order
            </p>
            <p className="flex flex-row gap-2">
              <img src="src/assets/images/house-icon.png" alt="icon" />{" "}
              Pre-Reservation
            </p>
            <p className="flex flex-row gap-2">
              <img src="src/assets/images/house-icon.png" alt="icon" /> Super
              Chef
            </p>
            <p className="flex flex-row gap-2">
              <img src="src/assets/images/time-icons.png" alt="icon" /> "24/7
              Service"
            </p>
            <p className="flex flex-row gap-2">
              <img src="src/assets/images/house-icon.png" alt="icon" />{" "}
              Oragonized Foodhut Place
            </p>
            <p className="flex flex-row gap-2">
              <img src="src/assets/images/house-icon.png" alt="icon" /> Clean
              Kitchen
            </p>
            <div className="mt-10">
              <Button>About Us</Button>
            </div>
          </div>
        </div>
        <div className="justify-center text-center gap-7  mt-15">
          <h2 className="text-4xl leading-[1.5] font-bold">
            <span className="text-4xl font-bold text-[var(--primary-color)]">
              Menu
            </span>{" "}
            That{" "}
            <span className="text-4xl font-bold text-[var(--secondary-color)]">
              Always
            </span>{" "}
            Make You Fall In Love
          </h2>
          <div
            className="flex
          flex-row gap-5 mt-10"
          >
            <Button>Ramen</Button>
            <TransparentButton>Breakfast</TransparentButton>
            <TransparentButton>Lunch</TransparentButton>
          </div>
        </div>
        <div className="p-4 text-center grid gap-4 max-w-5xl md:grid-cols-2 lg:grid-cols-3 ">
          <FoodCard
            title="Egusi"
            description="Premium delicious, and healthy egusi. Ericha amicha aka"
            rating="4.7"
            imageSrc={egusi}
          />
          <img src={chef2} alt="" />
        </div>

        <div className="justify-center text-left mx-5.5 gap-7  mt-auto">
          <h2 className="text-4xl leading-[1.5] font-bold">
            It's Now&nbsp;
            <span className="text-4xl font-bold text-[var(--primary-color)]">
              Menu Easy
            </span>{" "}
            to{" "}
            <span className="text-4xl font-bold text-[var(--secondary-color)]">
              Order
            </span>{" "}
            by Our Mobile{" "}
            <span className="text-4xl font-bold text-[var(--primary-color)]">
              App
            </span>
          </h2>
          <p className="mt-5 mb-10 text-justify">
            This is a type of restaurant which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes from the french meaning food.
          </p>
          <img src={googles} alt="google" />
        </div>

        <div className="justify-center text-left mx-5.5 gap-7  mt-20">
          <h3 className="text-2xl font-bold text-[var(--primary-color)]">
            Foodhut
          </h3>
          <p className="text-justify mt-5 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            in modi cupiditate voluptatibus{" "}
          </p>
          <img src={social} alt="" />
        </div>
      </section>
    </Layout>
  );
}

export default App;
