import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import groupImage from "../assets/images/group.jpg";
import baristaImage from "../assets/images/barista.jpg";
import coupleImage from "../assets/images/couple.jpg";
import coffeeHouseImage from "../assets/images/coffee.jpg";
import { Coffee, Utensils, Wifi, Music,UserCircle} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const offers = [
  { id: 1, icon: Coffee, title: "Premium Coffee", desc: "Enjoy our freshly brewed coffee made from the finest beans." },
  { id: 2, icon: Utensils, title: "Delicious Food", desc: "A variety of delicious meals, snacks, and desserts." },
  { id: 3, icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected with high-speed internet while you relax." },
  { id: 4, icon:Music, title: "Live Music", desc: "Experience live music performances every weekend." },
];




export const carouselSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000, 
  centerMode: true, 
  centerPadding: "0px", 

};


export const sliderImages = [{
  name:"Image1",
  imagePath:groupImage,
},


{


  name:"Image2",
  imagePath:baristaImage,
},


{


  name:"Image3",
  imagePath:coupleImage,
},

{
  name:"Image4",
  imagePath:coffeeHouseImage
}
]


export const customerReview = [
  {
    name: "John Doe",
    image: UserCircle,
    review: "I had the best experience at Cherry Blossom Cafe. The coffee is amazing, and the atmosphere is so relaxing!",
  },
  {
    name: "Jane Smith",
    image: UserCircle,
    review: "Such a great place to hang out with friends. The food and drinks are always top-notch. Highly recommend!",
  },
  {
    name: "Michael Johnson",
    image: UserCircle,
    review: "If you're looking for a cozy cafe with exceptional service and delicious coffee, this is the place!",
  },
  // Add more reviews as needed
];

