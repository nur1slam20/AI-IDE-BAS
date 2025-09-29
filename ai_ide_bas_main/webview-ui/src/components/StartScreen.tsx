import React from "react"

import { WelcomeScreen, WelcomeScreenProps } from "./WelcomeScreen"

export interface StartScreenProps extends Pick<WelcomeScreenProps, "onGoogleSignIn" | "socialLinks"> {
  imageUrl?: string
}

export const StartScreen: React.FC<StartScreenProps> = ({ onGoogleSignIn, socialLinks, imageUrl }) => {
  return (
    <div className="h-full w-full">
      <WelcomeScreen onGoogleSignIn={onGoogleSignIn} socialLinks={socialLinks} imageUrl={imageUrl} />
    </div>
  )
}

export default StartScreen


