import * as React from "react"
//  <svg xmlns="http://www.w3.org/2000/svg" width={1854} height={1061}>
const Doe1HMI  = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={1922} height={1082}>
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
      <path fill="#0e2350" stroke="#3498db" d="M1 1h1920v1080H1V1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#ff0",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "36pt",
          fontWeight: 700,
        }}
        transform="translate(1335.242 873.523)"
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
          transform="translate(107.273 170.547)"
        />
        <path
          fill="url(#a)"
          d="M76.2 0H119l77.3 45.1H0L76.2 0z"
          transform="translate(107.585 117.307)"
        />
        <path
          fill="url(#b)"
          d="M1.7 0h42.7c.9 0 1.7.8 1.7 1.7v1.7c0 1-.8 1.8-1.7 1.8H1.7C.7 5.2 0 4.4 0 3.4V1.7C0 .8.7 0 1.7 0z"
          transform="translate(182.005 112.14)"
        />
        <path
          fill="url(#b)"
          d="M2.7 0h209.2c1.5 0 2.7.8 2.7 1.8v4.6c0 1-1.2 1.8-2.7 1.8H2.7C1.2 8.2 0 7.4 0 6.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(98.449 448.216)"
        />
        <path
          fill="url(#b)"
          d="M2.7 0h209.2c1.5 0 2.7.8 2.7 1.8v4.6c0 1-1.2 1.8-2.7 1.8H2.7C1.2 8.2 0 7.4 0 6.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(98.449 162.327)"
        />
        <path
          fill="url(#b)"
          d="M2.7 0h190.2c1.4 0 2.6.8 2.6 1.8v3.6c0 1-1.2 1.8-2.6 1.8H2.7C1.2 7.2 0 6.4 0 5.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(107.986 218.692)"
        />
        <path
          fill="url(#c)"
          d="M2.7 0h190.2c1.4 0 2.6.8 2.6 1.8v3.6c0 1-1.2 1.8-2.6 1.8H2.7C1.2 7.2 0 6.4 0 5.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(107.986 275.082)"
        />
        <path
          fill="url(#b)"
          d="M2.7 0h190.2c1.4 0 2.6.8 2.6 1.8v3.6c0 1-1.2 1.8-2.6 1.8H2.7C1.2 7.2 0 6.4 0 5.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(107.986 332.843)"
        />
        <path
          fill="url(#d)"
          d="M2.7 0h190.2c1.4 0 2.6.8 2.6 1.8v3.6c0 1-1.2 1.8-2.6 1.8H2.7C1.2 7.2 0 6.4 0 5.4V1.8C0 .8 1.2 0 2.7 0z"
          transform="translate(107.986 389.918)"
        />
        <path
          fill="url(#a)"
          d="M0 32.7C0 14.6 12.6 0 28.2 0s28.3 14.6 28.3 32.7-12.7 32.7-28.3 32.7C12.6 65.4 0 50.8 0 32.7z"
          transform="translate(177.504 186.878)"
        />
        <path
          fill="url(#e)"
          d="M0 25.7C0 11.5 9.9 0 22.2 0c12.3 0 22.2 11.5 22.2 25.7s-9.9 25.8-22.2 25.8C9.9 51.5 0 39.9 0 25.7z"
          transform="rotate(180 113.983 122.665)"
        />
        <path
          fill="url(#a)"
          d="M0 32.7C0 14.6 12.6 0 28.2 0s28.3 14.6 28.3 32.7-12.7 32.7-28.3 32.7C12.6 65.4 0 50.8 0 32.7z"
          transform="translate(177.504 304.564)"
        />
        <path
          fill="url(#e)"
          d="M0 25.7C0 11.5 9.9 0 22.2 0c12.3 0 22.2 11.5 22.2 25.7s-9.9 25.8-22.2 25.8C9.9 51.5 0 39.9 0 25.7z"
          transform="rotate(180 113.983 181.509)"
        />
        <path
          fill="url(#b)"
          d="M0 0h10v22.6H0L.6 20h7.3V2.5H.6L0 0z"
          transform="rotate(-90 271.917 127.312)"
        />
        <path
          fill="url(#f)"
          d="M1.5 0h85c.8 0 1.5.6 1.5 1.3V56c0 .8-.7 1.4-1.5 1.4h-85C.7 57.4 0 56.8 0 56V1.3C0 .6.7 0 1.5 0z"
          transform="translate(111.871 397.904)"
        />
        <path
          fill="url(#f)"
          d="M0 0h94.1v7.4H0V0z"
          transform="translate(108.848 449.102)"
        />
      </g>
      <g fill="none" stroke="#000">
        <path d="m194.794 217.105 11-13.6 11 13.6M205.781 203.505v13.6" />
      </g>
      <path
        fill="url(#g)"
        d="M.3 0H67c.2 0 .3.2.3.4v3c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3v-3C0 .2.1 0 .3 0z"
        transform="translate(171.354 178.779)"
      />
      <path
        fill="url(#h)"
        d="M0 0h10.2v2.7H0V0z"
        transform="translate(200.295 182.34)"
      />
      <path
        fill="url(#h)"
        d="M0 0h9.1v7.3H0V0z"
        transform="translate(200.86 185.009)"
      />
      <path
        fill="url(#h)"
        d="M0 0h8.5v4.9H0V0z"
        transform="translate(201.178 192.264)"
      />
      <path
        fill="url(#i)"
        d="M.1 0h8.4l.1.1v.3c0 .1-.1.1-.1.1H.1S0 .5 0 .4V.1L.1 0z"
        transform="translate(201.112 196.967)"
      />
      <path
        fill="url(#j)"
        d="M0 0h8.5v.4H0V0z"
        transform="translate(201.178 192.29)"
      />
      <path
        fill="url(#j)"
        d="M0 0h9.1v.4H0V0z"
        transform="translate(200.872 185.009)"
      />
      <path
        fill="url(#h)"
        d="M0 0h5v.7H0V0z"
        transform="translate(202.846 197.486)"
      />
      <g fill="none" stroke="#008ccc" strokeDasharray="2,5">
        <path d="m196.411 208.47 9-10.2 9 10.3M205.45 198.27v10.2" />
      </g>
      <g fill="none" stroke="#000">
        <path d="m193.396 347.039 11-13.6 11 13.6M204.384 333.439v13.6" />
      </g>
      <path
        fill="url(#g)"
        d="M.3 0H67c.2 0 .3.2.3.4v3c0 .2-.1.3-.3.3H.3c-.2 0-.3-.1-.3-.3v-3C0 .2.1 0 .3 0z"
        transform="translate(170.323 311.266)"
      />
      <path
        fill="url(#h)"
        d="M0 0h10.2v2.7H0V0z"
        transform="translate(199.264 314.828)"
      />
      <path
        fill="url(#h)"
        d="M0 0h9.1v7.3H0V0z"
        transform="translate(199.829 317.497)"
      />
      <path
        fill="url(#h)"
        d="M0 0h8.5v4.9H0V0z"
        transform="translate(200.147 324.752)"
      />
      <path
        fill="url(#i)"
        d="M.1 0h8.4l.1.1v.3c0 .1-.1.1-.1.1H.1S0 .5 0 .4V.1L.1 0z"
        transform="translate(200.08 329.455)"
      />
      <path
        fill="url(#j)"
        d="M0 0h8.5v.4H0V0z"
        transform="translate(200.147 324.777)"
      />
      <path
        fill="url(#j)"
        d="M0 0h9.1v.4H0V0z"
        transform="translate(199.84 317.497)"
      />
      <path
        fill="url(#h)"
        d="M0 0h5v.7H0V0z"
        transform="translate(201.815 329.974)"
      />
      <g fill="none" stroke="#008ccc" strokeDasharray="2,5">
        <path d="m195.38 340.958 9-10.2 9 10.3M204.419 330.758v10.2" />
      </g>
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={2.667} d="M248.498 180.5h192.4" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m248.498 185.4-9.8-4.9 9.8-4.9v9.8"
        />
      </g>
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={2.667} d="M247.399 312.987h190.9" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m247.399 317.887-9.8-4.9 9.8-4.9v9.8"
        />
      </g>
      <path
        fill="none"
        stroke="#236ea1"
        strokeWidth={4}
        d="M202.577 113.162v-74"
      />
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={4} d="M202.577 38.24h168.2" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m370.777 32.24 12 6-12 6v-12"
        />
      </g>
      <path
        fill="#0070c0"
        stroke="#0070c0"
        d="M390.995 33.43h10.4v-4.5l15.6 8.9-15.6 8.9v-4.4h-10.4v-8.9z"
      />
      <path fill="#fff" d="M424.392 24.218h108.1v27.8h-108.1v-27.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(424.392 24.218)"
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
        d="M469.992 184.366h-10.4v4.5l-15.6-8.9 15.6-8.9v4.4h10.4v8.9z"
      />
      <path fill="#fff" d="M472.382 163.615h110.6v32.7h-110.6v-32.7z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(472.382 163.615)"
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
        d="M468.16 317.824h-10.4v4.5l-15.6-8.9 15.6-8.9v4.4h10.4v8.9z"
      />
      <path fill="#fff" d="M470.662 296.075h101.3v32.7h-101.3v-32.7z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(470.662 296.075)"
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
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M323.749 231.22h90.3v17.8h-90.3v-17.8z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(323.749 231.22)"
      >
        <tspan
          x={11.2}
          y={14.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"1.558 ton/ hr"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M323.749 211.102h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(323.749 211.102)"
      >
        <tspan
          x={29.2}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"FI303"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M320.722 207.107h96.7v45.9h-96.7v-45.9z"
      />
      <g stroke="#92d050">
        <path fill="none" strokeWidth={4} d="M303.522 282.665h107.7" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m420.022 282.665-10.4-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.4-6"
        />
      </g>
      <path
        fill="url(#k)"
        d="M0 0h9.9v8.6H0V0z"
        transform="translate(354.786 278.894)"
      />
      <path
        fill="url(#k)"
        d="M0 0h9.9v8.6H0V0z"
        transform="translate(377.078 278.894)"
      />
      <path
        fill="url(#k)"
        d="M1.3 0h9.9s1.4.1 1.4 9.6c0 9.4-1.4 9.4-1.4 9.4H1.3S0 19 0 9.6C0 .1 1.3 0 1.3 0z"
        transform="translate(364.6 273.678)"
      />
      <path
        fill="url(#l)"
        d="M0 0h3.8v7.3s-.2.4-1.9.4S0 7.3 0 7.3V0z"
        transform="translate(369.147 267.62)"
      />
      <path
        fill="url(#k)"
        d="M.5 0h1.4c.3 0 .5.2.5.5v12.7c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
        transform="translate(359.748 276.43)"
      />
      <path
        fill="url(#m)"
        d="M1 1.8C1 1.1 1.6.4 2.2.4c.7 0 1.2.7 1.2 1.4 0 .8-.5 1.4-1.2 1.4-.6 0-1.2-.6-1.2-1.4zM.6 0S0 0 0 .7v2.2s0 .7.6.7.8.9.8.9v1.9h1.7V4.5s.1-.9.7-.9c.7 0 .7-.7.7-.7V.7c0-.6-.6-.7-.6-.7H.6z"
        transform="translate(358.708 277.813)"
      />
      <path
        fill="url(#n)"
        d="M1.5 0v3.2c0 .2-.1.3-.2.3H.2c-.1 0-.2-.1-.2-.3V0h1.5z"
        transform="translate(360.187 284.203)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(359.491 284.239)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(359.491 286)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(361.653 284.239)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(361.653 286)"
      />
      <path
        fill="url(#k)"
        d="M.5 0h1.4c.3 0 .5.2.5.5v12.7c0 .3-.2.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
        transform="translate(379.812 276.43)"
      />
      <path
        fill="url(#m)"
        d="M1 1.8C1 1.1 1.6.4 2.2.4c.7 0 1.2.7 1.2 1.4 0 .8-.5 1.4-1.2 1.4-.6 0-1.2-.6-1.2-1.4zM.6 0S0 0 0 .7v2.2s0 .7.6.7.8.9.8.9v1.9h1.7V4.5s.1-.9.7-.9c.7 0 .7-.7.7-.7V.7c0-.6-.6-.7-.6-.7H.6z"
        transform="translate(378.771 277.813)"
      />
      <path
        fill="url(#n)"
        d="M1.5 0v3.2c0 .2-.1.3-.2.3H.2c-.1 0-.2-.1-.2-.3V0h1.5z"
        transform="translate(380.25 284.203)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(379.555 284.239)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(379.555 286)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(381.717 284.239)"
      />
      <path
        fill="url(#k)"
        d="M.2 0h.3c.1 0 .2.1.2.2v1.1c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
        transform="translate(381.717 286)"
      />
      <path
        fill="url(#k)"
        d="M.5 0h.3c.3 0 .5.2.5.5v10.1c0 .2-.2.5-.5.5H.5c-.3 0-.5-.3-.5-.5V.5C0 .2.2 0 .5 0z"
        transform="translate(386.908 277.689)"
      />
      <path
        fill="url(#k)"
        d="M.5 0h.3c.3 0 .5.2.5.5v10.1c0 .2-.2.5-.5.5H.5c-.3 0-.5-.3-.5-.5V.5C0 .2.2 0 .5 0z"
        transform="translate(353.602 277.745)"
      />
      <path
        fill="url(#l)"
        d="M0 0h6.8v1.3H0V0z"
        transform="translate(367.638 266.368)"
      />
      <path
        fill="url(#o)"
        d="M0 0h13.9v7.1H0V0z"
        transform="translate(364.078 259.408)"
      />
      <path
        fill="url(#p)"
        d="M0 1.7h13.9V0H0v1.7z"
        transform="translate(364.078 257.833)"
      />
      <path
        fill="#757263"
        d="M371.872 262.927c0-1.1.8-2 1.7-2 1 0 1.8.9 1.8 2s-.8 2-1.8 2c-.9 0-1.7-.9-1.7-2z"
      />
      <path
        fill="#edebdf"
        d="M372.005 262.98c0-1.1.7-1.9 1.6-1.9.9 0 1.6.8 1.6 1.9 0 1-.7 1.8-1.6 1.8-.9 0-1.6-.8-1.6-1.8z"
      />
      <path
        fill="#635d4f"
        d="M372.261 262.975c0-.9.6-1.6 1.4-1.6.7 0 1.3.7 1.3 1.6 0 .8-.6 1.5-1.3 1.5-.8 0-1.4-.7-1.4-1.5z"
      />
      <path
        stroke="#000"
        d="M372.492 262.942c0-.7.5-1.3 1.1-1.3.7 0 1.2.6 1.2 1.3 0 .7-.5 1.3-1.2 1.3-.6 0-1.1-.6-1.1-1.3z"
      />
      <path
        fill="#fff"
        fillOpacity={0.22}
        d="M372.755 262.115c.386-.46 1.154-.598 1.69-.148.537.45-.538.33-.988.867-.45.536-.082 1.498-.618 1.048-.537-.45-.534-1.231-.084-1.767z"
      />
      <path
        fill="#757263"
        d="M366.913 262.928c0-1.1.8-2 1.7-2 1 0 1.8.9 1.8 2s-.8 2-1.8 2c-.9 0-1.7-.9-1.7-2z"
      />
      <path
        fill="#edebdf"
        d="M367.045 262.981c0-1.1.7-1.9 1.6-1.9.9 0 1.6.8 1.6 1.9 0 1-.7 1.8-1.6 1.8-.9 0-1.6-.8-1.6-1.8z"
      />
      <path
        fill="#635d4f"
        d="M367.302 262.977c0-.9.6-1.6 1.4-1.6.7 0 1.3.7 1.3 1.6 0 .8-.6 1.5-1.3 1.5-.8 0-1.4-.7-1.4-1.5z"
      />
      <path
        stroke="#000"
        d="M367.533 262.943c0-.7.5-1.3 1.1-1.3.7 0 1.2.6 1.2 1.3 0 .7-.5 1.3-1.2 1.3-.6 0-1.1-.6-1.1-1.3z"
      />
      <path
        fill="#fff"
        fillOpacity={0.22}
        d="M367.796 262.116c.385-.46 1.154-.598 1.69-.148.536.45-.539.331-.989.867-.45.536-.082 1.498-.618 1.048-.536-.45-.533-1.23-.083-1.767z"
      />
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M425.221 278.17h10.4v-4.5l15.6 8.9-15.6 8.9v-4.4h-10.4v-8.9z"
      />
      <path fill="#fff" d="M457.708 264.667h75.6v27.8h-75.6v-27.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(457.708 264.667)"
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
        <path fill="none" strokeWidth={4} d="M304.254 419.738h107.7" />
        <path
          fill="#92d050"
          strokeLinecap="round"
          d="m420.754 419.738-10.4-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.4-6"
        />
      </g>
      <path
        fill="#92d050"
        stroke="#92d050"
        d="M425.221 415.018h10.4v-4.5l15.6 8.9-15.6 8.9v-4.4h-10.4v-8.9z"
      />
      <path fill="#fff" d="M456.244 405.51h86.2v27.8h-86.2v-27.8z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(456.244 405.51)"
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
        transform="translate(363.672 395.805)"
      />
      <path
        fill="url(#r)"
        d="M0 0h1v13.8H0V0z"
        transform="translate(370.25 424.626)"
      />
      <path
        fill="url(#s)"
        d="M0 0h4v.9H0V0z"
        transform="translate(368.747 408.6)"
      />
      <path
        fill="url(#r)"
        d="M0 0h2.9v8.7H0V0z"
        transform="translate(369.267 409.45)"
      />
      <path
        fill="url(#s)"
        d="M.2 0H14c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
        transform="translate(363.547 395.523)"
      />
      <path
        fill="url(#t)"
        d="M.2 0h9.9c.1 0 .2.1.2.2v4.3c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
        transform="translate(365.577 399.914)"
      />
      <path fill="#3e3938" d="M366.097 400.339h9.3v3.8h-9.3v-3.8z" />
      <path
        fill="url(#u)"
        d="M.1 0h14.1V1.5H.1c-.1 0-.1-.1-.1-.1V.1C0 0 0 0 .1 0z"
        transform="translate(363.624 407.197)"
      />
      <path
        fill="url(#v)"
        d="M0 0h199.6v429.7H0V0z"
        transform="translate(1243.005 134.183)"
      />
      <path
        fill="url(#v)"
        d="M100.4 0c96.8 0 99.2 35.4 99.2 35.4H0S3.6 0 100.4 0z"
        transform="translate(1243.005 99.803)"
      />
      <path
        fill="url(#v)"
        d="M100.4 0c96.8 0 99.2 21.1 99.2 21.1H0S3.6 0 100.4 0z"
        transform="matrix(1 0 0 -1 1243.005 598.457)"
      />
      <path
        fill="url(#w)"
        d="M.3 0h200.9c.3 0 .3.2.3.4v5.9c0 .2 0 .4-.3.4H.3c-.3 0-.3-.2-.3-.4V.4C0 .2 0 0 .3 0z"
        transform="translate(1242.042 564.87)"
      />
      <path
        fill="url(#w)"
        d="M.3 0h200.9c.3 0 .3.2.3.4v5.9c0 .2 0 .4-.3.4H.3c-.3 0-.3-.2-.3-.4V.4C0 .2 0 0 .3 0z"
        transform="translate(1242.042 570.979)"
      />
      <g fill="url(#x)" transform="translate(1243.005 183.431)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#y)" stroke="#ebebeb" transform="translate(107.218 338.48)">
        <path d="M4.926 132.938v120c0 6.7 4.6 12.2 10.2 12.2h163.2c5.6 0 10.1-5.5 10.1-12.2v-120H4.926zM190.075 119.083H3.375c-1.9 0-3.4 1.8-3.4 4s1.5 4.1 3.4 4.1h186.7c1.8 0 3.3-1.9 3.3-4.1 0-2.2-1.5-4-3.3-4z" />
        <path d="M4.926 126.35v5.6h183.5v-5.6H4.926z" />
      </g>
      <path
        fill="url(#z)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 212.098 666.322)"
      />
      <path
        fill="url(#A)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 212.387 675.324)"
      />
      <path
        fill="url(#B)"
        d="M10.5 0c0 .2-.2.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 443.632 231.652)"
      />
      <path
        fill="#fff"
        fillOpacity={0.35}
        d="M211.422 674.951v-9.9c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v9.9c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#C)"
        d="M0 0h14.8v2.3H0V0z"
        transform="translate(220.553 677.845)"
      />
      <path
        fill="url(#C)"
        stroke="#595959"
        d="M3.3 0h6.5l3.3 5.5H0L3.3 0z"
        transform="translate(221.39 672.516)"
      />
      <path
        fill="url(#z)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 228.38 655.368)"
      />
      <path
        fill="url(#D)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.4 0 9.7 0c5.4 0 9.8 3.7 9.8 8.3 0 4.6-4.4 8.3-9.8 8.3-5.3 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 236.272 674.794)"
      />
      <path
        fill="#fff"
        fillOpacity={0.27}
        d="M227.968 673.15c3.8 0 6.9-3.6 6.9-8.1s-3.1-8.1-6.9-8.1c-3.8 0-6.9 3.6-6.9 8.1s3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#9da6b0"
        stroke="#595959"
        strokeWidth={0.25}
        d="M227.94 662.143c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9s-2.5-1.3-2.5-2.9c0-1.6 1.1-2.9 2.5-2.9z"
      />
      <path
        fill="url(#E)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 -216.443 446.337)"
      />
      <path
        fill="url(#A)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 243.286 653.782)"
      />
      <path
        fill="url(#B)"
        d="M10.5 0c0 .2-.1.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 -205.065 448.758)"
      />
      <path
        fill="#fff"
        fillOpacity={0.35}
        d="M244.251 654.155v9.9c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-9.9c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path
        fill="url(#F)"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 211.24 731.58)"
      />
      <path
        fill="url(#G)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 -1 -1 0 211.529 740.582)"
      />
      <path
        fill="url(#H)"
        d="M10.5 0c0 .2-.2.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(-90 475.831 264.71)"
      />
      <path
        fill="#92d050"
        d="M210.564 740.21v-9.9c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v9.9c0 .1 0 .2.1.2 0 0 .1-.1.1-.2z"
      />
      <path
        fill="url(#I)"
        d="M0 0h14.8v2.3H0V0z"
        transform="translate(219.695 743.102)"
      />
      <path
        fill="url(#I)"
        stroke="#595959"
        d="M3.3 0h6.5l3.3 5.5H0L3.3 0z"
        transform="translate(220.531 737.774)"
      />
      <path
        fill="url(#F)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="matrix(0 1 1 0 227.52 720.626)"
      />
      <path
        fill="url(#J)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.4 0 9.7 0c5.4 0 9.8 3.7 9.8 8.3 0 4.6-4.4 8.3-9.8 8.3-5.3 0-9.7-3.7-9.7-8.3z"
        transform="matrix(0 -1 -1 0 235.414 740.052)"
      />
      <path
        fill="#92d050"
        d="M227.11 738.407c3.8 0 6.9-3.6 6.9-8.1s-3.1-8.1-6.9-8.1c-3.8 0-6.9 3.6-6.9 8.1s3.1 8.1 6.9 8.1z"
      />
      <path
        fill="#92d050"
        stroke="#595959"
        strokeWidth={0.25}
        d="M227.081 727.4c1.4 0 2.5 1.3 2.5 2.9 0 1.6-1.1 2.9-2.5 2.9s-2.5-1.3-2.5-2.9c0-1.6 1.1-2.9 2.5-2.9z"
      />
      <path
        fill="url(#K)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="rotate(90 -249.501 478.537)"
      />
      <path
        fill="url(#G)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="matrix(0 1 1 0 242.428 719.04)"
      />
      <path
        fill="url(#H)"
        d="M10.5 0c0 .2-.1.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="rotate(90 -238.123 480.958)"
      />
      <path
        fill="#92d050"
        d="M243.393 719.413v9.9c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-9.9c0-.1 0-.2-.1-.2 0 0-.1.1-.1.2z"
      />
      <path
        fill="#ffc000"
        d="M194.794 667.58h15.9v5h-15.9v-5zM194.794 733.496h15.9v5h-15.9v-5z"
      />
      <path fill="#fff" d="M197.38 626.497h70.5v19.9h-70.5v-19.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(197.38 626.497)"
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
        d="M194.793 601.11v137.4"
      />
      <path fill="#fff" d="M197.38 693.082h70.5v19.9h-70.5v-19.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(197.38 693.082)"
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
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M325.619 366.59h90.3v17.8h-90.3v-17.8z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(325.619 366.59)"
      >
        <tspan
          x={13.2}
          y={14.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"158.6 degC"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M325.619 346.47h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(325.619 346.47)"
      >
        <tspan
          x={14.2}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"TRAHL307"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M322.533 341.785h96.7v45.9h-96.7v-45.9z"
      />
      <g fill="url(#x)" transform="translate(1243.005 224.117)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1243.005 268.061)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1243.005 314.003)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1243.005 365.937)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1243.005 414.875)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1243.005 462.814)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g fill="url(#x)" transform="translate(1243.005 508.755)">
        <path d="M0 0h199.6v8.8H0V0zM0 16.128h199.6v8.8H0v-8.8z" />
      </g>
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1494.029 195.173h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1442.429 195.173 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1494.029 195.173v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1494.029 236.12h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1442.429 236.12 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1494.029 236.038v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1494.029 279.982h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1442.429 279.982 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1494.029 280.065v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1494.029 326.007h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1442.429 326.007 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path
        fill="none"
        stroke="red"
        strokeWidth={2}
        d="M1494.029 200.115v292.6"
      />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1494.029 377.94h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1442.429 377.94 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1494.029 377.94v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1494.029 426.879h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1442.429 426.879 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1494.029 426.796v15" />
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1494.029 475.734h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1442.429 475.734 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path
        fill="none"
        stroke="red"
        strokeWidth={2}
        d="M1494.029 475.817v203.7"
      />
      <path
        fill="url(#q)"
        d="M.3 0h15.8c.2 0 .3.1.3.2v10.7c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 475.288 988.184)"
      />
      <path
        fill="url(#r)"
        d="M0 0h1.1v11.9H0V0z"
        transform="rotate(90 459.068 979.608)"
      />
      <path
        fill="url(#s)"
        d="M0 0h4.6v.7H0V0z"
        transform="rotate(90 466.835 985.63)"
      />
      <path
        fill="url(#r)"
        d="M0 0h3.4v7.5H0V0z"
        transform="rotate(90 466.167 985.566)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h16c.1 0 .3.1.3.2v.2c0 .1-.2.2-.3.2H.3C.1.6 0 .5 0 .4V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 475.482 988.232)"
      />
      <path
        fill="url(#t)"
        d="M.3 0h11.4c.2 0 .3.1.3.2v3.6c0 .1-.1.2-.3.2H.3C.1 4 0 3.9 0 3.8V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 472.414 987.524)"
      />
      <path fill="#3e3938" d="M1459.572 515.714v10.8h-3.3v-10.8h3.3z" />
      <path
        fill="url(#u)"
        d="M.1 0h16.4v1.3H.1c-.1 0-.1-.1-.1-.1V0h.1z"
        transform="rotate(90 470.416 983.255)"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1556.183 522.902h90.3v17.8h-90.3v-17.8z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1556.183 522.902)"
      >
        <tspan
          x={13.2}
          y={14.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"258.6 degC"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1556.183 502.783h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1556.183 502.783)"
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
        d="M1552.464 499.735h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="none"
        stroke="#236ea1"
        strokeDasharray="4,10"
        strokeWidth={2}
        d="M1467.392 520.709h80.8"
      />
      <path
        fill="url(#q)"
        d="M.3 0h15.8c.2 0 .3.1.3.2v10.7c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 653.705 809.757)"
      />
      <path
        fill="url(#r)"
        d="M0 0h1.1v11.9H0V0z"
        transform="rotate(90 637.485 801.182)"
      />
      <path
        fill="url(#s)"
        d="M0 0h4.6v.7H0V0z"
        transform="rotate(90 645.252 807.203)"
      />
      <path
        fill="url(#r)"
        d="M0 0h3.4v7.5H0V0z"
        transform="rotate(90 644.584 807.14)"
      />
      <path
        fill="url(#s)"
        d="M.3 0h16c.1 0 .3.1.3.2v.2c0 .1-.2.2-.3.2H.3C.1.6 0 .5 0 .4V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 653.9 809.806)"
      />
      <path
        fill="url(#t)"
        d="M.3 0h11.4c.2 0 .3.1.3.2v3.6c0 .1-.1.2-.3.2H.3C.1 4 0 3.9 0 3.8V.2C0 .1.1 0 .3 0z"
        transform="rotate(90 650.831 809.097)"
      />
      <path fill="#3e3938" d="M1459.562 158.87v10.8h-3.3v-10.8h3.3z" />
      <path
        fill="url(#u)"
        d="M.1 0h16.4v1.3H.1c-.1 0-.1-.1-.1-.1V0h.1z"
        transform="rotate(90 648.833 804.829)"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1556.173 166.057h90.3v17.8h-90.3v-17.8z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1556.173 166.057)"
      >
        <tspan
          x={13.2}
          y={14.9}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"258.6 degC"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M1552.456 142.891h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1556.173 145.938h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1556.173 145.938)"
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
        d="M1467.392 163.864h80.8"
      />
      <path
        fill="red"
        stroke="red"
        d="M1489.525 709.143v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M1435.476 713.274h115v29.2h-115v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1435.476 713.274)"
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
        d="M242.102 724.45h90.2M242.961 658.534h396.1"
      />
      <path
        fill="url(#L)"
        d="M0 0h37.6v14.2H0V0z"
        transform="translate(439.07 649.762)"
      />
      <path
        fill="url(#M)"
        d="M.3 0h22.4c.2 0 .3.1.3.3v19c0 .1-.1.3-.3.3H.3c-.2 0-.3-.2-.3-.3V.3C0 .1.1 0 .3 0z"
        transform="translate(446.389 617.868)"
      />
      <path
        fill="#b4b5b5"
        d="M447.425 618.949h20.9c.1 0 .2.1.2.3v16.8c0 .2-.1.3-.2.3h-20.9c-.1 0-.2-.1-.2-.3v-16.8c0-.2.1-.3.2-.3z"
      />
      <path fill="#92d050" d="M447.89 619.844h20v15.6h-20v-15.6z" />
      <path
        fill="url(#N)"
        d="M0 0h5.4v12.8s0 .8-2.7.8c-2.6 0-2.7-.8-2.7-.8V0z"
        transform="translate(455.18 637.347)"
      />
      <path
        fill="url(#L)"
        d="M.5 0h1.3c.3 0 .5.3.5.6V20c0 .4-.2.6-.5.6H.5c-.3 0-.5-.2-.5-.6V.6C0 .3.2 0 .5 0z"
        transform="translate(441.905 646.554)"
      />
      <path
        fill="url(#L)"
        d="M.5 0h1.3c.3 0 .5.3.5.6V20c0 .4-.2.6-.5.6H.5c-.3 0-.5-.2-.5-.6V.6C0 .3.2 0 .5 0z"
        transform="translate(471.563 646.554)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.5v14.2H0V0z"
        transform="translate(444.213 649.78)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.5v14.2H0V0z"
        transform="translate(471.036 649.78)"
      />
      <path
        fill="url(#P)"
        d="M0 0h25v3.6H0V0z"
        transform="translate(445.386 625.845)"
      />
      <path
        fill="url(#N)"
        d="M0 0h2.6v1.5H0V0z"
        transform="translate(448.87 616.41)"
      />
      <path
        fill="url(#N)"
        d="M0 0h1.3v1.5H0V0z"
        transform="translate(449.524 615.012)"
      />
      <path
        fill="url(#L)"
        d="M0 0h1v3.6H0V0z"
        transform="translate(445.386 631.845)"
      />
      <path
        fill="url(#L)"
        d="M0 0h10.4v1.2H0V0z"
        transform="translate(435.06 633.04)"
      />
      <path
        fill="url(#L)"
        d="M0 0h11.8v1.1H0V0z"
        transform="matrix(0 -1 -1 0 434.648 646.708)"
      />
      <path
        fill="url(#Q)"
        d="M0 0s.8 0 1.2.5c.3.5.3 1.4.3 1.4H.4s0-.5-.4-.7V0z"
        transform="matrix(-1 0 0 1 435.062 633.04)"
      />
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M332.324 724.45v-67.9M639.077 658.534v-483.4"
      />
      <g stroke="#ffc000">
        <path fill="none" strokeWidth={4} d="M639.077 175.147h586.8" />
        <path
          fill="#ffc000"
          strokeLinecap="round"
          d="m1225.877 169.147 12 6-12 6v-12"
        />
      </g>
      <path
        fill="url(#L)"
        d="M0 0h43.7v12.2H0V0z"
        transform="rotate(90 445.93 1054.907)"
      />
      <path
        fill="url(#M)"
        d="M.3 0h26.1c.2 0 .3.1.3.3v16.3c0 .1-.1.2-.3.2H.3c-.2 0-.3-.1-.3-.2V.3C0 .1.1 0 .3 0z"
        transform="rotate(90 455.397 1072.88)"
      />
      <path
        fill="#b4b5b5"
        d="M1527.348 618.756v24.2c0 .2-.1.3-.2.3h-14.5c-.2 0-.3-.1-.3-.3v-24.2c0-.2.1-.3.3-.3h14.5c.1 0 .2.1.2.3z"
      />
      <path fill="#92d050" d="M1526.578 619.229v23.2h-13.4v-23.2h13.4z" />
      <path
        fill="url(#N)"
        d="M0 0h6.3v11s-.1.7-3.1.7C.1 11.7 0 11 0 11V0z"
        transform="rotate(90 441.908 1069.61)"
      />
      <path
        fill="url(#L)"
        d="M.6 0h1.5c.3 0 .6.2.6.5v16.7c0 .3-.3.5-.6.5H.6c-.3 0-.6-.2-.6-.5V.5C0 .2.3 0 .6 0z"
        transform="rotate(90 445.663 1057.935)"
      />
      <path
        fill="url(#L)"
        d="M.6 0h1.5c.3 0 .6.2.6.5v16.7c0 .3-.3.5-.6.5H.6c-.3 0-.6-.2-.6-.5V.5C0 .2.3 0 .6 0z"
        transform="rotate(90 428.427 1075.17)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.6v12.2H0V0z"
        transform="rotate(90 442.935 1057.889)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.6v12.2H0V0z"
        transform="rotate(90 427.346 1073.477)"
      />
      <path
        fill="url(#P)"
        d="M0 0h29.1v3.1H0V0z"
        transform="rotate(90 452.548 1068.866)"
      />
      <path
        fill="url(#N)"
        d="M0 0h3.1v1.3H0V0z"
        transform="rotate(90 454.583 1074.95)"
      />
      <path
        fill="url(#N)"
        d="M0 0h1.5v1.3H0V0z"
        transform="rotate(90 454.804 1075.93)"
      />
      <path
        fill="url(#L)"
        d="M0 0h1.2v3.1H0V0z"
        transform="rotate(90 449.967 1066.285)"
      />
      <path
        fill="url(#L)"
        d="M0 0h12.1v1.1H0V0z"
        transform="rotate(90 455.455 1059.77)"
      />
      <path
        fill="url(#L)"
        d="M0 0h10.2v1.2H0V0z"
        transform="matrix(1 0 0 -1 1503.465 603.837)"
      />
      <path
        fill="url(#Q)"
        d="M0 0s.9 0 1.4.5c.4.4.3 1.1.3 1.1H.5s0-.4-.5-.6V0z"
        transform="matrix(0 -1 -1 0 1515.224 604.318)"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M1535.559 620.807h71.9v18.6h-71.9v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1535.559 620.807)"
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
        transform="translate(1294.746 135.337)"
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
        transform="translate(154.706 135.337)"
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
        fill="#fff"
        stroke="#afafaf"
        d="M412.35 703.23h90.3v19.2h-90.3v-19.2z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(412.35 703.23)"
      >
        <tspan
          x={24.7}
          y={15.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"56.8 %"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M409.493 679.065h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M412.35 683.11h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(412.35 683.11)"
      >
        <tspan
          x={26.7}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LV301"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#0070c0"
        strokeDasharray="4,10"
        strokeWidth={2}
        d="M296.235 571.644h162.4M457.774 571.644l.859 48.893"
      />
      <path
        fill="#c2c2c2"
        stroke="#868686"
        strokeWidth={2}
        d="M1332.042 172.999h28.4v387.5h-28.4v-387.5z"
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={2}
        d="m1357.216 539.068-11 13.6-11-13.6M1357.216 290.351l-11 13.6-11-13.6"
      />
      <g stroke="#236ea1">
        <path fill="none" strokeWidth={4} d="M309.953 523.705h321.4" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m309.953 529.705-12-6 12-6v12"
        />
      </g>
      <path
        fill="none"
        stroke="#236ea1"
        strokeWidth={4}
        d="M644.232 524.704h471.6"
      />
      <path
        fill="#ffc37c"
        stroke="#868686"
        d="M442.278 502.206c0-5.8 5.4-10.5 12.2-10.5 6.7 0 12.1 4.7 12.1 10.5 0 5.9-5.4 10.6-12.1 10.6-6.8 0-12.2-4.7-12.2-10.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "10pt",
        }}
        transform="translate(442.278 491.706)"
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
        transform="translate(450.888 509.574)"
      />
      <path
        fill="url(#r)"
        d="M0 0h4.2v10.6H0V0z"
        transform="translate(451.629 510.736)"
      />
      <path
        fill="red"
        stroke="#3c5c74"
        d="M443.694 507.658h20.1s.1 0 .1.1v1.8c0 .1-.1.1-.1.1h-20.1c-.1 0-.1 0-.1-.1v-1.8c0-.1 0-.1.1-.1z"
      />
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M406.802 439.563h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M409.66 463.727h90.3v19.2h-90.3v-19.2z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(409.66 463.727)"
      >
        <tspan
          x={14.7}
          y={15.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"3.7 mbarA"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M409.66 443.609h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(409.66 443.609)"
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
        <path fill="none" strokeWidth={4} d="M315.109 331.948h321.4" />
        <path
          fill="#236ea1"
          strokeLinecap="round"
          d="m315.109 337.948-12-6 12-6v12"
        />
      </g>
      <path
        fill="none"
        stroke="#236ea1"
        strokeWidth={4}
        d="M645.091 331.948h465.6"
      />
      <path
        fill="none"
        stroke="#0070c0"
        strokeWidth={4}
        d="M1110.802 332.947v-150.8M1109.943 34.326h235.4M1345.378 33.327v65.9M1110.802 171.152v-138.8"
      />
      <path
        fill="none"
        stroke="#527294"
        strokeWidth={2.667}
        d="M1349.674 306.98h353.2M1702.827 306.98v415.5M1346.649 560.507h356.2"
      />
      <path
        fill="red"
        stroke="red"
        d="M1707.261 727.49v7.6h4.5l-8.9 11.3-9-11.3h4.5v-7.6h8.9z"
      />
      <path fill="#fff" d="M1645.476 754.222h122v53.1h-122v-53.1z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1645.476 754.222)"
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
        transform="matrix(0 -1 -1 0 266.397 1004.97)"
      />
      <path
        fill="url(#R)"
        d="M64.9 0s-.5 14.1-32.5 14.1C.3 14.1 0 0 0 0h64.9z"
        transform="rotate(-90 690.677 314.293)"
      />
      <path
        fill="url(#R)"
        d="M0 0h65v109.9H0V0z"
        transform="rotate(-90 635.655 369.324)"
      />
      <path
        fill="url(#S)"
        d="M0 0h65v.7H0V0z"
        transform="rotate(-90 635.699 369.31)"
      />
      <path
        fill="url(#S)"
        d="M0 0h65v.7H0V0z"
        transform="rotate(-90 690.53 314.48)"
      />
      <path
        fill="url(#T)"
        d="M1.5 0h2.9c.8 0 1.5.8 1.5 1.8v61.4c0 1-.7 1.8-1.5 1.8H1.5C.7 65 0 64.2 0 63.2V1.8C0 .8.7 0 1.5 0z"
        transform="translate(272.45 940.068)"
      />
      <path
        fill="url(#U)"
        d="M.9 0h1.6c.5 0 .9.8.9 1.8v61.4c0 1-.4 1.8-.9 1.8H.9c-.5 0-.9-.8-.9-1.8V1.8C0 .8.4 0 .9 0z"
        transform="translate(273.704 940.068)"
      />
      <path
        fill="url(#T)"
        d="M1.5 0h2.9c.8 0 1.5.8 1.5 1.8v61.4c0 1-.7 1.8-1.5 1.8H1.5C.7 65 0 64.2 0 63.2V1.8C0 .8.7 0 1.5 0z"
        transform="translate(318.501 940.068)"
      />
      <path
        fill="url(#U)"
        d="M.9 0h1.6c.5 0 .9.8.9 1.8v61.4c0 1-.4 1.8-.9 1.8H.9c-.5 0-.9-.8-.9-1.8V1.8C0 .8.4 0 .9 0z"
        transform="translate(319.754 940.068)"
      />
      <path
        fill="url(#T)"
        d="M1.5 0h2.9c.8 0 1.5.8 1.5 1.8v61.4c0 1-.7 1.8-1.5 1.8H1.5C.7 65 0 64.2 0 63.2V1.8C0 .8.7 0 1.5 0z"
        transform="translate(364.551 940.068)"
      />
      <path
        fill="url(#U)"
        d="M.9 0h1.6c.5 0 .9.8.9 1.8v61.4c0 1-.4 1.8-.9 1.8H.9c-.5 0-.9-.8-.9-1.8V1.8C0 .8.4 0 .9 0z"
        transform="translate(365.804 940.068)"
      />
      <path
        fill="url(#R)"
        d="M0 7.8s.2 3.6 11.4 3.6C22.6 11.4 23 7.8 23 7.8V0H0v7.8z"
        transform="translate(285.78 932.926)"
      />
      <path
        fill="url(#R)"
        d="M.6 0H25c.4 0 .7.3.7.7v1.9c0 .4-.3.7-.7.7H.6C.3 3.3 0 3 0 2.6V.7C0 .3.3 0 .6 0z"
        transform="translate(284.447 930.19)"
      />
      <path
        fill="url(#S)"
        d="M0 1.7h23V0H0v1.7z"
        transform="translate(285.78 932.926)"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
          fontWeight: 700,
        }}
        transform="translate(275.842 959.557)"
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
        d="M293.148 923.545v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M150.476 899.512h130.6v29.2h-130.6v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(150.476 899.512)"
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
        d="M279.991 1021.016v7.6h4.5l-8.9 11.3-9-11.3h4.5v-7.6h8.9z"
      />
      <path
        fill="url(#R)"
        d="M0 7.8s.2 3.6 11.4 3.6C22.6 11.4 23 7.8 23 7.8V0H0v7.8z"
        transform="rotate(180 143.494 507.045)"
      />
      <path fill="#fff" d="M132.476 1016.035h130.6v29.2h-130.6v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(132.476 1016.035)"
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
        transform="translate(1072.023 730.151)"
      />
      <path
        fill="url(#W)"
        d="M0 1.7h71.3V0H0v1.7z"
        transform="translate(1072.023 735.2)"
      />
      <path
        fill="url(#V)"
        d="M0 6.7h71.3V0H0v6.7z"
        transform="translate(1072.023 828.123)"
      />
      <path
        fill="url(#W)"
        d="M0 1.9h71.3V0H0v1.9z"
        transform="translate(1072.023 827.993)"
      />
      <path
        fill="url(#V)"
        d="M6.9 0h71.8c3.8 0 6.9 3 6.9 6.6v78.2c0 3.7-3.1 6.6-6.9 6.6H6.9c-3.8 0-6.9-2.9-6.9-6.6V6.6C0 3 3.1 0 6.9 0z"
        transform="translate(1064.868 736.805)"
      />
      <path
        fill="url(#X)"
        d="M0 0h62.4v54.4H0V0z"
        transform="matrix(0 1 1 0 1083.34 658.146)"
      />
      <path
        fill="url(#X)"
        d="M0 0h16.1v54.5H0V0z"
        transform="matrix(0 1 1 0 1083.34 642.092)"
      />
      <path
        fill="url(#X)"
        d="M12.6 0v54.5S0 54.5 0 27.4 12.6 0 12.6 0z"
        transform="matrix(0 1 1 0 1083.34 629.605)"
      />
      <path
        fill="url(#Y)"
        d="M0 0h1.4v54.5H0V0z"
        transform="matrix(0 1 1 0 1083.34 642.528)"
      />
      <path
        fill="url(#Y)"
        d="M0 0h1.3v53.5H0V0z"
        transform="matrix(0 1 1 0 1083.312 718.304)"
      />
      <path
        fill="url(#Z)"
        d="M0 0h27v11.8H0V0z"
        transform="matrix(0 1 1 0 1104.157 725.717)"
      />
      <g fill="url(#X)" transform="matrix(0 1 1 0 1084.97 658.147)">
        <path d="M0 3.84h56.2v1.6H0v-1.6zM0 11.52h56.2v1.6H0v-1.6zM0 15.361h56.2v1.6H0v-1.6zM0 19.201h56.2v1.6H0v-1.6zM0 23.042h56.2v1.6H0v-1.6zM0 27.41h56.2v1.6H0v-1.6zM0 30.933h56.2v1.6H0v-1.6zM0 34.457h56.2v1.6H0v-1.6zM0 37.982h56.2v1.6H0v-1.6zM0 42.243h56.2v1.6H0v-1.6zM0 46.084h56.2v1.6H0v-1.6zM0 49.924h56.2v1.6H0v-1.6zM0 0h56.2v1.6H0V0zM0 7.68h56.2v1.6H0v-1.6z" />
      </g>
      <path
        fill="url(#X)"
        d="M0 0h4.8c.8 0 1.6.6 1.6 1.4V53c0 .8-.8 1.4-1.6 1.4H0V0z"
        transform="matrix(0 1 1 0 1083.34 719.329)"
      />
      <path
        fill="url(#Z)"
        d="M0 0h3.3v25H0V0z"
        transform="matrix(0 1 1 0 1097.561 725.717)"
      />
      <path
        fill="url(#X)"
        d="M0 0h2.6v3.6H0V0z"
        transform="matrix(0 1 1 0 1084.97 725.541)"
      />
      <path
        fill="url(#X)"
        d="M0 0h2.6v3.6H0V0z"
        transform="matrix(0 1 1 0 1100.922 725.541)"
      />
      <path
        fill="url(#X)"
        d="M0 0h2.6v3.6H0V0z"
        transform="matrix(0 1 1 0 1116.874 725.541)"
      />
      <path
        fill="url(#X)"
        d="M0 0h2.6v3.6H0V0z"
        transform="matrix(0 1 1 0 1132.825 725.541)"
      />
      <path
        fill="url(#aa)"
        d="M0 15.7h29.4V0H0v15.7z"
        transform="matrix(0 1 1 0 1071.077 685.339)"
      />
      <path
        fill="url(#ab)"
        d="M0 1.1h29.4V0H0v1.1z"
        transform="matrix(0 1 1 0 1076.807 685.339)"
      />
      <path
        fill="url(#aa)"
        d="M33.2 0v7.1c0 .7-.7 1.3-1.6 1.3h-30C.7 8.4 0 7.8 0 7.1V0h33.2z"
        transform="matrix(0 1 1 0 1068.65 683.437)"
      />
      <path
        fill="url(#ac)"
        d="M1.3 0h33.3c.7 0 1.3.5 1.3 1.1 0 .7-.6 1.2-1.3 1.2H1.3C.6 2.3 0 1.8 0 1.1 0 .5.6 0 1.3 0z"
        transform="matrix(0 1 1 0 1066.595 682.327)"
      />
      <path
        fill="url(#ac)"
        d="M1.3 0h33.3c.7 0 1.3.5 1.3 1.1 0 .7-.6 1.2-1.3 1.2H1.3C.6 2.3 0 1.8 0 1.1 0 .5.6 0 1.3 0z"
        transform="matrix(0 1 1 0 1064.403 682.327)"
      />
      <path
        fill="url(#aa)"
        d="M33.2 0v3.7c0 .4-.7.7-1.6.7h-30C.7 4.4 0 4.1 0 3.7V0h33.2z"
        transform="rotate(90 190.364 874.039)"
      />
      <path fill="#98bcdf" d="M1133.918 660.148v53.8h3.6v-53.8h-3.6z" />
      <path fill="#6f9fce" d="M1137.823 660.148v53.8h7.8v-53.8h-7.8z" />
      <path fill="#91b7dd" d="M1144.15 660.148v53.8h2.9v-53.8h-2.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
          fontWeight: 700,
        }}
        transform="translate(1072.891 776.61)"
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
        d="M1243.986 552.668h-44.7M1199.305 552.668v112.9M1199.305 664.526h146.1M1345.378 665.525v-65.9"
      />
      <g stroke="#ffc000">
        <path fill="none" strokeWidth={4} d="M1199.305 642.554h-49" />
        <path
          fill="#ffc000"
          strokeLinecap="round"
          d="m1150.305 648.554-12-6 12-6v12"
        />
      </g>
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M1082.198 651.719h-44.7M1037.516 651.719v-38M1136.58 722.453h180.4M1315.304 722.453v254.7"
      />
      <path
        fill="#ffc000"
        stroke="#ffc000"
        d="M1033.407 604.983v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M991.284 556.035h96.1v29.2h-96.1v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(991.284 556.035)"
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
        d="M1310.389 1001.777v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M1262.476 1010.088h115v46.9h-115v-46.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "11pt",
        }}
        transform="translate(1262.476 1010.088)"
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
        <path fill="none" strokeWidth={4} d="M1114.24 628.572v-93.1" />
        <path
          fill="#0070c0"
          strokeLinecap="round"
          d="m1114.24 526.672-6 10.4c1.8-1 3.8-1.6 6-1.6s4.2.6 6 1.6l-6-10.4"
        />
      </g>
      <g stroke="red">
        <path fill="none" strokeWidth={2} d="M1203.12 771.39h-45.3" />
        <path
          fill="red"
          strokeLinecap="round"
          d="m1151.52 771.39 7.4-4.2c-.7 1.2-1.1 2.7-1.1 4.2s.4 3 1.1 4.2l-7.4-4.2"
        />
      </g>
      <path fill="none" stroke="red" strokeWidth={2} d="M1203.12 771.474v203.7" />
      <path
        fill="red"
        stroke="red"
        d="M1198.608 1004.803v-7.6h-4.5l8.9-11.3 9 11.3h-4.5v7.6h-8.9z"
      />
      <path fill="#fff" d="M1155.17 1008.934h96.1v29.2h-96.1v-29.2z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1155.17 1008.934)"
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
        transform="rotate(90 99.25 994.152)"
      />
      <path
        fill="url(#A)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="rotate(-90 998.509 -94.604)"
      />
      <path
        fill="url(#B)"
        d="M10.5 0c0 .2-.2.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="matrix(0 -1 -1 0 1093.52 903.865)"
      />
      <path
        fill="#fff"
        fillOpacity={0.35}
        d="M1094.077 903.532v-9.9c0-.1.1-.1.1-.1.1 0 .1 0 .1.1v9.9c0 .1 0 .2-.1.2 0 0-.1-.1-.1-.2z"
      />
      <path
        fill="url(#C)"
        d="M0 0h14.8v2.3H0V0z"
        transform="matrix(-1 0 0 1 1084.946 906.425)"
      />
      <path
        fill="url(#C)"
        stroke="#595959"
        d="M3.3 0h6.5l3.3 5.5H0L3.3 0z"
        transform="matrix(-1 0 0 1 1084.11 901.097)"
      />
      <path
        fill="url(#z)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="rotate(90 96.586 980.535)"
      />
      <path
        fill="url(#D)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.4 0 9.7 0c5.4 0 9.8 3.7 9.8 8.3 0 4.6-4.4 8.3-9.8 8.3-5.3 0-9.7-3.7-9.7-8.3z"
        transform="rotate(-90 986.301 -82.926)"
      />
      <path
        fill="#fff"
        fillOpacity={0.27}
        d="M1077.531 901.73c-3.8 0-6.9-3.6-6.9-8.1s3.1-8.1 6.9-8.1c3.8 0 6.9 3.6 6.9 8.1s-3.1 8.1-6.9 8.1z"
      />
      <path
        fill="#9da6b0"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1077.56 890.723c-1.4 0-2.5 1.3-2.5 2.9 0 1.6 1.1 2.9 2.5 2.9s2.5-1.3 2.5-2.9c0-1.6-1.1-2.9-2.5-2.9z"
      />
      <path
        fill="url(#E)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="matrix(0 1 1 0 1075.606 891.361)"
      />
      <path
        fill="url(#A)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="rotate(90 89.925 972.288)"
      />
      <path
        fill="url(#B)"
        d="M10.5 0c0 .2-.1.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="matrix(0 1 1 0 1061.806 882.404)"
      />
      <path
        fill="#fff"
        fillOpacity={0.35}
        d="M1061.249 882.736v9.9c0 .1-.1.1-.1.1-.1 0-.1 0-.1-.1v-9.9c0-.1 0-.2.1-.2 0 0 .1.1.1.2z"
      />
      <path
        fill="url(#F)"
        d="M0 0h7.4v15H0V0z"
        transform="rotate(90 66.192 1026.351)"
      />
      <path
        fill="url(#G)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="rotate(-90 1030.708 -61.546)"
      />
      <path
        fill="url(#H)"
        d="M10.5 0c0 .2-.2.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="matrix(0 -1 -1 0 1092.662 969.121)"
      />
      <path
        fill="#92d050"
        d="M1093.22 968.79v-9.9c0-.1.1-.1.1-.1.1 0 .1 0 .1.1v9.9c0 .1 0 .2-.1.2 0 0-.1-.1-.1-.2z"
      />
      <path
        fill="url(#I)"
        d="M0 0h14.8v2.3H0V0z"
        transform="matrix(-1 0 0 1 1084.088 971.682)"
      />
      <path
        fill="url(#I)"
        stroke="#595959"
        d="M3.3 0h6.5l3.3 5.5H0L3.3 0z"
        transform="matrix(-1 0 0 1 1083.252 966.354)"
      />
      <path
        fill="url(#F)"
        stroke="#595959"
        d="M0 0h7.4v15H0V0z"
        transform="rotate(90 63.528 1012.734)"
      />
      <path
        fill="url(#J)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 8.3C0 3.7 4.4 0 9.7 0c5.4 0 9.8 3.7 9.8 8.3 0 4.6-4.4 8.3-9.8 8.3-5.3 0-9.7-3.7-9.7-8.3z"
        transform="rotate(-90 1018.5 -49.869)"
      />
      <path
        fill="#92d050"
        d="M1076.673 966.987c-3.8 0-6.9-3.6-6.9-8.1s3.1-8.1 6.9-8.1c3.8 0 6.9 3.6 6.9 8.1s-3.1 8.1-6.9 8.1z"
      />
      <path
        fill="#92d050"
        stroke="#595959"
        strokeWidth={0.25}
        d="M1076.702 955.98c-1.4 0-2.5 1.3-2.5 2.9 0 1.6 1.1 2.9 2.5 2.9s2.5-1.3 2.5-2.9c0-1.6-1.1-2.9-2.5-2.9z"
      />
      <path
        fill="url(#K)"
        stroke="#595959"
        strokeWidth={0.25}
        d="M0 1.9C0 .9 1 0 2.3 0c1.2 0 2.2.9 2.2 1.9 0 1.1-1 2-2.2 2C1 3.9 0 3 0 1.9z"
        transform="matrix(0 1 1 0 1074.748 956.618)"
      />
      <path
        fill="url(#G)"
        d="M.3 0h9.9c.2 0 .4.3.4.6 0 .4-.2.7-.4.7H.3C.2 1.3 0 1 0 .6 0 .3.2 0 .3 0z"
        transform="rotate(90 56.867 1004.488)"
      />
      <path
        fill="url(#H)"
        d="M10.5 0c0 .2-.1.4-.3.4H.3C.2.4 0 .2 0 0h10.5z"
        transform="matrix(0 1 1 0 1060.948 947.66)"
      />
      <path
        fill="#92d050"
        d="M1060.39 947.993v9.9c0 .1-.1.1-.1.1-.1 0-.1 0-.1-.1v-9.9c0-.1 0-.2.1-.2 0 0 .1.1.1.2z"
      />
      <path
        fill="#ffc000"
        d="M1110.373 896.16h-15.9v5h15.9v-5zM1110.373 962.076h-15.9v5h15.9v-5z"
      />
      <path fill="#fff" d="M1074.55 860.142h-70.5v19.9h70.5v-19.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1004.05 860.142)"
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
      <path fill="#fff" d="M1074.55 926.727h-70.5v19.9h70.5v-19.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(1004.05 926.727)"
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
        d="M1109.513 968.141v-139M1060.888 887.244h-898.7M1060.888 952.161h-426.1M634.78 952.161v-65.9"
      />
      <path
        fill="url(#L)"
        d="M0 0h37.6v14.2H0V0z"
        transform="translate(480.887 879.914)"
      />
      <path
        fill="url(#M)"
        d="M.3 0h22.4c.2 0 .3.1.3.3v19c0 .1-.1.3-.3.3H.3c-.2 0-.3-.2-.3-.3V.3C0 .1.1 0 .3 0z"
        transform="translate(488.206 848.019)"
      />
      <path
        fill="#b4b5b5"
        d="M489.243 849.1h20.9c.1 0 .2.1.2.3v16.8c0 .2-.1.3-.2.3h-20.9c-.1 0-.2-.1-.2-.3v-16.8c0-.2.1-.3.2-.3z"
      />
      <path fill="#92d050" d="M489.708 849.995h20v15.6h-20v-15.6z" />
      <path
        fill="url(#N)"
        d="M0 0h5.4v12.8s0 .8-2.7.8c-2.6 0-2.7-.8-2.7-.8V0z"
        transform="translate(496.998 867.498)"
      />
      <path
        fill="url(#L)"
        d="M.5 0h1.3c.3 0 .5.3.5.6V20c0 .4-.2.6-.5.6H.5c-.3 0-.5-.2-.5-.6V.6C0 .3.2 0 .5 0z"
        transform="translate(483.723 876.706)"
      />
      <path
        fill="url(#L)"
        d="M.5 0h1.3c.3 0 .5.3.5.6V20c0 .4-.2.6-.5.6H.5c-.3 0-.5-.2-.5-.6V.6C0 .3.2 0 .5 0z"
        transform="translate(513.38 876.706)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.5v14.2H0V0z"
        transform="translate(486.03 879.93)"
      />
      <path
        fill="url(#O)"
        d="M0 0h.5v14.2H0V0z"
        transform="translate(512.854 879.93)"
      />
      <path
        fill="url(#P)"
        d="M0 0h25v3.6H0V0z"
        transform="translate(487.204 855.996)"
      />
      <path
        fill="url(#N)"
        d="M0 0h2.6v1.5H0V0z"
        transform="translate(490.688 846.56)"
      />
      <path
        fill="url(#N)"
        d="M0 0h1.3v1.5H0V0z"
        transform="translate(491.341 845.163)"
      />
      <path
        fill="url(#L)"
        d="M0 0h1v3.6H0V0z"
        transform="translate(487.203 861.997)"
      />
      <path
        fill="url(#L)"
        d="M0 0h10.4v1.2H0V0z"
        transform="translate(476.877 863.191)"
      />
      <path
        fill="url(#L)"
        d="M0 0h11.8v1.1H0V0z"
        transform="matrix(0 -1 -1 0 476.466 876.86)"
      />
      <path
        fill="url(#Q)"
        d="M0 0s.8 0 1.2.5c.3.5.3 1.4.3 1.4H.4s0-.5-.4-.7V0z"
        transform="matrix(-1 0 0 1 476.88 863.191)"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M452.45 928.809h90.3v19.2h-90.3v-19.2z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(452.45 928.809)"
      >
        <tspan
          x={24.7}
          y={15.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"60.0 %"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M449.59 904.644h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M452.45 908.69h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(452.45 908.69)"
      >
        <tspan
          x={26.7}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LV302"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#0070c0"
        strokeDasharray="4,10"
        strokeWidth={2}
        d="m499.59 801.795.86 48.893"
      />
      <path
        fill="none"
        stroke="#236ea1"
        strokeDasharray="4,10"
        strokeWidth={2}
        d="M499.59 801.795h562.9"
      />
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M326.025 546.87h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M328.885 571.035h90.3v19.2h-90.3v-19.2z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(328.885 571.035)"
      >
        <tspan
          x={24.7}
          y={15.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"60.0 %"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M328.885 550.916h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(328.885 550.916)"
      >
        <tspan
          x={25.2}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LIC301"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#7e7e7e"
        d="M576.351 776.61h96.7v45.9h-96.7v-45.9z"
      />
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M579.21 800.775h90.3v19.2h-90.3v-19.2z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(579.21 800.775)"
      >
        <tspan
          x={24.7}
          y={15.6}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"60.0 %"}
        </tspan>
      </text>
      <path
        fill="#fff"
        stroke="#afafaf"
        d="M579.21 780.656h90.3v18.6h-90.3v-18.6z"
      />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(579.21 780.656)"
      >
        <tspan
          x={25.2}
          y={15.3}
          style={{
            fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          }}
        >
          {"LIC302"}
        </tspan>
      </text>
      <path
        fill="none"
        stroke="#ffc000"
        strokeWidth={4}
        d="M409.656 887.244v160.8M409.656 1047.041h-44.7"
      />
      <g stroke="#ffc000">
        <path fill="none" strokeWidth={4} d="M364.975 1048.04v-30.9" />
        <path
          fill="#ffc000"
          strokeLinecap="round"
          d="m358.975 1017.14 6-12 6 12h-12"
        />
      </g>
      <g stroke="#ffc000">
        <path fill="none" strokeWidth={4} d="M364.975 939.178v-38.9" />
        <path
          fill="#ffc000"
          strokeLinecap="round"
          d="m358.975 900.278 6-12 6 12h-12"
        />
      </g>
      <path
        fill="#ffc000"
        stroke="#ffc000"
        d="M156.837 892.094h-12.2v5.2l-18.3-10.4 18.3-10.4v5.2h12.2v10.4z"
      />
      <path fill="#fff" d="M10.476 863.444h112.9v46.9h-112.9v-46.9z" />
      <text
        xmlSpace="preserve"
        style={{
          fill: "#000",
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          fontSize: "12pt",
        }}
        transform="translate(10.476 863.444)"
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
export default Doe1HMI 


