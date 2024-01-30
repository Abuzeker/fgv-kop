import * as React from "react"
const VacuumHMI = ({value}) => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox="1 1 1920 1080" >
      <defs>
        <linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#a9b1aa" />
          <stop offset={0.22} stopColor="#bec7c0" />
          <stop offset={0.57} stopColor="#e4e9e5" />
          <stop offset={0.84} stopColor="#d6ddd7" />
          <stop offset={1} stopColor="#b7c0b9" />
        </linearGradient>
        <linearGradient id="b" x1="0%" x2="0%" y1="100%" y2="0%">
          <stop offset={0} stopColor="#a9b1aa" />
          <stop offset={0.22} stopColor="#bec7c0" />
          <stop offset={0.57} stopColor="#e4e9e5" />
          <stop offset={0.84} stopColor="#d6ddd7" />
          <stop offset={1} stopColor="#b7c0b9" />
        </linearGradient>
        <linearGradient id="c" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#849c87" />
          <stop offset={0.22} stopColor="#95b098" />
          <stop offset={0.57} stopColor="#d1ddd3" />
          <stop offset={0.84} stopColor="#b8cbba" />
          <stop offset={1} stopColor="#90a992" />
        </linearGradient>
        <linearGradient id="d" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9db098" />
          <stop offset={0.15} stopColor="#d0e8cb" />
          <stop offset={0.25} stopColor="#d9ecd5" />
          <stop offset={0.44} stopColor="#b3c9ae" />
          <stop offset={0.6} stopColor="#9fb39b" />
          <stop offset={0.8} stopColor="#869782" />
          <stop offset={0.97} stopColor="#7a8a76" />
          <stop offset={1} stopColor="#a3b79e" />
        </linearGradient>
        <linearGradient id="e" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#6b8f62" />
          <stop offset={0.15} stopColor="#9cc691" />
          <stop offset={0.25} stopColor="#cde0c9" />
          <stop offset={0.52} stopColor="#7fa975" />
          <stop offset={0.69} stopColor="#719767" />
          <stop offset={0.8} stopColor="#6a8e61" />
          <stop offset={0.92} stopColor="#64865b" />
          <stop offset={1} stopColor="#739a6a" />
        </linearGradient>
        <linearGradient id="f" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0.25} stopColor="#ebebeb" />
          <stop offset={0.37} stopColor="#c2c2c2" />
          <stop offset={0.82} stopColor="#6185a8" />
          <stop offset={0.85} stopColor="#909090" stopOpacity={0.47} />
        </linearGradient>
        <linearGradient id="g" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#676767" />
          <stop offset={0.22} stopColor="#747474" />
          <stop offset={0.57} stopColor="#c5c5c5" />
          <stop offset={0.84} stopColor="#a2a2a2" />
          <stop offset={1} stopColor="#707070" />
        </linearGradient>
        <linearGradient id="h" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#5e5e5e" />
          <stop offset={0.64} stopColor="#b8b8b8" />
          <stop offset={1} stopColor="#656565" />
        </linearGradient>
        <linearGradient id="i" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#545454" />
          <stop offset={0.66} stopColor="#c5c5c5" />
          <stop offset={1} stopColor="#515151" />
        </linearGradient>
        <linearGradient id="j" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#565656" />
          <stop offset={0.03} stopColor="#a2a2a2" />
          <stop offset={0.05} stopColor="#727272" />
          <stop offset={0.64} stopColor="#707070" />
          <stop offset={0.95} stopColor="#6d6d6d" />
          <stop offset={1} stopColor="#4f4f4f" />
        </linearGradient>
        <linearGradient id="m" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#bac0c1" />
          <stop offset={0.15} stopColor="#f4fafc" />
          <stop offset={0.25} stopColor="#f8fcfd" />
          <stop offset={0.44} stopColor="#d5dbdd" />
          <stop offset={0.6} stopColor="#bdc3c4" />
          <stop offset={0.8} stopColor="#a0a4a6" />
          <stop offset={0.97} stopColor="#929697" />
          <stop offset={1} stopColor="#c2c7c9" />
        </linearGradient>
        <linearGradient id="n" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#b5b5b5" />
          <stop offset={0.03} stopColor="#fff" />
          <stop offset={0.08} stopColor="#ebebeb" />
          <stop offset={0.64} stopColor="#e7e7e7" />
          <stop offset={0.95} stopColor="#e2e2e2" />
          <stop offset={1} stopColor="#a8a8a8" />
        </linearGradient>
        <linearGradient id="o" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#bac0c1" />
          <stop offset={0.15} stopColor="#f4fafc" />
          <stop offset={0.25} stopColor="#f8fcfd" />
          <stop offset={0.44} stopColor="#d5dbdd" />
          <stop offset={0.6} stopColor="#bdc3c4" />
          <stop offset={0.8} stopColor="#a0a4a6" />
          <stop offset={0.97} stopColor="#929697" />
          <stop offset={1} stopColor="#c2c7c9" />
        </linearGradient>
        <linearGradient id="p" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#939798" />
          <stop offset={0.15} stopColor="#c5cacb" />
          <stop offset={0.25} stopColor="#dfe2e2" />
          <stop offset={0.44} stopColor="#a8adae" />
          <stop offset={0.6} stopColor="#959a9b" />
          <stop offset={0.8} stopColor="#7d8182" />
          <stop offset={0.97} stopColor="#727676" />
          <stop offset={1} stopColor="#999d9e" />
        </linearGradient>
        <linearGradient id="q" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#669336" />
          <stop offset={0.03} stopColor="#afda8c" />
          <stop offset={0.08} stopColor="#86bf49" />
          <stop offset={0.64} stopColor="#84bc48" />
          <stop offset={0.95} stopColor="#81b846" />
          <stop offset={1} stopColor="#5e8831" />
        </linearGradient>
        <linearGradient
          id="r"
          x1={0}
          x2={1}
          y1={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#c7c7c7" />
          <stop offset={0.15} stopColor="#fff" />
          <stop offset={0.25} stopColor="#fff" />
          <stop offset={0.52} stopColor="#dfdfdf" />
          <stop offset={0.69} stopColor="#c7c7c7" />
          <stop offset={0.8} stopColor="#bcbcbc" />
          <stop offset={0.92} stopColor="#b1b1b1" />
        </linearGradient>
        <linearGradient id="s" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#afafaf" />
          <stop offset={0.59} stopColor="#e5e5e5" />
          <stop offset={1} stopColor="#afafaf" />
        </linearGradient>
        <linearGradient id="t" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#bac0c1" />
          <stop offset={0.15} stopColor="#f4fafc" />
          <stop offset={0.25} stopColor="#f8fcfd" />
          <stop offset={0.52} stopColor="#d5dbdd" />
          <stop offset={0.69} stopColor="#bdc3c4" />
          <stop offset={0.8} stopColor="#b3b8b9" />
          <stop offset={0.97} stopColor="#a9aeaf" />
          <stop offset={1} stopColor="#c2c7c9" />
        </linearGradient>
        <linearGradient id="u" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#676768" />
          <stop offset={0.15} stopColor="#939394" />
          <stop offset={0.25} stopColor="#c9c9ca" />
          <stop offset={0.52} stopColor="#767677" />
          <stop offset={0.69} stopColor="#696969" />
          <stop offset={0.8} stopColor="#626263" />
          <stop offset={0.97} stopColor="#5d5d5d" />
          <stop offset={1} stopColor="#6b6b6c" />
        </linearGradient>
        <linearGradient id="v" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#aeaead" />
          <stop offset={0.03} stopColor="#f8f8f7" />
          <stop offset={0.08} stopColor="#e3e3e2" />
          <stop offset={0.64} stopColor="#dfdfde" />
          <stop offset={0.95} stopColor="#dadad9" />
          <stop offset={1} stopColor="#a2a2a1" />
        </linearGradient>
        <linearGradient id="w" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#bac0c1" />
          <stop offset={0.15} stopColor="#f4fafc" />
          <stop offset={0.25} stopColor="#f8fcfd" />
          <stop offset={0.52} stopColor="#d5dbdd" />
          <stop offset={0.69} stopColor="#bdc3c4" />
          <stop offset={0.8} stopColor="#b3b8b9" />
          <stop offset={0.97} stopColor="#a9aeaf" />
          <stop offset={1} stopColor="#c2c7c9" />
        </linearGradient>
        <linearGradient id="x" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#aeaead" />
          <stop offset={0.03} stopColor="#f8f8f7" />
          <stop offset={0.08} stopColor="#e3e3e2" />
          <stop offset={0.64} stopColor="#dfdfde" />
          <stop offset={0.95} stopColor="#dadad9" />
          <stop offset={1} stopColor="#a2a2a1" />
        </linearGradient>
        <linearGradient id="y" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#bdbdbd" />
          <stop offset={0.15} stopColor="#fff" />
          <stop offset={0.25} stopColor="#fff" />
          <stop offset={0.52} stopColor="#dfdfdf" />
          <stop offset={0.69} stopColor="#c7c7c7" />
          <stop offset={0.8} stopColor="#bcbcbc" />
          <stop offset={0.92} stopColor="#b1b1b1" />
          <stop offset={1} stopColor="#cbcbcb" />
        </linearGradient>
        <linearGradient id="z" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#1c85a1" />
          <stop offset={0.09} stopColor="#1d87a3" />
          <stop offset={0.36} stopColor="#85c0d7" />
          <stop offset={0.56} stopColor="#2196b5" />
          <stop offset={0.83} stopColor="#187891" />
          <stop offset={1} stopColor="#0e5567" />
        </linearGradient>
        <linearGradient id="A" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#26748a" />
          <stop offset={0.09} stopColor="#26768c" />
          <stop offset={0.36} stopColor="#88b2c4" />
          <stop offset={0.56} stopColor="#2c839c" />
          <stop offset={0.83} stopColor="#21697c" />
          <stop offset={1} stopColor="#154958" />
        </linearGradient>
        <linearGradient id="B" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#a3a3a4" />
          <stop offset={0.15} stopColor="#dededf" />
          <stop offset={0.25} stopColor="#ededed" />
          <stop offset={0.52} stopColor="#c0c0c1" />
          <stop offset={0.69} stopColor="#ababac" />
          <stop offset={0.8} stopColor="#a1a1a2" />
          <stop offset={0.92} stopColor="#989899" />
          <stop offset={1} stopColor="#afafb0" />
        </linearGradient>
        <linearGradient id="C" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#b3a593" />
          <stop offset={0.03} stopColor="#fdeeda" />
          <stop offset={0.05} stopColor="#e9d7bf" />
          <stop offset={0.64} stopColor="#e5d3bc" />
          <stop offset={0.95} stopColor="#e0ceb8" />
          <stop offset={1} stopColor="#a69988" />
        </linearGradient>
        <linearGradient id="D" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9e9e9e" />
          <stop offset={0.15} stopColor="#f6f6f6" />
          <stop offset={0.26} stopColor="#fff" />
          <stop offset={0.41} stopColor="#fff" />
          <stop offset={0.6} stopColor="#d1d1d1" />
          <stop offset={0.8} stopColor="#a8a8a8" />
          <stop offset={0.93} stopColor="#898989" />
        </linearGradient>
        <linearGradient id="E" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9c9080" />
          <stop offset={0.15} stopColor="#f4e1c8" />
          <stop offset={0.26} stopColor="#fdebd5" />
          <stop offset={0.41} stopColor="#fde9d1" />
          <stop offset={0.6} stopColor="#d0bfaa" />
          <stop offset={0.8} stopColor="#a69988" />
          <stop offset={0.93} stopColor="#887d6f" />
        </linearGradient>
        <linearGradient id="F" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} />
          <stop offset={0.03} stopColor="#7c7c7c" />
          <stop offset={0.05} />
          <stop offset={0.64} />
          <stop offset={0.95} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient id="G" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#b3a593" />
          <stop offset={0.03} stopColor="#fdeeda" />
          <stop offset={0.05} stopColor="#e9d7bf" />
          <stop offset={0.64} stopColor="#e5d3bc" />
          <stop offset={0.95} stopColor="#e0ceb8" />
          <stop offset={1} stopColor="#a69988" />
        </linearGradient>
        <radialGradient
          id="k"
          cx={10}
          cy={8}
          r={12.8}
          fx={10}
          fy={8}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#787878" />
          <stop offset={0.91} stopColor="#767676" />
          <stop offset={0.74} stopColor="#b0b0b0" />
          <stop offset={0.54} stopColor="#767676" />
        </radialGradient>
        <radialGradient
          id="l"
          cx={2}
          cy={2}
          r={3}
          fx={2}
          fy={2}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#787878" />
          <stop offset={0.91} stopColor="#767676" />
          <stop offset={0.74} stopColor="#b0b0b0" />
          <stop offset={0.54} stopColor="#767676" />
        </radialGradient>
      </defs>
      <path fill="#0e2350" d="M7.536 7.528h1920v1080h-1920v-1080z" />
      <path
        fill="url(#a)"
        d="M0 0h261.7v119.8H0V0z"
        transform="translate(770.2 848.352)"
      />
      <path
        fill="url(#b)"
        d="M0 0h261.7v3H0V0z"
        transform="translate(770.2 852.756)"
      />
      <path
        fill="url(#b)"
        d="M0 0h261.7v3H0V0z"
        transform="translate(770.2 869.34)"
      />
      <path
        fill="url(#b)"
        d="M0 0h261.7v3H0V0z"
        transform="translate(770.2 894.215)"
      />
      <path
        fill="url(#b)"
        d="M0 0h261.7v3H0V0z"
        transform="translate(770.2 902.507)"
      />
      <path
        fill="url(#b)"
        d="M0 0h261.7v3H0V0z"
        transform="translate(770.2 877.631)"
      />
      <path
        fill="url(#b)"
        d="M0 0h261.7v3H0V0z"
        transform="translate(770.2 885.923)"
      />
      <path
        fill="url(#b)"
        d="M0 0h261.7v3H0V0z"
        transform="translate(770.2 861.048)"
      />
      <g fill="url(#b)" transform="translate(770.2 910.798)">
        <path d="M0 0h261.7v3H0V0zM0 8.434h261.7v3H0v-3zM0 17.02h261.7v3H0v-3zM0 24.875h261.7v3H0v-3zM0 33.167h261.7v3H0v-3zM0 41.165h261.7v3H0v-3zM0 49.75h261.7v3H0v-3z" />
      </g>
      <path
        fill="url(#c)"
        d="M0 0h261.7v6.3H0V0z"
        transform="translate(770.2 967.613)"
      />
      <path
        fill="url(#c)"
        d="M0 0h276.3v6.3H0V0z"
        transform="translate(761.619 842.604)"
      />
      <path
        fill="url(#c)"
        d="M0 0h276.3v6.3H0V0z"
        transform="translate(762.906 911.29)"
      />
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M1030.93 919.19h51.5M1081.56 919.19v18.9"
      />
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M1085.387 940.098v8.6h3.9l-7.7 13-7.6-13h3.8v-8.6h7.6z"
      />
      <path
        fill="url(#d)"
        d="M0 12.4h63.5V0H0v12.4z"
        transform="translate(355.091 523.079)"
      />
      <path
        fill="url(#e)"
        d="M0 2.8h63.5V0H0v2.8z"
        transform="translate(355.091 531.54)"
      />
      <path
        fill="url(#d)"
        d="M0 11.3h63.5V0H0v11.3z"
        transform="translate(355.091 687.229)"
      />
      <path
        fill="url(#e)"
        d="M0 3.2h63.5V0H0v3.2z"
        transform="translate(355.091 687.01)"
      />
      <path
        fill="url(#d)"
        d="M6.1 0h64c3.4 0 6.1 5 6.1 11.1v131c0 6.1-2.7 11.1-6.1 11.1h-64c-3.4 0-6.1-5-6.1-11.1v-131C0 5 2.7 0 6.1 0z"
        transform="translate(348.707 534.226)"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(358.142 567.37)"
      >
        <tspan
          x={16.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F200"}
        </tspan>
      </text>
      <path
        fill="url(#f)"
        stroke="#696969"
        d="M0 0h25.7v42.2H0V0z"
        transform="translate(867.078 521.6)"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 105.954 626.892)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 106.242 635.849)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 370.822 264.987)"
      />
      <path
        fill="#7c7c7c"
        d="M105.278 635.477v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(114.398 638.357)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(115.233 633.055)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 122.214 615.994)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 130.097 635.321)"
      />
      <path
        fill="#7c7c7c"
        d="M121.795 633.685c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M121.772 622.734c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 -249.821 373.547)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 137.102 614.416)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 -238.474 375.983)"
      />
      <path
        fill="#7c7c7c"
        d="M138.066 614.788v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 106.812 674.648)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 107.1 683.605)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 395.129 288.436)"
      />
      <path
        fill="#7c7c7c"
        d="M106.136 683.233v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(115.256 686.113)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(116.09 680.811)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 123.072 663.75)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 130.955 683.077)"
      />
      <path
        fill="#7c7c7c"
        d="M122.653 681.441c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M122.63 670.49c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 -273.27 397.854)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 137.96 662.172)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 -261.923 400.29)"
      />
      <path
        fill="#7c7c7c"
        d="M138.924 662.544v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M41.615 593.715h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(41.615 593.715)"
      >
        <tspan
          x={20.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G200"}
        </tspan>
      </text>
      <path fill="#fff" d="M41.615 639.737h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(41.615 639.737)"
      >
        <tspan
          x={17.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G300A"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={4}
        d="M231.352 618.099v98.4M137.808 666.469h94.4M106.48 678.486h-75.3"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 106.52 722.148)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 106.808 731.105)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 418.733 312.332)"
      />
      <path
        fill="#7c7c7c"
        d="M105.844 730.733v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(114.964 733.613)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(115.799 728.311)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 122.78 711.25)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 130.663 730.577)"
      />
      <path
        fill="#7c7c7c"
        d="M122.36 728.941c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M122.338 717.99c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 -297.166 421.458)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 137.668 709.672)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 -285.819 423.894)"
      />
      <path
        fill="#7c7c7c"
        d="M138.632 710.044v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M41.323 686.98h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(41.323 686.98)"
      >
        <tspan
          x={17.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G300B"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={4}
        d="M103.906 631.017h-73.2M106.48 724.422h-75.3"
      />
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={4} d="M138.451 618.099h198.3" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m336.751 612.099 12 6-12 6v-12"
        />
      </g>
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={4}
        d="M137.593 715.479h94.4"
      />
      <path
        fill="url(#m)"
        d="M0 0h29.9v8.4H0V0z"
        transform="rotate(90 -195.876 431.291)"
      />
      <path
        fill="url(#n)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 -189.359 443.633)"
      />
      <path
        fill="#b4b5b5"
        d="M253.634 633.857v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
      />
      <path fill="#7c7c7c" d="M253.105 634.186v15.9h-9.2v-15.9h9.2z" />
      <path
        fill="url(#o)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(90 -198.616 441.372)"
      />
      <path
        fill="url(#m)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -196.056 433.368)"
      />
      <path
        fill="url(#m)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -207.857 445.168)"
      />
      <path
        fill="url(#p)"
        d="M0 0h.4v8.4H0V0z"
        transform="rotate(90 -197.928 433.332)"
      />
      <path
        fill="url(#p)"
        d="M0 0h.4v8.4H0V0z"
        transform="rotate(90 -208.6 444.005)"
      />
      <path
        fill="url(#q)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(90 -191.318 440.875)"
      />
      <path
        fill="url(#o)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(90 -189.915 445.051)"
      />
      <path
        fill="url(#o)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(90 -189.762 445.724)"
      />
      <path
        fill="url(#m)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(90 -193.092 439.101)"
      />
      <path
        fill="url(#m)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(90 -189.337 434.639)"
      />
      <path
        fill="url(#m)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(1 0 0 -1 237.22 623.649)"
      />
      <path
        fill="url(#r)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 -1 -1 0 245.302 623.978)"
      />
      <path fill="#fff" d="M256.82 627.082h51.1v30h-51.1v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(256.82 627.082)"
      >
        <tspan
          x={12}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV200"}
        </tspan>
      </text>
      <path
        fill="#92d050"
        stroke="#000"
        d="M401.908 544.068c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
      />
      <path fill="#fff" d="M427.502 529.066h74.7v30h-74.7v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(427.502 529.066)"
      >
        <tspan
          x={18.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"PSAL200"}
        </tspan>
      </text>
      <g fill="url(#s)" stroke="#9b9b9b" transform="rotate(180 258.451 197.137)">
        <path d="M10.826 0h13.6v5h-13.6V0z" />
        <path d="M10.826 4.628h13.6v12.4h-13.6v-12.4z" />
        <path d="M3.174 17.023h29.2l-9.6 53.4v10.1h-10v-10.1l-9.6-53.4zM0 80.553h35.1v34H0v-34z" />
        <path d="M0 85.313h35.1v2.2H0v-2.2zM0 108.848h35.1v2.2H0v-2.2z" />
      </g>
      <g fill="url(#s)" stroke="#9b9b9b" transform="rotate(90 71.991 351.731)">
        <path d="M12.535 0h15.8v4.3h-15.8V0z" />
        <path d="M12.535 3.997h15.8v10.7h-15.8v-10.7zM3.675 14.702h33.8l-11.2 46.1v8.7h-11.4v-8.7l-11.2-46.1zM0 69.569h40.7v29.3H0v-29.3z" />
        <path d="M0 73.68h40.7v1.9H0v-1.9zM0 94.005h40.7v1.9H0v-1.9z" />
      </g>
      <g stroke="red">
        <path fill="none" strokeWidth={4} d="M338.404 268.252v-124.1" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m344.404 268.252-6 12-6-12h12"
        />
      </g>
      <path
        fill="none"
        stroke="red"
        strokeWidth={4}
        d="M338.404 144.119h1356.8"
      />
      <g stroke="red">
        <path fill="none" strokeWidth={4} d="M500.597 268.252v-124.1" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m506.597 268.252-6 12-6-12h12"
        />
      </g>
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={4} d="M313.532 300.125h-65.2" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m313.532 294.125 12 6-12 6v-12"
        />
      </g>
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M224.313 295.623h7.5v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.5v-8.9z"
      />
      <path fill="#fff" d="M136.734 275.688h79.5v48.8h-79.5v-48.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(136.734 275.688)"
      >
        <tspan
          x={7.8}
          y={28.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"From E332 A/B"}
        </tspan>
      </text>
      <path fill="#fff" d="M324.808 325.398h74.7v30h-74.7v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(324.808 325.398)"
      >
        <tspan
          x={23.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G333A"}
        </tspan>
      </text>
      <path fill="#fff" d="M432.417 321.424h53.6v30h-53.6v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(432.417 321.424)"
      >
        <tspan
          x={12.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G333B"}
        </tspan>
      </text>
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={4} d="M424.221 300.125h44.6" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m468.821 294.125 12 6-12 6v-12"
        />
      </g>
      <path
        fill="url(#d)"
        d="M0 12.4h63.5V0H0v12.4z"
        transform="translate(561.124 420.92)"
      />
      <path
        fill="url(#e)"
        d="M0 2.8h63.5V0H0v2.8z"
        transform="translate(561.124 429.382)"
      />
      <path
        fill="url(#d)"
        d="M0 11.3h63.5V0H0v11.3z"
        transform="translate(561.124 585.07)"
      />
      <path
        fill="url(#e)"
        d="M0 3.2h63.5V0H0v3.2z"
        transform="translate(561.124 584.853)"
      />
      <path
        fill="url(#d)"
        d="M6.1 0h64c3.4 0 6.1 5 6.1 11.1v131c0 6.1-2.7 11.1-6.1 11.1h-64c-3.4 0-6.1-5-6.1-11.1v-131C0 5 2.7 0 6.1 0z"
        transform="translate(554.74 432.068)"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(564.176 465.21)"
      >
        <tspan
          x={16.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E333"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={4}
        d="M500.597 395.517v41.7"
      />
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={4} d="M500.597 437.252h47.2" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m547.797 431.252 12 6-12 6v-12"
        />
      </g>
      <path
        fill="url(#d)"
        d="M0 12.4h63.5V0H0v12.4z"
        transform="translate(946.974 420.922)"
      />
      <path
        fill="url(#e)"
        d="M0 2.8h63.5V0H0v2.8z"
        transform="translate(946.974 429.383)"
      />
      <path
        fill="url(#d)"
        d="M0 11.3h63.5V0H0v11.3z"
        transform="translate(946.974 585.072)"
      />
      <path
        fill="url(#e)"
        d="M0 3.2h63.5V0H0v3.2z"
        transform="translate(946.974 584.854)"
      />
      <path
        fill="url(#d)"
        d="M6.1 0h64c3.4 0 6.1 5 6.1 11.1v131c0 6.1-2.7 11.1-6.1 11.1h-64c-3.4 0-6.1-5-6.1-11.1v-131C0 5 2.7 0 6.1 0z"
        transform="translate(940.59 432.07)"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(953.455 465.21)"
      >
        <tspan
          x={16.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E206"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={4}
        d="M593.279 598.226v158"
      />
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M795.589 830.669v-21.8" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m801.589 830.669-6 12-6-12h12"
        />
      </g>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M838.498 830.669v-23.8" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m844.498 830.669-6 12-6-12h12"
        />
      </g>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M880.552 830.669v-266.2" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m886.552 830.669-6 12-6-12h12"
        />
      </g>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M919.169 830.669v-21.8" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m925.169 830.669-6 12-6-12h12"
        />
      </g>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M956.929 831.663v-21.8" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m962.929 831.663-6 12-6-12h12"
        />
      </g>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M993.83 830.669v-21.8" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m999.83 830.669-6 12-6-12h12"
        />
      </g>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={4}
        d="m593.279 756.22 202.356 52.676"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 806.997 553.787)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 807.285 562.744)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 684.79 -122.087)"
      />
      <path
        fill="#7c7c7c"
        d="M806.321 562.372v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(815.44 565.252)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(816.276 559.95)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 823.257 542.889)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 831.14 562.216)"
      />
      <path
        fill="#7c7c7c"
        d="M822.838 560.58c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M822.815 549.63c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 137.253 687.516)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 838.145 541.311)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 148.6 689.952)"
      />
      <path
        fill="#7c7c7c"
        d="M839.109 541.683v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M802.837 570.316h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(802.837 570.316)"
      >
        <tspan
          x={17.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G334A"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={4}
        d="M806.104 557.91h-177.6M838.715 546.555h28.3M705.699 556.492v90.4M705.699 646.916h29.2"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 723.32 643.492)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 723.609 652.449)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 687.805 -35.397)"
      />
      <path
        fill="#7c7c7c"
        d="M722.645 652.077v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(731.765 654.957)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(732.6 649.655)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 739.58 632.594)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 747.464 651.921)"
      />
      <path
        fill="#7c7c7c"
        d="M739.162 650.285c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M739.139 639.334c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 50.562 690.53)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 754.47 631.016)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 61.91 692.966)"
      />
      <path
        fill="#7c7c7c"
        d="M755.433 631.388v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M705.43 661.017h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(705.43 661.017)"
      >
        <tspan
          x={17.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G334B"}
        </tspan>
      </text>
      <path
        fill="url(#f)"
        stroke="#696969"
        d="M0 0h25.7v42.2H0V0z"
        transform="translate(764.14 604.75)"
      />
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={4}
        d="M755.473 635.985h8.6"
      />
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={4}
        d="M981.172 597.232v160M981.172 757.213l-61.995 51.664M776.927 646.916v109.3M776.927 756.22l61.537 50.649"
      />
      <path
        fill="url(#f)"
        stroke="#696969"
        d="M0 0h25.7v42.2H0V0z"
        transform="translate(1220.32 522.54)"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 1160.238 554.733)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 1160.526 563.69)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 861.884 -298.235)"
      />
      <path
        fill="#7c7c7c"
        d="M1159.562 563.318v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(1168.682 566.198)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(1169.517 560.896)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 1176.498 543.835)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 1184.38 563.162)"
      />
      <path
        fill="#7c7c7c"
        d="M1176.079 561.526c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1176.056 550.575c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 313.4 864.61)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 1191.386 542.257)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 324.748 867.045)"
      />
      <path
        fill="#7c7c7c"
        d="M1192.35 542.63v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M1154.364 571.264h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1154.364 571.264)"
      >
        <tspan
          x={17.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G216A"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={4}
        d="M1159.34 558.856h-142.5M1191.95 547.498h28.3M1049.5 557.435v90.4M1049.5 647.859h38.6"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 1069.688 644.432)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 1069.976 653.389)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 861.459 -208.11)"
      />
      <path
        fill="#7c7c7c"
        d="M1069.012 653.017v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(1078.132 655.897)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(1078.967 650.595)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 1085.948 633.534)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 1093.83 652.861)"
      />
      <path
        fill="#7c7c7c"
        d="M1085.529 651.225c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1085.506 640.274c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 223.276 864.184)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 1100.836 631.956)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 234.623 866.62)"
      />
      <path
        fill="#7c7c7c"
        d="M1101.8 632.328v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M1053.514 660.963h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1053.514 660.963)"
      >
        <tspan
          x={17.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G216B"}
        </tspan>
      </text>
      <path
        fill="url(#f)"
        stroke="#696969"
        d="M0 0h25.7v42.2H0V0z"
        transform="translate(1117.38 605.69)"
      />
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={4}
        d="M1101.85 636.928h15.4"
      />
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={4}
        d="M1127.92 648.903v107.3M1127.92 756.22l-170.98 53.654M1234.33 564.441v191.8M1234.33 756.22l-240.501 52.664"
      />
      <path
        fill="url(#m)"
        d="M0 0h25.9v9.7H0V0z"
        transform="matrix(-1 0 0 1 680.478 552.831)"
      />
      <path
        fill="url(#n)"
        d="M.2 0h15.4c.1 0 .2.1.2.2v13c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="matrix(-1 0 0 1 675.448 530.994)"
      />
      <path
        fill="#b4b5b5"
        d="M674.673 531.735h-14.3c-.1 0-.2.1-.2.2v11.5c0 .1.1.2.2.2h14.3c.1 0 .2-.1.2-.2v-11.5c0-.1-.1-.2-.2-.2z"
      />
      <path fill="#7c7c7c" d="M674.416 532.348h-13.7v10.7h13.7v-10.7z" />
      <path
        fill="url(#o)"
        d="M0 0h3.7v8.7s0 .6-1.8.6S0 8.7 0 8.7V0z"
        transform="matrix(-1 0 0 1 669.406 544.331)"
      />
      <path
        fill="url(#m)"
        d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
        transform="matrix(-1 0 0 1 678.53 550.635)"
      />
      <path
        fill="url(#m)"
        d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
        transform="matrix(-1 0 0 1 658.147 550.635)"
      />
      <path
        fill="url(#p)"
        d="M0 0h.3v9.7H0V0z"
        transform="matrix(-1 0 0 1 676.944 552.843)"
      />
      <path
        fill="url(#p)"
        d="M0 0h.3v9.7H0V0z"
        transform="matrix(-1 0 0 1 658.509 552.843)"
      />
      <path
        fill="url(#q)"
        d="M0 0h17.2v2.5H0V0z"
        transform="matrix(-1 0 0 1 676.137 536.456)"
      />
      <path
        fill="url(#o)"
        d="M0 0h1.8v1H0V0z"
        transform="matrix(-1 0 0 1 673.743 529.996)"
      />
      <path
        fill="url(#o)"
        d="M0 0h.9v1H0V0z"
        transform="matrix(-1 0 0 1 673.294 529.04)"
      />
      <path
        fill="url(#m)"
        d="M0 0h.7v2.5H0V0z"
        transform="matrix(-1 0 0 1 676.137 540.564)"
      />
      <path
        fill="url(#m)"
        d="M0 0h7.2v.8H0V0z"
        transform="matrix(-1 0 0 1 683.235 541.382)"
      />
      <path
        fill="url(#m)"
        d="M0 0h8.1v.7H0V0z"
        transform="rotate(-90 617.129 -66.388)"
      />
      <path
        fill="url(#r)"
        d="M0 0s.5 0 .8.4c.2.3.2.9.2.9H.3S.3.9 0 .8V0z"
        transform="translate(683.233 541.382)"
      />
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M776.53 604.673v-7.1" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m771.63 597.573 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path fill="#fff" d="M757.19 565.435h38.6v20.1h-38.6v-20.1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(757.19 565.435)"
      >
        <tspan
          x={9.3}
          y={14.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"ATM"}
        </tspan>
      </text>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1130.3 605.689v-7.1" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1125.4 598.589 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path fill="#fff" d="M1110.951 565.812h38.6v20.1h-38.6v-20.1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1110.951 565.812)"
      >
        <tspan
          x={9.3}
          y={14.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"ATM"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(868.343 929.118)"
      >
        <tspan
          x={16.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F306"}
        </tspan>
      </text>
      <path fill="#fff" d="M643.156 494.541h51.1v30h-51.1v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(643.156 494.541)"
      >
        <tspan
          x={12}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV340"}
        </tspan>
      </text>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M879.943 524.574v-7.1" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m875.043 517.474 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path fill="#fff" d="M860.6 485.332h38.6v20.1h-38.6v-20.1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(860.6 485.332)"
      >
        <tspan
          x={9.3}
          y={14.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"ATM"}
        </tspan>
      </text>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1233.17 525.52v-7.1" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1228.27 518.42 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path fill="#fff" d="M1213.841 487.272h38.6v20.1h-38.6v-20.1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1213.841 487.272)"
      >
        <tspan
          x={9.3}
          y={14.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"ATM"}
        </tspan>
      </text>
      <path
        fill="url(#m)"
        d="M0 0h25.9v9.7H0V0z"
        transform="matrix(-1 0 0 1 1514.078 139.033)"
      />
      <path
        fill="url(#n)"
        d="M.2 0h15.4c.1 0 .2.1.2.2v13c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="matrix(-1 0 0 1 1509.048 117.196)"
      />
      <path
        fill="#b4b5b5"
        d="M1508.273 117.937h-14.3c-.1 0-.2.1-.2.2v11.5c0 .1.1.2.2.2h14.3c.1 0 .2-.1.2-.2v-11.5c0-.1-.1-.2-.2-.2z"
      />
      <path fill="#7c7c7c" d="M1508.016 118.55h-13.7v10.7h13.7v-10.7z" />
      <path
        fill="url(#o)"
        d="M0 0h3.7v8.7s0 .6-1.8.6S0 8.7 0 8.7V0z"
        transform="matrix(-1 0 0 1 1503.006 130.533)"
      />
      <path
        fill="url(#m)"
        d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
        transform="matrix(-1 0 0 1 1512.13 136.837)"
      />
      <path
        fill="url(#m)"
        d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
        transform="matrix(-1 0 0 1 1491.747 136.837)"
      />
      <path
        fill="url(#p)"
        d="M0 0h.3v9.7H0V0z"
        transform="matrix(-1 0 0 1 1510.544 139.045)"
      />
      <path
        fill="url(#p)"
        d="M0 0h.3v9.7H0V0z"
        transform="matrix(-1 0 0 1 1492.109 139.045)"
      />
      <path
        fill="url(#q)"
        d="M0 0h17.2v2.5H0V0z"
        transform="matrix(-1 0 0 1 1509.737 122.658)"
      />
      <path
        fill="url(#o)"
        d="M0 0h1.8v1H0V0z"
        transform="matrix(-1 0 0 1 1507.343 116.198)"
      />
      <path
        fill="url(#o)"
        d="M0 0h.9v1H0V0z"
        transform="matrix(-1 0 0 1 1506.894 115.242)"
      />
      <path
        fill="url(#m)"
        d="M0 0h.7v2.5H0V0z"
        transform="matrix(-1 0 0 1 1509.737 126.766)"
      />
      <path
        fill="url(#m)"
        d="M0 0h7.2v.8H0V0z"
        transform="matrix(-1 0 0 1 1516.835 127.584)"
      />
      <path
        fill="url(#m)"
        d="M0 0h8.1v.7H0V0z"
        transform="rotate(-90 827.03 -690.087)"
      />
      <path
        fill="url(#r)"
        d="M0 0s.5 0 .8.4c.2.3.2.9.2.9H.3S.3.9 0 .8V0z"
        transform="translate(1516.833 127.584)"
      />
      <path fill="#fff" d="M1476.758 80.742h51.1v30h-51.1v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1476.758 80.742)"
      >
        <tspan
          x={12}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV338"}
        </tspan>
      </text>
      <path
        fill="red"
        stroke="#92d050"
        d="M1722.444 147.578h-7.5v4.4l-11.2-8.9 11.2-8.8v4.4h7.5v8.9z"
      />
      <path fill="#fff" d="M1727.978 128.1h51.1v30h-51.1v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1727.978 128.1)"
      >
        <tspan
          x={12.5}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Steam"}
        </tspan>
      </text>
      <path
        fill="url(#a)"
        d="M0 0h98.3v79.7H0V0z"
        transform="translate(1680.798 225.339)"
      />
      <path
        fill="url(#b)"
        d="M0 0h98.3v2H0V0z"
        transform="translate(1680.798 255.873)"
      />
      <path
        fill="url(#b)"
        d="M0 0h98.3v2H0V0z"
        transform="translate(1680.798 244.832)"
      />
      <path
        fill="url(#b)"
        d="M0 0h98.3v2H0V0z"
        transform="translate(1680.798 233.791)"
      />
      <g fill="url(#b)" transform="translate(1680.798 266.913)">
        <path d="M0 0h98.3v2H0V0zM0 11.33h98.3v2H0v-2zM0 22.081h98.3v2H0v-2zM0 33.122h98.3v2H0v-2z" />
      </g>
      <path
        fill="url(#c)"
        d="M0 0h98.3v4.2H0V0z"
        transform="translate(1680.798 304.738)"
      />
      <path
        fill="url(#c)"
        d="M0 0h98.3v4.2H0V0z"
        transform="translate(1680.798 221.512)"
      />
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={4}
        d="M738.309 632.011v-353.7M738.309 278.264h944.8M825.842 545.562v-266.3M1085.01 634.992v-356.7M1175.98 544.568v-266.3"
      />
      <path
        fill="url(#t)"
        d="M26.3 0H0v14.5h26.3V0z"
        transform="translate(1529.493 741.444)"
      />
      <path
        fill="url(#u)"
        d="M1.3 0h26.8c.8 0 1.4.7 1.4 1.5S28.9 3 28.1 3H1.3C.6 3 0 2.3 0 1.5S.6 0 1.3 0z"
        transform="translate(1527.905 738.522)"
      />
      <path
        fill="url(#t)"
        d="M26.3 0H0v14.5h26.3V0z"
        transform="translate(1592.507 741.444)"
      />
      <path
        fill="url(#u)"
        d="M1.3 0h26.8c.8 0 1.4.7 1.4 1.5S28.9 3 28.1 3H1.3C.6 3 0 2.3 0 1.5S.6 0 1.3 0z"
        transform="translate(1590.918 738.522)"
      />
      <path
        fill="#3e3938"
        stroke="#000"
        d="M1506.22 758.186h142.1v79.3h-142.1v-79.3z"
      />
      <path
        fill="url(#v)"
        d="M144.5 0H0v8h144.5V0z"
        transform="translate(1506.221 755.343)"
      />
      <path
        fill="url(#v)"
        d="M144.5 0H0v8h144.5V0z"
        transform="translate(1506.221 832.44)"
      />
      <path
        fill="url(#v)"
        d="M144.5 0H0v8h144.5V0z"
        transform="translate(1506.221 892.437)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 771.974)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 777.034)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 782.072)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 787.12)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 792.17)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 797.218)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 802.267)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 807.316)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 817.414)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 822.463)"
      />
      <path
        fill="url(#w)"
        d="M0 0h134.3v1.3H0V0z"
        transform="translate(1510.59 812.365)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 401.112 1164.521)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 399.016 1162.426)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 396.92 1160.33)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 394.825 1158.235)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 392.73 1156.14)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 390.634 1154.044)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 388.539 1151.948)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 386.443 1149.853)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 384.348 1147.757)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 380.317 1143.726)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 375.966 1139.375)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 378.141 1141.55)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 382.492 1145.902)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 428.352 1191.762)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 424.162 1187.572)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 422.066 1185.476)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 419.97 1183.38)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 417.875 1181.285)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 415.78 1179.19)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 413.684 1177.094)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 411.589 1174.999)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 409.494 1172.903)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 405.303 1168.712)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 403.207 1166.617)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 407.437 1170.847)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 438.83 1202.24)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 436.655 1200.065)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 432.303 1195.713)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 426.257 1189.667)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 430.448 1193.858)"
      />
      <path
        fill="url(#w)"
        d="M0 0h69.3v1.1H0V0z"
        transform="rotate(90 434.479 1197.889)"
      />
      <path
        fill="url(#v)"
        d="M144.5 0H0v4.6h144.5V0z"
        transform="translate(1505.508 763.345)"
      />
      <path
        fill="url(#v)"
        d="M144.5 0H0v5.1h144.5V0z"
        transform="translate(1506.221 827.595)"
      />
      <path
        fill="url(#x)"
        d="M5.8 0H0v148.1h5.8V0z"
        transform="translate(1644.876 755.342)"
      />
      <path
        fill="url(#x)"
        d="M5.8 0H0v148.1h5.8V0z"
        transform="translate(1504.796 755.342)"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(1703.754 267.334)"
      >
        <tspan
          x={16.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F310"}
        </tspan>
      </text>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M592.421 411.34v-72.5" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m598.421 411.34-6 12-6-12h12"
        />
      </g>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M978.597 411.34v-72.5" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m984.597 411.34-6 12-6-12h12"
        />
      </g>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={4}
        d="M592.421 338.878h782.6M1375.07 338.878v413.4M1375.07 752.245l-82.651 65.567"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 1367.178 875.786)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 1367.466 884.743)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 1125.88 -241.178)"
      />
      <path
        fill="#7c7c7c"
        d="M1366.502 884.371v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(1375.622 887.25)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(1376.457 881.95)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 1383.438 864.888)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 1391.32 884.215)"
      />
      <path
        fill="#7c7c7c"
        d="M1383.019 882.58c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1382.996 871.628c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 256.344 1128.606)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 1398.326 863.31)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 267.691 1131.042)"
      />
      <path
        fill="#7c7c7c"
        d="M1399.29 863.682v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path
        fill="url(#g)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 1368.038 923.541)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 1368.326 932.498)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 1150.188 -217.73)"
      />
      <path
        fill="#7c7c7c"
        d="M1367.362 932.126v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#j)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(1376.482 935.006)"
      />
      <path
        fill="url(#j)"
        stroke="#595959"
        d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
        transform="translate(1377.317 929.704)"
      />
      <path
        fill="url(#g)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 1384.298 912.643)"
      />
      <path
        fill="url(#k)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 1392.18 931.97)"
      />
      <path
        fill="#7c7c7c"
        d="M1383.879 930.334c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1383.856 919.383c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
      />
      <path
        fill="url(#l)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 232.896 1152.914)"
      />
      <path
        fill="url(#h)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 1399.186 911.065)"
      />
      <path
        fill="url(#i)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 244.244 1155.35)"
      />
      <path
        fill="#7c7c7c"
        d="M1400.15 911.437v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M1302.834 842.604h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1302.834 842.604)"
      >
        <tspan
          x={17.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G390A"}
        </tspan>
      </text>
      <path fill="#fff" d="M1302.834 888.63h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1302.834 888.63)"
      >
        <tspan
          x={17.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G390B"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={4}
        d="M1399.89 868.66h105.6M1367.7 927.376h-75.3M1365.12 879.909l-72.398-.474M1292.4 927.376v-109.5M1399.96 917.194h19.7M1418.84 917.194v-48.7M1578.46 900.302v26.8M1578.46 911.232h84.1M1660.84 911.232v-40.7M1662.56 870.492h-12.9M1651.4 847.637h36.9"
      />
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M1581.507 931.555v8.6h3.9l-7.7 13-7.6-13h3.8v-8.6h7.6zM1711.484 851.929h-7.5v4.4l-11.2-8.9 11.2-8.8v4.4h7.5v8.9z"
      />
      <path
        fill="url(#y)"
        d="M0 0h16.7v32.4H0V0z"
        transform="rotate(-90 1130.86 -395.372)"
      />
      <path
        fill="url(#z)"
        d="M0 0h51.8s4 1.2 4 20.8c0 19.5-4 19.2-4 19.2H0V0z"
        transform="rotate(-90 1120.37 -402.028)"
      />
      <path
        fill="url(#A)"
        d="M0 0h1.3v40H0V0z"
        transform="rotate(-90 1120.37 -402.028)"
      />
      <path
        fill="url(#z)"
        d="M.3 0H3c.1 0 .3.2.3.4v43.2c0 .2-.2.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.4C0 .2.1 0 .3 0z"
        transform="rotate(-90 1120.83 -399.6)"
      />
      <g fill="url(#z)" transform="rotate(-90 1120.494 -405.578)">
        <path d="M.3 13.315h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 8.882h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 17.748h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 22.181h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 26.614h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 31.048h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 4.449h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3.015h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5z" />
      </g>
      <path
        fill="url(#B)"
        d="M.3 0h2.4c.2 0 .3.1.3.3v34.8c0 .2-.1.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.3C0 .1.1 0 .3 0z"
        transform="rotate(-90 1131.593 -393.08)"
      />
      <path
        fill="url(#z)"
        d="m0 0 9.4.1s4.1 1.2 4.1 21.6c0 20.3-4.1 20-4.1 20L0 41.6V0z"
        transform="rotate(-90 1098.823 -422.732)"
      />
      <path
        fill="url(#A)"
        d="M0 0h1v40H0V0z"
        transform="rotate(-90 1099.75 -422.65)"
      />
      <path
        fill="url(#y)"
        d="M0 0h16.7v32.4H0V0z"
        transform="rotate(-90 1162.35 -426.862)"
      />
      <path
        fill="url(#z)"
        d="M0 0h51.8s4 1.2 4 20.8c0 19.5-4 19.2-4 19.2H0V0z"
        transform="rotate(-90 1151.86 -433.518)"
      />
      <path
        fill="url(#A)"
        d="M0 0h1.3v40H0V0z"
        transform="rotate(-90 1151.86 -433.518)"
      />
      <path
        fill="url(#z)"
        d="M.3 0H3c.1 0 .3.2.3.4v43.2c0 .2-.2.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.4C0 .2.1 0 .3 0z"
        transform="rotate(-90 1152.32 -431.09)"
      />
      <g fill="url(#z)" transform="rotate(-90 1151.984 -437.068)">
        <path d="M.3 13.315h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 8.882h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 17.748h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 22.181h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 26.614h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 31.048h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 4.449h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3.015h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5z" />
      </g>
      <path
        fill="url(#B)"
        d="M.3 0h2.4c.2 0 .3.1.3.3v34.8c0 .2-.1.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.3C0 .1.1 0 .3 0z"
        transform="rotate(-90 1163.083 -424.57)"
      />
      <path
        fill="url(#z)"
        d="m0 0 9.4.1s4.1 1.2 4.1 21.6c0 20.3-4.1 20-4.1 20L0 41.6V0z"
        transform="rotate(-90 1130.313 -454.222)"
      />
      <path
        fill="url(#A)"
        d="M0 0h1v40H0V0z"
        transform="rotate(-90 1131.24 -454.14)"
      />
      <path fill="#fff" d="M1550.504 852.605h54.5v29h-54.5v-29z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(1550.504 852.605)"
      >
        <tspan
          x={16.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F390"}
        </tspan>
      </text>
      <path fill="#fff" d="M1500.614 627.234h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1500.614 627.234)"
      >
        <tspan
          x={18.4}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F390A"}
        </tspan>
      </text>
      <path fill="#fff" d="M1583.414 627.234h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1583.414 627.234)"
      >
        <tspan
          x={18.4}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F390B"}
        </tspan>
      </text>
      <path fill="#fff" d="M1721.11 823.07h79.5v48.8h-79.5v-48.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1721.11 823.07)"
      >
        <tspan
          x={10.3}
          y={28.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Makeup Water"}
        </tspan>
      </text>
      <path fill="#fff" d="M1545.854 967.871h63.8v30h-63.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1545.854 967.871)"
      >
        <tspan
          x={21.4}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Drain"}
        </tspan>
      </text>
      <path fill="#fff" d="M1041.85 970.75h79.5v48.8h-79.5v-48.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1041.85 970.75)"
      >
        <tspan
          x={14.3}
          y={28.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Waste Water"}
        </tspan>
      </text>
      <path
        fill="url(#C)"
        d="M.2 0h13.2c.2 0 .3.1.3.2v12.6c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 -29.716 653.105)"
      />
      <path
        fill="url(#D)"
        d="M0 0h.9v14H0V0z"
        transform="rotate(90 -47.422 641.76)"
      />
      <path
        fill="url(#E)"
        d="M0 0h3.9v.9H0V0z"
        transform="rotate(90 -38.618 649.111)"
      />
      <path
        fill="url(#D)"
        d="M0 0h2.8v15.4H0V0z"
        transform="rotate(90 -39.298 648.934)"
      />
      <path
        fill="url(#E)"
        d="M.2 0h13.4c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 -29.513 653.186)"
      />
      <path
        fill="url(#F)"
        d="M.2 0h9.6c.1 0 .2.1.2.2v4.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 -32.708 651.955)"
      />
      <path fill="#3e3938" d="M618.82 685.166v9h-3.8v-9h3.8z" />
      <path
        fill="url(#G)"
        d="M.1 0h13.6s.1 0 .1.1v1.3c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
        transform="rotate(90 -35.434 647.34)"
      />
      <path
        fill="url(#C)"
        d="M.2 0h13.2c.2 0 .3.1.3.2v12.6c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 159.963 851.081)"
      />
      <path
        fill="url(#D)"
        d="M0 0h.9v14H0V0z"
        transform="rotate(90 142.257 839.737)"
      />
      <path
        fill="url(#E)"
        d="M0 0h3.9v.9H0V0z"
        transform="rotate(90 151.06 847.087)"
      />
      <path
        fill="url(#D)"
        d="M0 0h2.8v15.4H0V0z"
        transform="rotate(90 150.38 846.91)"
      />
      <path
        fill="url(#E)"
        d="M.2 0h13.4c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 160.166 851.162)"
      />
      <path
        fill="url(#F)"
        d="M.2 0h9.6c.1 0 .2.1.2.2v4.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 156.971 849.931)"
      />
      <path fill="#3e3938" d="M1006.474 693.463v9h-3.8v-9h3.8z" />
      <path
        fill="url(#G)"
        d="M.1 0h13.6s.1 0 .1.1v1.3c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
        transform="rotate(90 154.245 845.316)"
      />
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M1011.377 711.356h96.6v45.7h-96.6v-45.7z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1014.23 735.398h90.2v19.1h-90.2v-19.1z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1014.23 735.398)"
      >
        <tspan
          x={21.1}
          y={14.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
                  {`${value['TIR204']} \xB0C`}

        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1014.23 715.382h90.2v18.5h-90.2v-18.5z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1014.23 715.382)"
      >
        <tspan
          x={22.1}
          y={13.7}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TIR204"}
        </tspan>
      </text>
      <path fill="none" stroke="#236ea1" d="M909.944 438.245h33.9" />
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M889.357 433.783h7.5v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.5v-8.9z"
      />
      <path fill="#fff" d="M847.298 413.848h38.6v48.8h-38.6v-48.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(847.298 413.848)"
      >
        <tspan
          x={8.3}
          y={21.4}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"From"}
        </tspan>
        <tspan
          x={8.8}
          y={36.4}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F207"}
        </tspan>
      </text>
      <path
        fill="#92d050"
        stroke="#000"
        d="M1756.502 288.297c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
      />
      <path fill="#fff" d="M1783.81 273.295h74.7v30h-74.7v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1783.81 273.295)"
      >
        <tspan
          x={21.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LAL310"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fill: "#ff0",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "30pt",
          fontWeight: 700,
        }}
        transform="translate(22.124 12.834)"
      >
        <tspan
          x={731.3}
          y={58.2}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            textDecoration: "underline",
          }}
        >
          {"L1500 - VACUUM SECTION"}
        </tspan>
      </text>
      <path
        fill="#fffff"
        stroke="#3498db"
        d="M1532.41 672.554c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"
      />
      <path
        fill="red"
        stroke="#3498db"
        d="M1595.39 672.554c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z"
      />
    </svg>
  )
}
export default VacuumHMI
