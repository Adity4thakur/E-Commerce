const products = [
  
    {
        "id": 1,
        "name": "Basic Tee",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?shirt",
        "imageAlt": "Front of men's Basic Tee in black.",
        "price": "499",
        "discountedPrice": "399",
        "color": "Black",
        "category": "Men's wear",
        "description": "A classic black tee made from 100% cotton. Perfect for everyday wear and versatile styling."
      },
      {
        "id": 2,
        "name": "Running Shoes",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?running-shoes",
        "imageAlt": "Pair of running shoes.",
        "price": "2599",
        "discountedPrice": "1999",
        "color": "Blue",
        "category": "Running Shoes",
        "description": "Lightweight and comfortable running shoes designed for optimal performance and speed."
      },
      {
        "id": 3,
        "name": "Leather Wallet",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?wallet",
        "imageAlt": "Brown leather wallet.",
        "price": "799",
        "discountedPrice": "599",
        "color": "Brown",
        "category": "Accessories",
        "description": "Handcrafted genuine leather wallet with multiple compartments for cards and cash."
      },
      {
        "id": 4,
        "name": "Eau de Parfum",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?perfume",
        "imageAlt": "Bottle of Eau de Parfum.",
        "price": "1999",
        "discountedPrice": "1599",
        "color": "Transparent",
        "category": "Eau de parfum",
        "description": "A captivating fragrance with notes of vanilla and sandalwood, perfect for any occasion."
      },
      {
        "id": 5,
        "name": "Casual Shirt",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?casual-shirt",
        "imageAlt": "Front of men's Casual Shirt.",
        "price": "1199",
        "discountedPrice": "999",
        "color": "White",
        "category": "Men's wear",
        "description": "A stylish white casual shirt made from breathable fabric, ideal for both office and casual outings."
      },
      {
        "id": 6,
        "name": "Denim Jeans",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?jeans",
        "imageAlt": "Pair of Denim Jeans.",
        "price": "1999",
        "discountedPrice": "1699",
        "color": "Blue",
        "category": "Men's wear",
        "description": "Classic blue denim jeans with a comfortable fit, suitable for any casual occasion."
      },
      {
        "id": 7,
        "name": "Trail Sneakers",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?sneakers",
        "imageAlt": "Pair of Trail Sneakers.",
        "price": "3499",
        "discountedPrice": "2799",
        "color": "Green",
        "category": "Running Shoes",
        "description": "Durable trail sneakers that provide excellent grip and support on any terrain."
      },
      {
        "id": 8,
        "name": "Marathon Trainers",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?trainers",
        "imageAlt": "Pair of Marathon Trainers.",
        "price": "3999",
        "discountedPrice": "3199",
        "color": "Red",
        "category": "Running Shoes",
        "description": "High-performance trainers engineered for long-distance running and endurance."
      },
      {
        "id": 9,
        "name": "Sunglasses",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?sunglasses",
        "imageAlt": "Pair of Sunglasses.",
        "price": "1499",
        "discountedPrice": "1199",
        "color": "Black",
        "category": "Accessories",
        "description": "Stylish UV-protected sunglasses to keep your eyes safe and enhance your look."
      },
      {
        "id": 10,
        "name": "Wristwatch",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?wristwatch",
        "imageAlt": "Men's Wristwatch.",
        "price": "7999",
        "discountedPrice": "6499",
        "color": "Silver",
        "category": "Accessories",
        "description": "Elegant stainless steel wristwatch with a sleek design and water-resistant features."
      },
    //   
    // 
    {
        "id": 21,
        "name": "Leather Belt",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?belt",
        "imageAlt": "Brown Leather Belt.",
        "price": "1299",
        "discountedPrice": "999",
        "color": "Brown",
        "category": "Accessories",
        "description": "Premium quality leather belt with a sleek buckle, perfect for formal and casual wear."
      },
      {
        "id": 22,
        "name": "Smartwatch",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?smartwatch",
        "imageAlt": "Modern Smartwatch.",
        "price": "9999",
        "discountedPrice": "7999",
        "color": "Black",
        "category": "Accessories",
        "description": "Feature-packed smartwatch with fitness tracking, notifications, and a stylish design."
      },
      {
        "id": 23,
        "name": "Formal Shoes",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?formal-shoes",
        "imageAlt": "Pair of Formal Shoes.",
        "price": "3999",
        "discountedPrice": "2999",
        "color": "Black",
        "category": "Men's wear",
        "description": "Elegant and comfortable formal shoes, ideal for office and formal events."
      },
      {
        "id": 24,
        "name": "Hoodie",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?hoodie",
        "imageAlt": "Men's Hoodie.",
        "price": "2499",
        "discountedPrice": "1999",
        "color": "Gray",
        "category": "Men's wear",
        "description": "Cozy and warm hoodie made from soft fleece material, perfect for casual wear."
      },
      {
        "id": 25,
        "name": "Laptop Bag",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?laptop-bag",
        "imageAlt": "Black Laptop Bag.",
        "price": "2999",
        "discountedPrice": "2499",
        "color": "Black",
        "category": "Accessories",
        "description": "Durable and spacious laptop bag with multiple compartments for easy organization."
      },
      {
        "id": 26,
        "name": "Wireless Earbuds",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?earbuds",
        "imageAlt": "Pair of Wireless Earbuds.",
        "price": "3499",
        "discountedPrice": "2999",
        "color": "White",
        "category": "Accessories",
        "description": "High-quality wireless earbuds with noise cancellation and long battery life."
      },
      {
        "id": 27,
        "name": "Sports Cap",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?sports-cap",
        "imageAlt": "Sports Cap.",
        "price": "699",
        "discountedPrice": "499",
        "color": "Red",
        "category": "Accessories",
        "description": "Breathable sports cap with an adjustable strap for a comfortable fit."
      },
      {
        "id": 28,
        "name": "Track Pants",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?track-pants",
        "imageAlt": "Pair of Track Pants.",
        "price": "1799",
        "discountedPrice": "1499",
        "color": "Navy Blue",
        "category": "Men's wear",
        "description": "Comfortable and stretchable track pants designed for workouts and daily wear."
      },
      {
        "id": 29,
        "name": "Sneakers",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?sneakers-men",
        "imageAlt": "Pair of Sneakers.",
        "price": "4999",
        "discountedPrice": "3999",
        "color": "White",
        "category": "Men's wear",
        "description": "Trendy and lightweight sneakers with a cushioned sole for ultimate comfort."
      },
      {
        "id": 30,
        "name": "Gym Gloves",
        "href": "#",
        "imageSrc": "https://source.unsplash.com/random/400x400?gym-gloves",
        "imageAlt": "Pair of Gym Gloves.",
        "price": "899",
        "discountedPrice": "699",
        "color": "Black",
        "category": "Accessories",
        "description": "Durable and breathable gym gloves that provide a secure grip during workouts."
      }
];

export default function Product() {
  return (
    <>
    <div className=" my-5 py-5 bg-white">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 text-center pb-5 mb-1">
         OUR PRODUCTS
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt="product"
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className=" flex justify-between">
                <div>
                  <h3 className="text-l text-gray-900 ">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  
                  {/* <div className="flex items-center">
                    <i className="ri-thumb-up-line"></i>
                    <i className="ri-thumb-up-fill"></i>
                  </div> */}
                  
                  <p className="text-l font-medium text-gray-800 line-through">
                    Price: ₹{product.price}
                  </p>
                  <p className="text-xl text-gray-900 ">
                    Discounted Price: ₹{product.discountedPrice}
                  </p>
                </div>
                <button className="mt-2 bg-gray-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='my-5 py-5 '>

    </div>
    </>
  );
}
