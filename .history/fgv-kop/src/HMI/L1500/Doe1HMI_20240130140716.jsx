import * as React from "react"

const Doe1HMI = ({ value }) => {
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
          x1={-6}
          x2={50}
          y1={42}
          y2={10}
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
        <linearGradient id="k" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#949990" />
          <stop offset={0.15} stopColor="#cdd2c7" />
          <stop offset={0.25} stopColor="#e3e6e1" />
          <stop offset={0.52} stopColor="#b0b5aa" />
          <stop offset={0.69} stopColor="#9ca197" />
          <stop offset={0.8} stopColor="#93988f" />
          <stop offset={0.92} stopColor="#8b8f86" />
          <stop offset={1} stopColor="#a0a59b" />
        </linearGradient>
        <linearGradient id="l" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#949990" />
          <stop offset={0.15} stopColor="#cdd2c7" />
          <stop offset={0.25} stopColor="#e3e6e1" />
          <stop offset={0.52} stopColor="#b0b5aa" />
          <stop offset={0.69} stopColor="#9ca197" />
          <stop offset={0.8} stopColor="#93988f" />
          <stop offset={0.92} stopColor="#8b8f86" />
          <stop offset={1} stopColor="#a0a59b" />
        </linearGradient>
        <linearGradient id="m" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#949990" />
          <stop offset={0.15} stopColor="#cdd2c7" />
          <stop offset={0.25} stopColor="#e3e6e1" />
          <stop offset={0.52} stopColor="#b0b5aa" />
          <stop offset={0.69} stopColor="#9ca197" />
          <stop offset={0.8} stopColor="#93988f" />
          <stop offset={0.92} stopColor="#8b8f86" />
          <stop offset={1} stopColor="#84877f" />
        </linearGradient>
        <linearGradient id="n" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#898c85" />
          <stop offset={0.15} stopColor="#bfc3ba" />
          <stop offset={0.25} stopColor="#dddeda" />
          <stop offset={0.52} stopColor="#a2a69d" />
          <stop offset={0.69} stopColor="#90938b" />
          <stop offset={0.8} stopColor="#888b83" />
          <stop offset={0.92} stopColor="#80837c" />
          <stop offset={1} stopColor="#94978f" />
        </linearGradient>
        <linearGradient id="o" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#0082b2" />
          <stop offset={0.15} stopColor="#45b6f1" />
          <stop offset={0.25} stopColor="#b3d8f7" />
          <stop offset={0.52} stopColor="#009ad2" />
          <stop offset={0.69} stopColor="#08b" />
          <stop offset={0.8} stopColor="#0080b0" />
          <stop offset={0.92} stopColor="#0079a6" />
          <stop offset={1} stopColor="#008cbf" />
        </linearGradient>
        <linearGradient id="p" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#37638a" />
          <stop offset={0.15} stopColor="#6593c0" />
          <stop offset={0.25} stopColor="#bac9dd" />
          <stop offset={0.52} stopColor="#4276a3" />
          <stop offset={0.69} stopColor="#3a6991" />
          <stop offset={0.8} stopColor="#366289" />
          <stop offset={0.92} stopColor="#335d81" />
          <stop offset={1} stopColor="#3c6b94" />
        </linearGradient>
        <linearGradient id="q" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#b3a593" />
          <stop offset={0.03} stopColor="#fdeeda" />
          <stop offset={0.05} stopColor="#e9d7bf" />
          <stop offset={0.64} stopColor="#e5d3bc" />
          <stop offset={0.95} stopColor="#e0ceb8" />
          <stop offset={1} stopColor="#a69988" />
        </linearGradient>
        <linearGradient id="r" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9e9e9e" />
          <stop offset={0.15} stopColor="#f6f6f6" />
          <stop offset={0.26} stopColor="#fff" />
          <stop offset={0.41} stopColor="#fff" />
          <stop offset={0.6} stopColor="#d1d1d1" />
          <stop offset={0.8} stopColor="#a8a8a8" />
          <stop offset={0.93} stopColor="#898989" />
        </linearGradient>
        <linearGradient id="s" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9c9080" />
          <stop offset={0.15} stopColor="#f4e1c8" />
          <stop offset={0.26} stopColor="#fdebd5" />
          <stop offset={0.41} stopColor="#fde9d1" />
          <stop offset={0.6} stopColor="#d0bfaa" />
          <stop offset={0.8} stopColor="#a69988" />
          <stop offset={0.93} stopColor="#887d6f" />
        </linearGradient>
        <linearGradient id="t" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} />
          <stop offset={0.03} stopColor="#7c7c7c" />
          <stop offset={0.05} />
          <stop offset={0.64} />
          <stop offset={0.95} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient id="u" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#b3a593" />
          <stop offset={0.03} stopColor="#fdeeda" />
          <stop offset={0.05} stopColor="#e9d7bf" />
          <stop offset={0.64} stopColor="#e5d3bc" />
          <stop offset={0.95} stopColor="#e0ceb8" />
          <stop offset={1} stopColor="#a69988" />
        </linearGradient>
        <linearGradient id="v" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#a9a69e" />
          <stop offset={0.15} stopColor="#dfdcd2" />
          <stop offset={0.25} stopColor="#edebe6" />
          <stop offset={0.52} stopColor="#c1beb5" />
          <stop offset={0.69} stopColor="#aca9a1" />
          <stop offset={0.8} stopColor="#a29f98" />
          <stop offset={0.97} stopColor="#99968f" />
          <stop offset={1} stopColor="#b0ada5" />
        </linearGradient>
        <linearGradient id="w" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#959081" />
          <stop offset={0.15} stopColor="#c7c2b1" />
          <stop offset={0.25} stopColor="#e1ded6" />
          <stop offset={0.52} stopColor="#aaa594" />
          <stop offset={0.69} stopColor="#979384" />
          <stop offset={0.8} stopColor="#8f8a7c" />
          <stop offset={0.97} stopColor="#868275" />
          <stop offset={1} stopColor="#9b9687" />
        </linearGradient>
        <linearGradient id="x" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#a9a69e" />
          <stop offset={0.15} stopColor="#dfdcd2" />
          <stop offset={0.25} stopColor="#edebe6" />
          <stop offset={0.52} stopColor="#c1beb5" />
          <stop offset={0.69} stopColor="#aca9a1" />
          <stop offset={0.8} stopColor="#a29f98" />
          <stop offset={0.97} stopColor="#99968f" />
          <stop offset={1} stopColor="#b0ada5" />
        </linearGradient>
        <linearGradient id="y" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#a7a7a7" />
          <stop offset={0.15} stopColor="#e1e1e1" />
          <stop offset={0.25} stopColor="#e4e4e4" />
          <stop offset={0.52} stopColor="#bcbcbc" />
          <stop offset={0.69} stopColor="#a7a7a7" />
          <stop offset={0.8} stopColor="#9e9e9e" />
          <stop offset={0.92} stopColor="#959595" />
        </linearGradient>
        <linearGradient id="z" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9aa1aa" />
          <stop offset={0.22} stopColor="#aeb5c0" />
          <stop offset={0.57} stopColor="#dce0e5" />
          <stop offset={0.84} stopColor="#cacfd7" />
          <stop offset={1} stopColor="#a7afb9" />
        </linearGradient>
        <linearGradient id="A" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#8f969d" />
          <stop offset={0.64} stopColor="#d3d8de" />
          <stop offset={1} stopColor="#9aa0a8" />
        </linearGradient>
        <linearGradient id="B" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#626974" />
          <stop offset={0.66} stopColor="#ccd0d5" />
          <stop offset={1} stopColor="#5e6670" />
        </linearGradient>
        <linearGradient id="C" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#a3abb1" />
          <stop offset={0.03} stopColor="#ecf4fb" />
          <stop offset={0.05} stopColor="#d5dee6" />
          <stop offset={0.64} stopColor="#d1dae3" />
          <stop offset={0.95} stopColor="#cdd5dd" />
          <stop offset={1} stopColor="#979ea4" />
        </linearGradient>
        <linearGradient id="F" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#79ae42" />
          <stop offset={0.22} stopColor="#89c34b" />
          <stop offset={0.57} stopColor="#cde7bb" />
          <stop offset={0.84} stopColor="#afda8c" />
          <stop offset={1} stopColor="#84bc48" />
        </linearGradient>
        <linearGradient id="G" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#6f9f3b" />
          <stop offset={0.64} stopColor="#c2e2aa" />
          <stop offset={1} stopColor="#77aa40" />
        </linearGradient>
        <linearGradient id="H" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#649035" />
          <stop offset={0.66} stopColor="#cde7bb" />
          <stop offset={1} stopColor="#608b33" />
        </linearGradient>
        <linearGradient id="I" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#669336" />
          <stop offset={0.03} stopColor="#afda8c" />
          <stop offset={0.05} stopColor="#86bf49" />
          <stop offset={0.64} stopColor="#84bc48" />
          <stop offset={0.95} stopColor="#81b846" />
          <stop offset={1} stopColor="#5e8831" />
        </linearGradient>
        <linearGradient id="L" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#bac0c1" />
          <stop offset={0.15} stopColor="#f4fafc" />
          <stop offset={0.25} stopColor="#f8fcfd" />
          <stop offset={0.44} stopColor="#d5dbdd" />
          <stop offset={0.6} stopColor="#bdc3c4" />
          <stop offset={0.8} stopColor="#a0a4a6" />
          <stop offset={0.97} stopColor="#929697" />
          <stop offset={1} stopColor="#c2c7c9" />
        </linearGradient>
        <linearGradient id="M" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#b5b5b5" />
          <stop offset={0.03} stopColor="#fff" />
          <stop offset={0.08} stopColor="#ebebeb" />
          <stop offset={0.64} stopColor="#e7e7e7" />
          <stop offset={0.95} stopColor="#e2e2e2" />
          <stop offset={1} stopColor="#a8a8a8" />
        </linearGradient>
        <linearGradient id="N" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#bac0c1" />
          <stop offset={0.15} stopColor="#f4fafc" />
          <stop offset={0.25} stopColor="#f8fcfd" />
          <stop offset={0.44} stopColor="#d5dbdd" />
          <stop offset={0.6} stopColor="#bdc3c4" />
          <stop offset={0.8} stopColor="#a0a4a6" />
          <stop offset={0.97} stopColor="#929697" />
          <stop offset={1} stopColor="#c2c7c9" />
        </linearGradient>
        <linearGradient id="O" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#939798" />
          <stop offset={0.15} stopColor="#c5cacb" />
          <stop offset={0.25} stopColor="#dfe2e2" />
          <stop offset={0.44} stopColor="#a8adae" />
          <stop offset={0.6} stopColor="#959a9b" />
          <stop offset={0.8} stopColor="#7d8182" />
          <stop offset={0.97} stopColor="#727676" />
          <stop offset={1} stopColor="#999d9e" />
        </linearGradient>
        <linearGradient id="P" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#669336" />
          <stop offset={0.03} stopColor="#afda8c" />
          <stop offset={0.08} stopColor="#86bf49" />
          <stop offset={0.64} stopColor="#84bc48" />
          <stop offset={0.95} stopColor="#81b846" />
          <stop offset={1} stopColor="#5e8831" />
        </linearGradient>
        <linearGradient
          id="Q"
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
        <linearGradient id="R" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#c7c7c7" />
          <stop offset={0.15} stopColor="#fff" />
          <stop offset={0.25} stopColor="#fff" />
          <stop offset={0.52} stopColor="#dfdfdf" />
          <stop offset={0.69} stopColor="#c7c7c7" />
          <stop offset={0.8} stopColor="#bcbcbc" />
          <stop offset={0.92} stopColor="#b1b1b1" />
        </linearGradient>
        <linearGradient id="S" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#9fa0a0" />
          <stop offset={0.15} stopColor="#dadbdb" />
          <stop offset={0.25} stopColor="#dddede" />
          <stop offset={0.52} stopColor="#b3b4b4" />
          <stop offset={0.69} stopColor="#9fa0a0" />
          <stop offset={0.8} stopColor="#969797" />
          <stop offset={0.92} stopColor="#8e8e8e" />
        </linearGradient>
        <linearGradient id="T" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#9e9e9e" />
          <stop offset={0.15} stopColor="#dadada" />
          <stop offset={0.25} stopColor="#dcdcdc" />
          <stop offset={0.52} stopColor="#b2b2b2" />
          <stop offset={0.69} stopColor="#9e9e9e" />
          <stop offset={0.8} stopColor="#959595" />
          <stop offset={0.92} stopColor="#8d8d8d" />
        </linearGradient>
        <linearGradient id="U" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#c7c7c7" />
          <stop offset={0.15} stopColor="#fff" />
          <stop offset={0.25} stopColor="#fff" />
          <stop offset={0.52} stopColor="#dfdfdf" />
          <stop offset={0.69} stopColor="#c7c7c7" />
          <stop offset={0.8} stopColor="#bcbcbc" />
          <stop offset={0.92} stopColor="#b1b1b1" />
        </linearGradient>
        <linearGradient id="V" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#c4aa84" />
          <stop offset={0.15} stopColor="#ffe0b3" />
          <stop offset={0.25} stopColor="#ffe6c3" />
          <stop offset={0.44} stopColor="#dfc297" />
          <stop offset={0.6} stopColor="#c7ad86" />
          <stop offset={0.8} stopColor="#a89170" />
          <stop offset={0.97} stopColor="#998566" />
          <stop offset={1} stopColor="#cbb189" />
        </linearGradient>
        <linearGradient id="W" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#b38541" />
          <stop offset={0.15} stopColor="#f3bb6f" />
          <stop offset={0.25} stopColor="#f8dabd" />
          <stop offset={0.52} stopColor="#d49e4f" />
          <stop offset={0.69} stopColor="#bd8c45" />
          <stop offset={0.8} stopColor="#b28441" />
          <stop offset={0.92} stopColor="#a87d3d" />
          <stop offset={1} stopColor="#c19047" />
        </linearGradient>
        <linearGradient id="X" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#4d7ca5" />
          <stop offset={0.15} stopColor="#78aada" />
          <stop offset={0.25} stopColor="#c0d3ea" />
          <stop offset={0.44} stopColor="#598ebc" />
          <stop offset={0.6} stopColor="#4f7ea7" />
          <stop offset={0.8} stopColor="#416a8d" />
          <stop offset={0.97} stopColor="#3b6080" />
          <stop offset={1} stopColor="#5181ab" />
        </linearGradient>
        <linearGradient id="Y" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#30679b" />
          <stop offset={0.15} stopColor="#5d93cf" />
          <stop offset={0.25} stopColor="#b8c9e4" />
          <stop offset={0.44} stopColor="#3876b1" />
          <stop offset={0.6} stopColor="#30699e" />
          <stop offset={0.8} stopColor="#275785" />
          <stop offset={0.97} stopColor="#234f79" />
          <stop offset={1} stopColor="#326ba1" />
        </linearGradient>
        <linearGradient id="Z" x1="0%" x2="0%" y1="0%" y2="100%">
          <stop offset={0} stopColor="#c4aa84" />
          <stop offset={0.15} stopColor="#ffe0b3" />
          <stop offset={0.25} stopColor="#ffeed7" />
          <stop offset={0.44} stopColor="#dfc297" />
          <stop offset={0.6} stopColor="#c7ad86" />
          <stop offset={0.8} stopColor="#a89170" />
          <stop offset={0.97} stopColor="#998566" />
          <stop offset={1} stopColor="#cbb189" />
        </linearGradient>
        <linearGradient id="aa" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#4e7193" />
          <stop offset={0.03} stopColor="#9cbadb" />
          <stop offset={0.08} stopColor="#6895c0" />
          <stop offset={0.64} stopColor="#6692bd" />
          <stop offset={0.95} stopColor="#638fb9" />
          <stop offset={1} stopColor="#486989" />
        </linearGradient>
        <linearGradient id="ab" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#4b4d52" />
          <stop offset={0.03} stopColor="#9a9b9f" />
          <stop offset={0.08} stopColor="#64676c" />
          <stop offset={0.64} stopColor="#62656a" />
          <stop offset={0.95} stopColor="#606268" />
          <stop offset={1} stopColor="#45474b" />
        </linearGradient>
        <linearGradient id="ac" x1="100%" x2="0%" y1="0%" y2="0%">
          <stop offset={0} stopColor="#4d7ca5" />
          <stop offset={0.15} stopColor="#78aada" />
          <stop offset={0.25} stopColor="#c0d3ea" />
          <stop offset={0.44} stopColor="#598ebc" />
          <stop offset={0.6} stopColor="#4f7ea7" />
          <stop offset={0.8} stopColor="#416a8d" />
          <stop offset={0.97} stopColor="#3b6080" />
          <stop offset={1} stopColor="#5181ab" />
        </linearGradient>
        <radialGradient
          id="D"
          cx={10}
          cy={8}
          r={12.8}
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
          id="E"
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
          id="J"
          cx={10}
          cy={8}
          r={12.8}
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
          id="K"
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
      <path fill="#0e2350" stroke="#3498db" d="M1 1.004h1920v1080.1H1V1.004z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#ff0",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "36pt",
          fontWeight: 700,
        }}
        transform="translate(1498.763 874.129)"
      >
        <tspan
          x={63.1}
          y={21.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            textDecoration: "underline",
          }}
        >
          {"DEODORISING "}
        </tspan>
        <tspan
          x={99.1}
          y={78.1}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
            textDecoration: "underline",
          }}
        >
          {"SECTION 1"}
        </tspan>
      </text>
      <g stroke="#839292">
        <path
          fill="url(#a)"
          d="M0 0h196.9v278.3H0V0z"
          transform="translate(270.793 171.154)"
        />
        <path
          fill="url(#a)"
          d="M76.2 0H119l77.3 45.1H0L76.2 0z"
          transform="translate(271.104 117.913)"
        />
        <path
          fill="url(#b)"
          d="M1.7 0h42.7c.9 0 1.7.8 1.7 1.7v1.7c0 1-.8 1.8-1.7 1.8H1.7C.7 5.2 0 4.4 0 3.4V1.7C0 .8.7 0 1.7 0z"
          transform="translate(345.525 112.745)"
        />
        <path
          fill="url(#b)"
          d="M2.7 0h209.2c1.5 0 2.7.8 2.7 1.8v4.6c0 1-1.2 1.8-2.7 1.8H2.7C1.2 8.2 0 7.4 0 6.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(261.969 448.822)"
        />
        <path
          fill="url(#b)"
          d="M2.7 0h209.2c1.5 0 2.7.8 2.7 1.8v4.6c0 1-1.2 1.8-2.7 1.8H2.7C1.2 8.2 0 7.4 0 6.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(261.969 162.932)"
        />
        <path
          fill="url(#b)"
          d="M2.7 0h190.2c1.4 0 2.6.8 2.6 1.8v3.6c0 1-1.2 1.8-2.6 1.8H2.7C1.2 7.2 0 6.4 0 5.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(271.505 219.298)"
        />
        <path
          fill="url(#c)"
          d="M2.7 0h190.2c1.4 0 2.6.8 2.6 1.8v3.6c0 1-1.2 1.8-2.6 1.8H2.7C1.2 7.2 0 6.4 0 5.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(271.505 275.687)"
        />
        <path
          fill="url(#b)"
          d="M2.7 0h190.2c1.4 0 2.6.8 2.6 1.8v3.6c0 1-1.2 1.8-2.6 1.8H2.7C1.2 7.2 0 6.4 0 5.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(271.505 333.448)"
        />
        <path
          fill="url(#d)"
          d="M2.7 0h190.2c1.4 0 2.6.8 2.6 1.8v3.6c0 1-1.2 1.8-2.6 1.8H2.7C1.2 7.2 0 6.4 0 5.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(271.505 390.523)"
        />
        <path
          fill="url(#a)"
          d="M0 32.7C0 14.6 12.6 0 28.2 0s28.3 14.6 28.3 32.7-12.7 32.7-28.3 32.7C12.6 65.4 0 50.8 0 32.7z"
          transform="translate(341.024 187.484)"
        />
        <path
          fill="url(#e)"
          d="M0 25.7C0 11.5 9.9 0 22.2 0c12.3 0 22.2 11.5 22.2 25.7s-9.9 25.8-22.2 25.8C9.9 51.5 0 39.9 0 25.7z"
          transform="rotate(180 195.742 122.968)"
        />
        <path
          fill="url(#a)"
          d="M0 32.7C0 14.6 12.6 0 28.2 0s28.3 14.6 28.3 32.7-12.7 32.7-28.3 32.7C12.6 65.4 0 50.8 0 32.7z"
          transform="translate(341.024 305.17)"
        />
        <path
          fill="url(#e)"
          d="M0 25.7C0 11.5 9.9 0 22.2 0c12.3 0 22.2 11.5 22.2 25.7s-9.9 25.8-22.2 25.8C9.9 51.5 0 39.9 0 25.7z"
          transform="rotate(180 195.742 181.812)"
        />
        <path
          fill="url(#b)"
          d="M0 0h10v22.6H0L.6 20h7.3V2.5H.6L0 0z"
          transform="rotate(-90 353.98 45.855)"
        />
        <path
          fill="url(#f)"
          d="M1.5 0h85c.8 0 1.5.6 1.5 1.3V56c0 .8-.7 1.4-1.5 1.4h-85C.7 57.4 0 56.8 0 56V1.3C0 .6.7 0 1.5 0z"
          transform="translate(275.391 398.51)"
        />
        <path
          fill="url(#f)"
          d="M0 0h94.1v7.4H0V0z"
          transform="translate(272.368 449.708)"
        />
      </g>
      <g fill="none" stroke="#000">
        <path d="m358.314 217.71 11-13.6 11 13.6M369.301 204.11v13.6" />
      </g>
      <path
        fill="url(#g)"
        d="M.3 0H67c.2 0 .3.2.3.4v3c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3v-3C0 .2.1 0 .3 0z"
        transform="translate(334.875 179.385)"
      />
      <path
        fill="url(#h)"
        d="M0 0h10.2v2.7H0V0z"
        transform="translate(363.815 182.946)"
      />
      <path
        fill="url(#h)"
        d="M0 0h9.1v7.3H0V0z"
        transform="translate(364.38 185.615)"
      />
      <path
        fill="url(#h)"
        d="M0 0h8.5v4.9H0V0z"
        transform="translate(364.698 192.87)"
      />
      <path
        fill="url(#i)"
        d="M.1 0h8.4l.1.1v.3c0 .1-.1.1-.1.1H.1S0 .5 0 .4V.1L.1 0z"
        transform="translate(364.632 197.573)"
      />
      <path
        fill="url(#j)"
        d="M0 0h8.5v.4H0V0z"
        transform="translate(364.698 192.895)"
      />
      <path
        fill="url(#j)"
        d="M0 0h9.1v.4H0V0z"
        transform="translate(364.392 185.615)"
      />
      <path
        fill="url(#h)"
        d="M0 0h5v.7H0V0z"
        transform="translate(366.367 198.093)"
      />
      <g fill="none" stroke="#008ccc" strokeDasharray="2,5">
        <path d="m359.931 209.077 9-10.2 9 10.3M368.97 198.877v10.2" />
      </g>
      <g fill="none" stroke="#000">
        <path d="m356.917 347.645 11-13.6 11 13.6M367.904 334.045v13.6" />
      </g>
      <path
        fill="url(#g)"
        d="M.3 0H67c.2 0 .3.2.3.4v3c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3v-3C0 .2.1 0 .3 0z"
        transform="translate(333.844 311.873)"
      />
      <path
        fill="url(#h)"
        d="M0 0h10.2v2.7H0V0z"
        transform="translate(362.784 315.434)"
      />
      <path
        fill="url(#h)"
        d="M0 0h9.1v7.3H0V0z"
        transform="translate(363.35 318.103)"
      />
      <path
        fill="url(#h)"
        d="M0 0h8.5v4.9H0V0z"
        transform="translate(363.667 325.359)"
      />
      <path
        fill="url(#i)"
        d="M.1 0h8.4l.1.1v.3c0 .1-.1.1-.1.1H.1S0 .5 0 .4V.1L.1 0z"
        transform="translate(363.6 330.062)"
      />
      <path
        fill="url(#j)"
        d="M0 0h8.5v.4H0V0z"
        transform="translate(363.667 325.383)"
      />
      <path
        fill="url(#j)"
        d="M0 0h9.1v.4H0V0z"
        transform="translate(363.361 318.103)"
      />
      <path
        fill="url(#h)"
        d="M0 0h5v.7H0V0z"
        transform="translate(365.336 330.58)"
      />
      <g fill="none" stroke="#008ccc" strokeDasharray="2,5">
        <path d="m358.9 341.565 9-10.2 9 10.3M367.94 331.365v10.2" />
      </g>
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={2.667} d="M412.018 181.105h192.4" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m412.018 186.005-9.8-4.9 9.8-4.9v9.8"
        />
      </g>
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={2.667} d="M410.919 313.593h190.9" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m410.919 318.493-9.8-4.9 9.8-4.9v9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#236ea1"
        strokeWidth={4}
        d="M366.097 113.768v-74"
      />
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={4} d="M366.097 38.846h168.2" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m534.297 32.846 12 6-12 6v-12"
        />
      </g>
      <path
        fill="#0070c0"
        stroke="#0070c0"
        d="M554.515 34.036h10.4v-4.5l15.6 8.9-15.6 8.9v-4.4h-10.4v-8.9z"
      />
      <path fill="#fff" d="M587.912 24.824h108.1v27.8h-108.1v-27.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(587.912 24.824)"
      >
        <tspan
          x={24.5}
          y={19.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"To G308A"}
        </tspan>
      </text>
      <path
        fill="#00b0f0"
        stroke="#00b0f0"
        d="M633.512 184.973h-10.4v4.5l-15.6-8.9 15.6-8.9v4.4h10.4v8.9z"
      />
      <path fill="#fff" d="M635.902 164.222h110.6v32.7h-110.6v-32.7z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(635.902 164.222)"
      >
        <tspan
          x={22.8}
          y={22.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"From E305"}
        </tspan>
      </text>
      <path
        fill="#00b0f0"
        stroke="#00b0f0"
        d="M631.68 318.43h-10.4v4.5l-15.6-8.9 15.6-8.9v4.4h10.4v8.9z"
      />
      <path fill="#fff" d="M634.182 296.68h101.3v32.7h-101.3v-32.7z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(634.182 296.68)"
      >
        <tspan
          x={18.2}
          y={22.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"From D300"}
        </tspan>
      </text>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M467.042 283.271h107.7" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m583.542 283.271-10.4-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.4-6"
        />
      </g>
      <path
        fill="url(#k)"
        d="M0 0h9.9v8.6H0V0z"
        transform="translate(518.306 279.5)"
      />
      <path
        fill="url(#k)"
        d="M0 0h9.9v8.6H0V0z"
        transform="translate(540.599 279.5)"
      />
      <path
        fill="url(#k)"
        d="M1.3 0h9.9s1.4.1 1.4 9.6c0 9.4-1.4 9.4-1.4 9.4H1.3S0 19 0 9.6C0 .1 1.3 0 1.3 0z"
        transform="translate(528.12 274.284)"
      />
      <path
        fill="url(#l)"
        d="M0 0h3.8v7.3s-.2.4-1.9.4S0 7.3 0 7.3V0z"
        transform="translate(532.667 268.226)"
      />
      <path
        fill="url(#k)"
        d="M.5 0h1.4c.3 0 .5.2.5.5v12.7c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
        transform="translate(523.268 277.035)"
      />
      <path
        fill="url(#m)"
        d="M1 1.8C1 1.1 1.6.4 2.2.4c.7 0 1.2.7 1.2 1.4 0 .8-.5 1.4-1.2 1.4-.6 0-1.2-.6-1.2-1.4zM.6 0S0 0 0 .7v2.2s0 .7.6.7.8.9.8.9v1.9h1.7V4.5s.1-.9.7-.9c.7 0 .7-.7.7-.7V.7c0-.6-.6-.7-.6-.7H.6z"
        transform="translate(522.228 278.42)"
      />
      <path
        fill="url(#n)"
        d="M1.5 0v3.2c0 .2-.1.3-.2.3H.2c-.1 0-.2-.1-.2-.3V0h1.5z"
        transform="translate(523.707 284.81)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(523.011 284.845)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(523.011 286.606)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(525.173 284.845)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(525.173 286.606)"
      />
      <path
        fill="url(#k)"
        d="M.5 0h1.4c.3 0 .5.2.5.5v12.7c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
        transform="translate(543.332 277.035)"
      />
      <path
        fill="url(#m)"
        d="M1 1.8C1 1.1 1.6.4 2.2.4c.7 0 1.2.7 1.2 1.4 0 .8-.5 1.4-1.2 1.4-.6 0-1.2-.6-1.2-1.4zM.6 0S0 0 0 .7v2.2s0 .7.6.7.8.9.8.9v1.9h1.7V4.5s.1-.9.7-.9c.7 0 .7-.7.7-.7V.7c0-.6-.6-.7-.6-.7H.6z"
        transform="translate(542.292 278.42)"
      />
      <path
        fill="url(#n)"
        d="M1.5 0v3.2c0 .2-.1.3-.2.3H.2c-.1 0-.2-.1-.2-.3V0h1.5z"
        transform="translate(543.77 284.81)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(543.075 284.845)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(543.075 286.606)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(545.237 284.845)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(545.237 286.606)"
      />
      <path
        fill="url(#k)"
        d="M.5 0h.3c.3 0 .5.2.5.5v10.1c0 .2-.2.5-.5.5H.5c-.3 0-.5-.3-.5-.5V.5C0 .2.2 0 .5 0z"
        transform="translate(550.428 278.295)"
      />
      <path
        fill="url(#k)"
        d="M.5 0h.3c.3 0 .5.2.5.5v10.1c0 .2-.2.5-.5.5H.5c-.3 0-.5-.3-.5-.5V.5C0 .2.2 0 .5 0z"
        transform="translate(517.123 278.351)"
      />
      <path
        fill="url(#l)"
        d="M0 0h6.8v1.3H0V0z"
        transform="translate(531.158 266.974)"
      />
      <path
        fill="url(#o)"
        d="M0 0h13.9v7.1H0V0z"
        transform="translate(527.598 260.014)"
      />
      <path
        fill="url(#p)"
        d="M0 1.7h13.9V0H0v1.7z"
        transform="translate(527.598 258.44)"
      />
      <path
        fill="#757263"
        d="M535.392 263.533c0-1.1.8-2 1.7-2 1 0 1.8.9 1.8 2s-.8 2-1.8 2c-.9 0-1.7-.9-1.7-2z"
      />
      <path
        fill="#edebdf"
        d="M535.525 263.586c0-1.1.7-1.9 1.6-1.9.9 0 1.6.8 1.6 1.9 0 1-.7 1.8-1.6 1.8-.9 0-1.6-.8-1.6-1.8z"
      />
      <path
        fill="#635d4f"
        d="M535.781 263.581c0-.9.6-1.6 1.4-1.6.7 0 1.3.7 1.3 1.6 0 .8-.6 1.5-1.3 1.5-.8 0-1.4-.7-1.4-1.5z"
      />
      <path
        stroke="#000"
        d="M536.013 263.548c0-.7.5-1.3 1.1-1.3.7 0 1.2.6 1.2 1.3 0 .7-.5 1.3-1.2 1.3-.6 0-1.1-.6-1.1-1.3z"
      />
      <path
        fill="#fff"
        fillOpacity={0.22}
        d="M536.275 262.72c.386-.459 1.154-.597 1.69-.147.537.45-.538.33-.988.867-.45.536-.082 1.498-.618 1.048-.537-.45-.534-1.231-.084-1.767z"
      />
      <path
        fill="#757263"
        d="M530.433 263.534c0-1.1.8-2 1.7-2 1 0 1.8.9 1.8 2s-.8 2-1.8 2c-.9 0-1.7-.9-1.7-2z"
      />
      <path
        fill="#edebdf"
        d="M530.565 263.587c0-1.1.7-1.9 1.6-1.9.9 0 1.6.8 1.6 1.9 0 1-.7 1.8-1.6 1.8-.9 0-1.6-.8-1.6-1.8z"
      />
      <path
        fill="#635d4f"
        d="M530.822 263.583c0-.9.6-1.6 1.4-1.6.7 0 1.3.7 1.3 1.6 0 .8-.6 1.5-1.3 1.5-.8 0-1.4-.7-1.4-1.5z"
      />
      <path
        stroke="#000"
        d="M531.053 263.549c0-.7.5-1.3 1.1-1.3.7 0 1.2.6 1.2 1.3 0 .7-.5 1.3-1.2 1.3-.6 0-1.1-.6-1.1-1.3z"
      />
      <path
        fill="#fff"
        fillOpacity={0.22}
        d="M531.316 262.722c.385-.46 1.154-.598 1.69-.148.536.45-.539.331-.989.867-.45.536-.081 1.498-.618 1.048-.536-.45-.533-1.23-.083-1.767z"
      />
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M588.741 278.775h10.4v-4.5l15.6 8.9-15.6 8.9v-4.4h-10.4v-8.9z"
      />
      <path fill="#fff" d="M621.228 265.273h75.6v27.8h-75.6v-27.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(621.228 265.273)"
      >
        <tspan
          x={13.8}
          y={19.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"To F301"}
        </tspan>
      </text>
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M467.774 420.344h107.7" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m584.274 420.344-10.4-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.4-6"
        />
      </g>
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M588.741 415.624h10.4v-4.5l15.6 8.9-15.6 8.9v-4.4h-10.4v-8.9z"
      />
      <path fill="#fff" d="M619.764 406.117h86.2v27.8h-86.2v-27.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(619.764 406.117)"
      >
        <tspan
          x={19.1}
          y={19.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"To F203"}
        </tspan>
      </text>
      <path
        fill="url(#q)"
        d="M.2 0h13.7c.1 0 .2.1.2.2v12.5c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(527.193 396.41)"
      />
      <path
        fill="url(#r)"
        d="M0 0h1v13.8H0V0z"
        transform="translate(533.77 425.232)"
      />
      <path
        fill="url(#s)"
        d="M0 0h4v.9H0V0z"
        transform="translate(532.268 409.205)"
      />
      <path
        fill="url(#r)"
        d="M0 0h2.9v8.7H0V0z"
        transform="translate(532.788 410.055)"
      />
      <path
        fill="url(#s)"
        d="M.2 0H14c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
        transform="translate(527.067 396.129)"
      />
      <path
        fill="url(#t)"
        d="M.2 0h9.9c.1 0 .2.1.2.2v4.3c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="translate(529.097 400.52)"
      />
      <path fill="#3e3938" d="M529.617 400.945h9.3v3.8h-9.3v-3.8z" />
      <path
        fill="url(#u)"
        d="M.1 0h14.1V1.5H.1c-.1 0-.1-.1-.1-.1V.1C0 0 0 0 .1 0z"
        transform="translate(527.144 407.803)"
      />
      <path
        fill="url(#v)"
        d="M0 0h199.6v429.7H0V0z"
        transform="translate(1406.523 134.789)"
      />
      <path
        fill="url(#v)"
        d="M100.4 0c96.8 0 99.2 35.4 99.2 35.4H0S3.6 0 100.4 0z"
        transform="translate(1406.523 100.408)"
      />
      <path
        fill="url(#v)"
        d="M100.4 0c96.8 0 99.2 21.1 99.2 21.1H0S3.6 0 100.4 0z"
        transform="matrix(1 0 0 -1 1406.523 599.062)"
      />
      <path
        fill="url(#w)"
        d="M.3 0h200.9c.3 0 .3.2.3.4v5.9c0 .2 0 .4-.3.4H.3c-.3 0-.3-.2-.3-.4V.4C0 .2 0 0 .3 0z"
        transform="translate(1405.56 565.476)"
      />
      <path
        fill="url(#w)"
        d="M.3 0h200.9c.3 0 .3.2.3.4v5.9c0 .2 0 .4-.3.4H.3c-.3 0-.3-.2-.3-.4V.4C0 .2 0 0 .3 0z"
        transform="translate(1405.56 571.584)"
      />
      <g fill="url(#x)" transform="translate(1406.523 184.037)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#y)" stroke="#ebebeb" transform="translate(270.738 339.087)">
        <path d="M4.926 132.938v120c0 6.7 4.6 12.2 10.2 12.2h163.2c5.6 0 10.1-5.5 10.1-12.2v-120H4.926zM190.075 119.084H3.375c-1.9 0-3.4 1.8-3.4 4s1.5 4.1 3.4 4.1h186.7c1.8 0 3.3-1.9 3.3-4.1 0-2.2-1.5-4-3.3-4z" />
        <path d="M4.926 126.35v5.6h183.5v-5.6H4.926z" />
      </g>
      <path
        fill="url(#z)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 375.619 666.928)"
      />
      <path
        fill="url(#A)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 375.907 675.93)"
      />
      <path
        fill="url(#B)"
        d="M10.5 0c0 .2-.2.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 525.695 150.195)"
      />
      <path
        fill="#fff"
        fillOpacity={0.35}
        d="M374.942 675.558v-9.9c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v9.9c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#C)"
        d="M0 0h14.8v2.3H0V0z"
        transform="translate(384.073 678.45)"
      />
      <path
        fill="url(#C)"
        stroke="#595959"
        d="M3.3 0h6.5l3.3 5.5H0L3.3 0z"
        transform="translate(384.91 673.122)"
      />
      <path
        fill="url(#z)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 391.9 655.974)"
      />
      <path
        fill="url(#D)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.4 0 9.7 0c5.4 0 9.8 3.7 9.8 8.3 0 4.6-4.4 8.3-9.8 8.3-5.3 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 399.793 675.4)"
      />
      <path
        fill="#fff"
        fillOpacity={0.27}
        d="M391.489 673.755c3.8 0 6.9-3.6 6.9-8.1s-3.1-8.1-6.9-8.1c-3.8 0-6.9 3.6-6.9 8.1s3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#9da6b0"
        stroke="#595959"
        strokeWidth={0.25}
        d="M391.46 662.749c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9s-2.5-1.3-2.5-2.9c0-1.6 1.1-2.9 2.5-2.9z"
      />
      <path
        fill="url(#E)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 -134.986 528.4)"
      />
      <path
        fill="url(#A)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 406.807 654.389)"
      />
      <path
        fill="url(#B)"
        d="M10.5 0c0 .2-.1.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 -123.607 530.821)"
      />
      <path
        fill="#fff"
        fillOpacity={0.35}
        d="M407.771 654.761v9.9c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-9.9c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path
        fill="url(#F)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 374.76 732.186)"
      />
      <path
        fill="url(#G)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 375.048 741.188)"
      />
      <path
        fill="url(#H)"
        d="M10.5 0c0 .2-.2.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 557.894 183.254)"
      />
      <path
        fill="#92d050"
        d="M374.083 740.816v-9.9c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v9.9c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#I)"
        d="M0 0h14.8v2.3H0V0z"
        transform="translate(383.214 743.709)"
      />
      <path
        fill="url(#I)"
        stroke="#595959"
        d="M3.3 0h6.5l3.3 5.5H0L3.3 0z"
        transform="translate(384.05 738.38)"
      />
      <path
        fill="url(#F)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 391.04 721.232)"
      />
      <path
        fill="url(#J)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.4 0 9.7 0c5.4 0 9.8 3.7 9.8 8.3 0 4.6-4.4 8.3-9.8 8.3-5.3 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 398.934 740.658)"
      />
      <path
        fill="#92d050"
        d="M390.63 739.013c3.8 0 6.9-3.6 6.9-8.1s-3.1-8.1-6.9-8.1c-3.8 0-6.9 3.6-6.9 8.1s3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#92d050"
        stroke="#595959"
        strokeWidth={0.25}
        d="M390.601 728.007c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9s-2.5-1.3-2.5-2.9c0-1.6 1.1-2.9 2.5-2.9z"
      />
      <path
        fill="url(#K)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 -168.045 560.6)"
      />
      <path
        fill="url(#G)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 405.948 719.647)"
      />
      <path
        fill="url(#H)"
        d="M10.5 0c0 .2-.1.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 -156.666 563.02)"
      />
      <path
        fill="#92d050"
        d="M406.912 720.02v9.9c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-9.9c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path
        fill="#ffc000"
        d="M358.314 668.185h15.9v5h-15.9v-5zM358.314 734.102h15.9v5h-15.9v-5z"
      />
      <path fill="#fff" d="M360.9 627.103h70.5v19.9h-70.5v-19.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(360.9 627.103)"
      >
        <tspan
          x={15.2}
          y={16}
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
        d="M358.313 601.717v137.4"
      />
      <path fill="#fff" d="M360.9 693.689h70.5v19.9h-70.5v-19.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(360.9 693.689)"
      >
        <tspan
          x={15.2}
          y={16}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G307B"}
        </tspan>
      </text>
      <g fill="url(#x)" transform="translate(1406.523 224.723)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1406.523 268.668)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1406.523 314.61)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1406.523 366.544)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1406.523 415.482)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1406.523 463.42)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1406.523 509.362)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1657.55 195.779h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1605.95 195.779 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1657.55 195.779v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1657.55 236.727h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1605.95 236.727 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1657.55 236.644v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1657.55 280.588h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1605.95 280.588 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1657.55 280.671v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1657.55 326.613h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1605.95 326.613 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1657.55 200.721v292.6" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1657.55 378.547h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1605.95 378.547 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1657.55 378.547v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1657.55 427.485h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1605.95 427.485 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1657.55 427.402v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1657.55 476.34h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1605.95 476.34 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1657.55 476.423v203.7" />
      <path
        fill="url(#q)"
        d="M.3 0h15.8c.2 0 .3.1.3.2v10.7c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 556.745 1070.247)"
      />
      <path
        fill="url(#r)"
        d="M0 0h1.1v11.9H0V0z"
        transform="rotate(90 540.524 1061.671)"
      />
      <path
        fill="url(#s)"
        d="M0 0h4.6v.7H0V0z"
        transform="rotate(90 548.291 1067.692)"
      />
      <path
        fill="url(#r)"
        d="M0 0h3.4v7.5H0V0z"
        transform="rotate(90 547.623 1067.629)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h16c.1 0 .3.1.3.2v.2c0 .1-.2.2-.3.2H.3C.1.6 0 .5 0 .4V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 556.939 1070.295)"
      />
      <path
        fill="url(#t)"
        d="M.3 0h11.4c.2 0 .3.1.3.2v3.6c0 .1-.1.2-.3.2H.3C.1 4 0 3.9 0 3.8V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 553.87 1069.586)"
      />
      <path fill="#3e3938" d="M1623.09 516.32v10.8h-3.3v-10.8h3.3z" />
      <path
        fill="url(#u)"
        d="M.1 0h16.4v1.3H.1c-.1 0-.1-.1-.1-.1V0h.1z"
        transform="rotate(90 551.872 1065.318)"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1719.702 523.508h90.3v17.8h-90.3v-17.8z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1719.702 523.508)"
      >
        <tspan
          x={13.2}
          y={14.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
        {`${value['TR303']} \xB0C`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1719.702 503.389h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1719.702 503.389)"
      >
        <tspan
          x={25.7}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TR303"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M1715.986 500.341h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="none"
        stroke="#236ea1"
        strokeDasharray="4,10"
        strokeWidth={2}
        d="M1630.91 521.315h80.8"
      />
      <path
        fill="url(#q)"
        d="M.3 0h15.8c.2 0 .3.1.3.2v10.7c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 735.162 891.82)"
      />
      <path
        fill="url(#r)"
        d="M0 0h1.1v11.9H0V0z"
        transform="rotate(90 718.941 883.244)"
      />
      <path
        fill="url(#s)"
        d="M0 0h4.6v.7H0V0z"
        transform="rotate(90 726.708 889.265)"
      />
      <path
        fill="url(#r)"
        d="M0 0h3.4v7.5H0V0z"
        transform="rotate(90 726.04 889.202)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h16c.1 0 .3.1.3.2v.2c0 .1-.2.2-.3.2H.3C.1.6 0 .5 0 .4V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 735.356 891.868)"
      />
      <path
        fill="url(#t)"
        d="M.3 0h11.4c.2 0 .3.1.3.2v3.6c0 .1-.1.2-.3.2H.3C.1 4 0 3.9 0 3.8V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 732.287 891.159)"
      />
      <path fill="#3e3938" d="M1623.08 159.476v10.8h-3.3v-10.8h3.3z" />
      <path
        fill="url(#u)"
        d="M.1 0h16.4v1.3H.1c-.1 0-.1-.1-.1-.1V0h.1z"
        transform="rotate(90 730.289 886.891)"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1719.692 166.663h90.3v17.8h-90.3v-17.8z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1719.692 166.663)"
      >
        <tspan
          x={13.2}
          y={14.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
        {`${value['TR302']} \xB0C`}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M1715.976 143.497h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1719.692 146.544h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1719.692 146.544)"
      >
        <tspan
          x={25.7}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TR302"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#236ea1"
        strokeDasharray="4,10"
        strokeWidth={2}
        d="M1630.91 164.47h80.8"
      />
      <path
        fill="red"
        stroke="red"
        d="M1653.045 709.75v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M1599 713.88h115v29.2h-115v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1599 713.88)"
      >
        <tspan
          x={31.5}
          y={20.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Steam In"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M405.622 725.056h90.2M406.481 659.14h396.1"
      />
      <path
        fill="url(#L)"
        d="M0 0h37.6v14.2H0V0z"
        transform="translate(602.59 650.369)"
      />
      <path
        fill="url(#M)"
        d="M.3 0h22.4c.2 0 .3.1.3.3v19c0 .1-.1.3-.3.3H.3c-.2 0-.3-.2-.3-.3V.3C0 .1.1 0 .3 0z"
        transform="translate(609.908 618.474)"
      />
      <path
        fill="#b4b5b5"
        d="M610.945 619.555h20.9c.1 0 .2.1.2.3v16.8c0 .2-.1.3-.2.3h-20.9c-.1 0-.2-.1-.2-.3v-16.8c0-.2.1-.3.2-.3z"
      />
      <path fill="#92d050" d="M611.41 620.45h20v15.6h-20v-15.6z" />
      <path
        fill="url(#N)"
        d="M0 0h5.4v12.8s0 .8-2.7.8c-2.6 0-2.7-.8-2.7-.8V0z"
        transform="translate(618.7 637.953)"
      />
      <path
        fill="url(#L)"
        d="M.5 0h1.3c.3 0 .5.3.5.6V20c0 .4-.2.6-.5.6H.5c-.3 0-.5-.2-.5-.6V.6C0 .3.2 0 .5 0z"
        transform="translate(605.425 647.16)"
      />
      <path
        fill="url(#L)"
        d="M.5 0h1.3c.3 0 .5.3.5.6V20c0 .4-.2.6-.5.6H.5c-.3 0-.5-.2-.5-.6V.6C0 .3.2 0 .5 0z"
        transform="translate(635.082 647.16)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.5v14.2H0V0z"
        transform="translate(607.732 650.385)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.5v14.2H0V0z"
        transform="translate(634.556 650.385)"
      />
      <path
        fill="url(#P)"
        d="M0 0h25v3.6H0V0z"
        transform="translate(608.906 626.451)"
      />
      <path
        fill="url(#N)"
        d="M0 0h2.6v1.5H0V0z"
        transform="translate(612.39 617.015)"
      />
      <path
        fill="url(#N)"
        d="M0 0h1.3v1.5H0V0z"
        transform="translate(613.044 615.619)"
      />
      <path
        fill="url(#L)"
        d="M0 0h1v3.6H0V0z"
        transform="translate(608.906 632.452)"
      />
      <path
        fill="url(#L)"
        d="M0 0h10.4v1.2H0V0z"
        transform="translate(598.579 633.647)"
      />
      <path
        fill="url(#L)"
        d="M0 0h11.8v1.1H0V0z"
        transform="matrix(0 -1 -1 0 598.168 647.314)"
      />
      <path
        fill="url(#Q)"
        d="M0 0s.8 0 1.2.5c.3.5.3 1.4.3 1.4H.4s0-.5-.4-.7V0z"
        transform="matrix(-1 0 0 1 598.582 633.647)"
      />
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M495.844 725.056v-67.9M802.597 659.14v-483.4"
      />
      <g stroke="#ffc000">
        <path fill="none" strokeWidth={4} d="M802.597 175.753h586.8" />
        <path
          fill="#ffc000"
          strokeLinecap="round"
          d="m1389.397 169.753 12 6-12 6v-12"
        />
      </g>
      <path
        fill="url(#L)"
        d="M0 0h43.7v12.2H0V0z"
        transform="rotate(90 527.387 1136.969)"
      />
      <path
        fill="url(#M)"
        d="M.3 0h26.1c.2 0 .3.1.3.3v16.3c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.3C0 .1.1 0 .3 0z"
        transform="rotate(90 536.853 1154.942)"
      />
      <path
        fill="#b4b5b5"
        d="M1690.865 619.362v24.2c0 .2-.1.3-.2.3h-14.5c-.2 0-.3-.1-.3-.3v-24.2c0-.2.1-.3.3-.3h14.5c.1 0 .2.1.2.3z"
      />
      <path fill="#92d050" d="M1690.096 619.834v23.2h-13.4v-23.2h13.4z" />
      <path
        fill="url(#N)"
        d="M0 0h6.3v11s-.1.7-3.1.7C.1 11.7 0 11 0 11V0z"
        transform="rotate(90 523.364 1151.673)"
      />
      <path
        fill="url(#L)"
        d="M.6 0h1.5c.3 0 .6.2.6.5v16.7c0 .3-.3.5-.6.5H.6c-.3 0-.6-.2-.6-.5V.5C0 .2.3 0 .6 0z"
        transform="rotate(90 527.119 1139.996)"
      />
      <path
        fill="url(#L)"
        d="M.6 0h1.5c.3 0 .6.2.6.5v16.7c0 .3-.3.5-.6.5H.6c-.3 0-.6-.2-.6-.5V.5C0 .2.3 0 .6 0z"
        transform="rotate(90 509.883 1157.232)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.6v12.2H0V0z"
        transform="rotate(90 524.39 1139.95)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.6v12.2H0V0z"
        transform="rotate(90 508.802 1155.54)"
      />
      <path
        fill="url(#P)"
        d="M0 0h29.1v3.1H0V0z"
        transform="rotate(90 534.005 1150.928)"
      />
      <path
        fill="url(#N)"
        d="M0 0h3.1v1.3H0V0z"
        transform="rotate(90 536.039 1157.012)"
      />
      <path
        fill="url(#N)"
        d="M0 0h1.5v1.3H0V0z"
        transform="rotate(90 536.26 1157.993)"
      />
      <path
        fill="url(#L)"
        d="M0 0h1.2v3.1H0V0z"
        transform="rotate(90 531.423 1148.347)"
      />
      <path
        fill="url(#L)"
        d="M0 0h12.1v1.1H0V0z"
        transform="rotate(90 536.91 1141.831)"
      />
      <path
        fill="url(#L)"
        d="M0 0h10.2v1.2H0V0z"
        transform="matrix(1 0 0 -1 1666.983 604.443)"
      />
      <path
        fill="url(#Q)"
        d="M0 0s.9 0 1.4.5c.4.4.3 1.1.3 1.1H.5s0-.4-.5-.6V0z"
        transform="matrix(0 -1 -1 0 1678.742 604.924)"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1699.081 621.414h71.9v18.6h-71.9v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1699.081 621.414)"
      >
        <tspan
          x={16.5}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"KV339"}
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
        transform="translate(1458.264 135.944)"
      >
        <tspan
          x={33}
          y={20.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"D302"}
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
        transform="translate(318.226 135.944)"
      >
        <tspan
          x={33}
          y={20.6}
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
        d="M459.755 572.25h162.4M621.294 572.25l.86 48.892"
      />
      <path
        fill="#c2c2c2"
        stroke="#868686"
        strokeWidth={2}
        d="M1495.562 173.605h28.4v387.5h-28.4v-387.5z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        d="m1520.737 539.674-11 13.6-11-13.6M1520.737 290.957l-11 13.6-11-13.6"
      />
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={4} d="M473.473 524.311h321.4" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m473.473 530.311-12-6 12-6v12"
        />
      </g>
      <path
        fill="none"
        stroke="#236ea1"
        strokeWidth={4}
        d="M807.752 525.31h471.6"
      />
      <path
        fill="#ffc37c"
        stroke="#868686"
        d="M605.798 502.812c0-5.8 5.4-10.5 12.2-10.5 6.7 0 12.1 4.7 12.1 10.5 0 5.9-5.4 10.6-12.1 10.6-6.8 0-12.2-4.7-12.2-10.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "10pt",
        }}
        transform="translate(605.798 492.312)"
      >
        <tspan
          x={5.2}
          y={15.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"PS"}
        </tspan>
      </text>
      <path
        fill="url(#s)"
        d="M0 0h5.7v1.2H0V0z"
        transform="translate(614.408 510.18)"
      />
      <path
        fill="url(#r)"
        d="M0 0h4.2v10.6H0V0z"
        transform="translate(615.148 511.342)"
      />
      <path
        fill="red"
        stroke="#3c5c74"
        d="M607.214 508.264h20.1s.1 0 .1.1v1.8c0 .1-.1.1-.1.1h-20.1c-.1 0-.1 0-.1-.1v-1.8c0-.1 0-.1.1-.1z"
      />
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M570.321 440.17h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M573.181 464.333h90.3v19.2h-90.3v-19.2z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(573.181 464.333)"
      >
        <tspan
          x={10.7}
          y={15.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
        {`${value['PIRAH302']} bar`}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M573.181 444.215h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(573.181 444.215)"
      >
        <tspan
          x={16.7}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"PIRAH302"}
        </tspan>
      </text>
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={4} d="M478.629 332.554h321.4" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m478.629 338.554-12-6 12-6v12"
        />
      </g>
      <path
        fill="none"
        stroke="#236ea1"
        strokeWidth={4}
        d="M808.611 332.554h465.6"
      />
      <path
        fill="none"
        stroke="#0070c0"
        strokeWidth={4}
        d="M1274.32 333.553v-150.8M1273.46 34.932h235.4M1508.9 33.933v65.9M1274.32 171.758v-138.8"
      />
      <path
        fill="none"
        stroke="#527294"
        strokeWidth={2.667}
        d="M1513.19 307.586h353.2M1866.35 307.586v415.5M1510.17 561.113h356.2"
      />
      <path
        fill="red"
        stroke="red"
        d="M1870.785 728.097v7.6h4.5l-8.9 11.3-9-11.3h4.5v-7.6h8.9z"
      />
      <path fill="#fff" d="M1781.877 756.556h122v53.1h-122v-53.1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1781.877 756.556)"
      >
        <tspan
          x={35}
          y={22.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"To F203 "}
        </tspan>
        <tspan
          x={30.5}
          y={42.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Splash Oil"}
        </tspan>
      </text>
      <path
        fill="url(#R)"
        d="M64.9 0s-.5 14.1-32.5 14.1C.3 14.1 0 0 0 0h64.9z"
        transform="matrix(0 -1 -1 0 429.917 1005.576)"
      />
      <path
        fill="url(#R)"
        d="M64.9 0s-.5 14.1-32.5 14.1C.3 14.1 0 0 0 0h64.9z"
        transform="rotate(-90 772.74 232.837)"
      />
      <path
        fill="url(#R)"
        d="M0 0h65v109.9H0V0z"
        transform="rotate(-90 717.718 287.868)"
      />
      <path
        fill="url(#S)"
        d="M0 0h65v.7H0V0z"
        transform="rotate(-90 717.762 287.854)"
      />
      <path
        fill="url(#S)"
        d="M0 0h65v.7H0V0z"
        transform="rotate(-90 772.592 233.023)"
      />
      <path
        fill="url(#T)"
        d="M1.5 0h2.9c.8 0 1.5.8 1.5 1.8v61.4c0 1-.7 1.8-1.5 1.8H1.5C.7 65 0 64.2 0 63.2V1.8C0 .8.7 0 1.5 0z"
        transform="translate(435.97 940.674)"
      />
      <path
        fill="url(#U)"
        d="M.9 0h1.6c.5 0 .9.8.9 1.8v61.4c0 1-.4 1.8-.9 1.8H.9c-.5 0-.9-.8-.9-1.8V1.8C0 .8.4 0 .9 0z"
        transform="translate(437.223 940.674)"
      />
      <path
        fill="url(#T)"
        d="M1.5 0h2.9c.8 0 1.5.8 1.5 1.8v61.4c0 1-.7 1.8-1.5 1.8H1.5C.7 65 0 64.2 0 63.2V1.8C0 .8.7 0 1.5 0z"
        transform="translate(482.02 940.674)"
      />
      <path
        fill="url(#U)"
        d="M.9 0h1.6c.5 0 .9.8.9 1.8v61.4c0 1-.4 1.8-.9 1.8H.9c-.5 0-.9-.8-.9-1.8V1.8C0 .8.4 0 .9 0z"
        transform="translate(483.274 940.674)"
      />
      <path
        fill="url(#T)"
        d="M1.5 0h2.9c.8 0 1.5.8 1.5 1.8v61.4c0 1-.7 1.8-1.5 1.8H1.5C.7 65 0 64.2 0 63.2V1.8C0 .8.7 0 1.5 0z"
        transform="translate(528.07 940.674)"
      />
      <path
        fill="url(#U)"
        d="M.9 0h1.6c.5 0 .9.8.9 1.8v61.4c0 1-.4 1.8-.9 1.8H.9c-.5 0-.9-.8-.9-1.8V1.8C0 .8.4 0 .9 0z"
        transform="translate(529.324 940.674)"
      />
      <path
        fill="url(#R)"
        d="M0 7.8s.2 3.6 11.4 3.6C22.6 11.4 23 7.8 23 7.8V0H0v7.8z"
        transform="translate(449.3 933.532)"
      />
      <path
        fill="url(#R)"
        d="M.6 0H25c.4 0 .7.3.7.7v1.9c0 .4-.3.7-.7.7H.6C.3 3.3 0 3 0 2.6V.7C0 .3.3 0 .6 0z"
        transform="translate(447.967 930.796)"
      />
      <path
        fill="url(#S)"
        d="M0 1.7h23V0H0v1.7z"
        transform="translate(449.3 933.532)"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
          fontWeight: 700,
        }}
        transform="translate(439.362 960.163)"
      >
        <tspan
          x={33}
          y={20.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E306"}
        </tspan>
      </text>
      <path
        fill="#0070c0"
        stroke="#0070c0"
        d="M456.667 924.15v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M313.996 900.117h130.6v29.2h-130.6v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(313.996 900.117)"
      >
        <tspan
          x={23.3}
          y={20.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Cooling Water"}
        </tspan>
      </text>
      <path
        fill="#0070c0"
        stroke="#0070c0"
        d="M443.51 1021.62v7.6h4.5l-8.9 11.3-9-11.3h4.5v-7.6h8.9z"
      />
      <path
        fill="url(#R)"
        d="M0 7.8s.2 3.6 11.4 3.6C22.6 11.4 23 7.8 23 7.8V0H0v7.8z"
        transform="rotate(180 225.254 507.348)"
      />
      <path fill="#fff" d="M295.995 1016.64h130.6v29.2h-130.6v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(295.995 1016.64)"
      >
        <tspan
          x={23.3}
          y={20.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Cooling Water"}
        </tspan>
      </text>
      <path
        fill="url(#V)"
        d="M0 6.7h71.3V0H0v6.7z"
        transform="translate(1235.545 730.758)"
      />
      <path
        fill="url(#W)"
        d="M0 1.7h71.3V0H0v1.7z"
        transform="translate(1235.545 735.807)"
      />
      <path
        fill="url(#V)"
        d="M0 6.7h71.3V0H0v6.7z"
        transform="translate(1235.545 828.73)"
      />
      <path
        fill="url(#W)"
        d="M0 1.9h71.3V0H0v1.9z"
        transform="translate(1235.545 828.6)"
      />
      <path
        fill="url(#V)"
        d="M6.9 0h71.8c3.8 0 6.9 3 6.9 6.6v78.2c0 3.7-3.1 6.6-6.9 6.6H6.9c-3.8 0-6.9-2.9-6.9-6.6V6.6C0 3 3.1 0 6.9 0z"
        transform="translate(1228.39 737.411)"
      />
      <path
        fill="url(#X)"
        d="M0 0h62.4v54.4H0V0z"
        transform="matrix(0 1 1 0 1246.862 658.752)"
      />
      <path
        fill="url(#X)"
        d="M0 0h16.1v54.5H0V0z"
        transform="matrix(0 1 1 0 1246.862 642.698)"
      />
      <path
        fill="url(#X)"
        d="M12.6 0v54.5S0 54.5 0 27.4 12.6 0 12.6 0z"
        transform="matrix(0 1 1 0 1246.862 630.21)"
      />
      <path
        fill="url(#Y)"
        d="M0 0h1.4v54.5H0V0z"
        transform="matrix(0 1 1 0 1246.862 643.134)"
      />
      <path
        fill="url(#Y)"
        d="M0 0h1.3v53.5H0V0z"
        transform="matrix(0 1 1 0 1246.834 718.91)"
      />
      <path
        fill="url(#Z)"
        d="M0 0h27v11.8H0V0z"
        transform="matrix(0 1 1 0 1267.68 726.323)"
      />
      <g fill="url(#X)" transform="matrix(0 1 1 0 1248.493 658.753)">
        <path d="M0 3.84h56.2v1.6H0v-1.6zM0 11.52h56.2v1.6H0v-1.6zM0 15.361h56.2v1.6H0v-1.6zM0 19.201h56.2v1.6H0v-1.6zM0 23.042h56.2v1.6H0v-1.6zM0 27.41h56.2v1.6H0v-1.6zM0 30.933h56.2v1.6H0v-1.6zM0 34.457h56.2v1.6H0v-1.6zM0 37.981h56.2v1.6H0v-1.6zM0 42.243h56.2v1.6H0v-1.6zM0 46.084h56.2v1.6H0v-1.6zM0 49.924h56.2v1.6H0v-1.6zM0 0h56.2v1.6H0V0zM0 7.68h56.2v1.6H0v-1.6z" />
      </g>
      <path
        fill="url(#X)"
        d="M0 0h4.8c.8 0 1.6.6 1.6 1.4V53c0 .8-.8 1.4-1.6 1.4H0V0z"
        transform="matrix(0 1 1 0 1246.862 719.935)"
      />
      <path
        fill="url(#Z)"
        d="M0 0h3.3v25H0V0z"
        transform="matrix(0 1 1 0 1261.083 726.323)"
      />
      <path
        fill="url(#X)"
        d="M0 0h2.6v3.6H0V0z"
        transform="matrix(0 1 1 0 1248.492 726.147)"
      />
      <path
        fill="url(#X)"
        d="M0 0h2.6v3.6H0V0z"
        transform="matrix(0 1 1 0 1264.444 726.147)"
      />
      <path
        fill="url(#X)"
        d="M0 0h2.6v3.6H0V0z"
        transform="matrix(0 1 1 0 1280.396 726.147)"
      />
      <path
        fill="url(#X)"
        d="M0 0h2.6v3.6H0V0z"
        transform="matrix(0 1 1 0 1296.347 726.147)"
      />
      <path
        fill="url(#aa)"
        d="M0 15.7h29.4V0H0v15.7z"
        transform="matrix(0 1 1 0 1234.599 685.945)"
      />
      <path
        fill="url(#ab)"
        d="M0 1.1h29.4V0H0v1.1z"
        transform="matrix(0 1 1 0 1240.329 685.945)"
      />
      <path
        fill="url(#aa)"
        d="M33.2 0v7.1c0 .7-.7 1.3-1.6 1.3h-30C.7 8.4 0 7.8 0 7.1V0h33.2z"
        transform="matrix(0 1 1 0 1232.172 684.043)"
      />
      <path
        fill="url(#ac)"
        d="M1.3 0h33.3c.7 0 1.3.5 1.3 1.1 0 .7-.6 1.2-1.3 1.2H1.3C.6 2.3 0 1.8 0 1.1 0 .5.6 0 1.3 0z"
        transform="matrix(0 1 1 0 1230.117 682.933)"
      />
      <path
        fill="url(#ac)"
        d="M1.3 0h33.3c.7 0 1.3.5 1.3 1.1 0 .7-.6 1.2-1.3 1.2H1.3C.6 2.3 0 1.8 0 1.1 0 .5.6 0 1.3 0z"
        transform="matrix(0 1 1 0 1227.925 682.933)"
      />
      <path
        fill="url(#aa)"
        d="M33.2 0v3.7c0 .4-.7.7-1.6.7h-30C.7 4.4 0 4.1 0 3.7V0h33.2z"
        transform="rotate(90 271.822 956.103)"
      />
      <path fill="#98bcdf" d="M1297.44 660.754v53.8h3.6v-53.8h-3.6z" />
      <path fill="#6f9fce" d="M1301.345 660.754v53.8h7.8v-53.8h-7.8z" />
      <path fill="#91b7dd" d="M1307.671 660.754v53.8h2.9v-53.8h-2.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
          fontWeight: 700,
        }}
        transform="translate(1236.408 777.216)"
      >
        <tspan
          x={17.2}
          y={20.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"E302"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M1407.51 553.274h-44.7M1362.83 553.274v112.9M1362.83 665.132h146.1M1508.9 666.131v-65.9"
      />
      <g stroke="#ffc000">
        <path fill="none" strokeWidth={4} d="M1362.83 643.16h-49" />
        <path
          fill="#ffc000"
          strokeLinecap="round"
          d="m1313.83 649.16-12-6 12-6v12"
        />
      </g>
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M1245.72 652.325h-44.7M1201.04 652.325v-38M1300.1 723.059h180.4M1478.82 723.059v254.7"
      />
      <path
        fill="#ffc000"
        stroke="#ffc000"
        d="M1196.925 605.59v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M1154.803 556.64h96.1v29.2h-96.1v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1154.803 556.64)"
      >
        <tspan
          x={23.5}
          y={20.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"To E303"}
        </tspan>
      </text>
      <path
        fill="#ee7c31"
        stroke="#ffc000"
        d="M1473.905 1002.382v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M1426 1010.696h115v46.9h-115v-46.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1426 1010.696)"
      >
        <tspan
          x={25.5}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"From G301 "}
        </tspan>
        <tspan
          x={21.5}
          y={39.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Bleached Oil"}
        </tspan>
      </text>
      <g stroke="#0070c0">
        <path fill="none" strokeWidth={4} d="M1277.76 629.178v-93.1" />
        <path
          fill="#0070c0"
          strokeLinecap="round"
          d="m1277.76 527.278-6 10.4c1.8-1 3.8-1.6 6-1.6s4.2.6 6 1.6l-6-10.4"
        />
      </g>
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1366.64 771.997h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1315.14 771.997 7.3-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.3-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1366.64 772.08v203.7" />
      <path
        fill="red"
        stroke="red"
        d="M1362.125 1005.408v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M1318.694 1009.54h96.1v29.2h-96.1v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1318.694 1009.54)"
      >
        <tspan
          x={22}
          y={20.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Steam In"}
        </tspan>
      </text>
      <path
        fill="url(#z)"
        d="M0 0h7.4v15H0V0z"
        transform="rotate(90 180.707 1076.216)"
      />
      <path
        fill="url(#A)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="rotate(-90 1080.573 -176.061)"
      />
      <path
        fill="url(#B)"
        d="M10.5 0c0 .2-.2.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="matrix(0 -1 -1 0 1257.041 904.471)"
      />
      <path
        fill="#fff"
        fillOpacity={0.35}
        d="M1257.599 904.139v-9.9c0-.1.1-.1.1-.1.1 0 .1 0 .1.1v9.9c0 .1 0 .2-.1.2 0 0-.1-.1-.1-.2z"
      />
      <path
        fill="url(#C)"
        d="M0 0h14.8v2.3H0V0z"
        transform="matrix(-1 0 0 1 1248.468 907.032)"
      />
      <path
        fill="url(#C)"
        stroke="#595959"
        d="M3.3 0h6.5l3.3 5.5H0L3.3 0z"
        transform="matrix(-1 0 0 1 1247.631 901.703)"
      />
      <path
        fill="url(#z)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="rotate(90 178.043 1062.598)"
      />
      <path
        fill="url(#D)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.4 0 9.7 0c5.4 0 9.8 3.7 9.8 8.3 0 4.6-4.4 8.3-9.8 8.3-5.3 0-9.7-3.7-9.7-8.3z"
        transform="rotate(-90 1068.365 -164.384)"
      />
      <path
        fill="#fff"
        fillOpacity={0.27}
        d="M1241.052 902.336c-3.8 0-6.9-3.6-6.9-8.1s3.1-8.1 6.9-8.1c3.8 0 6.9 3.6 6.9 8.1s-3.1 8.1-6.9 8.1z"
      />
      <path
        fill="#9da6b0"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1241.081 891.33c-1.4 0-2.5 1.3-2.5 2.9 0 1.6 1.1 2.9 2.5 2.9s2.5-1.3 2.5-2.9c0-1.6-1.1-2.9-2.5-2.9z"
      />
      <path
        fill="url(#E)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="matrix(0 1 1 0 1239.127 891.967)"
      />
      <path
        fill="url(#A)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="rotate(90 171.382 1054.352)"
      />
      <path
        fill="url(#B)"
        d="M10.5 0c0 .2-.1.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="matrix(0 1 1 0 1225.327 883.01)"
      />
      <path
        fill="#fff"
        fillOpacity={0.35}
        d="M1224.77 883.342v9.9c0 .1-.1.1-.1.1-.1 0-.1 0-.1-.1v-9.9c0-.1 0-.2.1-.2 0 0 .1.1.1.2z"
      />
      <path
        fill="url(#F)"
        d="M0 0h7.4v15H0V0z"
        transform="rotate(90 147.648 1108.414)"
      />
      <path
        fill="url(#G)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="rotate(-90 1112.771 -143.003)"
      />
      <path
        fill="url(#H)"
        d="M10.5 0c0 .2-.2.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="matrix(0 -1 -1 0 1256.181 969.728)"
      />
      <path
        fill="#92d050"
        d="M1256.739 969.396v-9.9c0-.1.1-.1.1-.1.1 0 .1 0 .1.1v9.9c0 .1 0 .2-.1.2 0 0-.1-.1-.1-.2z"
      />
      <path
        fill="url(#I)"
        d="M0 0h14.8v2.3H0V0z"
        transform="matrix(-1 0 0 1 1247.608 972.289)"
      />
      <path
        fill="url(#I)"
        stroke="#595959"
        d="M3.3 0h6.5l3.3 5.5H0L3.3 0z"
        transform="matrix(-1 0 0 1 1246.771 966.96)"
      />
      <path
        fill="url(#F)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="rotate(90 144.985 1094.797)"
      />
      <path
        fill="url(#J)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.4 0 9.7 0c5.4 0 9.8 3.7 9.8 8.3 0 4.6-4.4 8.3-9.8 8.3-5.3 0-9.7-3.7-9.7-8.3z"
        transform="rotate(-90 1100.563 -131.325)"
      />
      <path
        fill="#92d050"
        d="M1240.192 967.593c-3.8 0-6.9-3.6-6.9-8.1s3.1-8.1 6.9-8.1c3.8 0 6.9 3.6 6.9 8.1s-3.1 8.1-6.9 8.1z"
      />
      <path
        fill="#92d050"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1240.221 956.587c-1.4 0-2.5 1.3-2.5 2.9 0 1.6 1.1 2.9 2.5 2.9s2.5-1.3 2.5-2.9c0-1.6-1.1-2.9-2.5-2.9z"
      />
      <path
        fill="url(#K)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="matrix(0 1 1 0 1238.267 957.224)"
      />
      <path
        fill="url(#G)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="rotate(90 138.324 1086.55)"
      />
      <path
        fill="url(#H)"
        d="M10.5 0c0 .2-.1.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="matrix(0 1 1 0 1224.467 948.267)"
      />
      <path
        fill="#92d050"
        d="M1223.91 948.6v9.9c0 .1-.1.1-.1.1-.1 0-.1 0-.1-.1v-9.9c0-.1 0-.2.1-.2 0 0 .1.1.1.2z"
      />
      <path
        fill="#ffc000"
        d="M1273.898 896.765h-15.9v5h15.9v-5zM1273.898 962.682h-15.9v5h15.9v-5z"
      />
      <path fill="#fff" d="M1238.07 860.748h-70.5v19.9h70.5v-19.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1167.57 860.748)"
      >
        <tspan
          x={15.2}
          y={16}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G302A"}
        </tspan>
      </text>
      <path fill="#fff" d="M1238.07 927.334h-70.5v19.9h70.5v-19.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1167.57 927.334)"
      >
        <tspan
          x={15.2}
          y={16}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"G302B"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M1273.03 968.747v-139M1224.41 887.85h-898.7M1224.41 952.767h-426.1M798.3 952.767v-65.9"
      />
      <path
        fill="url(#L)"
        d="M0 0h37.6v14.2H0V0z"
        transform="translate(644.408 880.52)"
      />
      <path
        fill="url(#M)"
        d="M.3 0h22.4c.2 0 .3.1.3.3v19c0 .1-.1.3-.3.3H.3c-.2 0-.3-.2-.3-.3V.3C0 .1.1 0 .3 0z"
        transform="translate(651.726 848.625)"
      />
      <path
        fill="#b4b5b5"
        d="M652.763 849.706h20.9c.1 0 .2.1.2.3v16.8c0 .2-.1.3-.2.3h-20.9c-.1 0-.2-.1-.2-.3v-16.8c0-.2.1-.3.2-.3z"
      />
      <path fill="#92d050" d="M653.228 850.601h20v15.6h-20v-15.6z" />
      <path
        fill="url(#N)"
        d="M0 0h5.4v12.8s0 .8-2.7.8c-2.6 0-2.7-.8-2.7-.8V0z"
        transform="translate(660.519 868.104)"
      />
      <path
        fill="url(#L)"
        d="M.5 0h1.3c.3 0 .5.3.5.6V20c0 .4-.2.6-.5.6H.5c-.3 0-.5-.2-.5-.6V.6C0 .3.2 0 .5 0z"
        transform="translate(647.243 877.312)"
      />
      <path
        fill="url(#L)"
        d="M.5 0h1.3c.3 0 .5.3.5.6V20c0 .4-.2.6-.5.6H.5c-.3 0-.5-.2-.5-.6V.6C0 .3.2 0 .5 0z"
        transform="translate(676.9 877.312)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.5v14.2H0V0z"
        transform="translate(649.55 880.536)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.5v14.2H0V0z"
        transform="translate(676.374 880.536)"
      />
      <path
        fill="url(#P)"
        d="M0 0h25v3.6H0V0z"
        transform="translate(650.724 856.602)"
      />
      <path
        fill="url(#N)"
        d="M0 0h2.6v1.5H0V0z"
        transform="translate(654.208 847.166)"
      />
      <path
        fill="url(#N)"
        d="M0 0h1.3v1.5H0V0z"
        transform="translate(654.862 845.77)"
      />
      <path
        fill="url(#L)"
        d="M0 0h1v3.6H0V0z"
        transform="translate(650.724 862.603)"
      />
      <path
        fill="url(#L)"
        d="M0 0h10.4v1.2H0V0z"
        transform="translate(640.397 863.798)"
      />
      <path
        fill="url(#L)"
        d="M0 0h11.8v1.1H0V0z"
        transform="matrix(0 -1 -1 0 639.986 877.465)"
      />
      <path
        fill="url(#Q)"
        d="M0 0s.8 0 1.2.5c.3.5.3 1.4.3 1.4H.4s0-.5-.4-.7V0z"
        transform="matrix(-1 0 0 1 640.4 863.798)"
      />
      <path
        fill="none"
        stroke="#0070c0"
        strokeDasharray="4,10"
        strokeWidth={2}
        d="m663.111 802.401.858 48.892"
      />
      <path
        fill="none"
        stroke="#236ea1"
        strokeDasharray="4,10"
        strokeWidth={2}
        d="M663.111 802.401h562.9"
      />
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M573.176 887.85v160.8M573.176 1047.646h-44.7"
      />
      <g stroke="#ffc000">
        <path fill="none" strokeWidth={4} d="M528.495 1048.646v-30.9" />
        <path
          fill="#ffc000"
          strokeLinecap="round"
          d="m522.495 1017.746 6-12 6 12h-12"
        />
      </g>
      <g stroke="#ffc000">
        <path fill="none" strokeWidth={4} d="M528.495 939.784v-38.9" />
        <path
          fill="#ffc000"
          strokeLinecap="round"
          d="m522.495 900.884 6-12 6 12h-12"
        />
      </g>
      <path
        fill="#ffc000"
        stroke="#ffc000"
        d="M320.356 892.7h-12.2v5.2l-18.3-10.4 18.3-10.4v5.2h12.2v10.4z"
      />
      <path fill="#fff" d="M173.996 864.05h112.9v46.9h-112.9v-46.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(173.996 864.05)"
      >
        <tspan
          x={4.9}
          y={19.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"To E205A/B RBO "}
        </tspan>
        <tspan
          x={48.4}
          y={39.5}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"Oil"}
        </tspan>
      </text>
    </svg>
  )
}
export default Doe1HMI

