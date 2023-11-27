import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NormalUserLogin from './NormalUserLogin/NormalUserLogin';
import SurveyorLogin from './SurveyorLogin/SurveyorLogin';


const Login = () => {


    return (
        <div className='w-[600px] mx-auto pt-[132px] pb-[88px]'>
            <Tabs>
                <TabList>
                    <Tab><h1 className='text-purple-950 font-bold'>Login As User</h1></Tab>
                    <Tab><h1 className='text-purple-950 font-bold'>Login As Surveyor</h1></Tab>
                </TabList>

                <div className='py-[50px]'>
                    <TabPanel>
                        <NormalUserLogin></NormalUserLogin>
                    </TabPanel>
                    <TabPanel>
                        <SurveyorLogin></SurveyorLogin>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}
export default Login;