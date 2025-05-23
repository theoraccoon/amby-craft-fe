import { TEXT_BLOCKS } from './blocks/text_blocks/block-data'

export default function TextFormats() {
  return (
    <div className="fixed inset-y-0 left-0 bg-[#282828] w-[20%] ml-[15%] h-full overflow-y-scroll no-scrollbar">
      <div className="first p-8 ">
        {TEXT_BLOCKS.map(({ type, content }) => (
          <div className="first:mt-0 mt-7" key={type}>
            <p className="mb-2.5 text-xs">{type}</p>
            <div className="py-7 px-6 bg-[#444444] rounded-md">
              <p className="text-[0.5rem] text-left">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
