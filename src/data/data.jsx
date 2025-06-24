import { CiStar } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoGitCompareOutline } from "react-icons/io5";

import { FaAngleDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiLogoWhatsapp } from "react-icons/bi";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa6";


export const user_actions = [

    {
        icon:<CiStar className="text-[var(--main-color)] w-[1.7rem] h-[1.7rem] stroke-[0.1]" />,
        topText:"items",
       bottomText:"wishlist",
    },
    {
        icon:<HiOutlineShoppingCart className="text-[var(--main-color)] w-[1.7rem] h-[1.7rem] stroke-[1.2]" />,
        topText:"items",
       bottomText:"cart",
    },
    {
        icon:<IoGitCompareOutline className="text-[var(--main-color)] w-[1.6rem] h-[1.6rem] stroke-[1.2]" />,
        topText:"items",
       bottomText:"compare",
    },
      
]
export const nav = ['home', 'shop', 'about us', 'contact us', 'faq']
export const bannerImages = ["/assets/hero-1.png", "/assets/hero-2.png", "/assets/hero-3.png"]
export const categoryColors = [
    '#e1fcf2', // Mint Cream
    '#fbf9e4', // Buttercream
    '#fef1f1', // Pastel Pink
    '#f4f1fe', // Lavender Mist
];
export const feature = [
    {
        title:"Free Shipping",
        img:"/assets/freeShipping.png",
        description:"Free shipping on all Us order or above $200"

    },
    {
        title:"24x7 Support",
        img:"/assets/Support.png",
        description:"Contact us 24 hours a day, 7 days a week"

    },
    {
        title:"30 Days Return",
        img:"/assets/return.png",
        description:"Simply return it within 30 days for an exchange"

    },
    {
        title:"Payment Secure",
        img:"/assets/payment.png",
        description:"Contact us 24 hours a day, 7 days a week"

    },
]
export const vendorsData = [
{
    name: "Mario Fashion Pvt. Ltd.",
    img: "/assets/vendor1.jpg",
    icon:"/assets/vendorIcon1.jpg",
    fruits: 5,
    vegetables: 30,
    snack: 9,
    sales:587
 },
 {
     name: "Eelna Fashion Pvt. Ltd.",
     img: "/assets/vendor2.jpg",
     icon:"/assets/vendorIcon2.jpg",
    fruits: 8,
    vegetables: 15,
    snack: 4,
    sales:428
},   
{
    name: "Mario Fashion Pvt. Ltd.",
    img: "/assets/vendor3.jpg",
    icon:"/assets/vendorIcon3.jpg",
    fruits: 16,
    vegetables: 42,
    snack: 18,
    sales:1024
},   
 {
      name: "Maria Fashion Pvt. Ltd.",
     img: "/assets/vendor4.jpg",
     icon:"/assets/vendorIcon4.jpg",
        fruits: 2,
        vegetables: 10,
        snack: 3,
        sales:210
    },   
]
export const teamWork = [
    {
        name: "Isabella Oliver",
        img: "/assets/teamWork1.jpg",
        position:"Manager",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit id non quaerat autem minus ut eligendi, inventore in perferendis odit dignissimos unde vero modi commodi sequi repellendus saepe! Est",
    },
    {
        name: "Nikki Albart",
        img: "/assets/teamWork2.jpg",
        position:"Team Leader",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit id non quaerat autem minus ut eligendi, inventore in perferendis odit dignissimos unde vero modi commodi sequi repellendus saepe! Est",
    },
    {
        name: "Stephen Smith",
        img: "/assets/teamWork3.jpg",
        position:"Co Founder",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At impedit id non quaerat autem minus ut eligendi, inventore in perferendis odit dignissimos unde",
    },

]
export const blogs = [
    {
        img: "/assets/blog1.jpg",
        title: "Marketing Guide: 5 Steps to Success.",
        date:"June 30,2024",
    },
    {
        img: "/assets/blog2.jpg",
        title: "Best way to solve business deal issue.",
        date:"May 10,2023",
    },
    {
        img: "/assets/blog3.jpg",
        title: "Business ideas to grow your business.",
        date:"Jan 10,2022",
    },
    {
        img: "/assets/blog4.jpg",
        title: "31 customer stats know in 2020.",
        date:"Feb 12,2022",
    },
]
export const instagramImages = [
    {
        img: "/assets/insta1.jpg"
    },
    {
        img: "/assets/insta2.jpg"
    },
    {
        img: "/assets/insta3.jpg"
    },
    {
        img: "/assets/insta4.jpg"
    },
    {
        img: "/assets/insta5.jpg"
    },
   
]
export const dataFooter =
[
    {
        title: "category",
        links:['fruits','vegetables','cold drinks','bakery']
    },
    {
        title: "pages",
        links:['about','contact','shop']
    },
    {
            title: "account",
            links:['sign in','view cart']
    },

    ]

export const contact_info =
    [
        {
            title: '971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101',
            icon:<CiLocationOn className="stroke-[1.1]" />
        },
        {
            title: '+00 9876543210',
            icon:<BiLogoWhatsapp className="stroke-[.5]" />
        },
        {
            title: 'example@email.com',
            icon:<HiOutlineEnvelope className="stroke-[2]" />
        }

    ]
export const social_media_icons=[<BiLogoFacebook className='text-[white] text-[1.3rem]' />,<FaTwitter className='text-[white] text-[1.3rem]'/>,<TiSocialLinkedin className='text-[white] text-[1.3rem]'/>,<PiInstagramLogoBold  className='text-[white] text-[1.3rem]'/>]