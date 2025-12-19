"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardMetrics from '@/components/sections/hero/HeroBillboardMetrics';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TeamCardFour from '@/components/sections/team/TeamCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="smallSizeLargeTitles"
      background="noiseGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159702350-xj5bspxq.jpg"
          logoAlt="CARGAS Coffee Shop"
          brandName="CARGAS"
          button={{
            text: "Reserve Table",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardMetrics
          title="Exceptional Coffee Crafted Daily"
          description="Experience the finest specialty coffee blends, expertly prepared by our passionate baristas. Welcome to CARGAS - where quality meets perfection in every cup."
          tag="Premium Coffee"
          buttons={[
            {
              text: "Explore Menu",
              href: "#features"
            },
            {
              text: "Book a Visit",
              href: "#contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159704025-hvb8evqz.jpg"
          imageAlt="Premium specialty coffee cup"
          frameStyle="card"
          metricsLabel="Trusted by coffee enthusiasts across the region"
          metrics={[
            {
              id: "1",
              value: "98%",
              label: "Customer Satisfaction"
            },
            {
              id: "2",
              value: "15K+",
              label: "Regular Customers"
            },
            {
              id: "3",
              value: "7 Years",
              label: "Excellence in Service"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Our Specialty Coffee"
          description="Handpicked coffee selections prepared with precision and passion"
          tag="Featured Items"
          features={[
            {
              id: "01",
              title: "Single Origin Espresso",
              description: "Carefully selected beans from premium coffee regions, expertly roasted and pulled to perfection with rich, complex flavors",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159705388-64k8ciq3.jpg",
              imageAlt: "Professional espresso machine"
            },
            {
              id: "02",
              title: "Artisan Cold Brew",
              description: "Slow-steeped cold brew concentrate blended with fresh milk, delivering smooth and refreshing coffee experience year-round",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159706889-we7f7si6.jpg",
              imageAlt: "Roasted coffee beans"
            },
            {
              id: "03",
              title: "Signature Latte Art",
              description: "Hand-crafted latte with artistic foam designs, combining premium espresso with perfectly steamed milk for visual and taste appeal",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159708383-hzmilath.jpg",
              imageAlt: "Latte art coffee design"
            },
            {
              id: "04",
              title: "Specialty Seasonal Blends",
              description: "Limited edition coffee blends created seasonally using the finest beans from our trusted suppliers, available for a limited time only",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159706889-we7f7si6.jpg",
              imageAlt: "Premium coffee selection"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFour
          title="Meet Our Expert Baristas"
          description="Passionate coffee professionals dedicated to crafting your perfect cup"
          tag="Our Team"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          team={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Head Barista & Coffee Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159709516-hpbdczy7.jpg",
              imageAlt: "Marco Rossi, Head Barista"
            },
            {
              id: "2",
              name: "Sofia Delgado",
              role: "Latte Art Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159710814-k2jua7d3.jpg",
              imageAlt: "Sofia Delgado, Latte Art Specialist"
            },
            {
              id: "3",
              name: "James Chen",
              role: "Cold Brew Master",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159712369-72sas1fg.jpg",
              imageAlt: "James Chen, Cold Brew Master"
            },
            {
              id: "4",
              name: "Emma Wilson",
              role: "Espresso Technician",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159713947-bwyp0cxo.jpg",
              imageAlt: "Emma Wilson, Espresso Technician"
            },
            {
              id: "5",
              name: "Lucas Santos",
              role: "Blend Creator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159715226-ruqf90nq.jpg",
              imageAlt: "Lucas Santos, Blend Creator"
            },
            {
              id: "6",
              name: "Isabella Morgan",
              role: "Customer Experience Lead",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159716405-8inyzxvk.jpg",
              imageAlt: "Isabella Morgan, Customer Experience Lead"
            }
          ]}
          speed={35}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",
              name: "Michael Rodriguez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159717711-avru0cg3.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159718958-3pk0pfzp.jpg",
              imageAlt: "Sarah Thompson"
            },
            {
              id: "3",
              name: "David Kim",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159720266-ulp5hudq.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "4",
              name: "Jessica Brown",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159721910-dgl8v094.jpg",
              imageAlt: "Jessica Brown"
            },
            {
              id: "5",
              name: "Andrew Lopez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159717711-avru0cg3.jpg",
              imageAlt: "Andrew Lopez"
            },
            {
              id: "6",
              name: "Rachel Martinez",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159718958-3pk0pfzp.jpg",
              imageAlt: "Rachel Martinez"
            }
          ]}
          cardTitle="Over 15,000 customers have experienced the CARGAS difference in their daily coffee ritual"
          cardTag="Customer Testimonials"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table or Order Online"
          description="Get in touch with CARGAS Coffee Shop. We welcome reservations for groups and special occasions. Fill out the form below and we'll confirm your booking promptly."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your visit - party size, special requests, coffee preferences...",
            rows: 5,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159723366-e5earzme.jpg"
          imageAlt="CARGAS Coffee Shop Interior"
          mediaPosition="right"
          buttonText="Reserve Table"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766159702350-xj5bspxq.jpg"
          logoText="CARGAS"
          logoWidth={120}
          logoHeight={40}
          description="Premium specialty coffee crafted with passion and precision. From bean selection to the perfect cup, we deliver exceptional coffee experiences every single day."
          copyrightText="© 2025 CARGAS Coffee Shop. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                {
                  label: "Coffee Menu",
                  href: "features"
                },
                {
                  label: "Merchandise",
                  href: "shop"
                },
                {
                  label: "Gift Cards",
                  href: "gifts"
                },
                {
                  label: "Brewing Guides",
                  href: "guides"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About CARGAS",
                  href: "about"
                },
                {
                  label: "Our Story",
                  href: "story"
                },
                {
                  label: "Sustainability",
                  href: "sustainability"
                },
                {
                  label: "Careers",
                  href: "careers"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                },
                {
                  label: "Shipping Info",
                  href: "shipping"
                },
                {
                  label: "Terms of Service",
                  href: "terms"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com",
              ariaLabel: "YouTube"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}