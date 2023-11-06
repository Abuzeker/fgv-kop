import React from 'react'

const VacuumHMI = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={'100%'}
            height={'100%'}
            viewBox="0 0 1920 1080"
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
                    <stop offset={0} stopColor="#c40000" />
                    <stop offset={0.15} stopColor="#ff4545" />
                    <stop offset={0.25} stopColor="#ffb3b3" />
                    <stop offset={0.44} stopColor="#df0000" />
                    <stop offset={0.6} stopColor="#c70000" />
                    <stop offset={0.8} stopColor="#a80000" />
                    <stop offset={0.97} stopColor="#900" />
                    <stop offset={1} stopColor="#cb0000" />
                </linearGradient>
                <linearGradient id="f" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#b50000" />
                    <stop offset={0.03} stopColor="#ff7c7c" />
                    <stop offset={0.08} stopColor="#eb0000" />
                    <stop offset={0.64} stopColor="#e70000" />
                    <stop offset={0.95} stopColor="#e20000" />
                    <stop offset={1} stopColor="#a80000" />
                </linearGradient>
                <linearGradient id="g" x1="100%" x2="0%" y1="0%" y2="0%">
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
                    id="h"
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
                <linearGradient id="i" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#6f9f3b" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.44} stopColor="#7fb645" />
                    <stop offset={0.6} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#5e8831" />
                    <stop offset={0.97} stopColor="#567c2c" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="j" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.03} stopColor="#afda8c" />
                    <stop offset={0.08} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.95} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient id="k" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6f9f3b" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.44} stopColor="#7fb645" />
                    <stop offset={0.6} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#5e8831" />
                    <stop offset={0.97} stopColor="#567c2c" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient
                    id="l"
                    x1={0}
                    x2={1}
                    y1={1}
                    y2={0}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#71a23c" />
                    <stop offset={0.15} stopColor="#b4dd95" />
                    <stop offset={0.25} stopColor="#bbdf9f" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
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
                <linearGradient
                    id="q"
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
                <linearGradient id="r" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a9b1aa" />
                    <stop offset={0.22} stopColor="#bec7c0" />
                    <stop offset={0.57} stopColor="#e4e9e5" />
                    <stop offset={0.84} stopColor="#d6ddd7" />
                    <stop offset={1} stopColor="#b7c0b9" />
                </linearGradient>
                <linearGradient id="s" x1="0%" x2="0%" y1="100%" y2="0%">
                    <stop offset={0} stopColor="#a9b1aa" />
                    <stop offset={0.22} stopColor="#bec7c0" />
                    <stop offset={0.57} stopColor="#e4e9e5" />
                    <stop offset={0.84} stopColor="#d6ddd7" />
                    <stop offset={1} stopColor="#b7c0b9" />
                </linearGradient>
                <linearGradient id="t" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#849c87" />
                    <stop offset={0.22} stopColor="#95b098" />
                    <stop offset={0.57} stopColor="#d1ddd3" />
                    <stop offset={0.84} stopColor="#b8cbba" />
                    <stop offset={1} stopColor="#90a992" />
                </linearGradient>
                <linearGradient id="u" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#676767" />
                    <stop offset={0.22} stopColor="#747474" />
                    <stop offset={0.57} stopColor="#c5c5c5" />
                    <stop offset={0.84} stopColor="#a2a2a2" />
                    <stop offset={1} stopColor="#707070" />
                </linearGradient>
                <linearGradient id="v" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#5e5e5e" />
                    <stop offset={0.64} stopColor="#b8b8b8" />
                    <stop offset={1} stopColor="#656565" />
                </linearGradient>
                <linearGradient id="w" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#545454" />
                    <stop offset={0.66} stopColor="#c5c5c5" />
                    <stop offset={1} stopColor="#515151" />
                </linearGradient>
                <linearGradient id="x" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#565656" />
                    <stop offset={0.03} stopColor="#a2a2a2" />
                    <stop offset={0.05} stopColor="#727272" />
                    <stop offset={0.64} stopColor="#707070" />
                    <stop offset={0.95} stopColor="#6d6d6d" />
                    <stop offset={1} stopColor="#4f4f4f" />
                </linearGradient>
                <linearGradient id="A" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0.25} stopColor="#ebebeb" />
                    <stop offset={0.37} stopColor="#c2c2c2" />
                    <stop offset={0.82} stopColor="#6185a8" />
                    <stop offset={0.85} stopColor="#909090" stopOpacity={0.47} />
                </linearGradient>
                <linearGradient id="B" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#afafaf" />
                    <stop offset={0.59} stopColor="#e5e5e5" />
                    <stop offset={1} stopColor="#afafaf" />
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
                <linearGradient id="H" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#777" />
                    <stop offset={0.15} stopColor="#bbb" />
                    <stop offset={0.26} stopColor="#c9c9c9" />
                    <stop offset={0.41} stopColor="#c3c3c3" />
                    <stop offset={0.6} stopColor="#9f9f9f" />
                    <stop offset={0.8} stopColor="#7e7e7e" />
                    <stop offset={0.93} stopColor="#676767" />
                </linearGradient>
                <clipPath id="I">
                    <path d="M0 0h234.1v41.9H0V0z" />
                </clipPath>
                <clipPath id="K">
                    <path d="M0 0h234.1v41.9H0V0z" />
                </clipPath>
                <clipPath id="L">
                    <path d="M0 0h234.1v41.9H0V0z" />
                </clipPath>
                <clipPath id="M">
                    <path d="M0 0h234.1v41.9H0V0z" />
                </clipPath>
                <clipPath id="N">
                    <path d="M0 0h234.1v41.9H0V0z" />
                </clipPath>
                <clipPath id="O">
                    <path d="M0 0h234.1v41.9H0V0z" />
                </clipPath>
                <clipPath id="P">
                    <path d="M0 0h234.1v41.9H0V0z" />
                </clipPath>
                <clipPath id="Q">
                    <path d="M0 0h234.1v41.9H0V0z" />
                </clipPath>
                <clipPath id="R">
                    <path d="M0 0h199.7v236.5H0V0z" />
                </clipPath>
                <radialGradient
                    id="y"
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
                    id="z"
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
                <filter id="J" width="300%" height="300%" x="-100%" y="-100%">
                    <feGaussianBlur stdDeviation={1.5} />
                </filter>
                <filter id="S" width="300%" height="300%" x="-100%" y="-100%">
                    <feGaussianBlur stdDeviation={2} />
                </filter>
            </defs>
            <path fill="#0e2350" d="M7.532 7.532h1920v1080h-1920v-1080z" />
            <path
                fill="url(#a)"
                d="M0 16h80.2V0H0v16z"
                transform="rotate(90 72.892 925.555)"
            />
            <path
                fill="url(#b)"
                d="M0 3.6h80.2V0H0v3.6z"
                transform="rotate(90 67.43 920.092)"
            />
            <path
                fill="url(#a)"
                d="M0 14.6h80.2V0H0v14.6z"
                transform="rotate(90 -33.088 819.575)"
            />
            <path
                fill="url(#b)"
                d="M0 4.2h80.2V0H0v4.2z"
                transform="rotate(90 -32.947 819.716)"
            />
            <path
                fill="url(#a)"
                d="M7.8 0h80.8c4.3 0 7.8 6.4 7.8 14.3v169.2c0 7.9-3.5 14.3-7.8 14.3H7.8c-4.3 0-7.8-6.4-7.8-14.3V14.3C0 6.4 3.5 0 7.8 0z"
                transform="rotate(90 69.732 914.32)"
            />
            <path
                fill="url(#a)"
                d="M0 26.7h71.1V0H0v26.7z"
                transform="rotate(90 433.44 629.365)"
            />
            <path
                fill="url(#b)"
                d="M0 6h71.1V0H0v6z"
                transform="rotate(90 424.335 620.26)"
            />
            <path
                fill="url(#a)"
                d="M0 24.3h71.1V0H0v24.3z"
                transform="rotate(90 256.787 452.712)"
            />
            <path
                fill="url(#b)"
                d="M0 7h71.1V0H0v7z"
                transform="rotate(90 257.022 452.947)"
            />
            <path
                fill="url(#a)"
                d="M6.9 0h71.7c3.8 0 6.9 10.7 6.9 23.8v282c0 13.2-3.1 23.9-6.9 23.9H6.9C3.1 329.7 0 319 0 305.8v-282C0 10.7 3.1 0 6.9 0z"
                transform="rotate(90 425.023 613.79)"
            />
            <path
                fill="url(#a)"
                d="M0 19.8h94.3V0H0v19.8z"
                transform="rotate(90 787.493 1011.987)"
            />
            <path
                fill="url(#b)"
                d="M0 4.5h94.3V0H0v4.5z"
                transform="rotate(90 780.726 1005.22)"
            />
            <path
                fill="url(#a)"
                d="M0 18.1h94.3V0H0v18.1z"
                transform="rotate(90 656.203 880.696)"
            />
            <path
                fill="url(#b)"
                d="M0 5.2h94.3V0H0v5.2z"
                transform="rotate(90 656.377 880.87)"
            />
            <path
                fill="url(#a)"
                d="M9.1 0h95.1c5 0 9.1 7.9 9.1 17.7v209.6c0 9.8-4.1 17.7-9.1 17.7H9.1c-5 0-9.1-7.9-9.1-17.7V17.7C0 7.9 4.1 0 9.1 0z"
                transform="rotate(90 783.322 998.326)"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M1282.474 584.123c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <path
                fill="url(#c)"
                d="M0 22.5h94.3V0H0v22.5z"
                transform="rotate(90 381.012 940.963)"
            />
            <path
                fill="url(#d)"
                d="M0 5.1h94.3V0H0v5.1z"
                transform="rotate(90 373.336 933.287)"
            />
            <path
                fill="url(#c)"
                d="M0 20.5h94.3V0H0v20.5z"
                transform="rotate(90 232.078 792.03)"
            />
            <path
                fill="url(#d)"
                d="M0 5.9h94.3V0H0v5.9z"
                transform="rotate(90 232.276 792.228)"
            />
            <path
                fill="url(#c)"
                d="M9.1 0h95.1c5 0 9.1 9 9.1 20.1v237.7c0 11.1-4.1 20.1-9.1 20.1H9.1c-5 0-9.1-9-9.1-20.1V20.1C0 9 4.1 0 9.1 0z"
                transform="rotate(90 375.642 926.105)"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M1282.38 584.104c0-6.6 4.6-12 10.4-12 5.7 0 10.3 5.4 10.3 12s-4.6 12-10.3 12c-5.8 0-10.4-5.4-10.4-12z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1182.094 569.121)"
            >
                <tspan
                    x={19.5}
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
                transform="translate(1074.823 550.467)"
            >
                <tspan
                    x={35.1}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E332B - ICE CONDENSER"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#000"
                d="M1282.474 614.152c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M1282.766 644.29c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1198.4 599.15)"
            >
                <tspan
                    x={31.5}
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
                transform="translate(1200.116 629.288)"
            >
                <tspan
                    x={31}
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
                d="M0 22.5h94.3V0H0v22.5z"
                transform="rotate(90 89.89 649.84)"
            />
            <path
                fill="url(#d)"
                d="M0 5.1h94.3V0H0v5.1z"
                transform="rotate(90 82.223 642.174)"
            />
            <path
                fill="url(#c)"
                d="M0 20.5h94.3V0H0v20.5z"
                transform="rotate(90 -58.854 501.098)"
            />
            <path
                fill="url(#d)"
                d="M0 5.9h94.3V0H0v5.9z"
                transform="rotate(90 -58.656 501.295)"
            />
            <path
                fill="url(#c)"
                d="M9.1 0h95.1c5 0 9.1 9 9.1 20.1v237.4c0 11.1-4.1 20.1-9.1 20.1H9.1c-5 0-9.1-9-9.1-20.1V20.1C0 9 4.1 0 9.1 0z"
                transform="rotate(90 84.532 634.995)"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M705.332 584.123c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(604.953 569.121)"
            >
                <tspan
                    x={19.5}
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
                transform="translate(470.22 550.467)"
            >
                <tspan
                    x={35.1}
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
                d="M705.332 614.152c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M705.624 644.29c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(621.258 599.15)"
            >
                <tspan
                    x={31.5}
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
                transform="translate(622.974 629.288)"
            >
                <tspan
                    x={31}
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
                transform="translate(787.767 877.782)"
            >
                <tspan
                    x={37.1}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D332 - MELTING VESSEL"}
                </tspan>
            </text>
            <path
                fill="#00b0f0"
                stroke="#3498db"
                d="M778.593 475.21h185.7v32.5h-185.7v-32.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(791.29 475.842)"
            >
                <tspan
                    x={40.7}
                    y={20.8}
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
                transform="translate(783.45 215.004)"
            >
                <tspan
                    x={50.3}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"NH3 - D331 SEPARATOR"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#3498db"
                d="M778.593 574.914h185.7v32.5h-185.7v-32.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(791.29 577.535)"
            >
                <tspan
                    x={41.7}
                    y={20.8}
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
                d="M778.596 610.075h92.3v27h-92.3v-27z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(778.596 610.075)"
            >
                <tspan
                    x={33.7}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"13 PV"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M871.976 610.135h92.3v27.3h-92.3v-27.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(886.5 612)"
            >
                <tspan
                    x={20.7}
                    y={17.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"20 SV"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M778.593 699.933h185.7v32.5h-185.7v-32.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(778.593 699.933)"
            >
                <tspan
                    x={48.4}
                    y={20.8}
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
                d="M775.48 468.877h192v293.6h-192v-293.6z"
            />
            <path
                fill="#fff"
                stroke="#8d9cb1"
                d="M778.593 507.757h185.7v65.1h-185.7v-65.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(778.593 507.757)"
            >
                <tspan
                    x={87.9}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"18"}
                </tspan>
                <tspan
                    x={62.9}
                    y={44.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"MAIN CYCLE"}
                </tspan>
            </text>
            <g stroke="#7030a0">
                <path fill="none" strokeWidth={2.667} d="M715.69 554.437v-274.1" />
                <path
                    fill="#7030a0"
                    strokeLinecap="round"
                    d="m710.79 280.337 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <g stroke="#7030a0">
                <path fill="none" strokeWidth={2.667} d="M1032.773 552.45v-272.1" />
                <path
                    fill="#7030a0"
                    strokeLinecap="round"
                    d="m1027.873 280.35 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={2.667} d="M454.367 305.394v235.3" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m459.267 540.694-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#00b0f0"
                strokeWidth={2.667}
                d="M454.367 401.412h835"
            />
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={2.667} d="M1289.365 401.412v140.2" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m1294.265 541.612-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#7030a0"
                strokeWidth={2.667}
                d="M766.74 274.539v454.8M976.993 274.539v453.8M976.993 728.33h55.8"
            />
            <g stroke="#7030a0">
                <path fill="none" strokeWidth={2.667} d="M1032.773 728.33v-56.8" />
                <path
                    fill="#7030a0"
                    strokeLinecap="round"
                    d="m1027.873 671.53 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#7030a0"
                strokeWidth={2.667}
                d="M766.74 729.323h-51.5"
            />
            <g stroke="#7030a0">
                <path fill="none" strokeWidth={2.667} d="M715.69 729.323v-59.8" />
                <path
                    fill="#7030a0"
                    strokeLinecap="round"
                    d="m710.79 669.523 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={2.667} d="M555.63 400.418v140.2" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m560.53 540.618-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={2.667} d="M661.185 471.826v79.6" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m656.285 471.826 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path
                fill="url(#e)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(90 -11.033 469.74)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 -4.515 482.081)"
            />
            <path
                fill="red"
                d="M476.926 487.462v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
            />
            <path fill="red" d="M476.397 487.791v15.9h-9.2v-15.9h9.2z" />
            <path
                fill="url(#g)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(90 -13.773 479.82)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 -11.212 471.816)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 -23.013 483.616)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 -13.084 471.78)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 -23.757 482.454)"
            />
            <path
                fill="url(#f)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(90 -6.475 479.324)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(90 -5.071 483.5)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 -4.919 484.173)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 -8.249 477.55)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(90 -4.493 473.087)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(1 0 0 -1 460.513 477.253)"
            />
            <path
                fill="url(#h)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 468.594 477.583)"
            />
            <path
                fill="url(#e)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(90 39.575 520.347)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 46.092 532.689)"
            />
            <path
                fill="red"
                d="M578.142 487.462v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
            />
            <path fill="red" d="M577.613 487.791v15.9h-9.2v-15.9h9.2z" />
            <path
                fill="url(#g)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(90 36.835 530.428)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 39.395 522.424)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 27.595 534.224)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 37.524 522.388)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 26.85 533.061)"
            />
            <path
                fill="url(#f)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(90 44.133 529.931)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(90 45.536 534.107)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 45.69 534.78)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 42.359 528.157)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(90 46.115 523.695)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(1 0 0 -1 561.728 477.253)"
            />
            <path
                fill="url(#h)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 569.81 477.583)"
            />
            <path
                fill="url(#e)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(90 92.568 573.34)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 99.085 585.681)"
            />
            <path
                fill="red"
                d="M684.127 487.462v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
            />
            <path fill="red" d="M683.598 487.791v15.9h-9.2v-15.9h9.2z" />
            <path
                fill="url(#g)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(90 89.828 583.42)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 92.388 575.416)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 80.587 587.217)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 90.516 575.381)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 79.844 586.054)"
            />
            <path
                fill="url(#f)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(90 97.126 582.924)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(90 98.529 587.1)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 98.682 587.773)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 95.352 581.15)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(90 99.107 576.688)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(1 0 0 -1 667.713 477.253)"
            />
            <path
                fill="url(#h)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 675.795 477.583)"
            />
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={2.667} d="M1181.708 400.418v140.2" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m1186.608 540.618-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="url(#i)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(90 352.613 833.385)"
            />
            <path
                fill="url(#j)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 359.13 845.727)"
            />
            <path
                fill="#92d050"
                d="M1204.218 487.462v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
            />
            <path fill="#92d050" d="M1203.69 487.791v15.9h-9.2v-15.9h9.2z" />
            <path
                fill="url(#k)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(90 349.873 843.467)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 352.434 835.462)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 340.633 847.263)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 350.562 835.427)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 339.89 846.1)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(90 357.171 842.97)"
            />
            <path
                fill="url(#k)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(90 358.575 847.146)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 358.727 847.819)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 355.397 841.196)"
            />
            <path
                fill="url(#i)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(90 359.153 836.733)"
            />
            <path
                fill="url(#i)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(1 0 0 -1 1187.805 477.253)"
            />
            <path
                fill="url(#l)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 1195.886 477.583)"
            />
            <path
                fill="url(#i)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(90 406.468 887.24)"
            />
            <path
                fill="url(#j)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 412.985 899.581)"
            />
            <path
                fill="#92d050"
                d="M1311.927 487.462v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
            />
            <path fill="#92d050" d="M1311.398 487.791v15.9h-9.2v-15.9h9.2z" />
            <path
                fill="url(#k)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(90 403.728 897.32)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 406.288 889.316)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 394.487 901.117)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 404.416 889.28)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 393.743 899.954)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(90 411.025 896.824)"
            />
            <path
                fill="url(#k)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(90 412.429 901)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 412.582 901.673)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 409.251 895.05)"
            />
            <path
                fill="url(#i)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(90 413.007 890.588)"
            />
            <path
                fill="url(#i)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(1 0 0 -1 1295.513 477.253)"
            />
            <path
                fill="url(#l)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 1303.595 477.583)"
            />
            <path fill="#fff" d="M383.777 478.548h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(383.777 478.548)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV331A"}
                </tspan>
            </text>
            <path fill="#fff" d="M482.418 478.548h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(482.418 478.548)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV332A"}
                </tspan>
            </text>
            <path fill="#fff" d="M590.978 478.548h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(590.978 478.548)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV333A"}
                </tspan>
            </text>
            <path fill="#fff" d="M1104.476 481.27h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1104.476 481.27)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV331B"}
                </tspan>
            </text>
            <path fill="#fff" d="M1207.405 481.27h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1207.405 481.27)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV332B"}
                </tspan>
            </text>
            <path fill="#fff" d="M1314.255 481.27h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1314.255 481.27)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV333B"}
                </tspan>
            </text>
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={2.667} d="M1079.114 471.826v79.6" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m1074.214 471.826 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path
                fill="url(#i)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(90 301.578 782.35)"
            />
            <path
                fill="url(#j)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 308.096 794.692)"
            />
            <path
                fill="#92d050"
                d="M1102.148 487.462v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
            />
            <path fill="#92d050" d="M1101.619 487.791v15.9h-9.2v-15.9h9.2z" />
            <path
                fill="url(#k)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(90 298.838 792.431)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 301.398 784.427)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 289.598 796.227)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 299.527 784.392)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 288.854 795.065)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(90 306.136 791.935)"
            />
            <path
                fill="url(#k)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(90 307.54 796.11)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 307.692 796.784)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 304.362 790.16)"
            />
            <path
                fill="url(#i)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(90 308.118 785.698)"
            />
            <path
                fill="url(#i)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(1 0 0 -1 1085.735 477.253)"
            />
            <path
                fill="url(#l)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 1093.816 477.583)"
            />
            <path
                fill="none"
                stroke="#00b0f0"
                strokeWidth={2.667}
                d="M661.185 462.026h739.5"
            />
            <path
                fill="url(#i)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(-90 521.768 -190.455)"
            />
            <path
                fill="url(#j)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(-90 509.426 -183.938)"
            />
            <path
                fill="#92d050"
                d="M694.003 324.622v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
            />
            <path fill="#92d050" d="M694.532 324.293v-15.9h9.2v15.9h-9.2z" />
            <path
                fill="url(#k)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(-90 511.687 -193.195)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 519.691 -190.635)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 507.89 -202.435)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 519.726 -192.506)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 509.053 -203.18)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(-90 512.183 -185.897)"
            />
            <path
                fill="url(#k)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(-90 508.007 -184.494)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(-90 507.334 -184.341)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(-90 513.957 -187.671)"
            />
            <path
                fill="url(#i)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(-90 518.42 -183.915)"
            />
            <path
                fill="url(#i)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(-1 0 0 1 710.417 334.831)"
            />
            <path
                fill="url(#l)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 1 1 0 702.335 334.502)"
            />
            <path fill="#fff" d="M647.885 338.808h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(647.885 338.808)"
            >
                <tspan
                    x={15.4}
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
                d="M715.25 288.133h-80.7M634.582 288.133v90.4M634.582 378.557h80.7"
            />
            <path
                fill="url(#e)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(-90 480.58 -149.268)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(-90 468.24 -142.75)"
            />
            <path
                fill="red"
                d="M611.63 324.622v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
            />
            <path fill="red" d="M612.159 324.293v-15.9h9.2v15.9h-9.2z" />
            <path
                fill="url(#g)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(-90 470.5 -152.008)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 478.504 -149.448)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 466.704 -161.249)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 478.54 -151.32)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 467.867 -161.992)"
            />
            <path
                fill="url(#f)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(-90 470.997 -144.71)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(-90 466.82 -143.307)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(-90 466.148 -143.154)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(-90 472.77 -146.484)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(-90 477.233 -142.729)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(-1 0 0 1 628.043 334.831)"
            />
            <path
                fill="url(#h)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 1 1 0 619.961 334.502)"
            />
            <path fill="#fff" d="M565.511 338.808h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(565.511 338.808)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV337A"}
                </tspan>
            </text>
            <path fill="#fff" d="M1101.69 334.834h-63.8v30h63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1037.89 334.834)"
            >
                <tspan
                    x={15.4}
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
                d="M1033.16 284.159h80.7M1113.827 284.159v90.4"
            />
            <path
                fill="url(#e)"
                d="M0 0h29.9v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1117.723 327.338)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="matrix(0 -1 -1 0 1136.582 321.514)"
            />
            <path
                fill="red"
                d="M1135.943 320.648v-16.6c0-.1-.1-.2-.2-.2h-9.9c-.1 0-.2.1-.2.2v16.6c0 .1.1.2.2.2h9.9c.1 0 .2-.1.2-.2z"
            />
            <path fill="red" d="M1135.414 320.319v-15.9h-9.2v15.9h9.2z" />
            <path
                fill="url(#g)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="matrix(0 -1 -1 0 1125.064 314.517)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1119.62 325.082)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1119.62 301.48)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1117.713 323.245)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1117.713 301.9)"
            />
            <path
                fill="url(#f)"
                d="M0 0h19.9v2.1H0V0z"
                transform="matrix(0 -1 -1 0 1131.865 322.312)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.1v.9H0V0z"
                transform="matrix(0 -1 -1 0 1137.445 319.539)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="matrix(0 -1 -1 0 1138.27 319.019)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="matrix(0 -1 -1 0 1128.317 322.312)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.3v.7H0V0z"
                transform="matrix(0 -1 -1 0 1127.61 330.53)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.8H0V0z"
                transform="translate(1119.53 330.857)"
            />
            <path
                fill="url(#h)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="rotate(90 398.542 729.069)"
            />
            <path
                fill="none"
                stroke="#7030a0"
                strokeWidth={2.667}
                d="M1113.827 374.583h-80.7"
            />
            <path
                fill="url(#i)"
                d="M0 0h29.9v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1037.922 327.338)"
            />
            <path
                fill="url(#j)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="matrix(0 -1 -1 0 1056.781 321.514)"
            />
            <path
                fill="#92d050"
                d="M1056.142 320.648v-16.6c0-.1-.1-.2-.2-.2h-9.9c-.1 0-.2.1-.2.2v16.6c0 .1.1.2.2.2h9.9c.1 0 .2-.1.2-.2z"
            />
            <path fill="#92d050" d="M1055.613 320.319v-15.9h-9.2v15.9h9.2z" />
            <path
                fill="url(#k)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="matrix(0 -1 -1 0 1045.263 314.517)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1039.819 325.082)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1039.819 301.48)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1037.912 323.245)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1037.912 301.9)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="matrix(0 -1 -1 0 1052.064 322.312)"
            />
            <path
                fill="url(#k)"
                d="M0 0h2.1v.9H0V0z"
                transform="matrix(0 -1 -1 0 1057.644 319.539)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.1v.9H0V0z"
                transform="matrix(0 -1 -1 0 1058.47 319.019)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.8v2.1H0V0z"
                transform="matrix(0 -1 -1 0 1048.516 322.312)"
            />
            <path
                fill="url(#i)"
                d="M0 0h8.3v.7H0V0z"
                transform="matrix(0 -1 -1 0 1047.81 330.53)"
            />
            <path
                fill="url(#i)"
                d="M0 0h7v.8H0V0z"
                transform="translate(1039.728 330.857)"
            />
            <path
                fill="url(#l)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="rotate(90 358.641 689.169)"
            />
            <path fill="#fff" d="M1119.177 335.827h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1119.177 335.827)"
            >
                <tspan
                    x={15.4}
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
                d="M663.482 686.501h21s1.8.8 2 2.4c.1 1.6-2 2.6-2 2.6h-14.8s-1.8 0-1.8 2.3 1.8 2.3 1.8 2.3h14.8s2 .8 2 1.9c0 1.1-1.2 2.8-2 2.8h-14.8s-1.8.8-1.8 2.2c0 1.5 1.8 2.3 1.8 2.3h14.8s2 .3 2 1.9c0 1.7-2 2.7-2 2.7h-20.7M993.596 415.323v-24.3s.7-2.1 2.1-2.3c1.4-.2 2.2 2.3 2.2 2.3v17.1s0 2.1 2 2.1c1.9 0 1.9-2.1 1.9-2.1v-17.1s.7-2.3 1.7-2.3 2.4 1.3 2.4 2.3v17.1s.7 2.1 2 2.1c1.2 0 1.9-2.1 1.9-2.1v-17.1s.3-2.3 1.7-2.3 2.3 2.3 2.3 2.3v23.9M733.572 415.323v-24.3s.7-2.1 2.1-2.3c1.4-.2 2.2 2.3 2.2 2.3v17.1s0 2.1 2 2.1c1.9 0 1.9-2.1 1.9-2.1v-17.1s.7-2.3 1.7-2.3 2.4 1.3 2.4 2.3v17.1s.7 2.1 2 2.1c1.2 0 1.9-2.1 1.9-2.1v-17.1s.3-2.3 1.7-2.3 2.3 2.3 2.3 2.3v23.9"
            />
            <path fill="#fff" d="M718.414 419.298h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(718.414 419.298)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"EHT333"}
                </tspan>
            </text>
            <path fill="#fff" d="M978.703 418.304h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(978.703 418.304)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"EHT335"}
                </tspan>
            </text>
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M973.989 909.745c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4zM974.435 876.407c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M974.34 876.388c0-6.6 4.6-12 10.4-12 5.7 0 10.3 5.4 10.3 12s-4.6 12-10.3 12c-5.8 0-10.4-5.4-10.4-12z"
            />
            <path fill="#fff" d="M1001.722 861.405h75.5v30h-75.5v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1001.722 861.405)"
            >
                <tspan
                    x={18.7}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LAHH332"}
                </tspan>
            </text>
            <path fill="#fff" d="M1001.745 896.407h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1001.745 896.407)"
            >
                <tspan
                    x={15.9}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LAH331"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M677.49 663.74v112.3M1074.823 663.74v112.3M677.49 776.025h153.6M921.212 776.025h153.6M831.102 776.025v67.6M921.212 776.025v67.6"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2}
                d="M1088.55 711.199h-21s-1.8-.8-2-2.4c-.1-1.6 2-2.6 2-2.6h14.8s1.8 0 1.8-2.3-1.8-2.3-1.8-2.3h-14.8s-2-.8-2-1.9c0-1.1 1.2-2.8 2-2.8h14.8s1.8-.8 1.8-2.2c0-1.5-1.8-2.3-1.8-2.3h-14.8s-2-.3-2-1.9c0-1.7 2-2.7 2-2.7h20.7"
            />
            <path
                fill="url(#i)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(-90 715.457 42.676)"
            />
            <path
                fill="url(#j)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(-90 703.115 49.193)"
            />
            <path
                fill="#92d050"
                d="M654.562 751.442v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
            />
            <path fill="#92d050" d="M655.091 751.113v-15.9h9.2v15.9h-9.2z" />
            <path
                fill="url(#k)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(-90 705.376 39.936)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 713.38 42.496)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 701.58 30.695)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 713.416 40.624)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 702.743 29.951)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(-90 705.873 47.233)"
            />
            <path
                fill="url(#k)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(-90 701.697 48.637)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(-90 701.024 48.79)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(-90 707.647 45.46)"
            />
            <path
                fill="url(#i)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(-90 712.109 49.215)"
            />
            <path
                fill="url(#i)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(-1 0 0 1 670.975 761.651)"
            />
            <path
                fill="url(#l)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 1 1 0 662.894 761.322)"
            />
            <path fill="#fff" d="M588.015 727.381h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(588.015 727.381)"
            >
                <tspan
                    x={15.4}
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
                d="M0 0h29.9v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1078.728 754.626)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="matrix(0 -1 -1 0 1097.587 748.802)"
            />
            <path
                fill="red"
                d="M1096.948 747.936v-16.6c0-.1-.1-.2-.2-.2h-9.9c-.1 0-.2.1-.2.2v16.6c0 .1.1.2.2.2h9.9c.1 0 .2-.1.2-.2z"
            />
            <path fill="red" d="M1096.418 747.607v-15.9h-9.2v15.9h9.2z" />
            <path
                fill="url(#g)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="matrix(0 -1 -1 0 1086.07 741.805)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1080.625 752.37)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1080.625 728.768)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1078.718 750.533)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1078.718 729.187)"
            />
            <path
                fill="url(#f)"
                d="M0 0h19.9v2.1H0V0z"
                transform="matrix(0 -1 -1 0 1092.87 749.6)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.1v.9H0V0z"
                transform="matrix(0 -1 -1 0 1098.45 746.827)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="matrix(0 -1 -1 0 1099.275 746.307)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="matrix(0 -1 -1 0 1089.322 749.6)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.3v.7H0V0z"
                transform="matrix(0 -1 -1 0 1088.616 757.817)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.8H0V0z"
                transform="translate(1080.534 758.145)"
            />
            <path
                fill="url(#h)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="rotate(90 165.4 923.215)"
            />
            <path fill="#fff" d="M1099.07 724.362h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1099.07 724.362)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV335B"}
                </tspan>
            </text>
            <path fill="#fff" d="M599.71 685.692h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(599.71 685.692)"
            >
                <tspan
                    x={14.9}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"ETC322"}
                </tspan>
            </text>
            <path fill="#fff" d="M1087.69 685.595h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1087.69 685.595)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"EHT334"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M701.519 909.177h247.2M948.673 909.177v21.9M948.673 931.038h-193.9M754.725 931.038v42.7M701.519 909.177v64.6M397.729 520.652v304.1M397.729 824.715h405.1"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2.667} d="M397.729 520.652h149" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m546.729 515.752 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <g stroke="red">
                <path fill="none" strokeWidth={2.667} d="M444.567 532.576h-46.8" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m444.567 527.676 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M802.782 824.715v21.9M965.407 822.728h405.1M966.06 822.728v21.9M1370.89 518.665v304.1"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2.667} d="M1370.89 518.665h-178.1" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m1192.79 523.565-9.8-4.9 9.8-4.9v9.8"
                />
            </g>
            <path fill="#fff" d="M422.457 698.513h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(422.457 698.513)"
            >
                <tspan
                    x={15.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV334A"}
                </tspan>
            </text>
            <path
                fill="url(#i)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(90 -148.052 549.962)"
            />
            <path
                fill="url(#j)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 -141.534 562.304)"
            />
            <path
                fill="#92d050"
                d="M420.13 704.704v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2z"
            />
            <path fill="#92d050" d="M419.601 705.033v15.9h-9.2v-15.9h9.2z" />
            <path
                fill="url(#k)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(90 -150.792 560.044)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 -148.232 552.039)"
            />
            <path
                fill="url(#i)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 -160.032 563.84)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 -150.103 552.004)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 -160.776 562.677)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(90 -143.494 559.547)"
            />
            <path
                fill="url(#k)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(90 -142.09 563.723)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 -141.938 564.396)"
            />
            <path
                fill="url(#i)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 -145.268 557.773)"
            />
            <path
                fill="url(#i)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(90 -141.512 553.31)"
            />
            <path
                fill="url(#i)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(1 0 0 -1 403.717 694.495)"
            />
            <path
                fill="url(#l)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 411.798 694.825)"
            />
            <path
                fill="url(#e)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(-90 1042.51 -325.214)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(-90 1030.169 -318.696)"
            />
            <path
                fill="red"
                d="M1349.504 710.607v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
            />
            <path fill="red" d="M1350.034 710.278v-15.9h9.2v15.9h-9.2z" />
            <path
                fill="url(#g)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(-90 1032.43 -327.954)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 1040.434 -325.393)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 1028.633 -337.194)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 1040.47 -327.265)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 1029.796 -337.938)"
            />
            <path
                fill="url(#f)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(-90 1032.926 -320.656)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(-90 1028.75 -319.252)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(-90 1028.077 -319.1)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(-90 1034.7 -322.43)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(-90 1039.162 -318.674)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(-1 0 0 1 1365.918 720.815)"
            />
            <path
                fill="url(#h)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 1 1 0 1357.836 720.486)"
            />
            <path fill="#fff" d="M1282.374 689.563h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1282.374 689.563)"
            >
                <tspan
                    x={15.4}
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
                d="M698.024 997.658v-7.9h-3.9l7.7-11.8 7.6 11.8h-3.8v7.9h-7.6zM758.492 978.002v8.6h3.9l-7.7 13-7.6-13h3.8v-8.6h7.6z"
            />
            <path
                fill="url(#m)"
                d="M0 0h29.9v8.4H0V0z"
                transform="rotate(-90 823.157 125.905)"
            />
            <path
                fill="url(#n)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(-90 810.815 132.422)"
            />
            <path
                fill="#b4b5b5"
                d="M679.032 942.371v-16.6c0-.1.1-.2.2-.2h9.9c.1 0 .2.1.2.2v16.6c0 .1-.1.2-.2.2h-9.9c-.1 0-.2-.1-.2-.2z"
            />
            <path fill="#7c7c7c" d="M679.562 942.042v-15.9h9.2v15.9h-9.2z" />
            <path
                fill="url(#o)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="rotate(-90 813.076 123.165)"
            />
            <path
                fill="url(#m)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 821.08 125.725)"
            />
            <path
                fill="url(#m)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 809.28 113.924)"
            />
            <path
                fill="url(#p)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 821.115 123.853)"
            />
            <path
                fill="url(#p)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 810.442 113.18)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="rotate(-90 813.572 130.463)"
            />
            <path
                fill="url(#o)"
                d="M0 0h2.1v.9H0V0z"
                transform="rotate(-90 809.396 131.866)"
            />
            <path
                fill="url(#o)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(-90 808.723 132.019)"
            />
            <path
                fill="url(#m)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(-90 815.347 128.689)"
            />
            <path
                fill="url(#m)"
                d="M0 0h8.3v.7H0V0z"
                transform="rotate(-90 819.809 132.444)"
            />
            <path
                fill="url(#m)"
                d="M0 0h7v.8H0V0z"
                transform="matrix(-1 0 0 1 695.446 952.58)"
            />
            <path
                fill="url(#q)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 1 1 0 687.364 952.25)"
            />
            <path fill="#fff" d="M656.65 999.6h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(656.65 999.6)"
            >
                <tspan
                    x={18.9}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Steam"}
                </tspan>
            </text>
            <path fill="#fff" d="M737.123 999.6h86.3v30h-86.3v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(737.123 999.6)"
            >
                <tspan
                    x={18.6}
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
                d="M458.537 280.65v8.6h3.9l-7.7 13-7.6-13h3.8v-8.6h7.6z"
            />
            <path fill="#fff" d="M417.735 222.87h79.5v48.8h-79.5v-48.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(417.735 222.87)"
            >
                <tspan
                    x={12.8}
                    y={21.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Vapour From "}
                </tspan>
                <tspan
                    x={29.3}
                    y={36.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D302"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M576.577 838.154h96.6v45.7h-96.6v-45.7z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M579.433 862.196h90.2v19.1h-90.2v-19.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(579.433 862.196)"
            >
                <tspan
                    x={21.1}
                    y={14.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"82.12 degC"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M579.432 842.18h90.2v18.5h-90.2v-18.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(579.432 842.18)"
            >
                <tspan
                    x={30.1}
                    y={13.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TIC331"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M576.227 910.784h96.6v45.7h-96.6v-45.7z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M579.083 934.827h90.2v19.1h-90.2v-19.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(579.083 934.827)"
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
                d="M579.082 914.81h90.2v18.5h-90.2v-18.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(579.082 914.81)"
            >
                <tspan
                    x={31.6}
                    y={13.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TV331"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#236ea1"
                strokeDasharray="2,5"
                d="M773.605 862.475h-96.3M625.142 886.323v17.9"
            />
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M877.445 941.968v63.6M877.445 1005.564h129.6"
            />
            <path
                fill="red"
                stroke="#92d050"
                d="M1011.405 1001.987h7.5v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.5v-8.9z"
            />
            <path fill="#fff" d="M1040.724 977.956h86.3v43.5h-86.3v-43.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1040.724 977.956)"
            >
                <tspan
                    x={13.6}
                    y={18.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Condensate to "}
                </tspan>
                <tspan
                    x={32.6}
                    y={33.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F305"}
                </tspan>
            </text>
            <path
                fill="url(#r)"
                d="M0 0h261.7v119.8H0V0z"
                transform="translate(1570.517 611.787)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(1570.517 616.192)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(1570.517 632.775)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(1570.517 657.65)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(1570.517 665.942)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(1570.517 641.067)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(1570.517 649.358)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(1570.517 624.483)"
            />
            <g fill="url(#s)" transform="translate(1570.517 674.233)">
                <path d="M0 0h261.7v3H0V0zM0 8.434h261.7v3H0v-3zM0 17.02h261.7v3H0v-3zM0 24.875h261.7v3H0v-3zM0 33.167h261.7v3H0v-3zM0 41.165h261.7v3H0v-3zM0 49.75h261.7v3H0v-3z" />
            </g>
            <path
                fill="url(#t)"
                d="M0 0h261.7v6.3H0V0z"
                transform="translate(1570.517 731.048)"
            />
            <path
                fill="url(#t)"
                d="M0 0h276.3v6.3H0V0z"
                transform="translate(1561.935 606.039)"
            />
            <path
                fill="url(#t)"
                d="M0 0h276.3v6.3H0V0z"
                transform="translate(1563.223 674.726)"
            />
            <path
                fill="url(#u)"
                d="M0 0h7.4v15H0V0z"
                transform="matrix(0 1 1 0 1110.12 102.712)"
            />
            <path
                fill="url(#v)"
                d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
                transform="matrix(0 -1 -1 0 1110.408 111.668)"
            />
            <path
                fill="url(#w)"
                d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
                transform="rotate(-90 610.815 -499.187)"
            />
            <path
                fill="#7c7c7c"
                d="M1109.445 111.297v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#x)"
                d="M0 0h14.7v2.3H0V0z"
                transform="translate(1118.564 114.176)"
            />
            <path
                fill="url(#x)"
                stroke="#595959"
                d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
                transform="translate(1119.4 108.875)"
            />
            <path
                fill="url(#u)"
                stroke="#595959"
                d="M0 0h7.4v15H0V0z"
                transform="matrix(0 1 1 0 1126.38 91.813)"
            />
            <path
                fill="url(#y)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
                transform="matrix(0 -1 -1 0 1134.264 111.14)"
            />
            <path
                fill="#7c7c7c"
                d="M1125.961 109.505c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1125.938 98.554c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
            />
            <path
                fill="url(#z)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 514.353 613.54)"
            />
            <path
                fill="url(#v)"
                d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
                transform="matrix(0 1 1 0 1141.269 90.236)"
            />
            <path
                fill="url(#w)"
                d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
                transform="rotate(90 525.7 615.976)"
            />
            <path
                fill="#7c7c7c"
                d="M1142.232 90.608v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="url(#u)"
                d="M0 0h7.4v15H0V0z"
                transform="matrix(0 1 1 0 1110.978 144.506)"
            />
            <path
                fill="url(#v)"
                d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
                transform="matrix(0 -1 -1 0 1111.267 153.462)"
            />
            <path
                fill="url(#w)"
                d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
                transform="rotate(-90 632.14 -478.719)"
            />
            <path
                fill="#7c7c7c"
                d="M1110.303 153.09v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#x)"
                d="M0 0h14.7v2.3H0V0z"
                transform="translate(1119.423 155.97)"
            />
            <path
                fill="url(#x)"
                stroke="#595959"
                d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
                transform="translate(1120.258 150.669)"
            />
            <path
                fill="url(#u)"
                stroke="#595959"
                d="M0 0h7.4v15H0V0z"
                transform="matrix(0 1 1 0 1127.239 133.607)"
            />
            <path
                fill="url(#y)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
                transform="matrix(0 -1 -1 0 1135.122 152.935)"
            />
            <path
                fill="#7c7c7c"
                d="M1126.82 151.298c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1126.797 140.347c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
            />
            <path
                fill="url(#z)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 493.885 634.867)"
            />
            <path
                fill="url(#v)"
                d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
                transform="matrix(0 1 1 0 1142.127 132.03)"
            />
            <path
                fill="url(#w)"
                d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
                transform="rotate(90 505.232 637.302)"
            />
            <path
                fill="#7c7c7c"
                d="M1143.09 132.401v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#fff" d="M1139.32 100.338h55.4v26.2h-55.4v-26.2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1139.32 100.338)"
            >
                <tspan
                    x={13.7}
                    y={17.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G331A"}
                </tspan>
            </text>
            <path fill="#fff" d="M1141.895 140.398h55.4v26.8h-55.4v-26.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1141.895 140.398)"
            >
                <tspan
                    x={13.7}
                    y={17.9}
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
                d="M1235.515 94.592v42.7M1141.975 136.327h94.4"
            />
            <g stroke="#7030a0">
                <path fill="none" strokeWidth={2.667} d="M873.79 190.077v-73.7" />
                <path
                    fill="#7030a0"
                    strokeLinecap="round"
                    d="m868.89 116.377 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#7030a0"
                strokeWidth={2.667}
                d="M873.79 106.609h235.1M1052.288 106.609v43.7M1110.643 150.33h-58.4M1143.254 94.685h403.3"
            />
            <path
                fill="url(#A)"
                stroke="#696969"
                d="M0 0h35.1v47.3H0V0z"
                transform="translate(1548.78 85.5)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={5.333}
                d="m1547.347 94.621 37.233 27.352"
            />
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={5.333}
                d="m1546.634 122.822 37.226-27.363"
            />
            <g stroke="#92d050">
                <path fill="none" strokeWidth={2.667} d="M1583.879 95.446h21.6" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1605.479 90.546 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#7030a0"
                strokeWidth={2.667}
                d="M1584.6 121.987h156.8"
            />
            <g stroke="#7030a0">
                <path fill="none" strokeWidth={2.667} d="M1741.395 121.987v86.1" />
                <path
                    fill="#7030a0"
                    strokeLinecap="round"
                    d="m1746.295 208.087-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#92d050">
                <path fill="none" strokeWidth={2.667} d="M1536.834 122.822h-26.3" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1536.834 117.922 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M1510.549 122.822v19.6"
            />
            <g stroke="#7030a0">
                <path fill="none" strokeWidth={2.667} d="M995.65 181.27v-9.1" />
                <path
                    fill="#7030a0"
                    strokeLinecap="round"
                    d="m1000.55 181.27-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#7030a0"
                strokeWidth={2.667}
                d="M995.65 173.185h259.2M1563.755 328.198v42.7"
            />
            <path
                fill="url(#a)"
                d="M0 8.3h42.5V0H0v8.3z"
                transform="translate(1577.154 392.156)"
            />
            <path
                fill="url(#b)"
                d="M0 1.9h42.5V0H0v1.9z"
                transform="translate(1577.154 397.826)"
            />
            <path
                fill="url(#a)"
                d="M0 7.6h42.5V0H0v7.6z"
                transform="translate(1577.154 502.169)"
            />
            <path
                fill="url(#b)"
                d="M0 2.2h42.5V0H0v2.2z"
                transform="translate(1577.154 502.023)"
            />
            <path
                fill="url(#a)"
                d="M4.1 0H47c2.2 0 4.1 3.3 4.1 7.4v87.8c0 4.1-1.9 7.4-4.1 7.4H4.1c-2.3 0-4.1-3.3-4.1-7.4V7.4C0 3.3 1.8 0 4.1 0z"
                transform="translate(1572.875 399.627)"
            />
            <g fill="url(#B)" stroke="#9b9b9b" transform="rotate(90 580.952 973.107)">
                <path d="M12.535 0h15.8v4.3h-15.8V0z" />
                <path d="M12.535 3.997h15.8v10.7h-15.8v-10.7zM3.675 14.702h33.8l-11.2 46.1v8.7h-11.4v-8.7l-11.2-46.1zM0 69.569h40.7v29.3H0v-29.3z" />
                <path d="M0 73.68h40.7v1.9H0v-1.9zM0 94.005h40.7v1.9H0v-1.9z" />
            </g>
            <g fill="url(#B)" stroke="#9b9b9b" transform="translate(1455.142 456.083)">
                <path d="M10.826 0h13.6v5h-13.6V0z" />
                <path d="M10.826 4.628h13.6v12.4h-13.6v-12.4z" />
                <path d="M3.174 17.023h29.2l-9.6 53.4v10.1h-10v-10.1l-9.6-53.4zM0 80.553h35.1v34H0v-34z" />
                <path d="M0 85.313h35.1v2.2H0v-2.2zM0 108.848h35.1v2.2H0v-2.2z" />
            </g>
            <path
                fill="none"
                stroke="#00b0f0"
                strokeWidth={2.667}
                d="M1554.058 411.352h20.6M1472.532 433.213v22.9M1399.588 460.719v93.7"
            />
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={2.667} d="M1399.588 554.441h45.1" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m1444.688 549.541 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M1474.248 569.346v79.5"
            />
            <path
                fill="red"
                stroke="#92d050"
                d="M1470.009 673.295v-7.9h-3.9l7.7-11.8 7.6 11.8h-3.8v7.9h-7.6z"
            />
            <path fill="#fff" d="M1444.078 675.24h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1444.078 675.24)"
            >
                <tspan
                    x={18.9}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Steam"}
                </tspan>
            </text>
            <g stroke="#92d050">
                <path fill="none" strokeWidth={2.667} d="M1597.824 509.727v87.6" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1602.724 597.327-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M1622.71 439.175h32.6M1623.569 464.017h32.6"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1574.207 257.14)"
            >
                <tspan
                    x={57.1}
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
                transform="translate(1571.154 437.441)"
            >
                <tspan
                    x={16.7}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E334"}
                </tspan>
            </text>
            <path fill="#fff" d="M1516.872 39.09h98.9v40.7h-98.9v-40.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1516.872 39.09)"
            >
                <tspan
                    x={39}
                    y={17.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E331"}
                </tspan>
                <tspan
                    x={20}
                    y={32.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CONDENSER"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1324.17 44.06h96.6v45.7h-96.6v-45.7z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1327.025 68.102h90.2v19.1h-90.2v-19.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1327.025 68.102)"
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
                d="M1327.025 48.086h90.2v18.5h-90.2v-18.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1327.025 48.086)"
            >
                <tspan
                    x={31.6}
                    y={13.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PT334"}
                </tspan>
            </text>
            <path
                fill="url(#m)"
                d="M0 0h25.9v9.7H0V0z"
                transform="matrix(-1 0 0 1 960.554 1001.748)"
            />
            <path
                fill="url(#n)"
                d="M.2 0h15.4c.1 0 .2.1.2.2v13c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="matrix(-1 0 0 1 955.524 979.912)"
            />
            <path
                fill="#b4b5b5"
                d="M954.749 980.652h-14.3c-.1 0-.2.1-.2.2v11.5c0 .1.1.2.2.2h14.3c.1 0 .2-.1.2-.2v-11.5c0-.1-.1-.2-.2-.2z"
            />
            <path fill="#7c7c7c" d="M954.492 981.265h-13.7v10.7h13.7v-10.7z" />
            <path
                fill="url(#o)"
                d="M0 0h3.7v8.7s0 .6-1.8.6S0 8.7 0 8.7V0z"
                transform="matrix(-1 0 0 1 949.481 993.248)"
            />
            <path
                fill="url(#m)"
                d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="matrix(-1 0 0 1 958.605 999.552)"
            />
            <path
                fill="url(#m)"
                d="M.3 0h.9c.2 0 .4.2.4.4v13.3c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="matrix(-1 0 0 1 938.222 999.552)"
            />
            <path
                fill="url(#p)"
                d="M0 0h.3v9.7H0V0z"
                transform="matrix(-1 0 0 1 957.02 1001.76)"
            />
            <path
                fill="url(#p)"
                d="M0 0h.3v9.7H0V0z"
                transform="matrix(-1 0 0 1 938.584 1001.76)"
            />
            <path
                fill="url(#j)"
                d="M0 0h17.2v2.5H0V0z"
                transform="matrix(-1 0 0 1 956.213 985.373)"
            />
            <path
                fill="url(#o)"
                d="M0 0h1.8v1H0V0z"
                transform="matrix(-1 0 0 1 953.818 978.913)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.9v1H0V0z"
                transform="matrix(-1 0 0 1 953.369 977.957)"
            />
            <path
                fill="url(#m)"
                d="M0 0h.7v2.5H0V0z"
                transform="matrix(-1 0 0 1 956.213 989.482)"
            />
            <path
                fill="url(#m)"
                d="M0 0h7.2v.8H0V0z"
                transform="matrix(-1 0 0 1 963.31 990.3)"
            />
            <path
                fill="url(#m)"
                d="M0 0h8.1v.7H0V0z"
                transform="rotate(-90 981.625 18.032)"
            />
            <path
                fill="url(#q)"
                d="M0 0s.5 0 .8.4c.2.3.2.9.2.9H.3S.3.9 0 .8V0z"
                transform="translate(963.308 990.3)"
            />
            <path fill="#fff" d="M1073.096 197.799h51.6v18.5h-51.6v-18.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1073.096 197.799)"
            >
                <tspan
                    x={12.8}
                    y={13.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LT331"}
                </tspan>
            </text>
            <path fill="#fff" d="M1620.96 73.81h71.2v40.7h-71.2v-40.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1620.96 73.81)"
            >
                <tspan
                    x={14.6}
                    y={17.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"COOLING "}
                </tspan>
                <tspan
                    x={19.1}
                    y={32.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"WATER"}
                </tspan>
            </text>
            <path fill="#fff" d="M1475.14 147.583h71.2v40.7h-71.2v-40.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1475.14 147.583)"
            >
                <tspan
                    x={14.6}
                    y={17.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"COOLING "}
                </tspan>
                <tspan
                    x={19.1}
                    y={32.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"WATER"}
                </tspan>
            </text>
            <path
                fill="url(#m)"
                d="M0 0h29.9v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1479.02 631.392)"
            />
            <path
                fill="url(#n)"
                d="M.2 0h17.9c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="matrix(0 -1 -1 0 1497.879 625.568)"
            />
            <path
                fill="#b4b5b5"
                d="M1497.239 624.702v-16.6c0-.1-.1-.2-.2-.2h-9.9c-.1 0-.2.1-.2.2v16.6c0 .1.1.2.2.2h9.9c.1 0 .2-.1.2-.2z"
            />
            <path fill="#7c7c7c" d="M1496.71 624.373v-15.9h-9.2v15.9h9.2z" />
            <path
                fill="url(#o)"
                d="M0 0h4.3v7.5s0 .5-2.1.5S0 7.5 0 7.5V0z"
                transform="matrix(0 -1 -1 0 1486.36 618.57)"
            />
            <path
                fill="url(#m)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1480.916 629.136)"
            />
            <path
                fill="url(#m)"
                d="M.4 0h1c.3 0 .4.2.4.3v11.5c0 .2-.1.4-.4.4h-1c-.2 0-.4-.2-.4-.4V.3C0 .2.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1480.916 605.535)"
            />
            <path
                fill="url(#p)"
                d="M0 0h.4v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1479.01 627.3)"
            />
            <path
                fill="url(#p)"
                d="M0 0h.4v8.4H0V0z"
                transform="matrix(0 -1 -1 0 1479.01 605.954)"
            />
            <path
                fill="url(#j)"
                d="M0 0h19.9v2.1H0V0z"
                transform="matrix(0 -1 -1 0 1493.162 626.366)"
            />
            <path
                fill="url(#o)"
                d="M0 0h2.1v.9H0V0z"
                transform="matrix(0 -1 -1 0 1498.74 623.593)"
            />
            <path
                fill="url(#o)"
                d="M0 0h1.1v.9H0V0z"
                transform="matrix(0 -1 -1 0 1499.567 623.073)"
            />
            <path
                fill="url(#m)"
                d="M0 0h.8v2.1H0V0z"
                transform="matrix(0 -1 -1 0 1489.614 626.366)"
            />
            <path
                fill="url(#m)"
                d="M0 0h8.3v.7H0V0z"
                transform="matrix(0 -1 -1 0 1488.907 634.584)"
            />
            <path
                fill="url(#m)"
                d="M0 0h7v.8H0V0z"
                transform="translate(1480.825 634.91)"
            />
            <path
                fill="url(#q)"
                d="M0 0s.6 0 .9.3c.3.3.3.8.3.8H.4S.4.8 0 .7V0z"
                transform="rotate(90 427.163 1061.744)"
            />
            <path fill="#fff" d="M1502.496 601.445h55v30h-55v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1502.496 601.445)"
            >
                <tspan
                    x={14}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV338"}
                </tspan>
            </text>
            <path
                fill="url(#u)"
                d="M0 0h7.4v15H0V0z"
                transform="matrix(0 1 1 0 1761.588 475.548)"
            />
            <path
                fill="url(#v)"
                d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
                transform="matrix(0 -1 -1 0 1761.876 484.504)"
            />
            <path
                fill="url(#w)"
                d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
                transform="rotate(-90 1122.967 -638.503)"
            />
            <path
                fill="#7c7c7c"
                d="M1760.913 484.132v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#x)"
                d="M0 0h14.7v2.3H0V0z"
                transform="translate(1770.032 487.012)"
            />
            <path
                fill="url(#x)"
                stroke="#595959"
                d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
                transform="translate(1770.868 481.71)"
            />
            <path
                fill="url(#u)"
                stroke="#595959"
                d="M0 0h7.4v15H0V0z"
                transform="matrix(0 1 1 0 1777.849 464.65)"
            />
            <path
                fill="url(#y)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
                transform="matrix(0 -1 -1 0 1785.732 483.977)"
            />
            <path
                fill="#7c7c7c"
                d="M1777.43 482.34c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1777.406 471.39c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
            />
            <path
                fill="url(#z)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 653.669 1125.692)"
            />
            <path
                fill="url(#v)"
                d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
                transform="matrix(0 1 1 0 1792.737 463.072)"
            />
            <path
                fill="url(#w)"
                d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
                transform="rotate(90 665.016 1128.128)"
            />
            <path
                fill="#7c7c7c"
                d="M1793.7 463.444v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#fff" d="M1745.414 492.341h63.8v21.7h-63.8v-21.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1745.414 492.341)"
            >
                <tspan
                    x={17.9}
                    y={15.3}
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
                d="M1760.017 479.445h-136.4"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1658.454 434.601h7.5v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.5v-8.9z"
            />
            <path fill="#fff" d="M1679.759 431.218h58.2v35.2h-58.2v-35.2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1679.759 431.218)"
            >
                <tspan
                    x={13.6}
                    y={14.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Cooling "}
                </tspan>
                <tspan
                    x={17.6}
                    y={29.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Water"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1677.161 467.396h-7.5v4.4l-11.2-8.9 11.2-8.8v4.4h7.5v8.9z"
            />
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M1837.252 466.697v112.6M1837.252 578.29h-56.6"
            />
            <g stroke="#92d050">
                <path fill="none" strokeWidth={2.667} d="M1780.613 578.29v18" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1785.513 596.29-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M1882.992 467.428h-87.8"
            />
            <g stroke="#92d050">
                <path fill="none" strokeWidth={2.667} d="M1882.735 468.684v-27.7" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1877.835 440.984 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path fill="#fff" d="M1864.648 397.398h33.5v28.8h-33.5v-28.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1864.648 397.398)"
            >
                <tspan
                    x={9.3}
                    y={18.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"atm"}
                </tspan>
            </text>
            <path fill="#fff" d="M1404.433 501.944h55v19h-55v-19z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1404.433 501.944)"
            >
                <tspan
                    x={13.5}
                    y={14}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G333A"}
                </tspan>
            </text>
            <path fill="#fff" d="M1490.284 431.96h55v21.4h-55v-21.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1490.284 431.96)"
            >
                <tspan
                    x={13.5}
                    y={15.2}
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
                d="M778.593 639.055h185.7v32.5h-185.7v-32.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(778.593 639.055)"
            >
                <tspan
                    x={59.9}
                    y={20.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"MELTING TIME"}
                </tspan>
            </text>
            <path fill="#fff" stroke="#3498db" d="M778.596 672.18h92.3v27h-92.3v-27z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(778.596 672.18)"
            >
                <tspan
                    x={33.7}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"13 PV"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M871.976 672.584h92.3v26.6h-92.3v-26.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(886.5 671.47)"
            >
                <tspan
                    x={20.7}
                    y={20.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"20 SV"}
                </tspan>
            </text>
            <path
                fill="#ebebeb"
                stroke="#3498db"
                d="M778.596 733.636h92.3v27h-92.3v-27z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(778.596 733.636)"
            >
                <tspan
                    x={33.7}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"13 PV"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M871.976 733.047h92.3v27.3h-92.3v-27.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(886.5 731.93)"
            >
                <tspan
                    x={20.7}
                    y={20.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"20 SV"}
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
                transform="translate(1667.973 697.72)"
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
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M1831.245 682.625h51.5M1882.735 682.625v18.9"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1885.704 703.533v8.6h3.9l-7.7 13-7.6-13h3.8v-8.6h7.6z"
            />
            <path fill="#fff" d="M1838.595 729.105h86.3v30h-86.3v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1838.595 729.105)"
            >
                <tspan
                    x={17.6}
                    y={19.5}
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
                transform="rotate(90 551.668 1080.508)"
            />
            <path
                fill="url(#D)"
                d="M0 0h.9v14H0V0z"
                transform="rotate(90 533.962 1069.163)"
            />
            <path
                fill="url(#E)"
                d="M0 0h3.9v.9H0V0z"
                transform="rotate(90 542.766 1076.514)"
            />
            <path
                fill="url(#D)"
                d="M0 0h2.8v15.4H0V0z"
                transform="rotate(90 542.086 1076.337)"
            />
            <path
                fill="url(#E)"
                d="M.2 0h13.4c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 551.871 1080.59)"
            />
            <path
                fill="url(#F)"
                d="M.2 0h9.6c.1 0 .2.1.2.2v4.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 548.676 1079.358)"
            />
            <path fill="#3e3938" d="M1627.606 531.185v9h-3.8v-9h3.8z" />
            <path
                fill="url(#G)"
                d="M.1 0h13.6s.1 0 .1.1v1.3c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="rotate(90 545.95 1074.743)"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1604.19 548.21h96.6v49.1h-96.6v-49.1z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1607.045 574.06h90.2v20.6h-90.2v-20.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1607.045 574.06)"
            >
                <tspan
                    x={21.1}
                    y={14.8}
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
                d="M1607.045 552.538h90.2v19.8h-90.2v-19.8z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1607.045 552.538)"
            >
                <tspan
                    x={30.1}
                    y={14.4}
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
                d="M1643.156 394.11c6.6 0 11.9 6.3 11.9 14.1 0 7.7-5.3 14-11.9 14-6.5 0-11.9-6.3-11.9-14 0-7.8 5.4-14.1 11.9-14.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="rotate(90 630.473 1024.583)"
            >
                <tspan
                    x={8.1}
                    y={16.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PS"}
                </tspan>
            </text>
            <path
                fill="url(#H)"
                d="M0 0h6.6v1H0V0z"
                transform="rotate(90 614.998 1019.064)"
            />
            <path
                fill="url(#H)"
                d="M0 0h4.9v9.1H0V0z"
                transform="rotate(90 614.07 1018.993)"
            />
            <path
                fill="#c2c2c2"
                stroke="#3c5c74"
                d="M1635.708 395.73v23.2c0 .1 0 .1-.1.1h-1.6V395.63h1.6c.1 0 .1 0 .1.1z"
            />
            <path
                fill="#92d050"
                stroke="#3498db"
                d="M50.111 846.54h169v41.9h-169v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(50.111 846.54)"
            >
                <tspan
                    x={56.5}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"AUTOMATIC"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M223.83 845.461h169v41.9h-169v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(223.83 845.461)"
            >
                <tspan
                    x={63.5}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"MANUAL"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M50.111 885.434h169v41.9h-169v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(50.111 885.434)"
            >
                <tspan
                    x={44.5}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"VAL. START POS."}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M223.83 884.356h169v41.9h-169v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(223.83 884.356)"
            >
                <tspan
                    x={64}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SERVICE"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M223.83 922.881h169v41.9h-169v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(223.83 922.881)"
            >
                <tspan
                    x={59}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"NEXT STEP"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M50.111 961.775h169v41.9h-169v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(50.111 961.775)"
            >
                <tspan
                    x={57.5}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"OFF CYCLE"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#3498db"
                d="M223.83 960.697h169v41.9h-169v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(223.83 960.697)"
            >
                <tspan
                    x={55.5}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"OFF / RESET"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#3498db"
                d="M50.111 923.96h169v41.9h-169v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(50.111 923.96)"
            >
                <tspan
                    x={52}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"START CYCLE"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#3498db"
                d="M41.965 838.154h357v215.1h-357v-215.1z"
            />
            <path
                fill="#fff"
                stroke="#3498db"
                d="M50.11 1006.427h342.7v41.9H50.11v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(50.11 1006.427)"
            >
                <tspan
                    x={139.4}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RESET FAULT"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#ff0",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "36pt",
                    fontWeight: 700,
                }}
                transform="translate(18.451 29.191)"
            >
                <tspan
                    x={4.5}
                    y={59.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                        textDecoration: "underline",
                    }}
                >
                    {"L1000 VACUUM SYSTEM"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7030a0"
                strokeWidth={2.667}
                d="M1254.815 172.192v198.7M1253.957 370.926h310.7"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1666.887 371.405h96.6v47.2h-96.6v-47.2z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1669.743 396.222h90.2v19.7h-90.2v-19.7z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1669.743 396.222)"
            >
                <tspan
                    x={18.1}
                    y={14.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"132.6 mBarA"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1669.743 375.562h90.2v19.1h-90.2v-19.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1669.743 375.562)"
            >
                <tspan
                    x={31.6}
                    y={14}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PT333"}
                </tspan>
            </text>
            <path
                fill="#ffc37c"
                stroke="#868686"
                d="M1295.746 71.965c0-7.6 5.4-13.8 12.1-13.8 6.8 0 12.2 6.2 12.2 13.8 0 7.5-5.4 13.7-12.2 13.7-6.7 0-12.1-6.2-12.1-13.7z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1295.746 58.165)"
            >
                <tspan
                    x={6.1}
                    y={18.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PS"}
                </tspan>
            </text>
            <path
                fill="url(#H)"
                d="M0 0h5.7v1.2H0V0z"
                transform="translate(1304.336 82.474)"
            />
            <path
                fill="url(#H)"
                d="M0 0h4.2v10.5H0V0z"
                transform="translate(1305.075 83.63)"
            />
            <path
                fill="#c2c2c2"
                stroke="#3c5c74"
                d="M1297.15 80.568h20c.1 0 .1 0 .1.1v1.8c0 .1 0 .1-.1.1h-20c-.1 0-.1 0-.1-.1v-1.8c0-.1 0-.1.1-.1z"
            />
            <path fill="#fff" d="M1072.936 222.583h59.2v18.5h-59.2v-18.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1072.936 222.583)"
            >
                <tspan
                    x={13.6}
                    y={13.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LAH333"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#000"
                d="M1037.75 232.58c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <path
                fill="url(#C)"
                d="M.2 0h13.2c.2 0 .3.1.3.2v12.6c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 434.863 635.764)"
            />
            <path
                fill="url(#D)"
                d="M0 0h.9v14H0V0z"
                transform="rotate(90 417.157 624.42)"
            />
            <path
                fill="url(#E)"
                d="M0 0h3.9v.9H0V0z"
                transform="rotate(90 425.96 631.77)"
            />
            <path
                fill="url(#D)"
                d="M0 0h2.8v15.4H0V0z"
                transform="rotate(90 425.28 631.593)"
            />
            <path
                fill="url(#E)"
                d="M.2 0h13.4c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 435.066 635.845)"
            />
            <path
                fill="url(#F)"
                d="M.2 0h9.6c.1 0 .2.1.2.2v4.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 431.871 634.614)"
            />
            <path fill="#3e3938" d="M1066.056 203.246v9h-3.8v-9h3.8z" />
            <path
                fill="url(#G)"
                d="M.1 0h13.6s.1 0 .1.1v1.3c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="rotate(90 429.145 629.999)"
            />
            <path
                fill="url(#r)"
                d="M0 0h261.7v119.8H0V0z"
                transform="translate(39.608 656.142)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(39.608 660.546)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(39.608 677.13)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(39.608 702.004)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(39.608 710.296)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(39.608 685.421)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(39.608 693.713)"
            />
            <path
                fill="url(#s)"
                d="M0 0h261.7v3H0V0z"
                transform="translate(39.608 668.838)"
            />
            <g fill="url(#s)" transform="translate(39.608 718.588)">
                <path d="M0 0h261.7v3H0V0zM0 8.434h261.7v3H0v-3zM0 17.02h261.7v3H0v-3zM0 24.875h261.7v3H0v-3zM0 33.167h261.7v3H0v-3zM0 41.165h261.7v3H0v-3zM0 49.75h261.7v3H0v-3z" />
            </g>
            <path
                fill="url(#t)"
                d="M0 0h261.7v6.3H0V0z"
                transform="translate(39.608 775.403)"
            />
            <path
                fill="url(#t)"
                d="M0 0h276.3v6.3H0V0z"
                transform="translate(31.026 650.393)"
            />
            <path
                fill="url(#t)"
                d="M0 0h276.3v6.3H0V0z"
                transform="translate(32.313 719.08)"
            />
            <path
                fill="url(#a)"
                d="M0 8.3h42.5V0H0v8.3z"
                transform="translate(46.244 436.51)"
            />
            <path
                fill="url(#b)"
                d="M0 1.9h42.5V0H0v1.9z"
                transform="translate(46.244 442.18)"
            />
            <path
                fill="url(#a)"
                d="M0 7.6h42.5V0H0v7.6z"
                transform="translate(46.244 546.523)"
            />
            <path
                fill="url(#b)"
                d="M0 2.2h42.5V0H0v2.2z"
                transform="translate(46.244 546.377)"
            />
            <path
                fill="url(#a)"
                d="M4.1 0H47c2.2 0 4.1 3.3 4.1 7.4v87.8c0 4.1-1.9 7.4-4.1 7.4H4.1c-2.3 0-4.1-3.3-4.1-7.4V7.4C0 3.3 1.8 0 4.1 0z"
                transform="translate(41.965 443.981)"
            />
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={2.667} d="M23.148 455.707h10.8" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m33.948 450.807 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <g stroke="#92d050">
                <path fill="none" strokeWidth={2.667} d="M66.914 554.081v87.6" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m71.814 641.681-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M91.801 483.53h32.6M92.66 508.371h32.6"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(40.245 481.796)"
            >
                <tspan
                    x={16.7}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E204"}
                </tspan>
            </text>
            <path
                fill="url(#u)"
                d="M0 0h7.4v15H0V0z"
                transform="matrix(0 1 1 0 210.941 519.902)"
            />
            <path
                fill="url(#v)"
                d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
                transform="matrix(0 -1 -1 0 211.23 528.859)"
            />
            <path
                fill="url(#w)"
                d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
                transform="rotate(-90 369.82 158.998)"
            />
            <path
                fill="#7c7c7c"
                d="M210.266 528.487v-9.8c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.8c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#x)"
                d="M0 0h14.7v2.3H0V0z"
                transform="translate(219.385 531.366)"
            />
            <path
                fill="url(#x)"
                stroke="#595959"
                d="M3.3 0h6.4l3.4 5.5H0L3.3 0z"
                transform="translate(220.22 526.065)"
            />
            <path
                fill="url(#u)"
                stroke="#595959"
                d="M0 0h7.4v15H0V0z"
                transform="matrix(0 1 1 0 227.201 509.004)"
            />
            <path
                fill="url(#y)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.3 0 9.7 0c5.3 0 9.7 3.7 9.7 8.3 0 4.6-4.4 8.3-9.7 8.3-5.4 0-9.7-3.7-9.7-8.3z"
                transform="matrix(0 -1 -1 0 235.085 528.331)"
            />
            <path
                fill="#7c7c7c"
                d="M226.782 526.695c3.8 0 6.9-3.6 6.9-8.1 0-4.4-3.1-8-6.9-8-3.8 0-6.9 3.6-6.9 8 0 4.5 3.1 8.1 6.9 8.1z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M226.76 515.744c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9-1.3 0-2.5-1.3-2.5-2.9 0-1.6 1.2-2.9 2.5-2.9z"
            />
            <path
                fill="url(#z)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 -143.832 372.546)"
            />
            <path
                fill="url(#v)"
                d="M.3 0h9.9c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
                transform="matrix(0 1 1 0 242.09 507.426)"
            />
            <path
                fill="url(#w)"
                d="M10.5 0c-.1.2-.2.4-.4.4H.3C.2.4 0 .2 0 0h10.5z"
                transform="rotate(90 -132.485 374.981)"
            />
            <path
                fill="#7c7c7c"
                d="M243.053 507.798v9.8c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.8c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#fff" d="M193.05 536.696h63.8v21.7h-63.8v-21.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(193.05 536.696)"
            >
                <tspan
                    x={17.9}
                    y={15.3}
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
                d="M210.427 523.8h-117.8"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M127.544 478.955h7.5v-4.4l11.2 8.9-11.2 8.8v-4.4h-7.5v-8.9z"
            />
            <path fill="#fff" d="M148.85 475.573h58.2v35.2h-58.2v-35.2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(148.85 475.573)"
            >
                <tspan
                    x={13.6}
                    y={14.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Cooling "}
                </tspan>
                <tspan
                    x={17.6}
                    y={29.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Water"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M146.252 511.75h-7.5v4.4l-11.2-8.9 11.2-8.8v4.4h7.5v8.9z"
            />
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M286.605 511.051v112.6M286.605 622.644h-56.6"
            />
            <g stroke="#92d050">
                <path fill="none" strokeWidth={2.667} d="M230.824 622.644v18" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m235.724 640.644-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M297.96 511.783h-53.4"
            />
            <g stroke="#92d050">
                <path fill="none" strokeWidth={2.667} d="M286.605 513.039v-27.7" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m281.705 485.339 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path fill="#fff" d="M270.234 453.45h33.5v17.1h-33.5v-17.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(270.234 453.45)"
            >
                <tspan
                    x={9.3}
                    y={13.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"atm"}
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
                transform="translate(137.063 742.075)"
            >
                <tspan
                    x={16.7}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F204"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={2.667}
                d="M300.336 726.98h28.5M328.655 726.98v18.9"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M331.624 747.887v8.6h3.9l-7.7 13-7.6-13h3.8v-8.6h7.6z"
            />
            <path fill="#fff" d="M303.021 769.487h58.5v44.7h-58.5v-44.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(303.021 769.487)"
            >
                <tspan
                    x={16.8}
                    y={19.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Waste "}
                </tspan>
                <tspan
                    x={17.8}
                    y={34.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Water"}
                </tspan>
            </text>
            <path
                fill="url(#C)"
                d="M.2 0h13.2c.2 0 .3.1.3.2v12.6c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 -235.964 337.23)"
            />
            <path
                fill="url(#D)"
                d="M0 0h.9v14H0V0z"
                transform="rotate(90 -253.67 325.886)"
            />
            <path
                fill="url(#E)"
                d="M0 0h3.9v.9H0V0z"
                transform="rotate(90 -244.866 333.237)"
            />
            <path
                fill="url(#D)"
                d="M0 0h2.8v15.4H0V0z"
                transform="rotate(90 -245.546 333.06)"
            />
            <path
                fill="url(#E)"
                d="M.2 0h13.4c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 -235.76 337.312)"
            />
            <path
                fill="url(#F)"
                d="M.2 0h9.6c.1 0 .2.1.2.2v4.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 -238.956 336.08)"
            />
            <path fill="#3e3938" d="M96.696 575.54v9h-3.8v-9h3.8z" />
            <path
                fill="url(#G)"
                d="M.1 0h13.6s.1 0 .1.1v1.3c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="rotate(90 -241.682 331.465)"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M73.28 592.564h96.6v49.1h-96.6v-49.1z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M76.136 618.415h90.2v20.6h-90.2v-20.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(76.136 618.415)"
            >
                <tspan
                    x={21.1}
                    y={14.8}
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
                d="M76.136 596.893h90.2v19.8h-90.2v-19.8z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(76.136 596.893)"
            >
                <tspan
                    x={31.6}
                    y={14.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TT204"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M318.377 516.645h-7.5v4.4l-11.2-8.9 11.2-8.8v4.4h7.5v8.9z"
            />
            <path fill="#fff" d="M320.944 493.575h45.3v35.2h-45.3v-35.2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(320.944 493.575)"
            >
                <tspan
                    x={14.1}
                    y={14.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"City "}
                </tspan>
                <tspan
                    x={11.1}
                    y={29.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Water"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#00b0f0"
                strokeWidth={2.667}
                d="M24.205 373.958v81.5"
            />
            <path fill="#fff" d="M16.977 322.837h45v43.1h-45v-43.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(16.977 322.837)"
            >
                <tspan
                    x={11.5}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"From "}
                </tspan>
                <tspan
                    x={12}
                    y={33.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F207"}
                </tspan>
            </text>
            <path
                fill="#ffc37c"
                stroke="#868686"
                d="M433.5 357.026c-6.6 0-11.9-6.3-11.9-14.1 0-7.7 5.3-14 11.9-14 6.5 0 11.9 6.3 11.9 14 0 7.8-5.4 14.1-11.9 14.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="rotate(-90 389.313 -32.286)"
            >
                <tspan
                    x={8.1}
                    y={16.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PS"}
                </tspan>
            </text>
            <path
                fill="url(#H)"
                d="M0 0h6.6v1H0V0z"
                transform="rotate(-90 394.832 -47.761)"
            />
            <path
                fill="url(#H)"
                d="M0 0h4.9v9.1H0V0z"
                transform="rotate(-90 394.903 -48.689)"
            />
            <path
                fill="#c2c2c2"
                stroke="#3c5c74"
                d="M440.947 355.406v-23.2c0-.1 0-.1.1-.1h1.6V355.506h-1.6c-.1 0-.1 0-.1-.1z"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M460.365 318.68h96.6v47.2h-96.6v-47.2z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M463.22 343.498h90.2v19.7h-90.2v-19.7z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(463.22 343.498)"
            >
                <tspan
                    x={23.1}
                    y={14.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"1.6 mBarA"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M463.22 322.837h90.2v19.1h-90.2v-19.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(463.22 322.837)"
            >
                <tspan
                    x={31.6}
                    y={14}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PT332"}
                </tspan>
            </text>
            <path fill="#fff" d="M917.62 1016.651h63.8v30h-63.8v-30z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(917.62 1016.651)"
            >
                <tspan
                    x={18.4}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV339"}
                </tspan>
            </text>
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1386.973 808.695h255.7v236.5h-255.7v-236.5z"
            />
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1398.16 861.52h234.1v41.9h-234.1v-41.9z"
            />
            <g clipPath="url(#I)" transform="translate(1398.16 861.52)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M3 3h228.1v35.9H3V3zm-6-6h240.1v47.9H-3V-3"
                    filter="url(#J)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1398.16 861.52)"
            >
                <tspan
                    x={96.1}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"MANUAL"}
                </tspan>
            </text>
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1398.16 952.767h234.1v41.9h-234.1v-41.9z"
            />
            <g clipPath="url(#K)" transform="translate(1398.16 952.767)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M3 3h228.1v35.9H3V3zm-6-6h240.1v47.9H-3V-3"
                    filter="url(#J)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1398.16 952.767)"
            >
                <tspan
                    x={93.6}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"WARNING"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#000"
                strokeWidth={2}
                d="M1398.16 907.002h234.1v41.9h-234.1v-41.9z"
            />
            <g clipPath="url(#L)" transform="translate(1398.16 907.002)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M3 3h228.1v35.9H3V3zm-6-6h240.1v47.9H-3V-3"
                    filter="url(#J)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1398.16 907.002)"
            >
                <tspan
                    x={106.6}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RUN"}
                </tspan>
            </text>
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1392.982 815.53h244.8v41.9h-244.8v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1392.982 815.53)"
            >
                <tspan
                    x={69.9}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"COMPRESSOR (G331A)"}
                </tspan>
            </text>
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1398.16 998.418h234.1v41.9h-234.1v-41.9z"
            />
            <g clipPath="url(#M)" transform="translate(1398.16 998.418)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M3 3h228.1v35.9H3V3zm-6-6h240.1v47.9H-3V-3"
                    filter="url(#J)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1398.16 998.418)"
            >
                <tspan
                    x={85.1}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RESET FAULT"}
                </tspan>
            </text>
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1649.571 808.344h255.7v236.5h-255.7v-236.5z"
            />
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1660.76 861.168h234.1v41.9h-234.1v-41.9z"
            />
            <g clipPath="url(#N)" transform="translate(1660.76 861.168)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M3 3h228.1v35.9H3V3zm-6-6h240.1v47.9H-3V-3"
                    filter="url(#J)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1660.76 861.168)"
            >
                <tspan
                    x={96.1}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"MANUAL"}
                </tspan>
            </text>
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1660.76 952.417h234.1v41.9h-234.1v-41.9z"
            />
            <g clipPath="url(#O)" transform="translate(1660.76 952.417)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M3 3h228.1v35.9H3V3zm-6-6h240.1v47.9H-3V-3"
                    filter="url(#J)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1660.76 952.417)"
            >
                <tspan
                    x={93.6}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"WARNING"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#000"
                strokeWidth={2}
                d="M1660.76 906.65h234.1v41.9h-234.1v-41.9z"
            />
            <g clipPath="url(#P)" transform="translate(1660.76 906.65)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M3 3h228.1v35.9H3V3zm-6-6h240.1v47.9H-3V-3"
                    filter="url(#J)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1660.76 906.65)"
            >
                <tspan
                    x={106.6}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RUN"}
                </tspan>
            </text>
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1655.58 815.177h244.8v41.9h-244.8v-41.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1655.58 815.177)"
            >
                <tspan
                    x={69.9}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"COMPRESSOR (G331A)"}
                </tspan>
            </text>
            <path
                fill="#d7d7d7"
                stroke="#000"
                strokeWidth={2}
                d="M1660.76 998.07h234.1v41.9h-234.1v-41.9z"
            />
            <g clipPath="url(#Q)" transform="translate(1660.76 998.07)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M3 3h228.1v35.9H3V3zm-6-6h240.1v47.9H-3V-3"
                    filter="url(#J)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1660.76 998.07)"
            >
                <tspan
                    x={85.1}
                    y={25.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RESET FAULT"}
                </tspan>
            </text>
            <path
                fill="#ebebeb"
                stroke="#000"
                strokeWidth={1.333}
                d="M135.771 140.399h199.7v236.5h-199.7v-236.5z"
            />
            <g clipPath="url(#R)" transform="translate(135.771 140.399)">
                <path
                    fillOpacity={0.4}
                    fillRule="evenodd"
                    d="M-2-2h199.7v236.5H-2V-2zm-2-2h207.7v244.5H-4V-4"
                    filter="url(#S)"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(181.878 203.357)"
            >
                <tspan
                    x={30.6}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"BASIC POSITION"}
                </tspan>
            </text>
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M156.87 216.85c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(181.878 248.877)"
            >
                <tspan
                    x={30.6}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"START POSITION"}
                </tspan>
            </text>
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M156.87 262.37c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(181.878 292.384)"
            >
                <tspan
                    x={58.6}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RUN"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#000"
                d="M156.87 305.878c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(181.878 337.904)"
            >
                <tspan
                    x={41.6}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SHUTDOWN"}
                </tspan>
            </text>
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M156.87 351.398c0-6.3 4.6-11.4 10.4-11.4 5.7 0 10.3 5.1 10.3 11.4 0 6.3-4.6 11.4-10.3 11.4-5.8 0-10.4-5.1-10.4-11.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(156.871 157.245)"
            >
                <tspan
                    x={37.7}
                    y={19}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                        textDecoration: "underline",
                    }}
                >
                    {"OPERATING MODE"}
                </tspan>
            </text>
        </svg>
    )
}

export default VacuumHMI