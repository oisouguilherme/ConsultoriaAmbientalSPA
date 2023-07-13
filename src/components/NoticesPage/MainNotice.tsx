import { CardNotice } from "./CardNotices";

export function MainNotice(){
  return(
    <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-12 py-20">
      <CardNotice/>
      <CardNotice/>
      <CardNotice/>
      <CardNotice/>
      <CardNotice/>
      <CardNotice/>
    </div>
  )
}