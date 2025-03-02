import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
  

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title & Subtitle */}
        <h2 className="text-lg font-semibold text-gray-900">Find A Rotation</h2>
        <p className="text-sm text-gray-700">
          Helping medical students & training future clinicians!
        </p>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-4 mt-4 mb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <a href="#" className="text-blue-600 hover:underline">
              About
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              FAQ
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Contact
            </a>
          </div>

          {/* Column 2 - Dropdown Placeholder */}
          <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={"bg-gray-100"}>For Students</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Find a Rotation</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Guide to US Clinical Experience (USCE) by Specialty</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Student Articles</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>


          {/* Column 3 - Dropdown Placeholder */}
          <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={"bg-gray-100"}>For Preceptors</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>List your site for free</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Guide to Teaching Clinical Skills to Medical Students</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Preceptor Articles</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
