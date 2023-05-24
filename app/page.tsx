import Button from "@components/elements/button/Button";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default async function page() {
  return (
    <div className="p-5 max-w-full flex-1">
      <div className="bg-white md:flex-row flex-col p-4 rounded shadow flex gap-5">
        <div className="min-w-[10em] w-[10em] h-[10em] rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/9113740?s=48&v=4"
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <div className="text-2xl font-bold capitalize">Tasty Resturant</div>
          <div className="text-zinc-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            veniam distinctio repellat quibusdam earum ducimus cupiditate nihil
            voluptate tempore quam?
          </div>

          <div className="flex gap-4 mt-5">
            {/* <div className="w-10 h-10"></div> */}
            {[
              {
                icon: <AiFillInstagram size={22} />,
                link: "https://instagram.com",
              },
              {
                icon: <AiFillFacebook size={22} />,
                link: "https://facebook.com",
              },
              {
                icon: <AiFillTwitterCircle size={22} />,
                link: "https://twitter.com",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center"
              >
                {item.icon}
              </div>
            ))}
          </div>

          {/* other info */}
          {[
            {
              title: "Address :",
              value: "123, Lorem ipsum",
            },
            {
              title: "Phone :",
              value: "+91 1234567890",
            },
            {
              title: "Email :",
              value: "example@gamil.com",
            },
          ].map((item, index) => (
            <div key={index} className="flex text-sm gap-2 mt-2">
              <div className="text-zinc-400">{item.title}</div>
              <div className="text-zinc-500">{item.value}</div>
            </div>
          ))}

          <Button bg={"zinc"} className="mt-4">
            update profile
          </Button>
        </div>
      </div>
    </div>
  );
}
