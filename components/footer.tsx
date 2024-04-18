import Link from "next/link";
import { PiTiktokLogo } from "react-icons/pi";
import React from "react";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { IconType } from "react-icons/lib/cjs/iconBase";

const links: { href: string; icon: IconType }[] = [
  {
    href: "https://www.linkedin.com/company/monash-automation/",
    icon: FiLinkedin,
  },
  {
    href: "https://github.com/monash-automation",
    icon: FiGithub,
  },
  {
    href: "https://www.facebook.com/people/Monash-Automation/pfbid026XUKiXRYCwcPRtFsfkNYj3TcXynP4bRmYTL1K8RW9e3P8k5oAner2BP8jQToPMUFl/",
    icon: FiFacebook,
  },
  {
    href: "https://www.instagram.com/monashautomation",
    icon: FiInstagram,
  },
  {
    href: "https://www.youtube.com/channel/UC-A9u1wU4D13SND8eDFBQIQ",
    icon: FiYoutube,
  },
  {
    href: "https://www.tiktok.com/@monashautomation",
    icon: PiTiktokLogo,
  },
];

export default function Footer() {
  return (
    <footer className="py-20 text-center text-white">
      <div className="flex justify-center gap-4 mb-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <link.icon className="w-6 h-6" />
          </Link>
        ))}
      </div>
      <address>
        G.25 Building 60, Monash University Clayton campus, Australia
      </address>
      <p className="pt-1">Copyright © 2023 Monash Automation</p>
    </footer>
  );
}
