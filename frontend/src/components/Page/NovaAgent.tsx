"use-client"
import { Features } from "@/components/blocks/features-11"
import HeroAgent from "@/components/blocks/heroAgentPHR"
import Navbar from "@/components/ui/nav"
import { Footerdemo } from "@/demo/fs"
import { GradientHeadingDemo } from "@/demo/gradientHeadDemo"
import { Marquee } from "@/components/ui/marqueeText"
import dash from "@/components/blocks/Dashboard.png"
import {Bolt,CopyPlus,Layers2,Files} from 'lucide-react'
import nova from '@/images/nova.png'

export const NovaPage=()=>{
    return(
        <div>
        <Navbar></Navbar>
         <HeroAgent
          heading="Meet Your AI Agent"
          description="Nova transforms interviews into insightful, unbiased evaluations. It guides interviewers live, ensures thorough coverage, and creates summary reports with strengths and concerns—turning every interaction into measurable data"
          image={nova}
          item={{
            label: "Nova",
            agents: [
              { label: "Maxi", to: "/maxi", icon: <Bolt size={16} className="opacity-60" /> },
              { label: "Prime HR", to: "/prime", icon: <CopyPlus size={16} className="opacity-60" /> },
              { label: "Optimus", to: "/optimus", icon: <Layers2 size={16} className="opacity-60" /> },
              { label: "Archie", to: "/archie", icon: <Files size={16} className="opacity-60" /> },
              { label: "Onix", to: "/onix", icon: <Files size={16} className="opacity-60" /> },
            ],
          }}></HeroAgent>
              <Marquee text='NOVA'></Marquee>
        <GradientHeadingDemo></GradientHeadingDemo>
        <Features></Features>
        <Footerdemo></Footerdemo>
        </div>
    )
}