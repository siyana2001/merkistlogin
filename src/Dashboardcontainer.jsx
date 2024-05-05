import React from 'react'
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import Dashboard from './Dashboard';
const Dashboardcontainer = () => {
  return (
    <div>
      <SignedIn>
      <Dashboard/>
    </SignedIn>

    <SignedOut>
      <RedirectToSignIn/>
    </SignedOut>
    </div>
  )
}

export default Dashboardcontainer
