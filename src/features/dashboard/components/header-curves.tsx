import { GoArrowRight } from 'react-icons/go'
import { DashboardData } from '../types/type'
import { BottomCurves } from './bottom-curves'
import { TopCurves } from './top-curves'

export const HeaderCards = (item: DashboardData) => (
  <div
    key={item.id}
    className={`cursor-pointer rounded-[1.2rem] !border inline-block z-10 min-w-[21rem] sm:!min-w-[24rem] mt-12`}
    style={{
      backgroundColor: item.backgroundStyle,
      borderColor: item.borderStyle,
    }}
  >
    <div className="flex items-center gap-x-6 !p-7 relative">
      <TopCurves color={item.curvesColor} />
      <div className="rounded-lg bg-white inline-flex flex-col items-center justify-center !h-[3.125rem] !w-[3.125rem] z-10 ">
        {item.IconComponent}
      </div>
      <div className="inline-flex flex-col">
        <p className="mb-0 text-2xl font-semibold text-white">{item.count}</p>
        <p className="mb-0 text-xs font-normal text-[#FFFFFF99]">{item.text}</p>
      </div>
    </div>
    <div
      className={`!border-t !border-t-[${item.borderColor}] flex justify-between text-white !p-4 relative overflow-hidden w-full`}
      style={{ borderTopColor: item.borderColor }}
    >
      <BottomCurves color={item.curvesColor} />
      <span className="text-xs">View all</span>
      <GoArrowRight />
    </div>
  </div>
)
