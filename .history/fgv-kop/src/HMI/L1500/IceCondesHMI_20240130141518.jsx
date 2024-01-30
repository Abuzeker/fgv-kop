import * as React from "react"
const IceCondesHMI = ({ value }) => {


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={'100%'}
      viewBox="8 8 1920 1080"
    >
      <defs>
        <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9db098" />
          <stop offset={0.15} stopColor="#d0e8cb" />
          <stop offset={0.25} stopColor="#d9ecd5" />
          <stop offset={0.44} stopColor="#b3c9ae" />
          <stop offset={0.6} stopColor="#9fb39b" />
          <stop offset={0.8} stopColor="#869782" />
          <stop offset={0.97} stopColor="#7a8a76" />
          <stop offset={1} stopColor="#a3b79e" />
        </linearGradient>
        <linearGradient id="b" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#6b8f62" />
          <stop offset={0.15} stopColor="#9cc691" />
          <stop offset={0.25} stopColor="#cde0c9" />
          <stop offset={0.52} stopColor="#7fa975" />
          <stop offset={0.69} stopColor="#719767" />
          <stop offset={0.8} stopColor="#6a8e61" />
          <stop offset={0.92} stopColor="#64865b" />
          <stop offset={1} stopColor="#739a6a" />
        </linearGradient>
        <linearGradient id="c" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#949494" />
          <stop offset={0.15} stopColor="#c6c6c6" />
          <stop offset={0.25} stopColor="#d1d1d1" />
          <stop offset={0.44} stopColor="#a9a9a9" />
          <stop offset={0.6} stopColor="#979797" />
          <stop offset={0.8} stopColor="#7e7e7e" />
          <stop offset={0.97} stopColor="#737373" />
          <stop offset={1} stopColor="#9a9a9a" />
        </linearGradient>
        <linearGradient id="d" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#8f8f8f" />
          <stop offset={0.15} stopColor="#c6c6c6" />
          <stop offset={0.25} stopColor="#e0e0e0" />
          <stop offset={0.52} stopColor="#a9a9a9" />
          <stop offset={0.69} stopColor="#979797" />
          <stop offset={0.8} stopColor="#8e8e8e" />
          <stop offset={0.92} stopColor="#868686" />
          <stop offset={1} stopColor="#9a9a9a" />
        </linearGradient>
        <linearGradient id="e" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#bac0c1" />
          <stop offset={0.15} stopColor="#f4fafc" />
          <stop offset={0.25} stopColor="#f8fcfd" />
          <stop offset={0.44} stopColor="#d5dbdd" />
          <stop offset={0.6} stopColor="#bdc3c4" />
          <stop offset={0.8} stopColor="#a0a4a6" />
          <stop offset={0.97} stopColor="#929697" />
          <stop offset={1} stopColor="#c2c7c9" />
        </linearGradient>
        <linearGradient id="f" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#b5b5b5" />
          <stop offset={0.03} stopColor="#fff" />
          <stop offset={0.08} stopColor="#ebebeb" />
          <stop offset={0.64} stopColor="#e7e7e7" />
          <stop offset={0.95} stopColor="#e2e2e2" />
          <stop offset={1} stopColor="#a8a8a8" />
        </linearGradient>
        <linearGradient id="g" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#bac0c1" />
          <stop offset={0.15} stopColor="#f4fafc" />
          <stop offset={0.25} stopColor="#f8fcfd" />
          <stop offset={0.44} stopColor="#d5dbdd" />
          <stop offset={0.6} stopColor="#bdc3c4" />
          <stop offset={0.8} stopColor="#a0a4a6" />
          <stop offset={0.97} stopColor="#929697" />
          <stop offset={1} stopColor="#c2c7c9" />
        </linearGradient>
        <linearGradient id="h" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#939798" />
          <stop offset={0.15} stopColor="#c5cacb" />
          <stop offset={0.25} stopColor="#dfe2e2" />
          <stop offset={0.44} stopColor="#a8adae" />
          <stop offset={0.6} stopColor="#959a9b" />
          <stop offset={0.8} stopColor="#7d8182" />
          <stop offset={0.97} stopColor="#727676" />
          <stop offset={1} stopColor="#999d9e" />
        </linearGradient>
        <linearGradient id="i" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#669336" />
          <stop offset={0.03} stopColor="#afda8c" />
          <stop offset={0.08} stopColor="#86bf49" />
          <stop offset={0.64} stopColor="#84bc48" />
          <stop offset={0.95} stopColor="#81b846" />
          <stop offset={1} stopColor="#5e8831" />
        </linearGradient>
        <linearGradient
          id="j"
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
        <linearGradient id="k" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#c40000" />
          <stop offset={0.15} stopColor="#ff4545" />
          <stop offset={0.25} stopColor="#ffb3b3" />
          <stop offset={0.44} stopColor="#df0000" />
          <stop offset={0.6} stopColor="#c70000" />
          <stop offset={0.8} stopColor="#a80000" />
          <stop offset={0.97} stopColor="#900" />
          <stop offset={1} stopColor="#cb0000" />
        </linearGradient>
        <linearGradient id="l" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#b50000" />
          <stop offset={0.03} stopColor="#ff7c7c" />
          <stop offset={0.08} stopColor="#eb0000" />
          <stop offset={0.64} stopColor="#e70000" />
          <stop offset={0.95} stopColor="#e20000" />
          <stop offset={1} stopColor="#a80000" />
        </linearGradient>
        <linearGradient id="m" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#c40000" />
          <stop offset={0.15} stopColor="#ff4545" />
          <stop offset={0.25} stopColor="#ffb3b3" />
          <stop offset={0.44} stopColor="#df0000" />
          <stop offset={0.6} stopColor="#c70000" />
          <stop offset={0.8} stopColor="#a80000" />
          <stop offset={0.97} stopColor="#900" />
          <stop offset={1} stopColor="#cb0000" />
        </linearGradient>
        <linearGradient
          id="n"
          x1={0}
          x2={1}
          y1={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#c70000" />
          <stop offset={0.15} stopColor="#ff8686" />
          <stop offset={0.25} stopColor="#ff9393" />
          <stop offset={0.52} stopColor="#df0000" />
          <stop offset={0.69} stopColor="#c70000" />
          <stop offset={0.8} stopColor="#bc0000" />
          <stop offset={0.92} stopColor="#b10000" />
        </linearGradient>
        <linearGradient id="o" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#a9b1aa" />
          <stop offset={0.22} stopColor="#bec7c0" />
          <stop offset={0.57} stopColor="#e4e9e5" />
          <stop offset={0.84} stopColor="#d6ddd7" />
          <stop offset={1} stopColor="#b7c0b9" />
        </linearGradient>
        <linearGradient id="p" x1="0%" x2="0%" y1="100%" y2="0%">
          <stop offset={0} stopColor="#a9b1aa" />
          <stop offset={0.22} stopColor="#bec7c0" />
          <stop offset={0.57} stopColor="#e4e9e5" />
          <stop offset={0.84} stopColor="#d6ddd7" />
          <stop offset={1} stopColor="#b7c0b9" />
        </linearGradient>
        <linearGradient id="q" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#849c87" />
          <stop offset={0.22} stopColor="#95b098" />
          <stop offset={0.57} stopColor="#d1ddd3" />
          <stop offset={0.84} stopColor="#b8cbba" />
          <stop offset={1} stopColor="#90a992" />
        </linearGradient>
        <linearGradient id="r" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#676767" />
          <stop offset={0.22} stopColor="#747474" />
          <stop offset={0.57} stopColor="#c5c5c5" />
          <stop offset={0.84} stopColor="#a2a2a2" />
          <stop offset={1} stopColor="#707070" />
        </linearGradient>
        <linearGradient id="s" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#5e5e5e" />
          <stop offset={0.64} stopColor="#b8b8b8" />
          <stop offset={1} stopColor="#656565" />
        </linearGradient>
        <linearGradient id="t" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#545454" />
          <stop offset={0.66} stopColor="#c5c5c5" />
          <stop offset={1} stopColor="#515151" />
        </linearGradient>
        <linearGradient id="u" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#565656" />
          <stop offset={0.03} stopColor="#a2a2a2" />
          <stop offset={0.05} stopColor="#727272" />
          <stop offset={0.64} stopColor="#707070" />
          <stop offset={0.95} stopColor="#6d6d6d" />
          <stop offset={1} stopColor="#4f4f4f" />
        </linearGradient>
        <linearGradient id="x" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0.25} stopColor="#ebebeb" />
          <stop offset={0.37} stopColor="#c2c2c2" />
          <stop offset={0.82} stopColor="#6185a8" />
          <stop offset={0.85} stopColor="#909090" stopOpacity={0.47} />
        </linearGradient>
        <linearGradient id="y" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#afafaf" />
          <stop offset={0.59} stopColor="#e5e5e5" />
          <stop offset={1} stopColor="#afafaf" />
        </linearGradient>
        <linearGradient id="z" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#b3a593" />
          <stop offset={0.03} stopColor="#fdeeda" />
          <stop offset={0.05} stopColor="#e9d7bf" />
          <stop offset={0.64} stopColor="#e5d3bc" />
          <stop offset={0.95} stopColor="#e0ceb8" />
          <stop offset={1} stopColor="#a69988" />
        </linearGradient>
        <linearGradient id="A" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9e9e9e" />
          <stop offset={0.15} stopColor="#f6f6f6" />
          <stop offset={0.26} stopColor="#fff" />
          <stop offset={0.41} stopColor="#fff" />
          <stop offset={0.6} stopColor="#d1d1d1" />
          <stop offset={0.8} stopColor="#a8a8a8" />
          <stop offset={0.93} stopColor="#898989" />
        </linearGradient>
        <linearGradient id="B" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9c9080" />
          <stop offset={0.15} stopColor="#f4e1c8" />
          <stop offset={0.26} stopColor="#fdebd5" />
          <stop offset={0.41} stopColor="#fde9d1" />
          <stop offset={0.6} stopColor="#d0bfaa" />
          <stop offset={0.8} stopColor="#a69988" />
          <stop offset={0.93} stopColor="#887d6f" />
        </linearGradient>
        <linearGradient id="C" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} />
          <stop offset={0.03} stopColor="#7c7c7c" />
          <stop offset={0.05} />
          <stop offset={0.64} />
          <stop offset={0.95} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient id="D" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#b3a593" />
          <stop offset={0.03} stopColor="#fdeeda" />
          <stop offset={0.05} stopColor="#e9d7bf" />
          <stop offset={0.64} stopColor="#e5d3bc" />
          <stop offset={0.95} stopColor="#e0ceb8" />
          <stop offset={1} stopColor="#a69988" />
        </linearGradient>
        <linearGradient id="E" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#777" />
          <stop offset={0.15} stopColor="#bbb" />
          <stop offset={0.26} stopColor="#c9c9c9" />
          <stop offset={0.41} stopColor="#c3c3c3" />
          <stop offset={0.6} stopColor="#9f9f9f" />
          <stop offset={0.8} stopColor="#7e7e7e" />
          <stop offset={0.93} stopColor="#676767" />
        </linearGradient>
        <radialGradient
          id="v"
          cx={10}
          cy={8}
          r={12.7}
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
          id="w"
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
        d="M0 16h80.2V0H0v16z"
        transform="rotate(90 -96.015 777.307)"
      />
      <path
        fill="url(#b)"
        d="M0 3.6h80.2V0H0v3.6z"
        transform="rotate(90 -101.454 771.867)"
      />
      <path
        fill="url(#a)"
        d="M0 14.5h80.2V0H0v14.5z"
        transform="rotate(90 -201.555 671.767)"
      />
      <path
        fill="url(#b)"
        d="M0 4.2h80.2V0H0v4.2z"
        transform="rotate(90 -201.414 671.907)"
      />
      <path
        fill="url(#a)"
        d="M7.8 0h80.8c4.3 0 7.8 6.4 7.8 14.2v168.5c0 7.9-3.5 14.2-7.8 14.2H7.8c-4.3 0-7.8-6.3-7.8-14.2V14.2C0 6.4 3.5 0 7.8 0z"
        transform="rotate(90 -99.145 766.102)"
      />
      <path
        fill="url(#a)"
        d="M0 26.6h71.1V0H0v26.6z"
        transform="rotate(90 264.402 480.985)"
      />
      <path
        fill="url(#b)"
        d="M0 6h71.1V0H0v6z"
        transform="rotate(90 255.334 471.918)"
      />
      <path
        fill="url(#a)"
        d="M0 24.2h71.1V0H0v24.2z"
        transform="rotate(90 88.482 305.065)"
      />
      <path
        fill="url(#b)"
        d="M0 6.9h71.1V0H0v6.9z"
        transform="rotate(90 88.715 305.299)"
      />
      <path
        fill="url(#a)"
        d="M6.9 0h71.7c3.8 0 6.9 10.6 6.9 23.7v280.9c0 13.1-3.1 23.7-6.9 23.7H6.9c-3.8 0-6.9-10.6-6.9-23.7V23.7C0 10.6 3.1 0 6.9 0z"
        transform="rotate(90 256.034 465.46)"
      />
      <path
        fill="url(#a)"
        d="M0 19.8h94.3V0H0v19.8z"
        transform="rotate(90 616.925 862.077)"
      />
      <path
        fill="url(#b)"
        d="M0 4.5h94.3V0H0v4.5z"
        transform="rotate(90 610.186 855.338)"
      />
      <path
        fill="url(#a)"
        d="M0 18h94.3V0H0v18z"
        transform="rotate(90 486.18 731.331)"
      />
      <path
        fill="url(#b)"
        d="M0 5.1h94.3V0H0v5.1z"
        transform="rotate(90 486.353 731.505)"
      />
      <path
        fill="url(#a)"
        d="M9.1 0h95.1c5 0 9.1 7.9 9.1 17.6v208.7c0 9.8-4.1 17.7-9.1 17.7H9.1c-5 0-9.1-7.9-9.1-17.7V17.6C0 7.9 4.1 0 9.1 0z"
        transform="rotate(90 612.79 848.453)"
      />
      <path
        fill="url(#a)"
        d="M0 17.5h109.9V0H0v17.5z"
        transform="translate(1655.685 108.099)"
      />
      <path
        fill="url(#b)"
        d="M0 3.9h109.9V0H0v3.9z"
        transform="translate(1655.685 120.007)"
      />
      <path
        fill="url(#a)"
        d="M0 15.9h109.9V0H0v15.9z"
        transform="translate(1655.685 339.14)"
      />
      <path
        fill="url(#b)"
        d="M0 4.5h109.9V0H0v4.5z"
        transform="translate(1655.685 338.834)"
      />
      <path
        fill="url(#a)"
        d="M10.6 0h110.8c5.9 0 10.7 7 10.7 15.6V200c0 8.6-4.8 15.6-10.7 15.6H10.6c-5.8 0-10.6-7-10.6-15.6V15.6C0 7 4.8 0 10.6 0z"
        transform="translate(1644.623 123.789)"
      />
      <path
        fill="#bcbcbc"
        stroke="#000"
        d="M964.143 604.781c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4z"
      />
      <path
        fill="url(#c)"
        d="M0 22.4h94.3V0H0v22.4z"
        transform="rotate(90 211.434 792.044)"
      />
      <path
        fill="url(#d)"
        d="M0 5.1h94.3V0H0v5.1z"
        transform="rotate(90 203.79 784.4)"
      />
      <path
        fill="url(#c)"
        d="M0 20.4h94.3V0H0v20.4z"
        transform="rotate(90 63.118 643.728)"
      />
      <path
        fill="url(#d)"
        d="M0 5.8h94.3V0H0v5.8z"
        transform="rotate(90 63.315 643.925)"
      />
      <path
        fill="url(#c)"
        d="M9.1 0h95.1c5 0 9.1 9 9.1 20v236.8c0 11-4.1 20-9.1 20H9.1c-5 0-9.1-9-9.1-20V20C0 9 4.1 0 9.1 0z"
        transform="rotate(90 206.107 777.227)"
      />
      <path
        fill={value['Pre-Cooling E333'] === "True" ? "#00FF00" : "#bcbcbc"}
        stroke="#000"
        d="M964.049 604.762c0-6.6 4.6-12 10.3-12 5.7 0 10.3 5.4 10.3 12s-4.6 12-10.3 12c-5.7 0-10.3-5.4-10.3-12z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(864.18 589.78)"
      >
        <tspan
          x={19.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"PRE COOLING"}
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
        transform="translate(757.351 571.125)"
      >
        <tspan
          x={34.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E332B - ICE CONDENSER"}
        </tspan>
      </text>
      <path
        fill={value['Loading E333'] === "True" ? "#00FF00" : "#bcbcbc"}
        stroke="#000"
        d="M964.143 634.81c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4z"
      />
      <path
        fill={value['Melting E333'] === "True" ? "#00FF00" : "#bcbcbc"}
        stroke="#000"
        d="M964.433 664.948c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(880.417 619.808)"
      >
        <tspan
          x={31.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LOADING"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(882.127 649.946)"
      >
        <tspan
          x={30.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"MELTING"}
        </tspan>
      </text>
      <path
        fill="url(#c)"
        d="M0 22.4h94.3V0H0v22.4z"
        transform="rotate(90 -78.48 502.13)"
      />
      <path
        fill="url(#d)"
        d="M0 5.1h94.3V0H0v5.1z"
        transform="rotate(90 -86.114 494.496)"
      />
      <path
        fill="url(#c)"
        d="M0 20.4h94.3V0H0v20.4z"
        transform="rotate(90 -226.605 354.005)"
      />
      <path
        fill="url(#d)"
        d="M0 5.8h94.3V0H0v5.8z"
        transform="rotate(90 -226.409 354.201)"
      />
      <path
        fill="url(#c)"
        d="M9.1 0h95.1c5 0 9.1 8.9 9.1 20v236.4c0 11.1-4.1 20-9.1 20H9.1c-5 0-9.1-8.9-9.1-20V20C0 8.9 4.1 0 9.1 0z"
        transform="rotate(90 -83.794 487.327)"
      />
      <path
        fill={value['Pre-Cooling E332'] === "True" ? "#00FF00" : "#bcbcbc"}
        stroke="#000"
        d="M389.396 604.781c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(289.434 589.78)"
      >
        <tspan
          x={19.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"PRE COOLING"}
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
        transform="translate(155.26 571.125)"
      >
        <tspan
          x={34.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E332A - ICE CONDENSER"}
        </tspan>
      </text>
      <path
        fill="#92d050"
        stroke="#000"
        d="M389.396 634.81c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4z"
      />
      <path
        fill={value['Melting E332'] === "True" ? "#00FF00" : "#bcbcbc"}
        stroke="#000"
        d="M389.687 664.948c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(305.67 619.808)"
      >
        <tspan
          x={31.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LOADING"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(307.38 649.946)"
      >
        <tspan
          x={30.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"MELTING"}
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
        transform="translate(471.486 898.44)"
      >
        <tspan
          x={37.2}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E332 - MELTING VESSEL"}
        </tspan>
      </text>
      <path
        fill="#00b0f0"
        stroke="#3498db"
        d="M481.314 500.753h153v30.6h-153v-30.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(491.772 501.35)"
      >
        <tspan
          x={26.5}
          y={19.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"STEP INDICATOR"}
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
        transform="translate(467.191 235.662)"
      >
        <tspan
          x={51.2}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"D331 SEPARATOR"}
        </tspan>
      </text>
      <path
        fill="#92d050"
        stroke="#3498db"
        d="M481.314 599.236h153v30.6h-153v-30.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(491.772 599.832)"
      >
        <tspan
          x={27.5}
          y={19.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"STEP INDICATOR"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#3498db"
        d="M481.314 631.059h76.1v25.4h-76.1v-25.4z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(481.314 631.059)"
      >
        <tspan
          x={25.5}
          y={17.2}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['Pre-Cooling Pv']} Pv`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#3498db"
        d="M558.229 631.44h76.1v25.7h-76.1v-25.7z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(570.193 629.454)"
      >
        <tspan
          x={14.8}
          y={19.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['Pre-Cooling Sv']} Sv`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#3498db"
        d="M481.314 713.121h153v30.6h-153v-30.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(481.314 713.121)"
      >
        <tspan
          x={32}
          y={19.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"CONDENSATE TIME"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#3498db"
        d="M478.75 496.666h158.1v276.2h-158.1v-276.2z"
      />
      <path
        fill="#fff"
        stroke="#8d9cb1"
        d="M481.314 531.376h153v61.2h-153v-61.2z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(481.314 531.376)"
      >
        <tspan
          x={71.5}
          y={27.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['Ice Condenser Steps']}`}
        </tspan>
        <tspan
          x={46.5}
          y={42.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"MAIN CYCLE"}
        </tspan>
      </text>
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M399.711 575.095v-274.1" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m394.811 300.995 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M715.476 573.108v-272.1" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m710.576 301.008 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={2.667} d="M139.472 298.855v262.5" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m144.372 561.355-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={2.667}
        d="M139.473 422.07h831.5"
      />
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={2.667} d="M971.005 422.07v140.2" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m975.905 562.27-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M450.549 295.197v454.8M659.927 295.198v453.8M659.926 748.988h55.5"
      />
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M715.476 748.988v-56.8" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m710.576 692.188 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M450.548 749.981h-51.3"
      />
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M399.711 749.981v-59.8" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m394.811 690.181 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={2.667} d="M240.316 421.077v140.2" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m245.216 561.277-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={2.667} d="M345.432 492.484v79.6" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m340.532 492.484 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(90 -178.818 322.612)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 -172.34 334.915)"
      />
      <path
        fill="#b4b5b5"
        d="M161.938 508.12v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
      />
      <path fill="#7c7c7c" d="M161.41 508.45v15.9h-9.2v-15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(90 -181.573 332.678)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -179.002 324.685)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -190.802 336.485)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 -180.87 324.653)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 -191.542 335.326)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(90 -174.29 332.167)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(90 -172.898 336.331)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(90 -172.747 337.003)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(90 -176.056 330.4)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(90 -172.3 325.94)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(1 0 0 -1 145.592 497.912)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 -1 -1 0 153.64 498.241)"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(90 -128.42 373.01)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 -121.942 385.313)"
      />
      <path
        fill="#b4b5b5"
        d="M262.734 508.12v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
      />
      <path fill="#7c7c7c" d="M262.207 508.45v15.9h-9.2v-15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(90 -131.175 383.076)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -128.604 375.083)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -140.404 386.883)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 -130.471 375.051)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 -141.144 385.724)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(90 -123.892 382.565)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(90 -122.5 386.73)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(90 -122.349 387.4)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(90 -125.658 380.798)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(90 -121.901 376.338)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(1 0 0 -1 246.388 497.912)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 -1 -1 0 254.436 498.241)"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(90 -75.648 425.783)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 -69.17 438.085)"
      />
      <path
        fill="#b4b5b5"
        d="M368.279 508.12v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
      />
      <path fill="#7c7c7c" d="M367.752 508.45v15.9h-9.2v-15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(90 -78.403 435.848)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -75.831 427.855)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -87.632 439.656)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 -77.699 427.824)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 -88.372 438.497)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(90 -71.12 435.337)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(90 -69.727 439.502)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(90 -69.576 440.173)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(90 -72.886 433.57)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(90 -69.129 429.11)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(1 0 0 -1 351.933 497.912)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 -1 -1 0 359.981 498.241)"
      />
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={2.667} d="M863.796 421.077v140.2" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m868.696 561.277-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(90 183.319 684.75)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 189.797 697.052)"
      />
      <path
        fill="#b4b5b5"
        d="M886.212 508.12v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
      />
      <path fill="#7c7c7c" d="M885.685 508.45v15.9h-9.2v-15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(90 180.564 694.815)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 183.135 686.822)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 171.335 698.622)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 181.268 686.79)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 170.595 697.463)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(90 187.847 694.304)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(90 189.24 698.468)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(90 189.39 699.14)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(90 186.08 692.537)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(90 189.838 688.077)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(1 0 0 -1 869.866 497.912)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 -1 -1 0 877.914 498.241)"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(90 236.95 738.38)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 243.428 750.683)"
      />
      <path
        fill="#b4b5b5"
        d="M993.474 508.12v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
      />
      <path fill="#7c7c7c" d="M992.947 508.45v15.9h-9.2v-15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(90 234.195 748.446)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 236.766 740.453)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 224.966 752.253)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 234.899 740.421)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 224.226 751.094)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(90 241.478 747.935)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(90 242.87 752.1)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(90 243.021 752.77)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(90 239.712 746.168)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(90 243.469 741.708)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(1 0 0 -1 977.128 497.912)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 -1 -1 0 985.176 498.241)"
      />
      <path fill="#fff" d="M69.175 499.206h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(69.175 499.206)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV331A"}
        </tspan>
      </text>
      <path fill="#fff" d="M167.407 499.206h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(167.407 499.206)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV332A"}
        </tspan>
      </text>
      <path fill="#fff" d="M275.517 499.206h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(275.517 499.206)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV333A"}
        </tspan>
      </text>
      <path fill="#fff" d="M786.88 501.93h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(786.88 501.93)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV331B"}
        </tspan>
      </text>
      <path fill="#fff" d="M889.385 501.93h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(889.385 501.93)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV332B"}
        </tspan>
      </text>
      <path fill="#fff" d="M995.788 501.93h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(995.788 501.93)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV333B"}
        </tspan>
      </text>
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={2.667} d="M761.625 492.484v79.6" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m756.725 492.484 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(90 132.495 633.925)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 138.973 646.228)"
      />
      <path
        fill="#b4b5b5"
        d="M784.564 508.12v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
      />
      <path fill="#7c7c7c" d="M784.037 508.45v15.9h-9.2v-15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(90 129.74 643.99)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 132.311 635.998)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 120.51 647.798)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 130.444 635.966)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 119.77 646.64)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(90 137.023 643.48)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(90 138.415 647.644)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(90 138.566 648.316)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(90 135.257 641.713)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(90 139.014 637.253)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(1 0 0 -1 768.218 497.912)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 -1 -1 0 776.266 498.241)"
      />
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={2.667}
        d="M345.432 482.684h752.7"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(-90 374.114 -22.144)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(-90 361.812 -15.665)"
      />
      <path
        fill="#b4b5b5"
        d="M378.114 345.28v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
      />
      <path fill="#7c7c7c" d="M378.641 344.951v-15.9h9.2v15.9h-9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(-90 364.049 -24.899)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 372.042 -22.327)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 360.241 -34.128)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 372.073 -24.195)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 361.4 -34.868)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(-90 364.56 -17.615)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(-90 360.395 -16.223)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(-90 359.724 -16.072)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(-90 366.326 -19.382)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(-90 370.787 -15.625)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(-1 0 0 1 394.46 355.49)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 1 1 0 386.411 355.16)"
      />
      <path fill="#fff" d="M332.187 360.46h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(332.187 360.46)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV336A"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M399.272 308.792h-80.3M318.939 308.792v90.4M318.94 399.216h80.3"
      />
      <path
        fill="url(#k)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(-90 333.098 18.872)"
      />
      <path
        fill="url(#l)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(-90 320.796 25.35)"
      />
      <path
        fill="red"
        d="M296.082 345.28v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
      />
      <path fill="red" d="M296.61 344.951v-15.9h9.2v15.9h-9.2z" />
      <path
        fill="url(#m)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(-90 323.033 16.117)"
      />
      <path
        fill="url(#k)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 331.026 18.689)"
      />
      <path
        fill="url(#k)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 319.225 6.888)"
      />
      <path
        fill="url(#k)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 331.057 16.821)"
      />
      <path
        fill="url(#k)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 320.384 6.148)"
      />
      <path
        fill="url(#l)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(-90 323.544 23.4)"
      />
      <path
        fill="url(#m)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(-90 319.38 24.793)"
      />
      <path
        fill="url(#m)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(-90 318.708 24.944)"
      />
      <path
        fill="url(#k)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(-90 325.31 21.634)"
      />
      <path
        fill="url(#k)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(-90 329.77 25.391)"
      />
      <path
        fill="url(#k)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(-1 0 0 1 312.428 355.49)"
      />
      <path
        fill="url(#n)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 1 1 0 304.38 355.16)"
      />
      <path fill="#fff" d="M250.155 360.46h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(250.155 360.46)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV337A"}
        </tspan>
      </text>
      <path fill="#fff" d="M784.111 355.492h-63.5v30h63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(720.611 355.492)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV336B"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M715.866 304.817h80.3M796.198 304.817v90.4"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="matrix(0 -1 -1 0 800.072 347.997)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="matrix(0 -1 -1 0 818.853 342.172)"
      />
      <path
        fill="#b4b5b5"
        d="M818.216 341.307v-16.6c0-.1-.1-.2-.2-.2h-9.9c-.1 0-.2.1-.2.2v16.6c0 .1.1.2.2.2h9.9c.1 0 .2-.1.2-.2z"
      />
      <path fill="#7c7c7c" d="M817.689 340.977v-15.9h-9.2v15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="matrix(0 -1 -1 0 807.383 335.176)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="matrix(0 -1 -1 0 801.96 345.74)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="matrix(0 -1 -1 0 801.96 322.14)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="matrix(0 -1 -1 0 800.062 343.904)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="matrix(0 -1 -1 0 800.062 322.558)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="matrix(0 -1 -1 0 814.155 342.97)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="matrix(0 -1 -1 0 819.711 340.198)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="matrix(0 -1 -1 0 820.534 339.677)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="matrix(0 -1 -1 0 810.622 342.97)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="matrix(0 -1 -1 0 809.918 351.188)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="translate(801.87 351.515)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="rotate(90 229.366 580.552)"
      />
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M796.198 395.241h-80.3"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="matrix(0 -1 -1 0 720.604 347.997)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="matrix(0 -1 -1 0 739.385 342.172)"
      />
      <path
        fill="#b4b5b5"
        d="M738.748 341.307v-16.6c0-.1-.1-.2-.2-.2h-9.9c-.1 0-.2.1-.2.2v16.6c0 .1.1.2.2.2h9.9c.1 0 .2-.1.2-.2z"
      />
      <path fill="#7c7c7c" d="M738.22 340.977v-15.9h-9.2v15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="matrix(0 -1 -1 0 727.915 335.176)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="matrix(0 -1 -1 0 722.493 345.74)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="matrix(0 -1 -1 0 722.493 322.14)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="matrix(0 -1 -1 0 720.594 343.904)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="matrix(0 -1 -1 0 720.594 322.558)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="matrix(0 -1 -1 0 734.687 342.97)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="matrix(0 -1 -1 0 740.243 340.198)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="matrix(0 -1 -1 0 741.066 339.677)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="matrix(0 -1 -1 0 731.154 342.97)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="matrix(0 -1 -1 0 730.45 351.188)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="translate(722.402 351.515)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="rotate(90 189.632 540.818)"
      />
      <path fill="#fff" d="M801.523 356.485h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(801.523 356.485)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV337B"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="red"
        strokeWidth={2}
        d="M347.72 707.16h20.9s1.8.8 2 2.4c.1 1.6-2 2.6-2 2.6h-14.7s-1.8 0-1.8 2.3 1.8 2.3 1.8 2.3h14.7s2 .8 2 1.9c0 1.1-1.2 2.8-2 2.8h-14.7s-1.8.8-1.8 2.2c0 1.5 1.8 2.3 1.8 2.3h14.7s2 .3 2 1.9c0 1.7-2 2.7-2 2.7h-20.6M676.463 435.981v-24.3s.7-2.1 2.1-2.3c1.4-.2 2.2 2.3 2.2 2.3v17.1s0 2.1 2 2.1c1.9 0 1.9-2.1 1.9-2.1v-17.1s.7-2.3 1.7-2.3 2.4 1.3 2.4 2.3v17.1s.7 2.1 1.9 2.1c1.3 0 2-2.1 2-2.1v-17.1s.2-2.3 1.6-2.3c1.4 0 2.3 2.3 2.3 2.3v23.9M417.518 435.981v-24.3s.7-2.1 2.1-2.3c1.4-.2 2.2 2.3 2.2 2.3v17.1s0 2.1 2 2.1c1.9 0 1.9-2.1 1.9-2.1v-17.1s.7-2.3 1.7-2.3 2.4 1.3 2.4 2.3v17.1s.7 2.1 1.9 2.1c1.3 0 2-2.1 2-2.1v-17.1s.2-2.3 1.6-2.3c1.4 0 2.3 2.3 2.3 2.3v23.9"
      />
      <path fill="#fff" d="M402.424 439.956h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(402.424 439.956)"
      >
        <tspan
          x={14.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TCH912"}
        </tspan>
      </text>
      <path fill="#fff" d="M661.636 438.962h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(661.636 438.962)"
      >
        <tspan
          x={14.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TCH913"}
        </tspan>
      </text>
      <path
        fill="#ffff"
        stroke="#000"
        d="M656.936 930.403c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4zM657.38 897.065c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4z"
      />
      <path
        fill="#bcbcbc"
        stroke="#000"
        d="M657.286 897.047c0-6.6 4.6-12 10.3-12 5.7 0 10.3 5.4 10.3 12s-4.6 12-10.3 12c-5.7 0-10.3-5.4-10.3-12z"
      />
      <path fill="#fff" d="M684.553 882.063h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(684.553 882.063)"
      >
        <tspan
          x={15.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LAH332"}
        </tspan>
      </text>
      <path fill="#fff" d="M684.577 917.065h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(684.577 917.065)"
      >
        <tspan
          x={16.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LAL331"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M361.67 684.399v112.3M757.352 684.399v112.3M361.67 796.684h153M604.377 796.684h153M514.644 796.684v67.6M604.377 796.684v67.6"
      />
      <path
        fill="none"
        stroke="red"
        strokeWidth={2}
        d="M771.026 731.857h-20.9s-1.8-.8-2-2.4c-.1-1.6 2-2.6 2-2.6h14.7s1.8 0 1.8-2.3-1.8-2.3-1.8-2.3h-14.7s-2-.8-2-1.9c0-1.1 1.2-2.8 2-2.8h14.7s1.8-.8 1.8-2.2c0-1.5-1.8-2.3-1.8-2.3h-14.7s-2-.3-2-1.9c0-1.7 2-2.7 2-2.7h20.6"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(-90 567.885 210.905)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(-90 555.583 217.384)"
      />
      <path
        fill="#b4b5b5"
        d="M338.836 772.1v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
      />
      <path fill="#7c7c7c" d="M339.363 771.771v-15.9h9.2v15.9h-9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(-90 557.82 208.15)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 565.813 210.722)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 554.012 198.921)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 565.844 208.854)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 555.171 198.181)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(-90 558.33 215.434)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(-90 554.166 216.826)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(-90 553.495 216.977)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(-90 560.097 213.667)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(-90 564.558 217.424)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(-1 0 0 1 355.182 782.31)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 1 1 0 347.133 781.98)"
      />
      <path fill="#fff" d="M293.764 787.28h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(293.764 787.28)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV335A"}
        </tspan>
      </text>
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="matrix(0 -1 -1 0 761.244 775.285)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="matrix(0 -1 -1 0 780.025 769.46)"
      />
      <path
        fill="#b4b5b5"
        d="M779.388 768.595v-16.6c0-.1-.1-.2-.2-.2h-9.9c-.1 0-.2.1-.2.2v16.6c0 .1.1.2.2.2h9.9c.1 0 .2-.1.2-.2z"
      />
      <path fill="#7c7c7c" d="M778.86 768.265v-15.9h-9.2v15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="matrix(0 -1 -1 0 768.555 762.464)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="matrix(0 -1 -1 0 763.133 773.028)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="matrix(0 -1 -1 0 763.133 749.427)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="matrix(0 -1 -1 0 761.234 771.192)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="matrix(0 -1 -1 0 761.234 749.846)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="matrix(0 -1 -1 0 775.327 770.258)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="matrix(0 -1 -1 0 780.883 767.486)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="matrix(0 -1 -1 0 781.706 766.965)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="matrix(0 -1 -1 0 771.794 770.258)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="matrix(0 -1 -1 0 771.09 778.476)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="translate(763.042 778.803)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="rotate(90 -3.692 774.782)"
      />
      <path fill="#fff" d="M771.24 783.773h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(771.24 783.773)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV335B"}
        </tspan>
      </text>
      <path fill="#fff" d="M284.212 714.3h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(284.212 714.3)"
      >
        <tspan
          x={14.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TCH911"}
        </tspan>
      </text>
      <path fill="#fff" d="M771.026 719.171h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(771.026 719.171)"
      >
        <tspan
          x={14.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TCH711"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="red"
        strokeWidth={2.667}
        d="M385.599 929.836h246.1M631.725 929.836v21.9M631.724 951.696h-193.1M438.584 951.696v42.7M385.599 929.836v64.6M83.069 541.31v304.1M83.068 845.374h403.4"
      />
      <g stroke="red">
        <path fill="none" strokeWidth={2.667} d="M83.07 541.311h148.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m231.37 536.411 9.8 4.9-9.8 4.9v-9.8"
        />
      </g>
      <g stroke="red">
        <path fill="none" strokeWidth={2.667} d="M129.673 553.235h-46.6" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m129.673 548.335 9.8 4.9-9.8 4.9v-9.8"
        />
      </g>
      <path
        fill="none"
        stroke="red"
        strokeWidth={2.667}
        d="M486.442 845.374v21.9M648.389 843.386h403.4M649.042 843.387v21.9M1052.192 539.323v304.1"
      />
      <g stroke="red">
        <path fill="none" strokeWidth={2.667} d="M1052.192 539.323h-177.4" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m874.792 544.223-9.8-4.9 9.8-4.9v9.8"
        />
      </g>
      <g stroke="red">
        <path fill="none" strokeWidth={2.667} d="M1052.196 554.228h-71.4" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m980.796 559.128-9.8-4.9 9.8-4.9v9.8"
        />
      </g>
      <path fill="#fff" d="M107.695 719.171h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(107.695 719.171)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV334A"}
        </tspan>
      </text>
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(90 -315.72 402.953)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 -309.241 415.255)"
      />
      <path
        fill="#b4b5b5"
        d="M105.377 725.362v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
      />
      <path fill="#7c7c7c" d="M104.85 725.691v15.9h-9.2v-15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(90 -318.475 413.019)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -315.903 405.025)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(90 -327.704 416.826)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 -317.77 404.994)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(90 -328.444 415.667)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(90 -311.191 412.508)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(90 -309.8 416.672)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(90 -309.648 417.343)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(90 -312.958 410.74)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(90 -309.2 406.28)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(1 0 0 -1 89.032 715.154)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 -1 -1 0 97.08 715.483)"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(-90 893.5 -155.545)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(-90 881.197 -149.066)"
      />
      <path
        fill="#b4b5b5"
        d="M1030.9 731.265v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
      />
      <path fill="#7c7c7c" d="M1031.427 730.935v-15.9h9.2v15.9h-9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(-90 883.434 -158.3)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 891.427 -155.728)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 879.626 -167.529)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 891.458 -157.596)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 880.785 -168.269)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(-90 883.945 -151.016)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(-90 879.78 -149.624)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(-90 879.109 -149.473)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(-90 885.711 -152.783)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(-90 890.172 -149.026)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(-1 0 0 1 1047.246 741.473)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 1 1 0 1039.197 741.144)"
      />
      <path fill="#fff" d="M964.043 710.221h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(964.043 710.221)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV334B"}
        </tspan>
      </text>
      <path
        fill="red"
        stroke="#92d050"
        d="M382.071 1018.313v-7.9h-3.8l7.6-11.8 7.6 11.8h-3.8v7.9h-7.6zM442.383 998.664v8.6h3.8l-7.6 13-7.6-13h3.8v-8.6h7.6z"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="rotate(-90 675.534 294.185)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="rotate(-90 663.232 300.664)"
      />
      <path
        fill="#b4b5b5"
        d="M363.205 963.03v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
      />
      <path fill="#7c7c7c" d="M363.732 962.7v-15.9h9.2v15.9h-9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="rotate(-90 665.469 291.43)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 673.462 294.002)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="rotate(-90 661.661 282.201)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 673.493 292.134)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="rotate(-90 662.82 281.461)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="rotate(-90 665.98 298.714)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="rotate(-90 661.815 300.106)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="rotate(-90 661.144 300.257)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="rotate(-90 667.746 296.947)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="rotate(-90 672.207 300.704)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="matrix(-1 0 0 1 379.55 973.238)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="matrix(0 1 1 0 371.502 972.909)"
      />
      <path fill="#fff" d="M313.006 977.211h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(313.006 977.211)"
      >
        <tspan
          x={15.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV335A"}
        </tspan>
      </text>
      <path fill="#fff" d="M340.916 1020.255h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(340.916 1020.255)"
      >
        <tspan
          x={18.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Steam"}
        </tspan>
      </text>
      <path fill="#fff" d="M421.055 1020.255h85.9v30h-85.9v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(421.055 1020.255)"
      >
        <tspan
          x={18.4}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Condensate"}
        </tspan>
      </text>
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M143.672 274.48v8.6h3.8l-7.6 13-7.6-13h3.8v-8.6h7.6z"
      />
      <path fill="#fff" d="M102.992 216.698h79.2v48.8h-79.2v-48.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(102.992 216.698)"
      >
        <tspan
          x={12.6}
          y={21.4}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Vapour From "}
        </tspan>
        <tspan
          x={29.1}
          y={36.4}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"D303"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M235.537 858.812h96.2v45.7h-96.2v-45.7z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M238.381 882.855h89.8v19.1h-89.8v-19.1z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(238.381 882.855)"
      >
        <tspan
          x={20.9}
          y={14.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['PIR331']} \xB0C`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M238.38 862.839h89.8v18.5h-89.8v-18.5z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(238.38 862.839)"
      >
        <tspan
          x={26.4}
          y={13.7}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TIRC331"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#236ea1"
        strokeDasharray="2,5"
        d="M457.385 883.133h-125.6"
      />
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M560.792 962.627v63.6M560.792 1026.222h129"
      />
      <path
        fill="red"
        stroke="#92d050"
        d="M694.219 1022.64h7.4v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.4v-8.9z"
      />
      <path fill="#fff" d="M723.398 998.616h85.9v43.5h-85.9v-43.5z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(723.398 998.616)"
      >
        <tspan
          x={13.4}
          y={18.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Condensate to "}
        </tspan>
        <tspan
          x={32.4}
          y={33.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F305"}
        </tspan>
      </text>
      <path
        fill="url(#o)"
        d="M0 0h260.7v119.8H0V0z"
        transform="translate(1268.336 633.752)"
      />
      <path
        fill="url(#p)"
        d="M0 0h260.7v3H0V0z"
        transform="translate(1268.336 638.157)"
      />
      <path
        fill="url(#p)"
        d="M0 0h260.7v3H0V0z"
        transform="translate(1268.336 654.74)"
      />
      <path
        fill="url(#p)"
        d="M0 0h260.7v3H0V0z"
        transform="translate(1268.336 679.615)"
      />
      <path
        fill="url(#p)"
        d="M0 0h260.7v3H0V0z"
        transform="translate(1268.336 687.907)"
      />
      <path
        fill="url(#p)"
        d="M0 0h260.7v3H0V0z"
        transform="translate(1268.336 663.032)"
      />
      <path
        fill="url(#p)"
        d="M0 0h260.7v3H0V0z"
        transform="translate(1268.336 671.323)"
      />
      <path
        fill="url(#p)"
        d="M0 0h260.7v3H0V0z"
        transform="translate(1268.336 646.448)"
      />
      <g fill="url(#p)" transform="translate(1268.336 696.198)">
        <path d="M0 0h260.7v3H0V0zM0 8.434h260.7v3H0v-3zM0 17.02h260.7v3H0v-3zM0 24.875h260.7v3H0v-3zM0 33.167h260.7v3H0v-3zM0 41.165h260.7v3H0v-3zM0 49.75h260.7v3H0v-3z" />
      </g>
      <path
        fill="url(#q)"
        d="M0 0h260.7v6.3H0V0z"
        transform="translate(1268.336 753.013)"
      />
      <path
        fill="url(#q)"
        d="M0 0h275.2v6.3H0V0z"
        transform="translate(1259.789 628.004)"
      />
      <path
        fill="url(#q)"
        d="M0 0h275.2v6.3H0V0z"
        transform="translate(1261.072 696.69)"
      />
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M145.006 348.648h96.2v45.7h-96.2v-45.7z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M147.85 372.69h89.8v19.1h-89.8v-19.1z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(147.85 372.69)"
      >
        <tspan
          x={20.9}
          y={14.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['PIR333']} mbarA`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M147.85 352.675h89.8v18.5h-89.8v-18.5z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(147.85 352.675)"
      >
        <tspan
          x={29.9}
          y={13.7}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"PIR332"}
        </tspan>
      </text>
      <path
        fill="url(#r)"
        d="M0 0h7.4v14.9H0V0z"
        transform="matrix(0 1 1 0 792.5 123.37)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 792.788 132.327)"
      />
      <path
        fill="url(#t)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 462.335 -330.048)"
      />
      <path
        fill="#7c7c7c"
        d="M791.828 131.955v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#u)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(800.91 134.835)"
      />
      <path
        fill="url(#u)"
        stroke="#595959"
        d="M3.3 0h6.4L13 5.5H0L3.3 0z"
        transform="translate(801.741 129.533)"
      />
      <path
        fill="url(#r)"
        stroke="#595959"
        d="M0 0h7.4v14.9H0V0z"
        transform="matrix(0 1 1 0 808.693 112.472)"
      />
      <path
        fill="url(#v)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.5-4.4 8.3-9.7 8.3-5.4 0-9.7-3.8-9.7-8.3z"
        transform="matrix(0 -1 -1 0 816.544 131.8)"
      />
      <path
        fill="#7c7c7c"
        d="M808.247 130.163c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M808.243 119.212c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.4-1.3-2.4-2.9 0-1.6 1.1-2.9 2.4-2.9z"
      />
      <path
        fill="url(#w)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 345.177 465.023)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 823.52 110.894)"
      />
      <path
        fill="url(#t)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 356.495 467.43)"
      />
      <path
        fill="#7c7c7c"
        d="M824.48 111.266v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path
        fill="url(#r)"
        d="M0 0h7.4v14.9H0V0z"
        transform="matrix(0 1 1 0 793.355 165.164)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 793.642 174.12)"
      />
      <path
        fill="url(#t)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 483.659 -309.578)"
      />
      <path
        fill="#7c7c7c"
        d="M792.682 173.749v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#u)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(801.764 176.629)"
      />
      <path
        fill="url(#u)"
        stroke="#595959"
        d="M3.3 0h6.4L13 5.5H0L3.3 0z"
        transform="translate(802.595 171.327)"
      />
      <path
        fill="url(#r)"
        stroke="#595959"
        d="M0 0h7.4v14.9H0V0z"
        transform="matrix(0 1 1 0 809.547 154.266)"
      />
      <path
        fill="url(#v)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.5-4.4 8.3-9.7 8.3-5.4 0-9.7-3.8-9.7-8.3z"
        transform="matrix(0 -1 -1 0 817.398 173.593)"
      />
      <path
        fill="#7c7c7c"
        d="M809.101 171.957c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M809.097 161.006c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.4-1.3-2.4-2.9 0-1.6 1.1-2.9 2.4-2.9z"
      />
      <path
        fill="url(#w)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 324.707 486.347)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 824.374 152.688)"
      />
      <path
        fill="url(#t)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 336.025 488.754)"
      />
      <path
        fill="#7c7c7c"
        d="M825.333 153.06v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M836.964 120.003h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(836.964 120.003)"
      >
        <tspan
          x={17.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G331A"}
        </tspan>
      </text>
      <path fill="#fff" d="M836.964 159.07h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(836.964 159.07)"
      >
        <tspan
          x={17.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G331B"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M917.379 115.251v42.7M824.223 156.985h94"
      />
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M557.154 210.735v-73.7" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m552.254 137.035 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M557.154 127.267h234.2M734.912 127.267v43.7M793.026 170.989h-58.1M825.5 115.343h401.7"
      />
      <path
        fill="url(#x)"
        stroke="#696969"
        d="M0 0h35v47.3H0V0z"
        transform="translate(1229.345 106.159)"
      />
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={5.333}
        d="m1227.913 115.28 37.099 27.365"
      />
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={5.333}
        d="m1227.207 143.48 37.091-27.377"
      />
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1264.294 116.104h21.4" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1285.694 111.204 9.8 4.9-9.8 4.9v-9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M1265.02 142.645h156.1"
      />
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M1421.162 142.645v86.1" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m1426.062 228.745-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1217.41 143.48h-26.1" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1217.41 138.58 9.8 4.9-9.8 4.9v-9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M1191.272 143.48v19.6"
      />
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M678.508 200.936v-9.1" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m683.408 200.936-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M678.509 191.856h258.1M935.744 191.856v201.7M934.885 392.578h932.4"
      />
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M1865.552 383.772v-60.8" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m1870.452 383.772-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M1865.551 323.02h-88.9M1243.402 350.843v28.8M1243.4 379.659h306.8"
      />
      <g stroke="#7030a0">
        <path fill="none" strokeWidth={2.667} d="M1550.202 379.659v-56.8" />
        <path
          fill="#7030a0"
          strokeLinecap="round"
          d="m1545.302 322.859 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#7030a0"
        strokeWidth={2.667}
        d="M1550.21 313.084h97.4"
      />
      <path
        fill="url(#a)"
        d="M0 8.3h42.3V0H0v8.3z"
        transform="translate(1274.948 414.121)"
      />
      <path
        fill="url(#b)"
        d="M0 1.9h42.3V0H0v1.9z"
        transform="translate(1274.948 419.792)"
      />
      <path
        fill="url(#a)"
        d="M0 7.6h42.3V0H0v7.6z"
        transform="translate(1274.948 524.134)"
      />
      <path
        fill="url(#b)"
        d="M0 2.2h42.3V0H0v2.2z"
        transform="translate(1274.948 523.988)"
      />
      <path
        fill="url(#a)"
        d="M4.1 0h42.7c2.2 0 4.1 3.3 4.1 7.4v87.8c0 4.1-1.9 7.4-4.1 7.4H4.1c-2.3 0-4.1-3.3-4.1-7.4V7.4C0 3.3 1.8 0 4.1 0z"
        transform="translate(1270.686 421.593)"
      />
      <g fill="url(#y)" stroke="#9b9b9b" transform="rotate(90 418.917 833.037)">
        <path d="M12.535 0h15.8v4.3h-15.8V0z" />
        <path d="M12.535 3.98h15.8v10.7h-15.8V3.98z" />
        <path d="M3.675 14.64h33.8l-11.2 45.9v8.7h-11.4v-8.7l-11.2-45.9zM0 69.28h40.7v29.2H0v-29.2z" />
        <path d="M0 73.374h40.7v1.9H0v-1.9zM0 93.615h40.7v1.9H0v-1.9z" />
      </g>
      <g fill="url(#y)" stroke="#9b9b9b" transform="translate(1153.444 478.048)">
        <path d="M10.78 0h13.5v5h-13.5V0z" />
        <path d="M10.78 4.628h13.5v12.4h-13.5v-12.4z" />
        <path d="M3.16 17.023h29.1l-9.6 53.4v10.1h-9.9v-10.1l-9.6-53.4zM0 80.553h35v34H0v-34z" />
        <path d="M0 85.313h35v2.2H0v-2.2zM0 108.848h35v2.2H0v-2.2z" />
      </g>
      <path
        fill="none"
        stroke="#00b0f0"
        strokeWidth={2.667}
        d="M1251.947 433.318h20.5M1170.762 455.179v22.9M1098.122 482.684v93.7"
      />
      <g stroke="#00b0f0">
        <path fill="none" strokeWidth={2.667} d="M1098.115 576.406h44.9" />
        <path
          fill="#00b0f0"
          strokeLinecap="round"
          d="m1143.015 571.506 9.8 4.9-9.8 4.9v-9.8"
        />
      </g>
      <path
        fill="none"
        stroke="red"
        strokeWidth={2.667}
        d="M1172.472 591.311v79.5"
      />
      <path
        fill="red"
        stroke="#92d050"
        d="M1168.203 695.26v-7.9h-3.8l7.6-11.8 7.6 11.8h-3.8v7.9h-7.6z"
      />
      <path fill="#fff" d="M1142.428 697.204h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1142.428 697.204)"
      >
        <tspan
          x={18.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Steam"}
        </tspan>
      </text>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1295.532 531.692v87.6" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1300.432 619.292-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M1320.314 461.14h32.5M1321.174 485.982h32.5"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
          fontWeight: 700,
        }}
        transform="translate(1254.667 277.8)"
      >
        <tspan
          x={56.7}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F330 RECEIVER"}
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
        transform="translate(1617.927 206.184)"
      >
        <tspan
          x={80.7}
          y={22.4}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E338 "}
        </tspan>
        <tspan
          x={60.7}
          y={37.4}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"ECONOMIZER"}
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
        transform="translate(1270.679 458.412)"
      >
        <tspan
          x={16.6}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E333"}
        </tspan>
      </text>
      <path fill="#fff" d="M1197.57 59.75h98.5v40.7h-98.5v-40.7z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1197.57 59.75)"
      >
        <tspan
          x={38.8}
          y={17.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E331"}
        </tspan>
        <tspan
          x={19.8}
          y={32.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"CONDENSER"}
        </tspan>
      </text>
      <path
        fill="url(#e)"
        d="M0 0h25.8v9.7H0V0z"
        transform="matrix(1 0 0 -1 796.11 195.833)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h15.4c.1 0 .1.1.1.2v13c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="matrix(1 0 0 -1 801.12 217.67)"
      />
      <path
        fill="#b4b5b5"
        d="M801.892 216.93h14.2c.1 0 .2-.1.2-.2v-11.5c0-.1-.1-.2-.2-.2h-14.2c-.1 0-.2.1-.2.2v11.5c0 .1.1.2.2.2z"
      />
      <path fill="#7c7c7c" d="M802.148 216.316h13.7v-10.7h-13.7v10.7z" />
      <path
        fill="url(#g)"
        d="M0 0h3.7v8.7s0 .6-1.8.6S0 8.7 0 8.7V0z"
        transform="matrix(1 0 0 -1 807.137 204.333)"
      />
      <path
        fill="url(#e)"
        d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
        transform="matrix(1 0 0 -1 798.051 198.029)"
      />
      <path
        fill="url(#e)"
        d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
        transform="matrix(1 0 0 -1 818.35 198.029)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.3v9.7H0V0z"
        transform="matrix(1 0 0 -1 799.63 195.821)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.3v9.7H0V0z"
        transform="matrix(1 0 0 -1 817.989 195.821)"
      />
      <path
        fill="url(#i)"
        d="M0 0h17.1v2.5H0V0z"
        transform="matrix(1 0 0 -1 800.434 212.208)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.8v1H0V0z"
        transform="matrix(1 0 0 -1 802.818 218.668)"
      />
      <path
        fill="url(#g)"
        d="M0 0h.9v1H0V0z"
        transform="matrix(1 0 0 -1 803.266 219.624)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.7v2.5H0V0z"
        transform="matrix(1 0 0 -1 800.433 208.1)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7.1v.8H0V0z"
        transform="matrix(1 0 0 -1 793.366 207.282)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.1v.7H0V0z"
        transform="rotate(90 297.58 495.504)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.5 0 .8.4c.2.3.2.9.2.9H.3S.3.9 0 .8V0z"
        transform="rotate(180 396.684 103.64)"
      />
      <path fill="#fff" d="M822.72 195.831h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(822.72 195.831)"
      >
        <tspan
          x={18.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV341"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M749.326 229.84h96.2v45.7h-96.2v-45.7z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M752.17 253.883h89.8v19.1h-89.8v-19.1z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(752.17 253.883)"
      >
        <tspan
          x={30.4}
          y={14.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['LIR332']} %`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M752.17 233.866h89.8v18.5h-89.8v-18.5z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(752.17 233.866)"
      >
        <tspan
          x={30.4}
          y={13.7}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LIR331"}
        </tspan>
      </text>
      <path fill="#fff" d="M1301.226 94.468h70.9v40.7h-70.9v-40.7z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1301.226 94.468)"
      >
        <tspan
          x={14.5}
          y={17.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"COOLING "}
        </tspan>
        <tspan
          x={19}
          y={32.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"WATER"}
        </tspan>
      </text>
      <path fill="#fff" d="M1156.006 168.242h70.9v40.7h-70.9v-40.7z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1156.006 168.242)"
      >
        <tspan
          x={14.5}
          y={17.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"COOLING "}
        </tspan>
        <tspan
          x={19}
          y={32.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"WATER"}
        </tspan>
      </text>
      <path
        fill="#bcbcbc"
        stroke="#000"
        d="M1650.547 167.682c0-6.6 4.6-12 10.3-12 5.7 0 10.3 5.4 10.3 12s-4.6 12-10.3 12c-5.7 0-10.3-5.4-10.3-12zM1650.927 274.57c0-6.3 4.6-11.4 10.3-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.7 0-10.3-5.1-10.3-11.4z"
      />
      <path
        fill="url(#e)"
        d="M0 0h29.9v8.3H0V0z"
        transform="matrix(0 -1 -1 0 1177.22 653.357)"
      />
      <path
        fill="url(#f)"
        d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="matrix(0 -1 -1 0 1196 647.532)"
      />
      <path
        fill="#b4b5b5"
        d="M1195.364 646.667v-16.6c0-.1-.1-.2-.2-.2h-9.9c-.1 0-.2.1-.2.2v16.6c0 .1.1.2.2.2h9.9c.1 0 .2-.1.2-.2z"
      />
      <path fill="#7c7c7c" d="M1194.837 646.337v-15.9h-9.2v15.9h9.2z" />
      <path
        fill="url(#g)"
        d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
        transform="matrix(0 -1 -1 0 1184.53 640.536)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="matrix(0 -1 -1 0 1179.109 651.1)"
      />
      <path
        fill="url(#e)"
        d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.3-.4.3h-1c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
        transform="matrix(0 -1 -1 0 1179.109 627.5)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="matrix(0 -1 -1 0 1177.21 649.264)"
      />
      <path
        fill="url(#h)"
        d="M0 0h.4v8.3H0V0z"
        transform="matrix(0 -1 -1 0 1177.21 627.918)"
      />
      <path
        fill="url(#i)"
        d="M0 0h19.9v2.1H0V0z"
        transform="matrix(0 -1 -1 0 1191.303 648.33)"
      />
      <path
        fill="url(#g)"
        d="M0 0h2.1v.9H0V0z"
        transform="matrix(0 -1 -1 0 1196.86 645.558)"
      />
      <path
        fill="url(#g)"
        d="M0 0h1.1v.9H0V0z"
        transform="matrix(0 -1 -1 0 1197.682 645.037)"
      />
      <path
        fill="url(#e)"
        d="M0 0h.8v2.1H0V0z"
        transform="matrix(0 -1 -1 0 1187.77 648.33)"
      />
      <path
        fill="url(#e)"
        d="M0 0h8.3v.7H0V0z"
        transform="matrix(0 -1 -1 0 1187.066 656.548)"
      />
      <path
        fill="url(#e)"
        d="M0 0h7v.8H0V0z"
        transform="translate(1179.018 656.875)"
      />
      <path
        fill="url(#j)"
        d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
        transform="rotate(90 265.26 921.806)"
      />
      <path fill="#fff" d="M1200.598 623.41h54.8v30h-54.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1200.598 623.41)"
      >
        <tspan
          x={13.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV338"}
        </tspan>
      </text>
      <path
        fill="url(#r)"
        d="M0 0h7.4v14.9H0V0z"
        transform="matrix(0 1 1 0 1458.615 497.512)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 1458.902 506.469)"
      />
      <path
        fill="url(#t)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 982.463 -476.034)"
      />
      <path
        fill="#7c7c7c"
        d="M1457.942 506.097v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#u)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(1467.024 508.977)"
      />
      <path
        fill="url(#u)"
        stroke="#595959"
        d="M3.3 0h6.4L13 5.5H0L3.3 0z"
        transform="translate(1467.855 503.675)"
      />
      <path
        fill="url(#r)"
        stroke="#595959"
        d="M0 0h7.4v14.9H0V0z"
        transform="matrix(0 1 1 0 1474.807 486.614)"
      />
      <path
        fill="url(#v)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.5-4.4 8.3-9.7 8.3-5.4 0-9.7-3.8-9.7-8.3z"
        transform="matrix(0 -1 -1 0 1482.658 505.941)"
      />
      <path
        fill="#7c7c7c"
        d="M1474.361 504.305c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1474.357 493.354c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.4-1.3-2.4-2.9 0-1.6 1.1-2.9 2.4-2.9z"
      />
      <path
        fill="url(#w)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 491.163 985.151)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 1489.634 485.036)"
      />
      <path
        fill="url(#t)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 502.481 987.558)"
      />
      <path
        fill="#7c7c7c"
        d="M1490.593 485.408v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path
        fill="url(#r)"
        d="M0 0h7.4v14.9H0V0z"
        transform="matrix(0 1 1 0 1459.475 556.2)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 1459.762 565.156)"
      />
      <path
        fill="url(#t)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 1012.236 -447.12)"
      />
      <path
        fill="#7c7c7c"
        d="M1458.802 564.784v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#u)"
        d="M0 0h14.7v2.3H0V0z"
        transform="translate(1467.884 567.664)"
      />
      <path
        fill="url(#u)"
        stroke="#595959"
        d="M3.3 0h6.4L13 5.5H0L3.3 0z"
        transform="translate(1468.715 562.362)"
      />
      <path
        fill="url(#r)"
        stroke="#595959"
        d="M0 0h7.4v14.9H0V0z"
        transform="matrix(0 1 1 0 1475.667 545.301)"
      />
      <path
        fill="url(#v)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.5-4.4 8.3-9.7 8.3-5.4 0-9.7-3.8-9.7-8.3z"
        transform="matrix(0 -1 -1 0 1483.518 564.628)"
      />
      <path
        fill="#7c7c7c"
        d="M1475.221 562.992c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#7c7c7c"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1475.217 552.041c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.4-1.3-2.4-2.9 0-1.6 1.1-2.9 2.4-2.9z"
      />
      <path
        fill="url(#w)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 462.249 1014.925)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 1490.494 543.723)"
      />
      <path
        fill="url(#t)"
        d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 473.568 1017.331)"
      />
      <path
        fill="#7c7c7c"
        d="M1491.453 544.095v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path fill="#fff" d="M1494.328 491.945h63.5v26.2h-63.5v-26.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1494.328 491.945)"
      >
        <tspan
          x={17.8}
          y={17.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G334A"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M1490.336 549.014h153.9M1401.022 501.882v60.1M1459.139 562.024h-58.1M1457.053 501.41h-135.9"
      />
      <path fill="none" stroke="#236ea1" d="M1698.909 489.393h-206.8" />
      <path fill="#fff" d="M1496.038 552.155h63.5v26.2h-63.5v-26.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1496.038 552.155)"
      >
        <tspan
          x={17.8}
          y={17.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G334B"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M1365.39 398.498h96.2v45.7h-96.2v-45.7z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1368.228 422.54h89.8v19.1h-89.8v-19.1z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1368.228 422.54)"
      >
        <tspan
          x={21.9}
          y={14.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['PIR333']} \xB0C`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1368.228 402.524h89.8v18.5h-89.8v-18.5z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1368.228 402.524)"
      >
        <tspan
          x={29.9}
          y={13.7}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"PIR333"}
        </tspan>
      </text>
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M1355.93 456.566h7.4v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.4v-8.9z"
      />
      <path fill="#fff" d="M1375.42 456.165h73.9v35.2h-73.9v-35.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1375.42 456.165)"
      >
        <tspan
          x={8.5}
          y={22.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Cooling Water"}
        </tspan>
      </text>
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M1355.93 482.424h7.4v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.4v-8.9z"
      />
      <path
        fill="url(#x)"
        stroke="#696969"
        d="M0 0h22.1v32.4H0V0z"
        transform="translate(1698.905 467.541)"
      />
      <path
        fill="url(#x)"
        stroke="#696969"
        d="M0 0h22.1v32.4H0V0z"
        transform="translate(1644.295 524.736)"
      />
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M1654.469 580.382h-219.6"
      />
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1434.832 580.382v38.9" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1439.732 619.282-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M1654.462 557.528v22.9M1710.012 498.9v101.4M1710.018 600.255h-232.5"
      />
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1477.562 600.256v18" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1482.462 618.256-4.9 9.8-4.9-9.8h9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M1698.909 489.393h-206.8"
      />
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1655.322 524.736v-7.1" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1650.422 517.636 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={2.667} d="M1710.012 467.103v-7.1" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m1705.112 460.003 4.9-9.8 4.9 9.8h-9.8"
        />
      </g>
      <path fill="#fff" d="M1616.016 494.825h33.4v20.1h-33.4v-20.1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1616.016 494.825)"
      >
        <tspan
          x={9.2}
          y={14.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"atm"}
        </tspan>
      </text>
      <path fill="#fff" d="M1672.346 434.735h33.4v20.1h-33.4v-20.1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1672.346 434.735)"
      >
        <tspan
          x={9.2}
          y={14.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"atm"}
        </tspan>
      </text>
      <path fill="#fff" d="M1101.238 525.896h54.8v30h-54.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1101.238 525.896)"
      >
        <tspan
          x={13.4}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G333A"}
        </tspan>
      </text>
      <path fill="#fff" d="M1188.438 457.898h54.8v30h-54.8v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1188.438 457.898)"
      >
        <tspan
          x={13.4}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G333B"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#3498db"
        d="M481.314 656.778h153v30.6h-153v-30.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(481.314 656.778)"
      >
        <tspan
          x={43.5}
          y={19.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"MELTING TIME"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#3498db"
        d="M481.314 687.01h76.1v25.4h-76.1v-25.4z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(481.314 687.01)"
      >
        <tspan
          x={25.5}
          y={17.2}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['Melting Pv']} Pv`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#3498db"
        d="M558.229 687.39h76.1v25.7h-76.1v-25.7z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(570.193 685.405)"
      >
        <tspan
          x={14.8}
          y={19.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['Melting Sv']} Sv`}
        </tspan>
      </text>
      <path
        fill="#ebebeb"
        stroke="#3498db"
        d="M481.314 743.896h76.1v25.4h-76.1v-25.4z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(481.314 743.896)"
      >
        <tspan
          x={25.5}
          y={17.2}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['Condensate Pv']} Pv`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#3498db"
        d="M558.229 744.276h76.1v25.7h-76.1v-25.7z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(570.193 742.291)"
      >
        <tspan
          x={14.8}
          y={19.8}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['Condensate Sv']} Sv`}
        </tspan>
      </text>
      <path fill="#fff" d="M1570.718 150.802h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1570.718 150.802)"
      >
        <tspan
          x={15.8}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LAH330"}
        </tspan>
      </text>
      <path fill="#fff" d="M1570.718 261.934h63.5v30h-63.5v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1570.718 261.934)"
      >
        <tspan
          x={16.3}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LAL330"}
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
        transform="translate(1365.389 719.685)"
      >
        <tspan
          x={16.6}
          y={19}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"F306"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#92d050"
        strokeWidth={2.667}
        d="M1527.984 704.59h51.3M1579.262 704.59v18.9"
      />
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M1582.26 725.498v8.6h3.8l-7.6 13-7.6-13h3.8v-8.6h7.6z"
      />
      <path fill="#fff" d="M1535.303 751.07h85.9v30h-85.9v-30z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1535.303 751.07)"
      >
        <tspan
          x={17.4}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Waste Water"}
        </tspan>
      </text>
      <path
        fill="url(#z)"
        d="M.2 0h13.2c.2 0 .3.1.3.2v12.5c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 389.47 940.274)"
      />
      <path
        fill="url(#A)"
        d="M0 0h.9v13.9H0V0z"
        transform="rotate(90 371.823 928.99)"
      />
      <path
        fill="url(#B)"
        d="M0 0h3.9v.9H0V0z"
        transform="rotate(90 380.593 936.307)"
      />
      <path
        fill="url(#A)"
        d="M0 0h2.8v15.3H0V0z"
        transform="rotate(90 379.915 936.132)"
      />
      <path
        fill="url(#B)"
        d="M.2 0h13.4c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 389.671 940.354)"
      />
      <path
        fill="url(#C)"
        d="M.2 0h9.6c.1 0 .2.1.2.2v4.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="rotate(90 386.486 939.133)"
      />
      <path fill="#3e3938" d="M1325.191 553.15v9h-3.8v-9h3.8z" />
      <path
        fill="url(#D)"
        d="M.1 0h13.6s.1 0 .1.1v1.3l-.1.1H.1c-.1 0-.1-.1-.1-.1V.1C0 0 0 0 .1 0z"
        transform="rotate(90 383.775 934.533)"
      />
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M1299.31 571.042h96.2v45.7h-96.2v-45.7z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1302.148 595.084h89.8v19.1h-89.8v-19.1z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1302.148 595.084)"
      >
        <tspan
          x={20.9}
          y={14.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {`${value['TIR334']} \xB0C`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1302.148 575.068h89.8v18.5h-89.8v-18.5z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="translate(1302.148 575.068)"
      >
        <tspan
          x={29.9}
          y={13.7}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TIR334"}
        </tspan>
      </text>
      <path
        fill="#ffc37c"
        stroke="#868686"
        d="M1340.731 416.076c6.5 0 11.8 6.3 11.8 14.1 0 7.7-5.3 14-11.8 14-6.6 0-11.9-6.3-11.9-14 0-7.8 5.3-14.1 11.9-14.1z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "8pt",
        }}
        transform="rotate(90 468.228 884.303)"
      >
        <tspan
          x={8.1}
          y={16.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"PS"}
        </tspan>
      </text>
      <path
        fill="url(#E)"
        d="M0 0h6.6v1H0V0z"
        transform="rotate(90 452.794 878.825)"
      />
      <path
        fill="url(#E)"
        d="M0 0h4.9v9.1H0V0z"
        transform="rotate(90 451.869 878.756)"
      />
      <path
        fill="#c2c2c2"
        stroke="#3c5c74"
        d="M1333.259 417.695v23.2c0 .1 0 .1-.1.1h-1.5c-.1 0-.1 0-.1-.1v-23.2c0-.1 0-.1.1-.1h1.5c.1 0 .1 0 .1.1z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#ff0",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "30pt",
          fontWeight: 700,
        }}
        transform="translate(28.091 29.381)"
      >
        <tspan
          x={90.1}
          y={56.7}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            textDecoration: "underline",
          }}
        >
          {"ICE CONDENSER SECTION"}
        </tspan>
      </text>
    </svg>
  )
}
export default IceCondesHMI
