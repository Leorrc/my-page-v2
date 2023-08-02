import fronts from '../../utils/data/front.json'
import backs from '../../utils/data/back.json'
import devs from '../../utils/data/dev.json'
import { Divider } from '../../components/Dividers/Divider'


export function Techs() {
  return (
    <>
      <div className='flex flex-col gap-10 max-w-5xl'>

        <div>
          <h2 className='text-2xl mb-2 font-bold'>Back End</h2>
          <Divider />
          <div className="mt-4 grid grid-cols-3 w-full max-w-7xl text-center text-textLight md:grid-cols-4 lg:grid-cols-6">
            {backs.map(back => {
              return (
                <div key={back.name} className="flex flex-col items-center justify-center gap-1 p-4">
                  <img
                    src={back.img}
                    alt="icon skill"
                    className="w-16 h-16"
                  />
                  <strong>{back.name}</strong>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h2 className='text-2xl mb-2 font-bold'>Front End</h2>
          <Divider />
          <div className="mt-4 grid grid-cols-3 w-full max-w-7xl text-center text-textLight md:grid-cols-4 lg:grid-cols-6">
            {fronts.map(front => {
              return (
                <div key={front.name} className="flex flex-col items-center justify-center gap-1 p-4">
                  <img
                    src={front.img}
                    alt="icon skill"
                    className="w-16 h-16"
                  />
                  <strong>{front.name}</strong>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <h2 className='text-2xl mb-2 font-bold'>Dev</h2>
          <Divider />
          <div className="mt-4 grid grid-cols-3 w-full max-w-7xl text-center text-textLight md:grid-cols-4 lg:grid-cols-6">
            {devs.map(dev => {
              return (
                <div key={dev.name} className="flex flex-col items-center justify-center gap-1 p-4">
                  <img
                    src={dev.img}
                    alt="icon skill"
                    className="w-16 h-16"
                  />
                  <strong>{dev.name}</strong>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </>
  )
}