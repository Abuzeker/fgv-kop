import React from 'react'

const VacuumHMI = () => {
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1935}
        height={1095}
        viewBox="8 10 1920 1080"
      >
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
        <path fill="#0e2350" d="M7.532 7.532h1920v1080h-1920v-1080z" />
        <path
          fill="url(#a)"
          d="M0 0h261.7v119.8H0V0z"
          transform="translate(770.197 848.356)"
        />
        <path
          fill="url(#b)"
          d="M0 0h261.7v3H0V0z"
          transform="translate(770.197 852.76)"
        />
        <path
          fill="url(#b)"
          d="M0 0h261.7v3H0V0z"
          transform="translate(770.197 869.344)"
        />
        <path
          fill="url(#b)"
          d="M0 0h261.7v3H0V0z"
          transform="translate(770.197 894.219)"
        />
        <path
          fill="url(#b)"
          d="M0 0h261.7v3H0V0z"
          transform="translate(770.197 902.51)"
        />
        <path
          fill="url(#b)"
          d="M0 0h261.7v3H0V0z"
          transform="translate(770.197 877.636)"
        />
        <path
          fill="url(#b)"
          d="M0 0h261.7v3H0V0z"
          transform="translate(770.197 885.927)"
        />
        <path
          fill="url(#b)"
          d="M0 0h261.7v3H0V0z"
          transform="translate(770.197 861.052)"
        />
        <g fill="url(#b)" transform="translate(770.197 910.802)">
          <path d="M0 0h261.7v3H0V0zM0 8.434h261.7v3H0v-3zM0 17.02h261.7v3H0v-3zM0 24.875h261.7v3H0v-3zM0 33.167h261.7v3H0v-3zM0 41.165h261.7v3H0v-3zM0 49.75h261.7v3H0v-3z" />
        </g>
        <path
          fill="url(#c)"
          d="M0 0h261.7v6.3H0V0z"
          transform="translate(770.197 967.617)"
        />
        <path
          fill="url(#c)"
          d="M0 0h276.3v6.3H0V0z"
          transform="translate(761.615 842.608)"
        />
        <path
          fill="url(#c)"
          d="M0 0h276.3v6.3H0V0z"
          transform="translate(762.902 911.295)"
        />
        <path
          fill="none"
          stroke="#92d050"
          strokeWidth={2.667}
          d="M1030.925 919.194h51.5M1081.556 919.194v18.9"
        />
        <path
          fill="#92d050"
          stroke="#92d050"
          d="M1085.384 940.102v8.6h3.9l-7.7 13-7.6-13h3.8v-8.6h7.6z"
        />
        <path
          fill="url(#d)"
          d="M0 12.4h63.5V0H0v12.4z"
          transform="translate(355.087 523.083)"
        />
        <path
          fill="url(#e)"
          d="M0 2.8h63.5V0H0v2.8z"
          transform="translate(355.087 531.543)"
        />
        <path
          fill="url(#d)"
          d="M0 11.3h63.5V0H0v11.3z"
          transform="translate(355.087 687.233)"
        />
        <path
          fill="url(#e)"
          d="M0 3.2h63.5V0H0v3.2z"
          transform="translate(355.087 687.015)"
        />
        <path
          fill="url(#d)"
          d="M6.1 0h64c3.4 0 6.1 5 6.1 11.1v131c0 6.1-2.7 11.1-6.1 11.1h-64c-3.4 0-6.1-5-6.1-11.1v-131C0 5 2.7 0 6.1 0z"
          transform="translate(348.702 534.23)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
            fontWeight: 700,
          }}
          transform="translate(358.138 567.375)"
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
          transform="translate(867.075 521.603)"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 105.95 626.897)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 106.238 635.853)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 370.822 264.991)"
        />
        <path
          fill="#7c7c7c"
          d="M105.274 635.481v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(114.394 638.36)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(115.229 633.06)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 122.21 615.998)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 130.093 635.326)"
        />
        <path
          fill="#7c7c7c"
          d="M121.79 633.69c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M121.768 622.738c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 -249.825 373.548)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 137.098 614.42)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 -238.478 375.983)"
        />
        <path
          fill="#7c7c7c"
          d="M138.062 614.792v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 106.808 674.652)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 107.096 683.609)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 395.129 288.44)"
        />
        <path
          fill="#7c7c7c"
          d="M106.132 683.237v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(115.252 686.117)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(116.087 680.815)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 123.068 663.754)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 130.951 683.081)"
        />
        <path
          fill="#7c7c7c"
          d="M122.649 681.445c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M122.626 670.494c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 -273.274 397.855)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 137.956 662.176)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 -261.927 400.29)"
        />
        <path
          fill="#7c7c7c"
          d="M138.92 662.548v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path fill="#fff" d="M41.611 593.72h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(41.611 593.72)"
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
        <path fill="#fff" d="M41.611 639.741h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(41.611 639.741)"
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
          d="M231.348 618.103v98.4M137.804 666.473h94.4M106.477 678.49h-75.3"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 106.516 722.153)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 106.804 731.11)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 418.733 312.336)"
        />
        <path
          fill="#7c7c7c"
          d="M105.84 730.737v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(114.96 733.617)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(115.795 728.316)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 122.776 711.254)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 130.66 730.582)"
        />
        <path
          fill="#7c7c7c"
          d="M122.357 728.946c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M122.334 717.995c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 -297.17 421.459)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 137.665 709.677)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 -285.823 423.894)"
        />
        <path
          fill="#7c7c7c"
          d="M138.628 710.049v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path fill="#fff" d="M41.32 686.983h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(41.32 686.983)"
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
          d="M103.902 631.021h-73.2M106.477 724.426h-75.3"
        />
        <g stroke="#00b0f0">
          <path fill="none" strokeWidth={4} d="M138.448 618.103h198.3" />
          <path
            fill="#00b0f0"
            strokeLinecap="round"
            d="m336.748 612.103 12 6-12 6v-12"
          />
        </g>
        <path
          fill="none"
          stroke="#00b0f0"
          strokeWidth={4}
          d="M137.59 715.483h94.4"
        />
        <path
          fill="url(#m)"
          d="M0 0h29.9v8.4H0V0z"
          transform="rotate(90 -195.88 431.291)"
        />
        <path
          fill="url(#n)"
          d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
          transform="rotate(90 -189.363 443.633)"
        />
        <path
          fill="#b4b5b5"
          d="M253.63 633.862v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
        />
        <path fill="#7c7c7c" d="M253.101 634.19v15.9h-9.2v-15.9h9.2z" />
        <path
          fill="url(#o)"
          d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
          transform="rotate(90 -198.62 441.372)"
        />
        <path
          fill="url(#m)"
          d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
          transform="rotate(90 -196.06 433.368)"
        />
        <path
          fill="url(#m)"
          d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
          transform="rotate(90 -207.86 445.168)"
        />
        <path
          fill="url(#p)"
          d="M0 0h.4v8.4H0V0z"
          transform="rotate(90 -197.931 433.332)"
        />
        <path
          fill="url(#p)"
          d="M0 0h.4v8.4H0V0z"
          transform="rotate(90 -208.604 444.005)"
        />
        <path
          fill="url(#q)"
          d="M0 0h19.9v2.1H0V0z"
          transform="rotate(90 -191.322 440.875)"
        />
        <path
          fill="url(#o)"
          d="M0 0h2.1v.9H0V0z"
          transform="rotate(90 -189.919 445.051)"
        />
        <path
          fill="url(#o)"
          d="M0 0h1.1v.9H0V0z"
          transform="rotate(90 -189.766 445.724)"
        />
        <path
          fill="url(#m)"
          d="M0 0h.8v2.1H0V0z"
          transform="rotate(90 -193.096 439.101)"
        />
        <path
          fill="url(#m)"
          d="M0 0h8.3v.7H0V0z"
          transform="rotate(90 -189.34 434.64)"
        />
        <path
          fill="url(#m)"
          d="M0 0h7v.8H0V0z"
          transform="matrix(1 0 0 -1 237.217 623.653)"
        />
        <path
          fill="url(#r)"
          d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
          transform="matrix(0 -1 -1 0 245.299 623.982)"
        />
        <path fill="#fff" d="M256.816 627.086h51.1v30h-51.1v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(256.816 627.086)"
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
          d="M401.905 544.072c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
        />
        <path fill="#fff" d="M427.498 529.07h74.7v30h-74.7v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(427.498 529.07)"
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
        <g fill="url(#s)" stroke="#9b9b9b" transform="rotate(180 258.45 197.139)">
          <path d="M10.826 0h13.6v5h-13.6V0z" />
          <path d="M10.826 4.628h13.6v12.4h-13.6v-12.4z" />
          <path d="M3.174 17.023h29.2l-9.6 53.4v10.1h-10v-10.1l-9.6-53.4zM0 80.553h35.1v34H0v-34z" />
          <path d="M0 85.313h35.1v2.2H0v-2.2zM0 108.848h35.1v2.2H0v-2.2z" />
        </g>
        <g fill="url(#s)" stroke="#9b9b9b" transform="rotate(90 71.987 351.732)">
          <path d="M12.535 0h15.8v4.3h-15.8V0z" />
          <path d="M12.535 3.997h15.8v10.7h-15.8v-10.7zM3.675 14.702h33.8l-11.2 46.1v8.7h-11.4v-8.7l-11.2-46.1zM0 69.569h40.7v29.3H0v-29.3z" />
          <path d="M0 73.68h40.7v1.9H0v-1.9zM0 94.005h40.7v1.9H0v-1.9z" />
        </g>
        <g stroke="red">
          <path fill="none" strokeWidth={4} d="M338.4 268.256v-124.1" />
          <path fill="red" strokeLinecap="round" d="m344.4 268.256-6 12-6-12h12" />
        </g>
        <path fill="none" stroke="red" strokeWidth={4} d="M338.4 144.123h1356.8" />
        <g stroke="red">
          <path fill="none" strokeWidth={4} d="M500.594 268.256v-124.1" />
          <path
            fill="red"
            strokeLinecap="round"
            d="m506.594 268.256-6 12-6-12h12"
          />
        </g>
        <g stroke="#00b0f0">
          <path fill="none" strokeWidth={4} d="M313.528 300.129h-65.2" />
          <path
            fill="#00b0f0"
            strokeLinecap="round"
            d="m313.528 294.129 12 6-12 6v-12"
          />
        </g>
        <path
          fill="#92d050"
          stroke="#92d050"
          d="M224.31 295.627h7.5v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.5v-8.9z"
        />
        <path fill="#fff" d="M136.73 275.693h79.5v48.8h-79.5v-48.8z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(136.73 275.693)"
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
        <path fill="#fff" d="M324.804 325.403h74.7v30h-74.7v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(324.804 325.403)"
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
        <path fill="#fff" d="M432.413 321.428h53.6v30h-53.6v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(432.413 321.428)"
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
          <path fill="none" strokeWidth={4} d="M424.217 300.129h44.6" />
          <path
            fill="#00b0f0"
            strokeLinecap="round"
            d="m468.817 294.129 12 6-12 6v-12"
          />
        </g>
        <path
          fill="url(#d)"
          d="M0 12.4h63.5V0H0v12.4z"
          transform="translate(561.12 420.924)"
        />
        <path
          fill="url(#e)"
          d="M0 2.8h63.5V0H0v2.8z"
          transform="translate(561.12 429.385)"
        />
        <path
          fill="url(#d)"
          d="M0 11.3h63.5V0H0v11.3z"
          transform="translate(561.12 585.075)"
        />
        <path
          fill="url(#e)"
          d="M0 3.2h63.5V0H0v3.2z"
          transform="translate(561.12 584.857)"
        />
        <path
          fill="url(#d)"
          d="M6.1 0h64c3.4 0 6.1 5 6.1 11.1v131c0 6.1-2.7 11.1-6.1 11.1h-64c-3.4 0-6.1-5-6.1-11.1v-131C0 5 2.7 0 6.1 0z"
          transform="translate(554.736 432.072)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
            fontWeight: 700,
          }}
          transform="translate(564.172 465.213)"
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
          d="M500.594 395.521v41.7"
        />
        <g stroke="#00b0f0">
          <path fill="none" strokeWidth={4} d="M500.594 437.255h47.2" />
          <path
            fill="#00b0f0"
            strokeLinecap="round"
            d="m547.794 431.255 12 6-12 6v-12"
          />
        </g>
        <path
          fill="url(#d)"
          d="M0 12.4h63.5V0H0v12.4z"
          transform="translate(946.971 420.925)"
        />
        <path
          fill="url(#e)"
          d="M0 2.8h63.5V0H0v2.8z"
          transform="translate(946.971 429.386)"
        />
        <path
          fill="url(#d)"
          d="M0 11.3h63.5V0H0v11.3z"
          transform="translate(946.971 585.076)"
        />
        <path
          fill="url(#e)"
          d="M0 3.2h63.5V0H0v3.2z"
          transform="translate(946.971 584.858)"
        />
        <path
          fill="url(#d)"
          d="M6.1 0h64c3.4 0 6.1 5 6.1 11.1v131c0 6.1-2.7 11.1-6.1 11.1h-64c-3.4 0-6.1-5-6.1-11.1v-131C0 5 2.7 0 6.1 0z"
          transform="translate(940.586 432.073)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
            fontWeight: 700,
          }}
          transform="translate(953.451 465.214)"
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
          d="M593.276 598.23v158"
        />
        <g stroke="#92d050">
          <path fill="none" strokeWidth={4} d="M795.586 830.673v-21.8" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m801.586 830.673-6 12-6-12h12"
          />
        </g>
        <g stroke="#92d050">
          <path fill="none" strokeWidth={4} d="M838.494 830.673v-23.8" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m844.494 830.673-6 12-6-12h12"
          />
        </g>
        <g stroke="#92d050">
          <path fill="none" strokeWidth={4} d="M880.548 830.673v-266.2" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m886.548 830.673-6 12-6-12h12"
          />
        </g>
        <g stroke="#92d050">
          <path fill="none" strokeWidth={4} d="M919.166 830.673v-21.8" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m925.166 830.673-6 12-6-12h12"
          />
        </g>
        <g stroke="#92d050">
          <path fill="none" strokeWidth={4} d="M956.925 831.666v-21.8" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m962.925 831.666-6 12-6-12h12"
          />
        </g>
        <g stroke="#92d050">
          <path fill="none" strokeWidth={4} d="M993.826 830.673v-21.8" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m999.826 830.673-6 12-6-12h12"
          />
        </g>
        <path
          fill="none"
          stroke="#92d050"
          strokeWidth={4}
          d="M593.276 756.224 795.632 808.9"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 806.993 553.791)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 807.281 562.748)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 684.791 -122.083)"
        />
        <path
          fill="#7c7c7c"
          d="M806.318 562.376v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(815.437 565.256)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(816.272 559.954)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 823.253 542.893)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 831.136 562.22)"
        />
        <path
          fill="#7c7c7c"
          d="M822.834 560.584c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M822.811 549.633c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 137.249 687.517)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 838.141 541.315)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 148.596 689.952)"
        />
        <path
          fill="#7c7c7c"
          d="M839.105 541.687v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path fill="#fff" d="M802.833 570.32h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(802.833 570.32)"
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
          d="M806.1 557.914H628.5M838.711 546.56h28.3M705.695 556.496v90.4M705.695 646.92h29.2"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 723.317 643.497)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 723.605 652.453)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 687.806 -35.392)"
        />
        <path
          fill="#7c7c7c"
          d="M722.641 652.082v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(731.76 654.961)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(732.596 649.66)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 739.577 632.598)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 747.46 651.926)"
        />
        <path
          fill="#7c7c7c"
          d="M739.158 650.29c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M739.135 639.339c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 50.558 690.531)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 754.465 631.02)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 61.905 692.966)"
        />
        <path
          fill="#7c7c7c"
          d="M755.429 631.393v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path fill="#fff" d="M705.426 661.022h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(705.426 661.022)"
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
          transform="translate(764.136 604.754)"
        />
        <path
          fill="none"
          stroke="#00b0f0"
          strokeWidth={4}
          d="M755.469 635.99h8.6"
        />
        <path
          fill="none"
          stroke="#92d050"
          strokeWidth={4}
          d="M981.168 597.236v160M981.168 757.217l-61.994 51.664M776.923 646.92v109.3M776.923 756.224l61.537 50.649"
        />
        <path
          fill="url(#f)"
          stroke="#696969"
          d="M0 0h25.7v42.2H0V0z"
          transform="translate(1220.313 522.544)"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 1160.234 554.737)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 1160.522 563.694)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 861.884 -298.23)"
        />
        <path
          fill="#7c7c7c"
          d="M1159.558 563.322v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(1168.678 566.202)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(1169.513 560.9)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 1176.494 543.839)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 1184.377 563.166)"
        />
        <path
          fill="#7c7c7c"
          d="M1176.075 561.53c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M1176.052 550.58c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 313.396 864.61)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 1191.382 542.261)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 324.744 867.045)"
        />
        <path
          fill="#7c7c7c"
          d="M1192.346 542.633v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path fill="#fff" d="M1154.358 571.268h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1154.358 571.268)"
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
          d="M1159.34 558.86h-142.5M1191.95 547.502h28.3M1049.495 557.439v90.4M1049.495 647.863h38.6"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 1069.689 644.436)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 1069.977 653.392)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 861.461 -208.109)"
        />
        <path
          fill="#7c7c7c"
          d="M1069.013 653.02v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(1078.133 655.9)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(1078.968 650.599)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 1085.949 633.537)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 1093.832 652.865)"
        />
        <path
          fill="#7c7c7c"
          d="M1085.53 651.229c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M1085.507 640.278c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 223.275 864.187)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 1100.837 631.96)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 234.622 866.622)"
        />
        <path
          fill="#7c7c7c"
          d="M1101.8 632.332v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path fill="#fff" d="M1053.515 660.967h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1053.515 660.967)"
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
          transform="translate(1117.376 605.694)"
        />
        <path
          fill="none"
          stroke="#00b0f0"
          strokeWidth={4}
          d="M1101.844 636.932h15.4"
        />
        <path
          fill="none"
          stroke="#92d050"
          strokeWidth={4}
          d="M1127.915 648.907v107.3M1127.915 756.224l-170.98 53.654M1234.327 564.445v191.8M1234.327 756.224l-240.501 52.664"
        />
        <path
          fill="url(#m)"
          d="M0 0h25.9v9.7H0V0z"
          transform="matrix(-1 0 0 1 680.474 552.835)"
        />
        <path
          fill="url(#n)"
          d="M.2 0h15.4c.1 0 .2.1.2.2v13c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
          transform="matrix(-1 0 0 1 675.444 530.998)"
        />
        <path
          fill="#b4b5b5"
          d="M674.669 531.739h-14.3c-.1 0-.2.1-.2.2v11.5c0 .1.1.2.2.2h14.3c.1 0 .2-.1.2-.2v-11.5c0-.1-.1-.2-.2-.2z"
        />
        <path fill="#7c7c7c" d="M674.412 532.352h-13.7v10.7h13.7v-10.7z" />
        <path
          fill="url(#o)"
          d="M0 0h3.7v8.7s0 .6-1.8.6S0 8.7 0 8.7V0z"
          transform="matrix(-1 0 0 1 669.401 544.335)"
        />
        <path
          fill="url(#m)"
          d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
          transform="matrix(-1 0 0 1 678.525 550.639)"
        />
        <path
          fill="url(#m)"
          d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
          transform="matrix(-1 0 0 1 658.143 550.639)"
        />
        <path
          fill="url(#p)"
          d="M0 0h.3v9.7H0V0z"
          transform="matrix(-1 0 0 1 676.94 552.847)"
        />
        <path
          fill="url(#p)"
          d="M0 0h.3v9.7H0V0z"
          transform="matrix(-1 0 0 1 658.505 552.847)"
        />
        <path
          fill="url(#q)"
          d="M0 0h17.2v2.5H0V0z"
          transform="matrix(-1 0 0 1 676.133 536.46)"
        />
        <path
          fill="url(#o)"
          d="M0 0h1.8v1H0V0z"
          transform="matrix(-1 0 0 1 673.739 530)"
        />
        <path
          fill="url(#o)"
          d="M0 0h.9v1H0V0z"
          transform="matrix(-1 0 0 1 673.29 529.044)"
        />
        <path
          fill="url(#m)"
          d="M0 0h.7v2.5H0V0z"
          transform="matrix(-1 0 0 1 676.133 540.568)"
        />
        <path
          fill="url(#m)"
          d="M0 0h7.2v.8H0V0z"
          transform="matrix(-1 0 0 1 683.23 541.386)"
        />
        <path
          fill="url(#m)"
          d="M0 0h8.1v.7H0V0z"
          transform="rotate(-90 617.129 -66.384)"
        />
        <path
          fill="url(#r)"
          d="M0 0s.5 0 .8.4c.2.3.2.9.2.9H.3S.3.9 0 .8V0z"
          transform="translate(683.228 541.386)"
        />
        <g stroke="#92d050">
          <path fill="none" strokeWidth={2.667} d="M776.527 604.677v-7.1" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m771.627 597.577 4.9-9.8 4.9 9.8h-9.8"
          />
        </g>
        <path fill="#fff" d="M757.185 565.44h38.6v20.1h-38.6v-20.1z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(757.185 565.44)"
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
          <path fill="none" strokeWidth={2.667} d="M1130.292 605.693v-7.1" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m1125.392 598.593 4.9-9.8 4.9 9.8h-9.8"
          />
        </g>
        <path fill="#fff" d="M1110.949 565.816h38.6v20.1h-38.6v-20.1z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1110.949 565.816)"
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
          transform="translate(868.339 929.122)"
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
        <path fill="#fff" d="M643.152 494.545h51.1v30h-51.1v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(643.152 494.545)"
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
          <path fill="none" strokeWidth={2.667} d="M879.939 524.578v-7.1" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m875.039 517.478 4.9-9.8 4.9 9.8h-9.8"
          />
        </g>
        <path fill="#fff" d="M860.596 485.336h38.6v20.1h-38.6v-20.1z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(860.596 485.336)"
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
          <path fill="none" strokeWidth={2.667} d="M1233.169 525.524v-7.1" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m1228.269 518.424 4.9-9.8 4.9 9.8h-9.8"
          />
        </g>
        <path fill="#fff" d="M1213.834 487.276h38.6v20.1h-38.6v-20.1z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1213.834 487.276)"
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
          transform="matrix(-1 0 0 1 1514.076 139.037)"
        />
        <path
          fill="url(#n)"
          d="M.2 0h15.4c.1 0 .2.1.2.2v13c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
          transform="matrix(-1 0 0 1 1509.046 117.2)"
        />
        <path
          fill="#b4b5b5"
          d="M1508.27 117.94h-14.3c-.1 0-.2.1-.2.2v11.5c0 .1.1.2.2.2h14.3c.1 0 .2-.1.2-.2v-11.5c0-.1-.1-.2-.2-.2z"
        />
        <path fill="#7c7c7c" d="M1508.014 118.554h-13.7v10.7h13.7v-10.7z" />
        <path
          fill="url(#o)"
          d="M0 0h3.7v8.7s0 .6-1.8.6S0 8.7 0 8.7V0z"
          transform="matrix(-1 0 0 1 1503.003 130.537)"
        />
        <path
          fill="url(#m)"
          d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
          transform="matrix(-1 0 0 1 1512.127 136.841)"
        />
        <path
          fill="url(#m)"
          d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
          transform="matrix(-1 0 0 1 1491.744 136.841)"
        />
        <path
          fill="url(#p)"
          d="M0 0h.3v9.7H0V0z"
          transform="matrix(-1 0 0 1 1510.541 139.049)"
        />
        <path
          fill="url(#p)"
          d="M0 0h.3v9.7H0V0z"
          transform="matrix(-1 0 0 1 1492.106 139.049)"
        />
        <path
          fill="url(#q)"
          d="M0 0h17.2v2.5H0V0z"
          transform="matrix(-1 0 0 1 1509.735 122.662)"
        />
        <path
          fill="url(#o)"
          d="M0 0h1.8v1H0V0z"
          transform="matrix(-1 0 0 1 1507.34 116.202)"
        />
        <path
          fill="url(#o)"
          d="M0 0h.9v1H0V0z"
          transform="matrix(-1 0 0 1 1506.89 115.246)"
        />
        <path
          fill="url(#m)"
          d="M0 0h.7v2.5H0V0z"
          transform="matrix(-1 0 0 1 1509.735 126.77)"
        />
        <path
          fill="url(#m)"
          d="M0 0h7.2v.8H0V0z"
          transform="matrix(-1 0 0 1 1516.832 127.588)"
        />
        <path
          fill="url(#m)"
          d="M0 0h8.1v.7H0V0z"
          transform="rotate(-90 827.03 -690.084)"
        />
        <path
          fill="url(#r)"
          d="M0 0s.5 0 .8.4c.2.3.2.9.2.9H.3S.3.9 0 .8V0z"
          transform="translate(1516.83 127.588)"
        />
        <path fill="#fff" d="M1476.756 80.746h51.1v30h-51.1v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1476.756 80.746)"
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
          d="M1722.443 147.582h-7.5v4.4l-11.2-8.9 11.2-8.8v4.4h7.5v8.9z"
        />
        <path fill="#fff" d="M1727.976 128.104h51.1v30h-51.1v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1727.976 128.104)"
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
          transform="translate(1680.795 225.343)"
        />
        <path
          fill="url(#b)"
          d="M0 0h98.3v2H0V0z"
          transform="translate(1680.795 255.877)"
        />
        <path
          fill="url(#b)"
          d="M0 0h98.3v2H0V0z"
          transform="translate(1680.795 244.836)"
        />
        <path
          fill="url(#b)"
          d="M0 0h98.3v2H0V0z"
          transform="translate(1680.795 233.795)"
        />
        <g fill="url(#b)" transform="translate(1680.795 266.917)">
          <path d="M0 0h98.3v2H0V0zM0 11.33h98.3v2H0v-2zM0 22.081h98.3v2H0v-2zM0 33.122h98.3v2H0v-2z" />
        </g>
        <path
          fill="url(#c)"
          d="M0 0h98.3v4.2H0V0z"
          transform="translate(1680.795 304.743)"
        />
        <path
          fill="url(#c)"
          d="M0 0h98.3v4.2H0V0z"
          transform="translate(1680.795 221.516)"
        />
        <path
          fill="none"
          stroke="#92d050"
          strokeWidth={4}
          d="M738.306 632.015v-353.7M738.306 278.268h944.8M825.839 545.566v-266.3M1085.006 634.996v-356.7M1175.972 544.572v-266.3"
        />
        <path
          fill="url(#t)"
          d="M26.3 0H0v14.5h26.3V0z"
          transform="translate(1529.493 741.448)"
        />
        <path
          fill="url(#u)"
          d="M1.3 0h26.8c.8 0 1.4.7 1.4 1.5S28.9 3 28.1 3H1.3C.6 3 0 2.3 0 1.5S.6 0 1.3 0z"
          transform="translate(1527.905 738.526)"
        />
        <path
          fill="url(#t)"
          d="M26.3 0H0v14.5h26.3V0z"
          transform="translate(1592.506 741.448)"
        />
        <path
          fill="url(#u)"
          d="M1.3 0h26.8c.8 0 1.4.7 1.4 1.5S28.9 3 28.1 3H1.3C.6 3 0 2.3 0 1.5S.6 0 1.3 0z"
          transform="translate(1590.918 738.526)"
        />
        <path
          fill="#3e3938"
          stroke="#000"
          d="M1506.22 758.19h142.1v79.3h-142.1v-79.3z"
        />
        <path
          fill="url(#v)"
          d="M144.5 0H0v8h144.5V0z"
          transform="translate(1506.22 755.347)"
        />
        <path
          fill="url(#v)"
          d="M144.5 0H0v8h144.5V0z"
          transform="translate(1506.22 832.444)"
        />
        <path
          fill="url(#v)"
          d="M144.5 0H0v8h144.5V0z"
          transform="translate(1506.22 892.44)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 771.978)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 777.038)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 782.076)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 787.125)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 792.173)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 797.222)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 802.271)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 807.32)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 817.418)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 822.466)"
        />
        <path
          fill="url(#w)"
          d="M0 0h134.3v1.3H0V0z"
          transform="translate(1510.59 812.369)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 401.11 1164.523)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 399.014 1162.427)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 396.918 1160.332)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 394.823 1158.236)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 392.727 1156.14)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 390.632 1154.045)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 388.536 1151.95)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 386.44 1149.854)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 384.345 1147.759)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 380.314 1143.728)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 375.963 1139.377)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 378.139 1141.552)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 382.49 1145.903)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 428.35 1191.764)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 424.16 1187.573)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 422.064 1185.477)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 419.969 1183.382)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 417.873 1181.286)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 415.778 1179.191)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 413.682 1177.095)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 411.587 1175)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 409.491 1172.905)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 405.3 1168.714)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 403.205 1166.618)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 407.435 1170.849)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 438.828 1202.241)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 436.652 1200.066)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 432.301 1195.715)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 426.255 1189.668)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 430.446 1193.86)"
        />
        <path
          fill="url(#w)"
          d="M0 0h69.3v1.1H0V0z"
          transform="rotate(90 434.477 1197.89)"
        />
        <path
          fill="url(#v)"
          d="M144.5 0H0v4.6h144.5V0z"
          transform="translate(1505.508 763.349)"
        />
        <path
          fill="url(#v)"
          d="M144.5 0H0v5.1h144.5V0z"
          transform="translate(1506.22 827.599)"
        />
        <path
          fill="url(#x)"
          d="M5.8 0H0v148.1h5.8V0z"
          transform="translate(1644.876 755.346)"
        />
        <path
          fill="url(#x)"
          d="M5.8 0H0v148.1h5.8V0z"
          transform="translate(1504.795 755.346)"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
            fontWeight: 700,
          }}
          transform="translate(1703.746 267.338)"
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
          <path fill="none" strokeWidth={4} d="M592.417 411.344v-72.5" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m598.417 411.344-6 12-6-12h12"
          />
        </g>
        <g stroke="#92d050">
          <path fill="none" strokeWidth={4} d="M978.594 411.344v-72.5" />
          <path
            fill="#92d050"
            strokeLinecap="round"
            d="m984.594 411.344-6 12-6-12h12"
          />
        </g>
        <path
          fill="none"
          stroke="#92d050"
          strokeWidth={4}
          d="M592.417 338.882h782.6M1375.066 338.882v413.4M1375.066 752.249l-82.65 65.568"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 1367.172 875.79)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 1367.46 884.747)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 1125.88 -241.173)"
        />
        <path
          fill="#7c7c7c"
          d="M1366.496 884.375v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(1375.616 887.254)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(1376.451 881.953)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 1383.432 864.892)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 1391.315 884.219)"
        />
        <path
          fill="#7c7c7c"
          d="M1383.013 882.583c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M1382.99 871.632c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 256.34 1128.605)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 1398.32 863.314)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 267.686 1131.04)"
        />
        <path
          fill="#7c7c7c"
          d="M1399.284 863.686v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path
          fill="url(#g)"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 1368.03 923.546)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 -1 -1 0 1368.318 932.502)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(-90 1150.187 -217.725)"
        />
        <path
          fill="#7c7c7c"
          d="M1367.355 932.13v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
        />
        <path
          fill="url(#j)"
          d="M0 0h14.7v2.3H0V0z"
          transform="translate(1376.474 935.01)"
        />
        <path
          fill="url(#j)"
          stroke="#595959"
          d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
          transform="translate(1377.31 929.709)"
        />
        <path
          fill="url(#g)"
          stroke="#595959"
          d="M0 0h7.4v15H0V0z"
          transform="matrix(0 1 1 0 1384.29 912.647)"
        />
        <path
          fill="url(#k)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
          transform="matrix(0 -1 -1 0 1392.173 931.975)"
        />
        <path
          fill="#7c7c7c"
          d="M1383.871 930.339c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
        />
        <path
          fill="#7c7c7c"
          stroke="#595959"
          strokeWidth={0.25}
          d="M1383.848 919.388c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
        />
        <path
          fill="url(#l)"
          stroke="#595959"
          strokeWidth={0.25}
          d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
          transform="rotate(90 232.89 1152.912)"
        />
        <path
          fill="url(#h)"
          d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
          transform="matrix(0 1 1 0 1399.179 911.07)"
        />
        <path
          fill="url(#i)"
          d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
          transform="rotate(90 244.238 1155.348)"
        />
        <path
          fill="#7c7c7c"
          d="M1400.142 911.442v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
        />
        <path fill="#fff" d="M1302.829 842.608h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1302.829 842.608)"
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
        <path fill="#fff" d="M1302.829 888.635h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1302.829 888.635)"
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
          d="M1399.884 868.664h105.6M1367.695 927.38h-75.3M1365.12 879.913l-72.398-.474M1292.4 927.38v-109.5M1399.953 917.198h19.7M1418.833 917.198v-48.7M1578.452 900.306v26.8M1578.452 911.236h84.1M1660.836 911.236v-40.7M1662.552 870.496h-12.9M1651.396 847.641h36.9"
        />
        <path
          fill="#92d050"
          stroke="#92d050"
          d="M1581.506 931.56v8.6h3.9l-7.7 13-7.6-13h3.8v-8.6h7.6zM1711.475 851.933h-7.5v4.4l-11.2-8.9 11.2-8.8v4.4h7.5v8.9z"
        />
        <path
          fill="url(#y)"
          d="M0 0h16.7v32.4H0V0z"
          transform="rotate(-90 1130.862 -395.369)"
        />
        <path
          fill="url(#z)"
          d="M0 0h51.8s4 1.2 4 20.8c0 19.5-4 19.2-4 19.2H0V0z"
          transform="rotate(-90 1120.372 -402.025)"
        />
        <path
          fill="url(#A)"
          d="M0 0h1.3v40H0V0z"
          transform="rotate(-90 1120.372 -402.025)"
        />
        <path
          fill="url(#z)"
          d="M.3 0H3c.1 0 .3.2.3.4v43.2c0 .2-.2.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.4C0 .2.1 0 .3 0z"
          transform="rotate(-90 1120.832 -399.598)"
        />
        <g fill="url(#z)" transform="rotate(-90 1120.496 -405.575)">
          <path d="M.3 13.315h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 8.882h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 17.748h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 22.181h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 26.614h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 31.048h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 4.449h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3.015h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5z" />
        </g>
        <path
          fill="url(#B)"
          d="M.3 0h2.4c.2 0 .3.1.3.3v34.8c0 .2-.1.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.3C0 .1.1 0 .3 0z"
          transform="rotate(-90 1131.595 -393.077)"
        />
        <path
          fill="url(#z)"
          d="m0 0 9.4.1s4.1 1.2 4.1 21.6c0 20.3-4.1 20-4.1 20L0 41.6V0z"
          transform="rotate(-90 1098.824 -422.73)"
        />
        <path
          fill="url(#A)"
          d="M0 0h1v40H0V0z"
          transform="rotate(-90 1099.751 -422.646)"
        />
        <path
          fill="url(#y)"
          d="M0 0h16.7v32.4H0V0z"
          transform="rotate(-90 1162.352 -426.86)"
        />
        <path
          fill="url(#z)"
          d="M0 0h51.8s4 1.2 4 20.8c0 19.5-4 19.2-4 19.2H0V0z"
          transform="rotate(-90 1151.863 -433.516)"
        />
        <path
          fill="url(#A)"
          d="M0 0h1.3v40H0V0z"
          transform="rotate(-90 1151.863 -433.516)"
        />
        <path
          fill="url(#z)"
          d="M.3 0H3c.1 0 .3.2.3.4v43.2c0 .2-.2.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.4C0 .2.1 0 .3 0z"
          transform="rotate(-90 1152.322 -431.088)"
        />
        <g fill="url(#z)" transform="rotate(-90 1151.986 -437.065)">
          <path d="M.3 13.315h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 8.882h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 17.748h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 22.181h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 26.614h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 31.048h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3 4.449h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5zM.3.015h34.8c.2 0 .3.2.3.5v.6c0 .3-.1.5-.3.5H.3c-.2 0-.3-.2-.3-.5v-.6c0-.3.1-.5.3-.5z" />
        </g>
        <path
          fill="url(#B)"
          d="M.3 0h2.4c.2 0 .3.1.3.3v34.8c0 .2-.1.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.3C0 .1.1 0 .3 0z"
          transform="rotate(-90 1163.085 -424.567)"
        />
        <path
          fill="url(#z)"
          d="m0 0 9.4.1s4.1 1.2 4.1 21.6c0 20.3-4.1 20-4.1 20L0 41.6V0z"
          transform="rotate(-90 1130.315 -454.22)"
        />
        <path
          fill="url(#A)"
          d="M0 0h1v40H0V0z"
          transform="rotate(-90 1131.242 -454.137)"
        />
        <path fill="#fff" d="M1550.503 852.61h54.5v29h-54.5v-29z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
            fontWeight: 700,
          }}
          transform="translate(1550.503 852.61)"
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
        <path fill="#fff" d="M1500.61 627.238h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1500.61 627.238)"
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
        <path fill="#fff" d="M1583.406 627.238h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1583.406 627.238)"
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
        <path fill="#fff" d="M1721.11 823.075h79.5v48.8h-79.5v-48.8z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1721.11 823.075)"
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
        <path fill="#fff" d="M1545.853 967.875h63.8v30h-63.8v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1545.853 967.875)"
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
        <path fill="#fff" d="M1041.846 970.753h79.5v48.8h-79.5v-48.8z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1041.846 970.753)"
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
          fill="none"
          stroke="#7e7e7e"
          d="M631.815 383.597h96.6v45.7h-96.6v-45.7z"
        />
        <path
          fill="#fff"
          stroke="#afafaf"
          d="M634.67 407.64h90.2v19.1h-90.2v-19.1z"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(634.67 407.64)"
        >
          <tspan
            x={43.6}
            y={14.1}
            style={{
              fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            }}
          >
            {"-"}
          </tspan>
        </text>
        <path
          fill="#fff"
          stroke="#afafaf"
          d="M634.67 387.624h90.2v18.5h-90.2v-18.5z"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(634.67 387.624)"
        >
          <tspan
            x={30.1}
            y={13.7}
            style={{
              fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            }}
          >
            {"PIR333"}
          </tspan>
        </text>
        <path
          fill="url(#C)"
          d="M.2 0h13.2c.2 0 .3.1.3.2v12.6c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
          transform="rotate(90 -29.72 653.105)"
        />
        <path
          fill="url(#D)"
          d="M0 0h.9v14H0V0z"
          transform="rotate(90 -47.426 641.76)"
        />
        <path
          fill="url(#E)"
          d="M0 0h3.9v.9H0V0z"
          transform="rotate(90 -38.622 649.112)"
        />
        <path
          fill="url(#D)"
          d="M0 0h2.8v15.4H0V0z"
          transform="rotate(90 -39.302 648.935)"
        />
        <path
          fill="url(#E)"
          d="M.2 0h13.4c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
          transform="rotate(90 -29.517 653.186)"
        />
        <path
          fill="url(#F)"
          d="M.2 0h9.6c.1 0 .2.1.2.2v4.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
          transform="rotate(90 -32.711 651.955)"
        />
        <path fill="#3e3938" d="M618.816 685.17v9h-3.8v-9h3.8z" />
        <path
          fill="url(#G)"
          d="M.1 0h13.6s.1 0 .1.1v1.3c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
          transform="rotate(90 -35.437 647.34)"
        />
        <path
          fill="none"
          stroke="#7e7e7e"
          d="M623.719 703.061h96.6v45.7h-96.6v-45.7z"
        />
        <path
          fill="#fff"
          stroke="#afafaf"
          d="M626.574 727.104h90.2v19.1h-90.2v-19.1z"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(626.574 727.104)"
        >
          <tspan
            x={43.6}
            y={14.1}
            style={{
              fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            }}
          >
            {"-"}
          </tspan>
        </text>
        <path
          fill="#fff"
          stroke="#afafaf"
          d="M626.574 707.087h90.2v18.5h-90.2v-18.5z"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(626.574 707.087)"
        >
          <tspan
            x={22.1}
            y={13.7}
            style={{
              fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            }}
          >
            {"TIR334  34"}
          </tspan>
        </text>
        <path
          fill="url(#C)"
          d="M.2 0h13.2c.2 0 .3.1.3.2v12.6c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
          transform="rotate(90 159.96 851.081)"
        />
        <path
          fill="url(#D)"
          d="M0 0h.9v14H0V0z"
          transform="rotate(90 142.253 839.737)"
        />
        <path
          fill="url(#E)"
          d="M0 0h3.9v.9H0V0z"
          transform="rotate(90 151.057 847.088)"
        />
        <path
          fill="url(#D)"
          d="M0 0h2.8v15.4H0V0z"
          transform="rotate(90 150.377 846.91)"
        />
        <path
          fill="url(#E)"
          d="M.2 0h13.4c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
          transform="rotate(90 160.162 851.162)"
        />
        <path
          fill="url(#F)"
          d="M.2 0h9.6c.1 0 .2.1.2.2v4.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
          transform="rotate(90 156.968 849.931)"
        />
        <path fill="#3e3938" d="M1006.47 693.467v9h-3.8v-9h3.8z" />
        <path
          fill="url(#G)"
          d="M.1 0h13.6s.1 0 .1.1v1.3c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
          transform="rotate(90 154.241 845.316)"
        />
        <path
          fill="none"
          stroke="#7e7e7e"
          d="M1011.374 711.36h96.6v45.7h-96.6v-45.7z"
        />
        <path
          fill="#fff"
          stroke="#afafaf"
          d="M1014.23 735.402h90.2v19.1h-90.2v-19.1z"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1014.23 735.402)"
        >
          <tspan
            x={21.1}
            y={14.1}
            style={{
              fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            }}
          >
            {"34.45 degC"}
          </tspan>
        </text>
        <path
          fill="#fff"
          stroke="#afafaf"
          d="M1014.23 715.386h90.2v18.5h-90.2v-18.5z"
        />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1014.23 715.386)"
        >
          <tspan
            x={22.1}
            y={13.7}
            style={{
              fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            }}
          >
            {"TIR204  32"}
          </tspan>
        </text>
        <path fill="none" stroke="#236ea1" d="M909.94 438.25h33.9" />
        <path
          fill="#92d050"
          stroke="#92d050"
          d="M889.353 433.787h7.5v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.5v-8.9z"
        />
        <path fill="#fff" d="M847.294 413.852h38.6v48.8h-38.6v-48.8z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(847.294 413.852)"
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
          d="M1756.495 288.301c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
        />
        <path fill="#fff" d="M1783.81 273.3h74.7v30h-74.7v-30z" />
        <text
          xmlSpace="preserve"
          style={{
            fill: "#000",
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            fontSize: "8pt",
          }}
          transform="translate(1783.81 273.3)"
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
          transform="translate(22.12 12.838)"
        >
          <tspan
            x={731.2}
            y={58.2}
            style={{
              fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
              textDecoration: "underline",
            }}
          >
            {"L1500 - VACUUM SECTION"}
          </tspan>
        </text>
      </svg>

    
  )
}

export default VacuumHMI