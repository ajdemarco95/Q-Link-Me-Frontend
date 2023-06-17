import Link from "next/link";

function HomeHeader() {
  return (
    <div className="fixed flex justify-between py-6 w-full lg:px-48 md:px-12 px-4 content-center bg-secondary z-10">
      <div className="flex items-center">
        <h1 className="h-4">Q-Link.me</h1>
      </div>
      <ul className="items-center hidden md:flex">
        <li className="mx-3">
          <a href="">Features</a>
        </li>
        <li className="mx-3">
          <a href="">Pricing</a>
        </li>
        <li className="mx-3">
          <a href="">FAQ</a>
        </li>
      </ul>
      <div className="hidden md:block">
        <Link href="/login">
          <button className="mr-6">Login</button>
        </Link>
        <Link href="/login">
          <button className="py-2 px-4 text-white bg-black rounded-3xl">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
