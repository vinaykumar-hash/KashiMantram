import React, { useEffect, useState } from 'react';

const Aboutus = () => {
  const texts = ["Ghats", "Ghats", "Temples","Temples"];
  const imageData = [
    [
      {
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ae/ed/5d/a-view-of-the-ghats-taken.jpg?w=1200&h=1200&s=1",
        name: "Assi Ghat",
        distance: "Around 2km",
      },
      {
        src: "https://varanasi.tourismindia.co.in/images/places-to-visit/headers/dashashwamedh-ghat-varanasi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
        name: "Dashashwamedh Ghat",
        distance: "Around 1km",
      },
      {
        src: "https://www.optimatravels.com/images/varanasi-images/man-mandir-ghat-head.jpg",
        name: "Man Mandir Ghat",
        distance: "Around 1km",
      },
    ],
    [
      {
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/d5/89/5f/chet-sing-fort-im-morgenlicht.jpg?w=900&h=500&s=1",
        name: "Chet Singh Ghat",
        distance: "Around 1km",
      },
      {
        src: "https://shrikashidham.com/wp-content/uploads/2023/09/Manikarnika-Ghat-varanasi.jpg",
        name: "Manikarnika Ghat",
        distance: "Around 3km",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scindia_ghat_at_sunrise_July_2007.JPG",
        name: "Scindia Ghat",
        distance: "Around 2km",
      },
    ],
    [
      {
        src: "https://images.deccanherald.com/deccanherald/import/sites/dh/files/gallery_images/2021/12/13/file7it39sqcijbouyq81z6.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
        name: "Kashi Vishwanath Temple",
        distance: "Around 5km",
      },
      {
        src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/Bharat_Mata_Mandir_Twitter_buzshilpi.jpeg",
        name: "Bharat Mata Mandir",
        distance: "Around 5km",
      },
      {
        src: "https://www.trawell.in/admin/images/upload/195238684Sankat_Mochan_Hanuman_Temple.jpg",
        name: "Sankat Mochan Mandir",
        distance: "Around 5km",
      },
    ],[
      {
        src: "https://visitkashi.in/backend/admin/product_images/168006596886.jpg",
        name: "Vishwanath Temple",
        distance: "Around 5km",
      },
      {
        src: "https://i0.wp.com/varanasivideos.com/wp-content/uploads/2019/06/Kaal-Bhairav-Temple-Otuside-View-1024x683.jpg?resize=1024%2C683",
        name: "Kal Bhairav Mandir",
        distance: "Around 5km",
      },
      {
        src: "https://kevinstandagephotography.wordpress.com/wp-content/uploads/2020/05/ksp_5373.jpg?w=900",
        name: "Mahadev Mandir",
        distance: "Around 5km",
      },
    ],
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
        document.getElementById("Np_text").style.opacity = 1;
        setTimeout(() => {
          document.getElementById("places_id").style.opacity = 1;
        }, 200);
        
      }, 500);
      document.getElementById("Np_text").style.opacity = 0;
      document.getElementById("places_id").style.opacity = 0;
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ background: "#F0F0F0" }}
      className="w-full font-main flex justify-center items-center flex-col py-10"
    >
      {/* Heading Section */}
      <h2 className="text-2xl text-base-500 tracking-wide">Kashi Mantram</h2>
      <h2 className="sm:text-6xl text-5xl text-base-500">About Us</h2>
      <div className="sm:w-60 w-48 h-0.5 bg-base-500 flex justify-center items-center mt-2">
        <div className="w-4 h-4 bg-base-500 rotate-45"></div>
      </div>

      {/* About Us Section */}
      <div className="flex justify-center items-center sm:flex-col flex-col-reverse gap-20 mt-12">
        <p className="flex flex-col font-s text-xl flex-1 text-center sm:gap-4 gap-8 sm:mx-40 mx-8">
          <p>
            Hotel Kashi Mantram, located at the spiritual capital of India,
            Varanasi. Best luxury hotel with ample facilities and clean rooms and bathrooms.
          </p>
          <p>
            Located just a 2-minute walk from{" "}
            <span className="font-bold text-base-500 tracking-tight">
              Godowlia
            </span>
            , often referred to as the{" "}
            <span className="font-bold text-base-500 tracking-tight">
              Times Square of Varanasi
            </span>
            , our prime location places you at the center of the city's cultural pulse.
          </p>
          <p>
            The iconic{" "}
            <span className="font-bold text-base-500 tracking-tight">
              Kashi Vishwanath Temple
            </span>{" "}
            is a mere 5-10 minutes away on foot, allowing you to easily immerse
            yourself in its spiritual ambiance.
          </p>
        </p>
      </div>

      {/* Nearby Places Section */}
      <div className="flex w-full flex-col justify-center items-center my-10">
        <h1 className="text-4xl text-base-500">Nearby Places</h1>
        <div  className="flex flex-col justify-center items-center gap-6">
          <p
            id="Np_text"
            className={`font-s text-base-500 opacity-80 text-7xl sm:text-8xl tracking-tighter transition-opacity duration-500 ease-in-out decoration-base-500 decoration-1 underline-offset-4 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {texts[currentTextIndex]}
          </p>
          <div id='places_id' className="transition-opacity duration-500 ease-in-out w-full flex flex-wrap gap-6 justify-center items-center">
            {imageData[currentTextIndex].map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center flex-col gap-6"
              >
                <img
                  className="w-80 h-80 object-cover"
                  src={item.src}
                  alt={item.name}
                />
                <p className="font-s font-medium text-white opacity-90 bg-base-500 py-1 px-4">
                  {item.name}
                </p>
                <p className="-translate-y-4 text-xl text-black font-s">{item.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
