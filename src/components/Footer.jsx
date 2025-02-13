// this are quick links 
import React from 'react';

const navigation1 = [
  { name: "Home", href: "#", current: true },
  { name: "Category", href: "#", current: false },
  { name: "Product", href: "#", current: false },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const navigation2 = [
    { name: "Profile", href: "#", current: true },
    { name: "Order", href: "#", current: false },
    { name: "Address", href: "#", current: false },
    { name: "SignIn", href: "#", current: false },
    { name: "SignOut", href: "#", current: false },
  ];

 





function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 1 in this we are  */}
          <div className="text-center">
            <div className="space-y-2 text-white ">
              <h1 className="text-amber-200 text-left ">@ADi</h1>
              <div className="text-center">
                <h1 className="text-left"> <u> 
                  Address </u> : <p>Lorem ipsum dolor sit amet.</p>{" "}
                </h1>
                <h1 className="text-left">
                 <u> Email </u>: <p>AADi@gmail.com</p>
                </h1>
                <h1 className="text-left">
                  <u>Contact </u>: <p>8989898989</p>
                </h1>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/shorts/_HWdhMI5GFI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-youtube text-red-600 text-2xl"></i>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram text-pink-500 text-2xl"></i>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook text-blue-600 text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="text-center">
            <ul className="space-y-2">
                {/* <li className='text-l text-amber-200'>Quick Links </li> */}
              {navigation1.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium block"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 3 */}
          <div className="text-center">
            <ul className="space-y-2">
              {navigation2.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium block"
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* 4 */}
          <div className="text-center">
            <div className="space-y-2">
            <img 
  src="https://www.designevo.com/res/templates/thumb_small/purple-trolley-and-ecommerce.webp" 
  alt="E-commerce Trolley" 
  className="w-[408px] h-[235px] object-cover" 
/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
