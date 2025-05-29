import Card from "../islands/Card.tsx";

export default function Home() {
  return (
    <>
      <header class="row px-4 pt-5 pb-7 mx-auto background">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            src="/logo.svg"
            width="256"
            alt="The GDream Studio logo: the logo features a stylized design with the text 'GDREAM STUDIO'. The main visual element is a game controller, depicted in black and white, with a polar bear silhouette integrated into the controller. The polar bear appears to be standing on the bottom part of the controller. Above the controller, there are symbols representing a red cross and three red dots, which resemble the buttons on a game controller. The word 'GDREAM' is written in bold, black letters, while 'STUDIO' is written below it in smaller, red letters. The overall design is modern and playful, suggesting a connection to gaming or interactive media."
          />
          <h1 class="text-4xl font-bold mt-4 hidden">GDream Studio</h1>
          <h2 class="text-1xl font-bold mt-2 hidden">
            An independant video game studio
          </h2>
        </div>
      </header>

      <section class="row content px-4 py-8 mx-auto background-2">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <p class="text-4xl font-bold">Our games</p>

          <div class="grid grid-flow-row col-auto my-8">
            <Card
              title="It's about quests"
              description="Cooking... 🧑‍🍳"
              imgSrc="/kwest.jpg"
              tags={["Mobile", "World-wide"]}
            />

          </div>
        </div>
      </section>

      <footer class="row px-4 py-8 mx-auto background">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <p class="text-xs font-bold">Copyrights 2024 @ GDream Studio</p>
        </div>
      </footer>
    </>
  );
}
