import Button from "./button";
import defaultImg from "../../assets/images/egusi.jpg";

export function FoodCard({
  title = "Kebab",
  description = "Lorem ipsum is simply dummy text of the printing and typesetting industry",
  rating = "4.5",
  imageSrc = defaultImg,
  userImg = [
    `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`,
    `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 100) + 1
    }.jpg`,
    `https://randomuser.me/api/portraits/women/${
      Math.floor(Math.random() * 100) + 2
    }.jpg`,
  ],
}) {
  return (
    <div className="mt-20">
      <div className="bg-linear-to-t from-[#f547474b] to-[#f5474710] p-4 rounded-3xl flex flex-col gap-8 h-full min-h-96">
        {/* image & price */}
        <div>
          {/* image */}
          <div className="w-48 h-48 -mt-20 mx-auto bg-gray-400 rounded-full overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* reviews */}
        <div className="flex justify-center items-center gap-4">
          {/* review images */}
          <div className="flex items-center">
            <div className="h-8 w-8 bg-yellow-400 rounded-full overflow-hidden">
              <img
                src={userImg[0]}
                alt="Person"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-8 w-8 bg-red-400 rounded-full overflow-hidden -ml-4">
              <img
                src={userImg[1]}
                alt="Person"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-8 w-8 bg-white rounded-full overflow-hidden -ml-4">
              <img
                src={userImg[2]}
                alt="Person"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* review rating */}
          <div className="flex gap-2 items-center">
            <i class="ri-star-fill text-[#FFBE1A]"></i>

            <span>({rating})</span>
          </div>
        </div>

        {/* food title and description */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-[var(--primary-color)]">
            {title}
          </h3>
          <p className="w-4/5 mx-auto">{description}</p>
        </div>
      </div>

      {/* order now button */}
      <div className="-mt-5">
        <Button>Order Now</Button>
      </div>
    </div>
  );
}
