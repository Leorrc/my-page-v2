import { CaretUp } from "phosphor-react"


export function Footer() {
  return (
    <footer className="bg-colorFt w-full bottom-0 p-5 mt-10 border-t border-shapeDark md:px-40">
      <div className="flex justify-center max-w-[1120px] md: mx-auto">

        <div className="flex items-center md:justify-center md:flex-row gap-1">
          <p className="text-start text-xs flex-start md:text-sm">
            Desenvolvido por
          </p>
          <span className="text-primary cursor-pointer ">
            Leonardo Carvalho<span className="text-green cursor-pointer font-bold ml-[2px]">
              .
            </span>
          </span>
        </div>

        {/* <button className="bg-shapeHover w-12 h-12 px-3 pt-[10.50px] pb-[13.50px] rounded-[5px] justify-center items-start inline-flex hover:bg-shapeDark hover:transition-colors">
          <CaretUp
            size={32}
            color="#e1e1e6"
            className="h-7 justify-center items-center flex"
          />
        </button> */}


      </div>
    </footer>
  )
}