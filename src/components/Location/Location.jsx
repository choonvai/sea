import React from "react";

const Location = () => {
  return (
    <>
      <section data-aos="fade-up" className="container my-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map Section */}
          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7116.040113933064!2d83.97168138953894!3d26.90285855661167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39938d631905f7c1%3A0x189dbadf0b42da46!2sNew%20Mobile%20World!5e0!3m2!1sen!2sin!4v1700902186385!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>

          {/* Information Section */}
          <div className="flex flex-col space-y-6">
            <div className="info-item">
              <h3 className="text-lg font-bold">Bangkok Head Office</h3>
              <p>
                88-92, 8th Fl., Payathai Plaza, 128 Phyathai Rd., Rajthavee, Phyathai, Bangkok 10400, Thailand
              </p>
              <p>Tel: +66 2 216 5783-93, +66 2 216 5934-36</p>
              <p>Fax: +66 2 216 5757-8</p>
            </div>

            <div className="info-item">
              <h3 className="text-lg font-bold">Chiang Mai Office</h3>
              <p>
                2/3 Prachasampan Rd., Chang Klaan, Amphur Muang, Chiang Mai 50100, Thailand
              </p>
              <p>Tel: +66 5 327 1441-3</p>
              <p>Fax: +66 5 327 1401</p>
            </div>

            <div className="info-item">
              <h3 className="text-lg font-bold">Phuket Office</h3>
              <p>
                95/4 Phuket Rd., Taladyai, Amphur Muang, Phuket 83000, Thailand
              </p>
              <p>Tel: +66 7 621 8886, +66 7 621 8417-8</p>
              <p>Fax: +66 7 621 6979</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
