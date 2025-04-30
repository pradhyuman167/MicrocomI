
import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["123 Business Avenue", "Jaipur, Rajasthan 302001", "India"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 123-456-7890", "Mon-Fri from 9am to 6pm"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["hello@microcom.com", "support@microcom.com"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#a5b4fc] to-[#fda4af] bg-clip-text text-transparent">Get in Touch</h2>
        <p className="text-gray-400 text-lg">
          Let's discuss how we can help you achieve your goals.
        </p>
      </div>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <Card key={index} className="bg-[#141414] border-[#2A2A2A] hover:border-[#a5b4fc]/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#a5b4fc]/10 to-[#fda4af]/10">
                  {React.cloneElement(item.icon, { className: "w-6 h-6 text-[#a5b4fc]" })}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400">{detail}</p>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
