'useClient'

import Image from "next/image";
import '../../../styles/global.css';

export default function LoginFormLayout({ children }: { children: React.ReactNode }) {
    const imageUrl = "/images/login-background.png"

    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-6 h-screen w-full ">
            {/* Sidebar (2/3 on desktop) */}
            <div className="hidden md:block lg:col-span-4 md:col-span-3 relative  bg-amber-900">
                <Image
                    className="!relative "
                    src={imageUrl}
                    alt="Login Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
            </div>

            {/* Main Content (1/3 on desktop) */}
            <div className="lg:col-span-2 md:col-span-3 bg-[#181818]  mx-20 ">
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="h-[80%] flex flex-col  w-[80%] sm:w-[70%]">
                        {children}
                    </div>
                </div>

            </div>
        </div>

    );
} 