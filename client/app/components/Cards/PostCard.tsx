export default function PostCard() {
  return (
    <div className="py-1 mb-4 flex items-start gap-2">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src="https://placehold.co/50x50?text=J"
        alt="Profile-Image"
      />
      <div className="w-full flex flex-col justify-start">
        <p className="text-lg font-semibold">Jhon Doe</p>
        <p className="text-base">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>
      </div>
    </div>
  )
}
