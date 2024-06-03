import Image from "./image";
import Text from "./text";

interface cardPropTypes {
  image: string;
  title: string;
  price: string;
  date: string;
  location: string;
  daytonight: string;
  tag: string;
}

export default function Card(props: cardPropTypes) {
  return (
    <div className="aspect-[4/5] xsm:min-w-72 md:min-w-80 xsm:mt-8 xl:mt-16 px-3 xsm:mr-4 rounded-md hover:shadow-lg ">
      <Text
        text={props.price}
        className="relative top-8 left-2/3 bg-yellow-300 w-fit  font-bold px-3 rounded-full shadow-lg font-Kanit"
      />

      <Image link={props.image} className="rounded-md" />

      {/* After Image part  */}
      <div className=" relative bg-white dark:bg-black hover:-mt-12  hover:pb-12 duration-500 ">
        <Text
          text={"#" + props.tag}
          className="lg:text-md font-bold text-gray-400 mt-4"
        />

        <Text
          text={props.title}
          className="xl:text-md font-bold mt-2 mb-4 font-Kanit tracking-wider  dark:text-white"
        />

        {/* Details section  */}

        <div className="flex justify-between xsm:mt-4 sm:mt-8 ">
          <div className="flex justify-between items-center">
            <Image link="svg/clock.svg" className="size-5 mr-2" />
            <Text
              text={props.daytonight}
              className="font-Josefin  dark:text-white"
            />
          </div>

          <div className="flex justify-between items-center">
            <Image link="svg/location.svg" className="size-5 mr-2" />
            <Text
              text={props.location}
              className="text-gray-600 font-bold  dark:text-white"
            />
          </div>
        </div>

        {/* Last row  */}

        <div className="flex justify-between items-center xsm:mt-4 sm:mt-8  mb-4">
          <div className="flex justify-between items-center">
            <Image link="svg/calendar.svg" className="size-5 mr-2" />
            <Text
              text={props.date}
              className="text-gray-600 font-bold  dark:text-white"
            />
          </div>

          <div className="flex justify-between items-center xl:w-1/4">
            <Image
              link="svg/bookmark.svg"
              className="size-5 mr-2 cursor-pointer dark:invert"
            />
            <Image
              link="svg/share.svg"
              className="size-5 mr-2 cursor-pointer dark:invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
