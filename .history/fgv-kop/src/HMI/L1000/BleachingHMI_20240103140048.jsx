import React from 'react'

const BleachingHMI = ({ value }) => {
    console.log(value);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox="1 1 1920 1080" >
            <defs>
                <linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0.25} stopColor="#ebebeb" />
                    <stop offset={0.37} stopColor="#c2c2c2" />
                    <stop offset={0.82} stopColor="#6185a8" />
                    <stop offset={0.85} stopColor="#909090" stopOpacity={0.47} />
                </linearGradient>
                <linearGradient id="b" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9db098" />
                    <stop offset={0.15} stopColor="#d0e8cb" />
                    <stop offset={0.25} stopColor="#d9ecd5" />
                    <stop offset={0.44} stopColor="#b3c9ae" />
                    <stop offset={0.6} stopColor="#9fb39b" />
                    <stop offset={0.8} stopColor="#869782" />
                    <stop offset={0.97} stopColor="#7a8a76" />
                    <stop offset={1} stopColor="#a3b79e" />
                </linearGradient>
                <linearGradient id="c" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6b8f62" />
                    <stop offset={0.15} stopColor="#9cc691" />
                    <stop offset={0.25} stopColor="#cde0c9" />
                    <stop offset={0.52} stopColor="#7fa975" />
                    <stop offset={0.69} stopColor="#719767" />
                    <stop offset={0.8} stopColor="#6a8e61" />
                    <stop offset={0.92} stopColor="#64865b" />
                    <stop offset={1} stopColor="#739a6a" />
                </linearGradient>
                <linearGradient id="d" x1="0%" x2="0%" y1="100%" y2="0%">
                    <stop offset={0.3} stopColor="#ffc000" />
                    <stop offset={0.38} stopColor="#e7e7e7" />
                    <stop offset={0.42} stopColor="#ebebeb" />
                    <stop offset={0.49} stopColor="#fff" />
                    <stop offset={0.58} stopColor="#fff" />
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
                    <stop offset={0} stopColor="#b50000" />
                    <stop offset={0.03} stopColor="#ff7c7c" />
                    <stop offset={0.08} stopColor="#eb0000" />
                    <stop offset={0.64} stopColor="#e70000" />
                    <stop offset={0.95} stopColor="#e20000" />
                    <stop offset={1} stopColor="#a80000" />
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
                <linearGradient id="k" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9aa1aa" />
                    <stop offset={0.22} stopColor="#aeb5c0" />
                    <stop offset={0.57} stopColor="#dce0e5" />
                    <stop offset={0.84} stopColor="#cacfd7" />
                    <stop offset={1} stopColor="#a7afb9" />
                </linearGradient>
                <linearGradient id="l" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#8f969d" />
                    <stop offset={0.64} stopColor="#d3d8de" />
                    <stop offset={1} stopColor="#9aa0a8" />
                </linearGradient>
                <linearGradient id="m" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#626974" />
                    <stop offset={0.66} stopColor="#ccd0d5" />
                    <stop offset={1} stopColor="#5e6670" />
                </linearGradient>
                <linearGradient id="n" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#a3abb1" />
                    <stop offset={0.03} stopColor="#ecf4fb" />
                    <stop offset={0.05} stopColor="#d5dee6" />
                    <stop offset={0.64} stopColor="#d1dae3" />
                    <stop offset={0.95} stopColor="#cdd5dd" />
                    <stop offset={1} stopColor="#979ea4" />
                </linearGradient>
                <linearGradient id="q" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#79ae42" />
                    <stop offset={0.22} stopColor="#89c34b" />
                    <stop offset={0.57} stopColor="#cde7bb" />
                    <stop offset={0.84} stopColor="#afda8c" />
                    <stop offset={1} stopColor="#84bc48" />
                </linearGradient>
                <linearGradient id="r" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6f9f3b" />
                    <stop offset={0.64} stopColor="#c2e2aa" />
                    <stop offset={1} stopColor="#77aa40" />
                </linearGradient>
                <linearGradient id="s" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#649035" />
                    <stop offset={0.66} stopColor="#cde7bb" />
                    <stop offset={1} stopColor="#608b33" />
                </linearGradient>
                <linearGradient id="t" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.03} stopColor="#afda8c" />
                    <stop offset={0.05} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.95} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient id="w" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a1a9b3" />
                    <stop offset={0.09} stopColor="#a3acb6" />
                    <stop offset={0.36} stopColor="#c9d4e0" />
                    <stop offset={0.56} stopColor="#b5bfc9" />
                    <stop offset={0.83} stopColor="#9199a2" />
                    <stop offset={1} stopColor="#676d74" />
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
                    <stop offset={0} stopColor="#979797" />
                    <stop offset={0.15} stopColor="#d3d3d3" />
                    <stop offset={0.25} stopColor="#d6d6d6" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                </linearGradient>
                <linearGradient id="A" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#8f8f8f" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#e0e0e0" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                    <stop offset={1} stopColor="#9a9a9a" />
                </linearGradient>
                <linearGradient id="B" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#979797" />
                    <stop offset={0.15} stopColor="#d3d3d3" />
                    <stop offset={0.25} stopColor="#d6d6d6" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                </linearGradient>
                <linearGradient id="C" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#979797" />
                    <stop offset={0.15} stopColor="#d3d3d3" />
                    <stop offset={0.25} stopColor="#d6d6d6" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                </linearGradient>
                <linearGradient id="D" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#8f8f8f" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#e0e0e0" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                    <stop offset={1} stopColor="#9a9a9a" />
                </linearGradient>
                <linearGradient id="E" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#8f8f8f" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#e0e0e0" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                    <stop offset={1} stopColor="#9a9a9a" />
                </linearGradient>
                <linearGradient id="F" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a5a5a5" />
                    <stop offset={0.15} stopColor="#dadada" />
                    <stop offset={0.25} stopColor="#eaeaea" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.97} stopColor="#959595" />
                    <stop offset={1} stopColor="#ababab" />
                </linearGradient>
                <linearGradient id="G" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#989898" />
                    <stop offset={0.03} stopColor="#e0e0e0" />
                    <stop offset={0.08} stopColor="#c6c6c6" />
                    <stop offset={0.64} stopColor="#c3c3c3" />
                    <stop offset={0.95} stopColor="#bebebe" />
                    <stop offset={1} stopColor="#8d8d8d" />
                </linearGradient>
                <linearGradient id="H" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#989898" />
                    <stop offset={0.03} stopColor="#e0e0e0" />
                    <stop offset={0.08} stopColor="#c6c6c6" />
                    <stop offset={0.64} stopColor="#c3c3c3" />
                    <stop offset={0.95} stopColor="#bebebe" />
                    <stop offset={1} stopColor="#8d8d8d" />
                </linearGradient>
                <linearGradient id="I" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#a5a5a5" />
                    <stop offset={0.15} stopColor="#dadada" />
                    <stop offset={0.25} stopColor="#eaeaea" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.97} stopColor="#959595" />
                    <stop offset={1} stopColor="#ababab" />
                </linearGradient>
                <linearGradient id="J" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#669336" />
                    <stop offset={0.03} stopColor="#afda8c" />
                    <stop offset={0.08} stopColor="#86bf49" />
                    <stop offset={0.64} stopColor="#84bc48" />
                    <stop offset={0.95} stopColor="#81b846" />
                    <stop offset={1} stopColor="#5e8831" />
                </linearGradient>
                <linearGradient id="K" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#b3a593" />
                    <stop offset={0.03} stopColor="#fdeeda" />
                    <stop offset={0.05} stopColor="#e9d7bf" />
                    <stop offset={0.64} stopColor="#e5d3bc" />
                    <stop offset={0.95} stopColor="#e0ceb8" />
                    <stop offset={1} stopColor="#a69988" />
                </linearGradient>
                <linearGradient id="L" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9e9e9e" />
                    <stop offset={0.15} stopColor="#f6f6f6" />
                    <stop offset={0.26} stopColor="#fff" />
                    <stop offset={0.41} stopColor="#fff" />
                    <stop offset={0.6} stopColor="#d1d1d1" />
                    <stop offset={0.8} stopColor="#a8a8a8" />
                    <stop offset={0.93} stopColor="#898989" />
                </linearGradient>
                <linearGradient id="M" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9c9080" />
                    <stop offset={0.15} stopColor="#f4e1c8" />
                    <stop offset={0.26} stopColor="#fdebd5" />
                    <stop offset={0.41} stopColor="#fde9d1" />
                    <stop offset={0.6} stopColor="#d0bfaa" />
                    <stop offset={0.8} stopColor="#a69988" />
                    <stop offset={0.93} stopColor="#887d6f" />
                </linearGradient>
                <linearGradient id="N" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} />
                    <stop offset={0.03} stopColor="#7c7c7c" />
                    <stop offset={0.05} />
                    <stop offset={0.64} />
                    <stop offset={0.95} />
                    <stop offset={1} />
                </linearGradient>
                <linearGradient id="O" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#b3a593" />
                    <stop offset={0.03} stopColor="#fdeeda" />
                    <stop offset={0.05} stopColor="#e9d7bf" />
                    <stop offset={0.64} stopColor="#e5d3bc" />
                    <stop offset={0.95} stopColor="#e0ceb8" />
                    <stop offset={1} stopColor="#a69988" />
                </linearGradient>
                <linearGradient id="P" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#949494" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#e0e0e0" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.97} stopColor="#868686" />
                    <stop offset={1} stopColor="#9a9a9a" />
                </linearGradient>
                <linearGradient id="Q" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#888" />
                    <stop offset={0.03} stopColor="#d0d0d0" />
                    <stop offset={0.08} stopColor="#b2b2b2" />
                    <stop offset={0.64} stopColor="#b0b0b0" />
                    <stop offset={0.95} stopColor="#acacac" />
                    <stop offset={1} stopColor="#7e7e7e" />
                </linearGradient>
                <linearGradient id="R" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#888" />
                    <stop offset={0.03} stopColor="#d0d0d0" />
                    <stop offset={0.08} stopColor="#b2b2b2" />
                    <stop offset={0.64} stopColor="#b0b0b0" />
                    <stop offset={0.95} stopColor="#acacac" />
                    <stop offset={1} stopColor="#7e7e7e" />
                </linearGradient>
                <linearGradient id="S" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#949494" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#e0e0e0" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.97} stopColor="#868686" />
                    <stop offset={1} stopColor="#9a9a9a" />
                </linearGradient>
                <linearGradient id="T" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a7a7a7" />
                    <stop offset={0.15} stopColor="#e1e1e1" />
                    <stop offset={0.25} stopColor="#e4e4e4" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.92} stopColor="#959595" />
                </linearGradient>
                <linearGradient id="U" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9f9f9f" />
                    <stop offset={0.15} stopColor="#dadada" />
                    <stop offset={0.25} stopColor="#eaeaea" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.92} stopColor="#959595" />
                    <stop offset={1} stopColor="#ababab" />
                </linearGradient>
                <linearGradient id="V" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#a7a7a7" />
                    <stop offset={0.15} stopColor="#e1e1e1" />
                    <stop offset={0.25} stopColor="#e4e4e4" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.92} stopColor="#959595" />
                </linearGradient>
                <linearGradient id="W" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a7a7a7" />
                    <stop offset={0.15} stopColor="#e1e1e1" />
                    <stop offset={0.25} stopColor="#e4e4e4" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.92} stopColor="#959595" />
                </linearGradient>
                <linearGradient id="X" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#9f9f9f" />
                    <stop offset={0.15} stopColor="#dadada" />
                    <stop offset={0.25} stopColor="#eaeaea" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.92} stopColor="#959595" />
                    <stop offset={1} stopColor="#ababab" />
                </linearGradient>
                <linearGradient id="Y" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#9f9f9f" />
                    <stop offset={0.15} stopColor="#dadada" />
                    <stop offset={0.25} stopColor="#eaeaea" />
                    <stop offset={0.52} stopColor="#bcbcbc" />
                    <stop offset={0.69} stopColor="#a7a7a7" />
                    <stop offset={0.8} stopColor="#9e9e9e" />
                    <stop offset={0.92} stopColor="#959595" />
                    <stop offset={1} stopColor="#ababab" />
                </linearGradient>
                <linearGradient id="Z" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#71a23c" />
                    <stop offset={0.15} stopColor="#b4dd95" />
                    <stop offset={0.25} stopColor="#bbdf9f" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                </linearGradient>
                <linearGradient id="aa" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#6b9a39" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="ab" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#71a23c" />
                    <stop offset={0.15} stopColor="#b4dd95" />
                    <stop offset={0.25} stopColor="#bbdf9f" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                </linearGradient>
                <linearGradient id="ac" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6b9a39" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="ad" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#71a23c" />
                    <stop offset={0.15} stopColor="#b4dd95" />
                    <stop offset={0.25} stopColor="#bbdf9f" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                </linearGradient>
                <linearGradient id="ae" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#6b9a39" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#cde7bb" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                    <stop offset={1} stopColor="#73a53e" />
                </linearGradient>
                <linearGradient id="af" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#71a23c" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#9fd46d" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                </linearGradient>
                <linearGradient
                    id="ag"
                    x1={4}
                    x2={1}
                    y1={0}
                    y2={5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#71a23c" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#9fd46d" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                </linearGradient>
                <linearGradient
                    id="ah"
                    x1={4}
                    x2={1}
                    y1={0}
                    y2={6}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#71a23c" />
                    <stop offset={0.15} stopColor="#9cd367" />
                    <stop offset={0.25} stopColor="#9fd46d" />
                    <stop offset={0.52} stopColor="#7fb645" />
                    <stop offset={0.69} stopColor="#71a23c" />
                    <stop offset={0.8} stopColor="#6a9838" />
                    <stop offset={0.92} stopColor="#649035" />
                </linearGradient>
                <linearGradient id="ai" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#979797" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#c8c8c8" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                </linearGradient>
                <linearGradient
                    id="aj"
                    x1={4}
                    x2={1}
                    y1={0}
                    y2={5}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#979797" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#c8c8c8" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                </linearGradient>
                <linearGradient
                    id="ak"
                    x1={4}
                    x2={1}
                    y1={0}
                    y2={6}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#979797" />
                    <stop offset={0.15} stopColor="#c6c6c6" />
                    <stop offset={0.25} stopColor="#c8c8c8" />
                    <stop offset={0.52} stopColor="#a9a9a9" />
                    <stop offset={0.69} stopColor="#979797" />
                    <stop offset={0.8} stopColor="#8e8e8e" />
                    <stop offset={0.92} stopColor="#868686" />
                </linearGradient>
                <linearGradient id="al" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#949990" />
                    <stop offset={0.15} stopColor="#cdd2c7" />
                    <stop offset={0.25} stopColor="#e3e6e1" />
                    <stop offset={0.52} stopColor="#b0b5aa" />
                    <stop offset={0.69} stopColor="#9ca197" />
                    <stop offset={0.8} stopColor="#93988f" />
                    <stop offset={0.92} stopColor="#8b8f86" />
                    <stop offset={1} stopColor="#a0a59b" />
                </linearGradient>
                <linearGradient id="am" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#949990" />
                    <stop offset={0.15} stopColor="#cdd2c7" />
                    <stop offset={0.25} stopColor="#e3e6e1" />
                    <stop offset={0.52} stopColor="#b0b5aa" />
                    <stop offset={0.69} stopColor="#9ca197" />
                    <stop offset={0.8} stopColor="#93988f" />
                    <stop offset={0.92} stopColor="#8b8f86" />
                    <stop offset={1} stopColor="#a0a59b" />
                </linearGradient>
                <linearGradient id="an" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#949990" />
                    <stop offset={0.15} stopColor="#cdd2c7" />
                    <stop offset={0.25} stopColor="#e3e6e1" />
                    <stop offset={0.52} stopColor="#b0b5aa" />
                    <stop offset={0.69} stopColor="#9ca197" />
                    <stop offset={0.8} stopColor="#93988f" />
                    <stop offset={0.92} stopColor="#8b8f86" />
                    <stop offset={1} stopColor="#84877f" />
                </linearGradient>
                <linearGradient id="ao" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#898c85" />
                    <stop offset={0.15} stopColor="#bfc3ba" />
                    <stop offset={0.25} stopColor="#dddeda" />
                    <stop offset={0.52} stopColor="#a2a69d" />
                    <stop offset={0.69} stopColor="#90938b" />
                    <stop offset={0.8} stopColor="#888b83" />
                    <stop offset={0.92} stopColor="#80837c" />
                    <stop offset={1} stopColor="#94978f" />
                </linearGradient>
                <linearGradient id="ap" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#0082b2" />
                    <stop offset={0.15} stopColor="#45b6f1" />
                    <stop offset={0.25} stopColor="#b3d8f7" />
                    <stop offset={0.52} stopColor="#009ad2" />
                    <stop offset={0.69} stopColor="#08b" />
                    <stop offset={0.8} stopColor="#0080b0" />
                    <stop offset={0.92} stopColor="#0079a6" />
                    <stop offset={1} stopColor="#008cbf" />
                </linearGradient>
                <linearGradient id="aq" x1="100%" x2="0%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#37638a" />
                    <stop offset={0.15} stopColor="#6593c0" />
                    <stop offset={0.25} stopColor="#bac9dd" />
                    <stop offset={0.52} stopColor="#4276a3" />
                    <stop offset={0.69} stopColor="#3a6991" />
                    <stop offset={0.8} stopColor="#366289" />
                    <stop offset={0.92} stopColor="#335d81" />
                    <stop offset={1} stopColor="#3c6b94" />
                </linearGradient>
                <linearGradient id="ar" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#a2a2a2" />
                    <stop offset={0.22} stopColor="#b6b6b6" />
                    <stop offset={0.57} stopColor="#e0e0e0" />
                    <stop offset={0.84} stopColor="#d0d0d0" />
                    <stop offset={1} stopColor="#b0b0b0" />
                </linearGradient>
                <linearGradient id="as" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#949494" />
                    <stop offset={0.64} stopColor="#dadada" />
                    <stop offset={1} stopColor="#9f9f9f" />
                </linearGradient>
                <linearGradient id="at" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset={0} stopColor="#868686" />
                    <stop offset={0.66} stopColor="#e0e0e0" />
                    <stop offset={1} stopColor="#818181" />
                </linearGradient>
                <linearGradient id="au" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset={0} stopColor="#888" />
                    <stop offset={0.03} stopColor="#d0d0d0" />
                    <stop offset={0.05} stopColor="#b2b2b2" />
                    <stop offset={0.64} stopColor="#b0b0b0" />
                    <stop offset={0.95} stopColor="#acacac" />
                    <stop offset={1} stopColor="#7e7e7e" />
                </linearGradient>
                <radialGradient
                    id="o"
                    cx={10}
                    cy={8}
                    r={13.1}
                    fx={10}
                    fy={8}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#c7cbd1" />
                    <stop offset={0.91} stopColor="#c4c7cd" />
                    <stop offset={0.74} stopColor="#d4d8dd" />
                    <stop offset={0.54} stopColor="#b6bcc4" />
                </radialGradient>
                <radialGradient
                    id="p"
                    cx={2}
                    cy={2}
                    r={3.1}
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
                    id="u"
                    cx={10}
                    cy={8}
                    r={13.1}
                    fx={10}
                    fy={8}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#8eca4e" />
                    <stop offset={0.91} stopColor="#8bc64c" />
                    <stop offset={0.74} stopColor="#bbdf9f" />
                    <stop offset={0.54} stopColor="#8bc64c" />
                </radialGradient>
                <radialGradient
                    id="v"
                    cx={2}
                    cy={2}
                    r={3.1}
                    fx={2}
                    fy={2}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#8eca4e" />
                    <stop offset={0.91} stopColor="#8bc64c" />
                    <stop offset={0.74} stopColor="#bbdf9f" />
                    <stop offset={0.54} stopColor="#8bc64c" />
                </radialGradient>
                <radialGradient
                    id="av"
                    cx={10}
                    cy={8}
                    r={13.1}
                    fx={10}
                    fy={8}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#bdbdbd" />
                    <stop offset={0.91} stopColor="#b9b9b9" />
                    <stop offset={0.74} stopColor="#d6d6d6" />
                    <stop offset={0.54} stopColor="#b9b9b9" />
                </radialGradient>
                <radialGradient
                    id="aw"
                    cx={2}
                    cy={2}
                    r={3.1}
                    fx={2}
                    fy={2}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#bdbdbd" />
                    <stop offset={0.91} stopColor="#b9b9b9" />
                    <stop offset={0.74} stopColor="#d6d6d6" />
                    <stop offset={0.54} stopColor="#b9b9b9" />
                </radialGradient>
            </defs>
            <path fill="#0e2350" stroke="#3498db" d="M1 1h1920v1080H1V1z" />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M1128.85 518.846v-173.1M1128.85 346.62h-239.4M1199.45 469.631v-123.8"
            />
            <path
                fill="url(#a)"
                stroke="#696969"
                d="M0 0h35.2v49.6H0V0z"
                transform="translate(485.557 741.725)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={5.333}
                d="m484.12 751.294 37.35 28.693"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={5.333}
                d="m483.401 780.879 37.346-28.701"
            />
            <path
                fill="#ff0"
                d="m460.449 850.485-5.757-5.643 3.4-.034-.662-66.496 4.6-.046.662 66.496 3.5-.034-5.743 5.757z"
            />
            <path
                fill="none"
                stroke="#ff0"
                strokeWidth={5.333}
                d="M458.335 780.003h26.6"
            />
            <path
                fill="#ff0"
                stroke="#7e7e7e"
                d="M464.958 855.153v7.9h4.5l-9 11.8-9-11.8h4.5v-7.9h9z"
            />
            <path
                fill="url(#b)"
                d="M0 14h73.8V0H0v14z"
                transform="translate(1520.278 671.926)"
            />
            <path
                fill="url(#c)"
                d="M0 3.2h73.8V0H0v3.2z"
                transform="translate(1520.278 681.505)"
            />
            <path
                fill="url(#b)"
                d="M0 12.8h73.8V0H0v12.8z"
                transform="translate(1520.278 857.77)"
            />
            <path
                fill="url(#c)"
                d="M0 3.7h73.8V0H0v3.7z"
                transform="translate(1520.278 857.524)"
            />
            <path
                fill="url(#b)"
                d="M7.1 0h74.4c4 0 7.2 5.6 7.2 12.5v148.4c0 6.9-3.2 12.5-7.2 12.5H7.1c-3.9 0-7.1-5.6-7.1-12.5V12.5C0 5.6 3.2 0 7.1 0z"
                transform="translate(1512.85 684.547)"
            />
            <path
                fill="url(#d)"
                d="M0 0h9.9v122H0V0z"
                transform="translate(1587.325 719.301)"
            />
            <path fill="#ffc000" d="M461.931 748.865h24.4v5.2h-24.4v-5.2z" />
            <path
                fill="url(#a)"
                stroke="#696969"
                d="M0 0h35.2v49.6H0V0z"
                transform="translate(505.502 602.096)"
            />
            <path
                fill="none"
                stroke="red"
                strokeWidth={5.333}
                d="m504.064 611.665 37.346 28.7"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={5.333}
                d="m503.346 641.25 37.35-28.694"
            />
            <path fill="red" d="M441.57 609.872h63.7v5.2h-63.7v-5.2z" />
            <path
                fill="none"
                stroke="red"
                strokeWidth={5.333}
                d="M540.584 640.448h26.6"
            />
            <path fill="red" d="M567.274 637.841v44.8h-4.3v-44.8h4.3z" />
            <path
                fill="red"
                stroke="#7e7e7e"
                d="M569.878 687.94v7.9h4.5l-9 11.8-9-11.8h4.5v-7.9h9zM321.724 607.55h12.2v-5.5l18.3 10.9-18.3 10.9v-5.4h-12.2v-10.9z"
            />
            <path
                fill="url(#e)"
                d="M0 0h25.9v10.2H0V0z"
                transform="translate(416.076 607.714)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h15.5c.1 0 .2.1.2.2v13.7c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(421.123 584.805)"
            />
            <path
                fill="#b4b5b5"
                d="M421.9 585.582h14.3c.1 0 .2.1.2.2v12.1c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-12.1c0-.1.1-.2.2-.2z"
            />
            <path fill="red" d="M422.158 586.224h13.8v11.2h-13.8v-11.2z" />
            <path
                fill="url(#g)"
                d="M0 0h3.7v9.2s0 .6-1.8.6S0 9.2 0 9.2V0z"
                transform="translate(427.185 598.796)"
            />
            <path
                fill="url(#e)"
                d="M.3 0h.9c.2 0 .4.2.4.4v14c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(418.031 605.41)"
            />
            <path
                fill="url(#e)"
                d="M.3 0h.9c.2 0 .4.2.4.4v14c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(438.481 605.41)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v10.2H0V0z"
                transform="translate(419.622 607.726)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v10.2H0V0z"
                transform="translate(438.118 607.726)"
            />
            <path
                fill="url(#i)"
                d="M0 0h17.2v2.6H0V0z"
                transform="translate(420.431 590.535)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(422.834 583.757)"
            />
            <path
                fill="url(#g)"
                d="M0 0h.9v1H0V0z"
                transform="translate(423.285 582.754)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.7v2.6H0V0z"
                transform="translate(420.431 594.845)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7.2v.9H0V0z"
                transform="translate(413.31 595.703)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.5v.7H0V0z"
                transform="matrix(0 -1 -1 0 413.027 605.52)"
            />
            <path
                fill="url(#j)"
                d="M0 0s.5 0 .8.4c.3.3.2.9.2.9H.3S.3 1 0 .9V0z"
                transform="matrix(-1 0 0 1 413.313 595.703)"
            />
            <path fill="red" d="M357.194 609.872h59.4v5.2h-59.4v-5.2z" />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M609.329 545.34h120.4v18.3h-120.4v-18.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(609.329 545.34)"
            >
                <tspan
                    x={34.2}
                    y={13.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"----------"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M609.329 524.123h120.4v18.3h-120.4v-18.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(609.329 524.123)"
            >
                <tspan
                    x={36.2}
                    y={13.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['FIRCQ201']} ton/Hr`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M609.329 502.906h120.4v18.3h-120.4v-18.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(609.329 502.906)"
            >
                <tspan
                    x={41.7}
                    y={13.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FIC201"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M604.74 498.545h128.9v69.4h-128.9v-69.4zM389.022 521.486h81.1v47.5h-81.1v-47.5z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M391.788 545.855h75.6v18.3h-75.6v-18.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(391.788 545.855)"
            >
                <tspan
                    x={36.3}
                    y={13.6}
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
                d="M392.03 525.275h75.6v18.3h-75.6v-18.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(392.03 525.275)"
            >
                <tspan
                    x={24.3}
                    y={13.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TV202"}
                </tspan>
            </text>
            <path fill="#fff" d="M467.864 796.114h70.6v26h-70.6v-26z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(467.864 796.114)"
            >
                <tspan
                    x={15.8}
                    y={17.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E205A /B"}
                </tspan>
            </text>
            <path fill="#fff" d="M301.66 628.37h70.6v24.4h-70.6v-24.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(301.66 628.37)"
            >
                <tspan
                    x={22.3}
                    y={16.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Steam"}
                </tspan>
            </text>
            <path fill="#fff" d="M427.401 880.822h66.1v24.3h-66.1v-24.3z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(427.401 880.822)"
            >
                <tspan
                    x={14.5}
                    y={16.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TO E304"}
                </tspan>
            </text>
            <path fill="#ffc000" d="M466.237 638.363v115.7h-4.3v-115.7h4.3z" />
            <path fill="#fff" d="M488.14 654.52h70.6v22.7h-70.6v-22.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(488.14 654.52)"
            >
                <tspan
                    x={24.8}
                    y={15.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"E201"}
                </tspan>
            </text>
            <path
                fill="url(#b)"
                d="M0 14h73.8V0H0v14z"
                transform="translate(1209.462 686.231)"
            />
            <path
                fill="url(#c)"
                d="M0 3.2h73.8V0H0v3.2z"
                transform="translate(1209.462 695.81)"
            />
            <path
                fill="url(#b)"
                d="M0 12.8h73.8V0H0v12.8z"
                transform="translate(1209.462 872.075)"
            />
            <path
                fill="url(#c)"
                d="M0 3.7h73.8V0H0v3.7z"
                transform="translate(1209.462 871.828)"
            />
            <path
                fill="url(#b)"
                d="M7.1 0h74.4c4 0 7.2 5.6 7.2 12.5v148.4c0 6.9-3.2 12.5-7.2 12.5H7.1c-3.9 0-7.1-5.6-7.1-12.5V12.5C0 5.6 3.2 0 7.1 0z"
                transform="translate(1202.033 698.852)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1211.074 709.115)"
            >
                <tspan
                    x={24.3}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D202"}
                </tspan>
            </text>
            <path
                fill="red"
                stroke="red"
                d="M1146.27 1001.96v-7.9h-4.5l9-11.8 9 11.8h-4.5v7.9h-9z"
            />
            <path fill="#fff" d="M1102.809 1011.513h96.3v28.7h-96.3v-28.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1102.809 1011.513)"
            >
                <tspan
                    x={35.1}
                    y={18.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Steam"}
                </tspan>
            </text>
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M1150.512 750.872h45.4" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m1202.212 750.872-7.4-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.4-4.2"
                />
            </g>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2}
                d="M1150.512 750.872v15.6M1150.512 766.423v15.6"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M1150.512 776.848h45.4" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m1202.212 776.848-7.4-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.4-4.2"
                />
            </g>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2}
                d="M1150.512 782.146v15.6M1150.512 797.697v174.1"
            />
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M1151.235 803.952h44.7" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m1202.135 803.952-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
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
                transform="translate(1521.46 698.222)"
            >
                <tspan
                    x={24.3}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"D203"}
                </tspan>
            </text>
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M1453.441 786.866h54.1" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m1513.741 786.866-7.4-4.2c.7 1.2 1.2 2.7 1.2 4.2s-.5 3-1.2 4.2l7.4-4.2"
                />
            </g>
            <path
                fill="none"
                stroke="red"
                strokeWidth={2}
                d="M1453.08 785.823v15.6M1453.08 801.367v15.6M1453.08 817.097v15.6M1453.08 831.598v99.5M1453.441 931.133h-303.1"
            />
            <path
                fill="#c2c2c2"
                stroke="#000"
                d="M1580.867 702.294c0-5.2 3.7-9.4 8.2-9.4 4.5 0 8.2 4.2 8.2 9.4s-3.7 9.5-8.2 9.5c-4.5 0-8.2-4.3-8.2-9.5z"
            />
            <path fill="#ffc000" d="M1245.943 885.265v27.1h-4.3v-27.1h4.3z" />
            <path fill="#ffc000" d="M1241.64 907.51h164.2v5.2h-164.2v-5.2z" />
            <path fill="#ffc000" d="M1405.863 744.533v164.3h-4.3v-164.3h4.3z" />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={5.333} d="M1401.782 744.531h101.8" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1513.682 744.531-12-6.9a13.476 13.476 0 0 1 0 13.8l12-6.9"
                />
            </g>
            <path fill="#fff" d="M1293.504 703.145h68.7v22h-68.7v-22z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1293.504 703.145)"
            >
                <tspan
                    x={15.3}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LSAH205"}
                </tspan>
            </text>
            <path fill="#fff" d="M1292.643 840.751h58.3v21.6h-58.3v-21.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1292.643 840.751)"
            >
                <tspan
                    x={13.7}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LAL206"}
                </tspan>
            </text>
            <path fill="#fff" d="M1604.114 689.122h68.9v23.6h-68.9v-23.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1604.114 689.122)"
            >
                <tspan
                    x={15.4}
                    y={16.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LSAH219"}
                </tspan>
            </text>
            <path fill="#ffc000" d="M1560.634 868.883v160.8h-4.3v-160.8h4.3z" />
            <path
                fill="url(#k)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1573.67 913.442)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1573.959 922.838)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 1248.174 -325.377)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1572.992 922.458v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(1582.142 925.469)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(1582.98 919.907)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1589.984 902.008)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 1597.893 922.285)"
            />
            <path
                fill="#fff"
                fillOpacity={0.27}
                d="M1589.586 920.568c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#9da6b0"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1589.548 909.08c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 340.878 1250.623)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 1604.921 900.353)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 352.467 1252.862)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1605.887 900.733v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1572.809 949.24)"
            />
            <path
                fill="url(#r)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1573.098 958.637)"
            />
            <path
                fill="url(#s)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 1265.642 -307.048)"
            />
            <path
                fill="#92d050"
                d="M1572.131 958.256v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#t)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(1581.28 961.267)"
            />
            <path
                fill="url(#t)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(1582.119 955.706)"
            />
            <path
                fill="url(#q)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1589.123 937.807)"
            />
            <path
                fill="url(#u)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 1597.032 958.083)"
            />
            <path
                fill="#92d050"
                d="M1588.725 956.367c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#92d050"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1588.687 944.878c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#v)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 322.548 1268.092)"
            />
            <path
                fill="url(#r)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 1604.06 936.152)"
            />
            <path
                fill="url(#s)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 334.137 1270.33)"
            />
            <path
                fill="#92d050"
                d="M1605.026 936.532v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#ffc000"
                d="M1604.559 939.294h184.7v5.2h-184.7v-5.2zM1556.33 914.754h15.9v5.2h-15.9v-5.2zM1556.33 951.24h15.9v5.2h-15.9v-5.2z"
            />
            <path fill="#fff" d="M1841.746 894.53h51.7v15.6h-51.7v-15.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1841.746 894.53)"
            >
                <tspan
                    x={11.8}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G203A"}
                </tspan>
            </text>
            <path fill="#ffc000" d="M1604.559 903.026h184.7v5.2h-184.7v-5.2z" />
            <path
                fill="url(#q)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1572.809 988.135)"
            />
            <path
                fill="url(#r)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1573.098 997.531)"
            />
            <path
                fill="url(#s)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 1285.09 -287.6)"
            />
            <path
                fill="#92d050"
                d="M1572.131 997.151v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#t)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(1581.28 1000.162)"
            />
            <path
                fill="url(#t)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(1582.119 994.6)"
            />
            <path
                fill="url(#q)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1589.123 976.701)"
            />
            <path
                fill="url(#u)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 1597.032 996.978)"
            />
            <path
                fill="#92d050"
                d="M1588.725 995.261c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#92d050"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1588.687 983.772c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#v)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 303.101 1287.539)"
            />
            <path
                fill="url(#r)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 1604.06 975.046)"
            />
            <path
                fill="url(#s)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 314.69 1289.778)"
            />
            <path
                fill="#92d050"
                d="M1605.026 975.426v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#ffc000"
                d="M1604.559 978.188h184.7v5.2h-184.7v-5.2zM1556.33 990.135h15.9v5.2h-15.9v-5.2z"
            />
            <path
                fill="url(#q)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1573.67 1025.726)"
            />
            <path
                fill="url(#r)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1573.959 1035.123)"
            />
            <path
                fill="url(#s)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 1304.316 -269.235)"
            />
            <path
                fill="#92d050"
                d="M1572.992 1034.742v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#t)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(1582.142 1037.754)"
            />
            <path
                fill="url(#t)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(1582.98 1032.192)"
            />
            <path
                fill="url(#q)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1589.984 1014.293)"
            />
            <path
                fill="url(#u)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 1597.893 1034.57)"
            />
            <path
                fill="#92d050"
                d="M1589.586 1032.853c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#92d050"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1589.548 1021.364c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#v)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 284.736 1306.765)"
            />
            <path
                fill="url(#r)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 1604.921 1012.638)"
            />
            <path
                fill="url(#s)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 296.325 1309.004)"
            />
            <path
                fill="#92d050"
                d="M1605.887 1013.018v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#ffc000"
                d="M1605.42 1015.77h183.8v5.2h-183.8v-5.2zM1557.19 1027.729h15.9v5.2h-15.9v-5.2z"
            />
            <path
                fill="#ff0"
                stroke="#7e7e7e"
                d="M1796.981 1013.4h15.8v-5.5l23.8 10.9-23.8 10.9v-5.4h-15.8v-10.9zM1796.981 975.747h15.8v-5.5l23.8 10.9-23.8 10.9v-5.4h-15.8v-10.9zM1797.842 935.215h15.8v-5.5l23.8 10.9-23.8 10.9v-5.4h-15.8v-10.9zM1797.842 897.686h15.8v-5.5l23.8 10.9-23.8 10.9v-5.4h-15.8v-10.9z"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1620.473 744.842h75.8v52.8h-75.8v-52.8z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1623.056 774.249h70.6v19.5h-70.6v-19.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1623.056 774.249)"
            >
                <tspan
                    x={33.8}
                    y={14.2}
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
                d="M1623.28 748.698h70.6v23.6h-70.6v-23.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1623.28 748.698)"
            >
                <tspan
                    x={22.3}
                    y={16.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LT201"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ff0"
                strokeDasharray="5.33334,13.3334"
                strokeWidth={2.667}
                d="m1620.473 771.925-15.49.542"
            />
            <path
                fill="url(#b)"
                d="M0 7.2h57.3V0H0v7.2z"
                transform="translate(1783.794 467.552)"
            />
            <path
                fill="url(#c)"
                d="M0 1.6h57.3V0H0v1.6z"
                transform="translate(1783.794 472.478)"
            />
            <path
                fill="url(#b)"
                d="M0 6.6h57.3V0H0v6.6z"
                transform="translate(1783.794 563.132)"
            />
            <path
                fill="url(#c)"
                d="M0 1.9h57.3V0H0v1.9z"
                transform="translate(1783.794 563.005)"
            />
            <path
                fill="url(#b)"
                d="M5.5 0h57.8c3.1 0 5.6 2.9 5.6 6.4v76.3c0 3.6-2.5 6.5-5.6 6.5H5.5c-3 0-5.5-2.9-5.5-6.5V6.4C0 2.9 2.5 0 5.5 0z"
                transform="translate(1778.025 474.042)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(1776.303 488.912)"
            >
                <tspan
                    x={24.8}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F207"}
                </tspan>
            </text>
            <path fill="#a1a9b3" d="M1273.191 264.172h30.7l19.8 41.8-50.5-41.8z" />
            <path
                fill="url(#w)"
                d="M79.5 0H0l31.9 62.4h15.8L79.5 0z"
                transform="translate(1288.258 264.226)"
            />
            <path
                fill="url(#w)"
                d="M.9 0h16.2c.5 0 .9.5.9 1.1V3c0 .6-.4 1.1-.9 1.1H.9C.4 4.1 0 3.6 0 3V1.1C0 .5.4 0 .9 0z"
                transform="translate(1319.478 319.196)"
            />
            <path
                fill="#a2afbd"
                d="M1264.603 259.954h104.3c.2 0 .3.2.3.4v4.1c0 .2-.1.4-.3.4h-104.3c-.2 0-.3-.2-.3-.4v-4.1c0-.2.1-.4.3-.4z"
            />
            <path
                fill="url(#x)"
                d="M0 0h98.8v54H0V0z"
                transform="translate(1267.8 200.787)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h108.3c.3 0 .5.1.5.2v2.3c0 .1-.2.2-.5.2H.5c-.3 0-.5-.1-.5-.2V.2C0 .1.2 0 .5 0z"
                transform="translate(1262.534 198.515)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h105.1c.3 0 .5.1.5.2v1.9c0 .2-.2.3-.5.3H.5c-.3 0-.5-.1-.5-.3V.2C0 .1.2 0 .5 0z"
                transform="translate(1264.14 254.228)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h105.1c.3 0 .5.1.5.2v1.9c0 .2-.2.3-.5.3H.5c-.3 0-.5-.1-.5-.3V.2C0 .1.2 0 .5 0z"
                transform="translate(1264.14 256.54)"
            />
            <path
                fill="url(#y)"
                d="M.5 0h105.1c.3 0 .5 0 .5.1v.5c0 .1-.2.1-.5.1H.5C.2.7 0 .7 0 .6V.1C0 0 .2 0 .5 0z"
                transform="translate(1264.14 256.216)"
            />
            <path
                fill="url(#y)"
                d="M0 0h98.8v1.1H0V0z"
                transform="translate(1267.8 201.287)"
            />
            <path
                fill="url(#y)"
                d="M0 0h98.8v.7H0V0z"
                transform="translate(1267.8 253.38)"
            />
            <path
                fill="url(#y)"
                d="M0 0h99.1l-1 .6-97 .1L0 0z"
                transform="translate(1267.05 258.806)"
            />
            <path
                fill="url(#z)"
                d="M0 18.5V0h26.6v18.5H0z"
                transform="matrix(0 1 1 0 1296.678 299.316)"
            />
            <path
                fill="url(#z)"
                d="M0 9.9V2.1S.2 1.2 1.7.9c0 0 5.2-.9 11.6-.9 6.3 0 11.6.9 11.6.9 1.7.3 1.7 1.2 1.7 1.2v7.8H0z"
                transform="matrix(0 1 1 0 1286.824 299.307)"
            />
            <path
                fill="url(#A)"
                d="M0 .3V0h26.6v.3H0z"
                transform="matrix(0 1 1 0 1296.51 299.316)"
            />
            <g fill="url(#B)" transform="translate(1296.773 301.12)">
                <path d="M16.802 11.207H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 13.072H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 14.94H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 16.807H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 18.793H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 20.601H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 9.337H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 22.41H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 1.868H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 3.735H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 5.603H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 7.47H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2v-.2c0-.1-.1-.2-.2-.2zM16.802 0H.202c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h16.6c.1 0 .2-.1.2-.2V.2c0-.1-.1-.2-.2-.2z" />
            </g>
            <path
                fill="url(#C)"
                d="M25.1 0s-.7 1.3-3.5 2.3H3.5C.6 1.1 0 0 0 0h25.1z"
                transform="rotate(-90 820.556 -495.382)"
            />
            <path
                fill="url(#D)"
                d="M28 .4v.3H0V.4C0 .2.1 0 .3 0h27.4c.1 0 .3.2.3.4z"
                transform="rotate(-90 820.805 -494.21)"
            />
            <path
                fill="url(#C)"
                d="M28 .2v.2c0 .2-.2.3-.3.3H.3C.1.7 0 .6 0 .4V.2C0 .1.1 0 .3 0h27.4c.1 0 .3.1.3.2z"
                transform="rotate(-90 820.982 -494.387)"
            />
            <path
                fill="url(#E)"
                d="M.3 0v17.8H0V0h.3z"
                transform="translate(1318.004 303.821)"
            />
            <path
                fill="url(#B)"
                d="M.4 0h.1c.2 0 .4.3.4.6V18c0 .3-.2.6-.4.6H.4c-.2 0-.4-.3-.4-.6V.6C0 .3.2 0 .4 0z"
                transform="translate(1318.237 303.321)"
            />
            <path
                fill="url(#F)"
                d="M0 5.7h20.3V0H0v5.7z"
                transform="translate(1307.84 147.863)"
            />
            <path fill="#d7d7d7" d="M1302.315 154.286h30.8v43.2h-30.8v-43.2z" />
            <path
                fill="url(#G)"
                d="M0 0h2.2v40.1H0V0z"
                transform="translate(1301.835 155.922)"
            />
            <path
                fill="url(#G)"
                d="M0 0h2.2v40.1H0V0z"
                transform="translate(1359.675 155.897)"
            />
            <path
                fill="url(#H)"
                d="M0 0h60v2.6H0V0z"
                transform="translate(1301.835 153.32)"
            />
            <path
                fill="url(#H)"
                d="M0 0h60v2.6H0V0z"
                transform="translate(1301.835 195.944)"
            />
            <path
                fill="url(#G)"
                d="M25.9 0H0v40h25.9V0z"
                transform="translate(1333.76 155.993)"
            />
            <path
                fill="url(#G)"
                d="M1.6 0H0v40h1.6V0z"
                transform="translate(1332.259 155.932)"
            />
            <g fill="url(#I)" transform="translate(1304.02 158.595)">
                <path d="M0 0h28.2v.6H0V0zM0 3.55h28.2v.6H0v-.6zM0 6.816h28.2v.6H0v-.6zM0 10.224h28.2v.6H0v-.6zM0 13.632h28.2v.6H0v-.6zM0 17.04h28.2v.6H0v-.6zM0 20.448h28.2v.6H0v-.6zM0 23.856h28.2v.6H0v-.6zM0 27.264h28.2v.6H0v-.6zM0 30.671h28.2v.6H0v-.6zM0 34.08h28.2v.6H0v-.6z" />
            </g>
            <g fill="url(#F)" transform="translate(1332.668 162.798)">
                <path d="M.595 0h1.8c.4 0 .7.3.7.7 0 .4-.3.8-.7.8h-1.8c-.3 0-.6-.4-.6-.8s.3-.7.6-.7zM.595 25.915h1.8c.4 0 .7.3.7.7 0 .4-.3.8-.7.8h-1.8c-.3 0-.6-.4-.6-.8s.3-.7.6-.7z" />
            </g>
            <g fill="url(#F)" transform="translate(1357.8 162.797)">
                <path d="M.595 0h1.8c.4 0 .7.3.7.7 0 .4-.3.8-.7.8h-1.8c-.3 0-.6-.4-.6-.8s.3-.7.6-.7zM.595 25.916h1.8c.4 0 .7.3.7.7 0 .4-.3.8-.7.8h-1.8c-.3 0-.6-.4-.6-.8s.3-.7.6-.7z" />
            </g>
            <g fill="url(#I)" transform="translate(1306.453 155.9)">
                <path d="M23.373 0v40.1h-.5V0h.5zM20.514 0v40.1h-.5V0h.5zM17.655 0v40.1h-.5V0h.5zM14.796 0v40.1h-.5V0h.5zM11.937 0v40.1h-.5V0h.5zM9.077 0v40.1h-.5V0h.5zM6.218 0v40.1h-.5V0h.5zM3.36 0v40.1h-.5V0h.5zM.5 0v40.1H0V0h.5z" />
            </g>
            <g fill="url(#H)" transform="translate(1338.492 171.06)">
                <path d="M0 4.298h1.3v1.1H0v-1.1zM0 0h1.3v1.1H0V0z" />
                <path d="M.291.567h.7v4.3h-.7v-4.3z" />
            </g>
            <g fill="url(#H)" transform="translate(1353.358 171.06)">
                <path d="M0 4.298h1.3v1.1H0v-1.1zM0 0h1.3v1.1H0V0z" />
                <path d="M.291.567h.7v4.3h-.7v-4.3z" />
            </g>
            <path
                fill="url(#e)"
                d="M0 0h31.4v8.4H0V0z"
                transform="rotate(-90 762.53 -361.989)"
            />
            <path
                fill="url(#f)"
                d="M.2 0H19c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(-90 750.014 -355.584)"
            />
            <path
                fill="#b4b5b5"
                d="M1106.24 393.532v-17.4c0-.1.1-.2.2-.2h10c.1 0 .1.1.1.2v17.4c0 .1 0 .2-.1.2h-10c-.1 0-.2-.1-.2-.2z"
            />
            <path fill="#92d050" d="M1106.77 393.177v-16.7h9.3v16.7h-9.3z" />
            <path
                fill="url(#g)"
                d="M0 0h4.5v7.6s0 .5-2.2.5S0 7.6 0 7.6V0z"
                transform="rotate(-90 752.122 -365.032)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1.1c.2 0 .4.2.4.3v11.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 760.395 -362.221)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1.1c.2 0 .4.2.4.3v11.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 748.015 -374.601)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 760.388 -364.14)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 749.19 -375.338)"
            />
            <path
                fill="url(#J)"
                d="M0 0h20.9v2.1H0V0z"
                transform="rotate(-90 752.799 -357.531)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.2v.9H0V0z"
                transform="rotate(-90 748.546 -356.187)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(-90 747.858 -356.045)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(-90 754.579 -359.311)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.7v.7H0V0z"
                transform="rotate(-90 759.244 -355.355)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.9H0V0z"
                transform="matrix(-1 0 0 1 1122.707 404.232)"
            />
            <path
                fill="url(#j)"
                d="M0 0s.7 0 1 .3c.3.3.2.8.2.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 1 1 0 1114.598 403.887)"
            />
            <path
                fill="url(#e)"
                d="M0 0h31.4v8.4H0V0z"
                transform="rotate(-90 789.631 -335.31)"
            />
            <path
                fill="url(#f)"
                d="M.2 0H19c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(-90 777.116 -328.904)"
            />
            <path
                fill="#b4b5b5"
                d="M1106.661 447.313v-17.4c0-.1.1-.2.2-.2h10c.1 0 .1.1.1.2v17.4c0 .1 0 .2-.1.2h-10c-.1 0-.2-.1-.2-.2z"
            />
            <path fill="red" d="M1107.192 446.958v-16.7h9.3v16.7h-9.3z" />
            <path
                fill="url(#g)"
                d="M0 0h4.5v7.6s0 .5-2.2.5S0 7.6 0 7.6V0z"
                transform="rotate(-90 779.223 -338.352)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1.1c.2 0 .4.2.4.3v11.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 787.496 -335.541)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1.1c.2 0 .4.2.4.3v11.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
                transform="rotate(-90 775.116 -347.921)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 787.49 -337.461)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(-90 776.292 -348.658)"
            />
            <path
                fill="url(#i)"
                d="M0 0h20.9v2.1H0V0z"
                transform="rotate(-90 779.9 -330.852)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.2v.9H0V0z"
                transform="rotate(-90 775.647 -329.507)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(-90 774.96 -329.366)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(-90 781.68 -332.631)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.7v.7H0V0z"
                transform="rotate(-90 786.345 -328.675)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.9H0V0z"
                transform="matrix(-1 0 0 1 1123.129 458.013)"
            />
            <path
                fill="url(#j)"
                d="M0 0s.7 0 1 .3c.3.3.2.8.2.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 1 1 0 1115.02 457.668)"
            />
            <path
                fill="url(#e)"
                d="M0 0h31.4v8.4H0V0z"
                transform="rotate(90 391.802 812.142)"
            />
            <path
                fill="url(#f)"
                d="M.2 0H19c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 398.208 824.658)"
            />
            <path
                fill="#b4b5b5"
                d="M1222.224 427.349v17.4c0 .1-.1.2-.2.2h-10c-.1 0-.1-.1-.1-.2v-17.4c0-.1 0-.2.1-.2h10c.1 0 .2.1.2.2z"
            />
            <path fill="red" d="M1221.693 427.704v16.7h-9.3v-16.7h9.3z" />
            <path
                fill="url(#g)"
                d="M0 0h4.5v7.6s0 .5-2.2.5S0 7.6 0 7.6V0z"
                transform="rotate(90 388.76 822.55)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1.1c.2 0 .4.2.4.3v11.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 391.57 814.277)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1.1c.2 0 .4.2.4.3v11.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 379.19 826.657)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 389.65 814.284)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 378.453 825.481)"
            />
            <path
                fill="url(#i)"
                d="M0 0h20.9v2.1H0V0z"
                transform="rotate(90 396.26 821.873)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.2v.9H0V0z"
                transform="rotate(90 397.604 826.126)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 397.746 826.814)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 394.48 820.093)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.7v.7H0V0z"
                transform="rotate(90 398.436 815.428)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.9H0V0z"
                transform="matrix(1 0 0 -1 1205.756 416.649)"
            />
            <path
                fill="url(#j)"
                d="M0 0s.7 0 1 .3c.3.3.2.8.2.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 1213.865 416.994)"
            />
            <path
                fill="url(#e)"
                d="M0 0h31.4v8.4H0V0z"
                transform="rotate(90 418.481 785.041)"
            />
            <path
                fill="url(#f)"
                d="M.2 0H19c.1 0 .2.1.2.2v11.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 424.887 797.557)"
            />
            <path
                fill="#b4b5b5"
                d="M1221.802 373.569v17.4c0 .1-.1.2-.2.2h-10c-.1 0-.1-.1-.1-.2v-17.4c0-.1 0-.2.1-.2h10c.1 0 .2.1.2.2z"
            />
            <path fill="red" d="M1221.271 373.924v16.7h-9.3v-16.7h9.3z" />
            <path
                fill="url(#g)"
                d="M0 0h4.5v7.6s0 .5-2.2.5S0 7.6 0 7.6V0z"
                transform="rotate(90 415.439 795.45)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1.1c.2 0 .4.2.4.3v11.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 418.25 787.176)"
            />
            <path
                fill="url(#e)"
                d="M.4 0h1.1c.2 0 .4.2.4.3v11.6c0 .2-.2.3-.4.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .2.2 0 .4 0z"
                transform="rotate(90 405.87 799.556)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 416.33 787.183)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v8.4H0V0z"
                transform="rotate(90 405.132 798.38)"
            />
            <path
                fill="url(#i)"
                d="M0 0h20.9v2.1H0V0z"
                transform="rotate(90 422.939 794.772)"
            />
            <path
                fill="url(#g)"
                d="M0 0h2.2v.9H0V0z"
                transform="rotate(90 424.283 799.025)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.1v.9H0V0z"
                transform="rotate(90 424.425 799.713)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.8v2.1H0V0z"
                transform="rotate(90 421.16 792.992)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.7v.7H0V0z"
                transform="rotate(90 425.116 788.327)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7v.9H0V0z"
                transform="matrix(1 0 0 -1 1205.335 362.868)"
            />
            <path
                fill="url(#j)"
                d="M0 0s.7 0 1 .3c.3.3.2.8.2.8H.4S.4.8 0 .7V0z"
                transform="matrix(0 -1 -1 0 1213.443 363.214)"
            />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M1197.728 347.881h132.6M1328.15 349.61v-22.9"
            />
            <path fill="#fff" d="M1224.419 374.247h63.7v16.2h-63.7v-16.2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1224.419 374.247)"
            >
                <tspan
                    x={15.4}
                    y={12.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV211B"}
                </tspan>
            </text>
            <path fill="#fff" d="M1225.71 428.116h62.4v19.6h-62.4v-19.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1225.71 428.116)"
            >
                <tspan
                    x={14.7}
                    y={14.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV212B"}
                </tspan>
            </text>
            <path fill="#fff" d="M1044.473 376.332h58.5v20.3h-58.5v-20.3z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1044.473 376.332)"
            >
                <tspan
                    x={21.3}
                    y={14.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV211A"}
                </tspan>
            </text>
            <path fill="#fff" d="M1043.827 428.116h58.5v20.7h-58.5v-20.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1043.827 428.116)"
            >
                <tspan
                    x={21.3}
                    y={14.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV211B"}
                </tspan>
            </text>
            <path fill="#fff" d="M1270.913 225.488h64.4v20.8h-64.4v-20.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1270.913 225.488)"
            >
                <tspan
                    x={18.7}
                    y={14.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F202B"}
                </tspan>
            </text>
            <path fill="#fff" d="M1230.019 301.454h53.7v24.5h-53.7v-24.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1230.019 301.454)"
            >
                <tspan
                    x={12.8}
                    y={16.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G213B"}
                </tspan>
            </text>
            <path
                fill="#c2c2c2"
                stroke="#000"
                d="M1345.067 234.914c0-5.8 4.2-10.5 9.5-10.5 5.2 0 9.4 4.7 9.4 10.5 0 5.9-4.2 10.6-9.4 10.6-5.3 0-9.5-4.7-9.5-10.6zM1345.204 292.478c0-5.8 4.2-10.5 9.5-10.5 5.2 0 9.4 4.7 9.4 10.5 0 5.9-4.2 10.6-9.4 10.6-5.3 0-9.5-4.7-9.5-10.6z"
            />
            <path fill="#fff" d="M1370.01 222.784h72.2v27.5h-72.2v-27.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1370.01 222.784)"
            >
                <tspan
                    x={15.6}
                    y={18.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LSAH 209"}
                </tspan>
            </text>
            <path fill="#fff" d="M1366.74 279.683h58.1v24.2h-58.1v-24.2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1366.74 279.683)"
            >
                <tspan
                    x={12.1}
                    y={16.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LAL 210"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1484.17 210.623)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1484.46 220.02)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 852.015 -632.037)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1483.493 219.64v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(1492.642 232.033)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(1493.48 226.471)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1500.484 218.997)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 1508.393 228.849)"
            />
            <path
                fill="#fff"
                fillOpacity={0.27}
                d="M1500.086 227.132c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#9da6b0"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1500.049 215.643c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 642.846 859.155)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 1515.421 217.342)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 649.223 866.607)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1516.388 217.722v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#fff" d="M1478.23 138.159h41.7v27.5h-41.7v-27.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1478.23 138.159)"
            >
                <tspan
                    x={9.8}
                    y={18.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G215"}
                </tspan>
            </text>
            <g stroke="#92d050">
                <path fill="none" strokeWidth={4} d="M1485.298 214.226h-110" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1366.498 214.226 10.4 6c-1-1.8-1.6-3.8-1.6-6s.6-4.2 1.6-6l-10.4 6"
                />
            </g>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M1518.015 223.608h58.5"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M1596.284 228.98h-6.5v5.5l-9.8-10.9 9.8-10.9v5.4h6.5v10.9z"
            />
            <path fill="#fff" d="M1605.995 200.255h70.4v40.9h-70.4v-40.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1605.995 200.255)"
            >
                <tspan
                    x={16.2}
                    y={17.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Activated "}
                </tspan>
                <tspan
                    x={20.2}
                    y={32.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Carbon"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M165.205 241.773h60v21.2h-60v-21.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(165.205 241.773)"
            >
                <tspan
                    x={16}
                    y={15.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"23 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M165.463 215.884h59.7v22h-59.7v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(165.463 215.884)"
            >
                <tspan
                    x={15.9}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"12 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M164.228 296.178h60v26.9h-60v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(164.228 296.178)"
            >
                <tspan
                    x={18.5}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"8 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M164.486 266.741h59.7v26.9h-59.7v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(164.486 266.741)"
            >
                <tspan
                    x={15.9}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"12 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M227.261 241.708h60.4v21.3h-60.4v-21.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(227.261 241.708)"
            >
                <tspan
                    x={16.2}
                    y={15.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"51 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M227.518 215.819h60.2v21.9h-60.2v-21.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(227.518 215.819)"
            >
                <tspan
                    x={17.6}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"12sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M226.284 296.114h61.4v26.9h-61.4v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(226.284 296.114)"
            >
                <tspan
                    x={19.2}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"2 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M226.542 266.675h61.2v26.9h-61.2v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(226.542 266.675)"
            >
                <tspan
                    x={16.6}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"12 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M53.132 241.773h108.9v22h-108.9v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(53.132 241.773)"
            >
                <tspan
                    x={22.9}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV211A  Close"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M53.483 215.884h108.9v22h-108.9v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(53.483 215.884)"
            >
                <tspan
                    x={23.9}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV211A  Open"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M52.156 296.178h108.9v26.9h-108.9v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(52.156 296.178)"
            >
                <tspan
                    x={22.9}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV212A  Close"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M52.506 266.741h108.9v26.9h-108.9v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(52.506 266.741)"
            >
                <tspan
                    x={23.9}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV212A  Open"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M165.113 186.105h59.1v22h-59.1v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(165.113 186.105)"
            >
                <tspan
                    x={20.5}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SET"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M227.168 186.105h59.6v21.9h-59.6v-21.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(227.168 186.105)"
            >
                <tspan
                    x={21.8}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Acc"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M53.132 186.105h108.9v22h-108.9v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(53.132 186.105)"
            >
                <tspan
                    x={39.4}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEPS"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M53.483 131.189h86.7v22.5h-86.7v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(53.483 131.189)"
            >
                <tspan
                    x={30.4}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"AUTO"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M53.483 157.208h86.7v22.5h-86.7v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(53.483 157.208)"
            >
                <tspan
                    x={23.9}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"MANUAL"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#000"
                d="M148.507 134.736h14.4v17.7h-14.4v-17.7z"
            />
            <path
                fill="#fff"
                stroke="#000"
                d="M148.507 159.573h14.4v17.7h-14.4v-17.7z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M174.965 131.189h79.5v22.5h-79.5v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(174.965 131.189)"
            >
                <tspan
                    x={24.3}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RESET"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M174.965 157.208h79.5v22.5h-79.5v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(174.965 157.208)"
            >
                <tspan
                    x={27.3}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STOP"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#000"
                d="M262.174 134.736h14.4v17.7h-14.4v-17.7z"
            />
            <path
                fill="#92d050"
                stroke="#000"
                d="M262.174 159.573h14.4v17.7h-14.4v-17.7z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M52.506 336.392h108.9v22.5h-108.9v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(52.506 336.392)"
            >
                <tspan
                    x={4.4}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"BE Density"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M52.506 362.411h108.9v22.5h-108.9v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(52.506 362.411)"
            >
                <tspan
                    x={4.4}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"BE Percentage"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M163.74 336.392h124.9v22.5h-124.9v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(163.74 336.392)"
            >
                <tspan
                    x={35}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"-------- kg/ m3"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M163.74 362.411h124.9v22.5h-124.9v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(163.74 362.411)"
            >
                <tspan
                    x={50.5}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['BE Percentage']} %`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M52.506 388.432h108.9v57.4h-108.9v-57.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(52.506 388.432)"
            >
                <tspan
                    x={4.4}
                    y={16}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Totalizer"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M163.741 388.432h125.9v57.4h-125.9v-57.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(163.741 388.432)"
            >
                <tspan
                    x={45}
                    y={33.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['BE Totalizer']} kg`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M75.826 417.409h67.4v22.5h-67.4v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(75.826 417.409)"
            >
                <tspan
                    x={18.2}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RESET"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#3498db"
                d="M47.894 332.763h243.7v118.3h-243.7v-118.3z"
            />
            <path
                fill="#527294"
                stroke="#527294"
                d="M47.498 93.341h244.1v32.5h-244.1v-32.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(47.498 93.341)"
            >
                <tspan
                    x={52.6}
                    y={20.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Bleaching Earth Dosage Timer"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#3498db"
                d="M47.94 211.91h244.1v118.3H47.94v-118.3z"
            />
            <path
                fill="none"
                stroke="#3498db"
                strokeWidth={2}
                d="M44.475 85.654h251v370.1h-251v-370.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#ff0",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "36pt",
                    fontWeight: 700,
                }}
                transform="translate(8.905 17.254)"
            >
                <tspan
                    x={662.3}
                    y={62.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                        textDecoration: "underline",
                    }}
                >
                    {"L1000 - BLEACHING SECTION"}
                </tspan>
            </text>
            <path fill="#fff" d="M1841.746 933.932h51.7v15.6h-51.7v-15.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1841.746 933.932)"
            >
                <tspan
                    x={11.8}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G203B"}
                </tspan>
            </text>
            <path fill="#fff" d="M1841.746 975.058h51.7v15.6h-51.7v-15.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1841.746 975.058)"
            >
                <tspan
                    x={11.3}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G203C"}
                </tspan>
            </text>
            <path fill="#fff" d="M1841.746 1010.557h51.7v15.6h-51.7v-15.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1841.746 1010.557)"
            >
                <tspan
                    x={11.8}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G203D"}
                </tspan>
            </text>
            <path
                fill="url(#K)"
                d="M.2 0h13.9c.1 0 .2.1.2.2v12.6c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 289.09 1030.83)"
            />
            <path
                fill="url(#L)"
                d="M0 0h1v14H0V0z"
                transform="rotate(90 271.179 1019.594)"
            />
            <path
                fill="url(#M)"
                d="M0 0h4v.9H0V0z"
                transform="rotate(90 280.045 1026.936)"
            />
            <path
                fill="url(#L)"
                d="M0 0h3v15.4H0V0z"
                transform="rotate(90 279.351 1026.77)"
            />
            <path
                fill="url(#M)"
                d="M.2 0h14c.1 0 .3.1.3.2v.3c0 .1-.2.2-.3.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 289.295 1030.909)"
            />
            <path
                fill="url(#N)"
                d="M.2 0h10c.2 0 .3.1.3.2v4.3c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 286.045 1029.719)"
            />
            <path fill="#3e3938" d="M1315.334 744.201v9.4h-3.8v-9.4h3.8z" />
            <path
                fill="url(#O)"
                d="M.1 0h14.3V1.5H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="rotate(90 283.353 1025.045)"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1293.298 761.742h85.2v53.2h-85.2v-53.2z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1295.88 789.368h79.2v21.6h-79.2v-21.6z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "red",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1295.88 789.368)"
            >
                <tspan
                    x={15.6}
                    y={15.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['TIR203']} \xB0C`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1296.105 764.87h79.2v22.5h-79.2v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1296.105 764.87)"
            >
                <tspan
                    x={26.1}
                    y={15.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TT203"}
                </tspan>
            </text>
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M1151.235 831.588h44.7" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m1202.135 831.588-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
                />
            </g>
            <g stroke="red">
                <path fill="none" strokeWidth={2} d="M1151.097 860.777h44.7" />
                <path
                    fill="red"
                    strokeLinecap="round"
                    d="m1201.997 860.777-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
                />
            </g>
            <path
                fill="#c2c2c2"
                stroke="#000"
                d="M1271.773 715.732c0-5.2 3.7-9.4 8.2-9.4 4.5 0 8.2 4.2 8.2 9.4s-3.7 9.5-8.2 9.5c-4.5 0-8.2-4.3-8.2-9.5zM1271.773 851.837c0-5.2 3.7-9.4 8.2-9.4 4.5 0 8.2 4.2 8.2 9.4s-3.7 9.5-8.2 9.5c-4.5 0-8.2-4.3-8.2-9.5z"
            />
            <path
                fill="none"
                stroke="#00b0f0"
                strokeWidth={4}
                d="M1284.688 692.94h179.1M1462.912 692.94v-149.1"
            />
            <g stroke="#00b0f0">
                <path fill="none" strokeWidth={4} d="M1462.051 543.866h303.1" />
                <path
                    fill="#00b0f0"
                    strokeLinecap="round"
                    d="m1765.151 537.866 12 6-12 6v-12"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M1199.45 469.631h56.8"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M1255.414 469.631v203" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1261.414 672.631-6 12-6-12h12"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M1128.85 518.846h85.2"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M1213.226 518.846v153.8" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1219.226 672.646-6 12-6-12h12"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M891.114 344.334v-20.5"
            />
            <path fill="#a1a9b3" d="M838.315 265.208h29l18.7 39.5-47.7-39.5z" />
            <path
                fill="url(#w)"
                d="M75.1 0H0l30.1 58.9h15L75.1 0z"
                transform="translate(852.551 265.26)"
            />
            <path
                fill="url(#w)"
                d="M.9 0h15.3c.5 0 .9.5.9 1v1.8c0 .6-.4 1-.9 1H.9c-.5 0-.9-.4-.9-1V1c0-.5.4-1 .9-1z"
                transform="translate(882.049 317.197)"
            />
            <path
                fill="#a2afbd"
                d="M830.217 261.223h98.5c.2 0 .3.2.3.4v3.8c0 .2-.1.4-.3.4h-98.5c-.2 0-.3-.2-.3-.4v-3.8c0-.2.1-.4.3-.4z"
            />
            <path
                fill="url(#x)"
                d="M0 0h93.3v51H0V0z"
                transform="translate(833.221 205.32)"
            />
            <path
                fill="url(#x)"
                d="M.4 0h102.4c.3 0 .5.1.5.2v2.2c0 .1-.2.2-.5.2H.4c-.2 0-.4-.1-.4-.2V.2C0 .1.2 0 .4 0z"
                transform="translate(828.245 203.173)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h99.3c.3 0 .5.1.5.2V2c0 .1-.2.2-.5.2H.5C.2 2.2 0 2.1 0 2V.2C0 .1.2 0 .5 0z"
                transform="translate(829.764 255.813)"
            />
            <path
                fill="url(#x)"
                d="M.5 0h99.3c.3 0 .5.1.5.2V2c0 .1-.2.2-.5.2H.5C.2 2.2 0 2.1 0 2V.2C0 .1.2 0 .5 0z"
                transform="translate(829.764 257.997)"
            />
            <path
                fill="url(#y)"
                d="M.5 0h99.3c.3 0 .5 0 .5.1v.5s-.2.1-.5.1H.5C.2.7 0 .6 0 .6V.1C0 0 .2 0 .5 0z"
                transform="translate(829.764 257.69)"
            />
            <path
                fill="url(#y)"
                d="M0 0h93.3v1H0V0z"
                transform="translate(833.221 205.791)"
            />
            <path
                fill="url(#y)"
                d="M0 0h93.3v.7H0V0z"
                transform="translate(833.221 255.012)"
            />
            <path
                fill="url(#y)"
                d="M0 0h93.6l-.9.6L1.1.7 0 0z"
                transform="translate(832.512 260.138)"
            />
            <path
                fill="url(#z)"
                d="M0 17.5V0h25.1v17.5H0z"
                transform="matrix(0 1 1 0 860.507 298.414)"
            />
            <path
                fill="url(#z)"
                d="M0 9.3V2S.2 1.1 1.6.9c0 0 4.9-.9 11-.9 6 0 10.9.9 10.9.9 1.6.3 1.6 1.1 1.6 1.1v7.3H0z"
                transform="matrix(0 1 1 0 851.195 298.405)"
            />
            <path
                fill="url(#A)"
                d="M0 .2V0h25.1v.2H0z"
                transform="matrix(0 1 1 0 860.347 298.414)"
            />
            <g fill="url(#B)" transform="translate(860.596 300.12)">
                <path d="M15.964 10.589H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 12.351H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 14.116H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 15.88H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 17.756H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 19.465H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 8.822H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 21.174H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 1.765H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 3.53H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 5.294H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 7.058H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1v-.2c0-.1-.1-.2-.1-.2zM15.964 0H.164c-.1 0-.2.1-.2.2v.2c0 .1.1.1.2.1h15.8s.1 0 .1-.1V.2c0-.1-.1-.2-.1-.2z" />
            </g>
            <path
                fill="url(#C)"
                d="M23.7 0s-.7 1.2-3.3 2.2H3.3C.6 1.1 0 0 0 0h23.7z"
                transform="rotate(-90 600.775 -277.929)"
            />
            <path
                fill="url(#D)"
                d="M26.4.4v.3H0V.4C0 .2.1 0 .3 0h25.9c.1 0 .2.2.2.4z"
                transform="rotate(-90 601.01 -276.822)"
            />
            <path
                fill="url(#C)"
                d="M26.4.2v.2c0 .1-.1.2-.2.2H.3C.1.6 0 .5 0 .4V.2C0 .1.1 0 .3 0h25.9c.1 0 .2.1.2.2z"
                transform="rotate(-90 601.177 -276.989)"
            />
            <path
                fill="url(#E)"
                d="M.3 0v16.8H0V0h.3z"
                transform="translate(880.656 302.67)"
            />
            <path
                fill="url(#B)"
                d="M.4 0h.1c.2 0 .4.3.4.6V17c0 .3-.2.5-.4.5H.4c-.2 0-.4-.2-.4-.5V.6C0 .3.2 0 .4 0z"
                transform="translate(880.876 302.198)"
            />
            <path
                fill="url(#P)"
                d="M0 5.4h19.2V0H0v5.4z"
                transform="translate(871.052 155.314)"
            />
            <path fill="#c2c2c2" d="M865.832 161.383h29.1v40.8h-29.1v-40.8z" />
            <path
                fill="url(#Q)"
                d="M0 0h2.1v37.9H0V0z"
                transform="translate(865.38 162.929)"
            />
            <path
                fill="url(#Q)"
                d="M0 0h2.1v37.9H0V0z"
                transform="translate(920.028 162.905)"
            />
            <path
                fill="url(#R)"
                d="M0 0h56.7v2.5H0V0z"
                transform="translate(865.38 160.47)"
            />
            <path
                fill="url(#R)"
                d="M0 0h56.7v2.5H0V0z"
                transform="translate(865.38 200.743)"
            />
            <path
                fill="url(#Q)"
                d="M24.5 0H0v37.8h24.5V0z"
                transform="translate(895.542 162.996)"
            />
            <path
                fill="url(#Q)"
                d="M1.5 0H0v37.8h1.5V0z"
                transform="translate(894.125 162.938)"
            />
            <g fill="url(#S)" transform="translate(867.443 165.454)">
                <path d="M0 0h26.7v.6H0V0zM0 3.354h26.7v.6H0v-.6zM0 6.44h26.7v.6H0v-.6zM0 9.66h26.7v.6H0v-.6zM0 12.88h26.7v.6H0v-.6zM0 16.1h26.7v.6H0v-.6zM0 19.32h26.7v.6H0v-.6zM0 22.54h26.7v.6H0v-.6zM0 25.76h26.7v.6H0v-.6zM0 28.98h26.7v.6H0v-.6zM0 32.2h26.7v.6H0v-.6z" />
            </g>
            <g fill="url(#P)" transform="translate(894.511 169.425)">
                <path d="M.595 0h1.7c.3 0 .6.3.6.7 0 .4-.3.7-.6.7h-1.7c-.3 0-.6-.3-.6-.7 0-.4.3-.7.6-.7zM.595 24.486h1.7c.3 0 .6.3.6.7 0 .4-.3.7-.6.7h-1.7c-.3 0-.6-.3-.6-.7 0-.4.3-.7.6-.7z" />
            </g>
            <g fill="url(#P)" transform="translate(918.256 169.425)">
                <path d="M.595 0h1.7c.3 0 .6.3.6.7 0 .4-.3.7-.6.7h-1.7c-.3 0-.6-.3-.6-.7 0-.4.3-.7.6-.7zM.595 24.486h1.7c.3 0 .6.3.6.7 0 .4-.3.7-.6.7h-1.7c-.3 0-.6-.3-.6-.7 0-.4.3-.7.6-.7z" />
            </g>
            <g fill="url(#S)" transform="translate(869.742 162.908)">
                <path d="M22.084 0v37.9h-.5V0h.5zM19.382 0v37.9h-.5V0h.5zM16.68 0v37.9h-.5V0h.5zM13.98 0v37.9h-.5V0h.5zM11.278 0v37.9h-.5V0h.5zM8.577 0v37.9h-.5V0h.5zM5.875 0v37.9h-.5V0h.5zM3.174 0v37.9h-.5V0h.5zM.473 0v37.9h-.5V0h.5z" />
            </g>
            <g fill="url(#R)" transform="translate(900.014 177.232)">
                <path d="M0 4.06h1.2v1.1H0v-1.1zM0 0h1.2v1.1H0V0z" />
                <path d="M.275.536h.7v4.1h-.7v-4.1z" />
            </g>
            <g fill="url(#R)" transform="translate(914.06 177.232)">
                <path d="M0 4.06h1.2v1.1H0v-1.1zM0 0h1.2v1.1H0V0z" />
                <path d="M.275.536h.7v4.1h-.7v-4.1z" />
            </g>
            <path fill="#fff" d="M711.975 234.992h49.8v22.8h-49.8v-22.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(711.975 234.992)"
            >
                <tspan
                    x={11.4}
                    y={15.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F209A"}
                </tspan>
            </text>
            <path fill="#fff" d="M835.627 225.488h49.8v22.8h-49.8v-22.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(835.627 225.488)"
            >
                <tspan
                    x={11.4}
                    y={15.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F202A"}
                </tspan>
            </text>
            <path fill="#fff" d="M831.256 327.114h53.1v31.4h-53.1v-31.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(831.256 327.114)"
            >
                <tspan
                    x={21}
                    y={20.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G213A"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 721.62 213.731)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 721.91 223.127)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 472.293 -249.208)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M720.943 222.747v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(730.092 225.758)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(730.93 220.197)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 737.934 202.297)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 745.843 222.574)"
            />
            <path
                fill="#fff"
                fillOpacity={0.27}
                d="M737.536 220.857c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#9da6b0"
                stroke="#595959"
                strokeWidth={0.25}
                d="M737.499 209.369c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 264.709 474.743)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 752.871 200.642)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 276.298 476.982)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M753.838 201.023v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#fff" d="M678.022 110.336h123v46.9h-123v-46.9z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(678.022 110.336)"
            >
                <tspan
                    x={47.5}
                    y={20.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G209A"}
                </tspan>
                <tspan
                    x={24}
                    y={35.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"ROOTS BLOWER"}
                </tspan>
            </text>
            <g stroke="#92d050">
                <path fill="none" strokeWidth={4} d="M756.348 205.866h60.1" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m825.248 205.866-10.4-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.4-6"
                />
            </g>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M690.913 216.291h28.4M691.774 214.206v69.8"
            />
            <path
                fill="#92d050"
                stroke="#92d050"
                d="M687.966 309.978v-7.9h-4.5l9-11.8 9 11.8h-4.5v7.9h-9z"
            />
            <path fill="#fff" d="M653.585 316.455h78.7v31.4h-78.7v-31.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(653.585 316.455)"
            >
                <tspan
                    x={33.3}
                    y={20.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"BE"}
                </tspan>
            </text>
            <path
                fill="url(#T)"
                d="M0 22.4V0h22v22.4H0z"
                transform="matrix(-1 0 0 1 1510.912 181.79)"
            />
            <path
                fill="url(#T)"
                d="M0 11.9V2.5s.2-1 1.4-1.4C1.4 1.1 5.7 0 11 0c5.2 0 9.6 1.1 9.6 1.1C22 1.5 22 2.5 22 2.5v9.4H0z"
                transform="matrix(-1 0 0 1 1510.92 169.857)"
            />
            <path
                fill="url(#U)"
                d="M0 .3V0h22v.3H0z"
                transform="matrix(-1 0 0 1 1510.912 181.585)"
            />
            <g fill="url(#V)" transform="rotate(90 663.759 845.662)">
                <path d="M20.385 9.256H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 10.797H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 12.339H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 13.881H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 15.521H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 17.015H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 7.712H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 18.508H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 1.543H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 3.085H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 4.627H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 6.17H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 0H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2V.1s-.1-.1-.2-.1z" />
            </g>
            <path
                fill="url(#W)"
                d="M20.8 0s-.7 1.5-3 2.8H2.9C.5 1.4 0 0 0 0h20.8z"
                transform="translate(1489.555 205.108)"
            />
            <path
                fill="url(#X)"
                d="M23.1.5v.4H0V.5C0 .2.1 0 .2 0h22.7c.1 0 .2.2.2.5z"
                transform="translate(1488.382 203.99)"
            />
            <path
                fill="url(#W)"
                d="M23.1.3v.2c0 .2-.1.3-.2.3H.2C.1.8 0 .7 0 .5V.3C0 .1.1 0 .2 0h22.7c.1 0 .2.1.2.3z"
                transform="translate(1488.382 204.419)"
            />
            <path
                fill="url(#Y)"
                d="M.3 0v14.7H0V0h.3z"
                transform="rotate(90 649.79 857.4)"
            />
            <path
                fill="url(#V)"
                d="M.5 0h.1c.3 0 .5.2.5.5v14.3c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="rotate(90 649.856 857.748)"
            />
            <path fill="#fff" d="M1473.068 235.075h54.4v27.5h-54.4v-27.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1473.068 235.075)"
            >
                <tspan
                    x={13.7}
                    y={18.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F203B"}
                </tspan>
            </text>
            <path
                fill="#c2c2c2"
                stroke="#000"
                d="M903.38 233.652c0-5.8 4.2-10.5 9.5-10.5 5.2 0 9.4 4.7 9.4 10.5 0 5.9-4.2 10.6-9.4 10.6-5.3 0-9.5-4.7-9.5-10.6zM903.518 291.216c0-5.8 4.2-10.5 9.5-10.5 5.2 0 9.4 4.7 9.4 10.5 0 5.9-4.2 10.6-9.4 10.6-5.3 0-9.5-4.7-9.5-10.6z"
            />
            <path fill="#fff" d="M929.185 221.523h72.2v27.5h-72.2v-27.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(929.185 221.523)"
            >
                <tspan
                    x={15.6}
                    y={18.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LSAH 207"}
                </tspan>
            </text>
            <path fill="#fff" d="M924.193 278.421h58.1v24.2h-58.1v-24.2z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(924.193 278.421)"
            >
                <tspan
                    x={12.1}
                    y={16.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LAL 208"}
                </tspan>
            </text>
            <path
                fill="url(#T)"
                d="M0 22.4V0h22v22.4H0z"
                transform="matrix(-1 0 0 1 750.522 174.75)"
            />
            <path
                fill="url(#T)"
                d="M0 11.9V2.5s.2-1 1.4-1.4C1.4 1.1 5.7 0 11 0c5.2 0 9.6 1.1 9.6 1.1C22 1.5 22 2.5 22 2.5v9.4H0z"
                transform="matrix(-1 0 0 1 750.53 162.818)"
            />
            <path
                fill="url(#U)"
                d="M0 .3V0h22v.3H0z"
                transform="matrix(-1 0 0 1 750.522 174.546)"
            />
            <g fill="url(#V)" transform="rotate(90 287.084 461.948)">
                <path d="M20.385 9.256H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 10.797H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 12.339H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 13.881H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 15.521H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 17.015H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 7.712H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 18.508H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 1.543H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 3.085H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 4.627H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 6.17H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2v-.2s-.1-.1-.2-.1zM20.385 0H.185c-.1 0-.2.1-.2.1v.2c0 .1.1.2.2.2h20.2c.1 0 .2-.1.2-.2V.1s-.1-.1-.2-.1z" />
            </g>
            <path
                fill="url(#W)"
                d="M20.8 0s-.7 1.5-3 2.8H2.9C.5 1.4 0 0 0 0h20.8z"
                transform="translate(729.165 198.07)"
            />
            <path
                fill="url(#X)"
                d="M23.1.5v.4H0V.5C0 .2.1 0 .2 0h22.7c.1 0 .2.2.2.5z"
                transform="translate(727.992 196.952)"
            />
            <path
                fill="url(#W)"
                d="M23.1.3v.2c0 .2-.1.3-.2.3H.2C.1.8 0 .7 0 .5V.3C0 .1.1 0 .2 0h22.7c.1 0 .2.1.2.3z"
                transform="translate(727.992 197.38)"
            />
            <path
                fill="url(#Y)"
                d="M.3 0v14.7H0V0h.3z"
                transform="rotate(90 273.115 473.686)"
            />
            <path
                fill="url(#V)"
                d="M.5 0h.1c.3 0 .5.2.5.5v14.3c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
                transform="rotate(90 273.18 474.034)"
            />
            <path
                fill="#9b9b9b"
                stroke="#000"
                strokeWidth={0.32}
                d="m890.431 142.765 22.1-11v22.1l-22.1-11.1-22.1 11.1v-22.1l22.1 11v-13.3m-6.6-8.8v13.3h13.3v-13.3h-13.3zm-37.6 22.1h22.1m44.2 0h22.2M1330.404 135.705l22.1-11v22.1l-22.1-11.1-22.1 11.1v-22.1l22.1 11v-13.3m-6.6-8.8v13.3h13.3v-13.3h-13.3zm-37.6 22.1h22.1m44.2 0h22.2"
            />
            <path fill="#fff" d="M1379.564 121.96h70.4v27.5h-70.4v-27.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1379.564 121.96)"
            >
                <tspan
                    x={18.7}
                    y={18.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SV202B"}
                </tspan>
            </text>
            <path fill="#fff" d="M934.52 129.02h70.4v27.5h-70.4v-27.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(934.52 129.02)"
            >
                <tspan
                    x={18.7}
                    y={18.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SV202A"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1204.711 171.957)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 1205 181.353)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 692.952 -511.64)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1204.034 180.973v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(1213.183 193.367)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(1214.021 187.805)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 1221.025 180.33)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 1228.934 190.182)"
            />
            <path
                fill="#fff"
                fillOpacity={0.27}
                d="M1220.627 188.466c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#9da6b0"
                stroke="#595959"
                strokeWidth={0.25}
                d="M1220.59 176.977c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 522.45 700.093)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 1235.962 178.675)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 528.826 707.544)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M1236.929 179.056v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#fff" d="M1193.609 199.536h54.4v27.5h-54.4v-27.5z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1193.609 199.536)"
            >
                <tspan
                    x={13.2}
                    y={18.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G209B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M1237.334 184.213h64.6M1204.616 175.873h-25.8"
            />
            <g stroke="#92d050">
                <path fill="none" strokeWidth={4} d="M1180.509 175.873v-26.6" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1174.509 149.273 6-12 6 12h-12"
                />
            </g>
            <path
                fill="none"
                stroke="#92d050"
                strokeWidth={4}
                d="M922.213 188.383h97.3"
            />
            <g stroke="#92d050">
                <path fill="none" strokeWidth={4} d="M1018.643 188.383v-36" />
                <path
                    fill="#92d050"
                    strokeLinecap="round"
                    d="m1012.643 152.383 6-12 6 12h-12"
                />
            </g>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M736.67 264.174h92.5v54.2h-92.5v-54.2z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M739.822 291.956h86.2v20.8h-86.2v-20.8z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(739.822 291.956)"
            >
                <tspan
                    x={41.6}
                    y={14.9}
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
                d="M740.1 268.495h86.2v20.8h-86.2v-20.8z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(740.1 268.495)"
            >
                <tspan
                    x={24.1}
                    y={14.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"WIR202A"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M423.252 242.121h60v21.2h-60v-21.2z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(423.252 242.121)"
            >
                <tspan
                    x={16}
                    y={15.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"23 sec"}
                </tspan>
            </text>
            <path fill="#fff" stroke="#afafaf" d="M423.51 216.232h59.7v22h-59.7v-22z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(423.51 216.232)"
            >
                <tspan
                    x={15.9}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"12 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M422.274 296.527h60v26.9h-60v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(422.274 296.527)"
            >
                <tspan
                    x={18.5}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"8 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M422.533 267.09h59.7v26.9h-59.7v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(422.533 267.09)"
            >
                <tspan
                    x={15.9}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"12 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M485.307 242.056h60.4v21.3h-60.4v-21.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(485.307 242.056)"
            >
                <tspan
                    x={16.2}
                    y={15.1}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"51 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M485.565 216.167h60.2v21.9h-60.2v-21.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(485.565 216.167)"
            >
                <tspan
                    x={17.6}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"12sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M484.33 296.462h61.4v26.9h-61.4v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(484.33 296.462)"
            >
                <tspan
                    x={19.2}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"2 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M484.588 267.024h61.2v26.9h-61.2v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(484.588 267.024)"
            >
                <tspan
                    x={16.6}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"12 sec"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M423.159 186.453h59.1v22h-59.1v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(423.159 186.453)"
            >
                <tspan
                    x={20.5}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"SET"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M485.215 186.453h59.6v21.9h-59.6v-21.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(485.215 186.453)"
            >
                <tspan
                    x={21.8}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Acc"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M311.178 186.453h108.9v22h-108.9v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(311.178 186.453)"
            >
                <tspan
                    x={39.4}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STEPS"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M311.529 131.537h86.7v22.5h-86.7v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(311.529 131.537)"
            >
                <tspan
                    x={30.4}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"AUTO"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M311.529 157.556h86.7v22.5h-86.7v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(311.529 157.556)"
            >
                <tspan
                    x={23.9}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"MANUAL"}
                </tspan>
            </text>
            <path
                fill="#92d050"
                stroke="#000"
                d="M406.553 135.085h14.4v17.7h-14.4v-17.7z"
            />
            <path
                fill="#fff"
                stroke="#000"
                d="M406.553 159.922h14.4v17.7h-14.4v-17.7z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M433.011 131.537h79.5v22.5h-79.5v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(433.011 131.537)"
            >
                <tspan
                    x={24.3}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RESET"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M433.011 157.556h79.5v22.5h-79.5v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(433.011 157.556)"
            >
                <tspan
                    x={27.3}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"STOP"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#000"
                d="M520.22 135.085h14.4v17.7h-14.4v-17.7z"
            />
            <path
                fill="#92d050"
                stroke="#000"
                d="M520.22 159.922h14.4v17.7h-14.4v-17.7z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M421.787 336.74h124.9v22.5h-124.9v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(421.787 336.74)"
            >
                <tspan
                    x={35}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"------- kg/ m3"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M421.787 362.76h124.9v22.5h-124.9v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(421.787 362.76)"
            >
                <tspan
                    x={50.5}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['AC Percentage']} %`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M310.552 388.78h108.9v57.4h-108.9v-57.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(310.552 388.78)"
            >
                <tspan
                    x={4.4}
                    y={16}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Totalizer"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M421.787 388.78h125.9v57.4h-125.9v-57.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(421.787 388.78)"
            >
                <tspan
                    x={45}
                    y={33.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['AC Totalizer']} kg`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M333.872 417.757h67.4v22.5h-67.4v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(333.872 417.757)"
            >
                <tspan
                    x={18.2}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RESET"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#3498db"
                d="M305.94 333.111h243.7v118.3h-243.7v-118.3zM305.986 212.258h244.1v118.3h-244.1v-118.3z"
            />
            <path
                fill="none"
                stroke="#3498db"
                strokeWidth={2}
                d="M302.52 86.002h251v370.1h-251v-370.1z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M310.552 362.76h108.9v22.5h-108.9v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(310.552 362.76)"
            >
                <tspan
                    x={4.4}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"AC Percentage"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M310.552 336.74h108.9v22.5h-108.9v-22.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(310.552 336.74)"
            >
                <tspan
                    x={4.4}
                    y={15.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {" AC Density"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M310.202 296.527h108.9v26.9h-108.9v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(310.202 296.527)"
            >
                <tspan
                    x={22.9}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV212B  Close"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M310.552 267.09h108.9v26.9h-108.9v-26.9z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(310.552 267.09)"
            >
                <tspan
                    x={23.9}
                    y={18}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV212B  Open"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M311.178 242.121h108.9v22h-108.9v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(311.178 242.121)"
            >
                <tspan
                    x={22.9}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV211B  Close"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M311.53 216.232h108.9v22h-108.9v-22z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(311.53 216.232)"
            >
                <tspan
                    x={23.9}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"KV211B  Open"}
                </tspan>
            </text>
            <path
                fill="#527294"
                stroke="#527294"
                d="M305.545 93.69h244.1v32.5h-244.1v-32.5z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#fff",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(305.545 93.69)"
            >
                <tspan
                    x={49.6}
                    y={20.8}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Activated Carbon Dosage Timer"}
                </tspan>
            </text>
            <path fill="#fff" d="M530.06 714.15h70.6v22.7h-70.6v-22.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(530.06 714.15)"
            >
                <tspan
                    x={22.8}
                    y={15.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Cond."}
                </tspan>
            </text>
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M464.515 640.448h27.8" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m492.315 634.448 12 6-12 6v-12"
                />
            </g>
            <path fill="none" stroke="#ff0" strokeWidth={4} d="M521.571 752.233h19.8" />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M533.49 781.046h10.7" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m533.49 787.046-12-6 12-6v12"
                />
            </g>
            <path
                fill="red"
                stroke="#7e7e7e"
                d="M574.457 757.68h-12.2v5.5l-18.3-10.9 18.3-10.9v5.4h12.2v10.9z"
            />
            <path fill="#fff" d="M579.884 741.38h76v24.4h-76v-24.4z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(579.884 741.38)"
            >
                <tspan
                    x={4}
                    y={16.7}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"From E302"}
                </tspan>
            </text>
            <path
                fill="url(#Z)"
                d="M4.2 0H0v11.1h4.2V0z"
                transform="translate(916.31 649.245)"
            />
            <path
                fill="url(#Z)"
                d="M5.2 0H0v21.7h5.2V0z"
                transform="translate(911.12 643.932)"
            />
            <path
                fill="url(#Z)"
                d="M1 0H0v13.7h1V0z"
                transform="translate(920.062 647.926)"
            />
            <path
                fill="url(#Z)"
                d="M0 0h88.6v24.4H0V0z"
                transform="translate(923.835 642.608)"
            />
            <path
                fill="url(#Z)"
                d="M.7 0h.6v24.5l-.6-.1c-.4 0-.7-.3-.7-.8V.8C0 .3.3 0 .7 0z"
                transform="translate(921.076 642.555)"
            />
            <path
                fill="url(#aa)"
                d="M0 0h2v24.5l-2-.1V0z"
                transform="translate(922.101 642.553)"
            />
            <path
                fill="url(#Z)"
                d="M.7 0c.4 0 .7.4.7.8v24.4c0 .5-.3.8-.7.8-.4 0-.7-.3-.7-.8V.8C0 .4.3 0 .7 0z"
                transform="translate(922.394 641.763)"
            />
            <path
                fill="url(#ab)"
                d="M0 15.5V0h26.4v15.5H0z"
                transform="matrix(0 1 1 0 892.242 641.43)"
            />
            <path
                fill="url(#ab)"
                d="M0 8.3V1.8S.2 1 1.7.8c0 0 5.2-.8 11.5-.8s11.6.8 11.6.8c1.6.2 1.6 1 1.6 1v6.5H0z"
                transform="matrix(0 1 1 0 883.98 641.42)"
            />
            <path
                fill="url(#ac)"
                d="M0 .2V0h26.4v.2H0z"
                transform="matrix(0 1 1 0 892.1 641.43)"
            />
            <g fill="url(#Z)" transform="translate(892.32 643.223)">
                <path d="M14.153 11.137h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 12.99h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 14.847h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 16.703h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 18.676h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 20.473h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 9.28h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 22.27h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 1.856h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 3.712h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 5.568h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 7.423h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 0h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2V.2c0-.1-.1-.2-.1-.2z" />
            </g>
            <path
                fill="url(#ad)"
                d="M25 0s-.8 1.1-3.5 1.9h-18C.6.9 0 0 0 0h25z"
                transform="rotate(-90 787.758 -120.63)"
            />
            <path
                fill="url(#ae)"
                d="M27.8.3v.3H0V.3C0 .2.1 0 .3 0h27.2c.2 0 .3.2.3.3z"
                transform="rotate(-90 788.077 -119.538)"
            />
            <path
                fill="url(#ad)"
                d="M27.8.2v.2c0 .1-.1.2-.3.2H.3C.1.6 0 .5 0 .4V.2C0 .1.1 0 .3 0h27.2c.2 0 .3.1.3.2z"
                transform="rotate(-90 788.225 -119.686)"
            />
            <path
                fill="url(#aa)"
                d="M.2 0v17.7H0V0h.2z"
                transform="translate(910.12 645.907)"
            />
            <path
                fill="url(#Z)"
                d="M.4 0c.2 0 .4.3.4.6v17.2c0 .4-.2.7-.4.7s-.4-.3-.4-.7V.6C0 .3.2 0 .4 0z"
                transform="translate(910.316 645.41)"
            />
            <path
                fill="url(#Z)"
                d="M.7 0h.6v24.5l-.6-.1c-.4 0-.7-.3-.7-.8V.8C0 .3.3 0 .7 0z"
                transform="matrix(-1 0 0 1 1015.271 642.555)"
            />
            <path
                fill="url(#aa)"
                d="M0 0h2v24.5l-2-.1V0z"
                transform="translate(1012.25 642.553)"
            />
            <path
                fill="url(#Z)"
                d="M.7 0c.4 0 .7.4.7.8v24.4c0 .5-.3.8-.7.8-.4 0-.7-.3-.7-.8V.8C0 .4.3 0 .7 0z"
                transform="matrix(-1 0 0 1 1013.953 641.763)"
            />
            <path
                fill="url(#af)"
                d="M0 0h78.5v19H0V0z"
                transform="translate(924.097 645.292)"
            />
            <path
                fill="url(#af)"
                d="M0 0h78.4v3.2H0V0z"
                transform="translate(924.101 653.187)"
            />
            <path
                fill="url(#af)"
                d="M0 0h2.1v15.4H0V0z"
                transform="translate(924.097 647.07)"
            />
            <path
                fill="url(#ag)"
                d="M0 4.9h4.9S4.2 0 2.5 0 0 4.6 0 4.9z"
                transform="matrix(1 0 0 -1 971.351 661.322)"
            />
            <g fill="url(#ag)" transform="translate(931.908 656.32)">
                <path d="M-.002-.045h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM9.96-.045h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM19.796-.045h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM29.621-.045h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM39.418-.03h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM49.406.103h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM59.242.103h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9z" />
            </g>
            <g fill="url(#ah)" transform="translate(927.152 647.634)">
                <path d="M0 5.608h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM9.962 5.608h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM19.797 5.608h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM29.62 5.608h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM39.55 5.94h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM49.385 5.94h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM59.268 5.88h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM69.104 5.88h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6z" />
            </g>
            <path fill="#fff" d="M885.82 672.202h56.4v26h-56.4v-26z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(885.82 672.202)"
            >
                <tspan
                    x={14.2}
                    y={17.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G207A"}
                </tspan>
            </text>
            <path
                fill="url(#B)"
                d="M4.2 0H0v11.1h4.2V0z"
                transform="translate(868.448 776.159)"
            />
            <path
                fill="url(#B)"
                d="M5.2 0H0v21.7h5.2V0z"
                transform="translate(863.259 770.845)"
            />
            <path
                fill="url(#B)"
                d="M1 0H0v13.7h1V0z"
                transform="translate(872.2 774.84)"
            />
            <path
                fill="url(#B)"
                d="M0 0h88.6v24.4H0V0z"
                transform="translate(875.973 769.522)"
            />
            <path
                fill="url(#B)"
                d="M.7 0h.6v24.5l-.6-.1c-.4 0-.7-.3-.7-.8V.8C0 .3.3 0 .7 0z"
                transform="translate(873.214 769.469)"
            />
            <path
                fill="url(#E)"
                d="M0 0h2v24.5l-2-.1V0z"
                transform="translate(874.24 769.466)"
            />
            <path
                fill="url(#B)"
                d="M.7 0c.4 0 .7.4.7.8v24.4c0 .5-.3.8-.7.8-.4 0-.7-.3-.7-.8V.8C0 .4.3 0 .7 0z"
                transform="translate(874.532 768.677)"
            />
            <path
                fill="url(#z)"
                d="M0 15.5V0h26.4v15.5H0z"
                transform="matrix(0 1 1 0 844.38 768.343)"
            />
            <path
                fill="url(#z)"
                d="M0 8.3V1.8S.2 1 1.7.8c0 0 5.2-.8 11.5-.8s11.6.8 11.6.8c1.6.2 1.6 1 1.6 1v6.5H0z"
                transform="matrix(0 1 1 0 836.118 768.334)"
            />
            <path
                fill="url(#A)"
                d="M0 .2V0h26.4v.2H0z"
                transform="matrix(0 1 1 0 844.238 768.343)"
            />
            <g fill="url(#B)" transform="translate(844.459 770.137)">
                <path d="M14.153 11.137h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 12.99h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 14.847h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 16.703h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 18.676h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 20.473h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 9.28h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 22.27h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 1.856h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 3.712h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 5.568h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 7.423h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2v-.2c0-.1-.1-.2-.1-.2zM14.153 0h-14c-.1 0-.2.1-.2.2v.2c0 .1.1.2.2.2h14s.1-.1.1-.2V.2c0-.1-.1-.2-.1-.2z" />
            </g>
            <path
                fill="url(#C)"
                d="M25 0s-.8 1.1-3.5 1.9h-18C.6.9 0 0 0 0h25z"
                transform="rotate(-90 827.283 -33.243)"
            />
            <path
                fill="url(#D)"
                d="M27.8.3v.3H0V.3C0 .2.1 0 .3 0h27.2c.2 0 .3.2.3.3z"
                transform="rotate(-90 827.602 -32.15)"
            />
            <path
                fill="url(#C)"
                d="M27.8.2v.2c0 .1-.1.2-.3.2H.3C.1.6 0 .5 0 .4V.2C0 .1.1 0 .3 0h27.2c.2 0 .3.1.3.2z"
                transform="rotate(-90 827.75 -32.298)"
            />
            <path
                fill="url(#E)"
                d="M.2 0v17.7H0V0h.2z"
                transform="translate(862.258 772.82)"
            />
            <path
                fill="url(#B)"
                d="M.4 0c.2 0 .4.3.4.6v17.2c0 .4-.2.7-.4.7s-.4-.3-.4-.7V.6C0 .3.2 0 .4 0z"
                transform="translate(862.454 772.324)"
            />
            <path
                fill="url(#B)"
                d="M.7 0h.6v24.5l-.6-.1c-.4 0-.7-.3-.7-.8V.8C0 .3.3 0 .7 0z"
                transform="matrix(-1 0 0 1 967.409 769.469)"
            />
            <path
                fill="url(#E)"
                d="M0 0h2v24.5l-2-.1V0z"
                transform="translate(964.388 769.466)"
            />
            <path
                fill="url(#B)"
                d="M.7 0c.4 0 .7.4.7.8v24.4c0 .5-.3.8-.7.8-.4 0-.7-.3-.7-.8V.8C0 .4.3 0 .7 0z"
                transform="matrix(-1 0 0 1 966.091 768.677)"
            />
            <path
                fill="url(#ai)"
                d="M0 0h78.5v19H0V0z"
                transform="translate(876.235 772.205)"
            />
            <path
                fill="url(#ai)"
                d="M0 0h78.4v3.2H0V0z"
                transform="translate(876.239 780.1)"
            />
            <path
                fill="url(#ai)"
                d="M0 0h2.1v15.4H0V0z"
                transform="translate(876.234 773.984)"
            />
            <path
                fill="url(#aj)"
                d="M0 4.9h4.9S4.2 0 2.5 0 0 4.6 0 4.9z"
                transform="matrix(1 0 0 -1 923.49 788.235)"
            />
            <g fill="url(#aj)" transform="translate(884.045 783.233)">
                <path d="M-.002-.045h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM9.96-.045h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM19.796-.045h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM29.621-.045h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM39.418-.03h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM49.406.103h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9zM59.242.103h4.9s-.7 4.9-2.4 4.9-2.5-4.6-2.5-4.9z" />
            </g>
            <g fill="url(#ak)" transform="translate(879.29 774.547)">
                <path d="M0 5.608h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM9.962 5.608h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM19.797 5.608h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM29.62 5.608h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM39.55 5.94h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM49.385 5.94h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM59.268 5.88h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6zM69.104 5.88h4.9s-.7-5.6-2.4-5.6-2.5 5.4-2.5 5.6z" />
            </g>
            <path fill="#fff" d="M821.051 800.335h56.4v26h-56.4v-26z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(821.051 800.335)"
            >
                <tspan
                    x={14.2}
                    y={17.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G207B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M929.1 611.042v37.1M880.024 612.669v157.4M1001.423 641.858v-50M999.701 591.82h142.1M927.378 770.082v-63.6"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M925.657 706.491h264.4" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m1190.057 700.491 12 6-12 6v-12"
                />
            </g>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M1140.042 591.82v114.7M539.074 612.668h390.9"
            />
            <path
                fill="url(#al)"
                d="M0 0h10.6v9.5H0V0z"
                transform="translate(631.275 607.085)"
            />
            <path
                fill="url(#al)"
                d="M0 0h10.6v9.5H0V0z"
                transform="translate(654.941 607.085)"
            />
            <path
                fill="url(#al)"
                d="M1.4 0h10.5s1.4.1 1.5 10.6c0 10.5-1.5 10.5-1.5 10.5H1.4S0 21.1 0 10.6 1.4 0 1.4 0z"
                transform="translate(641.694 601.316)"
            />
            <path
                fill="url(#am)"
                d="M0 0h4v8s-.1.5-2 .5C.2 8.5 0 8 0 8V0z"
                transform="translate(646.521 594.617)"
            />
            <path
                fill="url(#al)"
                d="M.5 0H2c.3 0 .5.3.5.6v14c0 .3-.2.6-.5.6H.5c-.3 0-.5-.3-.5-.6V.6C0 .3.2 0 .5 0z"
                transform="translate(636.543 604.36)"
            />
            <path
                fill="url(#an)"
                d="M1.1 2c0-.8.6-1.5 1.3-1.5.7 0 1.2.7 1.2 1.5 0 .9-.5 1.5-1.2 1.5S1.1 2.9 1.1 2zM.6 0S0 0 0 .8v2.5s0 .7.6.7c.7 0 .8 1 .8 1v2.1h1.9V5s.1-1 .8-1c.7 0 .6-.7.6-.7V.8c0-.7-.6-.8-.6-.8H.6z"
                transform="translate(635.439 605.89)"
            />
            <path
                fill="url(#ao)"
                d="M1.6 0v3.5c0 .2-.1.3-.3.3H.2c-.1 0-.2-.1-.2-.3V0h1.6z"
                transform="translate(637.01 612.957)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(636.27 612.996)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(636.27 614.944)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(638.566 612.996)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(638.566 614.944)"
            />
            <path
                fill="url(#al)"
                d="M.5 0H2c.3 0 .5.3.5.6v14c0 .3-.2.6-.5.6H.5c-.3 0-.5-.3-.5-.6V.6C0 .3.2 0 .5 0z"
                transform="translate(657.843 604.36)"
            />
            <path
                fill="url(#an)"
                d="M1.1 2c0-.8.6-1.5 1.3-1.5.7 0 1.2.7 1.2 1.5 0 .9-.5 1.5-1.2 1.5S1.1 2.9 1.1 2zM.6 0S0 0 0 .8v2.5s0 .7.6.7c.7 0 .8 1 .8 1v2.1h1.9V5s.1-1 .8-1c.7 0 .6-.7.6-.7V.8c0-.7-.6-.8-.6-.8H.6z"
                transform="translate(656.739 605.89)"
            />
            <path
                fill="url(#ao)"
                d="M1.6 0v3.5c0 .2-.1.3-.3.3H.2c-.1 0-.2-.1-.2-.3V0h1.6z"
                transform="translate(658.31 612.957)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(657.57 612.996)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(657.57 614.944)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(659.865 612.996)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.4c.1 0 .2.1.2.2v1.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(659.865 614.944)"
            />
            <path
                fill="url(#al)"
                d="M.5 0h.3c.3 0 .5.3.5.6v11.1c0 .3-.2.6-.5.6H.5c-.3 0-.5-.3-.5-.6V.6C0 .3.2 0 .5 0z"
                transform="translate(665.377 605.752)"
            />
            <path
                fill="url(#al)"
                d="M.5 0h.3c.3 0 .5.3.5.6v11.1c0 .3-.2.6-.5.6H.5c-.3 0-.5-.3-.5-.6V.6C0 .3.2 0 .5 0z"
                transform="translate(630.019 605.815)"
            />
            <path
                fill="url(#am)"
                d="M0 0h7.2v1.5H0V0z"
                transform="translate(644.92 593.232)"
            />
            <path
                fill="url(#ap)"
                d="M0 0h14.8v7.8H0V0z"
                transform="translate(641.14 585.536)"
            />
            <path
                fill="url(#aq)"
                d="M0 1.9h14.8V0H0v1.9z"
                transform="translate(641.14 583.794)"
            />
            <path
                fill="#757263"
                d="M649.414 589.416c0-1.2.8-2.2 1.9-2.2 1 0 1.8 1 1.8 2.2 0 1.3-.8 2.3-1.8 2.3-1.1 0-1.9-1-1.9-2.3z"
            />
            <path
                fill="#edebdf"
                d="M649.555 589.485c0-1.2.8-2.1 1.7-2.1 1 0 1.7.9 1.7 2.1 0 1.1-.7 2-1.7 2-.9 0-1.7-.9-1.7-2z"
            />
            <path
                fill="#635d4f"
                d="M649.827 589.412c0-.9.6-1.7 1.4-1.7.8 0 1.5.8 1.5 1.7 0 1-.7 1.8-1.5 1.8s-1.4-.8-1.4-1.8z"
            />
            <path
                stroke="#000"
                d="M650.073 589.406c0-.8.5-1.4 1.2-1.4s1.2.6 1.2 1.4c0 .8-.5 1.5-1.2 1.5s-1.2-.7-1.2-1.5z"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M650.345 588.536a1.324 1.324 0 0 1 1.832-.16c.536.45-.603.407-1.053.943-.515.613-.146 1.575-.683 1.125-.536-.45-.61-1.295-.096-1.908z"
            />
            <path
                fill="#757263"
                d="M644.15 589.417c0-1.2.8-2.2 1.9-2.2 1 0 1.8 1 1.8 2.2 0 1.3-.8 2.3-1.8 2.3-1.1 0-1.9-1-1.9-2.3z"
            />
            <path
                fill="#edebdf"
                d="M644.29 589.486c0-1.2.8-2.1 1.7-2.1 1 0 1.7.9 1.7 2.1 0 1.1-.7 2-1.7 2-.9 0-1.7-.9-1.7-2z"
            />
            <path
                fill="#635d4f"
                d="M644.562 589.413c0-.9.6-1.7 1.4-1.7.8 0 1.5.8 1.5 1.7 0 1-.7 1.8-1.5 1.8s-1.4-.8-1.4-1.8z"
            />
            <path
                stroke="#000"
                d="M644.808 589.407c0-.8.5-1.4 1.2-1.4s1.2.6 1.2 1.4c0 .8-.5 1.5-1.2 1.5s-1.2-.7-1.2-1.5z"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M645.08 588.537a1.324 1.324 0 0 1 1.832-.16c.536.45-.603.407-1.053.944-.514.613-.146 1.574-.683 1.124-.536-.45-.61-1.295-.096-1.908z"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M506.616 519.326h89.1v48.8h-89.1v-48.8z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M509.653 544.343h83v18.8h-83v-18.8z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "BLACK",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(509.653 544.343)"
            >
                <tspan
                    x={17.5}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['TIRC202']} \xB0C`}
                </tspan>
            </text>
            <path fill="#fff" stroke="#afafaf" d="M509.92 523.216h83v18.8h-83v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(509.92 523.216)"
            >
                <tspan
                    x={24}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TIC202"}
                </tspan>
            </text>
            <path
                fill="url(#K)"
                d="M.2 0h11.4c.2 0 .2.1.2.2v15.3c0 .1 0 .3-.2.3H.2c-.1 0-.2-.2-.2-.3V.2C0 .1.1 0 .2 0z"
                transform="translate(553.869 575.544)"
            />
            <path
                fill="url(#L)"
                d="M0 0h.8v16.9H0V0z"
                transform="translate(559.382 610.834)"
            />
            <path
                fill="url(#M)"
                d="M0 0h3.3v1H0V0z"
                transform="translate(558.123 591.21)"
            />
            <path
                fill="url(#L)"
                d="M0 0h2.5v18.7H0V0z"
                transform="translate(558.559 592.25)"
            />
            <path
                fill="url(#M)"
                d="M.2 0h11.5c.1 0 .2.1.2.2v.4c0 .2-.1.3-.2.3H.2C.1.9 0 .8 0 .6V.2C0 .1.1 0 .2 0z"
                transform="translate(553.764 575.199)"
            />
            <path
                fill="url(#N)"
                d="M.2 0h8.3c.1 0 .2.1.2.2v5.3c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(555.465 580.575)"
            />
            <path fill="#3e3938" d="M555.901 581.095h7.8v4.6h-7.8v-4.6z" />
            <path
                fill="url(#O)"
                d="M.1 0h11.8V1.8H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="translate(553.828 589.493)"
            />
            <path
                fill="url(#e)"
                d="M0 0h25.9v10.2H0V0z"
                transform="translate(747.785 605.553)"
            />
            <path
                fill="url(#f)"
                d="M.2 0h15.5c.1 0 .2.1.2.2v13.7c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="translate(752.832 582.644)"
            />
            <path
                fill="#b4b5b5"
                d="M753.609 583.42h14.3c.1 0 .2.1.2.2v12.1c0 .1-.1.2-.2.2h-14.3c-.1 0-.2-.1-.2-.2v-12.1c0-.1.1-.2.2-.2z"
            />
            <path fill="red" d="M753.867 584.063h13.8v11.2h-13.8v-11.2z" />
            <path
                fill="url(#g)"
                d="M0 0h3.7v9.2s0 .6-1.8.6S0 9.2 0 9.2V0z"
                transform="translate(758.894 596.635)"
            />
            <path
                fill="url(#e)"
                d="M.3 0h.9c.2 0 .4.2.4.4v14c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(749.74 603.249)"
            />
            <path
                fill="url(#e)"
                d="M.3 0h.9c.2 0 .4.2.4.4v14c0 .2-.2.4-.4.4H.3c-.1 0-.3-.2-.3-.4V.4C0 .2.2 0 .3 0z"
                transform="translate(770.19 603.249)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v10.2H0V0z"
                transform="translate(751.331 605.565)"
            />
            <path
                fill="url(#h)"
                d="M0 0h.4v10.2H0V0z"
                transform="translate(769.827 605.565)"
            />
            <path
                fill="url(#i)"
                d="M0 0h17.2v2.6H0V0z"
                transform="translate(752.14 588.374)"
            />
            <path
                fill="url(#g)"
                d="M0 0h1.8v1H0V0z"
                transform="translate(754.543 581.596)"
            />
            <path
                fill="url(#g)"
                d="M0 0h.9v1H0V0z"
                transform="translate(754.993 580.593)"
            />
            <path
                fill="url(#e)"
                d="M0 0h.7v2.6H0V0z"
                transform="translate(752.14 592.684)"
            />
            <path
                fill="url(#e)"
                d="M0 0h7.2v.9H0V0z"
                transform="translate(745.02 593.542)"
            />
            <path
                fill="url(#e)"
                d="M0 0h8.5v.7H0V0z"
                transform="matrix(0 -1 -1 0 744.736 603.36)"
            />
            <path
                fill="url(#j)"
                d="M0 0s.5 0 .8.4c.3.3.2.9.2.9H.3S.3 1 0 .9V0z"
                transform="matrix(-1 0 0 1 745.022 593.542)"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M737.089 519.325h81.1v47.5h-81.1v-47.5z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M739.854 543.694h75.6v18.3h-75.6v-18.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(739.854 543.694)"
            >
                <tspan
                    x={36.3}
                    y={13.6}
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
                d="M740.098 523.114h75.6v18.3h-75.6v-18.3z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(740.098 523.114)"
            >
                <tspan
                    x={24.3}
                    y={13.6}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TV202"}
                </tspan>
            </text>
            <path
                fill="url(#b)"
                d="M0 7.2h57.3V0H0v7.2z"
                transform="translate(652.121 897.355)"
            />
            <path
                fill="url(#c)"
                d="M0 1.6h57.3V0H0v1.6z"
                transform="translate(652.121 902.281)"
            />
            <path
                fill="url(#b)"
                d="M0 6.6h57.3V0H0v6.6z"
                transform="translate(652.121 992.935)"
            />
            <path
                fill="url(#c)"
                d="M0 1.9h57.3V0H0v1.9z"
                transform="translate(652.121 992.808)"
            />
            <path
                fill="url(#b)"
                d="M5.5 0h57.8c3.1 0 5.6 2.9 5.6 6.4v76.3c0 3.6-2.5 6.5-5.6 6.5H5.5c-3 0-5.5-2.9-5.5-6.5V6.4C0 2.9 2.5 0 5.5 0z"
                transform="translate(646.352 903.846)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(644.63 933.739)"
            >
                <tspan
                    x={21.8}
                    y={13.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FV202"}
                </tspan>
            </text>
            <path
                fill="url(#ar)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 731.71 941.02)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 732 950.416)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 840.982 109.391)"
            />
            <path
                fill="#c2c2c2"
                d="M731.033 950.035v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#au)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(740.182 953.047)"
            />
            <path
                fill="url(#au)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(741.02 947.485)"
            />
            <path
                fill="url(#ar)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 748.024 929.586)"
            />
            <path
                fill="url(#av)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 755.933 949.862)"
            />
            <path
                fill="#c2c2c2"
                d="M747.626 948.146c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#c2c2c2"
                stroke="#595959"
                strokeWidth={0.25}
                d="M747.589 936.657c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#aw)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 -93.89 843.432)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 762.961 927.93)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 -82.302 845.671)"
            />
            <path
                fill="#c2c2c2"
                d="M763.928 928.31v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M715.23 943.02h15.9v5.2h-15.9v-5.2z" />
            <path
                fill="url(#ar)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 732.571 978.61)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 732.86 988.007)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 860.209 127.756)"
            />
            <path
                fill="#c2c2c2"
                d="M731.894 987.627v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#au)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(741.043 990.638)"
            />
            <path
                fill="url(#au)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(741.881 985.076)"
            />
            <path
                fill="url(#ar)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 748.885 967.177)"
            />
            <path
                fill="url(#av)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 756.794 987.454)"
            />
            <path
                fill="#c2c2c2"
                d="M748.487 985.737c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#c2c2c2"
                stroke="#595959"
                strokeWidth={0.25}
                d="M748.45 974.248c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#aw)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 -112.256 862.658)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 763.822 965.522)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 -100.667 864.897)"
            />
            <path
                fill="#c2c2c2"
                d="M764.789 965.902v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M716.092 980.613h15.9v5.2h-15.9v-5.2z" />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M765.513 932.707h32.7M765.513 972.321h32.7M798.23 972.321v-359.7"
            />
            <path
                fill="url(#al)"
                d="M0 0h12.8v7.9H0V0z"
                transform="rotate(-90 799.438 5.218)"
            />
            <path
                fill="url(#al)"
                d="M0 0h12.8v7.9H0V0z"
                transform="rotate(-90 785.11 -9.11)"
            />
            <path
                fill="url(#al)"
                d="M1.7 0h12.7s1.7.1 1.8 8.7c0 8.7-1.8 8.7-1.8 8.7H1.7S0 17.4 0 8.7C0 .1 1.7 0 1.7 0z"
                transform="rotate(-90 790.748 1.292)"
            />
            <path
                fill="url(#am)"
                d="M0 0h4.9v6.6s-.2.5-2.4.5C.3 7.1 0 6.6 0 6.6V0z"
                transform="rotate(-90 785.059 1.137)"
            />
            <path
                fill="url(#al)"
                d="M.6 0h1.9c.3 0 .6.2.6.5V12c0 .3-.3.5-.6.5H.6c-.3 0-.6-.2-.6-.5V.5C0 .2.3 0 .6 0z"
                transform="rotate(-90 795.122 3.154)"
            />
            <path
                fill="url(#an)"
                d="M1.3 1.7C1.3 1 2 .4 2.9.4c.8 0 1.5.6 1.5 1.3 0 .7-.7 1.2-1.5 1.2-.9 0-1.6-.5-1.6-1.2zM.8 0S0 0 0 .6v2.1s.1.6.8.6c.7 0 1 .8.9.8v1.8H4V4.1s.1-.8.9-.8c.9 0 .8-.6.8-.6V.6C5.7.1 5 0 5 0H.8z"
                transform="rotate(-90 796.423 3.19)"
            />
            <path
                fill="url(#ao)"
                d="M1.9 0v2.9c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3V0h1.9z"
                transform="rotate(-90 798.39 -.678)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.5c.1 0 .2.1.2.2v1c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 798.854 -.247)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.5c.1 0 .2.1.2.2v1c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 799.659 -1.052)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.5c.1 0 .2.1.2.2v1c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 797.465 -1.637)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.5c.1 0 .2.1.2.2v1c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 798.27 -2.441)"
            />
            <path
                fill="url(#al)"
                d="M.6 0h1.9c.3 0 .6.2.6.5V12c0 .3-.3.5-.6.5H.6c-.3 0-.6-.2-.6-.5V.5C0 .2.3 0 .6 0z"
                transform="rotate(-90 782.228 -9.74)"
            />
            <path
                fill="url(#an)"
                d="M1.3 1.7C1.3 1 2 .4 2.9.4c.8 0 1.5.6 1.5 1.3 0 .7-.7 1.2-1.5 1.2-.9 0-1.6-.5-1.6-1.2zM.8 0S0 0 0 .6v2.1s.1.6.8.6c.7 0 1 .8.9.8v1.8H4V4.1s.1-.8.9-.8c.9 0 .8-.6.8-.6V.6C5.7.1 5 0 5 0H.8z"
                transform="rotate(-90 783.528 -9.704)"
            />
            <path
                fill="url(#ao)"
                d="M1.9 0v2.9c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3V0h1.9z"
                transform="rotate(-90 785.496 -13.573)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.5c.1 0 .2.1.2.2v1c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 785.96 -13.142)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.5c.1 0 .2.1.2.2v1c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 786.764 -13.946)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.5c.1 0 .2.1.2.2v1c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 784.57 -14.531)"
            />
            <path
                fill="url(#al)"
                d="M.2 0h.5c.1 0 .2.1.2.2v1c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1v-1C0 .1.1 0 .2 0z"
                transform="rotate(-90 785.374 -15.336)"
            />
            <path
                fill="url(#al)"
                d="M.6 0H1c.4 0 .6.2.6.5v9.1c0 .3-.2.5-.6.5H.6c-.3 0-.6-.2-.6-.5V.5C0 .2.3 0 .6 0z"
                transform="rotate(-90 778.242 -14.877)"
            />
            <path
                fill="url(#al)"
                d="M.6 0H1c.4 0 .6.2.6.5v9.1c0 .3-.2.5-.6.5H.6c-.3 0-.6-.2-.6-.5V.5C0 .2.3 0 .6 0z"
                transform="rotate(-90 799.673 6.503)"
            />
            <path
                fill="url(#am)"
                d="M0 0h8.7v1.2H0V0z"
                transform="rotate(-90 785.457 2.678)"
            />
            <path
                fill="url(#ap)"
                d="M0 0h17.9v6.5H0V0z"
                transform="rotate(-90 784.567 8.145)"
            />
            <path
                fill="url(#aq)"
                d="M0 1.6h17.9V0H0v1.6z"
                transform="rotate(-90 783.847 8.864)"
            />
            <path
                fill="#757263"
                d="M779.61 782.692c-1 0-1.8-1-1.8-2.2 0-1.3.8-2.3 1.8-2.3 1.1 0 1.9 1 1.9 2.3 0 1.2-.8 2.2-1.9 2.2z"
            />
            <path
                fill="#edebdf"
                d="M779.65 782.522c-.9 0-1.7-.9-1.7-2.1 0-1.1.8-2.1 1.7-2.1.9 0 1.7 1 1.7 2.1 0 1.2-.8 2.1-1.7 2.1z"
            />
            <path
                fill="#635d4f"
                d="M779.62 782.192c-.8 0-1.4-.8-1.4-1.7 0-1 .6-1.8 1.4-1.8.8 0 1.5.8 1.5 1.8 0 .9-.7 1.7-1.5 1.7z"
            />
            <path
                stroke="#000"
                d="M779.662 781.895c-.7 0-1.2-.6-1.2-1.5 0-.8.5-1.4 1.2-1.4.6 0 1.2.6 1.2 1.4 0 .9-.6 1.5-1.2 1.5z"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M778.821 781.492a1.324 1.324 0 0 1-.16-1.831c.514-.613.408.603.944 1.053.536.45 1.562.005 1.048.618-.45.536-1.295.61-1.832.16z"
            />
            <path
                fill="#757263"
                d="M779.61 789.067c-1 0-1.8-1-1.8-2.2 0-1.3.8-2.3 1.8-2.3 1.1 0 1.9 1 1.9 2.3 0 1.2-.8 2.2-1.9 2.2z"
            />
            <path
                fill="#edebdf"
                d="M779.65 788.897c-.9 0-1.7-.9-1.7-2.1 0-1.1.8-2.1 1.7-2.1.9 0 1.7 1 1.7 2.1 0 1.2-.8 2.1-1.7 2.1z"
            />
            <path
                fill="#635d4f"
                d="M779.62 788.567c-.8 0-1.4-.8-1.4-1.7 0-1 .6-1.8 1.4-1.8.8 0 1.5.8 1.5 1.8 0 .9-.7 1.7-1.5 1.7z"
            />
            <path
                stroke="#000"
                d="M779.663 788.27c-.7 0-1.2-.6-1.2-1.5 0-.8.5-1.4 1.2-1.4.6 0 1.2.6 1.2 1.4 0 .9-.6 1.5-1.2 1.5z"
            />
            <path
                fill="#fff"
                fillOpacity={0.22}
                d="M778.822 787.867a1.324 1.324 0 0 1-.16-1.832c.514-.612.408.604.944 1.054.536.45 1.562.005 1.048.618-.45.536-1.295.61-1.832.16z"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M675.167 757.393h89.1v48.8h-89.1v-48.8z"
            />
            <path fill="#fff" stroke="#afafaf" d="M678.203 782.41h83v18.8h-83v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(678.203 782.41)"
            >
                <tspan
                    x={40}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"-"}
                </tspan>
            </text>
            <path fill="#fff" stroke="#afafaf" d="M678.47 761.283h83v18.8h-83v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(678.47 761.283)"
            >
                <tspan
                    x={26.5}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"FIR202"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M676.028 687.927h89.1v48.8h-89.1v-48.8z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M679.064 712.944h83v18.8h-83v-18.8z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(679.064 712.944)"
            >
                <tspan
                    x={19.5}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"0.060 kg/h"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M679.331 691.817h83v18.8h-83v-18.8z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(679.331 691.817)"
            >
                <tspan
                    x={27.5}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"RATIO"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#236ea1"
                strokeDasharray="2,5"
                d="M774.984 782.592h-12.9M719.88 755.487v-15.6M719.88 687.727v-43.8M719.88 643.943h-71.5M648.419 643.943v-21.9"
            />
            <path fill="#fff" d="M724.437 899.14h56.4v26h-56.4v-26z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(724.437 899.14)"
            >
                <tspan
                    x={14.2}
                    y={17.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G206A"}
                </tspan>
            </text>
            <path fill="#fff" d="M722.715 996.362h56.4v26h-56.4v-26z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(722.715 996.362)"
            >
                <tspan
                    x={14.2}
                    y={17.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G206B"}
                </tspan>
            </text>
            <path fill="#fff" stroke="#afafaf" d="M678.47 827.418h83v18.8h-83v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(678.47 827.418)"
            >
                <tspan
                    x={22}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"22.537 %"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#236ea1"
                strokeDasharray="2,5"
                d="M719.88 801.356v26.1"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M675.167 825.764h89.1v22.5h-89.1v-22.5z"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M634.697 979.619h-13.8" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m634.697 973.619 12 6-12 6v-12"
                />
            </g>
            <path
                fill="red"
                stroke="#7e7e7e"
                d="M587.205 974.344h12.2v-5.5l18.3 10.9-18.3 10.9v-5.4h-12.2v-10.9z"
            />
            <path fill="#fff" d="M567.14 995.164h70.6v39.7h-70.6v-39.7z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(567.14 995.164)"
            >
                <tspan
                    x={4.3}
                    y={24.4}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Phophoric Acid"}
                </tspan>
            </text>
            <path
                fill="url(#k)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 129.808 817.771)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 130.097 827.167)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 478.407 348.718)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M129.13 826.787v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#n)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(138.28 829.798)"
            />
            <path
                fill="url(#n)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(139.118 824.237)"
            />
            <path
                fill="url(#k)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 146.122 806.337)"
            />
            <path
                fill="url(#o)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 154.031 826.614)"
            />
            <path
                fill="#fff"
                fillOpacity={0.27}
                d="M145.724 824.897c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#9da6b0"
                stroke="#595959"
                strokeWidth={0.25}
                d="M145.687 813.409c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#p)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 -333.217 480.857)"
            />
            <path
                fill="url(#l)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 161.06 804.682)"
            />
            <path
                fill="url(#m)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 -321.628 483.096)"
            />
            <path
                fill="#fff"
                fillOpacity={0.35}
                d="M162.026 805.063v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="url(#ar)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 128.947 853.57)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 129.236 862.966)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 495.876 367.048)"
            />
            <path
                fill="#c2c2c2"
                d="M128.27 862.586v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#au)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(137.42 865.597)"
            />
            <path
                fill="url(#au)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(138.257 860.035)"
            />
            <path
                fill="url(#ar)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 145.261 842.136)"
            />
            <path
                fill="url(#av)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 153.17 862.412)"
            />
            <path
                fill="#c2c2c2"
                d="M144.863 860.696c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#c2c2c2"
                stroke="#595959"
                strokeWidth={0.25}
                d="M144.826 849.207c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#aw)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 -351.547 498.326)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 160.198 840.48)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 -339.958 500.565)"
            />
            <path
                fill="#c2c2c2"
                d="M161.165 840.861v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#ffc000"
                d="M160.698 843.623h39.6v5.2h-39.6v-5.2zM112.468 819.083h15.9v5.2h-15.9v-5.2zM112.468 855.57h15.9v5.2h-15.9v-5.2z"
            />
            <path fill="#fff" d="M59.947 812.842h51.7v15.6h-51.7v-15.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(59.947 812.842)"
            >
                <tspan
                    x={11.3}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CPK01"}
                </tspan>
            </text>
            <path fill="#ffc000" d="M160.698 807.356h39.6v5.2h-39.6v-5.2z" />
            <path
                fill="url(#ar)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 128.947 892.464)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 129.236 901.86)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 515.323 386.495)"
            />
            <path
                fill="#c2c2c2"
                d="M128.27 901.48v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#au)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(137.42 904.491)"
            />
            <path
                fill="url(#au)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(138.257 898.93)"
            />
            <path
                fill="url(#ar)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 145.261 881.03)"
            />
            <path
                fill="url(#av)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 153.17 901.307)"
            />
            <path
                fill="#c2c2c2"
                d="M144.863 899.59c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#c2c2c2"
                stroke="#595959"
                strokeWidth={0.25}
                d="M144.826 888.102c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#aw)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 -370.994 517.773)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 160.198 879.375)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 -359.406 520.012)"
            />
            <path
                fill="#c2c2c2"
                d="M161.165 879.756v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M112.468 894.464h15.9v5.2h-15.9v-5.2z" />
            <path
                fill="url(#ar)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 129.808 930.056)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 130.097 939.452)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 534.55 404.86)"
            />
            <path
                fill="#c2c2c2"
                d="M129.13 939.072v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#au)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(138.28 942.083)"
            />
            <path
                fill="url(#au)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(139.118 936.521)"
            />
            <path
                fill="url(#ar)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 146.122 918.622)"
            />
            <path
                fill="url(#av)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 154.031 938.899)"
            />
            <path
                fill="#c2c2c2"
                d="M145.724 937.182c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#c2c2c2"
                stroke="#595959"
                strokeWidth={0.25}
                d="M145.687 925.693c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#aw)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 -389.36 537)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 161.06 916.967)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 -377.77 539.238)"
            />
            <path
                fill="#c2c2c2"
                d="M162.026 917.347v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path
                fill="#ffc000"
                d="M161.559 920.099h39.6v5.2h-39.6v-5.2zM113.329 932.058h15.9v5.2h-15.9v-5.2z"
            />
            <path fill="#fff" d="M59.947 852.244h51.7v15.6h-51.7v-15.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(59.947 852.244)"
            >
                <tspan
                    x={11.3}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CPK02"}
                </tspan>
            </text>
            <path fill="#fff" d="M61.67 893.37h51.7v15.6h-51.7v-15.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(61.67 893.37)"
            >
                <tspan
                    x={14.3}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CP01"}
                </tspan>
            </text>
            <path fill="#fff" d="M62.53 926.784h51.7v15.6h-51.7v-15.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(62.53 926.784)"
            >
                <tspan
                    x={14.3}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"CP02"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M200.322 807.356v118.1"
            />
            <path
                fill="url(#b)"
                d="M0 14h73.8V0H0v14z"
                transform="translate(247.74 754.936)"
            />
            <path
                fill="url(#c)"
                d="M0 3.2h73.8V0H0v3.2z"
                transform="translate(247.74 764.515)"
            />
            <path
                fill="url(#b)"
                d="M0 12.8h73.8V0H0v12.8z"
                transform="translate(247.74 940.78)"
            />
            <path
                fill="url(#c)"
                d="M0 3.7h73.8V0H0v3.7z"
                transform="translate(247.74 940.534)"
            />
            <path
                fill="url(#b)"
                d="M7.1 0h74.4c4 0 7.2 5.6 7.2 12.5v148.4c0 6.9-3.2 12.5-7.2 12.5H7.1c-3.9 0-7.1-5.6-7.1-12.5V12.5C0 5.6 3.2 0 7.1 0z"
                transform="translate(240.311 767.557)"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                    fontWeight: 700,
                }}
                transform="translate(248.921 781.232)"
            >
                <tspan
                    x={24.8}
                    y={12.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"F201"}
                </tspan>
            </text>
            <path
                fill="#c2c2c2"
                stroke="#000"
                d="M308.33 785.304c0-5.2 3.7-9.4 8.2-9.4 4.5 0 8.2 4.2 8.2 9.4s-3.7 9.5-8.2 9.5c-4.5 0-8.2-4.3-8.2-9.5z"
            />
            <path fill="#fff" d="M328.993 772.131h68.9v23.6h-68.9v-23.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(328.993 772.131)"
            >
                <tspan
                    x={15.4}
                    y={16.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LAHH201"}
                </tspan>
            </text>
            <path
                fill="#c2c2c2"
                stroke="#000"
                d="M308.33 818.433c0-5.2 3.7-9.4 8.2-9.4 4.5 0 8.2 4.2 8.2 9.4s-3.7 9.5-8.2 9.5c-4.5 0-8.2-4.3-8.2-9.5zM308.33 878.263c0-5.2 3.7-9.4 8.2-9.4 4.5 0 8.2 4.2 8.2 9.4s-3.7 9.5-8.2 9.5c-4.5 0-8.2-4.3-8.2-9.5z"
            />
            <path fill="#fff" d="M328.993 865.09h68.9v23.6h-68.9v-23.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(328.993 865.09)"
            >
                <tspan
                    x={15.9}
                    y={16.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LSAL203"}
                </tspan>
            </text>
            <path
                fill="#c2c2c2"
                stroke="#000"
                d="M308.33 904.095c0-5.2 3.7-9.4 8.2-9.4 4.5 0 8.2 4.2 8.2 9.4s-3.7 9.5-8.2 9.5c-4.5 0-8.2-4.3-8.2-9.5z"
            />
            <g stroke="#ffc000">
                <path fill="none" strokeWidth={4} d="M161.961 884.754h65.5" />
                <path
                    fill="#ffc000"
                    strokeLinecap="round"
                    d="m227.461 878.754 12 6-12 6v-12"
                />
            </g>
            <path fill="#fff" d="M156.313 929.467h85.7v60.6h-85.7v-60.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(156.313 929.467)"
            >
                <tspan
                    x={14.9}
                    y={27.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"From Storage "}
                </tspan>
                <tspan
                    x={23.4}
                    y={42.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"Crude Oil"}
                </tspan>
            </text>
            <path fill="#fff" d="M330.428 800.334h68.9v23.6h-68.9v-23.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(330.428 800.334)"
            >
                <tspan
                    x={15.4}
                    y={16.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LSAH202"}
                </tspan>
            </text>
            <path fill="#fff" d="M329.854 893.422h68.9v23.6h-68.9v-23.6z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(329.854 893.422)"
            >
                <tspan
                    x={16.4}
                    y={16.3}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"LALL204"}
                </tspan>
            </text>
            <path
                fill="url(#ar)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 437.133 963.468)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 437.422 972.864)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 704.918 267.904)"
            />
            <path
                fill="#c2c2c2"
                d="M436.456 972.484v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#au)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(445.605 975.495)"
            />
            <path
                fill="url(#au)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(446.443 969.934)"
            />
            <path
                fill="url(#ar)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 453.447 952.034)"
            />
            <path
                fill="url(#av)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 461.356 972.31)"
            />
            <path
                fill="#c2c2c2"
                d="M453.05 970.594c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#c2c2c2"
                stroke="#595959"
                strokeWidth={0.25}
                d="M453.012 959.106c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#aw)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 -252.403 707.368)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 468.384 950.38)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 -240.814 709.607)"
            />
            <path
                fill="#c2c2c2"
                d="M469.35 950.76v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M420.653 965.468h15.9v5.2h-15.9v-5.2z" />
            <path
                fill="url(#ar)"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 437.133 1001.06)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .3.3.3.6 0 .4-.1.7-.3.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 -1 -1 0 437.422 1010.456)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(-90 723.714 286.7)"
            />
            <path
                fill="#c2c2c2"
                d="M436.456 1010.076v-10.3c0-.1-.1-.2-.1-.2-.1 0-.1.1-.1.2v10.3c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
            />
            <path
                fill="url(#au)"
                d="M0 0h14.8v2.4H0V0z"
                transform="translate(445.605 1013.087)"
            />
            <path
                fill="url(#au)"
                stroke="#595959"
                d="M3.3 0h6.5l3.3 5.8H0L3.3 0z"
                transform="translate(446.443 1007.525)"
            />
            <path
                fill="url(#ar)"
                stroke="#595959"
                d="M0 0h7.7v15H0V0z"
                transform="matrix(0 1 1 0 453.447 989.626)"
            />
            <path
                fill="url(#av)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 8.3C0 3.7 4.5 0 10.2 0c5.6 0 10.1 3.7 10.1 8.3 0 4.6-4.5 8.4-10.1 8.4C4.5 16.7 0 12.9 0 8.3z"
                transform="matrix(0 -1 -1 0 461.356 1009.902)"
            />
            <path
                fill="#c2c2c2"
                d="M453.05 1008.186c3.8 0 6.9-3.8 6.9-8.4 0-4.7-3.1-8.5-6.9-8.5-3.9 0-7 3.8-7 8.5 0 4.6 3.1 8.4 7 8.4z"
            />
            <path
                fill="#c2c2c2"
                stroke="#595959"
                strokeWidth={0.25}
                d="M453.012 996.697c1.4 0 2.5 1.4 2.5 3 0 1.7-1.1 3.1-2.5 3.1s-2.5-1.4-2.5-3.1c0-1.6 1.1-3 2.5-3z"
            />
            <path
                fill="url(#aw)"
                stroke="#595959"
                strokeWidth={0.25}
                d="M0 1.9C0 .9 1.1 0 2.4 0c1.3 0 2.3.9 2.3 1.9 0 1.1-1 2-2.3 2C1.1 3.9 0 3 0 1.9z"
                transform="rotate(90 -271.199 726.163)"
            />
            <path
                fill="url(#as)"
                d="M.4 0h10.3c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.4C.2 1.3 0 1 0 .6 0 .3.2 0 .4 0z"
                transform="matrix(0 1 1 0 468.384 987.97)"
            />
            <path
                fill="url(#at)"
                d="M11 0c-.1.2-.2.4-.4.4H.4C.2.4 0 .2 0 0h11z"
                transform="rotate(90 -259.61 728.403)"
            />
            <path
                fill="#c2c2c2"
                d="M469.35 988.351v10.3c0 .1.1.2.1.2.1 0 .1-.1.1-.2v-10.3c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
            />
            <path fill="#ffc000" d="M420.653 1003.062h15.9v5.2h-15.9v-5.2z" />
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M469.214 955.156h75M469.214 994.77h75"
            />
            <path fill="#fff" d="M428.138 921.588h56.4v26h-56.4v-26z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(428.138 921.588)"
            >
                <tspan
                    x={14.2}
                    y={17.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G201A"}
                </tspan>
            </text>
            <path fill="#fff" d="M426.416 1018.805h56.4v26h-56.4v-26z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(426.416 1018.805)"
            >
                <tspan
                    x={14.2}
                    y={17.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"G201B"}
                </tspan>
            </text>
            <path
                fill="none"
                stroke="#ffc000"
                strokeWidth={4}
                d="M329.854 922.215h91.3M419.396 922.215v85.6M544.24 779.464v217.9"
            />
            <path
                fill="url(#K)"
                d="M.2 0h13.9c.1 0 .2.1.2.2v12.6c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 -139.463 713.698)"
            />
            <path
                fill="url(#L)"
                d="M0 0h1v14H0V0z"
                transform="rotate(90 -157.374 702.462)"
            />
            <path
                fill="url(#M)"
                d="M0 0h4v.9H0V0z"
                transform="rotate(90 -148.508 709.803)"
            />
            <path
                fill="url(#L)"
                d="M0 0h3v15.4H0V0z"
                transform="rotate(90 -149.202 709.637)"
            />
            <path
                fill="url(#M)"
                d="M.2 0h14c.1 0 .3.1.3.2v.3c0 .1-.2.2-.3.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 -139.257 713.776)"
            />
            <path
                fill="url(#N)"
                d="M.2 0h10c.2 0 .3.1.3.2v4.3c0 .1-.1.2-.3.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
                transform="rotate(90 -142.507 712.586)"
            />
            <path fill="#3e3938" d="M569.649 855.621v9.4h-3.8v-9.4h3.8z" />
            <path
                fill="url(#O)"
                d="M.1 0h14.3V1.5H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
                transform="rotate(90 -145.2 707.913)"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M579.884 835.67h89.1v48.8h-89.1v-48.8z"
            />
            <path fill="#fff" stroke="#afafaf" d="M582.92 860.688h83v18.8h-83v-18.8z" />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(582.92 860.688)"
            >
                <tspan
                    x={20}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"-------"}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M583.187 839.561h83v18.8h-83v-18.8z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(583.187 839.561)"
            >
                <tspan
                    x={28}
                    y={13.9}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"TT201"}
                </tspan>
            </text>
            <path
                fill="#ffc37c"
                stroke="#868686"
                d="M1266.345 666.306c0-6.1 5.5-11 12.2-11 6.7 0 12.2 4.9 12.2 11s-5.5 11-12.2 11c-6.7 0-12.2-4.9-12.2-11z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1266.345 655.306)"
            >
                <tspan
                    x={6.2}
                    y={15.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PS"}
                </tspan>
            </text>
            <path
                fill="url(#M)"
                d="M0 0h5.7v1.2H0V0z"
                transform="translate(1274.972 673.956)"
            />
            <path
                fill="url(#L)"
                d="M0 0h4.2v11.1H0V0z"
                transform="translate(1275.714 675.169)"
            />
            <path
                fill="red"
                stroke="#3c5c74"
                d="M1267.763 671.957h20.1c.1 0 .1 0 .1.1v1.9c0 .1 0 .1-.1.1h-20.1c-.1 0-.1 0-.1-.1v-1.9c0-.1 0-.1.1-.1z"
            />
            <path
                fill="none"
                stroke="#7e7e7e"
                d="M1296.102 619.85h96.9v48h-96.9v-48z"
            />
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1298.967 645.072h90.5v20.1h-90.5v-20.1z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1298.967 645.072)"
            >
                <tspan
                    x={20.7}
                    y={14.5}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {`${value['PIRAHL204']} mBarA`}
                </tspan>
            </text>
            <path
                fill="#fff"
                stroke="#afafaf"
                d="M1298.967 624.072h90.5v19.4h-90.5v-19.4z"
            />
            <text
                xmlSpace="preserve"
                style={{
                    fill: "#000",
                    fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    fontSize: "8pt",
                }}
                transform="translate(1298.967 624.072)"
            >
                <tspan
                    x={31.7}
                    y={14.2}
                    style={{
                        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
                    }}
                >
                    {"PT204"}
                </tspan>
            </text>
        </svg>
    )

}

export default BleachingHMI