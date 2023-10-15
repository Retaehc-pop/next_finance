"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import {
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const SignInButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <button onClick={() => signOut()}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
    );
  }
  return (
    <button onClick={() => signIn()}>
      <FontAwesomeIcon icon={faArrowRightToBracket} />
    </button>
  );
};


export default SignInButton;