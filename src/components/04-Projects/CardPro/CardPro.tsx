import maria from '/projects/2maria.svg'

export function CardPro() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex" key="">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={maria}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Maria
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500"> AAAAAAAAAAAAAAAAAAAA </p>
        </div>
      </div>
    </div>
  )
}
