import story from "/story.svg";

export default function OurStory() {
  return (
    <div className="flex gap-8 justify-between items-center max-w-5xl mx-auto px-4 py-8">
      <img src={story} alt="story" className="size-32" />
      <section>
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 dark:text-gray-300 font-semibold leading-relaxed">
          Founded with a passion for truth and storytelling, our blog began as a
          small voice in a crowded digital world. Over time, we've grown into a
          trusted space where stories matter — from local insights to global
          events. Whether it's in-depth analysis, personal perspectives, or
          breaking headlines, we’re here to inform, inspire, and spark
          thoughtful conversations. Thank you for being part of our journey.
        </p>
      </section>
    </div>
  );
}
