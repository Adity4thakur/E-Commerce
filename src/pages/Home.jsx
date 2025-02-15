import { useState, useEffect } from "react";
import banner from "../assets/banner.png";
import b1 from "../assets/b1.jpg";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";
import b6 from "../assets/b6.png";
import b7 from "../assets/b7.png";
import b8 from "../assets/b8.png";

const products = [
  // {
  //   id: 1,
  //   name: 'Basic Tee',
  //   href: '#',
  //   imageSrc: 'https://media.istockphoto.com/id/1216589487/photo/photo-of-attractive-funny-lady-good-mood-perfect-stunning-appearance-walk-street-warm-spring.jpg?s=2048x2048&w=is&k=20&c=TAeFkMhQL1XJRUHEJNBTthiHworGJf4XPXI98Jt6WHE=',
  //   imageAlt: "Front of men's Basic Tee in black.",
  //   price: '₹35',
  //   color: 'Black',
  // },
  // {
  //   id: 2,
  //   name: 'Casual Hoodie',
  //   href: '#',
  //   imageSrc: 'https://media.istockphoto.com/id/2167714721/photo/full-length-photo-of-lovely-young-lady-jump-look-up-empty-space-dressed-stylish-flowers-print.jpg?s=2048x2048&w=is&k=20&c=T8DBPNyKM_CGibTgKnKNwgVOzg2Z7xz-NDfkPMj5aOY=',
  //   imageAlt: "Front of men's Casual Hoodie in grey.",
  //   price: '₹50',
  //   color: 'Grey',
  // },
  {
    id: 1,
    name: "Denim Jacket",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/962940592/photo/skater-downtown.jpg?s=612x612&w=0&k=20&c=8MwHfIDkVuge4eM2EQ4bcLM1xyN-4JbVH99nK7jvG3E=",
    imageAlt: "Front of men's Denim Jacket in blue.",
    price: "₹8000",
    // color: 'Blue',
  },
  {
    id: 2,
    name: "Running Shoes",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/171370292/photo/nike-flyknit-trainer.jpg?s=612x612&w=0&k=20&c=j04paJYjHVFUgm7SBRY3GkIys2ogWssS9mkWl8OnLLE=",
    imageAlt: "Pair of Running Shoes in red.",
    price: "₹12000",
    // color: 'White',
  },
  // {
  //   id: 5,
  //   name: 'Leather Belt',
  //   href: '#',
  //   imageSrc: 'https://media.istockphoto.com/id/184291696/photo/brown-leather-belt-isolated.jpg?s=612x612&w=0&k=20&c=gNsmlPpSZnC7Vx5F9VH8oSDVzWxfciQ5vbXMolelfhY=',
  //   imageAlt: "Men's Leather Belt in brown.",
  //   price: '₹25',
  //   color: 'Brown',
  // },
  {
    id: 3,
    name: "Digital Watch",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    imageAlt: "Men's Digital Watch in black.",
    price: "₹1500",
    // color: 'Black',
  },
  {
    id: 4,
    name: "Sports Cap",
    href: "#",
    imageSrc:
      "https://media.istockphoto.com/id/1226418455/photo/its-hard-not-to-be-happy-playing-baseball.jpg?s=612x612&w=0&k=20&c=pid8lk5cT0UtwYD_DFXhfImVARGA1EphpM5KJAWG0tc=",
    imageAlt: "Sports Cap ",
    price: "₹2090",
    // color: 'Navy Blue',
  },
];

export default function Home() {
  const img = [b1, b3, b4, b5, b6, b7, b8];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = () => {
    setCurrentIndex((preIndex) =>
      preIndex === 0 ? img.length - 1 : preIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((preIndex) => (preIndex + 1) % img.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000); // Change the banner every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [img.length]); // Dependency array

  return (
    <div className="bg-white pb-5 ">
      {/* mb-5 pb-5 */}
      {/* section 4 corosole */}

      <div className="pb-5 mb-5">
        <div className=" relative w-full  mx-3 p-4 ">
          <div className="overflow-hidden rounded-lg">
            <img src={img[currentIndex]} alt="" className="w-1/2 mx-auto" />
          </div>
          {/* previous button */}
          <button
            onClick={goToNext}
            className="absolute top-1/2  left-2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-full hover:bg-gray-600 focus:outline-none"
          >
            {" "}
            <i class="fa-solid fa-chevron-left"></i>{" "}
          </button>
          {/* next button  */}
          <button
            onClick={goToPrev}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-full hover:bg-gray-600 focus:outline-none"
          >
            {" "}
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      {/* section 4 */}

      {/* section 3 */}
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                We are ready for all fastive session!
              </h1>
              <p className="mt-4 text-xl text-gray-700 ">
                "a m𝖺𝗇 𝗁𝖺𝗌 𝗍𝗈 𝗅𝗈𝗈𝗄 𝗁𝗂𝗌 𝖻𝖾𝗌𝗍 𝗐𝗁𝖾𝗇 𝗂𝗍'𝗌 𝗍𝗂𝗆𝖾 𝗍𝗈 𝗀𝖾𝗍 𝗆𝖺𝗋𝗋𝗂𝖾d, 𝗈𝗋
                𝖻𝗎𝗋𝗂𝖾𝖽"
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            className="size-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="pb-5 mb-5">
        <div className="mx-auto max-w-2xl py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-700 text-center pb-5 mb-5">
            New Arrival
          </h1>

          <div className="mt-4">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative border border-gray-900"
                >
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full  bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                  <div className="mt-4 flex justify-between">
                    <div className="px-2 pb-3 ">
                      <h3 className=" text-gray-700 text-xl font-bold">
                        <a href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 "
                          />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-l font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* section 1 */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            "Shop Smart, Shop Fast, Shop Easy!"
          </h2>
          <p className="mt-6 text-lg/8 text-pretty text-gray-300">
            "Shop smart and easy—great deals, fast delivery, and secure
            payments. Your go-to destination for everything you need!"
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Shop
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              About us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        {/* <div className="relative mt-16 h-80 lg:mt-8">
              <img
                alt="App screenshot"
                src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={1824}
                height={1080}
                className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              />
            </div> */}
        <div className="relative mt-16 h-80 lg:mt-8">
          <img src={banner} alt="Banner" width={1824} height={1080} />
          {/* md:hidden lg:block    div className="md-5*/}
        </div>
      </div>
      {/* section 1 */}
    </div>
  );
}
