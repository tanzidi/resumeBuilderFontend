import { redirect } from "next/navigation"


function Home() {
  return (
    redirect('/resume-builder')
  )
}

export default Home