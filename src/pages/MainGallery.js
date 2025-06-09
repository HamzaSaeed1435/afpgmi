import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainGallery.css";
// import galleryImg1 from "../assets/Image2.jpeg";
// import galleryImg2 from "../assets/Image3.jpeg";
// import galleryImg3 from "../assets/Image4.jpeg";
// import galleryImg4 from "../assets/Image5.jpeg";
// import galleryImg5 from "../assets/Image6.jpeg";
// import galleryImg6 from "../assets/Image7.jpeg";
// import galleryImg7 from "../assets/Image8.jpeg";
// import galleryImg8 from "../assets/Image9.jpeg";
// import galleryImg9 from "../assets/Image10.jpeg";
// import galleryImg10 from "../assets/Image11.jpeg";
// import galleryImg11 from "../assets/Image12.jpeg";
// import galleryImg12 from "../assets/Image13.jpeg";
// import galleryImg13 from "../assets/Image14.jpeg";
// import galleryImg14 from "../assets/Image15.jpeg";
// import galleryImg15 from "../assets/Image16.jpeg";
// import galleryImg16 from "../assets/Image17.jpeg";
// import galleryImg17 from "../assets/Image18.jpeg";
// import galleryImg18 from "../assets/Image19.jpeg";
// import galleryImg19 from "../assets/Image20.jpeg";
// import galleryImg20 from "../assets/Image21.jpeg";
// import galleryImg21 from "../assets/Image22.jpeg";
// import galleryImg22 from "../assets/Image23.jpeg";
// import galleryImg23 from "../assets/Image24.jpeg";
// import galleryImg24 from "../assets/Image25.jpeg";
// import galleryImg25 from "../assets/Image26.jpeg";
// import galleryImg26 from "../assets/Image27.jpeg";
// import galleryImg27 from "../assets/Image28.jpeg";
// import galleryImg28 from "../assets/Image29.jpeg";
// import galleryImg29 from "../assets/Image30.jpeg";
// import galleryImg30 from "../assets/Image31.jpeg";
// import galleryImg31 from "../assets/Image32.jpeg";
// import COCHRANE1 from "../assets/COCHRANE-1.jpeg";
// import COCHRANE2 from "../assets/COCHRANE-2.jpeg"
// import COCHRANE3 from "../assets/COCHRANE-3.jpeg"


//new images
 
import albumImg1 from "../assets/album1/DSC_1164.JPG";
import albumImg2 from "../assets/album1/DSC_1167.JPG";
import albumImg3 from "../assets/album1/DSC_1191.JPG";
import albumImg4 from "../assets/album1/DSC_1211.JPG";
import albumImg5 from "../assets/album1/title.JPG";

//album 2
import album2Img1 from "../assets/album2/DSC_4092.JPG";
import album2Img2 from "../assets/album2/DSC_4093.JPG";
import album2Img3 from "../assets/album2/DSC_4094.JPG";
import album2Img4 from "../assets/album2/DSC_4145.JPG";
import album2Img5 from "../assets/album2/title.JPG";


//album 3
import album3Img1 from "../assets/album3/1.JPG";
import album3Img2 from "../assets/album3/2.JPG";
import album3Img3 from "../assets/album3/3.JPG";
import album3Img4 from "../assets/album3/4.JPG";
import album3Img5 from "../assets/album3/5.JPG";
import album3Img6 from "../assets/album3/6.JPG";
import album3Img7 from "../assets/album3/7.JPG";
import album3Img8 from "../assets/album3/8.JPG";
import album3Img9 from "../assets/album3/title.JPG";

//album 4
import album4Img1 from "../assets/album4/1.JPG";
import album4Img2 from "../assets/album4/2.JPG";
import album4Img3 from "../assets/album4/3.JPG";
import album4Img4 from "../assets/album4/4.JPG";
import album4Img5 from "../assets/album4/5.JPG";
import album4Img6 from "../assets/album4/6.JPG";
import album4Img7 from "../assets/album4/title.JPG";


//album 5
import album5Img1 from "../assets/album5/1.JPG";
import album5Img2 from "../assets/album5/2.JPG";
import album5Img3 from "../assets/album5/3.JPG";
import album5Img4 from "../assets/album5/4.JPG";
import album5Img5 from "../assets/album5/5.JPG";
import album5Img6 from "../assets/album5/6.JPG";
import album5Img7 from "../assets/album5/7.JPG";
import album5Img8 from "../assets/album5/8.JPG";
import album5Img9 from "../assets/album5/title.JPG";

