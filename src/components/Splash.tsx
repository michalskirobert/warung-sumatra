import logo from "@public/logo/red_logo.png";
import Image from "next/image";

import { Spinner } from "@utils/icons";

export default function Splash() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-black">
      <Image
        src={logo}
        className="w-1/3 object-contain"
        alt="Logo"
        height={200}
        width={200}
      />
      <Spinner
        className="text-gray-200 animate-spin dark:text-gray-600 fill-red-500 dark:fill-blue-50"
        height={25}
        width={25}
        visibility={1}
      />
    </div>
  );
}
