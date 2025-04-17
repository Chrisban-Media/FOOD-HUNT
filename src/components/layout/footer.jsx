export function Footer() {
  return (
    <footer className="p-4 w-full max-w-6xl mx-auto">
      {/* here is the div containig the about us and the company */}
      <div className="ml-5 mr-7 flex justify-between align-center">
        {/* here is the about us */}
        <div className="gap-5 text-left align-center">
          <h3 className="text-2xl font-bold text-[var(--primary-color)]">
            About Us
          </h3>
          <p>About Us</p>
          <p>Our Service</p>
          <p>Contact</p>
          <p>Company</p>
        </div>
        {/* here is the company */}
        <div className="gap-5 flex-column text-left align-left">
          <h3 className="text-2xl font-bold text-[var(--primary-color)]">
            Company
          </h3>
          <p>Partnership</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>
      </div>

      <div className="mt-10 ml-5">
        <h3 className="text-2xl font-bold  mb-3 text-[var(--primary-color)]">
          Get in Touch
        </h3>
        <p className="mr-5 text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ipsa
          labore esse eum ipsum ea magnam iure pariatur!
        </p>
      </div>

      <p className="justify-center align-center flex mt-10">
        Copyright &copy; {new Date().getFullYear()} FoodHut
      </p>
    </footer>
  );
}
