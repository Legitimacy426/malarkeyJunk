'use client'

import Link from "next/link"
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="w-full py-12 bg-[#2F4F2F] text-white scroll-mt-20">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Malarkey Junk Removal</h3>
            <p className="text-sm mb-4">Turning your <span className="underlined-pun">trash</span> into our treasure, one chat at a time.</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <p>123 Cleanup Street, Junkville, NY 10001</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <p>hello@malarkeyjunk.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#about" className="text-sm hover:text-[#CD853F] transition-colors duration-200">About Us (It&apos;s No <span className="underlined-pun">Rubbish</span>)</Link></li>
              <li><Link href="#services" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Services (We&apos;re <span className="underlined-pun">Garbage</span> Pros)</Link></li>
              <li><Link href="#contact" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Contact (Let&apos;s Talk <span className="underlined-pun">Trash</span>)</Link></li>
              <li><Link href="#" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Blog (Daily Dump)</Link></li>
              <li><Link href="#" className="text-sm hover:text-[#CD853F] transition-colors duration-200">FAQs (Got Questions?)</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Residential Cleanup</Link></li>
              <li><Link href="#" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Commercial Junk Removal</Link></li>
              <li><Link href="#" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Construction Debris</Link></li>
              <li><Link href="#" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Furniture Removal</Link></li>
              <li><Link href="#" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Appliance Disposal</Link></li>
              <li><Link href="#" className="text-sm hover:text-[#CD853F] transition-colors duration-200">Estate Cleanouts</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <p className="text-sm mb-4">Follow us for trashy content and daily tips on sustainable waste management!</p>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="text-white hover:text-[#CD853F] transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-[#CD853F] transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-[#CD853F] transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
            <div className="bg-[#8B4513] p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-sm">Mon-Fri: 7am - 8pm</p>
              <p className="text-sm">Sat-Sun: 8am - 6pm</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#CD853F]/20 text-center text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Malarkey Junk Removal. All rights reserved.</p>
          <p>We&apos;re serious about <span className="underlined-pun">junk</span>, but our puns are just for fun! Licensed and insured for your peace of mind.</p>
        </div>
      </div>
    </footer>
  )
}
