import Button from '../Button'

export default function AccountCard() {
  return (
    <div className=" py-1 mt-4 flex items-center gap-2">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src="https://placehold.co/50x50?text=J"
        alt="Profile-Image"
      />
      <div className="w-full flex items-center justify-between">
        <div className="">Jhon Doe</div>
        <Button className="" processing={false}>
          Follow
        </Button>
      </div>
    </div>
  )
}
