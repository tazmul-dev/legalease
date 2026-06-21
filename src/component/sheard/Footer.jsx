"use client";

import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";


export default function Footer() {
    return (
        <footer className="bg-slate-950 text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-14">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                                L
                            </div>

                            <h2 className="text-2xl font-bold text-white">
                                Law<span className="text-blue-500">Hire</span>
                            </h2>
                        </div>

                        <p className="text-sm leading-6 text-gray-400">
                            Connect with trusted lawyers and legal professionals.
                            Find the right legal expert for your needs anytime,
                            anywhere.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-blue-400"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="hover:text-blue-400"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="hover:text-blue-400"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Newsletter
                        </h3>

                        <p className="mb-4 text-sm text-gray-400">
                            Subscribe to receive legal tips and platform updates.
                        </p>

                        <div className="space-y-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                variant="bordered"
                            />

                            <Button color="primary" className="w-full">
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Follow Us
                        </h3>

                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
                            >
                                <BiLogoFacebook />
                            </a>

                            <a
                                href="#"
                                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
                            >
                                <BiLogoTwitter />
                            </a>

                            <a
                                href="#"
                                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
                            >
                                <BiLogoLinkedin />
                            </a>

                            <a
                                href="#"
                                className="rounded-lg bg-slate-800 p-3 transition hover:bg-blue-600"
                            >
                                <BiLogoInstagram />
                            </a>
                        </div>

                        <p className="mt-4 text-sm text-gray-400">
                            Follow us for legal insights and platform updates.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} LawHire. All rights reserved.
                </div>
            </div>
        </footer>
    );
}