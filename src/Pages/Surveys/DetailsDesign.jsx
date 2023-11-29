
'use client';

import { Timeline } from 'flowbite-react';
import { useContext } from 'react';
import { HiCalendar } from 'react-icons/hi';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useProUser from '../Hooks/useProUser';

function DetailsDesign({ find }) {
    console.log(find);
    const {user} = useContext(AuthContext);
    const [proUser] = useProUser();
    const proUserFind = proUser.find(userPro => userPro.email === user.email)
    return (
        <form>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>Question No. 1</Timeline.Time>
                        <Timeline.Title>{find.question1}</Timeline.Title>
                        <Timeline.Body>
                            <input className='w-[300px]' type="text" name='Question1' />
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>Question No. 2</Timeline.Time>
                        <Timeline.Title>{find.question1}</Timeline.Title>
                        <Timeline.Body>
                            <input className='w-[300px]' type="text" name='Question1' />
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>Question No. 3</Timeline.Time>
                        <Timeline.Title>{find.question1}</Timeline.Title>
                        <Timeline.Body>
                            <input className='w-[300px]' type="text" name='Question1' />
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>Participant Email</Timeline.Time>
                        <Timeline.Title></Timeline.Title>
                        <Timeline.Body>
                            <input className='w-[300px]' type="text" name='email' defaultValue={user.email} readOnly/>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
               {
                proUserFind ? <>
                 <Timeline.Item>
                    <Timeline.Point icon={HiCalendar} />
                    <Timeline.Content>
                        <Timeline.Time>Comment</Timeline.Time>
                        <Timeline.Title></Timeline.Title>
                        <Timeline.Body>
                            <input className='w-[300px]' type="text" name='Question1' />
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                </>
                :
                <>
                <h1 className='text-center text-red-600 font-bold'>Only Pro User Can Comment in this Survey</h1>
                </>
               }

            </Timeline>
        </form>
    );
}
export default DetailsDesign;