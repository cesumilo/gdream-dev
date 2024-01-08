import Card from "../islands/Card.tsx";

export default function Home() {
  return (
    <div class="h-screen w-screen">
      <div class="px-4 pt-5 mx-auto background" style="height:20%;">
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
      </div>

      <div class="px-4 py-8 mx-auto background-2 overflow-scroll" style="height:70%;">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <p class="text-4xl font-bold">Our games</p>

          <div class="grid grid-flow-row col-auto my-8">
            <Card
              title="Coming soon..."
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Voluptatibus quia, nulla! Maiores et perferendis eaque,
      exercitationem praesentium nihil."
              imgSrc="/card-top.jpg"
              tags={["puzzle", "3D", "godot", "farming"]}
            />

          </div>
        </div>
      </div>

      <div class="px-4 py-8 mx-auto background-3" style="height:10%;">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <p class="text-xs font-bold">Copyrights 2024 @ GDream Studio</p>
        </div>
      </div>
    </div>
  );
}
