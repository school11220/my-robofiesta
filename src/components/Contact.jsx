import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

export default function Contact() {
  return (
    <section id="contact" className="section py-12 md:py-10">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading className="mb-6">Contact</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-5">
            <div className="text-white/80 space-y-3">
              <p>
                Email:{" "}
                <a
                  className="text-[var(--neon)]"
                  href="mailto:robofiesta.rvitm@rvei.edu.in"
                >
                  robofiesta.rvitm@rvei.edu.in
                </a>
              </p>
              
              <div className="border-t border-white/10 pt-3">
                <h3 className="text-[var(--neon)] font-semibold mb-2">Contact Team</h3>
                
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-white">Rishi Chaudhari (Fest Head)</p>
                    <a 
                      className="text-[var(--neon)] text-sm"
                      href="tel:+918085506949"
                    >
                      +91 8085506949
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-medium text-white">Ayush Kumar</p>
                    <a 
                      className="text-[var(--neon)] text-sm"
                      href="tel:+916203275940"
                    >
                      +91 6203275940
                    </a>
                  </div>
                  
                  <div>
                    <p className="font-medium text-white">Prarthana Nagol</p>
                    <a 
                      className="text-[var(--neon)] text-sm"
                      href="tel:+919113538718"
                    >
                      +91 9113538718
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4168.089362249997!2d77.57329667532095!3d12.872865517034775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ab2ff6b8611%3A0x8417272c1b6f4d24!2sRV%20INSTITUTE%20OF%20TECHNOLOGY%20AND%20MANAGEMENT%20%C2%AE!5e1!3m2!1sen!2sin!4v1758564020892!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius:20 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Venue Map"
          />
        </div>
      </div>
    </section>
  );
}
