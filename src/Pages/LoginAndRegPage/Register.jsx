import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NormalUser from './NormalUser/normalUser';
import Surveyor from './Surveyor/Surveyor';


const Register = () => {


    return (
        <div className='w-[600px] mx-auto pt-[132px] pb-[88px]'>
            <Tabs>
                <TabList>
                    <Tab><h1 className='text-purple-950 font-bold'>Sign Up As User</h1></Tab>
                    <Tab><h1 className='text-purple-950 font-bold'>Sign Up As Surveyor</h1></Tab>
                </TabList>

                <div className='py-[50px]'>
                    <TabPanel>
                        <NormalUser></NormalUser>
                    </TabPanel>
                    <TabPanel>
                        <Surveyor></Surveyor>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}
export default Register;