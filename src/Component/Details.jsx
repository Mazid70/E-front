import ReactStars from 'react-stars';
import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
const Details = () => {
  const [tab, setTab] = useState('Description');
  const [value, setValue] = useState(1);
  const handdleUp = () => {
    setValue(value + 1);
  };
  const handdleDown = () => {
    if (value != 0) setValue(value - 1);
  };
  const handleInputChange = e => {
    const inputValue = e.target.value;

    if (
      inputValue === '' ||
      (!isNaN(inputValue) && parseInt(inputValue, 10) >= 0)
    ) {
      setValue(inputValue === '' ? '' : parseInt(inputValue, 10));
    }
  };
  const data = {
    productName: 'Zrey Microsuede of Paige - Full Size HD Display',
    productImages: [
      'https://images.unsplash.com/photo-1484788984921-03950022c9ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww',
      'https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-1.fill.size_2000x1125.v1723100793.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlygWcz51gyDexlstejSgZZ2LSxqF4rBz3wQ&s',
    ],
    description:
      'Experience exceptional quality with the Zrey Microsuede of Paige. Featuring a full-size HD display, this product delivers unparalleled visuals and premium craftsmanship.',
    price: 499.99,
    discount: 20,
    finalPrice: 399.99,
    category: 'Monitors & Displays',
    tags: ['HD Display', 'Electronics', 'Monitors', 'Zrey'],
    ratings: 4.5,
    reviews: [
      {
        name: 'Mazidur',
        comment: 'good',
        rating: 4.5,
      },
      {
        name: 'Rony',
        comment: 'very nice product .I love it',
        rating: 5,
      },
    ],
    stock: 19,
    features: [
      'Full-size HD display with vibrant colors',
      'Sleek microsuede finish for a premium look',
      'Adjustable viewing angles for maximum comfort',
      'Energy-efficient technology',
      'Plug-and-play compatibility with most devices',
    ],
    warranty: '2 Years Manufacturer Warranty',
    guarantee: '7-Days Money Back Guarantee',
    returnPolicy: '30 days hassle-free returns',
    deliveryOptions: ['Standard Shipping', 'Express Delivery'],
    productCreationDate: '2025-01-01',
    brand: 'Zrey',
    seller: {
      name: 'Limupa Store',
      rating: 4.8,
      totalSales: 1020,
    },
  };
  const [image, setImage] = useState(data.productImages[0]);
  return (
    <main className="pb-10 min-h-screen">
      <nav className="h-14 bg-gray-200 -mt-5 mb-5">
        <div className="w-3/5 h-full  mx-auto flex items-center text-sm">
          Home
          <span className="text-gray-400"> / {data.productName}</span>
        </div>
      </nav>
      <section className="flex gap-10  w-3/5 mx-auto">
        <div className="flex-1">
          <div className="relative overflow-hidden group w-[570px] h-[570px] ">
            <img
              src={image ? image : data.productImages[0]}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
            />
          </div>
          <div className="w-4/5 mx-auto flex mt-10 gap-5">
            {data.productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                className={
                  image == img
                    ? 'h-16 opacity-100 cursor-pointer'
                    : 'h-16 opacity-40 cursor-pointer'
                }
                onClick={() => setImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h1 className=" text-xl text-blue-600">{data.productName}</h1>
          <h1 className="font-semibold text-2xl mt-12 mb-5">
            {data.discount ? (
              <div>
                <span className="text-red-600">${data.finalPrice}</span>
                <span className="ml-5 text-lg text-gray-500">
                  <del>${data.price}</del>
                </span>
              </div>
            ) : (
              <span>$ {data.finalPrice}</span>
            )}
          </h1>
          <h1>Brand: {data.brand}</h1>
          {data.stock ? (
            <h1>
              Availability:{' '}
              <span className="text-green-600 font-medium"> In Stock</span>
            </h1>
          ) : (
            <h1>
              Availability:{' '}
              <span className="text-red-500 font-medium"> Out of Stock</span>
            </h1>
          )}
          <h1>SKU: {data.stock}</h1>
          <p className="text-gray-500 mt-5 ">{data.description}</p>
          <div className="flex  items-center my-7 gap-5">
            <h1>Qty :</h1>
            <div className="h-12 border w-20 p-3 flex text-xl">
              <input
                type="number"
                className="h-full w-8 outline-0"
                value={value}
                onChange={handleInputChange}
              />
              <div className="flex flex-col h-full justify-center ">
                <button onClick={handdleUp}>+</button>
                <button onClick={handdleDown}>-</button>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {data.stock ? (
              <>
                <button className="flex-1 bg-yellow-300 h-10 font-medium text-xs rounded">
                  ADD TO CART
                </button>
                <button className="flex-1 bg-yellow-300 h-10 font-medium text-xs  rounded">
                  BUY NOW
                </button>
              </>
            ) : (
              <button className=" w-1/2 bg-yellow-300 h-10 font-medium text-xs rounded">
                PRE-ORDER
              </button>
            )}
            <button className="bg-gray-200 text-gray-400 h-10 w-10 rounded flex justify-center items-center">
              <FaRegHeart />
            </button>
          </div>
          <div className="flex text-sm gap-2 my-10">
            Tags :
            {data.tags.map(t => (
              <h1 key={t} className="flex ">
                {t},
              </h1>
            ))}
          </div>
        </div>
      </section>
      {/* details  */}
      <section className="mt-10 w-3/5 mx-auto">
        <div className="flex gap-10 text-gray-500">
          <button
            className={
              tab == 'Description'
                ? 'font-medium text-xl  text-black'
                : 'font-medium text-xl'
            }
            onClick={() => setTab('Description')}
          >
            Description
          </button>
          <button
            className={
              tab == 'Reviews'
                ? 'font-medium text-xl  text-black'
                : 'font-medium text-xl'
            }
            onClick={() => setTab('Reviews')}
          >
            Reviews
          </button>
          <button
            className={
              tab == 'Tags'
                ? 'font-medium text-xl  text-black'
                : 'font-medium text-xl'
            }
            onClick={() => setTab('Tags')}
          >
            Tags
          </button>
        </div>
        <hr className="mt-3" />
        {tab == 'Description' && (
          <div>
            <p className="mt-10 text-sm">{data.description}</p>

            <h1 className="text-2xl font-medium mt-5 mb-3">Features:</h1>
            {data.features.map((f, index) => (
              <li key={index}>{f}</li>
            ))}
            <h1 className="font-medium text-2xl mt-3">Warranty:</h1>
            <h1 className="">{data.warranty}</h1>
            <h1 className="font-medium text-2xl mt-3">Guarantee:</h1>
            <h1 className="">{data.guarantee}</h1>
            <h1 className="font-medium text-2xl mt-3">Return Policy:</h1>
            <h1 className="">{data.returnPolicy}</h1>
          </div>
        )}
        {tab == 'Reviews' && (
          <div>
            {data.reviews.map((review, index) => (
              <div key={index} className="mt-3">
                <h1 className="font-semibold flex items-center gap-3">
                  {review.name}{' '}
                  <span>
                    <ReactStars
                      value={review.rating}
                      size={16}
                      color2={'#ffd700'}
                      edit={false}
                    />
                  </span>
                </h1>
                <p className="">"{review.comment}"</p>
              </div>
            ))}
          </div>
        )}
        {tab == 'Tags' && (
          <div className="flex gap-5 py-5">
            {data.tags.map((d, index) => (
              <div key={index}>{d},</div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Details;
