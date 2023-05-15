import { Button } from "@components/elements/button/Button";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export default function MainNav({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) {
  return (
    <header className="w-full shadow-lg bg-white sticky top-0">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Navbar
        </Link>
        <button className="lg:hidden" onClick={toggleSidebar}>
          {isSidebarOpen ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
