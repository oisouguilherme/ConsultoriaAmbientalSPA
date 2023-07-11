export function BlogCard(){
  return(
    <div className="bg-[url('/imageTest.webp')] bg-cover w-80 cursor-pointer">
      <div className="px-12 py-8 space-y-20 bg-black bg-opacity-70">
        <div className="bg-yellow-300 w-fit font-medium px-3 py-1 text-center text-xs">
          <p>Aug</p>
          <p className="font-bold text-lg">02</p>
        </div>
        <p className="text-white font-bold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
    </div>
  )
}