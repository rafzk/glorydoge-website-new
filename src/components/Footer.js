import * as React from 'react'

import Container from './Container'

const Footer = () => {
  return (
    <div className="mt-32 w-full bg-black bg-opacity-60">
      <Container>
        <div className="pattern lg:h-[100px] flex flex-col items-center justify-between py-10 space-y-4 lg:flex-row lg:py-0 lg:space-y-0">
          <div className="flex flex-1 items-center">
            <h1 className="font-expletus text-2xl font-bold">GloryDoge</h1>
          </div>
          <div className="flex flex-1 justify-center">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} GloryDoge. All rights reserved.
            </p>
          </div>
          <div className="flex flex-1 justify-end">
            <a href="mailto:hello@glorydogecoin.com" className="text-gradient text-sm">
              hello@glorydogecoin.com
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
