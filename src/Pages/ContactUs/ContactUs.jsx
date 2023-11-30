const ContactUs = () => {
    return (
        <div className="w-[1050px] pt-[188px] mx-auto pb-[177px] flex gap-[100px]">
            <div className="pt-[50px]">
                <h1 className="text-2xl font-bold pb-[10px]">Get in Touch</h1>
                <div className="flex gap-5 pb-6" >
                    <input className="pl-[10px] py-1.5 px-[100px] rounded-md" placeholder="Name" style={{ backgroundColor: "#F1F1F1" }} type="text" />
                    <input className="pl-[10px] py-1.5 px-[100px] rounded-md" placeholder="Phone" style={{ backgroundColor: "#F1F1F1" }} type="text" />
                </div>
                <div className="flex gap-5 pb-6">
                    <input className="pl-[10px] py-1.5 px-[100px] rounded-md" placeholder="Email" style={{ backgroundColor: "#F1F1F1" }} type="text" />
                    <input className="pl-[10px] py-1.5 px-[100px] rounded-md" placeholder="Subject" style={{ backgroundColor: "#F1F1F1" }} type="text" />
                </div>

                <div className="pb-[20px]">
                    <input className="pl-[10px] py-[60px] px-[412px] rounded-md" placeholder="Message" style={{ backgroundColor: "#F1F1F1" }} type="text" />
                </div>
                <button className="btn bg-purple-950 text-white">Submit Now</button>

            </div>


            <div className="pt-[50px]">
                <h1 className="text-2xl font-bold pb-9">Contact Info</h1>
                <div className="pb-3">
                    <h1><span className="text-2xl">Address no.</span> 32, Breaking Street,<small>2nd cros, Newyork ,USA 10002</small></h1>
                </div>
                <div className="pb-3">
                    <h1><span className="text-2xl">Call Us</span> <small>+321 4567 89 012 & 79 023</small></h1>
                </div>
                <div className="pb-3">
                    <h1><span className="text-2xl">Mail Us</span> <small>Support@example.com</small></h1>
                </div>
                <div className="pb-3">
                    <h1><span className="text-2xl">Opening Time.</span> <small>Mon - Sat: 09.00am to 18.00pm</small></h1>
                </div>
            </div>

        </div>
    )
}
export default ContactUs;