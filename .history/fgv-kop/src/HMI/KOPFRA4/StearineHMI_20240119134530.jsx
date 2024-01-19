import React from 'react'

const StearineHMI = (props) => {

    if (!props.data) {
        console.error("Data is undefined or null");
        return null; // or handle accordingly
    }

        let FT5A = props.data['FT5A'];
        let FT5B = props.data['FT5B'];
        let FT5C = props.data['FT5C'];
        let FT6 = props.data['FT6'];
        let FT4 = props.data['FT4'];
    


    // Continue with the rest of your code
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox="1 1 1919 1079">
            <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#849da8" />
                    <stop offset={0.15} stopColor="#b3d1de" />
                    <stop offset={0.25} stopColor="#d7e6ed" />
                    <stop offset={0.52} stopColor="#97b4c0" />
                    <stop offset={0.69} stopColor="#86a0ab" />
                    <stop offset={0.8} stopColor="#7e97a1" />
                    <stop offset={0.97} stopColor="#778e98" />
                    <stop offset={1} stopColor="#89a4af" />
                </linearGradient>
                <linearGradient id="b" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#849da8" />
                    <stop offset={0.15} stopColor="#b3d1de" />
                    <stop offset={0.25} stopColor="#d7e6ed" />
                    <stop offset={0.44} stopColor="#97b4c0" />
                    <stop offset={0.6} stopColor="#86a0ab" />
                    <stop offset={0.8} stopColor="#708790" />
                    <stop offset={0.97} stopColor="#667b84" />
                </linearGradient>
                <linearGradient
                    id="c"
                    x1={214}
                    x2={2}
                    y1={-9}
                    y2={28}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#849da8" />
                    <stop offset={0.18} stopColor="#b3d1de" />
                    <stop offset={0.29} stopColor="#d7e6ed" />
                    <stop offset={0.46} stopColor="#97b4c0" />
                    <stop offset={0.6} stopColor="#86a0ab" />
                    <stop offset={1} stopColor="#667b84" />
                </linearGradient>
                <linearGradient id="d" x1="0%" x2="0%" y1="0%" y2="100%">
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
                    id="e"
                    x1={29}
                    x2={-1}
                    y1={1}
                    y2={26}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#bd0000" />
                    <stop offset={0.15} stopColor="#ff6565" />
                    <stop offset={0.25} stopColor="#ff8181" />
                    <stop offset={0.52} stopColor="#ed0000" />
                    <stop offset={0.78} stopColor="#df0000" />
                    <stop offset={1} stopColor="#d60000" />
                </linearGradient>
                <linearGradient
                    id="f"
                    x1={12}
                    x2={0}
                    y1={1}
                    y2={11}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#bd0000" />
                    <stop offset={0.15} stopColor="#ff6565" />
                    <stop offset={0.25} stopColor="#ff8181" />
                    <stop offset={0.52} stopColor="#ed0000" />
                    <stop offset={0.78} stopColor="#df0000" />
                    <stop offset={1} stopColor="#d60000" />
                </linearGradient>
                <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#fff" stopOpacity={0.15} />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </linearGradient>
                <linearGradient
                    id="h"
                    x1={24}
                    x2={-1}
                    y1={1}
                    y2={22}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#00bd00" />
                    <stop offset={0.15} stopColor="#45ff45" />
                    <stop offset={0.25} stopColor="#54ff54" />
                    <stop offset={0.52} stopColor="#00df00" />
                    <stop offset={0.69} stopColor="#00c700" />
                    <stop offset={0.8} stopColor="#00bc00" />
                    <stop offset={0.92} stopColor="#00b100" />
                    <stop offset={1} stopColor="#00cb00" />
                </linearGradient>
                <linearGradient
                    id="i"
                    x1={18}
                    x2={-1}
                    y1={1}
                    y2={16}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#00bd00" />
                    <stop offset={0.15} stopColor="#45ff45" />
                    <stop offset={0.25} stopColor="#54ff54" />
                    <stop offset={0.52} stopColor="#00df00" />
                    <stop offset={0.69} stopColor="#00c700" />
                    <stop offset={0.8} stopColor="#00bc00" />
                    <stop offset={0.92} stopColor="#00b100" />
                    <stop offset={1} stopColor="#00cb00" />
                </linearGradient>
                <linearGradient id="k" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#c4c4c4" />
                    <stop offset={0.15} stopColor="#fff" />
                    <stop offset={0.25} stopColor="#fff" />
                    <stop offset={0.44} stopColor="#dfdfdf" />
                    <stop offset={0.6} stopColor="#c7c7c7" />
                    <stop offset={0.8} stopColor="#a8a8a8" />
                    <stop offset={0.97} stopColor="#999" />
                    <stop offset={1} stopColor="#cbcbcb" />
                </linearGradient>
                <linearGradient id="l" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#c4c4c4" />
                    <stop offset={0.15} stopColor="#fff" />
                    <stop offset={0.25} stopColor="#fff" />
                    <stop offset={0.44} stopColor="#dfdfdf" />
                    <stop offset={0.6} stopColor="#c7c7c7" />
                    <stop offset={0.8} stopColor="#a8a8a8" />
                    <stop offset={0.97} stopColor="#999" />
                    <stop offset={1} stopColor="#cbcbcb" />
                </linearGradient>
                <linearGradient id="m" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#4d7ca5" />
                    <stop offset={0.15} stopColor="#78aada" />
                    <stop offset={0.25} stopColor="#c0d3ea" />
                    <stop offset={0.44} stopColor="#598ebc" />
                    <stop offset={0.6} stopColor="#4f7ea7" />
                    <stop offset={0.8} stopColor="#416a8d" />
                    <stop offset={0.97} stopColor="#3b6080" />
                    <stop offset={1} stopColor="#5181ab" />
                </linearGradient>
                <linearGradient id="n" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.03} stopColor="#afda8c" />
                    <stop offset={0.08} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.95} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient id="o" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#6f9f3b" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.44} stopColor="#7fb645" />
                    <stop offset={0.6} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#5e8831" />
                    <stop offset={0.97} stopColor="#567c2c" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="p" x1="100%" x2="0%" y1="0%" y2="0%">
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
                    id="q"
                    x1={37}
                    x2={1}
                    y1={11}
                    y2={-2}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#6f9f3b" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.44} stopColor="#7fb645" />
                    <stop offset={0.6} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#5e8831" />
                    <stop offset={0.97} stopColor="#567c2c" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="r" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6b9a39" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="s" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#6b9a39" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="t" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.01} stopColor="#afda8c" />
                    <stop offset={0.02} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.99} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient id="u" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#849da8" />
                    <stop offset={0.15} stopColor="#b3d1de" />
                    <stop offset={0.25} stopColor="#c3dae4" />
                    <stop offset={0.44} stopColor="#97b4c0" />
                    <stop offset={0.6} stopColor="#86a0ab" />
                    <stop offset={0.8} stopColor="#708790" />
                    <stop offset={0.97} stopColor="#667b84" />
                    <stop offset={1} stopColor="#89a4af" />
                </linearGradient>
                <linearGradient id="v" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#7f98a3" />
                    <stop offset={0.15} stopColor="#b3d1de" />
                    <stop offset={0.25} stopColor="#d7e6ed" />
                    <stop offset={0.52} stopColor="#97b4c0" />
                    <stop offset={0.69} stopColor="#86a0ab" />
                    <stop offset={0.8} stopColor="#7e97a1" />
                    <stop offset={0.92} stopColor="#778e98" />
                    <stop offset={1} stopColor="#89a4af" />
                </linearGradient>
                <linearGradient id="w" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a0b8c3" />
                    <stop offset={0.15} stopColor="#d4f1fe" />
                    <stop offset={0.25} stopColor="#e7f7fe" />
                    <stop offset={0.44} stopColor="#b7d2de" />
                    <stop offset={0.6} stopColor="#a2bbc6" />
                    <stop offset={0.8} stopColor="#899ea7" />
                    <stop offset={0.97} stopColor="#7d9099" />
                </linearGradient>
                <linearGradient
                    id="x"
                    x1={184}
                    x2={0}
                    y1={68}
                    y2={1}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#80a1b0" />
                    <stop offset={0.15} stopColor="#afd5e8" />
                    <stop offset={0.25} stopColor="#d5e8f2" />
                    <stop offset={0.44} stopColor="#93b8c9" />
                    <stop offset={0.6} stopColor="#82a3b3" />
                    <stop offset={0.8} stopColor="#6d8997" />
                    <stop offset={0.97} stopColor="#637d8a" />
                </linearGradient>
                <linearGradient id="y" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#80a1b0" />
                    <stop offset={0.15} stopColor="#afd5e8" />
                    <stop offset={0.25} stopColor="#d5e8f2" />
                    <stop offset={0.44} stopColor="#93b8c9" />
                    <stop offset={0.6} stopColor="#82a3b3" />
                    <stop offset={0.8} stopColor="#6d8997" />
                    <stop offset={0.97} stopColor="#637d8a" />
                </linearGradient>
                <linearGradient id="z" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#c4aa84" />
                    <stop offset={0.15} stopColor="#ffe0b3" />
                    <stop offset={0.25} stopColor="#ffeed7" />
                    <stop offset={0.44} stopColor="#dfc297" />
                    <stop offset={0.6} stopColor="#c7ad86" />
                    <stop offset={0.8} stopColor="#a89170" />
                    <stop offset={0.97} stopColor="#998566" />
                    <stop offset={1} stopColor="#cbb189" />
                </linearGradient>
                <linearGradient id="A" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#c4aa84" />
                    <stop offset={0.15} stopColor="#ffe0b3" />
                    <stop offset={0.25} stopColor="#ffeed7" />
                    <stop offset={0.44} stopColor="#dfc297" />
                    <stop offset={0.6} stopColor="#c7ad86" />
                    <stop offset={0.8} stopColor="#a89170" />
                    <stop offset={0.97} stopColor="#998566" />
                    <stop offset={1} stopColor="#cbb189" />
                </linearGradient>
                <linearGradient id="B" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#c3a06c" />
                    <stop offset={0.15} stopColor="#fed499" />
                    <stop offset={0.25} stopColor="#fee7cc" />
                    <stop offset={0.44} stopColor="#deb77c" />
                    <stop offset={0.6} stopColor="#c6a26e" />
                    <stop offset={0.8} stopColor="#a7895c" />
                    <stop offset={0.97} stopColor="#997d54" />
                    <stop offset={1} stopColor="#cba671" />
                </linearGradient>
                <linearGradient id="C" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#b6b6b6" />
                    <stop offset={0.15} stopColor="#efefef" />
                    <stop offset={0.25} stopColor="#f6f6f6" />
                    <stop offset={0.44} stopColor="#d0d0d0" />
                    <stop offset={0.6} stopColor="#b9b9b9" />
                    <stop offset={0.8} stopColor="#9c9c9c" />
                    <stop offset={0.97} stopColor="#8f8f8f" />
                    <stop offset={1} stopColor="#bebebe" />
                </linearGradient>
                <radialGradient
                    id="j"
                    cx={8}
                    cy={8}
                    r={10.9}
                    fx={8}
                    fy={8}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#fff" stopOpacity={0.32} />
                    <stop offset={0.37} stopColor="#fff" stopOpacity={0.23} />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.1} />
                </radialGradient>
            </defs>
            <path fill="#000030" d="M1920 1080V0H0v1080h1920z" />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M695.864 733.646v-.6h158.2v90.6"
            />
            <path
                fill="url(#a)"
                d="M0 0h215.9v80.8H0V0z"
                transform="matrix(-1 0 0 1 420.868 221.43)"
            />
            <path
                fill="url(#b)"
                d="M2.2 0h220.6c1.2 0 2.2 1.2 2.2 2.7V8c0 1.5-1 2.7-2.2 2.7H2.2C1 10.7 0 9.5 0 8V2.7C0 1.2 1 0 2.2 0z"
                transform="matrix(-1 0 0 1 425.433 300.286)"
            />
            <path
                fill="url(#c)"
                d="M0 18.6S7.4.5 107.5 0s108.4 18.6 108.4 18.6H0z"
                transform="matrix(-1 0 0 1 420.868 204.01)"
            />
            <path fill="#adcedc" d="M278.35 215.086h69.2v26.9h-69.2v-26.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(278.35 215.086)"
            >
                <tspan
                    x={18.6}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT5A"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M256.665 249.751h112.5v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M259.992 273.946h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(259.992 273.946)"
            >
                <tspan
                    x={39.6}
                    y={15.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${FT5A['TI4']} \xB0C`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M259.992 253.802h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(259.992 253.802)"
            >
                <tspan
                    x={44.1}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI4"}
                </tspan>
            </text>
            <path
                fill="url(#d)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(1 0 0 -1 149.862 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(1 0 0 -1 140.452 309.253)"
            />
            <path
                fill="url(#d)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(1 0 0 -1 133.132 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(1 0 0 -1 140.707 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(1 0 0 -1 185.123 309.273)"
            />
            <path
                fill="url(#d)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(1 0 0 -1 189.469 294.662)"
            />
            <g fill="url(#d)" transform="matrix(1 0 0 -1 149.862 308.11)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#d)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(1 0 0 -1 185.724 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(1 0 0 -1 189.469 299.285)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 189.365 308.11)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 189.365 296.93)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 189.365 285.749)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 189.365 274.568)"
            />
            <path
                fill="red"
                d="M151.035 273.802h31.5v-2.5h-31.5v2.5zM151.035 271.065h31.5v-5.5h-31.5v5.5z"
            />
            <path fill="red" d="M151.035 266.63h31.5v-2h-31.5v2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(144.374 211)"
            >
                <tspan
                    x={13.1}
                    y={21}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT5A "}
                </tspan>
                <tspan
                    x={18.6}
                    y={38}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"AG"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(370.173 175.111)"
            >
                <tspan
                    x={4.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HL FT5A"}
                </tspan>
            </text>
            <path
                fill="#cdcece"
                stroke="#b4b5b5"
                d="M381.658 230.7c0-8.9 7.2-16.1 16.1-16.1 9 0 16.2 7.2 16.2 16.1 0 9-7.2 16.2-16.2 16.2-8.9 0-16.1-7.2-16.1-16.2z"
            />
            <path
                fill="#e85464"
                d="M382.733 230.774c0-8.4 6.7-15.1 15.1-15.1 8.3 0 15 6.7 15 15.1 0 8.3-6.7 15-15 15-8.4 0-15.1-6.7-15.1-15z"
            />
            <path
                fill="url(#e)"
                d="M0 13.8C0 6.2 6.2 0 13.8 0c7.6 0 13.7 6.2 13.7 13.8 0 7.6-6.1 13.7-13.7 13.7S0 21.4 0 13.8z"
                transform="translate(384.039 216.98)"
            />
            <path
                fill="#f44758"
                d="M390.92 230.762c0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9-3.8 0-6.9-3.1-6.9-6.9z"
            />
            <path
                fill="url(#f)"
                d="M0 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"
                transform="translate(391.792 224.734)"
            />
            <path
                fill="url(#g)"
                d="M0 15.1C0 6.7 6.7 0 15.1 0c8.3 0 15.1 6.7 15.1 15.1 0 8.3-6.8-.8-15.1-.8-8.4 0-15.1 9.1-15.1.8z"
                transform="translate(382.728 215.66)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M389.07 242.243c0-1 3.9-1.8 8.7-1.8 4.8 0 8.8.8 8.8 1.8 0 .9-4 3.3-8.8 3.3-4.8 0-8.7-2.4-8.7-3.3z"
            />
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M383.235 292.464c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M383.756 292.385c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M384.973 292.403c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(386.459 281.088)"
            />
            <path
                fill="#00bd00"
                d="M388.584 292.413c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(389.19 283.818)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M384.094 292.423c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M389.664 281.514c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(390.061 284.69)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M389.664 303.258c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(370.173 307)"
            >
                <tspan
                    x={4.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LL FT5A"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 406.189 -89.644)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 403.583 -83.555)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 393.86 -92.056)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 394.138 -82.068)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 396.326 -78.51)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 532.384 314.246)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 423.874 -108.586)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 390.644 -93.399)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 394.904 -123.107)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 491.11 248.016)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 491.11 241.153)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 491.11 235.964)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 491.096 273.734)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 491.92 248.017)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 491.11 274.171)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 261.706 140.601)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 491.096 276.054)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 491.11 241.34)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 385.478 -99.955)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 261.707 147.474)"
            />
            <g fill="url(#o)" transform="rotate(-90 390.437 -95.375)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(463.214 307)"
            >
                <tspan
                    x={28.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF5A"}
                </tspan>
            </text>
            <path fill="none" stroke="#ff0" strokeWidth={4} d="M425.433 305.35h49.4" />
            <path
                fill="url(#a)"
                d="M0 0h215.9v80.8H0V0z"
                transform="matrix(-1 0 0 1 1040.657 221.43)"
            />
            <path
                fill="url(#b)"
                d="M2.2 0h220.6c1.2 0 2.2 1.2 2.2 2.7V8c0 1.5-1 2.7-2.2 2.7H2.2C1 10.7 0 9.5 0 8V2.7C0 1.2 1 0 2.2 0z"
                transform="matrix(-1 0 0 1 1045.223 300.286)"
            />
            <path
                fill="url(#c)"
                d="M0 18.6S7.4.5 107.5 0s108.4 18.6 108.4 18.6H0z"
                transform="matrix(-1 0 0 1 1040.657 204.01)"
            />
            <path fill="#adcedc" d="M898.14 215.086h69.2v26.9h-69.2v-26.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(898.14 215.086)"
            >
                <tspan
                    x={18.6}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT5B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M876.455 249.751h112.5v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M879.782 273.946h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(879.782 273.946)"
            >
                <tspan
                    x={39.6}
                    y={15.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${FT5B['TI5']} \xB0C`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M879.782 253.802h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(879.782 253.802)"
            >
                <tspan
                    x={44.1}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI5"}
                </tspan>
            </text>
            <path
                fill="url(#d)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(1 0 0 -1 769.652 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(1 0 0 -1 760.242 309.253)"
            />
            <path
                fill="url(#d)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(1 0 0 -1 752.922 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(1 0 0 -1 760.497 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(1 0 0 -1 804.913 309.273)"
            />
            <path
                fill="url(#d)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(1 0 0 -1 809.259 294.662)"
            />
            <g fill="url(#d)" transform="matrix(1 0 0 -1 769.652 308.11)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#d)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(1 0 0 -1 805.514 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(1 0 0 -1 809.258 299.285)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 809.155 308.11)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 809.155 296.93)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 809.155 285.749)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 809.155 274.568)"
            />
            <path
                fill="red"
                d="M770.825 273.802h31.5v-2.5h-31.5v2.5zM770.825 271.065h31.5v-5.5h-31.5v5.5z"
            />
            <path fill="red" d="M770.825 266.63h31.5v-2h-31.5v2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(764.164 211)"
            >
                <tspan
                    x={13.6}
                    y={21}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT5B "}
                </tspan>
                <tspan
                    x={18.6}
                    y={38}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"AG"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(989.963 175.111)"
            >
                <tspan
                    x={4.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HL FT5B"}
                </tspan>
            </text>
            <path
                fill="#cdcece"
                stroke="#b4b5b5"
                d="M1001.448 230.7c0-8.9 7.2-16.1 16.1-16.1 9 0 16.2 7.2 16.2 16.1 0 9-7.2 16.2-16.2 16.2-8.9 0-16.1-7.2-16.1-16.2z"
            />
            <path
                fill="#e85464"
                d="M1002.522 230.774c0-8.4 6.7-15.1 15.1-15.1 8.3 0 15 6.7 15 15.1 0 8.3-6.7 15-15 15-8.4 0-15.1-6.7-15.1-15z"
            />
            <path
                fill="url(#e)"
                d="M0 13.8C0 6.2 6.2 0 13.8 0c7.6 0 13.7 6.2 13.7 13.8 0 7.6-6.1 13.7-13.7 13.7S0 21.4 0 13.8z"
                transform="translate(1003.829 216.98)"
            />
            <path
                fill="#f44758"
                d="M1010.71 230.762c0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9-3.8 0-6.9-3.1-6.9-6.9z"
            />
            <path
                fill="url(#f)"
                d="M0 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"
                transform="translate(1011.582 224.734)"
            />
            <path
                fill="url(#g)"
                d="M0 15.1C0 6.7 6.7 0 15.1 0c8.3 0 15.1 6.7 15.1 15.1 0 8.3-6.8-.8-15.1-.8-8.4 0-15.1 9.1-15.1.8z"
                transform="translate(1002.518 215.66)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M1008.86 242.243c0-1 3.9-1.8 8.7-1.8 4.8 0 8.8.8 8.8 1.8 0 .9-4 3.3-8.8 3.3-4.8 0-8.7-2.4-8.7-3.3z"
            />
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M1003.025 292.465c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M1003.546 292.385c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M1004.763 292.403c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(1006.249 281.089)"
            />
            <path
                fill="#00bd00"
                d="M1008.373 292.413c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(1008.98 283.819)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M1003.884 292.424c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M1009.453 281.514c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(1009.85 284.69)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M1009.453 303.259c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(989.963 307.001)"
            >
                <tspan
                    x={5.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LL FT5B"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 716.083 -399.539)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 713.478 -393.45)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 703.755 -401.95)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 704.033 -391.963)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 706.22 -388.404)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1152.174 314.246)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 733.77 -418.481)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 700.539 -403.293)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 704.798 -433.002)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1110.9 248.016)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1110.9 241.153)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1110.9 235.964)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1110.886 273.734)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 1111.71 248.017)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1110.9 274.172)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 571.6 140.601)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1110.886 276.054)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1110.9 241.34)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 695.373 -409.85)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 571.602 147.474)"
            />
            <g fill="url(#o)" transform="rotate(-90 700.332 -405.27)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(1083.003 307.001)"
            >
                <tspan
                    x={28}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF5B"}
                </tspan>
            </text>
            <path fill="none" stroke="#ff0" strokeWidth={4} d="M1045.223 305.35h49.4" />
            <path
                fill="url(#a)"
                d="M0 0h215.9v80.8H0V0z"
                transform="matrix(-1 0 0 1 1660.447 221.43)"
            />
            <path
                fill="url(#b)"
                d="M2.2 0h220.6c1.2 0 2.2 1.2 2.2 2.7V8c0 1.5-1 2.7-2.2 2.7H2.2C1 10.7 0 9.5 0 8V2.7C0 1.2 1 0 2.2 0z"
                transform="matrix(-1 0 0 1 1665.013 300.286)"
            />
            <path
                fill="url(#c)"
                d="M0 18.6S7.4.5 107.5 0s108.4 18.6 108.4 18.6H0z"
                transform="matrix(-1 0 0 1 1660.447 204.01)"
            />
            <path fill="#adcedc" d="M1517.93 215.086h69.2v26.9h-69.2v-26.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1517.93 215.086)"
            >
                <tspan
                    x={18.6}
                    y={19.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT5C"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1496.244 249.751h112.5v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1499.572 273.946h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1499.572 273.946)"
            >
                <tspan
                    x={39.6}
                    y={15.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${FT5B['TI5']} \xB0C`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1499.572 253.802h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1499.572 253.802)"
            >
                <tspan
                    x={44.1}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI6"}
                </tspan>
            </text>
            <path
                fill="url(#d)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(1 0 0 -1 1389.441 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(1 0 0 -1 1380.031 309.253)"
            />
            <path
                fill="url(#d)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(1 0 0 -1 1372.712 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(1 0 0 -1 1380.287 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(1 0 0 -1 1424.703 309.273)"
            />
            <path
                fill="url(#d)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(1 0 0 -1 1429.048 294.662)"
            />
            <g fill="url(#d)" transform="matrix(1 0 0 -1 1389.442 308.11)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#d)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(1 0 0 -1 1425.304 309.253)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(1 0 0 -1 1429.048 299.285)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 1428.945 308.11)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 1428.945 296.93)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 1428.945 285.749)"
            />
            <path
                fill="url(#d)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(1 0 0 -1 1428.945 274.568)"
            />
            <path
                fill="red"
                d="M1390.615 273.802h31.5v-2.5h-31.5v2.5zM1390.615 271.065h31.5v-5.5h-31.5v5.5z"
            />
            <path fill="red" d="M1390.615 266.63h31.5v-2h-31.5v2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1383.953 211)"
            >
                <tspan
                    x={13.1}
                    y={21}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT5C "}
                </tspan>
                <tspan
                    x={18.6}
                    y={38}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"AG"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1609.753 175.111)"
            >
                <tspan
                    x={4.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HL FT5C"}
                </tspan>
            </text>
            <path
                fill="#cdcece"
                stroke="#b4b5b5"
                d="M1621.237 230.7c0-8.9 7.2-16.1 16.1-16.1 9 0 16.2 7.2 16.2 16.1 0 9-7.2 16.2-16.2 16.2-8.9 0-16.1-7.2-16.1-16.2z"
            />
            <path
                fill="#e85464"
                d="M1622.312 230.774c0-8.4 6.7-15.1 15.1-15.1 8.3 0 15 6.7 15 15.1 0 8.3-6.7 15-15 15-8.4 0-15.1-6.7-15.1-15z"
            />
            <path
                fill="url(#e)"
                d="M0 13.8C0 6.2 6.2 0 13.8 0c7.6 0 13.7 6.2 13.7 13.8 0 7.6-6.1 13.7-13.7 13.7S0 21.4 0 13.8z"
                transform="translate(1623.618 216.98)"
            />
            <path
                fill="#f44758"
                d="M1630.5 230.762c0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9-3.8 0-6.9-3.1-6.9-6.9z"
            />
            <path
                fill="url(#f)"
                d="M0 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"
                transform="translate(1631.372 224.734)"
            />
            <path
                fill="url(#g)"
                d="M0 15.1C0 6.7 6.7 0 15.1 0c8.3 0 15.1 6.7 15.1 15.1 0 8.3-6.8-.8-15.1-.8-8.4 0-15.1 9.1-15.1.8z"
                transform="translate(1622.307 215.66)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M1628.65 242.243c0-1 3.9-1.8 8.7-1.8 4.8 0 8.8.8 8.8 1.8 0 .9-4 3.3-8.8 3.3-4.8 0-8.7-2.4-8.7-3.3z"
            />
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M1622.815 292.465c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M1623.335 292.385c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M1624.553 292.403c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(1626.038 281.089)"
            />
            <path
                fill="#00bd00"
                d="M1628.163 292.413c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(1628.769 283.819)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M1623.673 292.424c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M1629.243 281.514c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(1629.64 284.69)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M1629.243 303.259c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1609.753 307.001)"
            >
                <tspan
                    x={4.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LL FT5C"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 1025.978 -709.434)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1023.373 -703.344)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 1013.65 -711.845)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 1013.928 -701.857)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1016.115 -698.299)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1771.964 314.246)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1043.664 -728.376)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1010.434 -713.188)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 1014.693 -742.897)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1730.69 248.016)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1730.69 241.153)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1730.69 235.964)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1730.676 273.734)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 1731.5 248.017)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1730.69 274.172)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 881.495 140.601)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1730.676 276.054)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1730.69 241.34)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1005.268 -719.744)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 881.496 147.474)"
            />
            <g fill="url(#o)" transform="rotate(-90 1010.227 -715.165)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(1702.793 307.001)"
            >
                <tspan
                    x={28}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF5C"}
                </tspan>
            </text>
            <path fill="none" stroke="#ff0" strokeWidth={4} d="M1665.013 305.35h49.4" />
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 1134.063 -698.482)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1131.458 -692.392)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 1121.734 -700.893)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 1122.013 -690.905)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1124.2 -687.347)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1869.096 433.283)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1151.749 -717.424)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1118.519 -702.236)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 1122.778 -731.945)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1827.822 367.053)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1827.823 360.19)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1827.823 355)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1827.808 392.77)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 1828.633 367.054)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1827.822 393.208)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 930.062 200.12)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1827.808 395.09)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1827.823 360.377)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1113.353 -708.792)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 930.063 206.992)"
            />
            <g fill="url(#o)" transform="rotate(-90 1118.312 -704.213)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(1799.925 426.038)"
            >
                <tspan
                    x={28}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF5C"}
                </tspan>
            </text>
            <path
                fill="url(#r)"
                d="M0 0h4.9v36.7H0V0z"
                transform="rotate(90 -140.378 217.664)"
            />
            <g fill="url(#s)" transform="rotate(90 -140.4 191.577)">
                <path d="M-.046 0v21.2l28.5-10.6L-.046 0zM57.07 0v21.2l-28.5-10.6L57.07 0z" />
            </g>
            <path
                fill="url(#t)"
                d="M1.3 0h49.2c.8 0 1.4.6 1.4 1.3v16.5c0 .7-.6 1.3-1.4 1.3H1.3c-.7 0-1.3-.6-1.3-1.3V1.3C0 .6.6 0 1.3 0z"
                transform="rotate(90 -119.877 214.678)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(107.888 336.488)"
            >
                <tspan
                    x={25.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"VTF5A"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M204.987 258.745h-118.7v75.8"
            />
            <path
                fill="url(#r)"
                d="M0 0h4.9v36.7H0V0z"
                transform="rotate(90 170.136 528.178)"
            />
            <g fill="url(#s)" transform="rotate(90 170.115 502.091)">
                <path d="M-.046 0v21.2l28.5-10.6L-.046 0zM57.07 0v21.2l-28.5-10.6L57.07 0z" />
            </g>
            <path
                fill="url(#t)"
                d="M1.3 0h49.2c.8 0 1.4.6 1.4 1.3v16.5c0 .7-.6 1.3-1.4 1.3H1.3c-.7 0-1.3-.6-1.3-1.3V1.3C0 .6.6 0 1.3 0z"
                transform="rotate(90 190.638 525.192)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(728.916 336.488)"
            >
                <tspan
                    x={25}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"VTF5B"}
                </tspan>
            </text>
            <path fill="none" stroke="#ff0" strokeWidth={4} d="M824 257H707.3v77.6" />
            <path
                fill="url(#r)"
                d="M0 0h4.9v36.7H0V0z"
                transform="rotate(90 480.631 838.673)"
            />
            <g fill="url(#s)" transform="rotate(90 480.61 812.586)">
                <path d="M-.046 0v21.2l28.5-10.6L-.046 0zM57.07 0v21.2l-28.5-10.6L57.07 0z" />
            </g>
            <path
                fill="url(#t)"
                d="M1.3 0h49.2c.8 0 1.4.6 1.4 1.3v16.5c0 .7-.6 1.3-1.4 1.3H1.3c-.7 0-1.3-.6-1.3-1.3V1.3C0 .6.6 0 1.3 0z"
                transform="rotate(90 501.133 835.687)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(1349.906 336.488)"
            >
                <tspan
                    x={25}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"VTF5C"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1444.566 260.603h-117.7v74M1041.48 231.83h57v73.1M420.868 228.619h57.6v73M1660.447 229.75h58.4v71.9M1327.632 386.423v74.8H59.432M86.52 386.423v74.8"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M15.57 452.771h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(8 474.921)"
            >
                <tspan
                    x={6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FROM FT12"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M66.56 50.08h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(15 50)"
            >
                <tspan
                    x={5.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO FT12"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1444.566 235.161h-12.6v-192.9H66.566"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M824.776 235.126h-14.6v-192.9M204.987 232.379h-10.8v-190.1"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1853.92 168.756h-40.9v-75.6h-375c0-3.3-2.7-6-6-6s-6 2.7-6 6h-609.9c0-3.3-2.7-6-6-6s-6 2.7-6 6h-325.7v135.5"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1718.877 229.75h27.3V93.15M1098.48 231.83h12.8V93.13M1813.53 415.09v-68h-.5v-182.6M706.892 387.3v73.9M444.599 305.35v116.7h256.3c0-3.3 2.7-6 6-6s6 2.7 6 6h608.7c0-3.3 2.7-6 6-6s6 2.7 6 6h477.9M1083.278 305.35v116.7M1704.977 305.35v116.7"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 556.912 69.08)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 554.307 75.168)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 544.583 66.667)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 544.861 76.655)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 547.049 80.214)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 524.384 623.692)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 574.598 50.137)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 541.367 65.324)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 545.627 35.616)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 483.11 557.463)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 483.11 550.6)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 483.11 545.41)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 483.096 583.18)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 483.92 557.463)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 483.11 583.618)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 257.706 295.324)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 483.096 585.5)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 483.11 550.787)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 536.201 58.768)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 257.707 302.197)"
            />
            <g fill="url(#o)" transform="rotate(-90 541.16 63.348)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(455.214 616.447)"
            >
                <tspan
                    x={28.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF6A"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 580.342 177.723)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 577.737 183.812)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 568.013 175.311)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 568.291 185.3)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 570.479 188.858)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 439.17 755.766)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 598.028 158.78)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 564.797 173.968)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 569.057 144.26)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 397.897 689.537)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 397.897 682.674)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 397.897 677.484)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 397.882 715.254)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 398.707 689.537)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 397.896 715.692)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 215.099 361.361)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 397.882 717.574)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 397.897 682.86)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 559.631 167.412)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 215.1 368.234)"
            />
            <g fill="url(#o)" transform="rotate(-90 564.59 171.992)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(370 748.521)"
            >
                <tspan
                    x={28}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF6B"}
                </tspan>
            </text>
            <path
                fill="url(#u)"
                d="M0 10.6h119.3V0H0v10.6z"
                transform="translate(595.752 584.521)"
            />
            <path
                fill="url(#v)"
                d="M0 2.6h119.3V0H0v2.6z"
                transform="translate(595.753 592.45)"
            />
            <path
                fill="url(#u)"
                d="M0 26.4h173V0H0v26.4z"
                transform="translate(567 733.646)"
            />
            <path
                fill="url(#v)"
                d="M0 3h119.3V0H0v3z"
                transform="translate(595.753 738.146)"
            />
            <path
                fill="url(#u)"
                d="M11.5 0h120.2c6.4 0 11.5 4.6 11.5 10.4v122.8c0 5.7-5.1 10.3-11.5 10.3H11.5c-6.3 0-11.5-4.6-11.5-10.3V10.4C0 4.6 5.2 0 11.5 0z"
                transform="translate(583.78 594.968)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(616.153 729.754)"
            >
                <tspan
                    x={26}
                    y={20.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT6"}
                </tspan>
            </text>
            <g fill="none" stroke="red" strokeWidth={2}>
                <path d="m603.153 656.672 107.637 18.995M710.82 675.672l-107.637 18.995M603.153 694.672l107.637 18.995M710.82 713.672l-107.637 18.995M603.153 656.672h107.7M603.153 732.672h114" />
            </g>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M597.224 599.521h112.5v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M600.551 623.716h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(600.551 623.716)"
            >
                <tspan
                    x={39.6}
                    y={15.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${FT6['TI10']} \xB0C`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M600.551 603.572h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(600.551 603.572)"
            >
                <tspan
                    x={40.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI10"}
                </tspan>
            </text>
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M697.768 608.408c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M698.289 608.328c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M699.506 608.346c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(700.992 597.032)"
            />
            <path
                fill="#00bd00"
                d="M703.117 608.356c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(703.722 599.762)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M698.627 608.367c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M704.197 597.457c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(704.594 600.634)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M704.197 619.202c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(684.713 551.521)"
            >
                <tspan
                    x={8.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HL FT6"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(691.597 748.521)"
            >
                <tspan
                    x={9.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LL FT6"}
                </tspan>
            </text>
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M697.768 734.83c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M698.289 734.751c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M699.506 734.769c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(700.992 723.455)"
            />
            <path
                fill="#00bd00"
                d="M703.117 734.78c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(703.722 726.185)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M698.627 734.79c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M704.197 723.88c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(704.594 727.057)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M704.197 745.625c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <path
                fill="url(#u)"
                d="M0 10.6h119.3V0H0v10.6z"
                transform="translate(1179.03 587.446)"
            />
            <path
                fill="url(#v)"
                d="M0 2.6h119.3V0H0v2.6z"
                transform="translate(1179.03 595.374)"
            />
            <path
                fill="url(#u)"
                d="M0 26.4h173V0H0v26.4z"
                transform="translate(1150.276 736.57)"
            />
            <path
                fill="url(#v)"
                d="M0 3h119.3V0H0v3z"
                transform="translate(1179.03 741.071)"
            />
            <path
                fill="url(#u)"
                d="M11.5 0h120.2c6.4 0 11.5 4.6 11.5 10.4v122.8c0 5.7-5.1 10.3-11.5 10.3H11.5c-6.3 0-11.5-4.6-11.5-10.3V10.4C0 4.6 5.2 0 11.5 0z"
                transform="translate(1167.056 597.893)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1199.43 732.679)"
            >
                <tspan
                    x={26}
                    y={20.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT4"}
                </tspan>
            </text>
            <g fill="none" stroke="red" strokeWidth={2}>
                <path d="m1186.43 659.597 107.637 18.995M1294.096 678.597l-107.636 18.995M1186.43 697.597l107.637 18.995M1294.096 716.597l-107.636 18.995M1186.43 659.597h107.7M1186.43 735.597h114" />
            </g>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1180.5 602.447H1293v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1183.828 626.642h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1183.828 626.642)"
            >
                <tspan
                    x={39.6}
                    y={15.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${FT6['TI10']} \xB0C`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1183.828 606.498h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1183.828 606.498)"
            >
                <tspan
                    x={40.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI11"}
                </tspan>
            </text>
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M1281.044 611.334c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M1281.565 611.254c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M1282.782 611.272c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(1284.268 599.958)"
            />
            <path
                fill="#00bd00"
                d="M1286.392 611.282c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(1286.998 602.688)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M1281.903 611.293c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M1287.472 600.383c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(1287.87 603.56)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M1287.472 622.128c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1267.989 554.447)"
            >
                <tspan
                    x={8.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HL FT4"}
                </tspan>
            </text>
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M1281.044 737.754c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M1281.565 737.674c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M1282.782 737.692c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(1284.268 726.378)"
            />
            <path
                fill="#00bd00"
                d="M1286.392 737.702c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(1286.998 729.108)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M1281.903 737.713c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M1287.472 726.803c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(1287.87 729.98)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M1287.472 748.548c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1274.872 751.444)"
            >
                <tspan
                    x={9.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LL FT4"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 1009.084 -374.056)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1006.479 -367.967)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 996.755 -376.467)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 997.033 -366.48)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 999.22 -362.921)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1419.691 632.73)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1026.77 -392.998)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 993.54 -377.81)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 997.799 -407.519)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1378.417 566.5)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1378.417 559.637)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1378.417 554.447)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1378.403 592.217)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 1379.227 566.5)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1378.417 592.655)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 705.36 299.843)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1378.403 594.537)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1378.417 559.824)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 988.373 -384.366)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 705.36 306.715)"
            />
            <g fill="url(#o)" transform="rotate(-90 993.332 -379.787)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(1350.52 625.484)"
            >
                <tspan
                    x={28.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF4A"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 1075.12 -308.019)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1072.516 -301.93)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 1062.792 -310.43)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 1063.07 -300.443)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1065.258 -296.884)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1419.691 764.804)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1092.807 -326.961)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1059.576 -311.773)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 1063.836 -341.482)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1378.417 698.574)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1378.417 691.71)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1378.417 686.521)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1378.403 724.291)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 1379.227 698.575)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1378.417 724.729)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 705.36 365.88)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1378.403 726.611)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1378.417 691.898)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1054.41 -318.33)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 705.36 372.752)"
            />
            <g fill="url(#o)" transform="rotate(-90 1059.37 -313.75)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(1350.52 757.558)"
            >
                <tspan
                    x={28}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF4B"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1056.739 823.716v21.3h9.7l-19.4 23.2-19.3-23.2h9.7v-21.3h19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1014.195 866)"
            >
                <tspan
                    x={5.1}
                    y={21}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO COND "}
                </tspan>
                <tspan
                    x={15.6}
                    y={38}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TANK"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1056.739 574.716v21.3h9.7l-19.4 23.2-19.3-23.2h9.7v-21.3h19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1017.762 536)"
            >
                <tspan
                    x={7.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEAM"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M862.349 823.716v21.3h9.7l-19.4 23.2-19.3-23.2h9.7v-21.3h19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(817.11 866)"
            >
                <tspan
                    x={7.8}
                    y={21}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO COND "}
                </tspan>
                <tspan
                    x={18.3}
                    y={38}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TANK"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M862.349 574.716v21.3h9.7l-19.4 23.2-19.3-23.2h9.7v-21.3h19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(823.372 536)"
            >
                <tspan
                    x={7.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEAM"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 594.467 298.997)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 591.862 305.086)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 582.139 296.585)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 582.417 306.573)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 584.605 310.132)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 332.022 891.166)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 612.153 280.055)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 578.923 295.242)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 583.183 265.534)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 290.748 824.936)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 290.748 818.073)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 290.748 812.884)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 290.734 850.654)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 291.558 824.937)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 290.748 851.092)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 161.525 429.061)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 290.734 852.974)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 290.748 818.26)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 573.757 288.686)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 161.526 435.934)"
            />
            <g fill="url(#o)" transform="rotate(-90 578.716 293.266)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(262.851 883.921)"
            >
                <tspan
                    x={25.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF10A"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 679.322 299.778)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 676.717 305.867)"
            />
            <path
                fill="url(#k)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 666.993 297.366)"
            />
            <path
                fill="url(#l)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 667.272 307.354)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 669.46 310.912)"
            />
            <path
                fill="url(#l)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 416.096 976.801)"
            />
            <path
                fill="url(#l)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 697.008 280.835)"
            />
            <path
                fill="url(#m)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 663.778 296.023)"
            />
            <path
                fill="url(#n)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 668.037 266.314)"
            />
            <path
                fill="url(#o)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 374.823 910.572)"
            />
            <path
                fill="url(#o)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 374.823 903.709)"
            />
            <path
                fill="url(#o)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 374.823 898.52)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 374.808 936.29)"
            />
            <g fill="url(#o)" transform="matrix(0 1 1 0 375.633 910.572)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#o)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 374.822 936.727)"
            />
            <path
                fill="url(#p)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 203.562 471.879)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 374.808 938.61)"
            />
            <path
                fill="url(#o)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 374.823 903.896)"
            />
            <path
                fill="url(#o)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 658.612 289.467)"
            />
            <path
                fill="url(#q)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 203.563 478.751)"
            />
            <g fill="url(#o)" transform="rotate(-90 663.571 294.046)">
                <path d="M.2-.002h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 12.623h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 25.248h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2zM.2 37.874h1.7c.1 0 .2.1.2.2v1.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1.5c0-.1.1-.2.2-.2z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(346.926 969.556)"
            >
                <tspan
                    x={25}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF10B"}
                </tspan>
            </text>
            <path
                fill="url(#u)"
                d="M0 12.5h104.6V0H0v12.5z"
                transform="rotate(90 584.146 1149.09)"
            />
            <path
                fill="url(#v)"
                d="M0 3.1h104.6V0H0v3.1z"
                transform="rotate(90 579.465 1144.408)"
            />
            <path
                fill="url(#u)"
                d="M0 12.5h104.6V0H0v12.5z"
                transform="rotate(90 493.312 1058.256)"
            />
            <path
                fill="url(#v)"
                d="M0 3.6h104.6V0H0v3.6z"
                transform="rotate(90 493.432 1058.376)"
            />
            <path
                fill="url(#u)"
                d="M10.1 0h105.3c5.6 0 10.2 5.5 10.2 12.3v145c0 6.7-4.6 12.2-10.2 12.2H10.1C4.5 169.5 0 164 0 157.3v-145C0 5.5 4.5 0 10.1 0z"
                transform="rotate(90 583.226 1137.673)"
            />
            <path fill="#adcedc" d="M1611.597 592.98h49.1v36.8h-49.1v-36.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1611.597 592.98)"
            >
                <tspan
                    x={5.5}
                    y={24.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PHE 2"}
                </tspan>
            </text>
            <path
                fill="url(#w)"
                d="M0 0h183.7v163.5H0V0z"
                transform="translate(35.506 636.803)"
            />
            <path
                fill="url(#x)"
                d="M0 0h183.7L91.1 68.9 0 0z"
                transform="translate(35.506 800.175)"
            />
            <path
                fill="url(#w)"
                d="M1.3 0h184.1c.7 0 1.3.6 1.3 1.3v5.2c0 .8-.6 1.3-1.3 1.3H1.3C.6 7.8 0 7.3 0 6.5V1.3C0 .6.6 0 1.3 0z"
                transform="translate(34 628.956)"
            />
            <path
                fill="url(#y)"
                d="M0 0h183.7v2.6H0V0z"
                transform="translate(35.506 636.587)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "16pt",
                    fontWeight: 700,
                }}
                transform="translate(51.12 716.029)"
            >
                <tspan
                    x={55.2}
                    y={40.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT10"}
                </tspan>
            </text>
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M188.911 789.31c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M189.432 789.231c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M190.65 789.249c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(192.135 777.934)"
            />
            <path
                fill="#00bd00"
                d="M194.26 789.259c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(194.866 780.665)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M189.77 789.27c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M195.34 778.36c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(195.737 781.536)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M195.34 800.104c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(182.74 803)"
            >
                <tspan
                    x={6.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LL FT10"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(182.74 580.956)"
            >
                <tspan
                    x={5.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HL FT10"}
                </tspan>
            </text>
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M188.911 643.556c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M189.432 643.477c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M190.65 643.494c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#h)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(192.135 632.18)"
            />
            <path
                fill="#00bd00"
                d="M194.26 643.505c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#i)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(194.865 634.91)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M189.77 643.515c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M195.34 632.606c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#j)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(195.737 635.782)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M195.34 654.35c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <path
                fill="url(#r)"
                d="M0 0h4.9v36.7H0V0z"
                transform="rotate(180 891.741 291.358)"
            />
            <g fill="url(#s)" transform="rotate(180 904.774 278.304)">
                <path d="M-.046 0v21.2l28.5-10.6L-.046 0zM57.07 0v21.2l-28.5-10.6L57.07 0z" />
            </g>
            <path
                fill="url(#t)"
                d="M1.3 0h49.2c.8 0 1.4.6 1.4 1.3v16.5c0 .7-.6 1.3-1.4 1.3H1.3c-.7 0-1.3-.6-1.3-1.3V1.3C0 .6.6 0 1.3 0z"
                transform="rotate(180 903.485 300.116)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(1739 609.001)"
            >
                <tspan
                    x={28}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"VRF2"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M15.57 848.691h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(8 870.841)"
            >
                <tspan
                    x={7.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEAM"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M15.57 571.851h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(8 594)"
            >
                <tspan
                    x={10}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FROM FILTER 5"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1836.31 646.716h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1809.295 668.866)"
            >
                <tspan
                    x={9}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEARINE 3"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1879.93 599.912h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1828.37 599.833)"
            >
                <tspan
                    x={5.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO FT12"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M59.56 947.841h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(8 947.762)"
            >
                <tspan
                    x={5.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO FT12"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M59.56 1032.08h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(8 1032)"
            >
                <tspan
                    x={8}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HOMOGENIZER TANK"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1791.057 1012.771h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1713.037 1032)"
            >
                <tspan
                    x={8}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HOMOGENIZER TANK"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1789.31 932.93h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1762.295 955.08)"
            >
                <tspan
                    x={8.5}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO FILTER 5"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M134.911 520h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3V520z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(128.694 468)"
            >
                <tspan
                    x={25.8}
                    y={21}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO OLEIN "}
                </tspan>
                <tspan
                    x={23.8}
                    y={38}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STORAGE"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1285.93 512h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3V512z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1289.63 483)"
            >
                <tspan
                    x={10.3}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FROM PRESS 5"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M680.858 549.08h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(684.558 520.08)"
            >
                <tspan
                    x={9.8}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FROM FILTER 5"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1241.43 502.346h-42.8v85.1M636.358 539.426h-21.4v45.1M567 747.556H442.5M545.864 747.556v-136.1h-18.2"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1184.873 587.446v-73.8h-1049.9M439.17 740.934v-227.2"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M525.378 607.568v-68h-86.2M710.48 656.672h142.2v-37.5M60.07 581.506h88.4v47.5M60.07 858.346h52.4M118.16 862.64v74.2h-57.7M139.369 859.569v112h220.5M274.468 888.294h-135.1M59.58 1022.426h1730.6M1789.29 944.365h-300.3v78.1h-60.5M1539.057 587.11h47.9v68.8h-47.9M1733.236 591.92h-47.2v63.5h47.2M1733.236 591.92h21.9M1806.97 591.292h29.2M1733.236 655.389v1.1h103.1"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1539.057 657.794h-50.1v364.6h-1.5M1267.649 587.446v-51.4h242.9v51.4h28.5"
            />
            <path fill="none" stroke="#7e7e7e" d="M1550.475 498h112.5v46h-112.5v-46z" />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1553.802 522.196h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1553.802 522.196)"
            >
                <tspan
                    x={39.6}
                    y={15.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"27.5 \xB0C"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1553.802 502.052h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1553.802 502.052)"
            >
                <tspan
                    x={43.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SV"}
                </tspan>
            </text>
            <path fill="none" stroke="#7e7e7e" d="M1550.475 452h112.5v46h-112.5v-46z" />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1553.802 476.196h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1553.802 476.196)"
            >
                <tspan
                    x={39.6}
                    y={15.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"1 \xB0C"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1553.802 456.052h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1553.802 456.052)"
            >
                <tspan
                    x={40.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI12"}
                </tspan>
            </text>
            <path
                fill="url(#z)"
                d="M0 0h1.1v.7H0V0z"
                transform="rotate(-1.401 22724.586 -61387.893)"
            />
            <path
                fill="url(#z)"
                d="M0 0h3.1v4.7H0V0z"
                transform="rotate(-1.401 22537.715 -61343.808)"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22655.317 -61345.242)"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22682.953 -61345.58)"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22703.063 -61345.824)"
            />
            <path
                fill="#cdcece"
                stroke="#cdcece"
                d="m1505.838 531.021 2.499-.06.04 1.599-2.5.06-.04-1.599z"
            />
            <path
                fill="#b4b5b5"
                stroke="#b4b5b5"
                d="m1504.869 531.045 1-.025.039 1.6-1 .024-.04-1.6z"
            />
            <path
                fill="#eee"
                stroke="#eee"
                d="m1508.328 530.96.8-.02.04 1.6-.8.02-.04-1.6z"
            />
            <path
                fill="url(#B)"
                d="M0 0h2.8v1.2H0V0z"
                transform="rotate(-1.401 22272.73 -61348.062)"
            />
            <path
                fill="url(#z)"
                d="M0 0h3.1v3.6H0V0z"
                transform="rotate(-1.401 22132.713 -61337.885)"
            />
            <path
                stroke="#000"
                d="M1497.595 513.49c-.122-4.999 3.776-9.195 8.775-9.317 4.898-.12 9.097 3.879 9.22 8.877.124 5.099-3.875 9.298-8.773 9.417-4.999.122-9.098-3.879-9.222-8.977z"
            />
            <path
                fill="#9e9f9f"
                d="M1498.356 513.543c-.115-4.698 3.493-8.487 7.992-8.597 4.599-.113 8.288 3.498 8.403 8.197.112 4.598-3.396 8.385-7.995 8.498-4.499.11-8.288-3.499-8.4-8.098z"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22213.385 -61338.869)"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22234.604 -61339.128)"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22254.714 -61339.373)"
            />
            <path
                fill="#ebeae9"
                d="M1498.62 513.613c-.11-4.498 3.401-8.185 7.8-8.293 4.398-.107 7.985 3.406 8.095 7.905.11 4.499-3.3 8.183-7.7 8.29-4.398.108-8.085-3.403-8.195-7.902z"
            />
            <path
                fill="none"
                stroke="#000"
                d="m1511.75 508.11-.645.914M1511.176 517.872l.819.78M1502.187 517.6l-.977.925M1506.325 505.954l.03 1.2M1506.659 519.6l.029 1.2M1498.957 513.52l1.2-.03M1513.014 513.177l1.2-.03M1501.334 508.073l.82.78"
            />
            <path
                fill="#fff"
                fillOpacity={0.73}
                d="M1510.472 515.837c3.462-5.687-.752-10.285-.752-10.285 2.931 1.229 5.001 4.079 5.087 7.578.112 4.599-3.496 8.388-7.995 8.498a8.543 8.543 0 0 1-4.835-1.382c.205.195 5.03 1.177 8.495-4.41z"
            />
            <path
                stroke="#000"
                d="m1500.478 509.162 5.563 3.375s1.748 1.18 3.001 1.18c0 0 .447.016.16.543l-.615.918s-.375.479-.622-.112c0 0-.719-1.189-2.251-2.138l-5.236-3.766z"
            />
            <path
                stroke="#000"
                d="M1506.233 512.484c.407-.12.758.072.79.431.168.32-.071.758-.43.79-.32.168-.67-.023-.79-.43-.168-.32.023-.67.43-.79z"
            />
            <path
                fill="url(#z)"
                d="M.1.1c.2-.1.4-.1.6 0C.8.3.8.5.7.7.5.8.3.8.1.7 0 .5 0 .3.1.1z"
                transform="rotate(28.6 -252.31 3210.928)"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22583.697 -61344.368)"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22604.944 -61344.628)"
            />
            <path
                fill="url(#A)"
                d="M0 0h3.1v.2H0V0z"
                transform="rotate(-1.401 22631.442 -61344.95)"
            />
            <path
                fill="#cdcece"
                stroke="#cdcece"
                d="m1505.662 526.788 2.499-.061.039 1.6-2.5.06-.038-1.6z"
            />
            <path
                fill="#b4b5b5"
                stroke="#b4b5b5"
                d="m1504.693 526.812 1-.025.039 1.6-1 .024-.04-1.6z"
            />
            <path
                fill="#eee"
                stroke="#eee"
                d="m1508.152 526.727.8-.02.04 1.6-.8.02-.04-1.6z"
            />
            <path
                fill="url(#C)"
                d="M.3 0h16.6c.2 0 .3.1.3.3v2.1c0 .1-.1.3-.3.3H.3c-.2 0-.3-.2-.3-.3V.3C0 .1.1 0 .3 0z"
                transform="rotate(-1.401 22379.702 -61053.064)"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1323.48 755.36h40M1363.513 625.42h-28.2v129.9M1365.041 635.38h1.4v40.9h119.6v18.3h3"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1362.137 747.535h-1.1v-71.2h8.2M1048.083 618.017v40.3h119M1045.47 823.696v-121.6h121.6M274.468 873.897h-29v-80.9h207.2v229.4h50.5"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M361.447 961.804h1v-165h-7.8v-3.8"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#ffc000",
                    fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "30pt",
                }}
                transform="translate(227 450.921)"
            >
                <tspan
                    x={20.5}
                    y={52}
                    style={{
                        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CORE BLOW TANK FT10"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#ffc000",
                    fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "30pt",
                }}
                transform="translate(972 892)"
            >
                <tspan
                    x={39}
                    y={52}
                    style={{
                        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"OLEIN TANK FT 6 & "}
                </tspan>
                <tspan
                    x={11.5}
                    y={108}
                    style={{
                        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"WASHING TANK FT 14"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#ffc000",
                    fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "30pt",
                }}
                transform="translate(291 45)"
            >
                <tspan
                    x={67}
                    y={36.5}
                    style={{
                        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEARINE MELTING TANK FT5A, FT5B & FT5C"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1853.94 155.851h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1813.963 178)"
            >
                <tspan
                    x={9}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEARINE 3"}
                </tspan>
            </text>
        </svg>
    )
}

export default StearineHMI