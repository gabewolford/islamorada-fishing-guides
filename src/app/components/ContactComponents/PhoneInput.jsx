import { useState } from "react";

export default function PhoneInput() {
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const formatPhoneNumber = (input) => {
        const phoneNumber = input.replace(/\D/g, '');
        let formattedPhoneNumber = '';

        if (phoneNumber.length <= 3) {
            formattedPhoneNumber = phoneNumber;
        } else if (phoneNumber.length <= 6) {
            formattedPhoneNumber = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3);
        } else if (phoneNumber.length <= 10) {
            formattedPhoneNumber = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6);
        }

        setPhoneNumber(formattedPhoneNumber);
    };

    const handleInputChange = (e) => {
        formatPhoneNumber(e.target.value);
    };

  
    return (
      <div className="col-span-2 md:col-span-1">
        <label className="text-xs">Phone <span>*</span></label>
        <input
          type="tel"
          name="user_phone"
          className="border-b-2 border-cyan-666 rounded-none p-1 w-full"
          placeholder="XXX-XXX-XXXX"
          value={phoneNumber}
          onChange={handleInputChange}
          maxLength={12}
          required
        />
      </div>
    );
  }
