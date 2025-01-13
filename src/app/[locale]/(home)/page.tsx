import { type FC } from "react"
import { type Metadata } from "next"

import { Home, homePageMetadata } from "@views/home"

export const metadata: Metadata = homePageMetadata

const HomePage: FC = () => <Home />

HomePage.displayName = "HomePage"
export default HomePage
