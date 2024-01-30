import * as React from "react"
const Deo2HMI = ({ value }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox="1 1 1920 1080" >
        <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a4a7a7" />
                    <stop offset={0.15} stopColor="#dfe3e3" />
                    <stop offset={0.25} stopColor="#edefef" />
                    <stop offset={0.52} stopColor="#c1c5c5" />
                    <stop offset={0.69} stopColor="#acafaf" />
                    <stop offset={0.8} stopColor="#a2a5a5" />
                    <stop offset={1} stopColor="#999c9c" />
                </linearGradient>
                <linearGradient id="b" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a4a7a7" />
                    <stop offset={0.15} stopColor="#dfe3e3" />
                    <stop offset={0.25} stopColor="#edefef" />
                    <stop offset={0.52} stopColor="#c1c5c5" />
                    <stop offset={0.69} stopColor="#acafaf" />
                    <stop offset={0.8} stopColor="#a2a5a5" />
                    <stop offset={0.92} stopColor="#999c9c" />
                    <stop offset={1} stopColor="#b0b3b3" />
                </linearGradient>
                <linearGradient id="c" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#838b8b" />
                    <stop offset={0.15} stopColor="#b8c1c1" />
                    <stop offset={0.25} stopColor="#d9dddd" />
                    <stop offset={0.52} stopColor="#9ba4a4" />
                    <stop offset={0.69} stopColor="#8a9292" />
                    <stop offset={0.8} stopColor="#828989" />
                    <stop offset={0.92} stopColor="#7a8181" />
                    <stop offset={1} stopColor="#8d9595" />
                </linearGradient>
                <linearGradient id="d" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#949a9a" />
                    <stop offset={0.15} stopColor="#cdd3d3" />
                    <stop offset={0.25} stopColor="#e3e7e7" />
                    <stop offset={0.52} stopColor="#b0b6b6" />
                    <stop offset={0.69} stopColor="#9ca2a2" />
                    <stop offset={0.8} stopColor="#939898" />
                    <stop offset={0.92} stopColor="#8b9090" />
                    <stop offset={1} stopColor="#a0a5a5" />
                </linearGradient>
                <linearGradient
                    id="e"
                    x1={-4}
                    x2={53}
                    y1={41}
                    y2={8}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#c4c7c7" />
                    <stop offset={0.25} stopColor="#e3e6e6" />
                    <stop offset={0.44} stopColor="#b9bcbc" />
                    <stop offset={0.6} stopColor="#a4a7a7" />
                    <stop offset={0.8} stopColor="#848787" />
                    <stop offset={1} stopColor="#656767" />
                </linearGradient>
                <linearGradient id="f" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9c9f9f" />
                    <stop offset={0.01} stopColor="#e4e7e7" />
                    <stop offset={0.03} stopColor="#cbcfcf" />
                    <stop offset={0.64} stopColor="#c8cccc" />
                    <stop offset={0.99} stopColor="#c4c7c7" />
                    <stop offset={1} stopColor="#919393" />
                </linearGradient>
                <linearGradient id="g" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#3d3b3b" />
                    <stop offset={0.01} stopColor="#908f8f" />
                    <stop offset={0.02} stopColor="#514f4f" />
                    <stop offset={0.64} stopColor="#504e4e" />
                    <stop offset={0.99} stopColor="#4e4c4c" />
                    <stop offset={1} stopColor="#383636" />
                </linearGradient>
                <linearGradient id="h" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#97aa93" />
                    <stop offset={0.15} stopColor="#d0e8cb" />
                    <stop offset={0.25} stopColor="#e5f2e2" />
                    <stop offset={0.52} stopColor="#b3c9ae" />
                    <stop offset={0.69} stopColor="#9fb39b" />
                    <stop offset={0.8} stopColor="#96a992" />
                    <stop offset={0.92} stopColor="#8e9f89" />
                    <stop offset={1} stopColor="#a3b79e" />
                </linearGradient>
                <linearGradient id="i" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#789c71" />
                    <stop offset={0.15} stopColor="#abd6a2" />
                    <stop offset={0.25} stopColor="#d3e8d0" />
                    <stop offset={0.52} stopColor="#8fb886" />
                    <stop offset={0.69} stopColor="#7fa477" />
                    <stop offset={0.8} stopColor="#779b70" />
                    <stop offset={0.92} stopColor="#709269" />
                    <stop offset={1} stopColor="#82a87a" />
                </linearGradient>
                <linearGradient id="j" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#628a58" />
                    <stop offset={0.15} stopColor="#91c086" />
                    <stop offset={0.25} stopColor="#c9ddc4" />
                    <stop offset={0.52} stopColor="#75a369" />
                    <stop offset={0.69} stopColor="#67915d" />
                    <stop offset={0.8} stopColor="#618957" />
                    <stop offset={0.92} stopColor="#5b8152" />
                    <stop offset={1} stopColor="#6a945f" />
                </linearGradient>
                <linearGradient id="k" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#b3a593" />
                    <stop offset={0.03} stopColor="#fdeeda" />
                    <stop offset={0.05} stopColor="#e9d7bf" />
                    <stop offset={0.64} stopColor="#e5d3bc" />
                    <stop offset={0.95} stopColor="#e0ceb8" />
                    <stop offset={1} stopColor="#a69988" />
                </linearGradient>
                <linearGradient id="l" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9e9e9e" />
                    <stop offset={0.15} stopColor="#f6f6f6" />
                    <stop offset={0.26} stopColor="#fff" />
                    <stop offset={0.41} stopColor="#fff" />
                    <stop offset={0.6} stopColor="#d1d1d1" />
                    <stop offset={0.8} stopColor="#a8a8a8" />
                    <stop offset={0.93} stopColor="#898989" />
                </linearGradient>
                <linearGradient id="m" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9c9080" />
                    <stop offset={0.15} stopColor="#f4e1c8" />
                    <stop offset={0.26} stopColor="#fdebd5" />
                    <stop offset={0.41} stopColor="#fde9d1" />
                    <stop offset={0.6} stopColor="#d0bfaa" />
                    <stop offset={0.8} stopColor="#a69988" />
                    <stop offset={0.93} stopColor="#887d6f" />
                </linearGradient>
                <linearGradient id="n" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} />
                    <stop offset={0.03} stopColor="#7c7c7c" />
                    <stop offset={0.05} />
                    <stop offset={0.64} />
                    <stop offset={0.95} />
                    <stop offset={1} />
                </linearGradient>
                <linearGradient id="o" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#b3a593" />
                    <stop offset={0.03} stopColor="#fdeeda" />
                    <stop offset={0.05} stopColor="#e9d7bf" />
                    <stop offset={0.64} stopColor="#e5d3bc" />
                    <stop offset={0.95} stopColor="#e0ceb8" />
                    <stop offset={1} stopColor="#a69988" />
                </linearGradient>
                <linearGradient id="p" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a7a7a7" />
                    <stop offset={0.15} stopColor="#e1e1e1" />
                    <stop offset={0.25} stopColor="#e4e4e4" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.92} stopColor="#959595" />
                </linearGradient>
                <linearGradient id="q" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#777" />
                    <stop offset={0.15} stopColor="#bbb" />
                    <stop offset={0.26} stopColor="#c9c9c9" />
                    <stop offset={0.41} stopColor="#c3c3c3" />
                    <stop offset={0.6} stopColor="#9f9f9f" />
                    <stop offset={0.8} stopColor="#7e7e7e" />
                    <stop offset={0.93} stopColor="#676767" />
                </linearGradient>
                <linearGradient id="r" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#949494" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#d1d1d1" />
                    <stop offset={0.44} stopColor="#a9a9a9" />
                    <stop offset={0.6} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#7e7e7e" />
                    <stop offset={0.97} stopColor="#737373" />
                    <stop offset={1} stopColor="#9a9a9a" />
                </linearGradient>
                <linearGradient id="s" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#8f8f8f" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#e0e0e0" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                    <stop offset={1} stopColor="#9a9a9a" />
                </linearGradient>
                <linearGradient id="t" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#4d7ca5" />
                    <stop offset={0.15} stopColor="#78aada" />
                    <stop offset={0.25} stopColor="#c0d3ea" />
                    <stop offset={0.44} stopColor="#598ebc" />
                    <stop offset={0.6} stopColor="#4f7ea7" />
                    <stop offset={0.8} stopColor="#416a8d" />
                    <stop offset={0.97} stopColor="#3b6080" />
                    <stop offset={1} stopColor="#5181ab" />
                </linearGradient>
                <linearGradient id="u" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#30679b" />
                    <stop offset={0.15} stopColor="#5d93cf" />
                    <stop offset={0.25} stopColor="#b8c9e4" />
                    <stop offset={0.44} stopColor="#3876b1" />
                    <stop offset={0.6} stopColor="#30699e" />
                    <stop offset={0.8} stopColor="#275785" />
                    <stop offset={0.97} stopColor="#234f79" />
                    <stop offset={1} stopColor="#326ba1" />
                </linearGradient>
                <linearGradient id="v" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#c4aa84" />
                    <stop offset={0.15} stopColor="#ffe0b3" />
                    <stop offset={0.25} stopColor="#ffeed7" />
                    <stop offset={0.44} stopColor="#dfc297" />
                    <stop offset={0.6} stopColor="#c7ad86" />
                    <stop offset={0.8} stopColor="#a89170" />
                    <stop offset={0.97} stopColor="#998566" />
                    <stop offset={1} stopColor="#cbb189" />
                </linearGradient>
                <linearGradient id="w" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0.25} stopColor="#ebebeb" />
                    <stop offset={0.37} stopColor="#c2c2c2" />
                    <stop offset={0.82} stopColor="#6185a8" />
                    <stop offset={0.85} stopColor="#909090" stopOpacity={0.47} />
                </linearGradient>
                <linearGradient id="x" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#949990" />
                    <stop offset={0.15} stopColor="#cdd2c7" />
                    <stop offset={0.25} stopColor="#e3e6e1" />
                    <stop offset={0.52} stopColor="#b0b5aa" />
                    <stop offset={0.69} stopColor="#9ca197" />
                    <stop offset={0.8} stopColor="#93988f" />
                    <stop offset={0.92} stopColor="#8b8f86" />
                    <stop offset={1} stopColor="#a0a59b" />
                </linearGradient>
                <linearGradient id="y" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#949990" />
                    <stop offset={0.15} stopColor="#cdd2c7" />
                    <stop offset={0.25} stopColor="#e3e6e1" />
                    <stop offset={0.52} stopColor="#b0b5aa" />
                    <stop offset={0.69} stopColor="#9ca197" />
                    <stop offset={0.8} stopColor="#93988f" />
                    <stop offset={0.92} stopColor="#8b8f86" />
                    <stop offset={1} stopColor="#a0a59b" />
                </linearGradient>
                <linearGradient id="z" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#949990" />
                    <stop offset={0.15} stopColor="#cdd2c7" />
                    <stop offset={0.25} stopColor="#e3e6e1" />
                    <stop offset={0.52} stopColor="#b0b5aa" />
                    <stop offset={0.69} stopColor="#9ca197" />
                    <stop offset={0.8} stopColor="#93988f" />
                    <stop offset={0.92} stopColor="#8b8f86" />
                    <stop offset={1} stopColor="#84877f" />
                </linearGradient>
                <linearGradient id="A" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#898c85" />
                    <stop offset={0.15} stopColor="#bfc3ba" />
                    <stop offset={0.25} stopColor="#dddeda" />
                    <stop offset={0.52} stopColor="#a2a69d" />
                    <stop offset={0.69} stopColor="#90938b" />
                    <stop offset={0.8} stopColor="#888b83" />
                    <stop offset={0.92} stopColor="#80837c" />
                    <stop offset={1} stopColor="#94978f" />
                </linearGradient>
                <linearGradient id="B" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#0082b2" />
                    <stop offset={0.15} stopColor="#45b6f1" />
                    <stop offset={0.25} stopColor="#b3d8f7" />
                    <stop offset={0.52} stopColor="#009ad2" />
                    <stop offset={0.69} stopColor="#08b" />
                    <stop offset={0.8} stopColor="#0080b0" />
                    <stop offset={0.92} stopColor="#0079a6" />
                    <stop offset={1} stopColor="#008cbf" />
                </linearGradient>
                <linearGradient id="C" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#37638a" />
                    <stop offset={0.15} stopColor="#6593c0" />
                    <stop offset={0.25} stopColor="#bac9dd" />
                    <stop offset={0.52} stopColor="#4276a3" />
                    <stop offset={0.69} stopColor="#3a6991" />
                    <stop offset={0.8} stopColor="#366289" />
                    <stop offset={0.92} stopColor="#335d81" />
                    <stop offset={1} stopColor="#3c6b94" />
                </linearGradient>
                <linearGradient id="D" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#c4aa84" />
                    <stop offset={0.15} stopColor="#ffe0b3" />
                    <stop offset={0.25} stopColor="#ffe6c3" />
                    <stop offset={0.44} stopColor="#dfc297" />
                    <stop offset={0.6} stopColor="#c7ad86" />
                    <stop offset={0.8} stopColor="#a89170" />
                    <stop offset={0.97} stopColor="#998566" />
                    <stop offset={1} stopColor="#cbb189" />
                </linearGradient>
                <linearGradient id="E" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#b38541" />
                    <stop offset={0.15} stopColor="#f3bb6f" />
                    <stop offset={0.25} stopColor="#f8dabd" />
                    <stop offset={0.52} stopColor="#d49e4f" />
                    <stop offset={0.69} stopColor="#bd8c45" />
                    <stop offset={0.8} stopColor="#b28441" />
                    <stop offset={0.92} stopColor="#a87d3d" />
                    <stop offset={1} stopColor="#c19047" />
                </linearGradient>
                <linearGradient id="F" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9aa1aa" />
                    <stop offset={0.22} stopColor="#aeb5c0" />
                    <stop offset={0.57} stopColor="#dce0e5" />
                    <stop offset={0.84} stopColor="#cacfd7" />
                    <stop offset={1} stopColor="#a7afb9" />
                </linearGradient>
                <linearGradient id="G" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#8f969d" />
                    <stop offset={0.64} stopColor="#d3d8de" />
                    <stop offset={1} stopColor="#9aa0a8" />
                </linearGradient>
                <linearGradient id="H" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#626974" />
                    <stop offset={0.66} stopColor="#ccd0d5" />
                    <stop offset={1} stopColor="#5e6670" />
                </linearGradient>
                <linearGradient id="I" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#a3abb1" />
                    <stop offset={0.03} stopColor="#ecf4fb" />
                    <stop offset={0.05} stopColor="#d5dee6" />
                    <stop offset={0.64} stopColor="#d1dae3" />
                    <stop offset={0.95} stopColor="#cdd5dd" />
                    <stop offset={1} stopColor="#979ea4" />
                </linearGradient>
                <linearGradient id="L" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#79ae42" />
                    <stop offset={0.22} stopColor="#89c34b" />
                    <stop offset={0.57} stopColor="#cde7bb" />
                    <stop offset={0.84} stopColor="#afda8c" />
                    <stop offset={1} stopColor="#84bc48" />
                </linearGradient>
                <linearGradient id="M" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6f9f3b" />
                    <stop offset={0.64} stopColor="#c2e2aa" />
                    <stop offset={1} stopColor="#77aa40" />
                </linearGradient>
                <linearGradient id="N" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#649035" />
                    <stop offset={0.66} stopColor="#cde7bb" />
                    <stop offset={1} stopColor="#608b33" />
                </linearGradient>
                <linearGradient id="O" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.03} stopColor="#afda8c" />
                    <stop offset={0.05} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.95} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient id="R" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#bac0c1" />
                    <stop offset={0.15} stopColor="#f4fafc" />
                    <stop offset={0.25} stopColor="#f8fcfd" />
                    <stop offset={0.44} stopColor="#d5dbdd" />
                    <stop offset={0.6} stopColor="#bdc3c4" />
                    <stop offset={0.8} stopColor="#a0a4a6" />
                    <stop offset={0.97} stopColor="#929697" />
                    <stop offset={1} stopColor="#c2c7c9" />
                </linearGradient>
                <linearGradient id="S" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#b5b5b5" />
                    <stop offset={0.03} stopColor="#fff" />
                    <stop offset={0.08} stopColor="#ebebeb" />
                    <stop offset={0.64} stopColor="#e7e7e7" />
                    <stop offset={0.95} stopColor="#e2e2e2" />
                    <stop offset={1} stopColor="#a8a8a8" />
                </linearGradient>
                <linearGradient id="T" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#bac0c1" />
                    <stop offset={0.15} stopColor="#f4fafc" />
                    <stop offset={0.25} stopColor="#f8fcfd" />
                    <stop offset={0.44} stopColor="#d5dbdd" />
                    <stop offset={0.6} stopColor="#bdc3c4" />
                    <stop offset={0.8} stopColor="#a0a4a6" />
                    <stop offset={0.97} stopColor="#929697" />
                    <stop offset={1} stopColor="#c2c7c9" />
                </linearGradient>
                <linearGradient id="U" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#939798" />
                    <stop offset={0.15} stopColor="#c5cacb" />
                    <stop offset={0.25} stopColor="#dfe2e2" />
                    <stop offset={0.44} stopColor="#a8adae" />
                    <stop offset={0.6} stopColor="#959a9b" />
                    <stop offset={0.8} stopColor="#7d8182" />
                    <stop offset={0.97} stopColor="#727676" />
                    <stop offset={1} stopColor="#999d9e" />
                </linearGradient>
                <linearGradient id="V" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.03} stopColor="#afda8c" />
                    <stop offset={0.08} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.95} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient
                    id="W"
                    x1={0}
                    x2={2}
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
                <linearGradient id="X" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#858585" />
                    <stop offset={0.15} stopColor="#b5b5b5" />
                    <stop offset={0.25} stopColor="#c4c4c4" />
                    <stop offset={0.44} stopColor="#999" />
                    <stop offset={0.6} stopColor="#888" />
                    <stop offset={0.8} stopColor="#727272" />
                    <stop offset={0.97} stopColor="#686868" />
                    <stop offset={1} stopColor="#8b8b8b" />
                </linearGradient>
                <linearGradient id="Y" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#818181" />
                    <stop offset={0.15} stopColor="#b5b5b5" />
                    <stop offset={0.25} stopColor="#d8d8d8" />
                    <stop offset={0.52} stopColor="#999" />
                    <stop offset={0.69} stopColor="#888" />
                    <stop offset={0.8} stopColor="gray" />
                    <stop offset={0.92} stopColor="#787878" />
                    <stop offset={1} stopColor="#8b8b8b" />
                </linearGradient>
                <radialGradient
                    id="J"
                    cx={9}
                    cy={9}
                    r={13}
                    fx={9}
                    fy={9}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#c7cbd1" />
                    <stop offset={0.91} stopColor="#c4c7cd" />
                    <stop offset={0.74} stopColor="#d4d8dd" />
                    <stop offset={0.54} stopColor="#b6bcc4" />
                </radialGradient>
                <radialGradient
                    id="K"
                    cx={2}
                    cy={2}
                    r={3}
                    fx={2}
                    fy={2}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#b7bcc4" />
                    <stop offset={0.91} stopColor="#b3b8c0" />
                    <stop offset={0.74} stopColor="#d2d5da" />
                    <stop offset={0.54} stopColor="#b3b8c0" />
                </radialGradient>
                <radialGradient
                    id="P"
                    cx={9}
                    cy={9}
                    r={13}
                    fx={9}
                    fy={9}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#8eca4e" />
                    <stop offset={0.91} stopColor="#8bc64c" />
                    <stop offset={0.74} stopColor="#bbdf9f" />
                    <stop offset={0.54} stopColor="#8bc64c" />
                </radialGradient>
                <radialGradient
                    id="Q"
                    cx={2}
                    cy={2}
                    r={3}
                    fx={2}
                    fy={2}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#8eca4e" />
                    <stop offset={0.91} stopColor="#8bc64c" />
                    <stop offset={0.74} stopColor="#bbdf9f" />
                    <stop offset={0.54} stopColor="#8bc64c" />
                </radialGradient>
            </defs>
            <path
                fill="#0e2350"
                stroke="#3498db"
                strokeWidth={4}
                d="M2 2.003h1920v1080H2v-1080z"
            />
            <g stroke="#839292">
                <path
                    fill="url(#a)"
                    d="M0 0h216.7v263.5H0V0z"
                    transform="translate(996.532 253.185)"
                />
                <path
                    fill="url(#a)"
                    d="M83.8 0h47.1l85.2 42.7H0L83.8 0z"
                    transform="translate(996.875 202.778)"
                />
                <path
                    fill="url(#b)"
                    d="M1.8 0h47.1c1 0 1.8.7 1.8 1.6v1.6c0 .9-.8 1.7-1.8 1.7H1.8C.8 4.9 0 4.1 0 3.2V1.6C0 .7.8 0 1.8 0z"
                    transform="translate(1078.772 197.886)"
                />
                <path
                    fill="url(#b)"
                    d="M2.9 0h230.3c1.6 0 3 .7 3 1.7v4.4c0 .9-1.4 1.7-3 1.7H2.9C1.3 7.8 0 7 0 6.1V1.7C0 .7 1.3 0 2.9 0z"
                    transform="translate(986.821 516.078)"
                />
                <path
                    fill="url(#b)"
                    d="M2.9 0h230.3c1.6 0 3 .7 3 1.7v4.4c0 .9-1.4 1.7-3 1.7H2.9C1.3 7.8 0 7 0 6.1V1.7C0 .7 1.3 0 2.9 0z"
                    transform="translate(986.821 245.402)"
                />
                <path
                    fill="url(#b)"
                    d="M2.9 0h209.3c1.7 0 3 .8 3 1.7v3.4c0 1-1.3 1.7-3 1.7H2.9C1.3 6.8 0 6.1 0 5.1V1.7C0 .8 1.3 0 2.9 0z"
                    transform="translate(997.316 298.768)"
                />
                <path
                    fill="url(#c)"
                    d="M2.9 0h209.3c1.7 0 3 .8 3 1.7v3.4c0 1-1.3 1.7-3 1.7H2.9C1.3 6.8 0 6.1 0 5.1V1.7C0 .8 1.3 0 2.9 0z"
                    transform="translate(997.316 352.157)"
                />
                <path
                    fill="url(#b)"
                    d="M2.9 0h209.3c1.7 0 3 .8 3 1.7v3.4c0 1-1.3 1.7-3 1.7H2.9C1.3 6.8 0 6.1 0 5.1V1.7C0 .8 1.3 0 2.9 0z"
                    transform="translate(997.316 406.844)"
                />
                <path
                    fill="url(#d)"
                    d="M2.9 0h209.3c1.7 0 3 .8 3 1.7v3.4c0 1-1.3 1.7-3 1.7H2.9C1.3 6.8 0 6.1 0 5.1V1.7C0 .8 1.3 0 2.9 0z"
                    transform="translate(997.316 460.882)"
                />
                <path
                    fill="url(#a)"
                    d="M0 31C0 13.9 13.9 0 31.1 0c17.1 0 31.1 13.9 31.1 31s-14 30.9-31.1 30.9C13.9 61.9 0 48.1 0 31z"
                    transform="translate(1073.82 268.647)"
                />
                <path
                    fill="url(#e)"
                    d="M0 24.4C0 10.9 10.9 0 24.5 0c13.4 0 24.4 10.9 24.4 24.4 0 13.4-11 24.3-24.4 24.3C10.9 48.7 0 37.8 0 24.4z"
                    transform="rotate(180 564.675 161.994)"
                />
                <path
                    fill="url(#a)"
                    d="M0 31C0 13.9 13.9 0 31.1 0c17.1 0 31.1 13.9 31.1 31s-14 30.9-31.1 30.9C13.9 61.9 0 48.1 0 31z"
                    transform="translate(1073.82 380.07)"
                />
                <path
                    fill="url(#e)"
                    d="M0 24.4C0 10.9 10.9 0 24.5 0c13.4 0 24.4 10.9 24.4 24.4 0 13.4-11 24.3-24.4 24.3C10.9 48.7 0 37.8 0 24.4z"
                    transform="rotate(180 564.675 217.706)"
                />
                <path
                    fill="url(#b)"
                    d="M0 0h9.5v24.8H0l.6-2.7h6.9V2.7H.6L0 0z"
                    transform="rotate(-90 753.657 -283.96)"
                />
                <path
                    fill="url(#f)"
                    d="M1.7 0h93.5c.9 0 1.7.5 1.7 1.2V53c0 .7-.8 1.3-1.7 1.3H1.7c-1 0-1.7-.6-1.7-1.3V1.2C0 .5.7 0 1.7 0z"
                    transform="translate(1001.592 468.444)"
                />
                <path
                    fill="url(#f)"
                    d="M0 0h103.5v7H0V0z"
                    transform="translate(998.265 516.916)"
                />
            </g>
            <g fill="none" stroke="#000">
                <path d="m1092.849 297.288 12.1-12.9 12.1 12.9M1104.94 284.388v12.9" />
            </g>
            <path
                fill="url(#g)"
                d="M.4 0h73.3c.2 0 .4.2.4.4v2.8c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.4C0 .2.2 0 .4 0z"
                transform="translate(1067.067 260.978)"
            />
            <path
                fill="url(#h)"
                d="M0 0h11.3v2.5H0V0z"
                transform="translate(1098.916 264.35)"
            />
            <path
                fill="url(#h)"
                d="M0 0h10v6.9H0V0z"
                transform="translate(1099.538 266.877)"
            />
            <path
                fill="url(#h)"
                d="M0 0h9.3v4.6H0V0z"
                transform="translate(1099.887 273.746)"
            />
            <path
                fill="url(#i)"
                d="M.1 0h9.2c.1 0 .2.1.2.1v.3s-.1.1-.2.1H.1L0 .4V.1L.1 0z"
                transform="translate(1099.814 278.199)"
            />
            <path
                fill="url(#j)"
                d="M0 0h9.3v.4H0V0z"
                transform="translate(1099.887 273.77)"
            />
            <path
                fill="url(#j)"
                d="M0 0h10v.4H0V0z"
                transform="translate(1099.55 266.877)"
            />
            <path
                fill="url(#h)"
                d="M0 0h5.5v.6H0V0z"
                transform="translate(1101.724 278.69)"
            />
            <g fill="none" stroke="#008ccc" strokeDasharray="2,5">
                <path d="m1094.642 289.033 9.9-9.6 9.9 9.8M1104.589 279.433v9.6" />
            </g>
            <g fill="none" stroke="#000">
                <path d="m1091.319 420.308 12.1-12.9 12.1 12.9M1103.41 407.408v12.9" />
            </g>
            <path
                fill="url(#g)"
                d="M.4 0h73.3c.2 0 .4.2.4.4v2.8c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.4C0 .2.2 0 .4 0z"
                transform="translate(1065.928 386.416)"
            />
            <path
                fill="url(#h)"
                d="M0 0h11.3v2.5H0V0z"
                transform="translate(1097.776 389.788)"
            />
            <path
                fill="url(#h)"
                d="M0 0h10v6.9H0V0z"
                transform="translate(1098.398 392.315)"
            />
            <path
                fill="url(#h)"
                d="M0 0h9.3v4.6H0V0z"
                transform="translate(1098.747 399.185)"
            />
            <path
                fill="url(#i)"
                d="M.1 0h9.2c.1 0 .2.1.2.1v.3s-.1.1-.2.1H.1L0 .4V.1L.1 0z"
                transform="translate(1098.674 403.637)"
            />
            <path
                fill="url(#j)"
                d="M0 0h9.3v.4H0V0z"
                transform="translate(1098.747 399.208)"
            />
            <path
                fill="url(#j)"
                d="M0 0h10v.4H0V0z"
                transform="translate(1098.41 392.315)"
            />
            <path
                fill="url(#h)"
                d="M0 0h5.5v.6H0V0z"
                transform="translate(1100.584 404.129)"
            />
            <g fill="none" stroke="#008ccc" strokeDasharray="2,5">
                <path d="m1093.502 414.471 9.9-9.6 9.9 9.8M1103.449 404.871v9.6" />
            </g>
            <g stroke="#92d050">
                <path fill="none" strokeWidth={4} d="M1154.112 262.608h690.8" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1154.112 268.608-12-6 12-6v12"
                />
            </g>
            <g stroke="#236ea1">
                <path fill="none" strokeWidth={2.667} d="M1149.76 388.045h100.4" />
                <path
                    fill="#236ea1"
                    strokeLinecap="round"
                    d="m1149.76 392.945-9.8-4.9 9.8-4.9v9.8"
                />
            </g>
            <path
                fill="none"
                stroke="#236ea1"
                strokeWidth={4}
                d="M1101.42 198.854v-41.3"
            />
            <g stroke="#236ea1">
                <path fill="none" strokeWidth={4} d="M1101.425 159.123h186.3" />
                <path
                    fill="#236ea1"
                    strokeLinecap="round"
                    d="m1287.725 153.123 12 6-12 6v-12"
                />
            </g>
            <path
                fill="#0070c0"
                stroke="#0070c0"
                d="M1308.78 152.67h11.5v-4.2l17.1 8.4-17.1 8.4v-4.2h-11.5v-8.4z"
            />
            <path fill="#fff" d="M1345.525 143.956h76.5v26.4h-76.5v-26.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1345.525 143.956)"
            >
                <tspan
                    x={13.2}
                    y={19.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"To G308"}
                </tspan>
            </text>
            <path
                fill="#00b0f0"
                stroke="#00b0f0"
                d="M1283.05 391.688h-11.5v4.2l-17.1-8.4 17.1-8.4v4.2h11.5v8.4z"
            />
            <path fill="#fff" d="M1289.6 366.36h149.9v42.6h-149.9v-42.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1289.6 366.36)"
            >
                <tspan
                    x={30.9}
                    y={27.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"From G301A/B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M1212.512 359.336h225.8"
            />
            <g stroke="#92d050">
                <path fill="none" strokeWidth={4} d="M1213.312 489.115h78.2" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1300.312 489.115-10.4-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.4-6"
                />
            </g>
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1303.9 484.64h11.5v-4.2l17.1 8.4-17.1 8.4v-4.2h-11.5v-8.4z"
            />
            <path fill="#fff" d="M1338.023 475.646h94.5v26.4h-94.5v-26.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1338.023 475.646)"
            >
                <tspan
                    x={23.2}
                    y={19.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"To F203"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M.2 0h15.1c.1 0 .3.1.3.2V12c0 .1-.2.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(1264.51 466.456)"
            />
            <path
                fill="url(#l)"
                d="M0 0h1.1v13.1H0V0z"
                transform="translate(1271.748 493.744)"
            />
            <path
                fill="url(#m)"
                d="M0 0h4.4v.8H0V0z"
                transform="translate(1270.095 478.57)"
            />
            <path
                fill="url(#l)"
                d="M0 0h3.2v8.2H0V0z"
                transform="translate(1270.667 479.375)"
            />
            <path
                fill="url(#m)"
                d="M.3 0h15.1c.2 0 .3.1.3.2v.3c0 .1-.1.2-.3.2H.3C.1.7 0 .6 0 .5V.2C0 .1.1 0 .3 0z"
                transform="translate(1264.372 466.19)"
            />
            <path
                fill="url(#n)"
                d="M.3 0h10.8c.1 0 .3.1.3.2v4c0 .1-.2.2-.3.2H.3c-.2 0-.3-.1-.3-.2v-4C0 .1.1 0 .3 0z"
                transform="translate(1266.606 470.346)"
            />
            <path fill="#3e3938" d="M1267.178 470.749h10.2v3.6h-10.2v-3.6z" />
            <path
                fill="url(#o)"
                d="M.1 0h15.5s.1 0 .1.1v1.2c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="translate(1264.457 477.242)"
            />
            <g fill="url(#p)" stroke="#ebebeb" transform="translate(996.478 412.182)">
                <path d="M5.458 125.864v113.6c0 6.4 5.1 11.5 11.2 11.5h179.6c6.2 0 11.1-5.1 11.1-11.5v-113.6H5.458zM209.104 112.746H3.704c-2 0-3.7 1.7-3.7 3.8 0 2.1 1.7 3.8 3.7 3.8h205.4c2.1 0 3.7-1.7 3.7-3.8 0-2.1-1.6-3.8-3.7-3.8z" />
                <path d="M5.458 119.626v5.3h201.9v-5.3H5.458z" />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1048.737 219.85)"
            >
                <tspan
                    x={37.9}
                    y={19.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D303"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#0070c0"
                strokeDasharray="4,10"
                strokeWidth={2}
                d="M1204.492 632.938h178.7M1382.26 632.938v285.8"
            />
            <path
                fill="#ffc37c"
                stroke="#868686"
                d="M201.043 543.045c0-7.2 6-13.1 13.4-13.1s13.4 5.9 13.4 13.1c0 7.2-6 13.1-13.4 13.1s-13.4-5.9-13.4-13.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "10pt",
                }}
                transform="translate(201.043 529.945)"
            >
                <tspan
                    x={6.4}
                    y={18.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PS"}
                </tspan>
            </text>
            <path
                fill="url(#q)"
                d="M0 0h6.2v1.1H0V0z"
                transform="translate(210.518 553.086)"
            />
            <path
                fill="url(#q)"
                d="M0 0h4.6v10H0V0z"
                transform="translate(211.333 554.186)"
            />
            <path
                fill="#c2c2c2"
                stroke="#3c5c74"
                d="M202.59 551.272h22.1s.1 0 .1.1v1.7c0 .1-.1.1-.1.1h-22.1c-.1 0-.1 0-.1-.1v-1.7c0-.1 0-.1.1-.1z"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M235.085 521.08h106.4v43.5h-106.4v-43.5z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M238.23 543.96h99.4v18.2h-99.4v-18.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(238.23 543.96)"
            >
                <tspan
                    x={24.2}
                    y={15.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                 {`${value['PT310']} bar`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M238.23 524.911h99.4v17.6h-99.4v-17.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(238.23 524.911)"
            >
                <tspan
                    x={31.2}
                    y={14.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PT310"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1237.279 609.482h106.4v43.5h-106.4v-43.5z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1240.425 632.36h99.4v18.2h-99.4v-18.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1240.425 632.36)"
            >
                <tspan
                    x={29.2}
                    y={15.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['TT301']} %`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1240.425 613.313h99.4v17.6h-99.4v-17.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1240.425 613.313)"
            >
                <tspan
                    x={29.7}
                    y={14.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LIC301"}
                </tspan>
            </text>
            <path
                fill="url(#r)"
                d="M0 6.4h112.8V0H0v6.4z"
                transform="translate(112.87 564.22)"
            />
            <path
                fill="url(#s)"
                d="M0 1.6h112.8V0H0v1.6z"
                transform="translate(112.87 569.002)"
            />
            <path
                fill="url(#r)"
                d="M0 15.9h163.6V0H0v15.9z"
                transform="translate(85.682 654.142)"
            />
            <path
                fill="url(#s)"
                d="M0 1.8h112.8V0H0v1.8z"
                transform="translate(112.87 656.856)"
            />
            <path
                fill="url(#r)"
                d="M10.9 0h113.6c6 0 10.9 2.8 10.9 6.3v74c0 3.4-4.9 6.2-10.9 6.2H10.9c-6 0-10.9-2.8-10.9-6.2v-74C0 2.8 4.9 0 10.9 0z"
                transform="translate(101.549 570.52)"
            />
            <path
                fill="url(#t)"
                d="M0 0h34.6v36.1H0V0z"
                transform="matrix(0 1 1 0 146.51 523.71)"
            />
            <path
                fill="url(#t)"
                d="M0 0h8.9v36.1H0V0z"
                transform="matrix(0 1 1 0 146.51 514.811)"
            />
            <path
                fill="url(#t)"
                d="M7 0v36.1s-7 0-7-17.9C0 .2 7 0 7 0z"
                transform="matrix(0 1 1 0 146.51 507.89)"
            />
            <path
                fill="url(#u)"
                d="M0 0h.8v36.1H0V0z"
                transform="matrix(0 1 1 0 146.51 515.053)"
            />
            <path
                fill="url(#u)"
                d="M0 0h.7v35.4H0V0z"
                transform="matrix(0 1 1 0 146.491 557.052)"
            />
            <path
                fill="url(#v)"
                d="M0 0h15v7.8H0V0z"
                transform="matrix(0 1 1 0 160.307 561.161)"
            />
            <g fill="url(#t)" transform="matrix(0 1 1 0 147.59 523.71)">
                <path d="M0 2.545h31.1v1H0v-1zM0 7.636h31.1v1H0v-1zM0 10.181h31.1v1H0v-1zM0 12.726h31.1v1H0v-1zM0 15.272h31.1v1H0v-1zM0 18.166h31.1v1H0v-1zM0 20.502h31.1v1H0v-1zM0 22.838h31.1v1H0v-1zM0 25.173h31.1v1H0v-1zM0 27.998h31.1v1H0v-1zM0 30.543h31.1v1H0v-1zM0 33.089h31.1v1H0v-1zM0 0h31.1v1H0V0zM0 5.09h31.1v1H0v-1z" />
            </g>
            <path
                fill="url(#t)"
                d="M0 0h2.6c.5 0 .9.4.9.9v34.2c0 .5-.4 1-.9 1H0V0z"
                transform="matrix(0 1 1 0 146.51 557.62)"
            />
            <path
                fill="url(#v)"
                d="M0 0h1.8v16.5H0V0z"
                transform="matrix(0 1 1 0 155.936 561.16)"
            />
            <path
                fill="url(#t)"
                d="M0 0h1.5v2.4H0V0z"
                transform="matrix(0 1 1 0 147.59 561.063)"
            />
            <path
                fill="url(#t)"
                d="M0 0h1.5v2.4H0V0z"
                transform="matrix(0 1 1 0 158.163 561.063)"
            />
            <path
                fill="url(#t)"
                d="M0 0h1.5v2.4H0V0z"
                transform="matrix(0 1 1 0 168.735 561.063)"
            />
            <path
                fill="url(#t)"
                d="M0 0h1.5v2.4H0V0z"
                transform="matrix(0 1 1 0 179.308 561.063)"
            />
            <path fill="#98bcdf" d="M180.032 524.819v29.8h2.4v-29.8h-2.4z" />
            <path fill="#6f9fce" d="M182.62 524.819v29.8h5.2v-29.8h-5.2z" />
            <path fill="#91b7dd" d="M186.813 524.819v29.8h1.9v-29.8h-1.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(132.16 645.221)"
            >
                <tspan
                    x={20.5}
                    y={19.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D310"}
                </tspan>
            </text>
            <path fill="none" stroke="#ff0" strokeWidth={4} d="M104.593 517.835h22.2" />
            <g stroke="#ff0">
                <path fill="none" strokeWidth={4} d="M125.396 516.889v32.4" />
                <path
                    fill="#ff0"
                    strokeLinecap="round"
                    d="m131.396 549.289-6 12-6-12h12"
                />
            </g>
            <path fill="#fff" d="M19.48 496.666h80.4v41.1h-80.4v-41.1z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(19.48 496.666)"
            >
                <tspan
                    x={18.2}
                    y={16.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Natural "}
                </tspan>
                <tspan
                    x={28.2}
                    y={36.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Gas"}
                </tspan>
            </text>
            <g fill="none" stroke="red" strokeWidth={2}>
                <path d="m119.869 576.116 101.826 17.97M221.677 594.082l-101.827 17.97M119.869 612.048l101.826 17.97M221.677 630.014l-101.827 17.97M119.869 576.116h101.8M119.869 647.98h107.8" />
            </g>
            <path
                fill="url(#w)"
                stroke="#696969"
                d="M0 0h57.4v66.8H0V0z"
                transform="translate(1765.93 541.674)"
            />
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={5.333}
                d="m1765.5 556.353 59.136 38.566"
            />
            <path
                fill="none"
                stroke="#00b0f0"
                strokeWidth={5.333}
                d="m1765.296 595.622 59.324-41.85"
            />
            <path
                fill="url(#r)"
                d="M0 6.4h112.8V0H0v6.4z"
                transform="translate(489.355 123.153)"
            />
            <path
                fill="url(#s)"
                d="M0 1.6h112.8V0H0v1.6z"
                transform="translate(489.356 127.934)"
            />
            <path
                fill="url(#s)"
                d="M0 1.8h112.8V0H0v1.8z"
                transform="translate(489.356 215.788)"
            />
            <path
                fill="url(#r)"
                d="M10.9 0h113.6c6 0 10.9 2.8 10.9 6.3v74c0 3.4-4.9 6.2-10.9 6.2H10.9c-6 0-10.9-2.8-10.9-6.2v-74C0 2.8 4.9 0 10.9 0z"
                transform="translate(478.034 129.452)"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2}
                d="m590.533 200.809-82.722-14.598M507.837 186.216l82.722-14.598M590.533 171.622l-82.722-14.598M507.837 157.028l82.722-14.598M590.533 200.809h-113M590.533 142.435h-109.1"
            />
            <path
                fill="url(#r)"
                d="M0 6.4h112.8V0H0v6.4z"
                transform="translate(491.246 216.626)"
            />
            <path
                fill="url(#s)"
                d="M0 1.6h112.8V0H0v1.6z"
                transform="translate(491.247 221.407)"
            />
            <path
                fill="url(#s)"
                d="M0 1.8h112.8V0H0v1.8z"
                transform="translate(491.247 309.261)"
            />
            <path
                fill="url(#r)"
                d="M10.9 0h113.6c6 0 10.9 2.8 10.9 6.3v74c0 3.4-4.9 6.2-10.9 6.2H10.9c-6 0-10.9-2.8-10.9-6.2v-74C0 2.8 4.9 0 10.9 0z"
                transform="translate(479.925 222.925)"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2}
                d="m591.418 291.632-82.722-14.598M508.722 277.039l82.722-14.598M591.418 262.445l-82.722-14.598M508.722 247.85l82.722-14.597M591.418 291.631h-107.2M591.418 233.257h-112M477.494 200.809h-60.5M417.922 200.809v32.1"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M470.885 232.959h-53.9" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m470.885 228.759 8.5 4.2-8.5 4.2v-8.4"
                />
            </g>
            <path
                fill="url(#k)"
                d="M.4 0h23c.2 0 .4.1.4.3V22c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
                transform="rotate(-90 359.495 -81.64)"
            />
            <path
                fill="url(#m)"
                d="M0 0h6.7v1.5H0V0z"
                transform="rotate(-90 366.323 -97.027)"
            />
            <path
                fill="url(#l)"
                d="M0 0h5v15.1H0V0z"
                transform="rotate(-90 366.623 -98.204)"
            />
            <path
                fill="url(#m)"
                d="M.4 0h23.2c.2 0 .4.1.4.3v.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
                transform="rotate(-90 359.357 -81.29)"
            />
            <path
                fill="url(#n)"
                d="M.4 0H17c.2 0 .4.1.4.3v7.4c0 .2-.2.4-.4.4H.4c-.2 0-.4-.2-.4-.4V.3C0 .1.2 0 .4 0z"
                transform="rotate(-90 361.456 -86.814)"
            />
            <path fill="#3e3938" d="M449.009 273.766v-15.7h6.6v15.7h-6.6z" />
            <path
                fill="url(#o)"
                d="M.1 0h23.8s.1 0 .1.1v2.3c0 .1-.1.2-.1.2H.1c-.1 0-.1-.1-.1-.2V.1C0 0 0 0 .1 0z"
                transform="rotate(-90 369.426 -91.49)"
            />
            <path
                fill="none"
                stroke="#236ea1"
                strokeDasharray="4,10"
                strokeWidth={2}
                d="M214.428 527.107v-232.4"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M163.787 258.674h99.4v17.6h-99.4v-17.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(163.787 258.674)"
            >
                <tspan
                    x={26.7}
                    y={14.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TRC301"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M163.787 277.723h99.4v16.9h-99.4v-16.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(163.787 277.723)"
            >
                <tspan
                    x={15.2}
                    y={14.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['TRC301']} \xB0C`}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M160.385 254.239h106.4v43.5h-106.4v-43.5z"
            />
            <path
                fill="none"
                stroke="#236ea1"
                strokeDasharray="4,10"
                strokeWidth={2}
                d="M266.746 266.309h174"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={2}
                d="M219.467 576.461h139M358.468 577.407v-435"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M469.112 142.435h-110.6" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m469.112 138.235 8.5 4.2-8.5 4.2v-8.4"
                />
            </g>
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M479.503 292.785h-47.3" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m432.203 296.985-8.5-4.2 8.5-4.2v8.4"
                />
            </g>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2}
                d="M227.032 648.325h196.7M423.714 292.785v355.5"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M471.004 302.241h-11.4" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m471.004 298.041 8.5 4.2-8.5 4.2v-8.4"
                />
            </g>
            <path fill="none" stroke="red" strokeWidth={2} d="M459.646 301.296v25.5" />
            <path
                fill="red"
                stroke="red"
                d="M456.09 358.22v-11.5h-4.2l8.4-17.1 8.4 17.1h-4.2v11.5h-8.4z"
            />
            <path fill="#fff" d="M416.279 358.2h88v28.6h-88v-28.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(416.279 358.2)"
            >
                <tspan
                    x={25}
                    y={20.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Steam"}
                </tspan>
            </text>
            <path
                fill="url(#x)"
                d="M0 0h10.9v8.2H0V0z"
                transform="translate(1277.908 257.303)"
            />
            <path
                fill="url(#x)"
                d="M0 0h10.9v8.2H0V0z"
                transform="translate(1302.44 257.303)"
            />
            <path
                fill="url(#x)"
                d="M1.4 0h11s1.4.1 1.4 9c.1 9-1.4 9-1.4 9h-11S0 18 0 9C0 .1 1.4 0 1.4 0z"
                transform="translate(1288.708 252.364)"
            />
            <path
                fill="url(#y)"
                d="M0 0h4.2v6.9s-.2.4-2.1.4C.2 7.3 0 6.9 0 6.9V0z"
                transform="translate(1293.712 246.628)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h1.6c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="translate(1283.369 254.969)"
            />
            <path
                fill="url(#z)"
                d="M1.1 1.7C1.1 1 1.7.4 2.5.4c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.8 0-1.4-.6-1.4-1.3zM.7 0S0 0 0 .7v2.1s0 .6.7.6c.6.1.8.9.8.9v1.8h1.9V4.3s.1-.9.8-.9c.7 0 .7-.6.7-.6V.7c0-.6-.7-.7-.7-.7H.7z"
                transform="translate(1282.224 256.28)"
            />
            <path
                fill="url(#A)"
                d="M1.7 0v3c0 .2-.2.3-.3.3H.3C.1 3.3 0 3.2 0 3V0h1.7z"
                transform="translate(1283.852 262.33)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="translate(1283.086 262.363)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="translate(1283.086 264.03)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="translate(1285.465 262.363)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="translate(1285.465 264.03)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h1.6c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="translate(1305.448 254.969)"
            />
            <path
                fill="url(#z)"
                d="M1.1 1.7C1.1 1 1.7.4 2.5.4c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.8 0-1.4-.6-1.4-1.3zM.7 0S0 0 0 .7v2.1s0 .6.7.6c.6.1.8.9.8.9v1.8h1.9V4.3s.1-.9.8-.9c.7 0 .7-.6.7-.6V.7c0-.6-.7-.7-.7-.7H.7z"
                transform="translate(1304.304 256.28)"
            />
            <path
                fill="url(#A)"
                d="M1.7 0v3c0 .2-.2.3-.3.3H.3C.1 3.3 0 3.2 0 3V0h1.7z"
                transform="translate(1305.931 262.33)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="translate(1305.165 262.363)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="translate(1305.165 264.03)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="translate(1307.545 262.363)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="translate(1307.545 264.03)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h.4c.3 0 .5.2.5.5V10c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="translate(1313.258 256.162)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h.4c.3 0 .5.2.5.5V10c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="translate(1276.606 256.215)"
            />
            <path
                fill="url(#y)"
                d="M0 0h7.5v1.3H0V0z"
                transform="translate(1292.051 245.443)"
            />
            <path
                fill="url(#B)"
                d="M0 0h15.3v6.7H0V0z"
                transform="translate(1288.134 238.854)"
            />
            <path
                fill="url(#C)"
                d="M0 1.6h15.3V0H0v1.6z"
                transform="translate(1288.134 237.363)"
            />
            <path
                fill="#757263"
                d="M1296.711 242.192c0-1 .9-1.9 1.9-1.9 1.1 0 2 .9 2 1.9 0 1.1-.9 1.9-2 1.9-1 0-1.9-.8-1.9-1.9z"
            />
            <path
                fill="#edebdf"
                d="M1296.857 242.237c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 .9-.8 1.7-1.8 1.7s-1.8-.8-1.8-1.7z"
            />
            <path
                fill="#635d4f"
                d="M1297.14 242.216c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z"
            />
            <path
                stroke="#000"
                d="M1297.394 242.168c0-.6.6-1.2 1.2-1.2.7 0 1.3.6 1.3 1.2 0 .7-.6 1.3-1.3 1.3-.6 0-1.2-.6-1.2-1.3z"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M1297.723 241.37c.385-.46 1.23-.533 1.69-.147.536.45-.462.395-.912.931s-.158 1.434-.695.984c-.46-.386-.533-1.231-.083-1.767z"
            />
            <path
                fill="#757263"
                d="M1291.254 242.193c0-1 .9-1.9 1.9-1.9 1.1 0 2 .9 2 1.9 0 1.1-.9 1.9-2 1.9-1 0-1.9-.8-1.9-1.9z"
            />
            <path
                fill="#edebdf"
                d="M1291.399 242.238c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8c0 .9-.8 1.7-1.8 1.7s-1.8-.8-1.8-1.7z"
            />
            <path
                fill="#635d4f"
                d="M1291.682 242.217c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5z"
            />
            <path
                stroke="#000"
                d="M1291.936 242.17c0-.6.6-1.2 1.2-1.2.7 0 1.3.6 1.3 1.2 0 .7-.6 1.3-1.3 1.3-.6 0-1.2-.6-1.2-1.3z"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M1292.265 241.372c.386-.46 1.231-.534 1.69-.148.537.45-.462.395-.912.931s-.158 1.434-.694.984c-.46-.386-.534-1.231-.084-1.767z"
            />
            <path
                fill="url(#D)"
                d="M0 6.4h78.4V0H0v6.4z"
                transform="translate(1401.325 622.044)"
            />
            <path
                fill="url(#E)"
                d="M0 1.6h78.4V0H0v1.6z"
                transform="translate(1401.325 626.825)"
            />
            <path
                fill="url(#D)"
                d="M0 6.4h78.4V0H0v6.4z"
                transform="translate(1401.325 714.802)"
            />
            <path
                fill="url(#E)"
                d="M0 1.8h78.4V0H0v1.8z"
                transform="translate(1401.325 714.68)"
            />
            <path
                fill="url(#D)"
                d="M7.6 0h79c4.2 0 7.6 2.8 7.6 6.3v74c0 3.4-3.4 6.2-7.6 6.2h-79c-4.2 0-7.6-2.8-7.6-6.2v-74C0 2.8 3.4 0 7.6 0z"
                transform="translate(1393.452 628.343)"
            />
            <path
                fill="url(#F)"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 216.619 766.846)"
            />
            <path
                fill="url(#G)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 216.936 775.369)"
            />
            <path
                fill="url(#H)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(-90 495.91 279.421)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M215.875 775.006v-9.3c0-.1-.1-.2-.1-.2-.1 0-.2.1-.2.2v9.3c0 .1.1.2.2.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#I)"
                d="M0 0h16.2v2.2H0V0z"
                transform="translate(225.923 777.755)"
            />
            <path
                fill="url(#I)"
                stroke="#595959"
                d="M3.7 0h7l3.7 5.2H0L3.7 0z"
                transform="translate(226.843 772.71)"
            />
            <path
                fill="url(#F)"
                stroke="#595959"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 234.536 756.475)"
            />
            <path
                fill="url(#J)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 9.2C0 4.1 4.1 0 9.2 0s9.2 4.1 9.2 9.2c0 5-4.1 9.1-9.2 9.1S0 14.2 0 9.2z"
                transform="matrix(0 -1 -1 0 243.222 774.867)"
            />
            <path
                fill="#fff"
                fillOpacity={0.27}
                d="M234.077 773.31c4.2 0 7.6-3.4 7.6-7.7 0-4.2-3.4-7.6-7.6-7.6-4.2 0-7.6 3.4-7.6 7.6 0 4.3 3.4 7.7 7.6 7.7z"
            />
            <path
                fill="#9da6b0"
                stroke="#595959"
                strokeWidth={0.25}
                d="M234.103 762.89c1.5 0 2.7 1.2 2.7 2.8 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.8-1.2-2.8-2.7 0-1.6 1.3-2.8 2.8-2.8z"
            />
            <path
                fill="url(#K)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 2.1C0 .9 1 0 2.1 0c1.2 0 2.2.9 2.2 2.1 0 1.2-1 2.2-2.2 2.2C1 4.3 0 3.3 0 2.1z"
                transform="rotate(90 -263.645 499.847)"
            />
            <path
                fill="url(#G)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 250.94 754.974)"
            />
            <path
                fill="url(#H)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(90 -251.812 503.2)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M252.002 755.337v9.3c0 .1.1.2.1.2.1 0 .2-.1.2-.2v-9.3c0-.1-.1-.2-.2-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="url(#L)"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 215.674 828.63)"
            />
            <path
                fill="url(#M)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 215.991 837.154)"
            />
            <path
                fill="url(#N)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(-90 526.33 310.786)"
            />
            <path
                fill="#92d050"
                d="M214.93 836.79v-9.3c0-.1-.1-.2-.1-.2-.1 0-.2.1-.2.2v9.3c0 .1.1.2.2.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#O)"
                d="M0 0h16.2v2.2H0V0z"
                transform="translate(224.978 839.54)"
            />
            <path
                fill="url(#O)"
                stroke="#595959"
                d="M3.7 0h7l3.7 5.2H0L3.7 0z"
                transform="translate(225.898 834.496)"
            />
            <path
                fill="url(#L)"
                stroke="#595959"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 233.59 818.26)"
            />
            <path
                fill="url(#P)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 9.2C0 4.1 4.1 0 9.2 0s9.2 4.1 9.2 9.2c0 5-4.1 9.1-9.2 9.1S0 14.2 0 9.2z"
                transform="matrix(0 -1 -1 0 242.277 836.652)"
            />
            <path
                fill="#92d050"
                d="M233.132 835.095c4.2 0 7.6-3.4 7.6-7.7 0-4.2-3.4-7.6-7.6-7.6-4.2 0-7.6 3.4-7.6 7.6 0 4.3 3.4 7.7 7.6 7.7z"
            />
            <path
                fill="#92d050"
                stroke="#595959"
                strokeWidth={0.25}
                d="M233.158 824.674c1.5 0 2.7 1.2 2.7 2.8 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.8-1.2-2.8-2.7 0-1.6 1.3-2.8 2.8-2.8z"
            />
            <path
                fill="url(#Q)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 2.1C0 .9 1 0 2.1 0c1.2 0 2.2.9 2.2 2.1 0 1.2-1 2.2-2.2 2.2C1 4.3 0 3.3 0 2.1z"
                transform="rotate(90 -295.01 530.267)"
            />
            <path
                fill="url(#M)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 249.996 816.759)"
            />
            <path
                fill="url(#N)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(90 -283.177 533.62)"
            />
            <path
                fill="#92d050"
                d="M251.057 817.122v9.3c0 .1.1.2.1.2.1 0 .2-.1.2-.2v-9.3c0-.1-.1-.2-.2-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#ffc000"
                d="M173.133 768.037h41.9v4.7h-41.9v-4.7zM197.574 830.445h17.5v4.7h-17.5v-4.7z"
            />
            <path fill="#fff" d="M208.931 790.291h77.5v18.8h-77.5v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(208.931 790.291)"
            >
                <tspan
                    x={18.8}
                    y={15.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G305B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M249.637 821.878h99.3M348.923 821.878v-64.3M251.617 758.959h212.8M199.61 832.715v-64.3M463.428 759.905v-230.7"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M461.537 531.073h98.6" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m560.137 525.073 12 6-12 6v-12"
                />
            </g>
            <path
                fill="url(#w)"
                stroke="#696969"
                d="M0 0h57.4v66.8H0V0z"
                transform="translate(573.756 516.863)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={5.333}
                d="m573.324 531.542 59.136 38.566"
            />
            <path
                fill="none"
                stroke="#00b0f0"
                strokeWidth={5.333}
                d="m573.116 570.811 59.324-41.85"
            />
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={4} d="M505.98 569.842h55.1" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m561.08 563.842 12 6-12 6v-12"
                />
            </g>
            <path
                fill="none"
                stroke="#00b0f0"
                strokeWidth={4}
                d="M506.925 756.122v-187.2"
            />
            <path
                fill="url(#R)"
                d="M0 0h41.4v13.4H0V0z"
                transform="rotate(180 277.437 288.383)"
            />
            <path
                fill="url(#S)"
                d="M.3 0H25c.2 0 .3.1.3.3v18c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.3C0 .1.1 0 .3 0z"
                transform="rotate(180 273.41 303.481)"
            />
            <path
                fill="#b4b5b5"
                d="M545.6 605.939h-22.9c-.1 0-.3-.1-.3-.3v-15.9c0-.2.2-.3.3-.3h22.9c.2 0 .3.1.3.3v15.9c0 .2-.1.3-.3.3z"
            />
            <path fill="#92d050" d="M545.168 605.092h-22v-14.8h22v14.8z" />
            <path
                fill="url(#T)"
                d="M0 0h6v12.1s-.1.8-3 .8-3-.8-3-.8V0z"
                transform="rotate(180 268.572 294.26)"
            />
            <path
                fill="url(#R)"
                d="M.6 0H2c.3 0 .5.2.5.5V19c0 .3-.2.5-.5.5H.6c-.4 0-.6-.2-.6-.5V.5C0 .2.2 0 .6 0z"
                transform="rotate(180 275.877 289.901)"
            />
            <path
                fill="url(#R)"
                d="M.6 0H2c.3 0 .5.2.5.5V19c0 .3-.2.5-.5.5H.6c-.4 0-.6-.2-.6-.5V.5C0 .2.2 0 .6 0z"
                transform="rotate(180 259.559 289.901)"
            />
            <path
                fill="url(#U)"
                d="M0 0h.6v13.4H0V0z"
                transform="rotate(180 274.608 288.375)"
            />
            <path
                fill="url(#U)"
                d="M0 0h.6v13.4H0V0z"
                transform="rotate(180 259.848 288.375)"
            />
            <path
                fill="url(#V)"
                d="M0 0h27.5v3.4H0V0z"
                transform="rotate(180 273.962 299.705)"
            />
            <path
                fill="url(#T)"
                d="M0 0h2.9v1.4H0V0z"
                transform="rotate(180 272.045 304.172)"
            />
            <path
                fill="url(#T)"
                d="M0 0h1.5v1.4H0V0z"
                transform="rotate(180 271.685 304.833)"
            />
            <path
                fill="url(#R)"
                d="M0 0h1.1v3.4H0V0z"
                transform="rotate(180 273.962 296.864)"
            />
            <path
                fill="url(#R)"
                d="M0 0h11.5v1.2H0V0z"
                transform="rotate(180 279.644 296.299)"
            />
            <path
                fill="url(#R)"
                d="M0 0h11.2v1.2H0V0z"
                transform="matrix(0 1 1 0 559.74 579.657)"
            />
            <path
                fill="url(#W)"
                d="M0 0s.9 0 1.3.5.3 1.3.3 1.3H.5s0-.5-.5-.7V0z"
                transform="matrix(1 0 0 -1 559.285 592.598)"
            />
            <path
                fill="#00b0f0"
                stroke="#00b0f0"
                d="M503.11 785.354v-7.2h-4.9l9.8-10.7 9.9 10.7h-4.9v7.2h-9.9z"
            />
            <path fill="#fff" d="M436.148 790.352h138.3v44.4h-138.3v-44.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(436.148 790.352)"
            >
                <tspan
                    x={27.2}
                    y={28.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Cooling Water"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(567.018 512.135)"
            >
                <tspan
                    x={20.5}
                    y={19.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E304"}
                </tspan>
            </text>
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={4} d="M627.96 531.073h55.1" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m683.06 525.073 12 6-12 6v-12"
                />
            </g>
            <path fill="#fff" d="M697.934 508.153h125.9v44.4h-125.9v-44.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(697.934 508.153)"
            >
                <tspan
                    x={21}
                    y={28.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Cooling Water"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M627.015 568.896h62.4M687.532 676.693v-109.7"
            />
            <path
                fill="url(#X)"
                d="M0 4.4h53.4V0H0v4.4z"
                transform="translate(603.301 753.745)"
            />
            <path
                fill="url(#Y)"
                d="M0 1.1h53.4V0H0v1.1z"
                transform="translate(603.301 757.002)"
            />
            <path
                fill="url(#X)"
                d="M0 4.4h53.4V0H0v4.4z"
                transform="translate(603.301 816.933)"
            />
            <path
                fill="url(#Y)"
                d="M0 1.2h53.4V0H0v1.2z"
                transform="translate(603.301 816.85)"
            />
            <path
                fill="url(#X)"
                d="M5.2 0H59c2.8 0 5.2 1.9 5.2 4.3v50.4c0 2.3-2.4 4.3-5.2 4.3H5.2C2.3 59 0 57 0 54.7V4.3C0 1.9 2.3 0 5.2 0z"
                transform="translate(597.938 758.037)"
            />
            <path
                fill="url(#X)"
                d="M0 4.4h53.4V0H0v4.4z"
                transform="translate(714.953 753.745)"
            />
            <path
                fill="url(#Y)"
                d="M0 1.1h53.4V0H0v1.1z"
                transform="translate(714.953 757.002)"
            />
            <path
                fill="url(#X)"
                d="M0 4.4h53.4V0H0v4.4z"
                transform="translate(714.953 816.933)"
            />
            <path
                fill="url(#Y)"
                d="M0 1.2h53.4V0H0v1.2z"
                transform="translate(714.953 816.85)"
            />
            <path
                fill="url(#X)"
                d="M5.2 0H59c2.8 0 5.2 1.9 5.2 4.3v50.4c0 2.3-2.4 4.3-5.2 4.3H5.2C2.3 59 0 57 0 54.7V4.3C0 1.9 2.3 0 5.2 0z"
                transform="translate(709.59 758.037)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(594.556 773.714)"
            >
                <tspan
                    x={16}
                    y={19.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D304A"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(709.59 773.714)"
            >
                <tspan
                    x={16}
                    y={19.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D304B"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                d="M674.767 688.548c0-7.1 5.7-12.8 12.8-12.8 7 0 12.7 5.7 12.7 12.8 0 7-5.7 12.7-12.7 12.7-7.1 0-12.8-5.7-12.8-12.7z"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M628.359 753.745v-22.7M627.96 732.01h118.2M746.159 753.758v-22.7M687.532 700.333v30.7M745.96 821.298v22.7M746.358 843.979h-118.2M628.159 821.285v22.7M687.532 934.838v-91.7"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M513.462 868.083h128.3v17.6h-128.3v-17.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(513.462 868.083)"
            >
                <tspan
                    x={38.6}
                    y={14.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FIRQ304"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M508.816 864.097h138.3v63h-138.3v-63z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M513.462 887.132h128.3v16.9h-128.3v-16.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(513.462 887.132)"
            >
                <tspan
                    x={30.1}
                    y={14.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                {`${value['FIRQ304 Flowrate']} ton`}
                </tspan>
            </text>
            <path
                fill="url(#x)"
                d="M0 0h10.9v8.2H0V0z"
                transform="rotate(-90 797.919 115.032)"
            />
            <path
                fill="url(#x)"
                d="M0 0h10.9v8.2H0V0z"
                transform="rotate(-90 785.653 102.766)"
            />
            <path
                fill="url(#x)"
                d="M1.4 0h11s1.4.1 1.4 9c.1 9-1.4 9-1.4 9h-11S0 18 0 9C0 .1 1.4 0 1.4 0z"
                transform="rotate(-90 790.05 112.102)"
            />
            <path
                fill="url(#y)"
                d="M0 0h4.2v6.9s-.2.4-2.1.4C.2 7.3 0 6.9 0 6.9V0z"
                transform="rotate(-90 784.68 112.467)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h1.6c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="rotate(-90 794.021 113.468)"
            />
            <path
                fill="url(#z)"
                d="M1.1 1.7C1.1 1 1.7.4 2.5.4c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.8 0-1.4-.6-1.4-1.3zM.7 0S0 0 0 .7v2.1s0 .6.7.6c.6.1.8.9.8.9v1.8h1.9V4.3s.1-.9.8-.9c.7 0 .7-.6.7-.6V.7c0-.6-.7-.7-.7-.7H.7z"
                transform="rotate(-90 795.25 113.386)"
            />
            <path
                fill="url(#A)"
                d="M1.7 0v3c0 .2-.2.3-.3.3H.3C.1 3.3 0 3.2 0 3V0h1.7z"
                transform="rotate(-90 797.46 109.547)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 797.86 109.913)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 798.694 109.08)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 796.67 108.723)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 797.504 107.89)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h1.6c.3 0 .5.2.5.5v12c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="rotate(-90 782.982 102.429)"
            />
            <path
                fill="url(#z)"
                d="M1.1 1.7C1.1 1 1.7.4 2.5.4c.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3-.8 0-1.4-.6-1.4-1.3zM.7 0S0 0 0 .7v2.1s0 .6.7.6c.6.1.8.9.8.9v1.8h1.9V4.3s.1-.9.8-.9c.7 0 .7-.6.7-.6V.7c0-.6-.7-.7-.7-.7H.7z"
                transform="rotate(-90 784.21 102.346)"
            />
            <path
                fill="url(#A)"
                d="M1.7 0v3c0 .2-.2.3-.3.3H.3C.1 3.3 0 3.2 0 3V0h1.7z"
                transform="rotate(-90 786.42 98.507)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 786.82 98.873)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 787.654 98.04)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 785.63 97.684)"
            />
            <path
                fill="url(#x)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 786.465 96.85)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h.4c.3 0 .5.2.5.5V10c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="rotate(-90 779.673 97.928)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h.4c.3 0 .5.2.5.5V10c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="rotate(-90 798.026 116.227)"
            />
            <path
                fill="url(#y)"
                d="M0 0h7.5v1.3H0V0z"
                transform="rotate(-90 784.917 113.89)"
            />
            <path
                fill="url(#B)"
                d="M0 0h15.3v6.7H0V0z"
                transform="rotate(-90 783.582 119.144)"
            />
            <path
                fill="url(#C)"
                d="M0 1.6h15.3V0H0v1.6z"
                transform="rotate(-90 782.836 119.89)"
            />
            <path
                fill="#757263"
                d="M667.776 894.148c-1 0-1.9-.9-1.9-1.9 0-1.1.9-2 1.9-2 1.1 0 1.9.9 1.9 2 0 1-.8 1.9-1.9 1.9z"
            />
            <path
                fill="#edebdf"
                d="M667.82 894.002c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8c.9 0 1.7.8 1.7 1.8s-.8 1.8-1.7 1.8z"
            />
            <path
                fill="#635d4f"
                d="M667.8 893.72c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
            />
            <path
                stroke="#000"
                d="M667.752 893.465c-.6 0-1.2-.6-1.2-1.2 0-.7.6-1.3 1.2-1.3.7 0 1.3.6 1.3 1.3 0 .6-.6 1.2-1.3 1.2z"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M666.955 893.136c-.46-.385-.534-1.23-.148-1.69.45-.536.395.462.931.912s1.434.158.984.695c-.386.46-1.231.533-1.767.083z"
            />
            <path
                fill="#757263"
                d="M667.777 899.605c-1 0-1.9-.9-1.9-1.9 0-1.1.9-2 1.9-2 1.1 0 1.9.9 1.9 2 0 1-.8 1.9-1.9 1.9z"
            />
            <path
                fill="#edebdf"
                d="M667.822 899.46c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8c.9 0 1.7.8 1.7 1.8s-.8 1.8-1.7 1.8z"
            />
            <path
                fill="#635d4f"
                d="M667.801 899.177c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
            />
            <path
                stroke="#000"
                d="M667.753 898.923c-.6 0-1.2-.6-1.2-1.2 0-.7.6-1.3 1.2-1.3.7 0 1.3.6 1.3 1.3 0 .6-.6 1.2-1.3 1.2z"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M666.956 898.594c-.46-.386-.534-1.231-.148-1.69.45-.537.395.462.931.912s1.434.158.984.694c-.386.46-1.231.534-1.767.084z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M513.462 905.362h128.3v17.6h-128.3v-17.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(513.462 905.362)"
            >
                <tspan
                    x={31.6}
                    y={14.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                {`${value['FIRQ304 Flowrate']} ton/h`}
                </tspan>
            </text>
            <path fill="#fff" d="M207.986 726.81h77.5v18.8h-77.5v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(207.986 726.81)"
            >
                <tspan
                    x={18.8}
                    y={15.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G305A"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M.2 0h15.1c.1 0 .3.1.3.2V12c0 .1-.2.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 41.211 669.22)"
            />
            <path
                fill="url(#l)"
                d="M0 0h1.1v13.1H0V0z"
                transform="rotate(90 23.949 659.196)"
            />
            <path
                fill="url(#m)"
                d="M0 0h4.4v.8H0V0z"
                transform="rotate(90 32.362 665.956)"
            />
            <path
                fill="url(#l)"
                d="M0 0h3.2v8.2H0V0z"
                transform="rotate(90 31.674 665.84)"
            />
            <path
                fill="url(#m)"
                d="M.3 0h15.1c.2 0 .3.1.3.2v.3c0 .1-.1.2-.3.2H.3C.1.7 0 .6 0 .5V.2C0 .1.1 0 .3 0z"
                transform="rotate(90 41.414 669.285)"
            />
            <path
                fill="url(#n)"
                d="M.3 0h10.8c.1 0 .3.1.3.2v4c0 .1-.2.2-.3.2H.3c-.2 0-.3-.1-.3-.2v-4C0 .1.1 0 .3 0z"
                transform="rotate(90 38.218 668.323)"
            />
            <path fill="#3e3938" d="M706.14 630.677v10.2h-3.6v-10.2h3.6z" />
            <path
                fill="url(#o)"
                d="M.1 0h15.5s.1 0 .1.1v1.2c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="rotate(90 35.845 663.8)"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M724.472 637.482h99.4v21.6h-99.4v-21.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(724.472 637.482)"
            >
                <tspan
                    x={18.7}
                    y={16.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
        {`${value['TRC304']} \xB0C`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M724.472 618.437h99.4v17.6h-99.4v-17.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(724.472 618.437)"
            >
                <tspan
                    x={26.7}
                    y={14.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TRC304"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M720.966 615.551h106.4v47.9h-106.4v-47.9z"
            />
            <path
                fill="none"
                stroke="#236ea1"
                strokeDasharray="4,10"
                strokeWidth={2}
                d="M548.531 598.209h157M705.498 598.21v29.3"
            />
            <path
                fill="#ffc000"
                stroke="#ffc000"
                d="M692.466 941.44v7.2h4.9l-9.8 10.7-9.9-10.7h4.9v-7.2h9.9z"
            />
            <path fill="#fff" d="M622.48 964.148h127v49.3h-127v-49.3z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(622.48 964.148)"
            >
                <tspan
                    x={38}
                    y={20.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Storage "}
                </tspan>
                <tspan
                    x={39.5}
                    y={40.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RBO Oil"}
                </tspan>
            </text>
            <path
                fill="url(#F)"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 1142.227 950.468)"
            />
            <path
                fill="url(#G)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 1142.544 958.991)"
            />
            <path
                fill="url(#H)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(-90 1050.525 -91.572)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1141.483 958.628v-9.3c0-.1-.1-.2-.1-.2-.1 0-.2.1-.2.2v9.3c0 .1.1.2.2.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#I)"
                d="M0 0h16.2v2.2H0V0z"
                transform="translate(1151.531 961.377)"
            />
            <path
                fill="url(#I)"
                stroke="#595959"
                d="M3.7 0h7l3.7 5.2H0L3.7 0z"
                transform="translate(1152.451 956.333)"
            />
            <path
                fill="url(#F)"
                stroke="#595959"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 1160.144 940.097)"
            />
            <path
                fill="url(#J)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 9.2C0 4.1 4.1 0 9.2 0s9.2 4.1 9.2 9.2c0 5-4.1 9.1-9.2 9.1S0 14.2 0 9.2z"
                transform="matrix(0 -1 -1 0 1168.83 958.49)"
            />
            <path
                fill="#fff"
                fillOpacity={0.27}
                d="M1159.685 956.932c4.2 0 7.6-3.4 7.6-7.7 0-4.2-3.4-7.6-7.6-7.6-4.2 0-7.6 3.4-7.6 7.6 0 4.3 3.4 7.7 7.6 7.7z"
            />
            <path
                fill="#9da6b0"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1159.711 946.511c1.5 0 2.7 1.2 2.7 2.8 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.8-1.2-2.8-2.7 0-1.6 1.3-2.8 2.8-2.8z"
            />
            <path
                fill="url(#K)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 2.1C0 .9 1 0 2.1 0c1.2 0 2.2.9 2.2 2.1 0 1.2-1 2.2-2.2 2.2C1 4.3 0 3.3 0 2.1z"
                transform="rotate(90 107.348 1054.462)"
            />
            <path
                fill="url(#G)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 1176.549 938.596)"
            />
            <path
                fill="url(#H)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(90 119.181 1057.815)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1177.61 938.96v9.3c0 .1.1.2.1.2.1 0 .2-.1.2-.2v-9.3c0-.1-.1-.2-.2-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="url(#L)"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 1141.277 1012.257)"
            />
            <path
                fill="url(#M)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 1141.594 1020.78)"
            />
            <path
                fill="url(#N)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(-90 1080.944 -60.202)"
            />
            <path
                fill="#92d050"
                d="M1140.533 1020.417v-9.3c0-.1-.1-.2-.1-.2-.1 0-.2.1-.2.2v9.3c0 .1.1.2.2.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#O)"
                d="M0 0h16.2v2.2H0V0z"
                transform="translate(1150.581 1023.166)"
            />
            <path
                fill="url(#O)"
                stroke="#595959"
                d="M3.7 0h7l3.7 5.2H0L3.7 0z"
                transform="translate(1151.501 1018.122)"
            />
            <path
                fill="url(#L)"
                stroke="#595959"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 1159.194 1001.886)"
            />
            <path
                fill="url(#P)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 9.2C0 4.1 4.1 0 9.2 0s9.2 4.1 9.2 9.2c0 5-4.1 9.1-9.2 9.1S0 14.2 0 9.2z"
                transform="matrix(0 -1 -1 0 1167.88 1020.278)"
            />
            <path
                fill="#92d050"
                d="M1158.735 1018.721c4.2 0 7.6-3.4 7.6-7.7 0-4.2-3.4-7.6-7.6-7.6-4.2 0-7.6 3.4-7.6 7.6 0 4.3 3.4 7.7 7.6 7.7z"
            />
            <path
                fill="#92d050"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1158.761 1008.3c1.5 0 2.7 1.2 2.7 2.8 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.8-1.2-2.8-2.7 0-1.6 1.3-2.8 2.8-2.8z"
            />
            <path
                fill="url(#Q)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 2.1C0 .9 1 0 2.1 0c1.2 0 2.2.9 2.2 2.1 0 1.2-1 2.2-2.2 2.2C1 4.3 0 3.3 0 2.1z"
                transform="rotate(90 75.978 1084.882)"
            />
            <path
                fill="url(#M)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 1175.599 1000.385)"
            />
            <path
                fill="url(#N)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(90 87.812 1088.235)"
            />
            <path
                fill="#92d050"
                d="M1176.66 1000.748v9.3c0 .1.1.2.1.2.1 0 .2-.1.2-.2v-9.3c0-.1-.1-.2-.2-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#ffc000"
                d="M1098.733 951.661h41.9v4.7h-41.9v-4.7zM1123.183 1014.066h17.5v4.7h-17.5v-4.7z"
            />
            <path fill="#fff" d="M1134.541 973.915h77.5v18.8h-77.5v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1134.541 973.915)"
            >
                <tspan
                    x={18.8}
                    y={15.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G307B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M1175.237 1005.5h99.3M1274.52 1007.394v-64.3M1124.27 1016.34v-61.6"
            />
            <path fill="#fff" d="M1133.591 910.43h77.5v18.8h-77.5v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1133.591 910.43)"
            >
                <tspan
                    x={18.8}
                    y={15.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G307A"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="m1098.861 664.401-.123 292M1176.402 942.403h341.4"
            />
            <path
                fill="#ffc000"
                stroke="#ffc000"
                d="M1523.87 938.066h11.5v-4.2l17.1 8.4-17.1 8.4v-4.2h-11.5v-8.4z"
            />
            <path fill="#fff" d="M1558 929.074h94.5v26.4H1558v-26.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1558 929.074)"
            >
                <tspan
                    x={20.2}
                    y={19.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"To T0302"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1405.08 660.184)"
            >
                <tspan
                    x={21}
                    y={19.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F301"}
                </tspan>
            </text>
            <g stroke="#92d050">
                <path fill="none" strokeWidth={4} d="M1437.38 358.391v248.6" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1443.38 606.991-6 12-6-12h12"
                />
            </g>
            <path
                fill="url(#R)"
                d="M0 0h41.4v13.4H0V0z"
                transform="translate(1361.88 934.429)"
            />
            <path
                fill="url(#S)"
                d="M.3 0H25c.2 0 .3.1.3.3v18c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.3C0 .1.1 0 .3 0z"
                transform="translate(1369.934 904.231)"
            />
            <path
                fill="#b4b5b5"
                d="M1371.154 905.255h22.9c.1 0 .3.1.3.3v15.9c0 .2-.2.3-.3.3h-22.9c-.2 0-.3-.1-.3-.3v-15.9c0-.2.1-.3.3-.3z"
            />
            <path fill="#92d050" d="M1371.586 906.102h22v14.8h-22v-14.8z" />
            <path
                fill="url(#T)"
                d="M0 0h6v12.1s-.1.8-3 .8-3-.8-3-.8V0z"
                transform="translate(1379.61 922.674)"
            />
            <path
                fill="url(#R)"
                d="M.6 0H2c.3 0 .5.2.5.5V19c0 .3-.2.5-.5.5H.6c-.4 0-.6-.2-.6-.5V.5C0 .2.2 0 .6 0z"
                transform="translate(1365 931.391)"
            />
            <path
                fill="url(#R)"
                d="M.6 0H2c.3 0 .5.2.5.5V19c0 .3-.2.5-.5.5H.6c-.4 0-.6-.2-.6-.5V.5C0 .2.2 0 .6 0z"
                transform="translate(1397.637 931.391)"
            />
            <path
                fill="url(#U)"
                d="M0 0h.6v13.4H0V0z"
                transform="translate(1367.539 934.445)"
            />
            <path
                fill="url(#U)"
                d="M0 0h.6v13.4H0V0z"
                transform="translate(1397.057 934.445)"
            />
            <path
                fill="url(#V)"
                d="M0 0h27.5v3.4H0V0z"
                transform="translate(1368.83 911.784)"
            />
            <path
                fill="url(#T)"
                d="M0 0h2.9v1.4H0V0z"
                transform="translate(1372.664 902.85)"
            />
            <path
                fill="url(#T)"
                d="M0 0h1.5v1.4H0V0z"
                transform="translate(1373.384 901.528)"
            />
            <path
                fill="url(#R)"
                d="M0 0h1.1v3.4H0V0z"
                transform="translate(1368.83 917.465)"
            />
            <path
                fill="url(#R)"
                d="M0 0h11.5v1.2H0V0z"
                transform="translate(1357.466 918.596)"
            />
            <path
                fill="url(#R)"
                d="M0 0h11.2v1.2H0V0z"
                transform="matrix(0 -1 -1 0 1357.014 931.537)"
            />
            <path
                fill="url(#W)"
                d="M0 0s.9 0 1.3.5.3 1.3.3 1.3H.5s0-.5-.5-.7V0z"
                transform="matrix(-1 0 0 1 1357.47 918.596)"
            />
            <path
                fill="none"
                stroke="#0070c0"
                strokeDasharray="4,10"
                strokeWidth={2}
                d="m1382.467 860.47.945 46.29"
            />
            <path
                fill="url(#F)"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 1489.907 792.725)"
            />
            <path
                fill="url(#G)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 1490.224 801.248)"
            />
            <path
                fill="url(#H)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(-90 1145.493 -344.283)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1489.163 800.885v-9.3c0-.1-.1-.2-.1-.2-.1 0-.2.1-.2.2v9.3c0 .1.1.2.2.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#I)"
                d="M0 0h16.2v2.2H0V0z"
                transform="translate(1499.211 803.634)"
            />
            <path
                fill="url(#I)"
                stroke="#595959"
                d="M3.7 0h7l3.7 5.2H0L3.7 0z"
                transform="translate(1500.131 798.59)"
            />
            <path
                fill="url(#F)"
                stroke="#595959"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 1507.824 782.354)"
            />
            <path
                fill="url(#J)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 9.2C0 4.1 4.1 0 9.2 0s9.2 4.1 9.2 9.2c0 5-4.1 9.1-9.2 9.1S0 14.2 0 9.2z"
                transform="matrix(0 -1 -1 0 1516.51 800.746)"
            />
            <path
                fill="#fff"
                fillOpacity={0.27}
                d="M1507.365 799.19c4.2 0 7.6-3.4 7.6-7.7 0-4.2-3.4-7.6-7.6-7.6-4.2 0-7.6 3.4-7.6 7.6 0 4.3 3.4 7.7 7.6 7.7z"
            />
            <path
                fill="#9da6b0"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1507.391 788.768c1.5 0 2.7 1.2 2.7 2.8 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.8-1.2-2.8-2.7 0-1.6 1.3-2.8 2.8-2.8z"
            />
            <path
                fill="url(#K)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 2.1C0 .9 1 0 2.1 0c1.2 0 2.2.9 2.2 2.1 0 1.2-1 2.2-2.2 2.2C1 4.3 0 3.3 0 2.1z"
                transform="rotate(90 360.06 1149.43)"
            />
            <path
                fill="url(#G)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 1524.229 780.853)"
            />
            <path
                fill="url(#H)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(90 371.893 1152.784)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1525.29 781.216v9.3c0 .1.1.2.1.2.1 0 .2-.1.2-.2v-9.3c0-.1-.1-.2-.2-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="url(#L)"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 1488.967 854.51)"
            />
            <path
                fill="url(#M)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 -1 -1 0 1489.284 863.033)"
            />
            <path
                fill="url(#N)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(-90 1175.916 -312.92)"
            />
            <path
                fill="#92d050"
                d="M1488.223 862.67v-9.3c0-.1-.1-.2-.1-.2-.1 0-.2.1-.2.2v9.3c0 .1.1.2.2.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#O)"
                d="M0 0h16.2v2.2H0V0z"
                transform="translate(1498.271 865.42)"
            />
            <path
                fill="url(#O)"
                stroke="#595959"
                d="M3.7 0h7l3.7 5.2H0L3.7 0z"
                transform="translate(1499.191 860.375)"
            />
            <path
                fill="url(#L)"
                stroke="#595959"
                d="M0 0h7v16.5H0V0z"
                transform="matrix(0 1 1 0 1506.884 844.139)"
            />
            <path
                fill="url(#P)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 9.2C0 4.1 4.1 0 9.2 0s9.2 4.1 9.2 9.2c0 5-4.1 9.1-9.2 9.1S0 14.2 0 9.2z"
                transform="matrix(0 -1 -1 0 1515.57 862.531)"
            />
            <path
                fill="#92d050"
                d="M1506.425 860.974c4.2 0 7.6-3.4 7.6-7.7 0-4.2-3.4-7.6-7.6-7.6-4.2 0-7.6 3.4-7.6 7.6 0 4.3 3.4 7.7 7.6 7.7z"
            />
            <path
                fill="#92d050"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1506.451 850.553c1.5 0 2.7 1.2 2.7 2.8 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.8-1.2-2.8-2.7 0-1.6 1.3-2.8 2.8-2.8z"
            />
            <path
                fill="url(#Q)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 2.1C0 .9 1 0 2.1 0c1.2 0 2.2.9 2.2 2.1 0 1.2-1 2.2-2.2 2.2C1 4.3 0 3.3 0 2.1z"
                transform="rotate(90 328.697 1179.853)"
            />
            <path
                fill="url(#M)"
                d="M.3 0h9.4c.2 0 .3.3.3.7 0 .4-.1.7-.3.7H.3c-.2 0-.3-.3-.3-.7C0 .3.1 0 .3 0z"
                transform="matrix(0 1 1 0 1523.289 842.638)"
            />
            <path
                fill="url(#N)"
                d="M9.9 0c0 .2-.1.4-.3.4H.3C.1.4 0 .2 0 0h9.9z"
                transform="rotate(90 340.53 1183.206)"
            />
            <path
                fill="#92d050"
                d="M1524.35 843.001v9.3c0 .1.1.2.1.2.1 0 .2-.1.2-.2v-9.3c0-.1-.1-.2-.2-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1445.888 793.915h42.5v4.7h-42.5v-4.7zM1470.863 857.27h17.5v4.7h-17.5v-4.7z"
            />
            <path fill="#fff" d="M1482.221 816.17h77.5v18.8h-77.5v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1482.221 816.17)"
            >
                <tspan
                    x={18.8}
                    y={15.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G303B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M1522.916 847.757h84.7M1606.13 849.648v-294.9M1471.95 862.028v-65.1"
            />
            <path fill="#fff" d="M1481.281 752.683h77.5v18.8h-77.5v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1481.281 752.683)"
            >
                <tspan
                    x={18.8}
                    y={15.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G303A"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M1445.89 798.674v-78.5"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1525.646 783.7h79.1v4.7h-79.1v-4.7z"
            />
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M1767.392 556.604h-159.8M1607.592 722.081h56.7M1662.43 722.082v57.7"
            />
            <path
                fill="url(#R)"
                d="M0 0h41.4v13.4H0V0z"
                transform="translate(1616.5 717.184)"
            />
            <path
                fill="url(#S)"
                d="M.3 0H25c.2 0 .3.1.3.3v18c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.3C0 .1.1 0 .3 0z"
                transform="translate(1624.554 686.986)"
            />
            <path
                fill="#b4b5b5"
                d="M1625.774 688.01h22.9c.1 0 .3.1.3.3v15.9c0 .2-.2.3-.3.3h-22.9c-.2 0-.3-.1-.3-.3v-15.9c0-.2.1-.3.3-.3z"
            />
            <path fill="#92d050" d="M1626.206 688.857h22v14.8h-22v-14.8z" />
            <path
                fill="url(#T)"
                d="M0 0h6v12.1s-.1.8-3 .8-3-.8-3-.8V0z"
                transform="translate(1634.23 705.429)"
            />
            <path
                fill="url(#R)"
                d="M.6 0H2c.3 0 .5.2.5.5V19c0 .3-.2.5-.5.5H.6c-.4 0-.6-.2-.6-.5V.5C0 .2.2 0 .6 0z"
                transform="translate(1619.62 714.146)"
            />
            <path
                fill="url(#R)"
                d="M.6 0H2c.3 0 .5.2.5.5V19c0 .3-.2.5-.5.5H.6c-.4 0-.6-.2-.6-.5V.5C0 .2.2 0 .6 0z"
                transform="translate(1652.257 714.146)"
            />
            <path
                fill="url(#U)"
                d="M0 0h.6v13.4H0V0z"
                transform="translate(1622.159 717.2)"
            />
            <path
                fill="url(#U)"
                d="M0 0h.6v13.4H0V0z"
                transform="translate(1651.677 717.2)"
            />
            <path
                fill="url(#V)"
                d="M0 0h27.5v3.4H0V0z"
                transform="translate(1623.45 694.539)"
            />
            <path
                fill="url(#T)"
                d="M0 0h2.9v1.4H0V0z"
                transform="translate(1627.284 685.605)"
            />
            <path
                fill="url(#T)"
                d="M0 0h1.5v1.4H0V0z"
                transform="translate(1628.004 684.283)"
            />
            <path
                fill="url(#R)"
                d="M0 0h1.1v3.4H0V0z"
                transform="translate(1623.45 700.22)"
            />
            <path
                fill="url(#R)"
                d="M0 0h11.5v1.2H0V0z"
                transform="translate(1612.086 701.351)"
            />
            <path
                fill="url(#R)"
                d="M0 0h11.2v1.2H0V0z"
                transform="matrix(0 -1 -1 0 1611.634 714.292)"
            />
            <path
                fill="url(#W)"
                d="M0 0s.9 0 1.3.5.3 1.3.3 1.3H.5s0-.5-.5-.7V0z"
                transform="matrix(-1 0 0 1 1612.09 701.351)"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1665.78 783.68v11.5h4.2l-8.4 17.1-8.4-17.1h4.2v-11.5h8.4z"
            />
            <path fill="#fff" d="M1631.514 817.586h60.2v26.4h-60.2v-26.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1631.514 817.586)"
            >
                <tspan
                    x={12.1}
                    y={19.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PFAO"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#236ea1"
                strokeWidth={4}
                d="M1765.291 595.622h-25.3M1741.86 595.622v130.2"
            />
            <path
                fill="#00b0f0"
                stroke="#00b0f0"
                d="M1738.51 758.246v-11.5h-4.2l8.4-17.1 8.4 17.1h-4.2v11.5h-8.4z"
            />
            <path
                fill="none"
                stroke="#236ea1"
                strokeWidth={4}
                d="M1824.127 553.784h41.6M1865.73 552.82v173"
            />
            <path
                fill="#00b0f0"
                stroke="#00b0f0"
                d="M1869.82 729.626v11.5h4.2l-8.4 17.1-8.4-17.1h4.2v-11.5h8.4z"
            />
            <path fill="#fff" d="M1756.043 762.062h80.4v45.8h-80.4v-45.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(1756.043 762.062)"
            >
                <tspan
                    x={17.2}
                    y={18.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Cooling "}
                </tspan>
                <tspan
                    x={23.2}
                    y={38.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Water"}
                </tspan>
            </text>
            <path
                fill="url(#R)"
                d="M0 0h41.4v13.4H0V0z"
                transform="rotate(90 556.645 1192.25)"
            />
            <path
                fill="url(#S)"
                d="M.3 0H25c.2 0 .3.1.3.3v18c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.3C0 .1.1 0 .3 0z"
                transform="rotate(90 567.717 1211.377)"
            />
            <path
                fill="#b4b5b5"
                d="M1778.07 644.88v22.9c0 .1-.1.3-.3.3h-15.9c-.2 0-.3-.2-.3-.3v-22.9c0-.2.1-.3.3-.3h15.9c.2 0 .3.1.3.3z"
            />
            <path fill="#92d050" d="M1777.223 645.312v22h-14.8v-22h14.8z" />
            <path
                fill="url(#T)"
                d="M0 0h6v12.1s-.1.8-3 .8-3-.8-3-.8V0z"
                transform="rotate(90 553.658 1206.993)"
            />
            <path
                fill="url(#R)"
                d="M.6 0H2c.3 0 .5.2.5.5V19c0 .3-.2.5-.5.5H.6c-.4 0-.6-.2-.6-.5V.5C0 .2.2 0 .6 0z"
                transform="rotate(90 556.604 1195.33)"
            />
            <path
                fill="url(#R)"
                d="M.6 0H2c.3 0 .5.2.5.5V19c0 .3-.2.5-.5.5H.6c-.4 0-.6-.2-.6-.5V.5C0 .2.2 0 .6 0z"
                transform="rotate(90 540.285 1211.648)"
            />
            <path
                fill="url(#U)"
                d="M0 0h.6v13.4H0V0z"
                transform="rotate(90 553.808 1195.073)"
            />
            <path
                fill="url(#U)"
                d="M0 0h.6v13.4H0V0z"
                transform="rotate(90 539.049 1209.832)"
            />
            <path
                fill="url(#V)"
                d="M0 0h27.5v3.4H0V0z"
                transform="rotate(90 564.492 1207.049)"
            />
            <path
                fill="url(#T)"
                d="M0 0h2.9v1.4H0V0z"
                transform="rotate(90 567.042 1213.433)"
            />
            <path
                fill="url(#T)"
                d="M0 0h1.5v1.4H0V0z"
                transform="rotate(90 567.344 1214.454)"
            />
            <path
                fill="url(#R)"
                d="M0 0h1.1v3.4H0V0z"
                transform="rotate(90 561.652 1204.208)"
            />
            <path
                fill="url(#R)"
                d="M0 0h11.5v1.2H0V0z"
                transform="rotate(90 566.768 1197.96)"
            />
            <path
                fill="url(#R)"
                d="M0 0h11.2v1.2H0V0z"
                transform="matrix(1 0 0 -1 1751.788 630.74)"
            />
            <path
                fill="url(#W)"
                d="M0 0s.9 0 1.3.5.3 1.3.3 1.3H.5s0-.5-.5-.7V0z"
                transform="matrix(0 -1 -1 0 1764.729 631.195)"
            />
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M1843.98 262.607v286.4M1822.707 594.895h23.2M1843.98 595.373v-37.7"
            />
            <path
                fill="url(#k)"
                d="M.2 0h15.1c.1 0 .3.1.3.2V12c0 .1-.2.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 723.003 1144.77)"
            />
            <path
                fill="url(#l)"
                d="M0 0h1.1v13.1H0V0z"
                transform="rotate(90 705.74 1134.745)"
            />
            <path
                fill="url(#m)"
                d="M0 0h4.4v.8H0V0z"
                transform="rotate(90 714.154 1141.506)"
            />
            <path
                fill="url(#l)"
                d="M0 0h3.2v8.2H0V0z"
                transform="rotate(90 713.465 1141.39)"
            />
            <path
                fill="url(#m)"
                d="M.3 0h15.1c.2 0 .3.1.3.2v.3c0 .1-.1.2-.3.2H.3C.1.7 0 .6 0 .5V.2C0 .1.1 0 .3 0z"
                transform="rotate(90 723.205 1144.834)"
            />
            <path
                fill="url(#n)"
                d="M.3 0h10.8c.1 0 .3.1.3.2v4c0 .1-.2.2-.3.2H.3c-.2 0-.3-.1-.3-.2v-4C0 .1.1 0 .3 0z"
                transform="rotate(90 720.01 1143.873)"
            />
            <path fill="#3e3938" d="M1863.48 424.435v10.2h-3.6v-10.2h3.6z" />
            <path
                fill="url(#o)"
                d="M.1 0h15.5s.1 0 .1.1v1.2c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="rotate(90 717.637 1139.35)"
            />
            <path
                fill="none"
                stroke="#236ea1"
                strokeDasharray="4,10"
                strokeWidth={2}
                d="M1868.567 429.895h18M1886.54 429.895v225.1M1886.536 654.945h-106.9"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M548.531 309.806v53.9M617.559 275.764h45.4M546.64 361.813h116.3M662.947 363.704v-89.8M662.947 320.207h46.3M709.281 318.315v175.9"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M709.282 492.304h271.7" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m980.982 486.304 12 6-12 6v-12"
                />
            </g>
            <path
                fill="none"
                stroke="#236ea1"
                strokeWidth={4}
                d="M542.857 125.416v-20.8M540.967 104.613h218.4M757.506 104.613v367.8"
            />
            <g stroke="#236ea1">
                <path fill="none" strokeWidth={4} d="M759.4 470.555H981" />
                <path
                    fill="#236ea1"
                    strokeLinecap="round"
                    d="m981 464.555 12 6-12 6v-12"
                />
            </g>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(492.884 201.448)"
            >
                <tspan
                    x={37.9}
                    y={19.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E303"}
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
                transform="translate(1162.364 36.692)"
            >
                <tspan
                    x={68.7}
                    y={58.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                        textDecoration: "underline",
                    }}
                >
                    {"DEODORISING SECTION 2"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M612.83 143.382h20.8"
            />
            <path
                fill="#ffc000"
                stroke="#ffc000"
                d="M666.016 147.472h-11.5v4.2l-17.1-8.4 17.1-8.4v4.2h11.5v8.4z"
            />
            <path fill="#fff" d="M670.038 125.371h84.4v62.5h-84.4v-62.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(670.038 125.371)"
            >
                <tspan
                    x={26.7}
                    y={27.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"From"}
                </tspan>
                <tspan
                    x={27.2}
                    y={47.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E302"}
                </tspan>
            </text>
            <path fill="#fff" d="M27.48 745.292h137v50.2h-137v-50.2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                }}
                transform="translate(27.48 745.292)"
            >
                <tspan
                    x={21}
                    y={21.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"From E205 A/B "}
                </tspan>
                <tspan
                    x={44.5}
                    y={41.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RBO Oil"}
                </tspan>
            </text>
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "12pt",
                    fontWeight: 700,
                }}
                transform="translate(1741.787 538.837)"
            >
                <tspan
                    x={37.9}
                    y={19.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E305"}
                </tspan>
            </text>
        </svg>
    )
}
export default Deo2HMI
