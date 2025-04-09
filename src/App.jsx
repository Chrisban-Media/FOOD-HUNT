import Layout from "./components/layout";
import heroImg from "./assets/images/hero-image.png";
import chefImg from "./assets/images/chef-image.png";
import Button from "./components/shared/button";

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

          <p>
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
      <section className="p-4 text-center grid gap-4">
        <h2 className="font-bold text-4xl">
          Today's <span className="text-[var(--primary-color)]">Special</span>{" "}
          Offers
        </h2>

        <p>
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </p>

        {/* menu */}
        <div></div>
      </section>

      {/* services */}
      <section className="p-4 grid gap-4">
        {/* chef image */}
        <div>
          <img src={chefImg} alt="chef" />
        </div>

        {/* services content */}
        <div>
          <h2>We are more than multiple services</h2>

          <p>This is a type of restaurant</p>
        </div>
      </section>
    </Layout>
  );
}

export default App;
