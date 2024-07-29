import { forwardRef } from "react";

const Child = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>I am a child</div>
  )
})

export default Child;