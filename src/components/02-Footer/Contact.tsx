import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp
} from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import icon from '../../assets/icon-contact.svg'


export function Contact() {
  return (
    <>
      <div className="pt-20 pb-10  px-4" id="IdContact">

      <h2 className="flex justify-center gap-4 text-Ttitle text-center items-center w-full font-bold text-3xl lg:text-4xl">
              <img src={icon} alt="" />
              Entre em contato
            </h2>

        <div className="flex flex-col gap-14 mt-10 items-center lg:flex-row  lg:mt-14 lg:justify-between lg:gap-auto">
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-8 lg:gap-12">
            <div className="flex flex-col gap-8 lg:gap-8">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-5xl text-green-700 lg:text-6xl" />
                <div className="flex flex-col text-white text-lg">
                  <strong>WhatsApp</strong>
                  <a
                    href="https://wa.me/5547996473535?text=Ol%C3%A1%21"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold hover:transition-colors hover:text-primary"
                  >
                    (47) 9 9647-3535
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <BiMailSend className="text-5xl text-amarelo lg:text-6xl" />
                <div className="flex flex-col text-white text-lg">
                  <strong>E-mail</strong>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold"
                  >
                    leorrc1@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 lg:gap-8">
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-5xl  lg:text-6xl" />
                <div className="flex flex-col text-white text-lg">
                  <strong>Linkedin</strong>
                  <a
                    href="https://www.linkedin.com/in/leocarvalhodev"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:transition-colors hover:text-primary"
                  >
                    Meu Perfil
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaGithub className="text-5xl  lg:text-6xl" />
                <div className="flex flex-col text-white text-lg">
                  <strong>GitHub</strong>
                  <a
                    href="https://github.com/Leorrc"
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:transition-colors hover:text-primary"
                  >
                    Meu Perfil
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-10 pt-5 bg-roxo3 rounded-xl bg-shape">
            <div className="w-[18rem] mx-auto md:w-[25rem] lg:w-[27rem]">
              <div className="divide-y divide-gray-200">
                <form
                  className=" text-base leading-6 space-y-4 text-white  sm:leading-7 -mb-8"
                  action="https://formsubmit.co/leorrc1@gmail.com"
                  method="POST"
                >
                  <label
                    className="block uppercase tracking-wide  text-xs mb-2 font-bold"
                    htmlFor="grid-first-name"
                  >
                    Nome <span className="text-twice">*</span>
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="name"
                    placeholder="Digite seu Nome"
                  />

                  <label
                    className="block uppercase tracking-wide text-headerColor text-xs mb-2 font-bold"
                    htmlFor="grid-first-name"
                  >
                    Email <span className="text-twice">*</span>
                  </label>
                  <input
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="email"
                    name="email"
                    placeholder="Digite seu Email"
                  />

                  <label
                    className="block uppercase tracking-wide text-headerColor text-xs mb-2 font-bold"
                    htmlFor="grid-first-name"
                  >
                    Mensagem <span className="text-twice">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    className="resize-y py-3 px-4 border rounded-md w-full text-gray-700 bg-gray-200 focus:outline-none "
                    placeholder="Sua mensagem..."
                  ></textarea>
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://leocarvalhodev.com.br/"
                  />

                  <div className="flex items-end justify-end pb-3">
                    <button
                      className="bg-primary hover:bg-primary/70 transition-colors text-white font-semibold py-2 px-4 rounded"
                      type="submit"
                    >
                      ENVIAR
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          
        </div>

        <div className="flex justify-center pt-8 lg:justify-end lg:pr-16 lg:pt-0 xl:pr-80">
          <div className="flex items-center gap-2 lg: mt-8">
            <FaMapMarkerAlt className="text-5xl text-roxo2 md:text-5xl lg:text-6xl hover:text-cinza-400 transition-colors cursor-pointer" />
            <strong className="text-white text-lg">
              Brusque - Santa Catarina, Brasil
            </strong>
          </div>
        </div>

      </div>
    </>
  )
}
