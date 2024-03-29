import { accessToken } from "@/constants/storageKey";
import { useEnrollCourseMutation } from "@/redux/api/courseApi";
import { useAppSelector } from "@/redux/hooks";
import { IEnrollStudent } from "@/types/studentTypes";
import { getFromLocalStorage } from "@/utils/local-storage";
import { message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CourseCard({ course }: any) {
    const router = useRouter()
    const { user } = useAppSelector(state => state.auth)
    const token = getFromLocalStorage(accessToken)
    const [enrollCourse] = useEnrollCourseMutation()

    const handleEnrollCourse = async (courseId: string) => {
        try {
            const data: IEnrollStudent = {
                student: user?.id,
                course: courseId,
                status: 'enrolled'
            }
            const res: any = await enrollCourse({ token, data }).unwrap()
            if (res?.id) {
                message.success('Enrolled success');
                router.push('/dashboard/student/my-courses')
            }
        } catch (error) {

        }
    }
    return (
        <div className="bg-gray-100 rounded-lg  ">
            <div className="">
                <Image src={'/assets/vectors/blank_1.webp'} width={200} height={50} alt="course img" className=" mx-auto h-[80%]  rounded-lg" />
            </div>
            <div className="px-3 py-2 mt-[-25px] z-[999]">
                <h1 className="text-sm font-semibold  min-h-10">{course?.title}</h1>
                <div className="flex justify-end">
                    <button onClick={() => handleEnrollCourse(course?.id)} className="bg-blue-500 text-white  duration-300 px-3 py-1 rounded ">Enroll</button>
                </div>
            </div>
        </div>
    )
}
