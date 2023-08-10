import { CaretUp } from "phosphor-react"


export function Footer() {
  return (
    <footer className="bg-colorFt w-full bottom-0 p-5 mt-10 border-t border-shapeDark md:px-40">
      <div className="flex justify-center max-w-[1120px] md:mx-auto">

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
        
      </div>
    </footer>
  )
}