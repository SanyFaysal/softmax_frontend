import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function JoinUs() {
    return (
        <div className="lg:mx-16  my-16 py-12 px-8 bg-blue-600 text-white flex lg:flex-row flex-col lg:justify-around justify-center items-center gap-5 rounded relative">
            <Image src={'/assets/vectors/cta_shape01.svg'} width={60} height={100} alt="vector" className="absolute left-0 top-0" />
            <Image src={'/assets/vectors/cta_shape01.svg'} width={60} height={100} alt="vector" className="absolute right-0 bottom-0" />
            <div>
                <h1 className="text-2xl font-semibold lg:text-start text-center">Join Us & Spread <br />
                    Experiences
                </h1>
            </div>
            <div className="lg:text-start text-center">
                Elevate minds, ignite knowledge; as an instructor, guide others to
                <br />
                illuminate the path of learning.
            </div>
            <div>
                <Link href={'/become-instructor'} className="px-4 py-3 flex items-center gap-2 bg-white font-semibold text-blue-700 rounded">Become an Instructor <BsArrowRight /></Link>
            </div>
        </div>
    )
}
