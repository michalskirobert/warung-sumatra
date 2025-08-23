import logo from "@public/logo/red_logo.png";
import Image from "next/image";

export default function Splash() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-black">
      <Image
        src={logo}
        className="object-contain"
        alt="Logo"
        height={200}
        width={200}
      />
    </div>
  );
}
