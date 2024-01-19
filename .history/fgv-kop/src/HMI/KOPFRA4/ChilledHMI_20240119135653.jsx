import React from 'react'

const ChilledHMI = (props) => {
    if (!props.data) {
        console.error("Data is undefined or null");
        return null; // or handle accordingly
    }
    let CT = props.data['COOLING TOWER'];
    let FT8 = props.data['FT8'];
    let FT9 = props.data['FT9'];

    // console.log(CT);
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
                    x1={216}
                    x2={-1}
                    y1={3}
                    y2={41}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#849da8" />
                    <stop offset={0.18} stopColor="#b3d1de" />
                    <stop offset={0.29} stopColor="#d7e6ed" />
                    <stop offset={0.46} stopColor="#97b4c0" />
                    <stop offset={0.6} stopColor="#86a0ab" />
                    <stop offset={1} stopColor="#667b84" />
                </linearGradient>
                <linearGradient
                    id="d"
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
                    id="e"
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
                <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#c4c4c4" />
                    <stop offset={0.15} stopColor="#fff" />
                    <stop offset={0.25} stopColor="#fff" />
                    <stop offset={0.44} stopColor="#dfdfdf" />
                    <stop offset={0.6} stopColor="#c7c7c7" />
                    <stop offset={0.8} stopColor="#a8a8a8" />
                    <stop offset={0.97} stopColor="#999" />
                    <stop offset={1} stopColor="#cbcbcb" />
                </linearGradient>
                <linearGradient id="h" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#c4c4c4" />
                    <stop offset={0.15} stopColor="#fff" />
                    <stop offset={0.25} stopColor="#fff" />
                    <stop offset={0.44} stopColor="#dfdfdf" />
                    <stop offset={0.6} stopColor="#c7c7c7" />
                    <stop offset={0.8} stopColor="#a8a8a8" />
                    <stop offset={0.97} stopColor="#999" />
                    <stop offset={1} stopColor="#cbcbcb" />
                </linearGradient>
                <linearGradient id="i" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#4d7ca5" />
                    <stop offset={0.15} stopColor="#78aada" />
                    <stop offset={0.25} stopColor="#c0d3ea" />
                    <stop offset={0.44} stopColor="#598ebc" />
                    <stop offset={0.6} stopColor="#4f7ea7" />
                    <stop offset={0.8} stopColor="#416a8d" />
                    <stop offset={0.97} stopColor="#3b6080" />
                    <stop offset={1} stopColor="#5181ab" />
                </linearGradient>
                <linearGradient id="j" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.03} stopColor="#afda8c" />
                    <stop offset={0.08} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.95} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient id="k" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#6f9f3b" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.44} stopColor="#7fb645" />
                    <stop offset={0.6} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#5e8831" />
                    <stop offset={0.97} stopColor="#567c2c" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="l" x1="100%" x2="0%" y1="0%" y2="0%">
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
                    id="m"
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
                <linearGradient id="n" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#5e7179" />
                    <stop offset={0.15} stopColor="#8a9ea7" />
                    <stop offset={0.25} stopColor="#c6ced1" />
                    <stop offset={0.52} stopColor="#6d828b" />
                    <stop offset={0.69} stopColor="#60737b" />
                    <stop offset={0.8} stopColor="#5a6c74" />
                    <stop offset={0.97} stopColor="#55666d" />
                    <stop offset={1} stopColor="#62767e" />
                </linearGradient>
                <linearGradient id="o" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#5e7179" />
                    <stop offset={0.15} stopColor="#8a9ea7" />
                    <stop offset={0.25} stopColor="#c6ced1" />
                    <stop offset={0.52} stopColor="#6d828b" />
                    <stop offset={0.69} stopColor="#60737b" />
                    <stop offset={0.8} stopColor="#5a6c74" />
                    <stop offset={0.97} stopColor="#55666d" />
                    <stop offset={1} stopColor="#62767e" />
                </linearGradient>
                <linearGradient id="p" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#57686f" />
                    <stop offset={0.01} stopColor="#a3b1b8" />
                    <stop offset={0.03} stopColor="#738992" />
                    <stop offset={0.64} stopColor="#718790" />
                    <stop offset={0.99} stopColor="#6e838c" />
                    <stop offset={1} stopColor="#506067" />
                </linearGradient>
                <linearGradient id="q" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#57686f" />
                    <stop offset={0.01} stopColor="#a3b1b8" />
                    <stop offset={0.03} stopColor="#738992" />
                    <stop offset={0.64} stopColor="#718790" />
                    <stop offset={0.99} stopColor="#6e838c" />
                    <stop offset={1} stopColor="#506067" />
                </linearGradient>
                <linearGradient id="r" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#57686f" />
                    <stop offset={0.01} stopColor="#a3b1b8" />
                    <stop offset={0.02} stopColor="#738992" />
                    <stop offset={0.64} stopColor="#718790" />
                    <stop offset={0.99} stopColor="#6e838c" />
                    <stop offset={1} stopColor="#506067" />
                </linearGradient>
                <linearGradient
                    id="s"
                    x1={3}
                    x2={1}
                    y1={-1}
                    y2={3}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#5e7179" />
                    <stop offset={0.15} stopColor="#8a9ea7" />
                    <stop offset={0.25} stopColor="#c6ced1" />
                    <stop offset={0.44} stopColor="#6d828b" />
                    <stop offset={0.6} stopColor="#60737b" />
                    <stop offset={0.8} stopColor="#506067" />
                    <stop offset={0.97} stopColor="#48575e" />
                    <stop offset={1} stopColor="#62767e" />
                </linearGradient>
                <linearGradient id="t" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#5b6d75" />
                    <stop offset={0.15} stopColor="#8a9ea7" />
                    <stop offset={0.25} stopColor="#c6ced1" />
                    <stop offset={0.52} stopColor="#6d828b" />
                    <stop offset={0.69} stopColor="#60737b" />
                    <stop offset={0.8} stopColor="#5a6c74" />
                    <stop offset={0.92} stopColor="#55666d" />
                    <stop offset={1} stopColor="#62767e" />
                </linearGradient>
                <linearGradient id="u" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#5e7179" />
                    <stop offset={0.15} stopColor="#8a9ea7" />
                    <stop offset={0.25} stopColor="#c6ced1" />
                    <stop offset={0.44} stopColor="#6d828b" />
                    <stop offset={0.6} stopColor="#60737b" />
                    <stop offset={0.8} stopColor="#506067" />
                    <stop offset={0.97} stopColor="#48575e" />
                    <stop offset={1} stopColor="#62767e" />
                </linearGradient>
                <linearGradient
                    id="v"
                    x1={4}
                    x2={2}
                    y1={-1}
                    y2={3}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#5e7179" />
                    <stop offset={0.15} stopColor="#8a9ea7" />
                    <stop offset={0.25} stopColor="#c6ced1" />
                    <stop offset={0.44} stopColor="#6d828b" />
                    <stop offset={0.6} stopColor="#60737b" />
                    <stop offset={0.8} stopColor="#506067" />
                    <stop offset={0.97} stopColor="#48575e" />
                    <stop offset={1} stopColor="#62767e" />
                </linearGradient>
                <linearGradient id="w" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6c818b" />
                    <stop offset={0.15} stopColor="#99b1bb" />
                    <stop offset={0.25} stopColor="#ccd6db" />
                    <stop offset={0.44} stopColor="#7c949f" />
                    <stop offset={0.6} stopColor="#6e848d" />
                    <stop offset={0.8} stopColor="#5c6e76" />
                    <stop offset={0.97} stopColor="#54646c" />
                    <stop offset={1} stopColor="#718790" />
                </linearGradient>
                <linearGradient id="x" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#6c818b" />
                    <stop offset={0.15} stopColor="#99b1bb" />
                    <stop offset={0.25} stopColor="#ccd6db" />
                    <stop offset={0.44} stopColor="#7c949f" />
                    <stop offset={0.6} stopColor="#6e848d" />
                    <stop offset={0.8} stopColor="#5c6e76" />
                    <stop offset={0.97} stopColor="#54646c" />
                    <stop offset={1} stopColor="#718790" />
                </linearGradient>
                <linearGradient id="y" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#7f98a3" />
                    <stop offset={0.15} stopColor="#b3d1de" />
                    <stop offset={0.25} stopColor="#d7e6ed" />
                    <stop offset={0.52} stopColor="#97b4c0" />
                    <stop offset={0.69} stopColor="#86a0ab" />
                    <stop offset={0.8} stopColor="#7e97a1" />
                    <stop offset={0.92} stopColor="#778e98" />
                    <stop offset={1} stopColor="#89a4af" />
                </linearGradient>
                <linearGradient id="z" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#7f98a3" />
                    <stop offset={0.15} stopColor="#b3d1de" />
                    <stop offset={0.25} stopColor="#d7e6ed" />
                    <stop offset={0.52} stopColor="#97b4c0" />
                    <stop offset={0.69} stopColor="#86a0ab" />
                    <stop offset={0.8} stopColor="#7e97a1" />
                    <stop offset={0.92} stopColor="#778e98" />
                    <stop offset={1} stopColor="#89a4af" />
                </linearGradient>
                <linearGradient
                    id="A"
                    x1={216}
                    x2={-1}
                    y1={3}
                    y2={42}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#849da8" />
                    <stop offset={0.18} stopColor="#b3d1de" />
                    <stop offset={0.29} stopColor="#d7e6ed" />
                    <stop offset={0.46} stopColor="#97b4c0" />
                    <stop offset={0.6} stopColor="#86a0ab" />
                    <stop offset={1} stopColor="#667b84" />
                </linearGradient>
                <linearGradient
                    id="B"
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
                    id="C"
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
                <linearGradient id="D" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#fff" stopOpacity={0.15} />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.6} />
                </linearGradient>
                <linearGradient id="E" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6b9a39" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="F" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#6b9a39" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="G" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.01} stopColor="#afda8c" />
                    <stop offset={0.02} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.99} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient id="H" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#c4aa84" />
                    <stop offset={0.15} stopColor="#ffe0b3" />
                    <stop offset={0.25} stopColor="#ffeed7" />
                    <stop offset={0.44} stopColor="#dfc297" />
                    <stop offset={0.6} stopColor="#c7ad86" />
                    <stop offset={0.8} stopColor="#a89170" />
                    <stop offset={0.97} stopColor="#998566" />
                    <stop offset={1} stopColor="#cbb189" />
                </linearGradient>
                <linearGradient id="I" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#c4aa84" />
                    <stop offset={0.15} stopColor="#ffe0b3" />
                    <stop offset={0.25} stopColor="#ffeed7" />
                    <stop offset={0.44} stopColor="#dfc297" />
                    <stop offset={0.6} stopColor="#c7ad86" />
                    <stop offset={0.8} stopColor="#a89170" />
                    <stop offset={0.97} stopColor="#998566" />
                    <stop offset={1} stopColor="#cbb189" />
                </linearGradient>
                <linearGradient id="J" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#c3a06c" />
                    <stop offset={0.15} stopColor="#fed499" />
                    <stop offset={0.25} stopColor="#fee7cc" />
                    <stop offset={0.44} stopColor="#deb77c" />
                    <stop offset={0.6} stopColor="#c6a26e" />
                    <stop offset={0.8} stopColor="#a7895c" />
                    <stop offset={0.97} stopColor="#997d54" />
                    <stop offset={1} stopColor="#cba671" />
                </linearGradient>
                <linearGradient id="K" x1="100%" x2="0%" y1="0%" y2="0%">
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
                    id="f"
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
            <path fill="#000030" d="M1921 1081.001v-1080H1v1080h1920z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#ffc000",
                    fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "30pt",
                }}
                transform="translate(383 8.15)"
            >
                <tspan
                    x={207.5}
                    y={52}
                    style={{
                        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CHILLED WATER TANK FT8 & FT9"}
                </tspan>
            </text>
            <path
                fill="url(#a)"
                d="M0 0h215.9v194H0V0z"
                transform="matrix(-1 0 0 1 505.324 308.91)"
            />
            <path
                fill="url(#b)"
                d="M2.2-.1h220.6c1.2 0 2.2 3 2.2 6.7v12.5c0 3.7-1 6.6-2.2 6.6H2.2C1 25.7 0 22.8 0 19.1V6.6C0 2.9 1-.1 2.2-.1z"
                transform="matrix(-1 0 0 1 509.89 498.27)"
            />
            <path
                fill="url(#c)"
                d="M0 44.6S7.4 1.2 107.5 0c100.1-1.2 108.4 44.6 108.4 44.6H0z"
                transform="matrix(-1 0 0 1 505.324 267.08)"
            />
            <path fill="#adcedc" d="M362.807 293.676h69.2v64.6h-69.2v-64.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(362.807 293.676)"
            >
                <tspan
                    x={23.1}
                    y={38.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT9"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M341.12 435.15h112.5v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M344.448 459.346h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(344.448 459.346)"
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
                d="M344.448 439.202h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(344.448 439.202)"
            >
                <tspan
                    x={38.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI 13"}
                </tspan>
            </text>
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M467.691 508.614c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M468.212 508.535c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M469.43 508.552c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#d)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(470.915 497.238)"
            />
            <path
                fill="#00bd00"
                d="M473.04 508.563c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#e)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(473.645 499.968)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M468.55 508.573c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M474.12 497.664c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#f)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(474.517 500.84)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M474.12 519.408c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(454.63 523.15)"
            >
                <tspan
                    x={9.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LL FT9"}
                </tspan>
            </text>
            <path
                fill="url(#g)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 283.875 106.302)"
            />
            <path
                fill="url(#g)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 281.27 112.391)"
            />
            <path
                fill="url(#g)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 271.546 103.89)"
            />
            <path
                fill="url(#h)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 271.824 113.878)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 274.012 117.436)"
            />
            <path
                fill="url(#h)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 214.125 387.878)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 301.56 87.36)"
            />
            <path
                fill="url(#i)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 268.33 102.547)"
            />
            <path
                fill="url(#j)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 272.59 72.839)"
            />
            <path
                fill="url(#k)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 172.85 321.648)"
            />
            <path
                fill="url(#k)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 172.85 314.785)"
            />
            <path
                fill="url(#k)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 172.85 309.596)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 172.836 347.366)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 173.66 321.649)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 172.85 347.803)"
            />
            <path
                fill="url(#l)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 102.576 177.417)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 172.836 349.686)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 172.85 314.972)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 263.164 95.991)"
            />
            <path
                fill="url(#m)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 102.577 184.29)"
            />
            <g fill="url(#k)" transform="rotate(-90 268.123 100.57)">
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
                transform="translate(144.954 380.633)"
            >
                <tspan
                    x={28.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF9A"}
                </tspan>
            </text>
            <path
                fill="url(#g)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 307.305 214.946)"
            />
            <path
                fill="url(#g)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 304.7 221.035)"
            />
            <path
                fill="url(#g)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 294.976 212.534)"
            />
            <path
                fill="url(#h)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 295.254 222.522)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 297.442 226.08)"
            />
            <path
                fill="url(#h)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 128.91 519.952)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 324.99 196.003)"
            />
            <path
                fill="url(#i)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 291.76 211.191)"
            />
            <path
                fill="url(#j)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 296.02 181.482)"
            />
            <path
                fill="url(#k)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 87.637 453.722)"
            />
            <path
                fill="url(#k)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 87.637 446.86)"
            />
            <path
                fill="url(#k)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 87.637 441.67)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 87.623 479.44)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 88.447 453.723)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 87.636 479.877)"
            />
            <path
                fill="url(#l)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 59.969 243.454)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 87.623 481.76)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 87.637 447.046)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 286.594 204.635)"
            />
            <path
                fill="url(#m)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 59.97 250.327)"
            />
            <g fill="url(#k)" transform="rotate(-90 291.553 209.214)">
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
                transform="translate(59.74 512.707)"
            >
                <tspan
                    x={28}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF9B"}
                </tspan>
            </text>
            <path
                fill="url(#n)"
                d="M.7 0h8.6c.4 0 .7.2.7.4v5.1c0 .2-.3.4-.7.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(565.74 209.966)"
            />
            <path
                fill="url(#n)"
                d="M1.8 0h7.7c1 0 1.8.2 1.8.4v14.2c0 .2-.8.4-1.8.4H1.8c-1 0-1.8-.2-1.8-.4V.4C0 .2.8 0 1.8 0z"
                transform="translate(607.954 204.293)"
            />
            <path
                fill="url(#n)"
                d="M1 0h4.3c.6 0 1 .2 1 .4v14.2c0 .2-.4.4-1 .4H1c-.6 0-1-.2-1-.4V.4C0 .2.4 0 1 0z"
                transform="translate(728.036 204.293)"
            />
            <path
                fill="url(#o)"
                d="M.7 0h3.4c.4 0 .7.2.7.4v42.4c0 .2-.3.4-.7.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(578.367 192.73)"
            />
            <path
                fill="url(#n)"
                d="M0 0h34.2v1.9H0V0z"
                transform="translate(722.762 165.721)"
            />
            <path
                fill="url(#o)"
                d="M.7 0h22.9c.4 0 .8.2.8.4v8.4c0 .3-.4.4-.8.4H.7c-.4 0-.7-.1-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(699.822 162.583)"
            />
            <path
                fill="url(#p)"
                d="M.7 0h66.4c.4 0 .7.2.7.5v51.9c0 .3-.3.5-.7.5H.7c-.4 0-.7-.2-.7-.5V.5C0 .2.3 0 .7 0z"
                transform="translate(754.9 183.131)"
            />
            <path
                fill="url(#n)"
                d="M.7 0h109.7c.4 0 .7.2.7.4v18.2c0 .2-.3.4-.7.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(617.595 202.289)"
            />
            <path
                fill="url(#n)"
                d="M.7 0h2.4c.4 0 .8.2.8.4v21.3c0 .3-.4.5-.8.5H.7c-.4 0-.7-.2-.7-.5V.4C0 .2.3 0 .7 0z"
                transform="translate(621.75 200.72)"
            />
            <path
                fill="url(#p)"
                d="M0 0h69.4v18.2H0V0z"
                transform="translate(625.607 208.484)"
            />
            <path
                fill="url(#p)"
                d="M0 0h69.4v4.8H0V0z"
                transform="translate(625.607 203.771)"
            />
            <path
                fill="url(#p)"
                d="M0 0h69.4v6.9H0V0z"
                transform="translate(625.607 196.964)"
            />
            <path
                fill="url(#q)"
                d="M.7 0h20.2c.5 0 .8.2.8.4v37.2c0 .3-.3.5-.8.5H.7c-.4 0-.7-.2-.7-.5V.4C0 .2.3 0 .7 0z"
                transform="translate(733.166 197.312)"
            />
            <path
                fill="url(#r)"
                d="M.7 0H228c.4 0 .8.2.8.4v59.2c0 .2-.4.4-.8.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(593.965 235.273)"
            />
            <path
                fill="url(#n)"
                d="M.7 0h4.1c.4 0 .8.2.8.4v23.8c0 .3-.4.5-.8.5H.7c-.4 0-.7-.2-.7-.5V.4C0 .2.3 0 .7 0z"
                transform="translate(603.993 200.585)"
            />
            <path
                fill="url(#n)"
                d="M.7 0h12.7c.4 0 .7.2.7.4v19.9c0 .2-.3.4-.7.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(589.88 202.112)"
            />
            <path
                fill="url(#n)"
                d="M.7 0h13.8c.4 0 .7.2.7.4V12c0 .2-.3.4-.7.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(574.653 206.693)"
            />
            <path
                fill="url(#o)"
                d="M0 0h64.5L43.8 22H21L0 0z"
                transform="translate(679.754 180.322)"
            />
            <path
                fill="url(#o)"
                d="M0 8.4h65.2V0H0v8.4z"
                transform="translate(679.424 171.886)"
            />
            <path
                fill="url(#o)"
                d="M.8 0h67c.4 0 .8.2.8.4v.5c0 .2-.4.4-.8.4H.8c-.5 0-.8-.2-.8-.4V.4C0 .2.3 0 .8 0z"
                transform="translate(677.713 170.587)"
            />
            <path
                fill="url(#n)"
                d="M.7 0h12.2c.4 0 .7.2.7.4v23.1c0 .2-.3.4-.7.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(754.869 159.27)"
            />
            <path
                fill="url(#n)"
                d="M.7 0H4c.4 0 .7.2.7.4v5.8H0V.4C0 .2.3 0 .7 0z"
                transform="translate(727.525 164.328)"
            />
            <path
                fill="url(#n)"
                d="M.7 0H4c.4 0 .7.2.7.4v5.8H0V.4C0 .2.3 0 .7 0z"
                transform="translate(739.846 164.328)"
            />
            <path
                fill="url(#p)"
                d="M.7 0h57.2c.4 0 .8.2.8.4v47.2c0 .2-.4.4-.8.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(758.118 175.277)"
            />
            <path
                fill="url(#q)"
                d="M.7 0h20.8c.5 0 .8.2.8.4V26c0 .2-.3.4-.8.4H.7c-.4 0-.7-.2-.7-.4V.4C0 .2.3 0 .7 0z"
                transform="translate(599.536 208.97)"
            />
            <path
                fill="url(#p)"
                d="M0 0h69.4v.6H0V0z"
                transform="translate(625.606 208.293)"
            />
            <g fill="url(#q)" transform="translate(632.706 206.839)">
                <path d="M.088 0h7.8c.1 0 .1.1.1.2v3.1c0 .1 0 .2-.1.2h-7.8s-.1-.1-.1-.2V.2c0-.1.1-.2.1-.2z" />
                <path d="M.088 1.521H7.988v.4H-.012v-.4h.1z" />
            </g>
            <g fill="url(#q)" transform="translate(679.424 206.839)">
                <path d="M.088 0h7.8c.1 0 .1.1.1.2v3.1c0 .1 0 .2-.1.2h-7.8s-.1-.1-.1-.2V.2c0-.1.1-.2.1-.2z" />
                <path d="M.088 1.521H7.988v.4H-.012v-.4h.1z" />
            </g>
            <g fill="url(#s)" transform="translate(769.354 199.191)">
                <path d="M.002 1.206c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2zM8.009 1.206c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2zM16.031 1.206c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2zM24.021 1.206c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2zM32.028 1.206c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2z" />
            </g>
            <path
                fill="url(#t)"
                d="M8.5 0c.4.2.3.9 1 1.6.6.7 1.8.9 1.8 1.3s-1.2.7-1.8 1.3c-.6.6-.4 1.4-1 1.6-.7.2-1.4-.3-2.9-.3-1.4 0-2.2.5-2.8.3-.5-.2-.3-.8-1-1.6C1.1 3.5 0 3.3 0 2.9s1-.6 1.8-1.3c.8-.8.6-1.4 1-1.6.4-.1 1.3.3 2.9.3C7.3.3 8-.1 8.5 0z"
                transform="translate(605.022 212.41)"
            />
            <path
                fill="#7d959f"
                d="M613.329 212.563c.4.2.3.8.9 1.5.7.7 1.8.9 1.8 1.3 0 .3-1.1.6-1.7 1.2-.6.6-.4 1.3-1 1.5-.6.2-1.3-.3-2.7-.3-1.3 0-2.1.5-2.6.3s-.3-.8-1-1.5c-.7-.6-1.7-.8-1.7-1.2 0-.4 1-.6 1.7-1.3.7-.7.6-1.4 1-1.5.4-.1 1.2.3 2.7.3 1.5 0 2.2-.4 2.6-.3z"
            />
            <path
                fill="#7d959f"
                stroke="#717070"
                d="M607.203 215.285c0-1.1 1.6-2 3.5-2s3.4.9 3.4 2c0 1.2-1.5 2.1-3.4 2.1s-3.5-.9-3.5-2.1z"
            />
            <path
                fill="#7d959f"
                d="M610.802 215.46c0-1-1.8-1.9-.1-1.9 1.6 0 3 .8 3 1.8 0 .9-1.4 1.7-3 1.7-1.7 0 .1-.6.1-1.6z"
            />
            <path
                fill="url(#t)"
                d="m3.8 0 1.3 1.3-1.3 1.3H1.3L0 1.3 1.3 0h2.5z"
                transform="translate(601.465 239.114)"
            />
            <path
                fill="#7d959f"
                d="M602.599 240.515c0-.5.6-.9 1.5-.9.8 0 1.4.4 1.4.9 0 .4-.6.8-1.4.8-.9 0-1.5-.4-1.5-.8z"
            />
            <path
                fill="url(#t)"
                d="m3.8 0 1.3 1.3-1.3 1.3H1.3L0 1.3 1.3 0h2.5z"
                transform="translate(601.465 288.856)"
            />
            <path
                fill="#7d959f"
                d="M602.599 290.257c0-.5.6-.9 1.5-.9.8 0 1.4.4 1.4.9 0 .4-.6.8-1.4.8-.9 0-1.5-.4-1.5-.8z"
            />
            <path
                fill="url(#t)"
                d="m3.8 0 1.3 1.3-1.3 1.3H1.3L0 1.3 1.3 0h2.5z"
                transform="translate(808.452 239.114)"
            />
            <path
                fill="#7d959f"
                d="M809.585 240.515c0-.5.6-.9 1.5-.9.8 0 1.4.4 1.4.9 0 .4-.6.8-1.4.8-.9 0-1.5-.4-1.5-.8z"
            />
            <path
                fill="url(#t)"
                d="m3.8 0 1.3 1.3-1.3 1.3H1.3L0 1.3 1.3 0h2.5z"
                transform="translate(808.452 288.856)"
            />
            <path
                fill="#7d959f"
                d="M809.585 290.257c0-.5.6-.9 1.5-.9.8 0 1.4.4 1.4.9 0 .4-.6.8-1.4.8-.9 0-1.5-.4-1.5-.8z"
            />
            <path
                fill="url(#t)"
                d="m3.8 0 1.3 1.3-1.3 1.3H1.3L0 1.3 1.3 0h2.5z"
                transform="translate(704.958 239.114)"
            />
            <path
                fill="#7d959f"
                d="M706.092 240.515c0-.5.6-.9 1.5-.9.8 0 1.4.4 1.4.9 0 .4-.6.8-1.4.8-.9 0-1.5-.4-1.5-.8z"
            />
            <path
                fill="url(#t)"
                d="m3.8 0 1.3 1.3-1.3 1.3H1.3L0 1.3 1.3 0h2.5z"
                transform="translate(704.958 288.856)"
            />
            <path
                fill="#7d959f"
                d="M706.092 290.257c0-.5.6-.9 1.5-.9.8 0 1.4.4 1.4.9 0 .4-.6.8-1.4.8-.9 0-1.5-.4-1.5-.8z"
            />
            <g fill="url(#s)" transform="translate(769.354 206.673)">
                <path d="M.002 1.202c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2zM8.009 1.202c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2zM16.031 1.202c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2zM24.021 1.202c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2zM32.028 1.202c0-.7.9-1.2 2.1-1.2 1.1 0 2 .5 2 1.2s-.9 1.2-2 1.2c-1.2 0-2.1-.5-2.1-1.2z" />
            </g>
            <g fill="#7d959f" stroke="#000">
                <path d="M768.517 182.49h15.4v10.1h-15.4v-10.1z" />
                <path d="M770.186 183.471h12v8.2h-12v-8.2z" />
                <path d="M770.186 189.054h12v2.6h-12v-2.6z" />
            </g>
            <g fill="#7d959f" stroke="#000">
                <path d="M788.82 182.49h15.4v10.1h-15.4v-10.1z" />
                <path d="M790.488 183.471h12v8.2h-12v-8.2z" />
                <path d="M790.488 189.054h12v2.6h-12v-2.6z" />
            </g>
            <path
                fill="url(#u)"
                d="M0 1.5C0 .7 1.1 0 2.5 0S5 .7 5 1.5 3.9 2.9 2.5 2.9 0 2.3 0 1.5z"
                transform="translate(797.387 213.949)"
            />
            <path
                fill="#7d959f"
                d="M798.757 215.45c0-.4.5-.7 1.1-.7.7 0 1.2.3 1.2.7 0 .3-.5.6-1.2.6-.6 0-1.1-.3-1.1-.6z"
            />
            <path
                fill="url(#u)"
                d="M0 1.5C0 .7 1.1 0 2.5 0S5 .7 5 1.5 3.9 2.9 2.5 2.9 0 2.3 0 1.5z"
                transform="translate(772.504 213.948)"
            />
            <path
                fill="#7d959f"
                d="M773.874 215.448c0-.4.5-.7 1.1-.7.7 0 1.2.3 1.2.7 0 .3-.5.6-1.2.6-.6 0-1.1-.3-1.1-.6z"
            />
            <g fill="url(#o)" transform="translate(616.666 268.366)">
                <path d="M.282 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM9.053 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM26.595 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM17.824 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM35.367 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM44.138 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM52.91 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM61.68 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM70.452 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM79.223 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM102.803 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM111.574 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM129.117 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM120.345 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM137.888 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM146.66 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM155.43 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM164.202 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM172.973 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2zM181.744 0h1.3c.2 0 .3.1.3.2v18.1c0 .1-.1.2-.3.2h-1.3c-.2 0-.3-.1-.3-.2V.2c0-.1.1-.2.3-.2z" />
            </g>
            <path
                fill="url(#r)"
                d="M.7 0H228.8v2.2H0V0h.7z"
                transform="translate(593.965 235.273)"
            />
            <path
                fill="url(#r)"
                d="M.7 0H228.8v2.3c0 .1-.4.1-.8.1H.7c-.4 0-.7 0-.7-.1V0h.7z"
                transform="translate(593.965 292.906)"
            />
            <path fill="#adcedc" d="M610.74 249.287h197v38h-197v-38z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(610.74 249.287)"
            >
                <tspan
                    x={80}
                    y={15}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F1-2-3"}
                </tspan>
                <tspan
                    x={49}
                    y={35}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SHUANG LIANG"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(-1 0 0 1 818.161 178.752)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(-1 0 0 1 827.571 178.752)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(-1 0 0 1 834.89 178.752)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(-1 0 0 1 827.316 178.752)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(-1 0 0 1 782.9 178.732)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(-1 0 0 1 778.554 193.343)"
            />
            <g fill="url(#k)" transform="matrix(-1 0 0 1 818.16 179.895)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(-1 0 0 1 782.299 178.752)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(-1 0 0 1 778.555 188.72)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 778.658 179.894)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 778.658 191.075)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 778.658 202.256)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 778.658 213.437)"
            />
            <path
                fill="#92d050"
                d="M816.988 214.203h-31.5v2.5h31.5v-2.5zM816.988 216.94h-31.5v5.5h31.5v-5.5z"
            />
            <path fill="#92d050" d="M816.988 221.374h-31.5v2h31.5v-2z" />
            <path
                fill="url(#n)"
                d="M1.1 0h12.8c.6 0 1.1.2 1.1.4v5.1c0 .2-.5.4-1.1.4H1.1C.5 5.9 0 5.7 0 5.5V.4C0 .2.5 0 1.1 0z"
                transform="translate(826.74 356.847)"
            />
            <path
                fill="url(#n)"
                d="M2.6 0h11.6c1.5 0 2.7.2 2.7.4v14.2c0 .2-1.2.4-2.7.4H2.6c-1.4 0-2.6-.2-2.6-.4V.4C0 .2 1.2 0 2.6 0z"
                transform="translate(889.905 351.175)"
            />
            <path
                fill="url(#n)"
                d="M1.5 0H8c.8 0 1.4.2 1.4.4v14.2c0 .2-.6.4-1.4.4H1.5c-.8 0-1.5-.2-1.5-.4V.4C0 .2.7 0 1.5 0z"
                transform="translate(1069.584 351.175)"
            />
            <path
                fill="url(#o)"
                d="M1.1 0h5c.6 0 1.1.2 1.1.4v42.4c0 .2-.5.4-1.1.4h-5c-.6 0-1.1-.2-1.1-.4V.4C0 .2.5 0 1.1 0z"
                transform="translate(845.634 339.612)"
            />
            <path
                fill="url(#n)"
                d="M0 0h51.1v1.9H0V0z"
                transform="translate(1061.693 312.603)"
            />
            <path
                fill="url(#o)"
                d="M1.1 0h34.2c.7 0 1.2.2 1.2.4v8.4c0 .3-.5.4-1.2.4H1.1C.5 9.2 0 9.1 0 8.8V.4C0 .2.5 0 1.1 0z"
                transform="translate(1027.367 309.464)"
            />
            <path
                fill="url(#p)"
                d="M1.1 0h99.3c.6 0 1.1.2 1.1.5v51.9c0 .3-.5.5-1.1.5H1.1c-.6 0-1.1-.2-1.1-.5V.5C0 .2.5 0 1.1 0z"
                transform="translate(1109.78 330.013)"
            />
            <path
                fill="url(#n)"
                d="M1.1 0h164c.7 0 1.2.2 1.2.4v18.2c0 .2-.5.4-1.2.4H1.1c-.6 0-1.1-.2-1.1-.4V.4C0 .2.5 0 1.1 0z"
                transform="translate(904.33 349.17)"
            />
            <path
                fill="url(#n)"
                d="M1.1 0h3.6c.6 0 1.1.2 1.1.4v21.3c0 .3-.5.5-1.1.5H1.1c-.6 0-1.1-.2-1.1-.5V.4C0 .2.5 0 1.1 0z"
                transform="translate(910.548 347.602)"
            />
            <path
                fill="url(#p)"
                d="M0 0h103.8v18.2H0V0z"
                transform="translate(916.32 355.365)"
            />
            <path
                fill="url(#p)"
                d="M0 0h103.8v4.8H0V0z"
                transform="translate(916.32 350.653)"
            />
            <path
                fill="url(#p)"
                d="M0 0h103.8v6.9H0V0z"
                transform="translate(916.32 343.846)"
            />
            <path
                fill="url(#q)"
                d="M1.1 0h30.2c.6 0 1.2.2 1.2.4v37.2c0 .3-.6.5-1.2.5H1.1c-.6 0-1.1-.2-1.1-.5V.4C0 .2.5 0 1.1 0z"
                transform="translate(1077.26 344.194)"
            />
            <path
                fill="url(#r)"
                d="M1.1 0h340.1c.6 0 1.1.2 1.1.4v59.2c0 .2-.5.4-1.1.4H1.1c-.6 0-1.1-.2-1.1-.4V.4C0 .2.5 0 1.1 0z"
                transform="translate(868.974 382.155)"
            />
            <path
                fill="url(#n)"
                d="M1.1 0h6.1c.6 0 1.1.2 1.1.4v23.8c0 .3-.5.5-1.1.5H1.1c-.6 0-1.1-.2-1.1-.5V.4C0 .2.5 0 1.1 0z"
                transform="translate(883.978 347.466)"
            />
            <path
                fill="url(#n)"
                d="M1.1 0H20c.6 0 1.1.2 1.1.4v19.9c0 .2-.5.4-1.1.4H1.1c-.6 0-1.1-.2-1.1-.4V.4C0 .2.5 0 1.1 0z"
                transform="translate(862.86 348.993)"
            />
            <path
                fill="url(#n)"
                d="M1.1 0h20.6c.6 0 1.1.2 1.1.4V12c0 .2-.5.4-1.1.4H1.1c-.6 0-1.1-.2-1.1-.4V.4C0 .2.5 0 1.1 0z"
                transform="translate(840.077 353.575)"
            />
            <path
                fill="url(#o)"
                d="M0 0h96.5l-31 22H31.4L0 0z"
                transform="translate(997.339 327.204)"
            />
            <path
                fill="url(#o)"
                d="M0 8.4h97.5V0H0v8.4z"
                transform="translate(996.845 318.768)"
            />
            <path
                fill="url(#o)"
                d="M1.2 0h100.2c.7 0 1.2.2 1.2.4v.5c0 .2-.5.4-1.2.4H1.2C.5 1.3 0 1.1 0 .9V.4C0 .2.5 0 1.2 0z"
                transform="translate(994.286 317.468)"
            />
            <path
                fill="url(#n)"
                d="M1.1 0h18.2c.6 0 1.1.2 1.1.4v23.1c0 .2-.5.4-1.1.4H1.1c-.6 0-1.1-.2-1.1-.4V.4C0 .2.5 0 1.1 0z"
                transform="translate(1109.733 306.15)"
            />
            <path
                fill="url(#n)"
                d="M1.1 0H6c.6 0 1.1.2 1.1.4v5.8H0V.4C0 .2.5 0 1.1 0z"
                transform="translate(1068.82 311.21)"
            />
            <path
                fill="url(#n)"
                d="M1.1 0H6c.6 0 1.1.2 1.1.4v5.8H0V.4C0 .2.5 0 1.1 0z"
                transform="translate(1087.255 311.21)"
            />
            <path
                fill="url(#p)"
                d="M1.1 0h85.6c.6 0 1.1.2 1.1.4v47.2c0 .2-.5.4-1.1.4H1.1c-.6 0-1.1-.2-1.1-.4V.4C0 .2.5 0 1.1 0z"
                transform="translate(1114.596 322.159)"
            />
            <path
                fill="url(#q)"
                d="M1.1 0h31.1c.6 0 1.1.2 1.1.4V26c0 .2-.5.4-1.1.4H1.1c-.6 0-1.1-.2-1.1-.4V.4C0 .2.5 0 1.1 0z"
                transform="translate(877.309 355.852)"
            />
            <path
                fill="url(#p)"
                d="M0 0h103.8v.6H0V0z"
                transform="translate(916.318 355.175)"
            />
            <g fill="url(#q)" transform="translate(926.94 353.72)">
                <path d="M.183 0h11.6c.1 0 .2.1.2.2v3.1c0 .1-.1.2-.2.2H.183c-.1 0-.2-.1-.2-.2V.2c0-.1.1-.2.2-.2z" />
                <path d="M.183 1.521H11.983v.4H-.017v-.4h.2z" />
            </g>
            <g fill="url(#q)" transform="translate(996.845 353.72)">
                <path d="M.183 0h11.6c.1 0 .2.1.2.2v3.1c0 .1-.1.2-.2.2H.183c-.1 0-.2-.1-.2-.2V.2c0-.1.1-.2.2-.2z" />
                <path d="M.183 1.521H11.983v.4H-.017v-.4h.2z" />
            </g>
            <g fill="url(#v)" transform="translate(1131.407 346.073)">
                <path d="M.003 1.206c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2zM11.983 1.206c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2zM23.987 1.206c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2zM35.943 1.206c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2zM47.923 1.206c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2z" />
            </g>
            <path
                fill="url(#t)"
                d="M12.7 0c.6.2.4.9 1.4 1.6 1.1.7 2.8.9 2.8 1.3s-1.7.7-2.7 1.3c-1 .6-.6 1.4-1.5 1.6-1 .2-2.1-.3-4.3-.3-2.1 0-3.3.5-4.2.3-.8-.2-.4-.8-1.6-1.6-1-.7-2.6-.9-2.6-1.3s1.5-.6 2.7-1.3C3.9.8 3.6.2 4.2 0c.6-.1 1.9.3 4.3.3S12-.1 12.7 0z"
                transform="translate(885.518 359.29)"
            />
            <path
                fill="#7d959f"
                d="M897.977 359.445c.6.2.4.8 1.4 1.5.9.7 2.6.9 2.6 1.3 0 .3-1.6.6-2.6 1.2-.9.6-.5 1.3-1.4 1.5-.9.2-2-.3-4-.3-2.1 0-3.2.5-4 .3-.8-.2-.4-.8-1.5-1.5-.9-.6-2.5-.8-2.5-1.2 0-.4 1.5-.6 2.6-1.3 1-.7.8-1.4 1.4-1.5.6-.1 1.8.3 4 .3 2.3 0 3.4-.4 4-.3z"
            />
            <path
                fill="#7d959f"
                stroke="#717070"
                d="M888.782 362.167c0-1.1 2.3-2 5.2-2 2.9 0 5.2.9 5.2 2 0 1.2-2.3 2.1-5.2 2.1-2.9 0-5.2-.9-5.2-2.1z"
            />
            <path
                fill="#7d959f"
                d="M894.17 362.341c0-1-2.7-1.9-.2-1.9s4.5.8 4.5 1.8c0 .9-2 1.7-4.5 1.7s.2-.6.2-1.6z"
            />
            <path
                fill="url(#t)"
                d="m5.7 0 1.9 1.3-1.9 1.3H1.9L0 1.3 1.9 0h3.8z"
                transform="translate(880.196 385.995)"
            />
            <path
                fill="#7d959f"
                d="M881.892 387.397c0-.5 1-.9 2.2-.9 1.2 0 2.2.4 2.2.9 0 .4-1 .8-2.2.8-1.2 0-2.2-.4-2.2-.8z"
            />
            <path
                fill="url(#t)"
                d="m5.7 0 1.9 1.3-1.9 1.3H1.9L0 1.3 1.9 0h3.8z"
                transform="translate(880.196 435.737)"
            />
            <path
                fill="#7d959f"
                d="M881.892 437.139c0-.5 1-.9 2.2-.9 1.2 0 2.2.4 2.2.9 0 .4-1 .8-2.2.8-1.2 0-2.2-.4-2.2-.8z"
            />
            <path
                fill="url(#t)"
                d="m5.7 0 1.9 1.3-1.9 1.3H1.9L0 1.3 1.9 0h3.8z"
                transform="translate(1189.91 385.995)"
            />
            <path
                fill="#7d959f"
                d="M1191.606 387.397c0-.5 1-.9 2.2-.9 1.2 0 2.2.4 2.2.9 0 .4-1 .8-2.2.8-1.2 0-2.2-.4-2.2-.8z"
            />
            <path
                fill="url(#t)"
                d="m5.7 0 1.9 1.3-1.9 1.3H1.9L0 1.3 1.9 0h3.8z"
                transform="translate(1189.91 435.737)"
            />
            <path
                fill="#7d959f"
                d="M1191.606 437.139c0-.5 1-.9 2.2-.9 1.2 0 2.2.4 2.2.9 0 .4-1 .8-2.2.8-1.2 0-2.2-.4-2.2-.8z"
            />
            <path
                fill="url(#t)"
                d="m5.7 0 1.9 1.3-1.9 1.3H1.9L0 1.3 1.9 0h3.8z"
                transform="translate(1035.052 385.995)"
            />
            <path
                fill="#7d959f"
                d="M1036.749 387.397c0-.5 1-.9 2.2-.9 1.2 0 2.2.4 2.2.9 0 .4-1 .8-2.2.8-1.2 0-2.2-.4-2.2-.8z"
            />
            <path
                fill="url(#t)"
                d="m5.7 0 1.9 1.3-1.9 1.3H1.9L0 1.3 1.9 0h3.8z"
                transform="translate(1035.052 435.737)"
            />
            <path
                fill="#7d959f"
                d="M1036.749 437.139c0-.5 1-.9 2.2-.9 1.2 0 2.2.4 2.2.9 0 .4-1 .8-2.2.8-1.2 0-2.2-.4-2.2-.8z"
            />
            <g fill="url(#v)" transform="translate(1131.408 353.555)">
                <path d="M.003 1.202c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2zM11.983 1.202c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2zM23.987 1.202c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2zM35.943 1.202c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2zM47.923 1.202c0-.7 1.4-1.2 3.1-1.2 1.7 0 3.1.5 3.1 1.2s-1.4 1.2-3.1 1.2c-1.7 0-3.1-.5-3.1-1.2z" />
            </g>
            <g fill="#7d959f" stroke="#000">
                <path d="M1130.156 329.372h23v10.1h-23v-10.1z" />
                <path d="M1132.653 330.353h18v8.2h-18v-8.2z" />
                <path d="M1132.653 335.936h18v2.6h-18v-2.6z" />
            </g>
            <g fill="#7d959f" stroke="#000">
                <path d="M1160.534 329.372h23v10.1h-23v-10.1z" />
                <path d="M1163.031 330.353h18v8.2h-18v-8.2z" />
                <path d="M1163.031 335.936h18v2.6h-18v-2.6z" />
            </g>
            <path
                fill="url(#u)"
                d="M0 1.5C0 .7 1.7 0 3.7 0c2.1 0 3.8.7 3.8 1.5S5.8 2.9 3.7 2.9c-2 0-3.7-.6-3.7-1.4z"
                transform="translate(1173.353 360.83)"
            />
            <path
                fill="#7d959f"
                d="M1175.403 362.33c0-.4.8-.7 1.7-.7.9 0 1.7.3 1.7.7 0 .3-.8.6-1.7.6-.9 0-1.7-.3-1.7-.6z"
            />
            <path
                fill="url(#u)"
                d="M0 1.5C0 .7 1.7 0 3.7 0c2.1 0 3.8.7 3.8 1.5S5.8 2.9 3.7 2.9c-2 0-3.7-.6-3.7-1.4z"
                transform="translate(1136.121 360.83)"
            />
            <path
                fill="#7d959f"
                d="M1138.17 362.33c0-.4.8-.7 1.7-.7.9 0 1.7.3 1.7.7 0 .3-.8.6-1.7.6-.9 0-1.7-.3-1.7-.6z"
            />
            <g fill="url(#o)" transform="translate(902.941 415.248)">
                <path d="M.473 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM13.597 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM39.846 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM26.721 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM52.97 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM66.095 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM79.22 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM92.344 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM105.468 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM118.593 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM153.875 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM167 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2H167c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM193.249 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM180.124 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM206.373 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM219.497 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM232.622 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM245.746 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM258.87 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2zM271.995 0h1.9c.2 0 .5.1.5.2v18.1c0 .1-.3.2-.5.2h-1.9c-.3 0-.5-.1-.5-.2V.2c0-.1.2-.2.5-.2z" />
            </g>
            <path
                fill="url(#r)"
                d="M1.1 0H342.3v2.2H0V0h1.1z"
                transform="translate(868.974 382.155)"
            />
            <path
                fill="url(#r)"
                d="M1.1 0H342.3v2.3c0 .1-.5.1-1.1.1H1.1c-.6 0-1.1 0-1.1-.1V0h1.1z"
                transform="translate(868.974 439.788)"
            />
            <path fill="#adcedc" d="M883.74 396.168h312.5v38h-312.5v-38z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(883.74 396.168)"
            >
                <tspan
                    x={137.8}
                    y={15}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F1-2-3"}
                </tspan>
                <tspan
                    x={108.3}
                    y={35}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"DUNHAM BUSH"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(-1 0 0 1 1206.71 325.633)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(-1 0 0 1 1216.12 325.633)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(-1 0 0 1 1223.44 325.633)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(-1 0 0 1 1215.865 325.633)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(-1 0 0 1 1171.449 325.614)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(-1 0 0 1 1167.103 340.225)"
            />
            <g fill="url(#k)" transform="matrix(-1 0 0 1 1206.71 326.776)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(-1 0 0 1 1170.848 325.633)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(-1 0 0 1 1167.104 335.602)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1167.207 326.776)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1167.207 337.957)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1167.207 349.138)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1167.207 360.319)"
            />
            <path
                fill="#92d050"
                d="M1205.537 361.085h-31.5v2.5h31.5v-2.5zM1205.537 363.822h-31.5v5.5h31.5v-5.5z"
            />
            <path fill="#92d050" d="M1205.537 368.256h-31.5v2h31.5v-2z" />
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(-1 0 0 1 1127.8 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(-1 0 0 1 1137.21 325.634)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(-1 0 0 1 1144.53 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(-1 0 0 1 1136.955 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(-1 0 0 1 1092.539 325.614)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(-1 0 0 1 1088.193 340.225)"
            />
            <g fill="url(#k)" transform="matrix(-1 0 0 1 1127.8 326.777)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(-1 0 0 1 1091.938 325.633)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(-1 0 0 1 1088.194 335.602)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1088.297 326.776)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1088.297 337.957)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1088.297 349.138)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1088.297 360.319)"
            />
            <path
                fill="#92d050"
                d="M1126.627 361.085h-31.5v2.5h31.5v-2.5zM1126.627 363.822h-31.5v5.5h31.5v-5.5z"
            />
            <path fill="#92d050" d="M1126.627 368.256h-31.5v2h31.5v-2z" />
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(-1 0 0 1 1048.89 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(-1 0 0 1 1058.3 325.634)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(-1 0 0 1 1065.62 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(-1 0 0 1 1058.045 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(-1 0 0 1 1013.629 325.614)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(-1 0 0 1 1009.283 340.225)"
            />
            <g fill="url(#k)" transform="matrix(-1 0 0 1 1048.89 326.777)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(-1 0 0 1 1013.028 325.633)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(-1 0 0 1 1009.284 335.602)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1009.387 326.776)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1009.387 337.957)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1009.387 349.138)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 1009.387 360.319)"
            />
            <path
                fill="#92d050"
                d="M1047.717 361.085h-31.5v2.5h31.5v-2.5zM1047.717 363.822h-31.5v5.5h31.5v-5.5z"
            />
            <path fill="#92d050" d="M1047.717 368.256h-31.5v2h31.5v-2z" />
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(-1 0 0 1 969.98 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(-1 0 0 1 979.39 325.634)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(-1 0 0 1 986.71 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(-1 0 0 1 979.135 325.634)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(-1 0 0 1 934.719 325.614)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(-1 0 0 1 930.373 340.225)"
            />
            <g fill="url(#k)" transform="matrix(-1 0 0 1 969.98 326.777)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(-1 0 0 1 934.118 325.633)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(-1 0 0 1 930.374 335.602)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 930.477 326.776)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 930.477 337.957)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 930.477 349.138)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(-1 0 0 1 930.477 360.319)"
            />
            <path
                fill="#92d050"
                d="M968.807 361.085h-31.5v2.5h31.5v-2.5zM968.807 363.822h-31.5v5.5h31.5v-5.5z"
            />
            <path fill="#92d050" d="M968.807 368.256h-31.5v2h31.5v-2z" />
            <path
                fill="url(#w)"
                d="M264 0v262.4c0 3.3-2.6 5.9-5.8 5.9H5.8c-3.2 0-5.8-2.6-5.8-5.9V0h264z"
                transform="translate(326.455 726.197)"
            />
            <path
                fill="url(#w)"
                d="M0 26C0 14.4 37.6 0 37.6 0l188.8.2S264 13.8 264 26H0z"
                transform="translate(326.455 700.462)"
            />
            <path
                fill="url(#w)"
                d="M0 0h264v77.1H0V0z"
                transform="translate(326.455 906.955)"
            />
            <path
                fill="url(#w)"
                d="M0 0h188.8v36.9H0V0z"
                transform="translate(364.031 663.69)"
            />
            <path
                fill="url(#w)"
                d="M1.1 0h197.7c.6 0 1 .4 1 .9v3.2c0 .4-.4.8-1 .8H1.1C.5 4.9 0 4.5 0 4.1V.9C0 .4.5 0 1.1 0z"
                transform="translate(358.53 659.408)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 906.933)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 916.136)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 925.338)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 934.54)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 943.753)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 952.945)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 962.147)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 971.35)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(547.424 664.426)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(364.031 664.426)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(420.071 664.426)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(491.384 664.426)"
            />
            <g fill="url(#w)" transform="translate(326.455 728.027)">
                <path d="M81.515 0h5.5v256h-5.5V0zM182.606 0h5.5v256h-5.5V0zM258.545 0h5.5v256h-5.5V0zM0 0h5.5v256H0V0z" />
            </g>
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 726.285)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(326.455 980.552)"
            />
            <g fill="url(#y)" transform="rotate(90 -59.245 614.7)">
                <path d="M0 36.493v117.4l65.6 37.1v-188L0 36.494z" />
                <path d="M.4 34.728h1.5c.2 0 .4.7.4 1.5v118c0 .8-.2 1.5-.4 1.5H.4c-.2 0-.4-.7-.4-1.5v-118c0-.8.2-1.5.4-1.5zM64.139 0h1.5c.2 0 .4.6.4 1.4v191.1c0 .8-.2 1.5-.4 1.5h-1.5c-.2 0-.4-.7-.4-1.5V1.4c0-.8.2-1.4.4-1.4z" />
            </g>
            <path
                fill="url(#z)"
                d="M1.1-.6h199.3c.7 0 1.3 2.4 1.3 5.4v93c0 3-.6 5.4-1.3 5.4H1.1c-.7 0-1.1-2.4-1.1-5.4v-93C0 1.8.4-.6 1.1-.6z"
                transform="translate(353.79 739.945)"
            />
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(0 1 1 0 436.13 618.524)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(0 1 1 0 436.13 609.114)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(0 1 1 0 436.13 601.794)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(0 1 1 0 436.13 609.37)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(0 1 1 0 436.11 653.785)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(0 1 1 0 450.72 658.13)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 437.272 618.524)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(0 1 1 0 436.13 654.386)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(0 1 1 0 446.097 658.13)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 437.272 658.027)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 448.453 658.027)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 459.633 658.027)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 470.814 658.027)"
            />
            <path
                fill="#92d050"
                d="M471.58 619.697v31.5h2.5v-31.5h-2.5zM474.318 619.697v31.5h5.5v-31.5h-5.5z"
            />
            <path fill="#92d050" d="M478.752 619.697v31.5h2v-31.5h-2z" />
            <g stroke="#000">
                <path
                    fill="#c8d2d8"
                    d="M454.565 775.945c0-1.1-19.8-15.5-22-16.8-2.2-1.3-9.2 2-8.6 17.4.6 17 7 17 8.6 16 1.6-1 22-17.7 22-16.6zM454.68 775.945c0-1.1 19.8-15.5 22-16.8 2.2-1.3 9.2 2 8.6 17.4-.6 17-7 17-8.6 16-1.6-1-22-17.7-22-16.6z"
                />
                <path fill="none" d="M454.622 775.945v-102" />
            </g>
            <path fill="#adcedc" d="M409.393 876.52h100.7v64.6h-100.7v-64.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(409.393 876.52)"
            >
                <tspan
                    x={21.3}
                    y={38.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"C.T FAN3"}
                </tspan>
            </text>
            <path
                fill="url(#w)"
                d="M264 0v262.4c0 3.3-2.6 5.9-5.8 5.9H5.8c-3.2 0-5.8-2.6-5.8-5.9V0h264z"
                transform="translate(590.455 726.196)"
            />
            <path
                fill="url(#w)"
                d="M0 26C0 14.4 37.6 0 37.6 0l188.8.2S264 13.8 264 26H0z"
                transform="translate(590.455 700.461)"
            />
            <path
                fill="url(#w)"
                d="M0 0h264v77.1H0V0z"
                transform="translate(590.455 906.955)"
            />
            <path
                fill="url(#w)"
                d="M0 0h188.8v36.9H0V0z"
                transform="translate(628.031 663.69)"
            />
            <path
                fill="url(#w)"
                d="M1.1 0h197.7c.6 0 1 .4 1 .9v3.2c0 .4-.4.8-1 .8H1.1C.5 4.9 0 4.5 0 4.1V.9C0 .4.5 0 1.1 0z"
                transform="translate(622.53 659.407)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 906.933)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 916.135)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 925.337)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 934.54)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 943.752)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 952.944)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 962.146)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 971.349)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(811.424 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(628.031 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(684.071 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(755.384 664.425)"
            />
            <g fill="url(#w)" transform="translate(590.455 728.026)">
                <path d="M81.515 0h5.5v256h-5.5V0zM182.606 0h5.5v256h-5.5V0zM258.546 0h5.5v256h-5.5V0zM0 0h5.5v256H0V0z" />
            </g>
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 726.284)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(590.455 980.551)"
            />
            <g fill="url(#y)" transform="rotate(90 72.755 746.7)">
                <path d="M0 36.493v117.4l65.6 37.1v-188L0 36.494z" />
                <path d="M.4 34.728h1.5c.2 0 .4.7.4 1.5v118c0 .8-.2 1.5-.4 1.5H.4c-.2 0-.4-.7-.4-1.5v-118c0-.8.2-1.5.4-1.5zM64.139 0h1.5c.2 0 .4.6.4 1.4v191.1c0 .8-.2 1.5-.4 1.5h-1.5c-.2 0-.4-.7-.4-1.5V1.4c0-.8.2-1.4.4-1.4z" />
            </g>
            <path
                fill="url(#z)"
                d="M1.1-.6h199.3c.7 0 1.3 2.4 1.3 5.4v93c0 3-.6 5.4-1.3 5.4H1.1c-.7 0-1.1-2.4-1.1-5.4v-93C0 1.8.4-.6 1.1-.6z"
                transform="translate(617.79 739.944)"
            />
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(0 1 1 0 700.129 618.523)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(0 1 1 0 700.129 609.113)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(0 1 1 0 700.129 601.793)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(0 1 1 0 700.129 609.368)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(0 1 1 0 700.109 653.784)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(0 1 1 0 714.72 658.13)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 701.272 618.523)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(0 1 1 0 700.129 654.385)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(0 1 1 0 710.097 658.13)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 701.271 658.026)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 712.452 658.026)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 723.633 658.026)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 734.814 658.026)"
            />
            <path
                fill="#92d050"
                d="M735.58 619.696v31.5h2.5v-31.5h-2.5zM738.317 619.696v31.5h5.5v-31.5h-5.5z"
            />
            <path fill="#92d050" d="M742.751 619.696v31.5h2v-31.5h-2z" />
            <g stroke="#000">
                <path
                    fill="#c8d2d8"
                    d="M718.564 775.944c0-1.1-19.8-15.5-22-16.8-2.2-1.3-9.2 2-8.6 17.4.6 17 7 17 8.6 16 1.6-1 22-17.7 22-16.6zM718.68 775.944c0-1.1 19.8-15.5 22-16.8 2.2-1.3 9.2 2 8.6 17.4-.6 17-7 17-8.6 16-1.6-1-22-17.7-22-16.6z"
                />
                <path fill="none" d="M718.622 775.944v-102" />
            </g>
            <path fill="#adcedc" d="M669.045 878.835h100.7v64.6h-100.7v-64.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(669.045 878.835)"
            >
                <tspan
                    x={21.3}
                    y={38.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"C.T FAN4"}
                </tspan>
            </text>
            <path
                fill="url(#w)"
                d="M264 0v262.4c0 3.3-2.6 5.9-5.8 5.9H5.8c-3.2 0-5.8-2.6-5.8-5.9V0h264z"
                transform="translate(1004.668 726.197)"
            />
            <path
                fill="url(#w)"
                d="M0 26C0 14.4 37.6 0 37.6 0l188.8.2S264 13.8 264 26H0z"
                transform="translate(1004.668 700.461)"
            />
            <path
                fill="url(#w)"
                d="M0 0h264v77.1H0V0z"
                transform="translate(1004.668 906.955)"
            />
            <path
                fill="url(#w)"
                d="M0 0h188.8v36.9H0V0z"
                transform="translate(1042.245 663.69)"
            />
            <path
                fill="url(#w)"
                d="M1.1 0h197.7c.6 0 1 .4 1 .9v3.2c0 .4-.4.8-1 .8H1.1C.5 4.9 0 4.5 0 4.1V.9C0 .4.5 0 1.1 0z"
                transform="translate(1036.744 659.408)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 906.933)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 916.135)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 925.337)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 934.54)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 943.752)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 952.944)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 962.146)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 971.35)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(1225.637 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(1042.245 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(1098.285 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(1169.597 664.425)"
            />
            <g fill="url(#w)" transform="translate(1004.668 728.027)">
                <path d="M81.515 0h5.5v256h-5.5V0zM182.606 0h5.5v256h-5.5V0zM258.546 0h5.5v256h-5.5V0zM0 0h5.5v256H0V0z" />
            </g>
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 726.284)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1004.668 980.551)"
            />
            <g fill="url(#y)" transform="rotate(90 279.862 953.807)">
                <path d="M0 36.493v117.4l65.6 37.1v-188L0 36.494z" />
                <path d="M.4 34.728h1.5c.2 0 .4.7.4 1.5v118c0 .8-.2 1.5-.4 1.5H.4c-.2 0-.4-.7-.4-1.5v-118c0-.8.2-1.5.4-1.5zM64.139 0h1.5c.2 0 .4.6.4 1.4v191.1c0 .8-.2 1.5-.4 1.5h-1.5c-.2 0-.4-.7-.4-1.5V1.4c0-.8.2-1.4.4-1.4z" />
            </g>
            <path
                fill="url(#z)"
                d="M1.1-.6h199.3c.7 0 1.3 2.4 1.3 5.4v93c0 3-.6 5.4-1.3 5.4H1.1c-.7 0-1.1-2.4-1.1-5.4v-93C0 1.8.4-.6 1.1-.6z"
                transform="translate(1032.003 739.945)"
            />
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(0 1 1 0 1114.342 618.523)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(0 1 1 0 1114.342 609.113)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(0 1 1 0 1114.342 601.794)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(0 1 1 0 1114.342 609.369)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(0 1 1 0 1114.322 653.785)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(0 1 1 0 1128.934 658.13)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 1115.485 618.524)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(0 1 1 0 1114.342 654.386)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(0 1 1 0 1124.31 658.13)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 1115.485 658.027)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 1126.666 658.027)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 1137.847 658.027)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 1149.027 658.027)"
            />
            <path
                fill="#92d050"
                d="M1149.794 619.697v31.5h2.5v-31.5h-2.5zM1152.53 619.697v31.5h5.5v-31.5h-5.5z"
            />
            <path fill="#92d050" d="M1156.965 619.697v31.5h2v-31.5h-2z" />
            <g stroke="#000">
                <path
                    fill="#c8d2d8"
                    d="M1132.778 775.945c0-1.1-19.8-15.5-22-16.8-2.2-1.3-9.2 2-8.6 17.4.6 17 7 17 8.6 16 1.6-1 22-17.7 22-16.6zM1132.893 775.945c0-1.1 19.8-15.5 22-16.8 2.2-1.3 9.2 2 8.6 17.4-.6 17-7 17-8.6 16-1.6-1-22-17.7-22-16.6z"
                />
                <path fill="none" d="M1132.835 775.945v-102" />
            </g>
            <path fill="#adcedc" d="M1085.5 878.835h94.5v64.6h-94.5v-64.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1085.5 878.835)"
            >
                <tspan
                    x={18.2}
                    y={38.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"C.T FAN1"}
                </tspan>
            </text>
            <path
                fill="url(#w)"
                d="M264 0v262.4c0 3.3-2.6 5.9-5.8 5.9H5.8c-3.2 0-5.8-2.6-5.8-5.9V0h264z"
                transform="translate(1268.668 726.196)"
            />
            <path
                fill="url(#w)"
                d="M0 26C0 14.4 37.6 0 37.6 0l188.8.2S264 13.8 264 26H0z"
                transform="translate(1268.668 700.461)"
            />
            <path
                fill="url(#w)"
                d="M0 0h264v77.1H0V0z"
                transform="translate(1268.668 906.955)"
            />
            <path
                fill="url(#w)"
                d="M0 0h188.8v36.9H0V0z"
                transform="translate(1306.245 663.69)"
            />
            <path
                fill="url(#w)"
                d="M1.1 0h197.7c.6 0 1 .4 1 .9v3.2c0 .4-.4.8-1 .8H1.1C.5 4.9 0 4.5 0 4.1V.9C0 .4.5 0 1.1 0z"
                transform="translate(1300.744 659.407)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 906.933)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 916.135)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 925.337)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 934.54)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 943.752)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 952.944)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 962.146)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 971.349)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(1489.637 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(1306.245 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(1362.285 664.425)"
            />
            <path
                fill="url(#w)"
                d="M0 0h5.5v36.4H0V0z"
                transform="translate(1433.597 664.425)"
            />
            <g fill="url(#w)" transform="translate(1268.668 728.026)">
                <path d="M81.515 0h5.5v256h-5.5V0zM182.606 0h5.5v256h-5.5V0zM258.546 0h5.5v256h-5.5V0zM0 0h5.5v256H0V0z" />
            </g>
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 726.284)"
            />
            <path
                fill="url(#x)"
                d="M0 0h264v3.5H0V0z"
                transform="translate(1268.668 980.551)"
            />
            <g fill="url(#y)" transform="rotate(90 411.862 1085.806)">
                <path d="M0 36.493v117.4l65.6 37.1v-188L0 36.494z" />
                <path d="M.4 34.728h1.5c.2 0 .4.7.4 1.5v118c0 .8-.2 1.5-.4 1.5H.4c-.2 0-.4-.7-.4-1.5v-118c0-.8.2-1.5.4-1.5zM64.139 0h1.5c.2 0 .4.6.4 1.4v191.1c0 .8-.2 1.5-.4 1.5h-1.5c-.2 0-.4-.7-.4-1.5V1.4c0-.8.2-1.4.4-1.4z" />
            </g>
            <path
                fill="url(#z)"
                d="M1.1-.6h199.3c.7 0 1.3 2.4 1.3 5.4v93c0 3-.6 5.4-1.3 5.4H1.1c-.7 0-1.1-2.4-1.1-5.4v-93C0 1.8.4-.6 1.1-.6z"
                transform="translate(1296.003 739.944)"
            />
            <path
                fill="url(#k)"
                d="M0 0h36.6v38.1H0V0z"
                transform="matrix(0 1 1 0 1378.342 618.523)"
            />
            <path
                fill="url(#k)"
                d="M0 0h9.4v38.2H0V0z"
                transform="matrix(0 1 1 0 1378.342 609.113)"
            />
            <path
                fill="url(#k)"
                d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
                transform="matrix(0 1 1 0 1378.342 601.793)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v38.2H0V0z"
                transform="matrix(0 1 1 0 1378.342 609.368)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.8v37.5H0V0z"
                transform="matrix(0 1 1 0 1378.322 653.784)"
            />
            <path
                fill="url(#k)"
                d="M0 0h15.8v8.3H0V0z"
                transform="matrix(0 1 1 0 1392.934 658.13)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 1379.485 618.523)">
                <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
                transform="matrix(0 1 1 0 1378.342 654.385)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.9v17.5H0V0z"
                transform="matrix(0 1 1 0 1388.31 658.13)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 1379.485 658.026)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 1390.666 658.026)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 1401.847 658.026)"
            />
            <path
                fill="url(#k)"
                d="M0 0h1.5v2.6H0V0z"
                transform="matrix(0 1 1 0 1413.027 658.026)"
            />
            <path
                fill="#92d050"
                d="M1413.794 619.696v31.5h2.5v-31.5h-2.5zM1416.53 619.696v31.5h5.5v-31.5h-5.5z"
            />
            <path fill="#92d050" d="M1420.965 619.696v31.5h2v-31.5h-2z" />
            <g stroke="#000">
                <path
                    fill="#c8d2d8"
                    d="M1396.778 775.944c0-1.1-19.8-15.5-22-16.8-2.2-1.3-9.2 2-8.6 17.4.6 17 7 17 8.6 16 1.6-1 22-17.7 22-16.6zM1396.893 775.944c0-1.1 19.8-15.5 22-16.8 2.2-1.3 9.2 2 8.6 17.4-.6 17-7 17-8.6 16-1.6-1-22-17.7-22-16.6z"
                />
                <path fill="none" d="M1396.835 775.944v-102" />
            </g>
            <path fill="#adcedc" d="M1350 876.52h95.5v64.6H1350v-64.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1350 876.52)"
            >
                <tspan
                    x={18.7}
                    y={38.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"C.T FAN2"}
                </tspan>
            </text>
            <path
                fill="url(#a)"
                d="M0 0h215.9v196.2H0V0z"
                transform="matrix(-1 0 0 1 1746.187 295.39)"
            />
            <path
                fill="url(#b)"
                d="M2.2-.1h220.6c1.2 0 2.2 3 2.2 6.8v12.6c0 3.7-1 6.7-2.2 6.7H2.2C1 26 0 23 0 19.3V6.7C0 2.9 1-.1 2.2-.1z"
                transform="matrix(-1 0 0 1 1750.753 486.979)"
            />
            <path
                fill="url(#A)"
                d="M0 45.1S7.4 1.2 107.5 0c100.1-1.2 108.4 45.1 108.4 45.1H0z"
                transform="matrix(-1 0 0 1 1746.187 253.066)"
            />
            <path fill="#adcedc" d="M1603.67 279.976h69.2v65.4h-69.2v-65.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1603.67 279.976)"
            >
                <tspan
                    x={23.1}
                    y={38.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FT8"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1581.984 451.764h112.5v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1585.312 475.959h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1585.312 475.959)"
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
                d="M1585.312 455.815h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1585.312 455.815)"
            >
                <tspan
                    x={38.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI 14"}
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
                transform="translate(1700.616 234.041)"
            >
                <tspan
                    x={8.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"HL FT8"}
                </tspan>
            </text>
            <path
                fill="#cdcece"
                stroke="#b4b5b5"
                d="M1712.1 289.63c0-8.9 7.2-16.1 16.1-16.1 9 0 16.2 7.2 16.2 16.1 0 9-7.2 16.2-16.2 16.2-8.9 0-16.1-7.2-16.1-16.2z"
            />
            <path
                fill="#e85464"
                d="M1713.175 289.705c0-8.4 6.7-15.1 15.1-15.1 8.3 0 15 6.7 15 15.1 0 8.3-6.7 15-15 15-8.4 0-15.1-6.7-15.1-15z"
            />
            <path
                fill="url(#B)"
                d="M0 13.8C0 6.2 6.2 0 13.8 0c7.6 0 13.7 6.2 13.7 13.8 0 7.6-6.1 13.7-13.7 13.7S0 21.4 0 13.8z"
                transform="translate(1714.481 275.91)"
            />
            <path
                fill="#f44758"
                d="M1721.362 289.692c0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9-3.8 0-6.9-3.1-6.9-6.9z"
            />
            <path
                fill="url(#C)"
                d="M0 6c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"
                transform="translate(1722.235 283.664)"
            />
            <path
                fill="url(#D)"
                d="M0 15.1C0 6.7 6.7 0 15.1 0c8.3 0 15.1 6.7 15.1 15.1 0 8.3-6.8-.8-15.1-.8-8.4 0-15.1 9.1-15.1.8z"
                transform="translate(1713.17 274.59)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M1719.513 301.174c0-1 3.9-1.8 8.7-1.8 4.8 0 8.8.8 8.8 1.8 0 .9-4 3.3-8.8 3.3-4.8 0-8.7-2.4-8.7-3.3z"
            />
            <path
                fill="#3e3938"
                stroke="#3e3938"
                d="M1708.554 494.478c0-8.1 6.5-14.6 14.6-14.6 8 0 14.5 6.5 14.5 14.6 0 8-6.5 14.5-14.5 14.5-8.1 0-14.6-6.5-14.6-14.5z"
            />
            <path
                fill="#009400"
                d="M1709.075 494.398c0-7.7 6.3-14 14-14 7.8 0 14.1 6.3 14.1 14 0 7.8-6.3 14.1-14.1 14.1-7.7 0-14-6.3-14-14.1z"
            />
            <path
                fill="#00c200"
                d="M1710.293 494.416c0-7.1 5.7-12.8 12.8-12.8 7.1 0 12.9 5.7 12.9 12.8 0 7.1-5.8 12.9-12.9 12.9-7.1 0-12.8-5.8-12.8-12.9z"
            />
            <path
                fill="url(#d)"
                d="M0 11.3C0 5.1 5.1 0 11.3 0c6.3 0 11.4 5.1 11.4 11.3 0 6.3-5.1 11.4-11.4 11.4C5.1 22.7 0 17.6 0 11.3z"
                transform="translate(1711.778 483.101)"
            />
            <path
                fill="#00bd00"
                d="M1713.903 494.426c0-5.1 4.1-9.2 9.2-9.2s9.2 4.1 9.2 9.2-4.1 9.2-9.2 9.2-9.2-4.1-9.2-9.2z"
            />
            <path
                fill="url(#e)"
                d="M0 8.6C0 3.9 3.9 0 8.6 0c4.8 0 8.6 3.9 8.6 8.6 0 4.8-3.8 8.6-8.6 8.6-4.7 0-8.6-3.8-8.6-8.6z"
                transform="translate(1714.509 485.832)"
            />
            <path
                fill="#fff"
                fillOpacity={0.18}
                d="M1709.413 494.436c0-7.6 6.1-13.7 13.7-13.7s13.7 6.1 13.7 13.7-6.1 13.7-13.7 13.7-13.7-6.1-13.7-13.7z"
            />
            <path
                fill="#fff"
                fillOpacity={0.44}
                d="M1714.983 483.527c0 .9 3.6 1.6 8.1 1.6s8.2-.7 8.2-1.6c0-.9-3.7-3.1-8.2-3.1-4.5 0-8.1 2.2-8.1 3.1z"
            />
            <path
                fill="url(#f)"
                d="M0 7.7C0 3.5 3.5 0 7.7 0c4.3 0 7.8 3.5 7.8 7.7 0 4.3-3.5 7.8-7.8 7.8C3.5 15.5 0 12 0 7.7z"
                transform="translate(1715.38 486.704)"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M1714.983 505.272c0-.9 3.6-1.6 8.1-1.6s8.2.7 8.2 1.6c0 .9-3.7 3.1-8.2 3.1-4.5 0-8.1-2.2-8.1-3.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1695.493 509.014)"
            >
                <tspan
                    x={9.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LL FT8"}
                </tspan>
            </text>
            <path
                fill="url(#E)"
                d="M0 0h4.9v36.7H0V0z"
                transform="rotate(90 733.443 944.783)"
            />
            <g fill="url(#F)" transform="rotate(90 733.421 918.696)">
                <path d="M-.046 0v21.2l28.5-10.6L-.046 0zM57.07 0v21.2l-28.5-10.6L57.07 0z" />
            </g>
            <path
                fill="url(#G)"
                d="M1.3 0h49.2c.8 0 1.4.6 1.4 1.3v16.5c0 .7-.6 1.3-1.4 1.3H1.3c-.7 0-1.3-.6-1.3-1.3V1.3C0 .6.6 0 1.3 0z"
                transform="rotate(90 753.944 941.797)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                    fontWeight: 700,
                }}
                transform="translate(1608.703 137.274)"
            >
                <tspan
                    x={23.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"VR FT8"}
                </tspan>
            </text>
            <path
                fill="url(#g)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 891.978 -501.801)"
            />
            <path
                fill="url(#g)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 889.372 -495.712)"
            />
            <path
                fill="url(#g)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 879.649 -504.213)"
            />
            <path
                fill="url(#h)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 879.927 -494.225)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 882.115 -490.667)"
            />
            <path
                fill="url(#h)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1430.33 387.878)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 909.663 -520.744)"
            />
            <path
                fill="url(#i)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 876.433 -505.556)"
            />
            <path
                fill="url(#j)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 880.693 -535.264)"
            />
            <path
                fill="url(#k)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1389.057 321.648)"
            />
            <path
                fill="url(#k)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1389.057 314.785)"
            />
            <path
                fill="url(#k)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1389.057 309.596)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1389.043 347.366)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 1389.867 321.649)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1389.056 347.803)"
            />
            <path
                fill="url(#l)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 710.679 177.417)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1389.043 349.686)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1389.057 314.972)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 871.267 -512.112)"
            />
            <path
                fill="url(#m)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 710.68 184.29)"
            />
            <g fill="url(#k)" transform="rotate(-90 876.226 -507.533)">
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
                transform="translate(1361.16 380.633)"
            >
                <tspan
                    x={28.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF8A"}
                </tspan>
            </text>
            <path
                fill="url(#g)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 915.408 -393.157)"
            />
            <path
                fill="url(#g)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 912.803 -387.068)"
            />
            <path
                fill="url(#g)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 903.079 -395.569)"
            />
            <path
                fill="url(#h)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 903.357 -385.581)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 905.545 -382.023)"
            />
            <path
                fill="url(#h)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1345.117 519.952)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 933.094 -412.1)"
            />
            <path
                fill="url(#i)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 899.863 -396.912)"
            />
            <path
                fill="url(#j)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 904.123 -426.62)"
            />
            <path
                fill="url(#k)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1303.843 453.722)"
            />
            <path
                fill="url(#k)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1303.843 446.86)"
            />
            <path
                fill="url(#k)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1303.843 441.67)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1303.829 479.44)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 1304.653 453.723)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1303.843 479.877)"
            />
            <path
                fill="url(#l)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 668.072 243.454)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1303.829 481.76)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1303.843 447.046)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 894.697 -403.468)"
            />
            <path
                fill="url(#m)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 668.073 250.327)"
            />
            <g fill="url(#k)" transform="rotate(-90 899.656 -398.889)">
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
                transform="translate(1275.946 512.707)"
            >
                <tspan
                    x={28}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF8B"}
                </tspan>
            </text>
            <path
                fill="url(#g)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 1289.953 -372.762)"
            />
            <path
                fill="url(#g)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1287.348 -366.672)"
            />
            <path
                fill="url(#g)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 1277.624 -375.173)"
            />
            <path
                fill="url(#h)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 1277.903 -365.185)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1280.09 -361.627)"
            />
            <path
                fill="url(#h)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1699.267 914.893)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1307.64 -391.704)"
            />
            <path
                fill="url(#i)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1274.409 -376.516)"
            />
            <path
                fill="url(#j)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 1278.668 -406.225)"
            />
            <path
                fill="url(#k)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1657.993 848.663)"
            />
            <path
                fill="url(#k)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1657.993 841.8)"
            />
            <path
                fill="url(#k)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1657.993 836.611)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1657.978 874.381)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 1658.803 848.664)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1657.992 874.819)"
            />
            <path
                fill="url(#l)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 845.147 440.925)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1657.978 876.7)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1657.993 841.987)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1269.243 -383.072)"
            />
            <path
                fill="url(#m)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 845.148 447.797)"
            />
            <g fill="url(#k)" transform="rotate(-90 1274.202 -378.493)">
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
                transform="translate(1630.096 907.648)"
            >
                <tspan
                    x={22.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF 7/1A"}
                </tspan>
            </text>
            <path
                fill="url(#g)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 1398.33 -349.599)"
            />
            <path
                fill="url(#g)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1395.725 -343.51)"
            />
            <path
                fill="url(#g)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 1386.001 -352.01)"
            />
            <path
                fill="url(#h)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 1386.28 -342.022)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1388.467 -338.464)"
            />
            <path
                fill="url(#h)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 1784.48 1046.433)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1416.016 -368.54)"
            />
            <path
                fill="url(#i)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1382.786 -353.353)"
            />
            <path
                fill="url(#j)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 1387.045 -383.062)"
            />
            <path
                fill="url(#k)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 1743.206 980.203)"
            />
            <path
                fill="url(#k)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 1743.207 973.34)"
            />
            <path
                fill="url(#k)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 1743.207 968.15)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 1743.192 1005.92)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 1744.017 980.204)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 1743.206 1006.358)"
            />
            <path
                fill="url(#l)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 887.754 506.695)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 1743.192 1008.24)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 1743.207 973.527)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 1377.62 -359.91)"
            />
            <path
                fill="url(#m)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 887.755 513.567)"
            />
            <g fill="url(#k)" transform="rotate(-90 1382.579 -355.33)">
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
                transform="translate(1715.31 1039.188)"
            >
                <tspan
                    x={22.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF 7/1A"}
                </tspan>
            </text>
            <path
                fill="url(#g)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 547.382 369.81)"
            />
            <path
                fill="url(#g)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 544.777 375.899)"
            />
            <path
                fill="url(#g)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 535.053 367.398)"
            />
            <path
                fill="url(#h)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 535.332 377.386)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 537.52 380.944)"
            />
            <path
                fill="url(#h)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 214.124 914.893)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 565.068 350.867)"
            />
            <path
                fill="url(#i)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 531.838 366.055)"
            />
            <path
                fill="url(#j)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 536.097 336.346)"
            />
            <path
                fill="url(#k)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 172.85 848.663)"
            />
            <path
                fill="url(#k)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 172.85 841.8)"
            />
            <path
                fill="url(#k)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 172.85 836.611)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 172.836 874.381)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 173.66 848.664)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 172.85 874.819)"
            />
            <path
                fill="url(#l)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 102.576 440.925)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 172.836 876.7)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 172.85 841.987)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 526.672 359.499)"
            />
            <path
                fill="url(#m)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 102.577 447.797)"
            />
            <g fill="url(#k)" transform="rotate(-90 531.63 364.078)">
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
                transform="translate(144.954 907.648)"
            >
                <tspan
                    x={22.5}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF 7/2A"}
                </tspan>
            </text>
            <path
                fill="url(#g)"
                d="M4.6 0H0v18.8h4.6V0z"
                transform="rotate(-90 561.008 487.65)"
            />
            <path
                fill="url(#g)"
                d="M.9 0h1.7c.5 0 .9.4.9.9v34.4c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 558.403 493.738)"
            />
            <path
                fill="url(#g)"
                d="M4.6 0H0v38.7h4.6V0z"
                transform="rotate(-90 548.68 485.238)"
            />
            <path
                fill="url(#h)"
                d="M10.4 0H0v49.1h10.4V0z"
                transform="rotate(-90 548.958 495.226)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h19.9c.5 0 1 .4 1 .9V2c0 .5-.5.9-1 .9H.9C.4 2.9 0 2.5 0 2V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 551.145 498.784)"
            />
            <path
                fill="url(#h)"
                d="m14.8 0-2.1 7.3H2.1L0 0h14.8z"
                transform="matrix(0 -1 -1 0 109.91 1046.359)"
            />
            <path
                fill="url(#h)"
                d="M.9 0h15.3c.5 0 1 .4 1 .9v1.4c0 .5-.5.9-1 .9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 578.694 468.707)"
            />
            <path
                fill="url(#i)"
                d="M.9 0h.6c.5 0 .9.4.9.9v40.6c0 .5-.4.9-.9.9H.9c-.5 0-.9-.4-.9-.9V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 545.464 483.895)"
            />
            <path
                fill="url(#j)"
                d="M0 0h24.9v4.2H0V0z"
                transform="rotate(-90 549.723 454.186)"
            />
            <path
                fill="url(#k)"
                d="M0 0h26.7v27H0V0z"
                transform="matrix(0 1 1 0 68.637 980.13)"
            />
            <path
                fill="url(#k)"
                d="M0 0h6.9v27.1H0V0z"
                transform="matrix(0 1 1 0 68.637 973.266)"
            />
            <path
                fill="url(#k)"
                d="M5.4 0v27.1S0 27.1 0 13.6C0 .2 5.4 0 5.4 0z"
                transform="matrix(0 1 1 0 68.637 968.077)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27H0V0z"
                transform="matrix(0 1 1 0 68.622 1005.847)"
            />
            <g fill="url(#k)" transform="matrix(0 1 1 0 69.447 980.13)">
                <path d="M0 1.908h24v.8H0v-.8zM0 5.723h24v.8H0v-.8zM0 7.631h24v.8H0v-.8zM0 9.54h24v.8H0v-.8zM0 11.447h24v.8H0v-.8zM0 13.617h24v.8H0v-.8zM0 15.367h24v.8H0v-.8zM0 17.118h24v.8H0v-.8zM0 18.869h24v.8H0v-.8zM0 20.986h24v.8H0v-.8zM0 22.894h24v.8H0v-.8zM0 24.802h24v.8H0v-.8zM0 0h24v.8H0V0zM0 3.816h24v.8H0v-.8z" />
            </g>
            <path
                fill="url(#k)"
                d="M0 0h2v27H0V0z"
                transform="matrix(0 1 1 0 68.636 1006.284)"
            />
            <path
                fill="url(#l)"
                d="M37.4 0s-4.5 3.7-5.2 4.8H5.3C3.9 3 0 0 0 0h37.4z"
                transform="rotate(180 50.469 506.658)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.4v27.1H0V0z"
                transform="matrix(0 1 1 0 68.622 1008.167)"
            />
            <path
                fill="url(#k)"
                d="M0 0h.6v27.1H0V0z"
                transform="matrix(0 1 1 0 68.637 973.453)"
            />
            <path
                fill="url(#k)"
                d="M.9 0h2.5c.5 0 .9.4.9.9v36.7c0 .5-.4 1-.9 1H.9c-.5 0-.9-.5-.9-1V.9C0 .4.4 0 .9 0z"
                transform="rotate(-90 540.298 477.339)"
            />
            <path
                fill="url(#m)"
                d="m37.4 0-5.2 9.5H5.3L0 0h37.4z"
                transform="rotate(180 50.47 513.53)"
            />
            <g fill="url(#k)" transform="rotate(-90 545.257 481.918)">
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
                transform="translate(40.74 1039.114)"
            >
                <tspan
                    x={22}
                    y={29}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PF 7/2B"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M103.3 93.65H82v9.7l-23.2-19.4L82 64.65v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(51.74 93.571)"
            >
                <tspan
                    x={8.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO FT8"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M103.3 200.75H82v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(51.74 200.67)"
            >
                <tspan
                    x={13.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CWS"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1881.04 93.65h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1829.48 93.571)"
            >
                <tspan
                    x={13.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CRW"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1881.04 170.571h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1819.98 170.492)"
            >
                <tspan
                    x={11.6}
                    y={21}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FROM PF "}
                </tspan>
                <tspan
                    x={16.6}
                    y={38}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"7/1A 1B"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1881.04 307.849h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1829.48 307.77)"
            >
                <tspan
                    x={8.6}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FROM FT3"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1862.04 630.794h-21.3v9.7l-23.2-19.4 23.2-19.3v9.7h21.3v19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1771.74 630.714)"
            >
                <tspan
                    x={7}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FROM CRY ST"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1817.56 688.405h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1781.48 711.69)"
            >
                <tspan
                    x={11.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO CRY ST"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1817.56 769.381h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1810.48 788.611)"
            >
                <tspan
                    x={8.1}
                    y={29.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO FT8"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1817.56 846.302h21.3v-9.7l23.2 19.4-23.2 19.3v-9.7h-21.3v-19.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10.5pt",
                    fontWeight: 700,
                }}
                transform="translate(1810.48 865.531)"
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
                d="M113.197 1042.115h185v-91h28.3M217.411 909.04h108.2M1532.669 953.825h68v85.8h125.7M1641.712 906.409h-108.5M1817.54 855.357h-34.8v-57.2h-139v98.5"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1817.54 778.862h-34.8v19.3h-2M1817.54 697.054h-173.8v101.1"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1817.54 621.14h-257.3v124.6h-27"
            />
            <path
                fill="url(#H)"
                d="M0 0h1.1v.7H0V0z"
                transform="translate(1654.21 695.47)"
            />
            <path
                fill="url(#H)"
                d="M0 0h3.2v4.7H0V0z"
                transform="translate(1653.187 690.888)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.187 693.766)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.187 694.441)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.187 694.932)"
            />
            <path
                fill="#cdcece"
                stroke="#cdcece"
                d="M1653.565 689.62h2.5v1.6h-2.5v-1.6z"
            />
            <path fill="#b4b5b5" stroke="#b4b5b5" d="M1652.597 689.62h1v1.6h-1v-1.6z" />
            <path fill="#eee" stroke="#eee" d="M1656.057 689.62h.8v1.6h-.8v-1.6z" />
            <path
                fill="url(#J)"
                d="M0 0h2.8v1.2H0V0z"
                transform="translate(1653.37 684.418)"
            />
            <path
                fill="url(#H)"
                d="M0 0h3.2v3.6H0V0z"
                transform="translate(1653.163 680.992)"
            />
            <path
                stroke="#000"
                d="M1645.74 671.879c0-5 4-9.1 9-9.1s9 4.1 9 9.1c0 5.1-4 9.2-9 9.2s-9-4.1-9-9.2z"
            />
            <path
                fill="#9e9f9f"
                d="M1646.5 671.952c0-4.7 3.7-8.4 8.2-8.4 4.6 0 8.3 3.7 8.3 8.4 0 4.6-3.7 8.3-8.3 8.3-4.5 0-8.2-3.7-8.2-8.3z"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.163 682.967)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.163 683.485)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.163 683.976)"
            />
            <path
                fill="#ebeae9"
                d="M1646.763 672.03c0-4.5 3.6-8.1 8-8.1s8 3.6 8 8.1-3.6 8.1-8 8.1-8-3.6-8-8.1z"
            />
            <path
                fill="none"
                stroke="#000"
                d="m1660.025 666.837-.666.898M1659.225 676.607l.8.8M1650.246 676.116l-1 .9M1654.668 664.574v1.2M1654.668 678.223v1.2M1647.116 671.959h1.2M1661.177 671.959h1.2M1649.626 666.57l.8.8"
            />
            <path
                fill="#fff"
                fillOpacity={0.73}
                d="M1658.56 674.542c3.6-5.6-.5-10.3-.5-10.3 2.9 1.3 4.9 4.2 4.9 7.7 0 4.6-3.7 8.4-8.2 8.4-1.8 0-3.5-.6-4.8-1.6.2.2 5 1.4 8.6-4.2z"
            />
            <path
                stroke="#000"
                d="m1648.744 667.639 5.479 3.51s1.719 1.223 2.971 1.253c0 0 .447.027.147.547l-.637.902s-.387.47-.62-.126c0 0-.689-1.207-2.198-2.193l-5.142-3.893z"
            />
            <path
                stroke="#000"
                d="M1654.416 671.101c.41-.11.756.09.78.45.16.323-.09.756-.45.78-.324.16-.67-.04-.78-.45-.16-.324.04-.67.45-.78z"
            />
            <path
                fill="url(#H)"
                d="M.1.1c.2-.1.4-.1.6 0C.8.3.8.5.7.7.5.8.3.8.1.7 0 .5 0 .3.1.1z"
                transform="rotate(30 -425.223 3422.82)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.187 692.016)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.187 692.535)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1653.187 693.182)"
            />
            <path
                fill="#cdcece"
                stroke="#cdcece"
                d="M1653.492 685.384h2.5v1.6h-2.5v-1.6z"
            />
            <path
                fill="#b4b5b5"
                stroke="#b4b5b5"
                d="M1652.524 685.384h1v1.6h-1v-1.6z"
            />
            <path fill="#eee" stroke="#eee" d="M1655.985 685.384h.8v1.6h-.8v-1.6z" />
            <path
                fill="url(#K)"
                d="M.3 0h16.6c.2 0 .3.1.3.3v2.1c0 .1-.1.3-.3.3H.3c-.2 0-.3-.2-.3-.3V.3C0 .1.1 0 .3 0z"
                transform="translate(1646.118 686.943)"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1647.477 700.15h112.5v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1650.805 724.346h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1650.805 724.346)"
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
                d="M1650.805 704.202h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1650.805 704.202)"
            >
                <tspan
                    x={38.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI 15"}
                </tspan>
            </text>
            <path
                fill="url(#H)"
                d="M0 0h1.1v.7H0V0z"
                transform="translate(1584.473 618.81)"
            />
            <path
                fill="url(#H)"
                d="M0 0h3.2v4.7H0V0z"
                transform="translate(1583.45 614.228)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.45 617.106)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.45 617.781)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.45 618.273)"
            />
            <path
                fill="#cdcece"
                stroke="#cdcece"
                d="M1583.827 612.96h2.5v1.6h-2.5v-1.6z"
            />
            <path fill="#b4b5b5" stroke="#b4b5b5" d="M1582.86 612.96h1v1.6h-1v-1.6z" />
            <path fill="#eee" stroke="#eee" d="M1586.32 612.96h.8v1.6h-.8v-1.6z" />
            <path
                fill="url(#J)"
                d="M0 0h2.8v1.2H0V0z"
                transform="translate(1583.633 607.758)"
            />
            <path
                fill="url(#H)"
                d="M0 0h3.2v3.6H0V0z"
                transform="translate(1583.426 604.332)"
            />
            <path
                stroke="#000"
                d="M1576.002 595.219c0-5 4-9.1 9-9.1s9 4.1 9 9.1c0 5.1-4 9.2-9 9.2s-9-4.1-9-9.2z"
            />
            <path
                fill="#9e9f9f"
                d="M1576.763 595.292c0-4.7 3.7-8.4 8.2-8.4 4.6 0 8.3 3.7 8.3 8.4 0 4.6-3.7 8.3-8.3 8.3-4.5 0-8.2-3.7-8.2-8.3z"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.426 606.307)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.426 606.825)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.426 607.317)"
            />
            <path
                fill="#ebeae9"
                d="M1577.026 595.37c0-4.5 3.6-8.1 8-8.1s8 3.6 8 8.1-3.6 8.1-8 8.1-8-3.6-8-8.1z"
            />
            <path
                fill="none"
                stroke="#000"
                d="m1590.287 590.177-.666.898M1589.487 599.948l.8.8M1580.508 599.456l-1 .9M1584.93 587.914v1.2M1584.93 601.564v1.2M1577.379 595.299h1.2M1591.44 595.299h1.2M1579.888 589.91l.8.8"
            />
            <path
                fill="#fff"
                fillOpacity={0.73}
                d="M1588.823 597.882c3.6-5.6-.5-10.3-.5-10.3 2.9 1.3 4.9 4.2 4.9 7.7 0 4.6-3.7 8.4-8.2 8.4-1.8 0-3.5-.6-4.8-1.6.2.2 5 1.4 8.6-4.2z"
            />
            <path
                stroke="#000"
                d="m1579.006 590.98 5.48 3.509s1.718 1.223 2.97 1.254c0 0 .447.026.147.546l-.636.903s-.387.47-.62-.127c0 0-.69-1.206-2.198-2.193l-5.143-3.893z"
            />
            <path
                stroke="#000"
                d="M1584.679 594.441c.41-.11.756.09.78.45.159.323-.091.756-.45.78-.324.16-.67-.04-.78-.45-.16-.324.04-.67.45-.78z"
            />
            <path
                fill="url(#H)"
                d="M.1.1c.2-.1.4-.1.6 0C.8.3.8.5.7.7.5.8.3.8.1.7 0 .5 0 .3.1.1z"
                transform="rotate(30 -317.043 3254.357)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.45 615.356)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.45 615.875)"
            />
            <path
                fill="url(#I)"
                d="M0 0h3.2v.2H0V0z"
                transform="translate(1583.45 616.522)"
            />
            <path
                fill="#cdcece"
                stroke="#cdcece"
                d="M1583.754 608.724h2.5v1.6h-2.5v-1.6z"
            />
            <path
                fill="#b4b5b5"
                stroke="#b4b5b5"
                d="M1582.787 608.724h1v1.6h-1v-1.6z"
            />
            <path fill="#eee" stroke="#eee" d="M1586.247 608.724h.8v1.6h-.8v-1.6z" />
            <path
                fill="url(#K)"
                d="M.3 0h16.6c.2 0 .3.1.3.3v2.1c0 .1-.1.3-.3.3H.3c-.2 0-.3-.2-.3-.3V.3C0 .1.1 0 .3 0z"
                transform="translate(1576.38 610.283)"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1533.74 522.49h112.5v46h-112.5v-46z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1537.067 546.686h105.1v19.2h-105.1v-19.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1537.067 546.686)"
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
                d="M1537.067 526.542h105.1v18.6h-105.1v-18.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1537.067 526.542)"
            >
                <tspan
                    x={38.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TI 16"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1728.913 1028.24v-210.9h-85.2M109.987 1031.159h-2.8v-248h109.3v115.6M284.877 510.505h-152.7M217.411 381.473h36v129M103.32 189.857h112.3v181.9"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M131.28 503.828v-223.6h85.2M505.324 354.101h26.4v-88.6h62.2M103.32 85.35h428.4v180.1"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M427.317 268.868h-1.6v-128.7h100c0-3.3 2.7-6 6-6s6 2.7 6 6h114.2v56.8M651.9 140.15H664c0-3.3 2.7-6 6-6s6 2.7 6 6h246.3v200.1"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M922.258 140.15h61.7c0-3.3 2.7-6 6-6 3.4 0 6 2.7 6 6h151.8"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M595.74 87.15h837v284.6M670.007 196.964v-109.8M990.022 343.846v-256.7"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1345.117 505.12v-240.1h87.6M1433.617 381.917h96.7M1348.403 512.689h130v-130.8M1836.54 298.194h-90.4M1837.63 161.826h-149.9v26M1689.223 239.721v18.7"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M1836.54 83.996h-246.8v172.6h2.4M1211.29 427.525h26v160.9h-938.5c0-3.3-2.7-6-6-6s-6 2.7-6 6h-71.2v194.7"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M326.455 778.46h-32.7v-218.3h938.5c0-3.3 2.7-6 6-6s6 2.7 6 6h20.5v-172.2h-20.6c0-3.3-2.6-6-6-6-3.3 0-6 2.7-6 6h-20.9"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M822.74 244.341h93.5c0-3.3 2.7-6 6-6s6 2.7 6 6h55.8c0-3.3 2.6-6 6-6 3.3 0 6 2.7 6 6h268.6v143.6"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={4}
                d="M822.74 269.942h93.5c0-3.3 2.7-6 6-6s6 2.7 6 6h55.8c0-3.3 2.6-6 6-6 3.3 0 6 2.7 6 6h242.2v157.6"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#ffc000",
                    fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "30pt",
                }}
                transform="translate(323.74 996.15)"
            >
                <tspan
                    x={303.5}
                    y={52}
                    style={{
                        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"COOLING WATER TOWER"}
                </tspan>
            </text>
        </svg>

      )
}

export default ChilledHMI