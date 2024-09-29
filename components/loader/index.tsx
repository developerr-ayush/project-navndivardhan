'use client'
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import logo from "@/public/image/nv-logo.gif";
import Image from "next/image";
export const Loader = () => {
    const loader = useRef<HTMLDivElement>(null);
    useEffect(() => {
        gsap.to(loader, {
            autoAlpha: 0,
            duration: 1,
            delay: 4,
            onComplete: () => {
                if (loader?.current?.style) {
                    loader.current.style.display = "none"
                }
            },
        });
    }, []);
    return (
        <div ref={loader} className="loader fixed inset-0 bg-white z-[21] flex items-center justify-center">
            <Image src={logo} alt="logo" className="w-40 lg:w-96 " />
        </div>
    );
};