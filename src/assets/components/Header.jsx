import { Grid, GridItem, Link, Image, keyframes } from '@chakra-ui/react'

const animationLine = keyframes`
  from { width: 0 }
  to { width: '100vh' }
`
const animationMenuItems = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
const sxHeader = {
  h: '60px',
  gridTemplateColumns: 'repeat(12, 1fr)',
  color: 'white',
  p: '0 30px',
  _before: {
    content: '""',
    display: 'block',
    width: '100vw',
    height: '1px',
    background: '#4F4F4F',
    position: 'absolute',
    left: '0',
    top: '30px',
    zIndex: '-1',
    animation: `${animationLine} 1 2s`
  }
}
const sxMenuItem = (delay) => ({
  position: 'relative',
  opacity: 0,
  animationName: `${animationMenuItems}`,
  animationFillMode: 'forwards',
  animationDuration: '0.5s',
  animationDelay: `${delay}s`,
  _before: {
    content: '""',
    display: 'block',
    width: 'calc(100% + 20px)',
    height: '1px',
    background: '#242424',
    position: 'absolute',
    left: '-10px',
    top: '50%',
    zIndex: '-1',
  }
})

export default function Header() {
  return (
    <Grid  sx={sxHeader}>
    <GridItem colSpan={8} display='flex' alignItems='center' justifyContent='space-between'>
      <Link sx={sxMenuItem(0)}>Skills</Link>
      <Link sx={sxMenuItem(0.2)}>Current Projects</Link>
      <Link sx={sxMenuItem(0.4)}>Education / Experience</Link>
      <Link sx={sxMenuItem(0.6)}>About me</Link>
    </GridItem>
      <GridItem colSpan={4} display='flex' alignItems='center' justifyContent='end' gap='10px'>
        <Link sx={sxMenuItem(0.8)} href='https://t.me/enmourn' target="_blank">
          <Image src='/telegram.svg'/>
        </Link>
        <Link sx={sxMenuItem(0.8)}><Image src='/instagram.svg'/></Link>
      </GridItem>
    </Grid>
  )
}