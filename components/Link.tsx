import { Box } from "@mui/material"
import { ReactNode } from "react"
import Link from "next/link"

interface LinkProps {
    href: string
    title: ReactNode
}

const CustomLink = ({ href, title }: LinkProps) => {
  return (
    <Box className="link-container" sx={{
        padding: "0.1rem 0"
    }}>
        <Link href={href} target="_blank" rel="noreferrer" className="link">
            {title}
        </Link>
    </Box>
  )
}
export default CustomLink