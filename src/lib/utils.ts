import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import groupImage from "../assets/images/group.jpg";
import baristaImage from "../assets/images/barista.jpg";
import coupleImage from "../assets/images/couple.jpg";
import coffeeHouseImage from "../assets/images/coffee.jpg";
import { Coffee, Utensils, Wifi, Music,UserCircle, Sparkles, Cake, IceCream, Cookie, Wine } from "lucide-react";
import MenuImage  from "@/assets/images/burger.jpg" 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Offers

export const offers = [
  { id: 1, icon: Coffee, title: "Premium Coffee", desc: "Enjoy our freshly brewed coffee made from the finest beans." },
  { id: 2, icon: Utensils, title: "Delicious Food", desc: "A variety of delicious meals, snacks, and desserts." },
  { id: 3, icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected with high-speed internet while you relax." },
  { id: 4, icon:Music, title: "Live Music", desc: "Experience live music performances every weekend." },
];


//Carousel Settings

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


//Customer Reviews

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

];

//Menu Items

export const menuItems = [
  {
    id: 1,
    category: "Beverages",
    icon:Coffee,
    items: [
      { name: "Cherry Blossom Latte", price: "NPR 250", image: MenuImage },
      { name: "Iced Sakura Tea", price: "NPR 200", image: MenuImage },
      { name: "Matcha Blossom Smoothie", price: "NPR 300", image:MenuImage},
    ],
  },
  {
    id: 2,
    category: "Desserts",
    icon:Cake,
    items: [
      { name: "Sakura Cheesecake", price: "NPR 350", image: MenuImage },
      { name: "Cherry Macarons", price: "NPR 280", image: MenuImage },
      { name: "Blossom Cupcake", price: "NPR 220", image: MenuImage},
    ],
  },
  {
    id: 3,
    category: "Main Courses",
    icon:Utensils, 
    items: [
      { name: "Teriyaki Chicken Rice Bowl", price: "NPR 500", image: MenuImage},
      { name: "Blossom Sushi Roll", price: "NPR 600", image: MenuImage},
      { name: "Cherry Blossom Ramen", price: "NPR 550", image: MenuImage },
    ],
  },
];


//Specials

export const specials = [
  {
    id: 1,
    name: "Blossom Latte",
    description: "A creamy latte infused with cherry blossom essence.",
    price: "NPR 350",
    icon: Coffee 
  },
  {
    id: 2,
    name: "Sakura Delight Cake",
    description: "A fluffy cake with a hint of cherry and vanilla.",
    price: "NPR 450",
    icon :Cake 
  },
  {
    id: 3,
    name: "Blossom Sparkle Tea",
    description: "A refreshing iced tea with floral cherry notes.",
    price: "NPR 300",
    icon:Sparkles 
  },
  {
    id: 4,
    name: "Cherry Blossom Ice Cream",
    description: "A delightful cherry-flavored ice cream with a creamy texture.",
    price: "NPR 400",
    icon: IceCream 
  },
  {
    id: 5,
    name: "Butter Blossom Cookies",
    description: "Crunchy cookies infused with cherry blossom essence.",
    price: "NPR 250",
    icon: Cookie 
  },
  {
    id: 6,
    name: "Sakura Red Wine",
    description: "A rich red wine with a subtle cherry blossom aroma.",
    price: "NPR 800",
    icon :Wine 
  },
];



//Form Inputa
export interface FormInputs {
  name: string;
  email: string;
  message: string;
}



//sidebar menus

export const menus: Record<string, { name: string; path: string }[]> = {

  admin: [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Users", path: "/admin/users" },
    { name: "Settings", path: "/admin/settings" },
  ],
  staff: [
    { name: "Dashboard", path: "/staff/dashboard" },
    { name: "Orders", path: "/staff/orders" },
  ],
  customer: [
    { name: "Home", path: "/" },
    { name: "Orders", path: "/customer/orders" },
    { name: "Profile", path: "/customer/profile" },
  ],
};


export interface SidebarProps {
  role: "admin" | "staff" | "customer";
}


//Layout Props
  export interface LayoutProps {
    children: React.ReactNode;
    role: "admin" | "staff" | "customer";
  }
