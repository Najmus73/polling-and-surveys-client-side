
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterSection() {
    return (
        <Footer container style={{ backgroundColor: '#612875' }}>
            <div className="w-[1440px] mx-auto">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
  
                        <div className='flex gap-1 text-white mt-[16px]'>
                            <h1 className='font-bold text-2xl '>SURVEY</h1>
                            <h1 className='font-bold text-2xl rounded-s-full'>.</h1>
                        </div>               

                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col className='text-white'>
                                <Footer.Link href="#">Flowbite</Footer.Link>
                                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col className='text-white'>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col className='text-white'>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright className='text-white' href="#" by="Flowbite™" year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" className='text-white' icon={BsFacebook} />
                        <Footer.Icon href="#" className='text-white' icon={BsInstagram} />
                        <Footer.Icon href="#" className='text-white' icon={BsTwitter} />
                        <Footer.Icon href="#" className='text-white' icon={BsGithub} />
                        <Footer.Icon href="#" className='text-white' icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
export default FooterSection;