import ActionButton from '@/shared/ActionButton'
import HText from '@/shared/HText'
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='w-6 h-6' />,
        title: 'State of the Art Facilities',
        description: 'The facilities are state of the art and are designed to help you achieve your fitness goals with ease.'
    },
    {
        icon: <UserGroupIcon className='w-6 h-6' />,
        title: "100's of Diverse Classes",
        description: 'Our classes are diverse and cater to all fitness levels. We have classes for all ages and abilities.'
    },
    {
        icon: <AcademicCapIcon className='w-6 h-6' />,
        title: 'Expert and Pro Trainers',
        description: 'From beginners to advanced, our trainers will help with your fitness goals and provide you with the best experience.'
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* header */}
                <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }} className='md:my-5 md:w-3/5'>
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className='my-5 text-sm'>We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
                </motion.div>
                {/* benefits */}
                <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} variants={container} className='md:flex items-center justify-between gap-8 mt-5'>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
                    ))}
                </motion.div>
                {/* graphics and description */}
                <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                    {/* graphic */}
                    <img className='mx-auto' src={BenefitsPageGraphic} alt="benefits-page-graphic" />
                    {/* description */}
                    <div>
                        {/* title */}
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'>
                                <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING <span className='text-primary-500'>FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* description */}
                        <motion.div initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
                            <p className='my-5'>Our gym is equipped with a wide range of cardio and strength training equipment, as well as a variety of group fitness classes. Whether you're looking to lose weight, build muscle, or just get in shape, we have something for everyone.</p>
                            <p className='mb-5'>In addition to our gym services, we also offer nutrition counseling and wellness coaching. Our team of experts can help you develop healthy habits and make lasting lifestyle changes.</p>
                        </motion.div>
                        {/* button */}
                        <div className='relative mt-16'>
                            <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits