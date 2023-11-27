import { Tab } from '@headlessui/react'
import NormalUser from './NormalUser/normalUser';
import Surveyor from './Surveyor/Surveyor';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Register() {

    return (
        <div className='w-[600px] mx-auto pt-[132px] pb-[88px]'>
            <Tab.Group>
                <Tab.List className='flex'>
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                            'ring-white/60 ring-offset-2  focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white text-blue-700 shadow-xl shadow-purple-950'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }><h1 className='text-purple-950 font-bold'>Sign Up As User</h1></Tab>
                    <Tab className={({ selected }) =>
                        classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                            'ring-white/60 ring-offset-2 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white text-blue-700 shadow-xl shadow-purple-950'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )
                    }><h1 className='text-purple-950 font-bold'>Sign Up As Surveyor</h1></Tab>
                </Tab.List>

                <div className='py-[50px]'>
                    <Tab.Panels>
                        <Tab.Panel> <NormalUser></NormalUser></Tab.Panel>
                        <Tab.Panel><Surveyor></Surveyor></Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    )
}
export default Register;