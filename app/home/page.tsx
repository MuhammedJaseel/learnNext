// import React, { Component } from 'react'

// export default class Page extends Component {
//   render() {
//     return (
//       <div>HomeComponent</div>
//     )
//   }
// }

"use client";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Link href="about">home</Link>
      <div
        onClick={() => {
          window.location.href = "about";
        }}
      >
        home
      </div>
    </div>
  );
}
