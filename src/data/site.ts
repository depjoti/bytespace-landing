export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

export const partnerLogos = [
  "/images/logos/logo-1.svg",
  "/images/logos/logo-2.svg",
  "/images/logos/logo-3.svg",
  "/images/logos/logo-4.svg",
  "/images/logos/logo-5.svg",
];

export const footerColumns: NavLink[][] = [
  [
    { label: "Featured Courses", href: "/#courses" },
    { label: "Featured Categories", href: "/#categories" },
    { label: "Business", href: "/#categories" },
    { label: "IT", href: "/#categories" },
    { label: "Design", href: "/#categories" },
  ],
  [
    { label: "Development", href: "/#categories" },
    { label: "Marketing", href: "/#categories" },
    { label: "Photography", href: "/#categories" },
    { label: "Finance", href: "/#categories" },
    { label: "Sport", href: "/#categories" },
  ],
  [
    { label: "Become a Creator", href: "/register" },
    { label: "Affiliate Program", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Help", href: "#" },
    { label: "About", href: "#" },
  ],
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies Settings", href: "#" },
];
