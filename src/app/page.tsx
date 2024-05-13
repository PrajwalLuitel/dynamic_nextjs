export default function Home() {
  return (
    <div className="bg-gray-100">
      <nav className="bg-teal-700 text-white text-center py-4">
        <div className="text-3xl font-bold">Sunset</div>
      </nav>

      <img
        className="w-1/5 h-1/3 mx-auto mt-4 rounded-md shadow-md"
        src="data:image/jpeg;base64,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"
        alt="Sunset Banner"
      />

      <div className="p-8 w-3/4 mx-auto text-justify mb-20">
        <p>
          The sunset is a natural phenomenon that occurs daily as the sun moves
          below the horizon, marking the end of daylight. It's a visually
          stunning event where the sky often transforms into a palette of
          vibrant colors ranging from warm oranges and reds to soft pinks and
          purples. The exact appearance of a sunset can vary depending on
          factors such as atmospheric conditions, pollution levels, and
          geographical location. As the sun descends, its light passes through a
          thicker layer of the Earth's atmosphere, causing the shorter blue
          wavelengths to scatter while the longer red and orange wavelengths
          remain prominent. This scattering of light is what creates the
          spectacular array of colors that we associate with sunsets. Beyond its
          visual appeal, the sunset holds symbolic significance for many
          cultures and individuals. It's often viewed as a moment of reflection
          and transition, marking the conclusion of one day and the anticipation
          of a new one. Sunsets can evoke feelings of awe, tranquility, and
          appreciation for the natural world, prompting people to pause and
          admire the beauty of the fleeting moment. Photographers, artists, and
          poets alike have long been inspired by the enchanting beauty of
          sunsets, capturing their essence in various forms of art and
          literature. Whether witnessed in solitude or shared with loved ones,
          the sunset remains a timeless spectacle that continues to captivate
          and inspire people around the globe.
        </p>
      </div>

      <footer className="bg-teal-700 text-white text-center py-4 fixed bottom-0 w-full">
        <p>Thank you for Visiting!!</p>
      </footer>
    </div>
  );
}
