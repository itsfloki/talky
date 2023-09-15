import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Container({ children }: Props) {
  return <div className="max-w-screen-xl mx-auto p-4">{children}</div>
}
