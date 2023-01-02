import { ClassType, SelectedPage } from "@/shared/types"
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Class from "./Class"

const classes: Array<ClassType> = [
    {
        name: 'Weight Training Classes',
        description: `You'll build muscle tone, increase your metabolism, and improve your strength and endurance.Whether you're a beginner or an experienced lifter, our weight training class has something for everyone. Join us and take the first step towards your fitness goals!`,
        image: image1,
    },
    {
        name: 'Yoga Classes',
        description: `Our yoga class is a great way to reduce stress, increase flexibility, and find inner peace. Come and discover the many benefits of yoga for yourself!`,
        image: image2,
    },
    {
        name: 'Ab Core Classes',
        description: `Whether you're a beginner or an experienced fitness enthusiast, our ab class has something for everyone. Come and discover the many benefits of a strong, toned core!`,
        image: image3,
    },
    {
        name: 'Adventure Classes',
        description: `This class is a great way to get out of your comfort zone, build confidence, and have fun while getting a great workout. No prior experience is necessary – just bring your sense of adventure and a willingness to try new things. Come and discover the thrill of adventure with us! `,
        image: image4,
    },
    {
        name: 'Fitness Classes',
        description: `You'll get a great workout, burn calories, and have fun in a supportive and encouraging group setting. Whether you're a beginner or an experienced fitness enthusiast, our fitness class has something for everyone. Come and see for yourself the many benefits of regular exercise! `,
        image: image5,
    },
    {
        name: 'Training Classes',
        description: `Our training class is a great way to take your fitness to the next level and achieve your full potential. Come and see for yourself the many benefits of personalized training!`,
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div className="mx-auto w-5/6" initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5 ">From yoga and Pilates to high-energy dance workouts like Zumba and kickboxing, we have something for everyone. We also offer spin classes to improve cardiovascular endurance, strength training to build muscle, and HIIT to boost metabolism. Our barre and strength training classes focus on flexibility, stability, and body alignment, while our martial arts-inspired kickboxing class helps to improve coordination and agility. No matter which class you choose, you'll be sure to find a challenging and enjoyable workout that helps you reach your fitness goals.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses