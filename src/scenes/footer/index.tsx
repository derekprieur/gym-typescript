import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='bg-primary-100 py-16'>
            <div className='justify-center mx-auto w-5/6 gap-16 md:flex'>
                <div className='mt-16 basis-1/2 md:mt-0'>
                    <img src={Logo} alt="logo" />
                    <p className='my-5'>Join us now and discover the many cool and unique benefits of being a part of our gym. We can't wait to see you sweat!</p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Links</h4>
                    <p className='my-5'>Available Memberships</p>
                    <p className='my-5'>Class Schedules</p>
                    <p>Services Information</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className='font-bold'>Contact Us</h4>
                    <p className='my-5'>123 Maple Street Anytown, USA 12345</p>
                    <p>(333) 444-5555</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer