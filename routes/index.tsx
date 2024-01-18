import Card from "../islands/Card.tsx";

export default function Home() {
  return (
    <>
      <header class="row px-4 pt-5 pb-7 mx-auto background">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            src="/logo.svg"
            width="128"
            alt="the GDream Studio logo: a black and grey background with a red G-letter and a white DREAM text."
          />
          <h1 class="text-4xl font-bold mt-4">GDream Studio</h1>
          <h2 class="text-1xl font-bold mt-2">
            An independant video game studio
          </h2>
        </div>
      </header>

      <section class="row content px-4 py-8 mx-auto background-2">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <p class="text-4xl font-bold">Our games</p>

          <div class="grid grid-flow-row col-auto my-8">
            <Card
              title="Farm it!"
              description="Coming soon... 😏"
              imgSrc="/card-top.jpg"
              tags={["puzzle", "3D", "godot", "farming"]}
            />

          </div>
        </div>
      </section>

      <section class="row twitch background-2">
        <div class="flex flex-col items-center justify-center">
          <p class="text-4xl font-bold">We are live!</p>
          <div id="twitch-embed"></div>
        </div>
      </section>

      <footer class="row px-4 py-8 mx-auto background-3">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <p class="text-xs font-bold">Copyrights 2024 @ GDream Studio</p>
        </div>
      </footer>

      <script src="twitch.js" type="text/javascript"></script>
    </>
  );
}
