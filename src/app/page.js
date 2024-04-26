
import { Appbar } from "./components/appbar";
import { Intro } from "./components/home/intro";
import { About } from "./components/home/about";
import { Work } from "./components/home/work";
import { Getintouch } from "./components/home/getintouch";

export default function Home() {
  return (
    <main className="bg-navy500">
      <Appbar />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Intro />
        <About />
        <Work />
        <Getintouch />
      </div>
      <a href="mailto:mayurshimpi602@gmail.com " className="flex items-center rotate-90 text-secondary hover:text-white fixed right-[-200px] bottom-72 text-2xl">mayurshimpi602@gmail.com <div className="h-1 border-b-2 w-[200px] ml-2"></div></a>
    </main>
  );
}
