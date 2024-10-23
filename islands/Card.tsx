interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
}

export default function Card(props: CardProps) {
  return (
    <a href="#" class="mx-4 my-4">
      <div class="card max-w-sm rounded overflow-hidden shadow-lg background-3">
        <img
          class="w-full"
          src={props.imgSrc}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.title}</div>
          <p class="text-white text-base">{props.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          {props.tags.map((tag) => (
            <span class="inline-block bg-brown text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
