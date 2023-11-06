import React from 'react'

const FiltrationHMI = () => {
    return (

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={'100%'}
            height={'100%'}
            viewBox="5 5 1920 1080"
        >
            <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a5a5a5" />
                    <stop offset={0.15} stopColor="#dadada" />
                    <stop offset={0.25} stopColor="#eaeaea" />
                    <stop offset={0.44} stopColor="#bcbcbc" />
                    <stop offset={0.6} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#8d8d8d" />
                    <stop offset={0.97} stopColor="gray" />
                </linearGradient>
                <linearGradient id="b" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#989898" />
                    <stop offset={0.01} stopColor="#e0e0e0" />
                    <stop offset={0.02} stopColor="#c6c6c6" />
                    <stop offset={0.64} stopColor="#c3c3c3" />
                    <stop offset={0.99} stopColor="#bebebe" />
                    <stop offset={1} stopColor="#8d8d8d" />
                </linearGradient>
                <linearGradient id="c" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#949494" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#e0e0e0" />
                    <stop offset={0.44} stopColor="#a9a9a9" />
                    <stop offset={0.6} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#7e7e7e" />
                    <stop offset={0.97} stopColor="#737373" />
                </linearGradient>
                <linearGradient id="d" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a7a7a7" />
                    <stop offset={0.15} stopColor="#e1e1e1" />
                    <stop offset={0.25} stopColor="#e4e4e4" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.92} stopColor="#959595" />
                </linearGradient>
                <linearGradient id="e" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#858585" />
                    <stop offset={0.15} stopColor="#b5b5b5" />
                    <stop offset={0.25} stopColor="#d8d8d8" />
                    <stop offset={0.44} stopColor="#999" />
                    <stop offset={0.6} stopColor="#888" />
                    <stop offset={0.8} stopColor="#727272" />
                    <stop offset={0.97} stopColor="#686868" />
                </linearGradient>
                <linearGradient id="f" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#858585" />
                    <stop offset={0.15} stopColor="#b5b5b5" />
                    <stop offset={0.25} stopColor="#c4c4c4" />
                    <stop offset={0.44} stopColor="#999" />
                    <stop offset={0.6} stopColor="#888" />
                    <stop offset={0.8} stopColor="#727272" />
                    <stop offset={0.97} stopColor="#686868" />
                    <stop offset={1} stopColor="#8b8b8b" />
                </linearGradient>
                <linearGradient id="g" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#818181" />
                    <stop offset={0.15} stopColor="#b5b5b5" />
                    <stop offset={0.25} stopColor="#d8d8d8" />
                    <stop offset={0.52} stopColor="#999" />
                    <stop offset={0.69} stopColor="#888" />
                    <stop offset={0.8} stopColor="gray" />
                    <stop offset={0.92} stopColor="#787878" />
                    <stop offset={1} stopColor="#8b8b8b" />
                </linearGradient>
                <linearGradient id="h" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9db098" />
                    <stop offset={0.15} stopColor="#d0e8cb" />
                    <stop offset={0.25} stopColor="#d9ecd5" />
                    <stop offset={0.44} stopColor="#b3c9ae" />
                    <stop offset={0.6} stopColor="#9fb39b" />
                    <stop offset={0.8} stopColor="#869782" />
                    <stop offset={0.97} stopColor="#7a8a76" />
                    <stop offset={1} stopColor="#a3b79e" />
                </linearGradient>
                <linearGradient id="i" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6b8f62" />
                    <stop offset={0.15} stopColor="#9cc691" />
                    <stop offset={0.25} stopColor="#cde0c9" />
                    <stop offset={0.52} stopColor="#7fa975" />
                    <stop offset={0.69} stopColor="#719767" />
                    <stop offset={0.8} stopColor="#6a8e61" />
                    <stop offset={0.92} stopColor="#64865b" />
                    <stop offset={1} stopColor="#739a6a" />
                </linearGradient>
                <linearGradient id="j" x1="0%" x2="0%" y1="100%" y2="0%">
                    <stop offset={0.3} stopColor="#ffc000" />
                    <stop offset={0.38} stopColor="#e7e7e7" />
                    <stop offset={0.42} stopColor="#ebebeb" />
                    <stop offset={0.49} stopColor="#fff" />
                    <stop offset={0.58} stopColor="#fff" />
                </linearGradient>
                <linearGradient id="k" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#676767" />
                    <stop offset={0.22} stopColor="#747474" />
                    <stop offset={0.57} stopColor="#c5c5c5" />
                    <stop offset={0.84} stopColor="#a2a2a2" />
                    <stop offset={1} stopColor="#707070" />
                </linearGradient>
                <linearGradient id="l" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#5e5e5e" />
                    <stop offset={0.64} stopColor="#b8b8b8" />
                    <stop offset={1} stopColor="#656565" />
                </linearGradient>
                <linearGradient id="m" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#545454" />
                    <stop offset={0.66} stopColor="#c5c5c5" />
                    <stop offset={1} stopColor="#515151" />
                </linearGradient>
                <linearGradient id="n" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#565656" />
                    <stop offset={0.03} stopColor="#a2a2a2" />
                    <stop offset={0.05} stopColor="#727272" />
                    <stop offset={0.64} stopColor="#707070" />
                    <stop offset={0.95} stopColor="#6d6d6d" />
                    <stop offset={1} stopColor="#4f4f4f" />
                </linearGradient>
                <linearGradient id="q" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#bac0c1" />
                    <stop offset={0.15} stopColor="#f4fafc" />
                    <stop offset={0.25} stopColor="#f8fcfd" />
                    <stop offset={0.44} stopColor="#d5dbdd" />
                    <stop offset={0.6} stopColor="#bdc3c4" />
                    <stop offset={0.8} stopColor="#a0a4a6" />
                    <stop offset={0.97} stopColor="#929697" />
                    <stop offset={1} stopColor="#c2c7c9" />
                </linearGradient>
                <linearGradient id="r" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#b5b5b5" />
                    <stop offset={0.03} stopColor="#fff" />
                    <stop offset={0.08} stopColor="#ebebeb" />
                    <stop offset={0.64} stopColor="#e7e7e7" />
                    <stop offset={0.95} stopColor="#e2e2e2" />
                    <stop offset={1} stopColor="#a8a8a8" />
                </linearGradient>
                <linearGradient id="s" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#bac0c1" />
                    <stop offset={0.15} stopColor="#f4fafc" />
                    <stop offset={0.25} stopColor="#f8fcfd" />
                    <stop offset={0.44} stopColor="#d5dbdd" />
                    <stop offset={0.6} stopColor="#bdc3c4" />
                    <stop offset={0.8} stopColor="#a0a4a6" />
                    <stop offset={0.97} stopColor="#929697" />
                    <stop offset={1} stopColor="#c2c7c9" />
                </linearGradient>
                <linearGradient id="t" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#939798" />
                    <stop offset={0.15} stopColor="#c5cacb" />
                    <stop offset={0.25} stopColor="#dfe2e2" />
                    <stop offset={0.44} stopColor="#a8adae" />
                    <stop offset={0.6} stopColor="#959a9b" />
                    <stop offset={0.8} stopColor="#7d8182" />
                    <stop offset={0.97} stopColor="#727676" />
                    <stop offset={1} stopColor="#999d9e" />
                </linearGradient>
                <linearGradient id="u" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.03} stopColor="#afda8c" />
                    <stop offset={0.08} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.95} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient
                    id="v"
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
                <linearGradient id="w" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#777" />
                    <stop offset={0.15} stopColor="#bbb" />
                    <stop offset={0.26} stopColor="#c9c9c9" />
                    <stop offset={0.41} stopColor="#c3c3c3" />
                    <stop offset={0.6} stopColor="#9f9f9f" />
                    <stop offset={0.8} stopColor="#7e7e7e" />
                    <stop offset={0.93} stopColor="#676767" />
                </linearGradient>
                <linearGradient id="x" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#b3bdbd" />
                    <stop offset={0.15} stopColor="#eaf7f7" />
                    <stop offset={0.25} stopColor="#f3fbfb" />
                    <stop offset={0.44} stopColor="#ccd8d8" />
                    <stop offset={0.6} stopColor="#b5c0c0" />
                    <stop offset={0.8} stopColor="#99a2a2" />
                    <stop offset={0.97} stopColor="#8c9494" />
                </linearGradient>
                <linearGradient id="y" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#90a7aa" />
                    <stop offset={0.15} stopColor="#c2dce0" />
                    <stop offset={0.25} stopColor="#deecee" />
                    <stop offset={0.44} stopColor="#a5bfc2" />
                    <stop offset={0.6} stopColor="#93aaad" />
                    <stop offset={0.8} stopColor="#7b8f91" />
                    <stop offset={0.97} stopColor="#708285" />
                </linearGradient>
                <linearGradient id="z" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a9b1aa" />
                    <stop offset={0.22} stopColor="#bec7c0" />
                    <stop offset={0.57} stopColor="#e4e9e5" />
                    <stop offset={0.84} stopColor="#d6ddd7" />
                    <stop offset={1} stopColor="#b7c0b9" />
                </linearGradient>
                <linearGradient id="A" x1="0%" x2="0%" y1="100%" y2="0%">
                    <stop offset={0} stopColor="#a9b1aa" />
                    <stop offset={0.22} stopColor="#bec7c0" />
                    <stop offset={0.57} stopColor="#e4e9e5" />
                    <stop offset={0.84} stopColor="#d6ddd7" />
                    <stop offset={1} stopColor="#b7c0b9" />
                </linearGradient>
                <linearGradient id="B" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#849c87" />
                    <stop offset={0.22} stopColor="#95b098" />
                    <stop offset={0.57} stopColor="#d1ddd3" />
                    <stop offset={0.84} stopColor="#b8cbba" />
                    <stop offset={1} stopColor="#90a992" />
                </linearGradient>
                <radialGradient
                    id="o"
                    cx={9}
                    cy={8}
                    r={12.6}
                    fx={9}
                    fy={8}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#787878" />
                    <stop offset={0.91} stopColor="#767676" />
                    <stop offset={0.74} stopColor="#b0b0b0" />
                    <stop offset={0.54} stopColor="#767676" />
                </radialGradient>
                <radialGradient
                    id="p"
                    cx={2}
                    cy={2}
                    r={2.9}
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
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#ff0",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "36pt",
                    fontWeight: 700,
                }}
                transform="translate(19.313 17.118)"
            >
                <tspan
                    x={65.3}
                    y={59.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                        textDecoration: "underline",
                    }}
                >
                    {"L1000 FILTER SECTION"}
                </tspan>
            </text>
            <path
                fill="url(#a)"
                d="M0 0h131.4v241.5H0V0z"
                transform="translate(441.828 236.792)"
            />
            <path
                fill="url(#a)"
                d="M0 0h132v5.4H0V0z"
                transform="translate(440.264 226.578)"
            />
            <g fill="url(#b)" transform="translate(459.701 222.219)">
                <path d="M0 0h4.2v135.9H0V0zM12.803 0h4.2v135.9h-4.2V0z" />
            </g>
            <path
                fill="url(#a)"
                d="M0 35.7C0 16 26.5 0 59.2 0c32.6 0 59.1 16 59.1 35.7H0z"
                transform="translate(448.849 191.354)"
            />
            <g fill="url(#b)" transform="translate(534.476 222.219)">
                <path d="M0 0h4.2v135.9H0V0zM12.803 0h4.2v135.9h-4.2V0z" />
            </g>
            <path
                fill="url(#a)"
                d="M0 0h131.4v8.5H0V0z"
                transform="translate(441.828 469.784)"
            />
            <path
                fill="url(#a)"
                d="M1.8 0h138c1.1 0 1.9.9 1.9 2.1V13c0 1.2-.8 2.1-1.9 2.1H1.8c-1 0-1.8-.9-1.8-2.1V2.1C0 .9.8 0 1.8 0z"
                transform="translate(436.657 474.958)"
            />
            <path
                fill="url(#c)"
                d="M0 35.7C0 16 26.5 0 59.2 0c32.6 0 59.1 16 59.1 35.7H0z"
                transform="rotate(180 284.197 262.45)"
            />
            <g fill="url(#d)" stroke="#ebebeb" transform="translate(459.592 415.58)">
                <path d="M.043 93.101v80.1c0 4.4 2.4 8.1 5.3 8.1h85.2c3 0 5.3-3.7 5.3-8.1v-80.1H.043zM99.306 85.369h-97.5c-1 0-1.8 1.2-1.8 2.8 0 1.6.8 2.8 1.8 2.8h97.5c.9 0 1.7-1.2 1.7-2.8 0-1.6-.8-2.8-1.7-2.8z" />
                <path d="M2.621 88.488v4h95.8v-4h-95.8z" />
            </g>
            <g fill="red" stroke="#c00000">
                <path d="M435.098 498.843h127.2v13.8h-127.2v-13.8z" />
                <path d="M428.222 493.32h6.9v25.1h-6.9v-25.1zM440.439 492.356h3.3v28.1h-3.3v-28.1z" />
            </g>
            <path
                fill="red"
                stroke="#c00000"
                d="M561.518 496.213h4.2v18.3h-4.2v-18.3z"
            />
            <path
                fill="url(#e)"
                d="M0 0h135.8v5.4H0V0z"
                transform="translate(439.394 231.4)"
            />
            <path fill="#afafaf" d="M484.945 201.11h48.1v5.8h-48.1v-5.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(461.188 251.075)"
            >
                <tspan
                    x={37}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D206"}
                </tspan>
            </text>
            <path stroke="#afafaf" d="M445.597 352.522h123.7v47.3h-123.7v-47.3z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(445.597 352.522)"
            >
                <tspan
                    x={22.3}
                    y={28.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RECIRCULATION"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#00b050"
                d="M449.217 430.545h118.3v23.3h-118.3v-23.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(449.217 430.545)"
            >
                <tspan
                    x={52.2}
                    y={16.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"NA"}
                </tspan>
            </text>
            <path
                fill="url(#a)"
                d="M0 0h131.4v241.5H0V0z"
                transform="translate(758.37 236.904)"
            />
            <path
                fill="url(#a)"
                d="M0 0h132v5.4H0V0z"
                transform="translate(756.805 226.69)"
            />
            <g fill="url(#b)" transform="translate(776.243 222.33)">
                <path d="M0 0h4.2v135.9H0V0zM12.803 0h4.2v135.9h-4.2V0z" />
            </g>
            <path
                fill="url(#a)"
                d="M0 35.7C0 16 26.5 0 59.2 0c32.6 0 59.1 16 59.1 35.7H0z"
                transform="translate(765.39 191.466)"
            />
            <g fill="url(#b)" transform="translate(851.018 222.33)">
                <path d="M0 0h4.2v135.9H0V0zM12.803 0h4.2v135.9h-4.2V0z" />
            </g>
            <path
                fill="url(#a)"
                d="M0 0h131.4v8.5H0V0z"
                transform="translate(758.37 469.896)"
            />
            <path
                fill="url(#a)"
                d="M1.8 0h138c1.1 0 1.9.9 1.9 2.1V13c0 1.2-.8 2.1-1.9 2.1H1.8c-1 0-1.8-.9-1.8-2.1V2.1C0 .9.8 0 1.8 0z"
                transform="translate(753.199 475.07)"
            />
            <path
                fill="url(#c)"
                d="M0 35.7C0 16 26.5 0 59.2 0c32.6 0 59.1 16 59.1 35.7H0z"
                transform="rotate(180 442.467 262.507)"
            />
            <g fill="url(#d)" stroke="#ebebeb" transform="translate(776.133 415.692)">
                <path d="M.043 93.1v80c0 4.4 2.4 8.1 5.3 8.1h85.2c3 0 5.3-3.7 5.3-8.1v-80H.043zM99.306 85.369h-97.5c-1 0-1.8 1.2-1.8 2.8 0 1.6.8 2.8 1.8 2.8h97.5c.9 0 1.7-1.2 1.7-2.8 0-1.6-.8-2.8-1.7-2.8z" />
                <path d="M2.621 88.488v4h95.8v-4h-95.8z" />
            </g>
            <g fill="red" stroke="#c00000">
                <path d="M751.639 498.955h127.2v13.8h-127.2v-13.8z" />
                <path d="M744.763 493.432h6.9v25.1h-6.9v-25.1zM756.98 492.468h3.3v28.1h-3.3v-28.1z" />
            </g>
            <path
                fill="red"
                stroke="#c00000"
                d="M878.062 496.325h4.2v18.3h-4.2v-18.3z"
            />
            <path
                fill="url(#e)"
                d="M0 0h135.8v5.4H0V0z"
                transform="translate(755.936 231.511)"
            />
            <path fill="#afafaf" d="M799.767 191.578h48.1v5.8h-48.1v-5.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(777.73 251.187)"
            >
                <tspan
                    x={37}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D207"}
                </tspan>
            </text>
            <path stroke="#afafaf" d="M760.827 352.522h125v47h-125v-47z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(760.827 352.522)"
            >
                <tspan
                    x={19}
                    y={28}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CAKE DISCHARGE"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#00b050"
                d="M765.758 430.657h118.3v23.3h-118.3v-23.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(765.758 430.657)"
            >
                <tspan
                    x={52.2}
                    y={16.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"NA"}
                </tspan>
            </text>
            <path
                fill="url(#a)"
                d="M0 0h131.4v241.5H0V0z"
                transform="translate(1078.425 236.904)"
            />
            <path
                fill="url(#a)"
                d="M0 0h132v5.4H0V0z"
                transform="translate(1076.86 226.69)"
            />
            <g fill="url(#b)" transform="translate(1096.298 222.33)">
                <path d="M0 0h4.2v135.9H0V0zM12.803 0h4.2v135.9h-4.2V0z" />
            </g>
            <path
                fill="url(#a)"
                d="M0 35.7C0 16 26.5 0 59.2 0c32.6 0 59.1 16 59.1 35.7H0z"
                transform="translate(1085.446 191.466)"
            />
            <g fill="url(#b)" transform="translate(1171.073 222.33)">
                <path d="M0 0h4.2v135.9H0V0zM12.803 0h4.2v135.9h-4.2V0z" />
            </g>
            <path
                fill="url(#a)"
                d="M0 0h131.4v8.5H0V0z"
                transform="translate(1078.425 469.896)"
            />
            <path
                fill="url(#a)"
                d="M1.8 0h138c1.1 0 1.9.9 1.9 2.1V13c0 1.2-.8 2.1-1.9 2.1H1.8c-1 0-1.8-.9-1.8-2.1V2.1C0 .9.8 0 1.8 0z"
                transform="translate(1073.254 475.07)"
            />
            <path
                fill="url(#c)"
                d="M0 35.7C0 16 26.5 0 59.2 0c32.6 0 59.1 16 59.1 35.7H0z"
                transform="rotate(180 602.495 262.507)"
            />
            <g fill="url(#d)" stroke="#ebebeb" transform="translate(1096.189 415.692)">
                <path d="M.043 93.1v80c0 4.4 2.4 8.1 5.3 8.1h85.2c3 0 5.3-3.7 5.3-8.1v-80H.043zM99.306 85.369h-97.5c-1 0-1.8 1.2-1.8 2.8 0 1.6.8 2.8 1.8 2.8h97.5c.9 0 1.7-1.2 1.7-2.8 0-1.6-.8-2.8-1.7-2.8z" />
                <path d="M2.621 88.488v4h95.8v-4h-95.8z" />
            </g>
            <g fill="red" stroke="#c00000">
                <path d="M1071.695 498.955h127.2v13.8h-127.2v-13.8z" />
                <path d="M1064.819 493.432h6.9v25.1h-6.9v-25.1zM1077.036 492.468h3.3v28.1h-3.3v-28.1z" />
            </g>
            <path
                fill="red"
                stroke="#c00000"
                d="M1198.11 496.325h4.2v18.3h-4.2v-18.3z"
            />
            <path
                fill="url(#e)"
                d="M0 0h135.8v5.4H0V0z"
                transform="translate(1075.994 231.511)"
            />
            <path fill="#afafaf" d="M1119.826 191.578h48.1v5.8h-48.1v-5.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1097.785 251.187)"
            >
                <tspan
                    x={37}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D208"}
                </tspan>
            </text>
            <path stroke="#afafaf" d="M1082.378 352.522h123.5v47.4h-123.5v-47.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1082.378 352.522)"
            >
                <tspan
                    x={33.7}
                    y={28.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FILTRATION"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#00b050"
                d="M1085.815 430.657h118.3v23.3h-118.3v-23.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1085.815 430.657)"
            >
                <tspan
                    x={52.2}
                    y={16.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"NA"}
                </tspan>
            </text>
            <path
                fill="url(#f)"
                d="M0 4.4h48.6V0H0v4.4z"
                transform="translate(729.818 824.575)"
            />
            <path
                fill="url(#g)"
                d="M0 1.1h48.6V0H0v1.1z"
                transform="translate(729.818 827.896)"
            />
            <path
                fill="url(#f)"
                d="M0 4.4h48.6V0H0v4.4z"
                transform="translate(729.818 889.02)"
            />
            <path
                fill="url(#g)"
                d="M0 1.3h48.6V0H0v1.3z"
                transform="translate(729.818 888.934)"
            />
            <path
                fill="url(#f)"
                d="M4.7 0h48.9c2.6 0 4.7 1.9 4.7 4.3v51.5c0 2.4-2.1 4.3-4.7 4.3H4.7c-2.6 0-4.7-1.9-4.7-4.3V4.3C0 1.9 2.1 0 4.7 0z"
                transform="translate(724.943 828.952)"
            />
            <path
                fill="url(#f)"
                d="M0 4.4h48.6V0H0v4.4z"
                transform="translate(831.299 824.575)"
            />
            <path
                fill="url(#g)"
                d="M0 1.1h48.6V0H0v1.1z"
                transform="translate(831.299 827.896)"
            />
            <path
                fill="url(#f)"
                d="M0 4.4h48.6V0H0v4.4z"
                transform="translate(831.299 889.02)"
            />
            <path
                fill="url(#g)"
                d="M0 1.3h48.6V0H0v1.3z"
                transform="translate(831.299 888.934)"
            />
            <path
                fill="url(#f)"
                d="M4.7 0h48.9c2.6 0 4.7 1.9 4.7 4.3v51.5c0 2.4-2.1 4.3-4.7 4.3H4.7c-2.6 0-4.7-1.9-4.7-4.3V4.3C0 1.9 2.1 0 4.7 0z"
                transform="translate(826.424 828.952)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(721.87 844.94)"
            >
                <tspan
                    x={17.7}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D205A"}
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
                transform="translate(826.427 844.94)"
            >
                <tspan
                    x={17.7}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D205B"}
                </tspan>
            </text>
            <path
                fill="#7c7c7c"
                d="M794.772 758.025c0-7.2 5.2-13 11.6-13 6.4 0 11.6 5.8 11.6 13s-5.2 13-11.6 13c-6.4 0-11.6-5.8-11.6-13z"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M752.593 824.575v-23.1M752.23 802.406h107.4M859.661 824.587v-23.1M806.375 770.1v31.3M859.482 893.464v23.1M859.842 916.6h-107.4M752.411 893.454v23.1"
            />
            <path
                fill="url(#h)"
                d="M0 16.5h93.6V0H0v16.5z"
                transform="translate(263.291 633.17)"
            />
            <path
                fill="url(#i)"
                d="M0 3.7h93.6V0H0v3.7z"
                transform="translate(263.291 644.428)"
            />
            <path
                fill="url(#h)"
                d="M0 15h93.6V0H0v15z"
                transform="translate(263.291 851.607)"
            />
            <path
                fill="url(#i)"
                d="M0 4.3h93.6V0H0v4.3z"
                transform="translate(263.291 851.317)"
            />
            <path
                fill="url(#h)"
                d="M9.1 0h94.3c5 0 9.1 6.6 9.1 14.7v174.4c0 8.1-4.1 14.7-9.1 14.7H9.1c-5 0-9.1-6.6-9.1-14.7V14.7C0 6.6 4.1 0 9.1 0z"
                transform="translate(253.87 648.004)"
            />
            <path
                fill="url(#j)"
                d="M0 0h12.6v117.7H0V0z"
                transform="translate(349.805 691.022)"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M340.135 668.915c0-6.1 4.6-11.1 10.4-11.1 5.7 0 10.3 5 10.3 11.1s-4.6 11.1-10.3 11.1c-5.8 0-10.4-5-10.4-11.1z"
            />
            <path
                fill="url(#k)"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 324.424 895.932)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 324.713 904.625)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(-90 614.446 290.14)"
            />
            <path
                fill="#7c7c7c"
                d="M323.748 904.258v-9.5c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.5c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.2H0V0z"
                transform="translate(332.881 907.059)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.3H0L3.3 0z"
                transform="translate(333.718 901.914)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 340.709 885.355)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.2 0 9.4 0s9.4 3.7 9.4 8.3c0 4.6-4.2 8.3-9.4 8.3S0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 348.604 904.113)"
            />
            <path
                fill="#7c7c7c"
                d="M340.3 902.525c3.8 0 6.9-3.5 6.9-7.8s-3.1-7.8-6.9-7.8c-3.8 0-6.9 3.5-6.9 7.8s3.1 7.8 6.9 7.8z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M340.27 891.897c1.4 0 2.5 1.3 2.5 2.8 0 1.6-1.1 2.8-2.5 2.8s-2.5-1.2-2.5-2.8c0-1.5 1.1-2.8 2.5-2.8z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.2 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 -275.144 617.368)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 355.62 883.824)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(90 -263.918 619.945)"
            />
            <path
                fill="#7c7c7c"
                d="M356.584 884.19v9.5c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.5c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="url(#k)"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 323.565 934.836)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 323.854 943.528)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(-90 633.468 310.022)"
            />
            <path
                fill="#7c7c7c"
                d="M322.889 943.161v-9.5c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.5c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.2H0V0z"
                transform="translate(332.022 945.962)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.3H0L3.3 0z"
                transform="translate(332.858 940.817)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 339.85 924.258)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.2 0 9.4 0s9.4 3.7 9.4 8.3c0 4.6-4.2 8.3-9.4 8.3S0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 347.744 943.016)"
            />
            <path
                fill="#7c7c7c"
                d="M339.44 941.428c3.8 0 6.9-3.5 6.9-7.8s-3.1-7.8-6.9-7.8c-3.8 0-6.9 3.5-6.9 7.8s3.1 7.8 6.9 7.8z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M339.41 930.8c1.4 0 2.5 1.3 2.5 2.8 0 1.6-1.1 2.8-2.5 2.8s-2.5-1.2-2.5-2.8c0-1.5 1.1-2.8 2.5-2.8z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.2 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 -295.026 636.39)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 354.76 922.727)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(90 -283.8 638.967)"
            />
            <path
                fill="#7c7c7c"
                d="M355.725 923.094v9.5c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.5c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#ffc000"
                d="M307.115 897.146h15.9v4.8h-15.9v-4.8zM307.115 936.686h15.9v4.8h-15.9v-4.8z"
            />
            <path
                fill="url(#k)"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 323.565 975.635)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 323.854 984.328)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(-90 653.867 330.421)"
            />
            <path
                fill="#7c7c7c"
                d="M322.889 983.96v-9.5c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.5c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.2H0V0z"
                transform="translate(332.022 986.762)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.3H0L3.3 0z"
                transform="translate(332.858 981.616)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 339.85 965.058)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.2 0 9.4 0s9.4 3.7 9.4 8.3c0 4.6-4.2 8.3-9.4 8.3S0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 347.744 983.816)"
            />
            <path
                fill="#7c7c7c"
                d="M339.44 982.228c3.8 0 6.9-3.5 6.9-7.8s-3.1-7.8-6.9-7.8c-3.8 0-6.9 3.5-6.9 7.8s3.1 7.8 6.9 7.8z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M339.41 971.6c1.4 0 2.5 1.3 2.5 2.8 0 1.6-1.1 2.8-2.5 2.8s-2.5-1.2-2.5-2.8c0-1.5 1.1-2.8 2.5-2.8z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.2 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 -315.425 656.79)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 354.76 963.527)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(90 -304.2 659.367)"
            />
            <path
                fill="#7c7c7c"
                d="M355.725 963.894v9.5c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.5c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M307.115 977.495h15.9v4.8h-15.9v-4.8z" />
            <path
                fill="url(#k)"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 324.424 1015.233)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 324.713 1023.925)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(-90 674.096 349.79)"
            />
            <path
                fill="#7c7c7c"
                d="M323.748 1023.559v-9.5c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.5c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.2H0V0z"
                transform="translate(332.881 1026.36)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.3H0L3.3 0z"
                transform="translate(333.718 1021.214)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 340.709 1004.656)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.2 0 9.4 0s9.4 3.7 9.4 8.3c0 4.6-4.2 8.3-9.4 8.3S0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 348.604 1023.413)"
            />
            <path
                fill="#7c7c7c"
                d="M340.3 1021.826c3.8 0 6.9-3.5 6.9-7.8s-3.1-7.8-6.9-7.8c-3.8 0-6.9 3.5-6.9 7.8s3.1 7.8 6.9 7.8z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M340.27 1011.197c1.4 0 2.5 1.3 2.5 2.8 0 1.6-1.1 2.8-2.5 2.8s-2.5-1.2-2.5-2.8c0-1.5 1.1-2.8 2.5-2.8z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.2 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 -334.795 677.018)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 355.62 1003.125)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(90 -323.568 679.595)"
            />
            <path
                fill="#7c7c7c"
                d="M356.584 1003.491v9.5c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.5c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M307.974 1017.093h15.9v4.8h-15.9v-4.8z" />
            <path
                fill="url(#h)"
                d="M0 9.7h83.4V0H0v9.7z"
                transform="translate(944.694 815.216)"
            />
            <path
                fill="url(#i)"
                d="M0 2.2h83.4V0H0v2.2z"
                transform="translate(944.694 821.858)"
            />
            <path
                fill="url(#h)"
                d="M0 8.9h83.4V0H0v8.9z"
                transform="translate(944.694 944.09)"
            />
            <path
                fill="url(#i)"
                d="M0 2.5h83.4V0H0v2.5z"
                transform="translate(944.694 943.92)"
            />
            <path
                fill="url(#h)"
                d="M8.1 0h84c4.5 0 8.1 3.9 8.1 8.7v102.9c0 4.8-3.6 8.6-8.1 8.6h-84c-4.5 0-8.1-3.8-8.1-8.6V8.7C0 3.9 3.6 0 8.1 0z"
                transform="translate(936.3 823.968)"
            />
            <path
                fill="url(#j)"
                stroke="#3498db"
                d="M0 0h14.4v90H0V0z"
                transform="translate(1017.19 848.716)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 268.519)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 247.325)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 248.044h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 248.639h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 260.269)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 266.387)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 266.387)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 268.53)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 268.53)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 252.626)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 246.356)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 245.428)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 256.613)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 257.407)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 266.49)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 257.407)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 350.973)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 329.78)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 330.498h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 331.093h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 342.723)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 348.842)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 348.842)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 350.984)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 350.984)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 335.08)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 328.81)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 327.882)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 339.068)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 339.862)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 348.944)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 339.862)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 391.687)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 370.493)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 371.212h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 371.807h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 383.437)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 389.555)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 389.555)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 391.698)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 391.698)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 375.794)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 369.524)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 368.596)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 379.781)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 380.575)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 389.657)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 380.575)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 433.365)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 412.171)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 412.89h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 413.485h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 425.115)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 431.233)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 431.233)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 433.376)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 433.376)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 417.472)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 411.202)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 410.274)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 421.46)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 422.253)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 431.335)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 422.253)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 476.968)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 455.774)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 456.493h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 457.088h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 468.718)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 474.836)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 474.836)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 476.979)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 476.979)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 461.075)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 454.805)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 453.877)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 465.062)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 465.856)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 474.938)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 465.856)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M310.057 114.315h997.4"
            />
            <path
                fill="none"
                stroke="#236ea1"
                strokeWidth={2.667}
                d="M356.888 142.282h1307.2"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M655.975 170.25h1006.4"
            />
            <g stroke="#236ea1">
                <path fill="none" strokeWidth={2.667} d="M357.747 142.282v79.9" />
                <path
                    fill="#236ea1"
                    strokeLinecap="round"
                    d="m362.647 222.182-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#236ea1"
                strokeWidth={2.667}
                d="M356.888 231.97h85.1"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(379.974 227.093)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(385.011 205.9)"
            />
            <path
                fill="#b4b5b5"
                d="M385.787 206.619h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M386.045 207.213h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(391.063 218.844)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(381.926 224.962)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(402.339 224.962)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(383.514 227.105)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(401.976 227.105)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(384.321 211.2)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(386.72 204.931)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(387.17 204.003)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(384.321 215.188)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(377.214 215.982)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 376.93 225.064)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 377.216 215.982)"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M443.878 283.104c0-6.1 4.6-11.1 10.4-11.1 5.7 0 10.3 5 10.3 11.1s-4.6 11.1-10.3 11.1c-5.8 0-10.4-5-10.4-11.1zM760.827 283.104c0-6.1 4.6-11.1 10.4-11.1 5.7 0 10.3 5 10.3 11.1s-4.6 11.1-10.3 11.1c-5.8 0-10.4-5-10.4-11.1zM1080.66 283.104c0-6.1 4.6-11.1 10.4-11.1 5.7 0 10.3 5 10.3 11.1s-4.6 11.1-10.3 11.1c-5.8 0-10.4-5-10.4-11.1z"
            />
            <g stroke="#236ea1">
                <path fill="none" strokeWidth={2.667} d="M700.072 142.284v79.9" />
                <path
                    fill="#236ea1"
                    strokeLinecap="round"
                    d="m704.972 222.184-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#236ea1"
                strokeWidth={2.667}
                d="M699.806 231.972h56.1"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(715.427 227.095)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(720.464 205.902)"
            />
            <path
                fill="#b4b5b5"
                d="M721.24 206.62h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M721.498 207.215h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(726.516 218.846)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(717.378 224.964)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(737.791 224.964)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(718.966 227.107)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(737.429 227.107)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(719.774 211.203)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(722.172 204.933)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(722.622 204.005)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(719.774 215.19)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(712.666 215.984)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 712.383 225.066)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 712.668 215.984)"
            />
            <g stroke="#236ea1">
                <path fill="none" strokeWidth={2.667} d="M1020.13 142.286v80.9" />
                <path
                    fill="#236ea1"
                    strokeLinecap="round"
                    d="m1025.03 223.186-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#236ea1"
                strokeWidth={2.667}
                d="M1019.52 231.974h56.5"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1038.063 227.097)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1043.1 205.904)"
            />
            <path
                fill="#b4b5b5"
                d="M1043.876 206.623h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1044.134 207.217h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1049.152 218.848)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1040.015 224.966)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1060.428 224.966)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1041.603 227.109)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1060.065 227.109)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1042.41 211.205)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1044.809 204.935)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1045.258 204.007)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1042.41 215.192)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1035.303 215.986)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1035.02 225.068)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1035.305 215.986)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="m612.143 313.943.108 4.7"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M612.143 274.403h-18"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2.667} d="M594.095 273.44v30.7" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m598.995 304.14-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M612.143 438.35h-39.5M612.143 395.917h-16.3M612.143 355.412h-16.3M595.813 355.412v126.3M612.143 481.747h-16.3"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M657.693 273.44h-19.8M656.834 273.442v-103.2"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 268.497)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 247.303)"
            />
            <path
                fill="#b4b5b5"
                d="M934.607 248.022h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 248.617h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 260.247)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 266.365)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 266.365)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 268.508)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 268.508)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 252.604)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 246.334)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 245.406)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 256.591)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 257.385)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 266.467)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 257.385)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 309.21)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 288.017)"
            />
            <path
                fill="#b4b5b5"
                d="M934.607 288.735h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 289.33h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 300.96)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 307.079)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 307.079)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 309.221)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 309.221)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 293.318)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 287.048)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 286.12)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 297.305)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 298.099)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 307.18)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 298.099)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 350.95)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 329.758)"
            />
            <path
                fill="#b4b5b5"
                d="M934.607 330.476h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 331.07h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 342.701)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 348.82)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 348.82)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 350.962)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 350.962)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 335.058)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 328.788)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 327.86)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 339.046)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 339.84)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 348.921)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 339.84)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 391.665)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 370.471)"
            />
            <path
                fill="#b4b5b5"
                d="M934.607 371.19h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 371.784h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 383.415)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 389.533)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 389.533)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 391.676)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 391.676)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 375.772)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 369.502)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 368.574)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 379.76)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 380.553)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 389.635)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 380.553)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 433.343)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 412.15)"
            />
            <path
                fill="#7c7c7c"
                d="M934.607 412.868h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 413.462h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 425.093)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 431.211)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 431.211)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 433.354)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 433.354)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 417.45)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 411.18)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 410.252)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 421.437)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 422.231)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 431.313)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 422.231)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 476.945)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 455.752)"
            />
            <path
                fill="#b4b5b5"
                d="M934.607 456.47h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 457.065h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 468.696)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 474.814)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 474.814)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 476.957)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 476.957)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 461.053)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 454.783)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 453.855)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 465.04)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 465.834)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 474.916)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 465.834)"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M928.685 273.417h-18"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2.667} d="M910.637 273.417v30.7" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m915.537 304.117-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M928.685 438.327h-39.5M928.685 395.894h-16.3M928.685 355.39h-16.3M912.356 355.39v126.3M928.685 481.725h-16.3"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M972.517 272.453h-18M972.517 272.453v-102.2"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M928.419 313.943h-39.5"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1248.507 268.497)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1253.544 247.303)"
            />
            <path
                fill="#b4b5b5"
                d="M1254.32 248.022h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1254.578 248.617h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1259.596 260.247)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1250.458 266.365)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1270.871 266.365)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1252.046 268.508)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1270.509 268.508)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1252.854 252.604)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1255.252 246.334)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1255.702 245.406)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1252.854 256.591)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1245.746 257.385)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1245.463 266.467)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1245.748 257.385)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1248.507 309.21)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1253.544 288.017)"
            />
            <path
                fill="#b4b5b5"
                d="M1254.32 288.735h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1254.578 289.33h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1259.596 300.96)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1250.458 307.079)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1270.871 307.079)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1252.046 309.221)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1270.509 309.221)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1252.854 293.318)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1255.252 287.048)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1255.702 286.12)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1252.854 297.305)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1245.746 298.099)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1245.463 307.18)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1245.748 298.099)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1248.507 350.95)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1253.544 329.758)"
            />
            <path
                fill="#b4b5b5"
                d="M1254.32 330.476h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1254.578 331.07h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1259.596 342.701)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1250.458 348.82)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1270.871 348.82)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1252.046 350.962)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1270.509 350.962)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1252.854 335.058)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1255.252 328.788)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1255.702 327.86)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1252.854 339.046)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1245.746 339.84)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1245.463 348.921)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1245.748 339.84)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1248.507 391.665)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1253.544 370.471)"
            />
            <path
                fill="#b4b5b5"
                d="M1254.32 371.19h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1254.578 371.784h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1259.596 383.415)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1250.458 389.533)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1270.871 389.533)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1252.046 391.676)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1270.509 391.676)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1252.854 375.772)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1255.252 369.502)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1255.702 368.574)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1252.854 379.76)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1245.746 380.553)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1245.463 389.635)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1245.748 380.553)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1248.507 433.343)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1253.544 412.15)"
            />
            <path
                fill="#b4b5b5"
                d="M1254.32 412.868h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1254.578 413.462h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1259.596 425.093)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1250.458 431.211)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1270.871 431.211)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1252.046 433.354)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1270.509 433.354)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1252.854 417.45)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1255.252 411.18)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1255.702 410.252)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1252.854 421.437)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1245.746 422.231)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1245.463 431.313)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1245.748 422.231)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1248.507 476.945)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1253.544 455.752)"
            />
            <path
                fill="#b4b5b5"
                d="M1254.32 456.47h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1254.578 457.065h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1259.596 468.696)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1250.458 474.814)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1270.871 474.814)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1252.046 476.957)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1270.509 476.957)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1252.854 461.053)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1255.252 454.783)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1255.702 453.855)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1252.854 465.04)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1245.746 465.834)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1245.463 474.916)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1245.748 465.834)"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M1248.399 273.417h-18"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2.667} d="M1230.35 273.417v30.7" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m1235.25 304.117-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1248.399 438.327h-39.5M1248.399 395.894h-16.3M1248.399 355.39h-16.3M1232.07 355.39v126.3M1248.399 481.725h-16.3"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M1292.23 272.453h-18M1292.23 272.453v-102.2"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1248.132 313.943h-39.5M637.926 481.747h32.7"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M670.585 481.747v-357.6" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m665.685 124.147 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M954.632 481.747h32.7"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M987.29 481.747v-357.6" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m982.39 124.147 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1275.634 481.865h32.7"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1308.293 481.865v-357.6" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1303.393 124.265 4.9-9.8 4.9 9.8h-9.8"
                />
            </g>
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 519.303)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 498.11)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 498.829h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 499.423h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 511.054)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 517.172)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 517.172)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 519.315)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 519.315)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 503.41)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 497.14)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 496.213)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 507.398)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 508.192)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 517.274)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 508.192)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 560.981)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 539.788)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 540.507h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 541.101h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 552.732)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 558.85)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 558.85)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 560.993)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 560.993)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 545.089)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 538.819)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 537.89)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 549.076)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 549.87)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 558.952)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 549.87)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 604.584)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 583.39)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 584.11h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#92d050" d="M618.322 584.704h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 596.334)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 602.453)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 602.453)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 604.595)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 604.595)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 588.692)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 582.422)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 581.494)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 592.679)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 593.473)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 602.555)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 593.473)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M612.143 565.966h-58.4M612.143 523.533h-16.3M612.143 609.364h-16.3M596.673 523.216v86.8"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 519.327)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 498.134)"
            />
            <path
                fill="#b4b5b5"
                d="M934.607 498.853h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 499.447h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 511.078)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 517.196)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 517.196)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 519.339)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 519.339)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 503.435)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 497.165)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 496.237)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 507.422)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 508.216)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 517.298)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 508.216)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 561.005)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 539.812)"
            />
            <path
                fill="#b4b5b5"
                d="M934.607 540.53h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 541.125h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 552.756)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 558.874)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 558.874)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 561.017)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 561.017)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 545.113)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 538.843)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 537.915)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 549.1)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 549.894)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 558.976)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 549.894)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(928.793 604.608)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(933.83 583.415)"
            />
            <path
                fill="#b4b5b5"
                d="M934.607 584.134h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M934.864 584.728h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(939.882 596.359)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(930.745 602.477)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(951.158 602.477)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(932.333 604.62)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(950.795 604.62)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(933.14 588.716)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(935.539 582.446)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(935.989 581.518)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(933.14 592.703)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(926.033 593.497)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 925.75 602.579)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 926.035 593.497)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M928.685 565.99h-58.4M928.685 523.557h-16.3M928.685 609.388h-16.3M913.215 523.24v86.8"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1250.294 520.38)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1255.332 499.187)"
            />
            <path
                fill="#b4b5b5"
                d="M1256.108 499.906h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1256.365 500.5h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1261.383 512.13)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1252.246 518.25)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1272.659 518.25)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1253.834 520.392)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1272.297 520.392)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1254.642 504.488)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1257.04 498.218)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1257.49 497.29)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1254.642 508.475)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1247.534 509.27)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1247.251 518.351)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1247.536 509.27)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1250.294 562.059)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1255.332 540.865)"
            />
            <path
                fill="#b4b5b5"
                d="M1256.108 541.584h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1256.365 542.178h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1261.383 553.809)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1252.246 559.927)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1272.659 559.927)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1253.834 562.07)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1272.297 562.07)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1254.642 546.166)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1257.04 539.896)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1257.49 538.968)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1254.642 550.153)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1247.534 550.947)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1247.251 560.03)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1247.536 550.947)"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1250.294 605.662)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1255.332 584.468)"
            />
            <path
                fill="#b4b5b5"
                d="M1256.108 585.187h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1256.365 585.781h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1261.383 597.412)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1252.246 603.53)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1272.659 603.53)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1253.834 605.673)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1272.297 605.673)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1254.642 589.769)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1257.04 583.499)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1257.49 582.57)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1254.642 593.756)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1247.534 594.55)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1247.251 603.632)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1247.536 594.55)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1250.186 567.043h-58.4M1250.186 524.61h-16.3M1250.186 610.441h-16.3M1234.716 524.293v86.8"
            />
            <path fill="#fff" d="M638.785 235.223h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(638.785 235.223)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV208A"}
                </tspan>
            </text>
            <path fill="#fff" d="M638.785 279.369h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(638.785 279.369)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV207A"}
                </tspan>
            </text>
            <path fill="#fff" d="M638.785 321.94h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(638.785 321.94)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV206A"}
                </tspan>
            </text>
            <path fill="#fff" d="M638.785 362.788h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(638.785 362.788)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV205A"}
                </tspan>
            </text>
            <path fill="#fff" d="M638.785 402.537h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(638.785 402.537)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV204A"}
                </tspan>
            </text>
            <path fill="#fff" d="M638.785 445.175h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(638.785 445.175)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV203A"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M572.608 313.943h167.6"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 309.232)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 288.04)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 288.758h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 289.352h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 300.983)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 307.1)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 307.1)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 309.244)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 309.244)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 293.34)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 287.07)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 286.142)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 297.327)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 298.12)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 307.203)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 298.121)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M637.926 355.412h90.2M638.786 397.845h79.1M638.786 438.425h63.6M716.995 634.12h999.5"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M740.2 313.943v310.4" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m745.1 624.343-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M728.168 355.412v268.9" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m733.068 624.312-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M717.855 397.845v226.5" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m722.755 624.345-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path fill="#fff" d="M955.924 234.259h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(955.924 234.259)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV208B"}
                </tspan>
            </text>
            <path fill="#fff" d="M955.924 278.404h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(955.924 278.404)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV207B"}
                </tspan>
            </text>
            <path fill="#fff" d="M955.924 320.975h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(955.924 320.975)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV206B"}
                </tspan>
            </text>
            <path fill="#fff" d="M955.924 361.823h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(955.924 361.823)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV205B"}
                </tspan>
            </text>
            <path fill="#fff" d="M955.924 401.572h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(955.924 401.572)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV204B"}
                </tspan>
            </text>
            <path fill="#fff" d="M955.924 444.21h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(955.924 444.21)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV203B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M955.92 312.98h101.4M955.061 354.448h90.2M955.92 396.88h79.1"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1057.335 312.98v310.4" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1062.235 623.38-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1045.303 354.448v268.9" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1050.203 623.348-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1034.99 396.88v226.5" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1039.89 623.38-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path fill="#fff" d="M1274.477 234.347h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1274.477 234.347)"
            >
                <tspan
                    x={14.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV208C"}
                </tspan>
            </text>
            <path fill="#fff" d="M1274.477 278.493h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1274.477 278.493)"
            >
                <tspan
                    x={14.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV207C"}
                </tspan>
            </text>
            <path fill="#fff" d="M1274.477 321.064h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1274.477 321.064)"
            >
                <tspan
                    x={14.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV206C"}
                </tspan>
            </text>
            <path fill="#fff" d="M1274.477 361.912h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1274.477 361.912)"
            >
                <tspan
                    x={14.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV205C"}
                </tspan>
            </text>
            <path fill="#fff" d="M1274.477 401.661h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1274.477 401.661)"
            >
                <tspan
                    x={14.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV204C"}
                </tspan>
            </text>
            <path fill="#fff" d="M1274.477 444.3h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1274.477 444.3)"
            >
                <tspan
                    x={14.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV203C"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1274.474 313.068h101.4M1273.615 354.537h90.2M1274.474 396.97h79.1"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1375.889 313.068v310.4" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1380.789 623.468-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1363.856 354.537v268.9" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1368.756 623.437-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1353.543 396.97v226.5" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1358.443 623.47-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(454.435 489.219)"
            >
                <tspan
                    x={31.5}
                    y={21.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV210A"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(775.753 488.61)"
            >
                <tspan
                    x={31.5}
                    y={21.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV210B"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1096.066 488.643)"
            >
                <tspan
                    x={31}
                    y={21.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV210C"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M307.04 866.538v155.3"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M702.385 438.425v224.5" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m707.285 662.925-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M509.448 645.693h821.2M652.537 659.195h868M701.525 673.66h638.6M954.77 437.124h63.6"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1018.368 437.124v224.5" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1023.268 661.624-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1274.182 438.112h63.6"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1337.78 438.112v224.5" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1342.68 662.612-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M637.926 524.18h51.6"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M689.493 524.18v110.8" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m694.393 634.98-4.9 9.7-4.9-9.7h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M953.832 524.662h51.6"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1005.4 524.662v110.8" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1010.3 635.462-4.9 9.7-4.9-9.7h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1276.193 524.662h51.6"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1327.76 524.662v110.8" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1332.66 635.462-4.9 9.7-4.9-9.7h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M637.926 610.01h16.3"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M653.396 610.01v38.4" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m658.296 648.41-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M954.692 609.046h16.3"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M970.162 609.046v38.4" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m975.062 647.446-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1276.193 610.01h16.3"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1291.663 610.01v38.4" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1296.563 648.41-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M638.786 566.613h28.4M667.147 566.613v322.1M354.748 888.72h312.4M955.92 564.198h28.4M984.283 564.198v123M1276.193 565.649h28.4M1304.555 565.649v136M676.601 687.162h308.5M689.493 702.592h616.2M355.607 928.26h321M676.601 928.26v-241.1M355.607 967.802h333.9M689.493 967.802v-266.2M356.028 1008.307h100.6M806.375 745.025v-13.5M806.375 731.524h357.5M1163.907 731.524v-58.8"
            />
            <path fill="#fff" d="M818.837 745.025h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(818.837 745.025)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PAH201"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M806.377 916.687v22.2M806.377 938.868h85.1M891.463 938.868v-192.9M891.463 745.99h93.7"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M985.142 745.025v62.5" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m990.042 807.525-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M948.722 810.416v-7.7h-3.8l7.7-11.4 7.6 11.4h-3.8v7.7h-7.7zM1024.14 789.394v8.4h3.8l-7.7 12.6-7.6-12.6h3.8v-8.4h7.7z"
            />
            <path fill="#fff" d="M917.206 750.704h63.9v35.8h-63.9v-35.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(917.206 750.704)"
            >
                <tspan
                    x={7.9}
                    y={22.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"To Vacuum"}
                </tspan>
            </text>
            <path fill="#fff" d="M989.21 748.775h63.9v35.8h-63.9v-35.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(989.21 748.775)"
            >
                <tspan
                    x={8.9}
                    y={22.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"From D301"}
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
                transform="translate(958.07 870.015)"
            >
                <tspan
                    x={21.7}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F203"}
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
                transform="translate(283.695 742.242)"
            >
                <tspan
                    x={21.2}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D203"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M541.444 183.75h96.7v44.4h-96.7v-44.4z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M544.467 187.61h90.3v17.9h-90.3v-17.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(544.467 187.61)"
            >
                <tspan
                    x={31.7}
                    y={13.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PT201"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M544.467 207.043h90.3v17.2h-90.3v-17.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(544.467 207.043)"
            >
                <tspan
                    x={43.7}
                    y={13.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"-"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M857.985 179.901h96.7v44.4h-96.7v-44.4z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M861.008 183.76h90.3v17.9h-90.3v-17.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(861.008 183.76)"
            >
                <tspan
                    x={31.7}
                    y={13.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PT202"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M861.008 203.193h90.3v17.2h-90.3v-17.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(861.008 203.193)"
            >
                <tspan
                    x={43.7}
                    y={13.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"-"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1177.698 179.901h96.7v44.4h-96.7v-44.4z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1180.721 183.76h90.3v17.9h-90.3v-17.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1180.721 183.76)"
            >
                <tspan
                    x={31.7}
                    y={13.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PT203"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1180.721 203.193h90.3v17.2h-90.3v-17.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1180.721 203.193)"
            >
                <tspan
                    x={43.7}
                    y={13.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"-"}
                </tspan>
            </text>
            <path
                fill="#ffc37c"
                stroke="#868686"
                d="M512.816 192.229c0-7.3 5.4-13.3 12.2-13.3 6.7 0 12.1 6 12.1 13.3 0 7.4-5.4 13.4-12.1 13.4-6.8 0-12.2-6-12.2-13.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(512.816 178.929)"
            >
                <tspan
                    x={6.2}
                    y={17.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PS"}
                </tspan>
            </text>
            <path
                fill="url(#w)"
                d="M0 0h5.7v1.1H0V0z"
                transform="translate(521.427 202.521)"
            />
            <path
                fill="url(#w)"
                d="M0 0h4.2v10.2H0V0z"
                transform="translate(522.168 203.643)"
            />
            <path
                fill="#c2c2c2"
                stroke="#3c5c74"
                d="M514.231 200.671h20.1s.1 0 .1.1v1.8H514.131v-1.8c0-.1 0-.1.1-.1z"
            />
            <path
                fill="#ffc37c"
                stroke="#868686"
                d="M826.428 190.522c0-7.3 5.4-13.3 12.2-13.3 6.7 0 12.1 6 12.1 13.3 0 7.4-5.4 13.4-12.1 13.4-6.8 0-12.2-6-12.2-13.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(826.428 177.222)"
            >
                <tspan
                    x={6.2}
                    y={17.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PS"}
                </tspan>
            </text>
            <path
                fill="url(#w)"
                d="M0 0h5.7v1.1H0V0z"
                transform="translate(835.039 200.814)"
            />
            <path
                fill="url(#w)"
                d="M0 0h4.2v10.2H0V0z"
                transform="translate(835.78 201.936)"
            />
            <path
                fill="#c2c2c2"
                stroke="#3c5c74"
                d="M827.843 198.964h20.1s.1 0 .1.1v1.8H827.743v-1.8c0-.1 0-.1.1-.1z"
            />
            <path
                fill="#ffc37c"
                stroke="#868686"
                d="M1147.925 189.343c0-7.3 5.4-13.3 12.2-13.3 6.7 0 12.1 6 12.1 13.3 0 7.4-5.4 13.4-12.1 13.4-6.8 0-12.2-6-12.2-13.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1147.925 176.043)"
            >
                <tspan
                    x={6.2}
                    y={17.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PS"}
                </tspan>
            </text>
            <path
                fill="url(#w)"
                d="M0 0h5.7v1.1H0V0z"
                transform="translate(1156.528 199.636)"
            />
            <path
                fill="url(#w)"
                d="M0 0h4.2v10.2H0V0z"
                transform="translate(1157.27 200.758)"
            />
            <path
                fill="#c2c2c2"
                stroke="#3c5c74"
                d="M1149.332 197.786h20.1s.1 0 .1.1v1.8H1149.232v-1.8c0-.1 0-.1.1-.1z"
            />
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(612.251 604.584)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(617.288 583.39)"
            />
            <path
                fill="#b4b5b5"
                d="M618.064 584.11h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M618.322 584.704h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(623.34 596.334)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(614.203 602.453)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(634.616 602.453)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(615.79 604.595)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(634.253 604.595)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(616.598 588.692)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(618.997 582.422)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(619.446 581.494)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(616.598 592.679)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(609.49 593.473)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 609.208 602.555)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 609.493 593.473)"
            />
            <path fill="#fff" d="M362.635 169.397h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(362.635 169.397)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SV213A"}
                </tspan>
            </text>
            <path fill="#fff" d="M703.244 175.42h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(703.244 175.42)"
            >
                <tspan
                    x={15.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SV213B"}
                </tspan>
            </text>
            <path fill="#fff" d="M1024.07 174.66h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1024.07 174.66)"
            >
                <tspan
                    x={14.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SV213C"}
                </tspan>
            </text>
            <path fill="#fff" d="M369.134 855.63h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(369.134 855.63)"
            >
                <tspan
                    x={17.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G204A"}
                </tspan>
            </text>
            <path fill="#fff" d="M369.134 895.217h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(369.134 895.217)"
            >
                <tspan
                    x={17.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G204A"}
                </tspan>
            </text>
            <path fill="#fff" d="M368.274 934.757h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(368.274 934.757)"
            >
                <tspan
                    x={17.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G204A"}
                </tspan>
            </text>
            <path fill="#fff" d="M368.274 975.564h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(368.274 975.564)"
            >
                <tspan
                    x={17.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G204A"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M990.299 954.3v32.8"
            />
            <path
                fill="url(#x)"
                d="M0 0h94.8v60.2H0V0z"
                transform="translate(1513.594 847.397)"
            />
            <path
                fill="url(#x)"
                d="M.4 0h104c.2 0 .5.1.5.2v2.6c0 .1-.3.2-.5.2H.4C.2 3 0 2.9 0 2.8V.2C0 .1.2 0 .4 0z"
                transform="translate(1508.544 844.865)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h100.8c.3 0 .5.1.5.2v2.2c0 .1-.2.2-.5.2H.5c-.3 0-.5-.1-.5-.2V.2C0 .1.2 0 .5 0z"
                transform="translate(1510.085 906.965)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h100.8c.3 0 .5.1.5.2v2.2c0 .1-.2.2-.5.2H.5c-.3 0-.5-.1-.5-.2V.2C0 .1.2 0 .5 0z"
                transform="translate(1510.085 909.541)"
            />
            <path
                fill="url(#x)"
                d="M0 0h95L54.7 24H40.4L0 0z"
                transform="translate(1512.875 912.162)"
            />
            <path
                fill="url(#x)"
                d="M0 5.2h14.3V0H0v5.2z"
                transform="translate(1553.233 936.172)"
            />
            <path
                fill="url(#y)"
                d="M.5 0h100.8c.3 0 .5 0 .5.1v.6c0 .1-.2.1-.5.1H.5C.2.8 0 .8 0 .7V.1C0 0 .2 0 .5 0z"
                transform="translate(1510.085 909.18)"
            />
            <path
                fill="url(#y)"
                d="M0 0h94.8v1.2H0V0z"
                transform="translate(1513.594 847.954)"
            />
            <path
                fill="url(#y)"
                d="M0 0h94.8v.8H0V0z"
                transform="translate(1513.594 906.02)"
            />
            <path
                fill="url(#y)"
                d="M0 0h95l-.9.7-93 .1L0 0z"
                transform="translate(1512.875 912.067)"
            />
            <path
                fill="url(#f)"
                d="M0 4.4h48.6V0H0v4.4z"
                transform="translate(1534.481 759.232)"
            />
            <path
                fill="url(#g)"
                d="M0 1.1h48.6V0H0v1.1z"
                transform="translate(1534.481 762.553)"
            />
            <path
                fill="url(#f)"
                d="M0 4.4h48.6V0H0v4.4z"
                transform="translate(1534.481 823.676)"
            />
            <path
                fill="url(#g)"
                d="M0 1.3h48.6V0H0v1.3z"
                transform="translate(1534.481 823.59)"
            />
            <path
                fill="url(#f)"
                d="M4.7 0h48.9c2.6 0 4.7 1.9 4.7 4.3v51.5c0 2.4-2.1 4.3-4.7 4.3H4.7c-2.6 0-4.7-1.9-4.7-4.3V4.3C0 1.9 2.1 0 4.7 0z"
                transform="translate(1529.606 763.608)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1528.74 782.412)"
            >
                <tspan
                    x={21.7}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F200"}
                </tspan>
            </text>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1519.717 659.198v175.4" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1524.617 834.598-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1560.97 825.073v13.3" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1565.87 838.373-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1591.492 840.07v-8.4h-3.8l7.7-12.6 7.6 12.6h-3.8v8.4h-7.7z"
            />
            <path fill="#fff" d="M1589.885 790.138h50.2v21h-50.2v-21z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1589.885 790.138)"
            >
                <tspan
                    x={10.1}
                    y={15}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"to ATM"}
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
                transform="translate(1529.609 861.528)"
            >
                <tspan
                    x={21.7}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F206"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1555.395 757.454v-8.4h-3.8l7.7-12.6 7.6 12.6h-3.8v8.4h-7.7z"
            />
            <path fill="#fff" d="M1570.118 722.952h50.2v21h-50.2v-21z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1570.118 722.952)"
            >
                <tspan
                    x={10.1}
                    y={15}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"to ATM"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1715.67 771.067v-136.9M1587.613 771.067h128.9"
            />
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M1582.035 860.582c0-6.1 4.6-11.1 10.4-11.1 5.7 0 10.3 5 10.3 11.1s-4.6 11.1-10.3 11.1c-5.8 0-10.4-5-10.4-11.1z"
            />
            <path fill="#fff" d="M1611.036 845.986h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1611.036 845.986)"
            >
                <tspan
                    x={15.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LAH212"}
                </tspan>
            </text>
            <path
                fill="#bcbcbc"
                stroke="#000"
                d="M1582.035 895.492c0-6.1 4.6-11.1 10.4-11.1 5.7 0 10.3 5 10.3 11.1s-4.6 11.1-10.3 11.1c-5.8 0-10.4-5-10.4-11.1z"
            />
            <path fill="#fff" d="M1611.036 880.897h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1611.036 880.897)"
            >
                <tspan
                    x={16.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LSL212"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 1575.143 975.654)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 1575.431 984.347)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(-90 1279.666 -295.358)"
            />
            <path
                fill="#7c7c7c"
                d="M1574.467 983.98v-9.5c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.5c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.2H0V0z"
                transform="translate(1583.6 986.78)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.3H0L3.3 0z"
                transform="translate(1584.436 981.636)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 1591.427 965.077)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.2 0 9.4 0s9.4 3.7 9.4 8.3c0 4.6-4.2 8.3-9.4 8.3S0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 1599.322 983.835)"
            />
            <path
                fill="#7c7c7c"
                d="M1591.018 982.247c3.8 0 6.9-3.5 6.9-7.8s-3.1-7.8-6.9-7.8c-3.8 0-6.9 3.5-6.9 7.8s3.1 7.8 6.9 7.8z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1590.988 971.619c1.4 0 2.5 1.3 2.5 2.8 0 1.6-1.1 2.8-2.5 2.8s-2.5-1.2-2.5-2.8c0-1.5 1.1-2.8 2.5-2.8z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.2 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 310.354 1282.588)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 1606.338 963.546)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(90 321.58 1285.165)"
            />
            <path
                fill="#7c7c7c"
                d="M1607.303 963.913v9.5c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.5c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M1558.693 977.505h15.9v4.8h-15.9v-4.8z" />
            <path
                fill="url(#k)"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 1576.002 1015.242)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 1576.29 1023.935)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(-90 1299.89 -275.994)"
            />
            <path
                fill="#7c7c7c"
                d="M1575.326 1023.568v-9.5c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v9.5c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.2H0V0z"
                transform="translate(1584.459 1026.369)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.3H0L3.3 0z"
                transform="translate(1585.295 1021.224)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.2v15H0V0z"
                transform="matrix(0 1 1 0 1592.287 1004.665)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.2 0 9.4 0s9.4 3.7 9.4 8.3c0 4.6-4.2 8.3-9.4 8.3S0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 1600.182 1023.423)"
            />
            <path
                fill="#7c7c7c"
                d="M1591.877 1021.835c3.8 0 6.9-3.5 6.9-7.8s-3.1-7.8-6.9-7.8c-3.8 0-6.9 3.5-6.9 7.8s3.1 7.8 6.9 7.8z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1591.848 1011.207c1.4 0 2.5 1.3 2.5 2.8 0 1.6-1.1 2.8-2.5 2.8s-2.5-1.2-2.5-2.8c0-1.5 1.1-2.8 2.5-2.8z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.2 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="rotate(90 290.99 1302.812)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 1607.197 1003.134)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="rotate(90 302.216 1305.389)"
            />
            <path
                fill="#7c7c7c"
                d="M1608.162 1003.501v9.5c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-9.5c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M1559.552 1017.093h15.9v4.8h-15.9v-4.8z" />
            <path fill="#fff" d="M1619.845 975.574h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1619.845 975.574)"
            >
                <tspan
                    x={17.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G214B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1690.411 822.18v186.1M1607.045 1008.269h82.8M1559.251 942.728v78.9"
            />
            <path fill="#fff" d="M1620.18 934.41h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1620.18 934.41)"
            >
                <tspan
                    x={17.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G214A"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1607.38 967.108h136.7M1606.52 822.18h83.4"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="M1607.38 822.18v13.3" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1612.28 835.48-4.9 9.8-4.9-9.8h9.8"
                />
            </g>
            <path
                fill="url(#q)"
                d="M0 0h25.9v9.4H0V0z"
                transform="translate(1702.887 961.358)"
            />
            <path
                fill="url(#r)"
                d="M.2 0h15.5s.1.1.1.2v12.6c0 .1-.1.2-.1.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1707.924 940.165)"
            />
            <path
                fill="#b4b5b5"
                d="M1708.7 940.883h14.3c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-11.2c0-.1.1-.2.2-.2z"
            />
            <path fill="#7c7c7c" d="M1708.958 941.478h13.8v10.4h-13.8v-10.4z" />
            <path
                fill="url(#s)"
                d="M0 0h3.7v8.5s0 .5-1.8.5S0 8.5 0 8.5V0z"
                transform="translate(1713.976 953.108)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1704.838 959.227)"
            />
            <path
                fill="url(#q)"
                d="M.3 0h.9c.2 0 .4.2.4.4v12.9c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(1725.251 959.227)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1706.426 961.37)"
            />
            <path
                fill="url(#t)"
                d="M0 0h.4v9.4H0V0z"
                transform="translate(1724.889 961.37)"
            />
            <path
                fill="url(#u)"
                d="M0 0h17.2v2.4H0V0z"
                transform="translate(1707.234 945.466)"
            />
            <path
                fill="url(#s)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(1709.632 939.196)"
            />
            <path
                fill="url(#s)"
                d="M0 0h.9v1H0V0z"
                transform="translate(1710.082 938.267)"
            />
            <path
                fill="url(#q)"
                d="M0 0h.7v2.4H0V0z"
                transform="translate(1707.234 949.453)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.2v.8H0V0z"
                transform="translate(1700.126 950.247)"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.9v.7H0V0z"
                transform="matrix(0 -1 -1 0 1699.843 959.329)"
            />
            <path
                fill="url(#v)"
                d="M0 0s.5 0 .8.4c.3.3.2.8.2.8H.3S.3.9 0 .8V0z"
                transform="matrix(-1 0 0 1 1700.128 950.247)"
            />
            <path fill="#fff" d="M1695.769 976.635h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1695.769 976.635)"
            >
                <tspan
                    x={18.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV214"}
                </tspan>
            </text>
            <path
                fill="#ffc000"
                stroke="#ffc000"
                d="M1747.444 961.657h10.4v-4.3l15.6 8.6-15.6 8.6v-4.3h-10.4v-8.6z"
            />
            <path fill="#fff" d="M1775.827 952.534h60.6v26.9h-60.6v-26.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1775.827 952.534)"
            >
                <tspan
                    x={4.3}
                    y={17.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"To D202"}
                </tspan>
            </text>
            <path
                fill="#ffc000"
                stroke="#ffc000"
                d="M298.619 117.824h-10.4v4.3l-15.6-8.6 15.6-8.6v4.3h10.4v8.6z"
            />
            <path fill="#fff" d="M200.048 101.939h68.3v26.9h-68.3v-26.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(200.048 101.939)"
            >
                <tspan
                    x={16.6}
                    y={17.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"To D203"}
                </tspan>
            </text>
            <path
                fill="#ffc000"
                stroke="#ffc000"
                d="M465.236 1004.149h10.4v-4.3l15.6 8.6-15.6 8.6v-4.3h-10.4v-8.6z"
            />
            <path fill="#fff" d="M491.236 995.026h68.3v26.9h-68.3v-26.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(491.236 995.026)"
            >
                <tspan
                    x={16.6}
                    y={17.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"To D202"}
                </tspan>
            </text>
            <path
                fill="#ffc000"
                stroke="#ffc000"
                d="M994.154 995.074v11.6h3.8l-7.7 17.5-7.6-17.5h3.8v-11.6h7.7z"
            />
            <path fill="#fff" d="M940.689 1033.495h96.9v29.1h-96.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(940.689 1033.495)"
            >
                <tspan
                    x={20.5}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO G301 A/B"}
                </tspan>
            </text>
            <path
                fill="url(#x)"
                d="M0 0h94.8v60.2H0V0z"
                transform="translate(1222.243 835.833)"
            />
            <path
                fill="url(#x)"
                d="M.4 0h104c.2 0 .5.1.5.2v2.6c0 .1-.3.2-.5.2H.4C.2 3 0 2.9 0 2.8V.2C0 .1.2 0 .4 0z"
                transform="translate(1217.192 833.3)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h100.8c.3 0 .5.1.5.2v2.2c0 .1-.2.2-.5.2H.5c-.3 0-.5-.1-.5-.2V.2C0 .1.2 0 .5 0z"
                transform="translate(1218.733 895.401)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h100.8c.3 0 .5.1.5.2v2.2c0 .1-.2.2-.5.2H.5c-.3 0-.5-.1-.5-.2V.2C0 .1.2 0 .5 0z"
                transform="translate(1218.733 897.977)"
            />
            <path
                fill="url(#x)"
                d="M0 0h95L54.7 24H40.4L0 0z"
                transform="translate(1221.523 900.598)"
            />
            <path
                fill="url(#x)"
                d="M0 5.2h14.3V0H0v5.2z"
                transform="translate(1261.882 924.608)"
            />
            <path
                fill="url(#y)"
                d="M.5 0h100.8c.3 0 .5 0 .5.1v.6c0 .1-.2.1-.5.1H.5C.2.8 0 .8 0 .7V.1C0 0 .2 0 .5 0z"
                transform="translate(1218.733 897.617)"
            />
            <path
                fill="url(#y)"
                d="M0 0h94.8v1.2H0V0z"
                transform="translate(1222.243 836.39)"
            />
            <path
                fill="url(#y)"
                d="M0 0h94.8v.8H0V0z"
                transform="translate(1222.243 894.456)"
            />
            <path
                fill="url(#y)"
                d="M0 0h95l-.9.7-93 .1L0 0z"
                transform="translate(1221.523 900.503)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1238.257 849.964)"
            >
                <tspan
                    x={21.7}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F210"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M0 0h7.2v15H0V0z"
                transform="rotate(90 143.56 1106.101)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="rotate(-90 1110.304 -139.07)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="matrix(0 -1 -1 0 1249.78 971.195)"
            />
            <path
                fill="#7c7c7c"
                d="M1250.338 970.867v-9.5c0-.1.1-.2.1-.2.1 0 .1.1.1.2v9.5c0 .1 0 .2-.1.2 0 0-.1-.1-.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.2H0V0z"
                transform="matrix(-1 0 0 1 1241.205 973.668)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.3H0L3.3 0z"
                transform="matrix(-1 0 0 1 1240.368 968.523)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.2v15H0V0z"
                transform="rotate(90 140.706 1092.67)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.2 0 9.4 0s9.4 3.7 9.4 8.3c0 4.6-4.2 8.3-9.4 8.3S0 12.9 0 8.3z"
                transform="rotate(-90 1098.102 -127.38)"
            />
            <path
                fill="#7c7c7c"
                d="M1233.786 969.134c-3.8 0-6.9-3.5-6.9-7.8s3.1-7.8 6.9-7.8c3.8 0 6.9 3.5 6.9 7.8s-3.1 7.8-6.9 7.8z"
            />
            <path
                fill="#7c7c7c"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1233.816 958.506c-1.4 0-2.5 1.3-2.5 2.8 0 1.6 1.1 2.8 2.5 2.8s2.5-1.2 2.5-2.8c0-1.5-1.1-2.8-2.5-2.8z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1 0 2.2 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
                transform="matrix(0 1 1 0 1231.862 959.122)"
            />
            <path
                fill="url(#l)"
                d="M.3 0h9.6c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.3C.1 1.3 0 1 0 .6 0 .3.1 0 .3 0z"
                transform="rotate(90 134.017 1084.45)"
            />
            <path
                fill="url(#m)"
                d="M10.1 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h10.1z"
                transform="matrix(0 1 1 0 1218.06 950.472)"
            />
            <path
                fill="#7c7c7c"
                d="M1217.502 950.8v9.5c0 .1-.1.2-.1.2-.1 0-.1-.1-.1-.2v-9.5c0-.1 0-.2.1-.2 0 0 .1.1.1.2z"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1267.9 931.164v36.6M1249.851 966.838h18.9M1198.284 956.23h18.9"
            />
            <path
                fill="#ffc000"
                stroke="#ffc000"
                d="M1202.905 977.55v11.6h3.8l-7.7 17.5-7.6-17.5h3.8v-11.6h7.7z"
            />
            <path fill="#fff" d="M1142.53 1010.236h152.5v43.4h-152.5v-43.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1142.53 1010.236)"
            >
                <tspan
                    x={4.2}
                    y={18.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO BLEACHING & DEODORIZING "}
                </tspan>
                <tspan
                    x={4.2}
                    y={33.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PLANT"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M1199.144 956.23v17.4"
            />
            <path
                fill="#0070c0"
                stroke="#0070c0"
                d="M1696.53 145.21h-10.4v4.3l-15.6-8.6 15.6-8.6v4.3h10.4v8.6z"
            />
            <path fill="#fff" d="M1698.898 127.441h79.5v26.9h-79.5v-26.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1698.898 127.441)"
            >
                <tspan
                    x={4.3}
                    y={17.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"COMP AIR"}
                </tspan>
            </text>
            <path
                fill="red"
                stroke="red"
                d="M1697.39 174.628h-10.4v4.3l-15.6-8.6 15.6-8.6v4.3h10.4v8.6z"
            />
            <path fill="#fff" d="M1699.758 156.86h79.5v26.9h-79.5v-26.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1699.758 156.86)"
            >
                <tspan
                    x={4.3}
                    y={17.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEAM"}
                </tspan>
            </text>
            <path
                fill="url(#z)"
                d="M0 0h196.4v116.2H0V0z"
                transform="translate(1582.03 303.145)"
            />
            <path
                fill="url(#A)"
                d="M0 0h196.4v2.9H0V0z"
                transform="translate(1582.03 307.42)"
            />
            <path
                fill="url(#A)"
                d="M0 0h196.4v2.9H0V0z"
                transform="translate(1582.03 323.514)"
            />
            <path
                fill="url(#A)"
                d="M0 0h196.4v2.9H0V0z"
                transform="translate(1582.03 347.656)"
            />
            <path
                fill="url(#A)"
                d="M0 0h196.4v2.9H0V0z"
                transform="translate(1582.03 355.704)"
            />
            <path
                fill="url(#A)"
                d="M0 0h196.4v2.9H0V0z"
                transform="translate(1582.03 331.562)"
            />
            <path
                fill="url(#A)"
                d="M0 0h196.4v2.9H0V0z"
                transform="translate(1582.03 339.61)"
            />
            <path
                fill="url(#A)"
                d="M0 0h196.4v2.9H0V0z"
                transform="translate(1582.03 315.467)"
            />
            <g fill="url(#A)" transform="translate(1582.03 363.751)">
                <path d="M0 0h196.4v2.9H0V0zM0 8.186h196.4v2.9H0v-2.9zM0 16.518h196.4v2.9H0v-2.9zM0 24.142h196.4v2.9H0v-2.9zM0 32.19h196.4v2.9H0v-2.9zM0 39.952h196.4v2.9H0v-2.9zM0 48.284h196.4v2.9H0v-2.9z" />
            </g>
            <path
                fill="url(#B)"
                d="M0 0h196.4v6.1H0V0z"
                transform="translate(1582.03 418.892)"
            />
            <path
                fill="url(#B)"
                d="M0 0h196.4v6.1H0V0z"
                transform="translate(1582.03 297.566)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1611.034 352.522)"
            >
                <tspan
                    x={27.5}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"VACUUM SYSTEM"}
                </tspan>
            </text>
            <path fill="#fff" d="M1217.192 978.674h48.4v25.1h-48.4v-25.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1217.192 978.674)"
            >
                <tspan
                    x={13.2}
                    y={17}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G210"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M1187.112 854.969h35.2M1187.112 884.865h35.2"
            />
            <path
                fill="red"
                stroke="#ffc000"
                d="M1157.057 850.543h10.4v-4.3l15.6 8.6-15.6 8.6v-4.3h-10.4v-8.6zM1183.08 889.202h-10.4v4.3l-15.6-8.6 15.6-8.6v4.3h10.4v8.6z"
            />
            <path fill="#fff" d="M1093.212 840.291h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1093.212 840.291)"
            >
                <tspan
                    x={27.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEAM"}
                </tspan>
            </text>
            <path fill="#fff" d="M1054.537 870.404h102.5v29.1h-102.5v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1054.537 870.404)"
            >
                <tspan
                    x={34.3}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CONDENSATE"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M1248.132 833.752v-29.9M1293.683 833.752v-29.9"
            />
            <path
                fill="red"
                stroke="#ffc000"
                d="M1251.782 772.827v11.6h3.8l-7.7 17.5-7.6-17.5h3.8v-11.6h7.7zM1297.212 772.827v11.6h3.8l-7.7 17.5-7.6-17.5h3.8v-11.6h7.7z"
            />
            <path fill="#fff" d="M1201.708 743.63h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1201.708 743.63)"
            >
                <tspan
                    x={34.4}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"NaOH"}
                </tspan>
            </text>
            <path fill="#fff" d="M1263.602 743.63h58.4v29.1h-58.4v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1263.602 743.63)"
            >
                <tspan
                    x={21.2}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"WATER"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M1316.888 869.434h26.6"
            />
            <path
                fill="red"
                stroke="#ffc000"
                d="M1374.685 872.808h-10.4v4.3l-15.6-8.6 15.6-8.6v4.3h10.4v8.6z"
            />
            <path fill="#fff" d="M1379.82 832.467h131.4v68.9h-131.4v-68.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1379.82 832.467)"
            >
                <tspan
                    x={4.2}
                    y={31.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FROM BLEACHING & "}
                </tspan>
                <tspan
                    x={4.2}
                    y={46.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"DEODORIZING PLANT"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={2.667}
                d="M511.167 645.693v133.3"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={2.667} d="m510.307 778.021-133.697-.898" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m376.577 782.023-9.766-4.966 9.832-4.834-.066 9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M375.426 707.733h96.7v44.4h-96.7v-44.4z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M378.45 711.593h90.3v17.9h-90.3v-17.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(378.45 711.593)"
            >
                <tspan
                    x={32.2}
                    y={13.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LT201"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M378.45 731.026h90.3v17.2h-90.3v-17.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(378.45 731.026)"
            >
                <tspan
                    x={43.7}
                    y={13.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"-"}
                </tspan>
            </text>
            <g stroke="red">
                <path fill="none" strokeWidth={2.667} d="M193.172 802.13h51.2" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m244.372 797.23 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <g stroke="red">
                <path fill="none" strokeWidth={2.667} d="M193.172 833.956h51.2" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m244.372 829.056 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2.667}
                d="M193.172 802.13v127.3"
            />
            <path
                fill="red"
                stroke="#ffc000"
                d="M189.74 964.968v-11.6h-3.8l7.7-17.5 7.6 17.5h-3.8v11.6h-7.7z"
            />
            <path fill="#fff" d="M156.506 969.894h63.9v29.1h-63.9v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(156.506 969.894)"
            >
                <tspan
                    x={15.9}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEAM"}
                </tspan>
            </text>
            <path
                fill="url(#f)"
                d="M0 4.4h48.6V0H0v4.4z"
                transform="translate(315.906 436.769)"
            />
            <path
                fill="url(#g)"
                d="M0 1.1h48.6V0H0v1.1z"
                transform="translate(315.906 440.09)"
            />
            <path
                fill="url(#f)"
                d="M0 4.4h48.6V0H0v4.4z"
                transform="translate(315.906 501.213)"
            />
            <path
                fill="url(#g)"
                d="M0 1.3h48.6V0H0v1.3z"
                transform="translate(315.906 501.128)"
            />
            <path
                fill="url(#f)"
                d="M4.7 0h48.9c2.6 0 4.7 1.9 4.7 4.3v51.5c0 2.4-2.1 4.3-4.7 4.3H4.7c-2.6 0-4.7-1.9-4.7-4.3V4.3C0 1.9 2.1 0 4.7 0z"
                transform="translate(311.031 441.146)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(307.957 457.135)"
            >
                <tspan
                    x={21.2}
                    y={18.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D207"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#0070c0"
                strokeWidth={2.667}
                d="M372.415 485.285h22.7M395.142 485.285v206.9"
            />
            <g stroke="#0070c0">
                <path fill="none" strokeWidth={2.667} d="M395.142 692.19h-22.9" />
                <path
                    fill="#0070c0"
                    strokeLinecap="round"
                    d="m372.242 697.09-9.8-4.9 9.8-4.9v9.8"
                />
            </g>
            <path fill="#fff" d="M366.341 654.32h85.1v29.1h-85.1v-29.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(366.341 654.32)"
            >
                <tspan
                    x={23.6}
                    y={19.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LASH219"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#0070c0"
                strokeWidth={2.667}
                d="M280.835 633.363v-145.6"
            />
            <g stroke="#0070c0">
                <path fill="none" strokeWidth={2.667} d="M280.835 487.74h23.7" />
                <path
                    fill="#0070c0"
                    strokeLinecap="round"
                    d="m304.535 482.84 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <g stroke="#0070c0">
                <path fill="none" strokeWidth={2.667} d="M188.015 446.271h112.2" />
                <path
                    fill="#0070c0"
                    strokeLinecap="round"
                    d="m300.215 441.371 9.8 4.9-9.8 4.9v-9.8"
                />
            </g>
            <path fill="#fff" d="M121.46 427.125h68.3v40.5h-68.3v-40.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(121.46 427.125)"
            >
                <tspan
                    x={9.6}
                    y={24.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"From  D202"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#0070c0"
                strokeWidth={2.667}
                d="M326.386 432.77V99.07M326.386 99.091h1133.6M1459.994 99.091v224.7M1459.994 323.794h125.5"
            />
        </svg>

    )
}

export default FiltrationHMI