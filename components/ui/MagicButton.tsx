import React, { ReactNode } from 'react'

type Props = {
  title: string,
  icon: ReactNode,
  position: 'left' | 'right',
  handleClick?: () => void,
  className?: string
}

const MagicButton = (props: Props) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] w-full md:w-60 md:mt-10">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ${props.className} gap-2`}>
        {props.position === 'left' && props.icon}
        {props.title}
        {props.position === 'right' && props.icon}
      </span>
    </button>
  )
}

export default MagicButton