const MainGallery = () => {
  const navigate = useNavigate();
  // const images = [
  //   {
  //     1: {
  //       img: galleryImg1,
  //       title: "Brunch 10 Dec 2023",
  //       desc: "Image 1 Desc",
  //     },
  //     2: {
  //       img: galleryImg2,
  //       title: "Brunch 10 Dec 2023",
  //       desc: "Image 1 Desc",
  //     },
  //     3: {
  //       img: galleryImg3,
  //       title: "Brunch 10 Dec 2023",
  //       desc: "Image 1 Desc",
  //     },
  //     4: {
  //       img: galleryImg4,
  //       title: "Brunch 10 Dec 2023",
  //       desc: "Image 1 Desc",
  //     },
  //     5: {
  //       img: galleryImg5,
  //       title: "Brunch 10 Dec 2023",
  //       desc: "Image 1 Desc",
  //     },
  //     6: {
  //       img: galleryImg6,
  //       title: "Brunch 10 Dec 2023",
  //       desc: "Image 1 Desc",
  //     },
  //     7: {
  //       img: galleryImg7,
  //       title: "Brunch 10 Dec 2023",
  //       desc: "Image 1 Desc",
  //     },
  //   },
  //   {
  //     1: {
  //       img: galleryImg8,
  //       title: "iHart  1-4 dec 2023",
  //       desc: "iHart  1-4 dec 2023 Desc",
  //     },
  //     2: {
  //       img: galleryImg9,
  //       title: "iHart  1-4 dec 2023",
  //       desc: "iHart  1-4 dec 2023 Desc",
  //     },
  //     3: {
  //       img: galleryImg10,
  //       title: "iHart  1-4 dec 2023",
  //       desc: "iHart  1-4 dec 2023 Desc",
  //     },
  //     4: {
  //       img: galleryImg11,
  //       title: "iHart  1-4 dec 2023",
  //       desc: "iHart  1-4 dec 2023 Desc",
  //     },
  //   },
  //   {
  //     1: {
  //       img: galleryImg13,
  //       title: "Iqbal day 9 Nov 2023",
  //       desc: "Iqbal day 9 Nov 2023 Desc",
  //     },
  //     2: {
  //       img: galleryImg14,
  //       title: "Iqbal day 9 Nov 2023",
  //       desc: "Iqbal day 9 Nov 2023 Desc",
  //     },

  //     3: {
  //       img: galleryImg12,
  //       title: "Iqbal day 9 Nov 2023",
  //       desc: "Iqbal day 9 Nov 2023 Desc",
  //     },
  //     4: {
  //       img: galleryImg15,
  //       title: "Iqbal day 9 Nov 2023",
  //       desc: "Iqbal day 9 Nov 2023",
  //     },
  //   },
  //   {
  //     1: {
  //       img: galleryImg16,
  //       title: "Coffee Shop AMC Mess",
  //       desc: "Coffee Shop AMC Mess Desc",
  //     },
  //     2: {
  //       img: galleryImg17,
  //       title: "Coffee Shop AMC Mess",
  //       desc: "Coffee Shop AMC Mess Desc",
  //     },
  //     3: {
  //       img: galleryImg18,
  //       title: "Coffee Shop AMC Mess",
  //       desc: "Coffee Shop AMC Mess Desc",
  //     },
  //     4: {
  //       img: galleryImg19,
  //       title: "Coffee Shop AMC Mess",
  //       desc: "Image 19 Desc",
  //     },
  //   },
  //   {
  //     1: {
  //       img: galleryImg20,
  //       title: "QIPS 6 Jan 2024",
  //       desc: "QIPS 6 Jan 2024 Desc",
  //     },
  //     2: {
  //       img: galleryImg21,
  //       title: "QIPS 6 Jan 2024",
  //       desc: "QIPS 6 Jan 2024 Desc",
  //     },
  //     3: {
  //       img: galleryImg22,
  //       title: "QIPS 6 Jan 2024",
  //       desc: "QIPS 6 Jan Desc",
  //     },
  //     4: {
  //       img: galleryImg23,
  //       title: "QIPS 6 Jan 2024",
  //       desc: "QIPS 23 Desc",
  //     },
  //   },
  //   {
  //     1: {
  //       img: galleryImg24,
  //       title: "CEBHP 6 Jan 2024",
  //       desc: "CEBHP 6 Jan 2024 Desc",
  //     },
  //     2: {
  //       img: galleryImg25,
  //       title: "CEBHP 6 Jan 2024",
  //       desc: "CEBHP 6 Jan 2024 Desc",
  //     },
  //     3: {
  //       img: galleryImg26,
  //       title: "CEBHP 6 Jan 2024",
  //       desc: "CEBHP 6 Jan 2024 Desc",
  //     },
  //     4: {
  //       img: galleryImg27,
  //       title: "CEBHP 6 Jan 2024",
  //       desc: "Image 27 Desc",
  //     },
  //   },
  //   {
  //     1: {
  //       img: galleryImg29,
  //       title: "Foreign nursing course 17 oct to 15 dec 2023",
  //       desc: "Foreign nursing course 17 oct to 15 dec 2023 Desc",
  //     },
  //     2: {
  //       img: galleryImg28,
  //       title: "Foreign nursing course 17 oct to 15 dec 2023",
  //       desc: "Foreign nursing course 17 oct to 15 dec 2023 Desc",
  //     },
  //     3: {
  //       img: galleryImg30,
  //       title: "Foreign nursing course 17 oct to 15 dec 2023",
  //       desc: "Foreign nursing course 17 oct to 15 dec 2023 Desc",
  //     },
  //     4: {
  //       img: galleryImg31,
  //       title: "Foreign nursing course 17 oct to 15 dec 2023",
  //       desc: "Foreign nursing course 17 oct to 15 dec 2023 Desc",
  //     },
  //   },
  //   {
  //     1: {
  //       img: COCHRANE1,
  //       title: "CEBHP 18 may 2024",
  //       desc: "CEBHP 18 may 2024 Desc",
  //     },
  //     2: {
  //       img: COCHRANE2,
  //       title: "CEBHP 18 may 2024",
  //       desc: "CEBHP 18 may 2024 Desc",
  //     },
  //     3: {
  //       img: COCHRANE3,
  //       title: "CEBHP 18 may 2024",
  //       desc: "CEBHP 18 may 2024 Desc",
  //     }, 
  //   },
  // ];

  const images = [
    {
      1: {
        img: albumImg5,
        title: "",
        desc: "",
      },
      2: {
        img: albumImg2,
        title: "",
        desc: "",
      },
      3: {
        img: albumImg3,
        title: "",
        desc: "",
      },
      4: {
        img: albumImg4,
        title: "",
        desc: "",
      },
      5: {
        img: albumImg1,
        title: "",
        desc: "",
      },
    },
    {
      1: {
        img: album2Img5,
        title: "",
        desc: "",
      },
      2: {
        img: album2Img2,
        title: "",
        desc: "",
      },
      3: {
        img: album2Img3,
        title: "",
        desc: "",
      },
      4: {
        img: album2Img4,
        title: "",
        desc: "",
      },
      5: {
        img: album2Img1,
        title: "",
        desc: "",
      },
    },
    {
      1: {
        img: album3Img9,
        title: "",
        desc: "",
      },
      2: {
        img: album3Img1,
        title: "",
        desc: "",
      },
      3: {
        img: album3Img2,
        title: "",
        desc: "",
      },
      4: {
        img: album3Img3,
        title: "",
        desc: "",
      },
      5: {
        img: album3Img4,
        title: "",
        desc: "",
      },
      6: {
        img: album3Img5,
        title: "",
        desc: "",
      },
      7: {
        img: album3Img6,
        title: "",
        desc: "",
      },
      8: {
        img: album3Img7,
        title: "",
        desc: "",
      },
      9: {
        img: album3Img8,
        title: "",
        desc: "",
      },
    },

        {
      1: {
        img: album4Img7,
        title: "",
        desc: "",
      },
      2: {
        img: album4Img1,
        title: "",
        desc: "",
      },
      3: {
        img: album4Img2,
        title: "",
        desc: "",
      },
      4: {
        img: album4Img3,
        title: "",
        desc: "",
      },
      5: {
        img: album4Img4,
        title: "",
        desc: "",
      },
      6: {
        img: album4Img5,
        title: "",
        desc: "",
      },
      7: {
        img: album4Img6,
        title: "",
        desc: "",
      },
    },
            {
      1: {
        img: album5Img9,
        title: "",
        desc: "",
      },
      2: {
        img: album5Img1,
        title: "",
        desc: "",
      },
      3: {
        img: album5Img2,
        title: "",
        desc: "",
      },
      4: {
        img: album5Img3,
        title: "",
        desc: "",
      },
      5: {
        img: album5Img4,
        title: "",
        desc: "",
      },
      6: {
        img: album5Img5,
        title: "",
        desc: "",
      },
      7: {
        img: album5Img6,
        title: "",
        desc: "",
      },
            8: {
        img: album5Img7,
        title: "",
        desc: "",
      },
            9: {
        img: album5Img8,
        title: "",
        desc: "",
      },
    },
  ]
  return (
    <div className="department">
      {" "}
      <header>
        <h2 class="center">GALLERY</h2>
      </header>
      <div className="cards-container">
        {images.map((card, index) => (
          <div className="card" key={index} style={{ cursor: "pointer" }} onClick={() => navigate(`/gallery/${index}`, { state: card })}>
            <img src={card[1]?.img} alt={`Image ${card.id}`}  />
            <div className="content">
              <h4 style={{ textTransform: "uppercase", textAlign:"center", paddingTop: 20, paddingBottom: 20 }}>{card[1].title}</h4>
              {/* <h3>{card[1].desc}</h3> */}
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default MainGallery;
