'use client'

import { useRef } from "react";
import { redirect } from 'next/navigation'
import PhoneInput from "../ContactComponents/PhoneInput"
import emailjs from "@emailjs/browser";

export default function ContactForm() { 
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
    month = `0${month}`;
    }
    if (day < 10) {
    day = `0${day}`;
    }

    const formattedDate = `${year}-${month}-${day}`;

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_2ctwozo","contact_form", form.current, 'GLjJJKxGwW-an5Tep')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset()
        redirect('/contact/confirmation');
      };

    return (
        <div className="mx-auto w-full md:w-3/4 lg:w-1/2">
            <p className="mb-6 text-center">To inquire about booking a charter, please fill out the form below. If you prefer to give us a call, our number is <span className="bold">305-304-7484</span>. Thank you!</p>
            <h6 className="flex justify-end text-xs">* required</h6>
            <form ref={form} onSubmit={sendEmail} className="grid gap-6 grid-cols-1 md:grid-cols-2">

                <div className="col-span-2">
                    <label className="text-xs">Name <span>*</span></label>
                    <input 
                        type="text"
                        name="user_name" 
                        className="border-b-2 border-cyan-666 rounded-none p-1 w-full"
                        required
                    />
                </div>
    
                <div className="col-span-2">
                    <label className="text-xs">Email <span>*</span></label>
                    <input 
                        type="email"
                        name="user_email"
                        className="border-b-2 border-cyan-666 rounded-none p-1 w-full"
                        required
                    />
                </div>

                <PhoneInput />

                <div className="col-span-2 md:col-span-1">
                    <label className="text-xs">Trip Date</label><br/>
                    <input 
                        type="date" 
                        name="trip_date"
                        className="border-b-2 border-cyan-666 rounded-none p-1 w-full"
                        min={formattedDate}
                    />
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="text-xs">Trip Type <span>*</span></label><br/>
                    <select 
                        name="trip_type" 
                        className="border-b-2 border-cyan-666 rounded-none p-1 w-full"
                        required>
                            <option value="Not Selected">Select One</option>
                            <option value="Backcountry">Backcountry & Inshore</option>
                            <option value="Offshore">Reef & Offshore</option>
                            <option value="Eco/Enviro">Eco & Enviro</option>
                            <option value="Custom">Custom</option>
                            <option value="Not Sure">Not Sure</option>
                    </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label className="text-xs">Group Size <span>*</span></label>
                    <select 
                        name="group_size" 
                        className="border-b-2 border-cyan-666 rounded-none p-1 w-full"
                        >
                            <option value="Not Selected">Select One</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10+">10+</option>
                    </select>
                </div>

                <div className="col-span-2">
                    <label className="text-xs">Message <span>*</span></label>
                    <textarea 
                        name="user_message" 
                        className="border-2 border-cyan-666 rounded-none p-1 min-h-[150px] h-max w-full mt-1"
                        maxLength={500}
                        placeholder="Your message here"
                        required
                    />
                </div>

                <div className="flex justify-end col-span-2">
                    <button
                        type="submit" 
                        value="Send" 
                        className="text-white medium bg-cyan-666 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5"
                        >Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}