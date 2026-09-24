import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="bg-[#181f2a] rounded-3xl p-8 md:p-12 lg:p-14 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs md:text-sm text-emerald-400 font-medium">
              <span>✨</span>
              <span>Discover your next favorite book</span>
            </div>

            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Books to freshen up <br />
              <span className="text-[#00d290]">your bookshelf</span>
            </h1>

            <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
              Explore a collection of amazing books and find something perfect
              for your next reading adventure.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/listed-books"
                className="px-6 py-2.5 rounded-full bg-[#00d290] hover:bg-[#00ba80] text-slate-950 font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Explore Books
              </Link>

              <button
                type="button"
                className="px-6 py-2.5 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-800/50 hover:bg-slate-800 text-white font-medium text-sm transition-all duration-200"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[360px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src={bannerImg}
                alt="Stack of Books"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
