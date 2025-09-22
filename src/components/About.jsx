import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading>About Us</SectionHeading>
        <div className="mt-4 space-y-4">
          <p className="text-white/80 leading-relaxed font-medium text-justify text-md">
            The upcoming edition of Robofiesta promises to be bigger and more
            exciting than ever, with a diverse lineup of technical and auxiliary
            events designed to challenge, inspire, and entertain participants. On
            the technical side, highlights include the Hardware Project Expo, Robo
            Race, Circuit Design, Code Battle, Build Your Web, and Bug Squash,
            which will test creativity, technical knowledge, and programming
            expertise.
          </p>
          
          <p className="text-white/80 leading-relaxed font-medium text-justify text-md">
            Events such as the Great Tech Quest, Capture the Flag, and
            Save the Egg add a fun and competitive edge, while entrepreneurial and
            communication-focused contests like Pitch in the Box and Sell Me This
            Pen provide opportunities for students to showcase their innovative
            thinking and persuasive skills. This year also brings exciting new
            additions in the auxiliary category, including Logo Design, Treasure
            Hunt, Anime Quiz, and Squid Games, alongside the crowd-favorite IPL
            Auction.
          </p>
          
          <p className="text-white/80 leading-relaxed font-medium text-justify text-md">
            Gaming enthusiasts can look forward to thrilling E-Games
            tournaments featuring Valorant, BGMI, Free Fire, and FIFA, ensuring
            high-energy competition and entertainment throughout the fest. With
            its blend of innovation, skill-building, and fun, Robofiesta is set to
            offer participants an unforgettable experience that fosters teamwork,
            creativity, and community spirit.
          </p>
        </div>
      </div>
    </section>
  );
}
