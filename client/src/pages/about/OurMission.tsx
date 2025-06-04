import mission from "/mission.svg";

export default function OurMission() {
  return (
    <div className="flex gap-8 justify-between items-center max-w-5xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 font-semibold leading-relaxed">
          Our mission is to deliver honest, thoughtful, and impactful journalism
          that empowers our readers. We strive to create a platform where
          diverse voices are heard, truth is valued, and knowledge is shared.
          Through our commitment to accuracy, curiosity, and community, we aim
          to foster a more informed and connected world.
        </p>
      </section>
      <img src={mission} alt="story" className="size-32" />
    </div>
  );
}
