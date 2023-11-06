import * as React from "react"
const Bleaching_HMI = (props) => (
  //  <svg xmlns="http://www.w3.org/2000/svg" width={1854} height={1039}>
  <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox="0 0 1920 1080">
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0.25} stopColor="#ebebeb" />
        <stop offset={0.37} stopColor="#c2c2c2" />
        <stop offset={0.82} stopColor="#6185a8" />
        <stop offset={0.85} stopColor="#909090" stopOpacity={0.47} />
      </linearGradient>
      <linearGradient id="b" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#9aa1aa" />
        <stop offset={0.22} stopColor="#aeb5c0" />
        <stop offset={0.57} stopColor="#dce0e5" />
        <stop offset={0.84} stopColor="#cacfd7" />
        <stop offset={1} stopColor="#a7afb9" />
      </linearGradient>
      <linearGradient id="c" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#8f969d" />
        <stop offset={0.64} stopColor="#d3d8de" />
        <stop offset={1} stopColor="#9aa0a8" />
      </linearGradient>
      <linearGradient id="d" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#626974" />
        <stop offset={0.66} stopColor="#ccd0d5" />
        <stop offset={1} stopColor="#5e6670" />
      </linearGradient>
      <linearGradient id="e" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#a3abb1" />
        <stop offset={0.03} stopColor="#ecf4fb" />
        <stop offset={0.05} stopColor="#d5dee6" />
        <stop offset={0.64} stopColor="#d1dae3" />
        <stop offset={0.95} stopColor="#cdd5dd" />
        <stop offset={1} stopColor="#979ea4" />
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
        <stop offset={0} stopColor="#79ae42" />
        <stop offset={0.22} stopColor="#89c34b" />
        <stop offset={0.57} stopColor="#cde7bb" />
        <stop offset={0.84} stopColor="#afda8c" />
        <stop offset={1} stopColor="#84bc48" />
      </linearGradient>
      <linearGradient id="l" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#6f9f3b" />
        <stop offset={0.64} stopColor="#c2e2aa" />
        <stop offset={1} stopColor="#77aa40" />
      </linearGradient>
      <linearGradient id="m" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#649035" />
        <stop offset={0.66} stopColor="#cde7bb" />
        <stop offset={1} stopColor="#608b33" />
      </linearGradient>
      <linearGradient id="n" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#669336" />
        <stop offset={0.03} stopColor="#afda8c" />
        <stop offset={0.05} stopColor="#86bf49" />
        <stop offset={0.64} stopColor="#84bc48" />
        <stop offset={0.95} stopColor="#81b846" />
        <stop offset={1} stopColor="#5e8831" />
      </linearGradient>
      <linearGradient id="q" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#949990" />
        <stop offset={0.15} stopColor="#cdd2c7" />
        <stop offset={0.25} stopColor="#e3e6e1" />
        <stop offset={0.52} stopColor="#b0b5aa" />
        <stop offset={0.69} stopColor="#9ca197" />
        <stop offset={0.8} stopColor="#93988f" />
        <stop offset={0.92} stopColor="#8b8f86" />
        <stop offset={1} stopColor="#a0a59b" />
      </linearGradient>
      <linearGradient id="r" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#949990" />
        <stop offset={0.15} stopColor="#cdd2c7" />
        <stop offset={0.25} stopColor="#e3e6e1" />
        <stop offset={0.52} stopColor="#b0b5aa" />
        <stop offset={0.69} stopColor="#9ca197" />
        <stop offset={0.8} stopColor="#93988f" />
        <stop offset={0.92} stopColor="#8b8f86" />
        <stop offset={1} stopColor="#a0a59b" />
      </linearGradient>
      <linearGradient id="s" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#949990" />
        <stop offset={0.15} stopColor="#cdd2c7" />
        <stop offset={0.25} stopColor="#e3e6e1" />
        <stop offset={0.52} stopColor="#b0b5aa" />
        <stop offset={0.69} stopColor="#9ca197" />
        <stop offset={0.8} stopColor="#93988f" />
        <stop offset={0.92} stopColor="#8b8f86" />
        <stop offset={1} stopColor="#84877f" />
      </linearGradient>
      <linearGradient id="t" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#898c85" />
        <stop offset={0.15} stopColor="#bfc3ba" />
        <stop offset={0.25} stopColor="#dddeda" />
        <stop offset={0.52} stopColor="#a2a69d" />
        <stop offset={0.69} stopColor="#90938b" />
        <stop offset={0.8} stopColor="#888b83" />
        <stop offset={0.92} stopColor="#80837c" />
        <stop offset={1} stopColor="#94978f" />
      </linearGradient>
      <linearGradient id="u" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#0082b2" />
        <stop offset={0.15} stopColor="#45b6f1" />
        <stop offset={0.25} stopColor="#b3d8f7" />
        <stop offset={0.52} stopColor="#009ad2" />
        <stop offset={0.69} stopColor="#08b" />
        <stop offset={0.8} stopColor="#0080b0" />
        <stop offset={0.92} stopColor="#0079a6" />
        <stop offset={1} stopColor="#008cbf" />
      </linearGradient>
      <linearGradient id="v" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#37638a" />
        <stop offset={0.15} stopColor="#6593c0" />
        <stop offset={0.25} stopColor="#bac9dd" />
        <stop offset={0.52} stopColor="#4276a3" />
        <stop offset={0.69} stopColor="#3a6991" />
        <stop offset={0.8} stopColor="#366289" />
        <stop offset={0.92} stopColor="#335d81" />
        <stop offset={1} stopColor="#3c6b94" />
      </linearGradient>
      <linearGradient id="w" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#b3a593" />
        <stop offset={0.03} stopColor="#fdeeda" />
        <stop offset={0.05} stopColor="#e9d7bf" />
        <stop offset={0.64} stopColor="#e5d3bc" />
        <stop offset={0.95} stopColor="#e0ceb8" />
        <stop offset={1} stopColor="#a69988" />
      </linearGradient>
      <linearGradient id="x" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#9e9e9e" />
        <stop offset={0.15} stopColor="#f6f6f6" />
        <stop offset={0.26} stopColor="#fff" />
        <stop offset={0.41} stopColor="#fff" />
        <stop offset={0.6} stopColor="#d1d1d1" />
        <stop offset={0.8} stopColor="#a8a8a8" />
        <stop offset={0.93} stopColor="#898989" />
      </linearGradient>
      <linearGradient id="y" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#9c9080" />
        <stop offset={0.15} stopColor="#f4e1c8" />
        <stop offset={0.26} stopColor="#fdebd5" />
        <stop offset={0.41} stopColor="#fde9d1" />
        <stop offset={0.6} stopColor="#d0bfaa" />
        <stop offset={0.8} stopColor="#a69988" />
        <stop offset={0.93} stopColor="#887d6f" />
      </linearGradient>
      <linearGradient id="z" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} />
        <stop offset={0.03} stopColor="#7c7c7c" />
        <stop offset={0.05} />
        <stop offset={0.64} />
        <stop offset={0.95} />
        <stop offset={1} />
      </linearGradient>
      <linearGradient id="A" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#b3a593" />
        <stop offset={0.03} stopColor="#fdeeda" />
        <stop offset={0.05} stopColor="#e9d7bf" />
        <stop offset={0.64} stopColor="#e5d3bc" />
        <stop offset={0.95} stopColor="#e0ceb8" />
        <stop offset={1} stopColor="#a69988" />
      </linearGradient>
      <linearGradient id="B" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#bac0c1" />
        <stop offset={0.15} stopColor="#f4fafc" />
        <stop offset={0.25} stopColor="#f8fcfd" />
        <stop offset={0.44} stopColor="#d5dbdd" />
        <stop offset={0.6} stopColor="#bdc3c4" />
        <stop offset={0.8} stopColor="#a0a4a6" />
        <stop offset={0.97} stopColor="#929697" />
        <stop offset={1} stopColor="#c2c7c9" />
      </linearGradient>
      <linearGradient id="C" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#b5b5b5" />
        <stop offset={0.03} stopColor="#fff" />
        <stop offset={0.08} stopColor="#ebebeb" />
        <stop offset={0.64} stopColor="#e7e7e7" />
        <stop offset={0.95} stopColor="#e2e2e2" />
        <stop offset={1} stopColor="#a8a8a8" />
      </linearGradient>
      <linearGradient id="D" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#bac0c1" />
        <stop offset={0.15} stopColor="#f4fafc" />
        <stop offset={0.25} stopColor="#f8fcfd" />
        <stop offset={0.44} stopColor="#d5dbdd" />
        <stop offset={0.6} stopColor="#bdc3c4" />
        <stop offset={0.8} stopColor="#a0a4a6" />
        <stop offset={0.97} stopColor="#929697" />
        <stop offset={1} stopColor="#c2c7c9" />
      </linearGradient>
      <linearGradient id="E" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#939798" />
        <stop offset={0.15} stopColor="#c5cacb" />
        <stop offset={0.25} stopColor="#dfe2e2" />
        <stop offset={0.44} stopColor="#a8adae" />
        <stop offset={0.6} stopColor="#959a9b" />
        <stop offset={0.8} stopColor="#7d8182" />
        <stop offset={0.97} stopColor="#727676" />
        <stop offset={1} stopColor="#999d9e" />
      </linearGradient>
      <linearGradient id="F" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#b50000" />
        <stop offset={0.03} stopColor="#ff7c7c" />
        <stop offset={0.08} stopColor="#eb0000" />
        <stop offset={0.64} stopColor="#e70000" />
        <stop offset={0.95} stopColor="#e20000" />
        <stop offset={1} stopColor="#a80000" />
      </linearGradient>
      <linearGradient
        id="G"
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
      <linearGradient id="H" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#669336" />
        <stop offset={0.03} stopColor="#afda8c" />
        <stop offset={0.08} stopColor="#86bf49" />
        <stop offset={0.64} stopColor="#84bc48" />
        <stop offset={0.95} stopColor="#81b846" />
        <stop offset={1} stopColor="#5e8831" />
      </linearGradient>
      <linearGradient id="I" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#a2a2a2" />
        <stop offset={0.22} stopColor="#b6b6b6" />
        <stop offset={0.57} stopColor="#e0e0e0" />
        <stop offset={0.84} stopColor="#d0d0d0" />
        <stop offset={1} stopColor="#b0b0b0" />
      </linearGradient>
      <linearGradient id="J" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#949494" />
        <stop offset={0.64} stopColor="#dadada" />
        <stop offset={1} stopColor="#9f9f9f" />
      </linearGradient>
      <linearGradient id="K" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#868686" />
        <stop offset={0.66} stopColor="#e0e0e0" />
        <stop offset={1} stopColor="#818181" />
      </linearGradient>
      <linearGradient id="L" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#888" />
        <stop offset={0.03} stopColor="#d0d0d0" />
        <stop offset={0.05} stopColor="#b2b2b2" />
        <stop offset={0.64} stopColor="#b0b0b0" />
        <stop offset={0.95} stopColor="#acacac" />
        <stop offset={1} stopColor="#7e7e7e" />
      </linearGradient>
      <linearGradient id="O" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#a7b1b4" />
        <stop offset={0.15} stopColor="#dce9ec" />
        <stop offset={0.25} stopColor="#ecf2f4" />
        <stop offset={0.44} stopColor="#bfcace" />
        <stop offset={0.6} stopColor="#aab4b7" />
        <stop offset={0.8} stopColor="#8f979a" />
        <stop offset={0.97} stopColor="#828a8d" />
        <stop offset={1} stopColor="#aeb8bb" />
      </linearGradient>
      <linearGradient id="P" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#9aa3a5" />
        <stop offset={0.15} stopColor="#cdd8da" />
        <stop offset={0.25} stopColor="#e3e9ea" />
        <stop offset={0.44} stopColor="#b0babc" />
        <stop offset={0.6} stopColor="#9ca6a7" />
        <stop offset={0.8} stopColor="#838b8d" />
        <stop offset={0.97} stopColor="#787f80" />
        <stop offset={1} stopColor="#a0a9ab" />
      </linearGradient>
      <linearGradient
        id="Q"
        x1={21}
        x2={7}
        y1={11}
        y2={-6}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#bac0c1" />
        <stop offset={0.15} stopColor="#f4fafc" />
        <stop offset={0.25} stopColor="#f8fcfd" />
        <stop offset={0.44} stopColor="#d5dbdd" />
        <stop offset={0.6} stopColor="#bdc3c4" />
        <stop offset={0.8} stopColor="#a0a4a6" />
        <stop offset={0.97} stopColor="#929697" />
        <stop offset={1} stopColor="#c2c7c9" />
      </linearGradient>
      <linearGradient id="R" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#71a23c" />
        <stop offset={0.15} stopColor="#b4dd95" />
        <stop offset={0.25} stopColor="#bbdf9f" />
        <stop offset={0.52} stopColor="#7fb645" />
        <stop offset={0.69} stopColor="#71a23c" />
        <stop offset={0.8} stopColor="#6a9838" />
        <stop offset={0.92} stopColor="#649035" />
      </linearGradient>
      <linearGradient id="S" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#00863b" />
        <stop offset={0.15} stopColor="#45b667" />
        <stop offset={0.25} stopColor="#b3d8bb" />
        <stop offset={0.44} stopColor="#009a45" />
        <stop offset={0.6} stopColor="#00883c" />
        <stop offset={0.8} stopColor="#007231" />
        <stop offset={0.97} stopColor="#00682c" />
        <stop offset={1} stopColor="#008c3e" />
      </linearGradient>
      <linearGradient id="T" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#6f9f3b" />
        <stop offset={0.15} stopColor="#9cd367" />
        <stop offset={0.25} stopColor="#cde7bb" />
        <stop offset={0.44} stopColor="#7fb645" />
        <stop offset={0.6} stopColor="#71a23c" />
        <stop offset={0.8} stopColor="#5e8831" />
        <stop offset={0.97} stopColor="#567c2c" />
        <stop offset={1} stopColor="#73a53e" />
      </linearGradient>
      <linearGradient id="U" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#71a23c" />
        <stop offset={0.15} stopColor="#b4dd95" />
        <stop offset={0.25} stopColor="#bbdf9f" />
        <stop offset={0.52} stopColor="#7fb645" />
        <stop offset={0.69} stopColor="#71a23c" />
        <stop offset={0.8} stopColor="#6a9838" />
        <stop offset={0.92} stopColor="#649035" />
      </linearGradient>
      <linearGradient id="V" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#ad976f" />
        <stop offset={0.15} stopColor="#ebd0a1" />
        <stop offset={0.25} stopColor="#f4e5cf" />
        <stop offset={0.52} stopColor="#cdb384" />
        <stop offset={0.69} stopColor="#b69f75" />
        <stop offset={0.8} stopColor="#ac966e" />
        <stop offset={0.92} stopColor="#a28e68" />
        <stop offset={1} stopColor="#baa378" />
      </linearGradient>
      <linearGradient id="W" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#bcad9a" />
        <stop offset={0.15} stopColor="#fdead3" />
        <stop offset={0.25} stopColor="#fef3e7" />
        <stop offset={0.52} stopColor="#deccb6" />
        <stop offset={0.69} stopColor="#c5b5a2" />
        <stop offset={0.8} stopColor="#baab98" />
        <stop offset={0.92} stopColor="#b0a190" />
        <stop offset={1} stopColor="#cabaa5" />
      </linearGradient>
      <linearGradient id="X" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#c4aa84" />
        <stop offset={0.15} stopColor="#ffe0b3" />
        <stop offset={0.25} stopColor="#ffeed7" />
        <stop offset={0.44} stopColor="#dfc297" />
        <stop offset={0.6} stopColor="#c7ad86" />
        <stop offset={0.8} stopColor="#a89170" />
        <stop offset={0.97} stopColor="#998566" />
        <stop offset={1} stopColor="#cbb189" />
      </linearGradient>
      <linearGradient id="Y" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#a2a6ab" />
        <stop offset={0.15} stopColor="#dde0e5" />
        <stop offset={0.25} stopColor="#dfe2e7" />
        <stop offset={0.52} stopColor="#b6bac0" />
        <stop offset={0.69} stopColor="#a2a6ab" />
        <stop offset={0.8} stopColor="#989ca1" />
        <stop offset={0.92} stopColor="#909398" />
      </linearGradient>
      <linearGradient id="Z" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#9a9da3" />
        <stop offset={0.15} stopColor="#d3d8de" />
        <stop offset={0.25} stopColor="#e7e9ed" />
        <stop offset={0.52} stopColor="#b6bac0" />
        <stop offset={0.69} stopColor="#a2a6ab" />
        <stop offset={0.8} stopColor="#989ca1" />
        <stop offset={0.92} stopColor="#909398" />
        <stop offset={1} stopColor="#a5a9af" />
      </linearGradient>
      <linearGradient id="aa" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#6b9a39" />
        <stop offset={0.15} stopColor="#9cd367" />
        <stop offset={0.25} stopColor="#cde7bb" />
        <stop offset={0.52} stopColor="#7fb645" />
        <stop offset={0.69} stopColor="#71a23c" />
        <stop offset={0.8} stopColor="#6a9838" />
        <stop offset={0.92} stopColor="#649035" />
        <stop offset={1} stopColor="#73a53e" />
      </linearGradient>
      <linearGradient id="ab" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#71a23c" />
        <stop offset={0.15} stopColor="#b4dd95" />
        <stop offset={0.25} stopColor="#bbdf9f" />
        <stop offset={0.52} stopColor="#7fb645" />
        <stop offset={0.69} stopColor="#71a23c" />
        <stop offset={0.8} stopColor="#6a9838" />
        <stop offset={0.92} stopColor="#649035" />
      </linearGradient>
      <linearGradient id="ac" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#6b9a39" />
        <stop offset={0.15} stopColor="#9cd367" />
        <stop offset={0.25} stopColor="#cde7bb" />
        <stop offset={0.52} stopColor="#7fb645" />
        <stop offset={0.69} stopColor="#71a23c" />
        <stop offset={0.8} stopColor="#6a9838" />
        <stop offset={0.92} stopColor="#649035" />
        <stop offset={1} stopColor="#73a53e" />
      </linearGradient>
      <linearGradient id="ad" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#6b9a39" />
        <stop offset={0.15} stopColor="#9cd367" />
        <stop offset={0.25} stopColor="#cde7bb" />
        <stop offset={0.52} stopColor="#7fb645" />
        <stop offset={0.69} stopColor="#71a23c" />
        <stop offset={0.8} stopColor="#6a9838" />
        <stop offset={0.92} stopColor="#649035" />
        <stop offset={1} stopColor="#73a53e" />
      </linearGradient>
      <linearGradient id="ae" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#a2a6ab" />
        <stop offset={0.15} stopColor="#d3d8de" />
        <stop offset={0.25} stopColor="#d4d9df" />
        <stop offset={0.52} stopColor="#b6bac0" />
        <stop offset={0.69} stopColor="#a2a6ab" />
        <stop offset={0.8} stopColor="#989ca1" />
        <stop offset={0.92} stopColor="#909398" />
      </linearGradient>
      <linearGradient
        id="af"
        x1={4}
        x2={1}
        y1={-1}
        y2={5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#a2a6ab" />
        <stop offset={0.15} stopColor="#d3d8de" />
        <stop offset={0.25} stopColor="#d4d9df" />
        <stop offset={0.52} stopColor="#b6bac0" />
        <stop offset={0.69} stopColor="#a2a6ab" />
        <stop offset={0.8} stopColor="#989ca1" />
        <stop offset={0.92} stopColor="#909398" />
      </linearGradient>
      <linearGradient
        id="ag"
        x1={4}
        x2={1}
        y1={0}
        y2={5}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#a2a6ab" />
        <stop offset={0.15} stopColor="#d3d8de" />
        <stop offset={0.25} stopColor="#d4d9df" />
        <stop offset={0.52} stopColor="#b6bac0" />
        <stop offset={0.69} stopColor="#a2a6ab" />
        <stop offset={0.8} stopColor="#989ca1" />
        <stop offset={0.92} stopColor="#909398" />
      </linearGradient>
      <linearGradient id="ah" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0.1} stopColor="#002060" />
        <stop offset={0.44} stopColor="#c2c7c9" />
      </linearGradient>
      <linearGradient id="ai" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#a1a9b3" />
        <stop offset={0.09} stopColor="#a3acb6" />
        <stop offset={0.36} stopColor="#c9d4e0" />
        <stop offset={0.56} stopColor="#b5bfc9" />
        <stop offset={0.83} stopColor="#9199a2" />
        <stop offset={1} stopColor="#676d74" />
      </linearGradient>
      <linearGradient id="aj" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#b3bdbd" />
        <stop offset={0.15} stopColor="#eaf7f7" />
        <stop offset={0.25} stopColor="#f3fbfb" />
        <stop offset={0.44} stopColor="#ccd8d8" />
        <stop offset={0.6} stopColor="#b5c0c0" />
        <stop offset={0.8} stopColor="#99a2a2" />
        <stop offset={0.97} stopColor="#8c9494" />
      </linearGradient>
      <linearGradient id="ak" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#90a7aa" />
        <stop offset={0.15} stopColor="#c2dce0" />
        <stop offset={0.25} stopColor="#deecee" />
        <stop offset={0.44} stopColor="#a5bfc2" />
        <stop offset={0.6} stopColor="#93aaad" />
        <stop offset={0.8} stopColor="#7b8f91" />
        <stop offset={0.97} stopColor="#708285" />
      </linearGradient>
      <linearGradient id="al" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#c1c2c3" />
        <stop offset={0.15} stopColor="#fbfdfe" />
        <stop offset={0.25} stopColor="#fdfefe" />
        <stop offset={0.52} stopColor="#dcdede" />
        <stop offset={0.69} stopColor="#c4c5c6" />
        <stop offset={0.8} stopColor="#b9babb" />
        <stop offset={0.97} stopColor="#aeb0b0" />
        <stop offset={1} stopColor="#c8cacb" />
      </linearGradient>
      <linearGradient id="am" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#90a4a9" />
        <stop offset={0.03} stopColor="#d8edf2" />
        <stop offset={0.08} stopColor="#bdd6dc" />
        <stop offset={0.64} stopColor="#bad2d9" />
        <stop offset={0.95} stopColor="#b5cdd4" />
        <stop offset={1} stopColor="#86989d" />
      </linearGradient>
      <linearGradient id="an" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#90a4a9" />
        <stop offset={0.03} stopColor="#d8edf2" />
        <stop offset={0.08} stopColor="#bdd6dc" />
        <stop offset={0.64} stopColor="#bad2d9" />
        <stop offset={0.95} stopColor="#b5cdd4" />
        <stop offset={1} stopColor="#86989d" />
      </linearGradient>
      <linearGradient id="ao" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#c1c2c3" />
        <stop offset={0.15} stopColor="#fbfdfe" />
        <stop offset={0.25} stopColor="#fdfefe" />
        <stop offset={0.52} stopColor="#dcdede" />
        <stop offset={0.69} stopColor="#c4c5c6" />
        <stop offset={0.8} stopColor="#b9babb" />
        <stop offset={0.97} stopColor="#aeb0b0" />
        <stop offset={1} stopColor="#c8cacb" />
      </linearGradient>
      <linearGradient id="ap" x1="100%" x2="0%" y1="0%" y2="0%">
        <stop offset={0} stopColor="#2d2929" />
        <stop offset={0.15} stopColor="#5b5858" />
        <stop offset={0.25} stopColor="#b8b7b7" />
        <stop offset={0.52} stopColor="#353130" />
        <stop offset={0.69} stopColor="#2e2a29" />
        <stop offset={0.8} stopColor="#2b2726" />
        <stop offset={0.97} stopColor="#282424" />
        <stop offset={1} stopColor="#2f2b2b" />
      </linearGradient>
      <linearGradient id="aq" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#3d3b3b" />
        <stop offset={0.03} stopColor="#908f8f" />
        <stop offset={0.08} stopColor="#514f4f" />
        <stop offset={0.64} stopColor="#504e4e" />
        <stop offset={0.95} stopColor="#4e4c4c" />
        <stop offset={1} stopColor="#383636" />
      </linearGradient>
      <radialGradient
        id="f"
        cx={9}
        cy={8}
        r={11.7}
        fx={9}
        fy={8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#c7cbd1" />
        <stop offset={0.91} stopColor="#c4c7cd" />
        <stop offset={0.74} stopColor="#d4d8dd" />
        <stop offset={0.54} stopColor="#b6bcc4" />
      </radialGradient>
      <radialGradient
        id="g"
        cx={2}
        cy={2}
        r={2.7}
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
        id="o"
        cx={9}
        cy={8}
        r={11.7}
        fx={9}
        fy={8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#8eca4e" />
        <stop offset={0.91} stopColor="#8bc64c" />
        <stop offset={0.74} stopColor="#bbdf9f" />
        <stop offset={0.54} stopColor="#8bc64c" />
      </radialGradient>
      <radialGradient
        id="p"
        cx={2}
        cy={2}
        r={2.7}
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
        id="M"
        cx={9}
        cy={8}
        r={11.7}
        fx={9}
        fy={8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#bdbdbd" />
        <stop offset={0.91} stopColor="#b9b9b9" />
        <stop offset={0.74} stopColor="#d6d6d6" />
        <stop offset={0.54} stopColor="#b9b9b9" />
      </radialGradient>
      <radialGradient
        id="N"
        cx={2}
        cy={2}
        r={2.7}
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
    <g stroke="#ffc000">
      <path fill="none" strokeWidth={4} d="M1118.056 453.34v-123.2" />
      <path
        fill="#ffc000"
        strokeLinecap="round"
        d="m1124.056 453.34-6 12-6-12h12"
      />
    </g>
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={4}
      d="M1118.056 330.113h-231.8M887.924 330.113v-15.7"
    />
    <g stroke="#ffc000">
      <path fill="none" strokeWidth={4} d="M1186.428 452.468v-119.7" />
      <path
        fill="#ffc000"
        strokeLinecap="round"
        d="m1192.428 452.468-6 12-6-12h12"
      />
    </g>
    <path fill="none" stroke="#7e7e7e" d="M334.264 622.99h73.4v34h-73.4v-34z" />
    <path
      fill="url(#a)"
      stroke="#696969"
      d="M0 0h34.1v41.5H0V0z"
      transform="translate(303.496 795.863)"
    />
    <path
      fill="url(#b)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 160.946 810.39)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 161.226 818.253)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 489.524 328.694)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M160.29 818.002v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#e)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(169.15 820.455)"
    />
    <path
      fill="url(#e)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(169.962 815.8)"
    />
    <path
      fill="url(#b)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 176.745 800.82)"
    />
    <path
      fill="url(#f)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 184.404 817.79)"
    />
    <path
      fill="#fff"
      fillOpacity={0.27}
      d="M176.342 816.353c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#9da6b0"
      stroke="#595959"
      strokeWidth={0.25}
      d="M176.344 806.739c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#g)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 -314.54 492.755)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 191.21 799.436)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 -303.933 495.538)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M192.147 799.687v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={5.333}
      d="m302.104 803.871 36.157 24.005"
    />
    <path
      fill="none"
      stroke="#ff0"
      strokeWidth={5.333}
      d="m301.409 828.631 36.153-24.01"
    />
    <path
      fill="url(#a)"
      stroke="#696969"
      d="M0 0h34.1v41.5H0V0z"
      transform="translate(377.966 795.863)"
    />
    <path
      fill="none"
      stroke="#ff0"
      strokeWidth={5.333}
      d="m376.574 803.871 36.157 24.005"
    />
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={5.333}
      d="m375.878 828.631 36.153-24.01"
    />
    <path
      fill="#ff0"
      stroke="#7e7e7e"
      d="m377.27 805.339-5 5v-3h-34.7v-4h34.7v-3l5 5z"
    />
    <path
      fill="#ffc000"
      stroke="#7e7e7e"
      d="m377.27 827.909-5 5v-3h-34.7v-4h34.7v-3l5 5z"
    />
    <path
      fill="#ff0"
      d="m436.44 886.16-4.855-4.745 2.9-.034-.64-55.596 3.8-.044.64 55.597 2.899-.034-4.745 4.855z"
    />
    <path
      fill="none"
      stroke="#ff0"
      strokeWidth={5.333}
      d="M411.372 827.174h25.8"
    />
    <path
      fill="#ff0"
      stroke="#7e7e7e"
      d="M440.68 890.044v6.6h4.4l-8.7 9.9-8.7-9.9h4.3v-6.6h8.7z"
    />
    <path
      fill="#ff0"
      d="m279.233 886.883-4.854-4.744 2.9-.033-.641-55.597 3.8-.044.64 55.597 2.9-.034-4.745 4.855z"
    />
    <path
      fill="none"
      stroke="#ff0"
      strokeWidth={5.333}
      d="M277.134 827.898h25.8"
    />
    <path
      fill="#ff0"
      stroke="#7e7e7e"
      d="M274.873 907.278v-6.6h-4.4l8.7-9.9 8.7 9.9h-4.3v6.6h-8.7z"
    />
    <path
      fill="url(#h)"
      d="M0 11.8h71.5V0H0v11.8z"
      transform="translate(1439.597 644.63)"
    />
    <path
      fill="url(#i)"
      d="M0 2.7h71.5V0H0v2.7z"
      transform="translate(1439.597 652.646)"
    />
    <path
      fill="url(#h)"
      d="M0 10.7h71.5V0H0v10.7z"
      transform="translate(1439.597 800.162)"
    />
    <path
      fill="url(#i)"
      d="M0 3.1h71.5V0H0v3.1z"
      transform="translate(1439.597 799.955)"
    />
    <path
      fill="url(#h)"
      d="M6.9 0H79c3.8 0 6.9 4.7 6.9 10.5v124.1c0 5.8-3.1 10.5-6.9 10.5H6.9c-3.8 0-6.9-4.7-6.9-10.5V10.5C0 4.7 3.1 0 6.9 0z"
      transform="translate(1432.403 655.192)"
    />
    <path
      fill="url(#j)"
      d="M0 0h9.6v102.1H0V0z"
      transform="translate(1437.405 681.277)"
    />
    <path
      fill="url(#h)"
      d="M0 6h55.5V0H0v6z"
      transform="translate(510.792 603.726)"
    />
    <path
      fill="url(#i)"
      d="M0 1.4h55.5V0H0v1.4z"
      transform="translate(510.792 607.849)"
    />
    <path
      fill="url(#h)"
      d="M0 5.5h55.5V0H0v5.5z"
      transform="translate(510.792 683.716)"
    />
    <path
      fill="url(#i)"
      d="M0 1.6h55.5V0H0v1.6z"
      transform="translate(510.792 683.61)"
    />
    <path
      fill="url(#h)"
      d="M5.4 0h55.9c3 0 5.4 2.4 5.4 5.4v63.8c0 3-2.4 5.4-5.4 5.4H5.4c-3 0-5.4-2.4-5.4-5.4V5.4C0 2.4 2.4 0 5.4 0z"
      transform="translate(505.204 609.158)"
    />
    <path
      fill="url(#j)"
      stroke="#3498db"
      d="M0 0h9.6v55.8H0V0z"
      transform="translate(508.131 625.118)"
    />
    <path fill="#ffc000" d="M192.525 801.839h111.7v4.4h-111.7v-4.4z" />
    <path
      fill="url(#k)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 160.946 843.839)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 161.226 851.702)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 506.249 345.418)"
    />
    <path
      fill="#92d050"
      d="M160.29 851.452v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#n)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(169.15 853.904)"
    />
    <path
      fill="url(#n)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(169.962 849.25)"
    />
    <path
      fill="url(#k)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 176.745 834.27)"
    />
    <path
      fill="url(#o)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 184.404 851.24)"
    />
    <path
      fill="#92d050"
      d="M176.342 849.803c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#92d050"
      stroke="#595959"
      strokeWidth={0.25}
      d="M176.344 840.188c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#p)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 -331.265 509.48)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 191.21 832.885)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 -320.657 512.263)"
    />
    <path
      fill="#92d050"
      d="M192.147 833.136v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path fill="#ffc000" d="M223.124 802.711v37.5h-4.2v-37.5h4.2z" />
    <path
      fill="#ffc000"
      d="M191.691 836.378h30v4.4h-30v-4.4zM129.99 845.748h30v4.4h-30v-4.4zM103.307 811.723h56.7v4.4h-56.7v-4.4z"
    />
    <path fill="#ffc000" d="M133.907 812.308v37.5h-4.2v-37.5h4.2z" />
    <path
      fill="#ff0"
      stroke="#7e7e7e"
      d="M67.87 810.275h11.9v-4.5l17.7 9.1-17.7 9.1v-4.6h-11.9v-9.1z"
    />
    <path
      fill="url(#a)"
      stroke="#696969"
      d="M0 0h34.1v41.5H0V0z"
      transform="translate(322.812 679.01)"
    />
    <path
      fill="none"
      stroke="red"
      strokeWidth={5.333}
      d="m321.42 687.017 36.153 24.01"
    />
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={5.333}
      d="m320.724 711.777 36.157-24.004"
    />
    <path fill="red" d="M260.898 685.517h61.7v4.4h-61.7v-4.4z" />
    <path
      fill="url(#q)"
      d="M0 0h10.2v8H0V0z"
      transform="translate(144.857 684.054)"
    />
    <path
      fill="url(#q)"
      d="M0 0h10.2v8H0V0z"
      transform="translate(167.777 684.054)"
    />
    <path
      fill="url(#q)"
      d="M1.3 0h10.2s1.4.1 1.4 8.8c.1 8.8-1.4 8.8-1.4 8.8H1.3S0 17.6 0 8.8C0 .1 1.3 0 1.3 0z"
      transform="translate(154.947 679.227)"
    />
    <path
      fill="url(#r)"
      d="M0 0h3.9v6.7s-.2.4-1.9.4c-1.8 0-2-.4-2-.4V0z"
      transform="translate(159.622 673.62)"
    />
    <path
      fill="url(#q)"
      d="M.5 0H2c.2 0 .4.2.4.5v11.7c0 .3-.2.5-.4.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
      transform="translate(149.96 681.773)"
    />
    <path
      fill="url(#s)"
      d="M1.1 1.7C1.1 1 1.6.4 2.3.4s1.2.6 1.2 1.3C3.5 2.4 3 3 2.3 3s-1.2-.6-1.2-1.3zM.6 0S0 0 0 .6v2.1s0 .7.6.7.8.8.8.8v1.7h1.8V4.2s.1-.8.8-.8c.6 0 .6-.7.6-.7V.6C4.6.1 4 0 4 0H.6z"
      transform="translate(148.89 683.054)"
    />
    <path
      fill="url(#t)"
      d="M1.5 0v3c0 .1-.1.2-.2.2H.2C.1 3.2 0 3.1 0 3V0h1.5z"
      transform="translate(150.41 688.968)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .1.1.1.2v1c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
      transform="translate(149.695 689.001)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .1.1.1.2v1c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
      transform="translate(149.695 690.631)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .1.1.1.2v1c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
      transform="translate(151.918 689.001)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .1.1.1.2v1c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
      transform="translate(151.918 690.631)"
    />
    <path
      fill="url(#q)"
      d="M.5 0H2c.2 0 .4.2.4.5v11.7c0 .3-.2.5-.4.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
      transform="translate(170.587 681.773)"
    />
    <path
      fill="url(#s)"
      d="M1.1 1.7C1.1 1 1.6.4 2.3.4s1.2.6 1.2 1.3C3.5 2.4 3 3 2.3 3s-1.2-.6-1.2-1.3zM.6 0S0 0 0 .6v2.1s0 .7.6.7.8.8.8.8v1.7h1.8V4.2s.1-.8.8-.8c.6 0 .6-.7.6-.7V.6C4.6.1 4 0 4 0H.6z"
      transform="translate(169.517 683.054)"
    />
    <path
      fill="url(#t)"
      d="M1.5 0v3c0 .1-.1.2-.2.2H.2C.1 3.2 0 3.1 0 3V0h1.5z"
      transform="translate(171.038 688.968)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .1.1.1.2v1c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
      transform="translate(170.322 689.001)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .1.1.1.2v1c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
      transform="translate(170.322 690.631)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .1.1.1.2v1c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
      transform="translate(172.545 689.001)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .1.1.1.2v1c0 .1 0 .2-.1.2H.2c-.1 0-.2-.1-.2-.2v-1C0 .1.1 0 .2 0z"
      transform="translate(172.545 690.631)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h.3c.3 0 .5.2.5.5v9.3c0 .2-.2.5-.5.5H.5c-.3 0-.5-.3-.5-.5V.5C0 .2.2 0 .5 0z"
      transform="translate(177.883 682.939)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h.3c.3 0 .5.2.5.5v9.3c0 .2-.2.5-.5.5H.5c-.3 0-.5-.3-.5-.5V.5C0 .2.2 0 .5 0z"
      transform="translate(143.64 682.991)"
    />
    <path
      fill="url(#r)"
      d="M0 0h7v1.2H0V0z"
      transform="translate(158.07 672.461)"
    />
    <path
      fill="url(#u)"
      d="M0 0h14.3v6.5H0V0z"
      transform="translate(154.41 666.02)"
    />
    <path
      fill="url(#v)"
      d="M0 1.6h14.3V0H0v1.6z"
      transform="translate(154.41 664.563)"
    />
    <path
      fill="#757263"
      d="M162.424 669.326c0-1.1.8-1.9 1.8-1.9s1.8.8 1.8 1.9c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8z"
    />
    <path
      fill="#edebdf"
      d="M162.56 669.267c0-.9.7-1.7 1.7-1.7.9 0 1.6.8 1.6 1.7 0 1-.7 1.7-1.6 1.7-1 0-1.7-.7-1.7-1.7z"
    />
    <path
      fill="#635d4f"
      d="M162.824 669.241c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.5-1.4 1.5-.8 0-1.4-.7-1.4-1.5z"
    />
    <path
      stroke="#000"
      d="M163.062 669.287c0-.7.5-1.2 1.2-1.2.6 0 1.1.5 1.1 1.2s-.5 1.2-1.1 1.2c-.7 0-1.2-.5-1.2-1.2z"
    />
    <path
      fill="#fff"
      fillOpacity={0.22}
      d="M163.328 668.53c.45-.536 1.155-.597 1.69-.147.46.385-.538.33-.988.867-.386.46-.094 1.357-.554.971-.536-.45-.533-1.23-.148-1.69z"
    />
    <path
      fill="#757263"
      d="M157.325 669.327c0-1.1.8-1.9 1.8-1.9s1.8.8 1.8 1.9c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8z"
    />
    <path
      fill="#edebdf"
      d="M157.461 669.268c0-.9.7-1.7 1.7-1.7.9 0 1.6.8 1.6 1.7 0 1-.7 1.7-1.6 1.7-1 0-1.7-.7-1.7-1.7z"
    />
    <path
      fill="#635d4f"
      d="M157.725 669.242c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4 0 .8-.6 1.5-1.4 1.5-.8 0-1.4-.7-1.4-1.5z"
    />
    <path
      stroke="#000"
      d="M157.963 669.288c0-.7.5-1.2 1.2-1.2.6 0 1.1.5 1.1 1.2s-.5 1.2-1.1 1.2c-.7 0-1.2-.5-1.2-1.2z"
    />
    <path
      fill="#fff"
      fillOpacity={0.22}
      d="M158.23 668.531c.45-.536 1.154-.597 1.69-.147.46.385-.539.33-.989.867-.385.46-.094 1.357-.554.971-.536-.45-.533-1.23-.147-1.69z"
    />
    <path
      fill="none"
      stroke="red"
      strokeWidth={5.333}
      d="M356.786 711.105h25.8"
    />
    <path fill="red" d="M382.634 708.924v37.5h-4.2v-37.5h4.2z" />
    <path
      fill="red"
      stroke="#7e7e7e"
      d="M385.082 750.839v6.6h4.4l-8.7 9.9-8.7-9.9h4.3v-6.6h8.7z"
    />
    <path
      fill="url(#w)"
      d="M.2 0h11.1c.1 0 .2.1.2.2V13c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="translate(224.338 772.368)"
    />
    <path
      fill="url(#x)"
      d="M0 0h.8v14.2H0V0z"
      transform="translate(229.676 801.902)"
    />
    <path
      fill="url(#y)"
      d="M0 0h3.2v.9H0V0z"
      transform="translate(228.457 785.479)"
    />
    <path
      fill="url(#x)"
      d="M0 0h2.4v15.6H0V0z"
      transform="translate(228.88 786.35)"
    />
    <path
      fill="url(#y)"
      d="M.2 0h11.2c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
      transform="translate(224.236 772.08)"
    />
    <path
      fill="url(#z)"
      d="M.2 0h8c.1 0 .2.1.2.2v4.4c0 .1-.1.2-.2.2h-8c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="translate(225.884 776.578)"
    />
    <path fill="#3e3938" d="M226.306 777.014h7.5v3.9h-7.5v-3.9z" />
    <path
      fill="url(#A)"
      d="M.1 0h11.4s.1 0 .1.1v1.3c0 .1-.1.1-.1.1H.1c-.1 0-.1 0-.1-.1V.1C0 0 0 0 .1 0z"
      transform="translate(224.299 784.042)"
    />
    <path fill="red" d="M102.474 685.517h40.9v4.4h-40.9v-4.4z" />
    <path
      fill="red"
      stroke="#7e7e7e"
      d="M67.87 683.1h11.9v-4.5l17.7 9.1-17.7 9.1v-4.6h-11.9v-9.1z"
    />
    <path
      fill="url(#B)"
      d="M0 0h25.1v8.5H0V0z"
      transform="translate(236.208 683.711)"
    />
    <path
      fill="url(#C)"
      d="M.2 0h15c.1 0 .2.1.2.2v11.4c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="translate(241.096 664.538)"
    />
    <path
      fill="#b4b5b5"
      d="M241.854 665.188h13.9c.1 0 .1.1.1.2v10.1c0 .1 0 .2-.1.2h-13.9c-.1 0-.2-.1-.2-.2v-10.1c0-.1.1-.2.2-.2z"
    />
    <path fill="red" d="M242.098 665.726h13.3v9.4h-13.3v-9.4z" />
    <path
      fill="url(#D)"
      d="M0 0h3.6v7.7s0 .5-1.8.5C.1 8.2 0 7.7 0 7.7V0z"
      transform="translate(246.967 676.248)"
    />
    <path
      fill="url(#B)"
      d="M.3 0h.9c.2 0 .3.2.3.3V12c0 .2-.1.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.3C0 .2.1 0 .3 0z"
      transform="translate(238.102 681.783)"
    />
    <path
      fill="url(#B)"
      d="M.3 0h.9c.2 0 .3.2.3.3V12c0 .2-.1.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.3C0 .2.1 0 .3 0z"
      transform="translate(257.906 681.783)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.3v8.5H0V0z"
      transform="translate(239.643 683.721)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.3v8.5H0V0z"
      transform="translate(257.554 683.721)"
    />
    <path
      fill="url(#F)"
      d="M0 0h16.7v2.2H0V0z"
      transform="translate(240.426 669.334)"
    />
    <path
      fill="url(#D)"
      d="M0 0h1.8v.9H0V0z"
      transform="translate(242.753 663.662)"
    />
    <path
      fill="url(#D)"
      d="M0 0h.9v.9H0V0z"
      transform="translate(243.19 662.822)"
    />
    <path
      fill="url(#B)"
      d="M0 0h.7v2.2H0V0z"
      transform="translate(240.426 672.94)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7v.7H0V0z"
      transform="translate(233.53 673.659)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7.1v.7H0V0z"
      transform="matrix(0 -1 -1 0 233.256 681.875)"
    />
    <path
      fill="url(#G)"
      d="M0 0s.5 0 .8.3c.2.3.2.8.2.8H.3S.3.8 0 .7V0z"
      transform="matrix(-1 0 0 1 233.532 673.659)"
    />
    <path fill="red" d="M179.184 685.517h57.5v4.4h-57.5v-4.4z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M336.765 640.438h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "red",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(336.765 640.438)"
    >
      <tspan
        x={9.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"120.6 degC"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M336.986 625.703h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(336.986 625.703)"
    >
      <tspan
        x={16.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TRC201"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M108.892 640.805h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(108.892 640.805)"
    >
      <tspan
        x={25.4}
        y={11.5}
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
      d="M108.892 625.607h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(108.892 625.607)"
    >
      <tspan
        x={27.4}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"51840.9 ton"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M108.892 610.409h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(108.892 610.409)"
    >
      <tspan
        x={31.9}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FIRQ200"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#7e7e7e"
      d="M104.975 607.286h110.1v49.7h-110.1v-49.7zM219.963 622.99h73.4v34h-73.4v-34z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M222.465 640.438h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(222.465 640.438)"
    >
      <tspan
        x={22.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"0.0%"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M222.685 625.703h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(222.685 625.703)"
    >
      <tspan
        x={20.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TV201"}
      </tspan>
    </text>
    <path fill="#fff" d="M286.362 841.382h68.4v16.6h-68.4v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(286.362 841.382)"
    >
      <tspan
        x={19.7}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"E205A"}
      </tspan>
    </text>
    <path fill="#fff" d="M360.83 841.382h68.4v16.6h-68.4v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(360.83 841.382)"
    >
      <tspan
        x={19.7}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"E205B"}
      </tspan>
    </text>
    <path fill="#fff" d="M145.832 779.413h68.4v16h-68.4v-16z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(145.832 779.413)"
    >
      <tspan
        x={19.2}
        y={13}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Q201A"}
      </tspan>
    </text>
    <path fill="#fff" d="M145.832 859.42h68.4v18.6h-68.4v-18.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(145.832 859.42)"
    >
      <tspan
        x={19.2}
        y={14.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Q201B"}
      </tspan>
    </text>
    <path fill="#fff" d="M48.503 700.584h68.4v20.4h-68.4v-20.4z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(48.503 700.584)"
    >
      <tspan
        x={20.7}
        y={15.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Steam"}
      </tspan>
    </text>
    <path fill="#fff" d="M43.5 832.884h78.4v28.5H43.5v-28.5z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(43.5 832.884)"
    >
      <tspan
        x={10.7}
        y={11.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"From Storage"}
      </tspan>
      <tspan
        x={18.7}
        y={27.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Crude Oil"}
      </tspan>
    </text>
    <path fill="#fff" d="M346.595 769.467h68.4v17.8h-68.4v-17.8z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(346.595 769.467)"
    >
      <tspan
        x={21.2}
        y={13.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Cond."}
      </tspan>
    </text>
    <path fill="#fff" d="M233.54 915.255h93.2v20.3h-93.2v-20.3z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(233.54 915.255)"
    >
      <tspan
        x={11.1}
        y={15.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"From G302A / B"}
      </tspan>
    </text>
    <path fill="#fff" d="M388.805 915.255h93.2v20.3h-93.2v-20.3z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(388.805 915.255)"
    >
      <tspan
        x={28.6}
        y={15.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"To G305"}
      </tspan>
    </text>
    <path
      fill="#ffc000"
      d="M411.004 802.275h32.5v4.4h-32.5v-4.4zM280.91 708.924h40.9v4.4h-40.9v-4.4z"
    />
    <path
      fill="#ffc000"
      d="M284.786 709.36v96.8h-4.2v-96.8h4.2zM445.17 622.99v184.5h-4.2v-184.5h4.2zM485.193 622.117h20.6v4.4h-20.6v-4.4z"
    />
    <path
      fill="url(#B)"
      d="M0 0h25.1v8.5H0V0z"
      transform="translate(461.5 619.543)"
    />
    <path
      fill="url(#C)"
      d="M.2 0h15c.1 0 .2.1.2.2v11.4c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="translate(466.386 600.37)"
    />
    <path
      fill="#b4b5b5"
      d="M467.145 601.02h13.9c.1 0 .1.1.1.2v10.1c0 .1 0 .2-.1.2h-13.9c-.1 0-.2-.1-.2-.2v-10.1c0-.1.1-.2.2-.2z"
    />
    <path fill="#92d050" d="M467.39 601.559h13.3v9.4h-13.3v-9.4z" />
    <path
      fill="url(#D)"
      d="M0 0h3.6v7.7s0 .5-1.8.5C.1 8.2 0 7.7 0 7.7V0z"
      transform="translate(472.258 612.08)"
    />
    <path
      fill="url(#B)"
      d="M.3 0h.9c.2 0 .3.2.3.3V12c0 .2-.1.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.3C0 .2.1 0 .3 0z"
      transform="translate(463.393 617.615)"
    />
    <path
      fill="url(#B)"
      d="M.3 0h.9c.2 0 .3.2.3.3V12c0 .2-.1.4-.3.4H.3c-.2 0-.3-.2-.3-.4V.3C0 .2.1 0 .3 0z"
      transform="translate(483.197 617.615)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.3v8.5H0V0z"
      transform="translate(464.933 619.553)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.3v8.5H0V0z"
      transform="translate(482.845 619.553)"
    />
    <path
      fill="url(#H)"
      d="M0 0h16.7v2.2H0V0z"
      transform="translate(465.717 605.166)"
    />
    <path
      fill="url(#D)"
      d="M0 0h1.8v.9H0V0z"
      transform="translate(468.044 599.494)"
    />
    <path
      fill="url(#D)"
      d="M0 0h.9v.9H0V0z"
      transform="translate(468.48 598.654)"
    />
    <path
      fill="url(#B)"
      d="M0 0h.7v2.2H0V0z"
      transform="translate(465.717 608.773)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7v.7H0V0z"
      transform="translate(458.821 609.491)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7.1v.7H0V0z"
      transform="matrix(0 -1 -1 0 458.547 617.707)"
    />
    <path
      fill="url(#G)"
      d="M0 0s.5 0 .8.3c.2.3.2.8.2.8H.3S.3.8 0 .7V0z"
      transform="matrix(-1 0 0 1 458.823 609.491)"
    />
    <path
      fill="#ffc000"
      d="M441.001 622.17h20.6v4.4h-20.6v-4.4zM355.542 685.517h88v4.4h-88v-4.4z"
    />
    <path fill="#fff" d="M305.998 722.883h68.4v19h-68.4v-19z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(305.998 722.883)"
    >
      <tspan
        x={23.2}
        y={14.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"E201"}
      </tspan>
    </text>
    <path
      fill="url(#w)"
      d="M.2 0h11.6c.1 0 .2.1.2.2v12.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(-90 533.186 120.231)"
    />
    <path
      fill="url(#x)"
      d="M0 0h.8v13.6H0V0z"
      transform="rotate(-90 544.506 103.325)"
    />
    <path
      fill="url(#y)"
      d="M0 0h3.4v.8H0V0z"
      transform="rotate(-90 537.296 111.811)"
    />
    <path
      fill="url(#x)"
      d="M0 0h2.5v14.9H0V0z"
      transform="rotate(-90 537.491 111.174)"
    />
    <path
      fill="url(#y)"
      d="M.2 0h11.7c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
      transform="rotate(-90 533.101 120.423)"
    />
    <path
      fill="url(#z)"
      d="M.2 0h8.4c.1 0 .2.1.2.2v4.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
      transform="rotate(-90 534.389 117.41)"
    />
    <path fill="#3e3938" d="M417.395 651.358v-7.9h3.7v7.9h-3.7z" />
    <path
      fill="url(#A)"
      d="M.1 0H12c.1 0 .1 0 .1.1v1.3H0V.1C0 0 0 0 .1 0z"
      transform="rotate(-90 538.785 114.673)"
    />
    <path
      fill="none"
      stroke="#7e7e7e"
      d="M432.415 560.174h73.4v34h-73.4v-34z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M434.917 577.623h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(434.917 577.623)"
    >
      <tspan
        x={19.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"42.0%"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M435.137 562.887h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(435.137 562.887)"
    >
      <tspan
        x={20.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LV201"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#7e7e7e" d="M193.36 733.318h73.4v34h-73.4v-34z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M195.86 750.766h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(195.86 750.766)"
    >
      <tspan
        x={12.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"44.6 degC"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M196.08 736.03h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(196.08 736.03)"
    >
      <tspan
        x={20.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TR200"}
      </tspan>
    </text>
    <g stroke="#00b0f0">
      <path fill="none" strokeWidth={2} d="M539.39 600.306v-47.9" />
      <path
        fill="#00b0f0"
        strokeLinecap="round"
        d="m539.39 546.206-4.2 7.4c1.2-.8 2.7-1.2 4.2-1.2s3 .4 4.2 1.2l-4.2-7.4"
      />
    </g>
    <path fill="#fff" d="M507.706 507.217h68.4v26.8h-68.4v-26.8z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(507.706 507.217)"
    >
      <tspan
        x={17.2}
        y={10.4}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"To F207"}
      </tspan>
      <tspan
        x={16.7}
        y={26.4}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Vacuum"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(505.204 613.445)"
    >
      <tspan
        x={23.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"D201"}
      </tspan>
    </text>
    <path fill="#ffc000" d="M540.641 687.986v72.8h-4.2v-72.8h4.2z" />
    <path
      fill="url(#b)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 553.267 725.275)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 553.547 733.138)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 643.127 89.976)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M552.61 732.888v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#e)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(561.471 735.34)"
    />
    <path
      fill="url(#e)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(562.283 730.686)"
    />
    <path
      fill="url(#b)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 569.065 715.706)"
    />
    <path
      fill="url(#f)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 576.725 732.675)"
    />
    <path
      fill="#fff"
      fillOpacity={0.27}
      d="M568.662 731.239c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#9da6b0"
      stroke="#595959"
      strokeWidth={0.25}
      d="M568.665 721.624c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#g)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 -75.823 646.358)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 583.531 714.32)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 -65.215 649.141)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M584.467 714.572v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path
      fill="url(#k)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 552.433 755.234)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 552.713 763.098)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 657.69 105.373)"
    />
    <path
      fill="#92d050"
      d="M551.777 762.847v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#n)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(560.637 765.3)"
    />
    <path
      fill="url(#n)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(561.449 760.645)"
    />
    <path
      fill="url(#k)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 568.232 745.665)"
    />
    <path
      fill="url(#o)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 575.891 762.635)"
    />
    <path
      fill="#92d050"
      d="M567.829 761.198c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#92d050"
      stroke="#595959"
      strokeWidth={0.25}
      d="M567.831 751.583c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#p)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 -91.22 660.92)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 582.698 744.28)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 -80.611 663.704)"
    />
    <path
      fill="#92d050"
      d="M583.634 744.531v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path fill="#ffc000" d="M666.547 673.591v77.7h-4.2v-77.7h4.2z" />
    <path
      fill="#ffc000"
      d="M583.179 746.91h83.8v4.4h-83.8v-4.4zM536.472 726.373h15.4v4.4h-15.4v-4.4zM536.472 756.908h15.4v4.4h-15.4v-4.4z"
    />
    <path fill="#fff" d="M542.322 695.72h68.4v17.4h-68.4v-17.4z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(542.322 695.72)"
    >
      <tspan
        x={19.2}
        y={13.7}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G202A"}
      </tspan>
    </text>
    <path fill="#fff" d="M542.322 770.697h68.4v17h-68.4v-17z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(542.322 770.697)"
    >
      <tspan
        x={19.2}
        y={13.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G202B"}
      </tspan>
    </text>
    <path
      fill="url(#q)"
      d="M0 0h10.7v7.6H0V0z"
      transform="rotate(90 48.35 620.426)"
    />
    <path
      fill="url(#q)"
      d="M0 0h10.7v7.6H0V0z"
      transform="rotate(90 36.359 632.417)"
    />
    <path
      fill="url(#q)"
      d="M1.4 0h10.7s1.4.1 1.4 8.5c.1 8.3-1.4 8.3-1.4 8.3H1.4S0 16.8 0 8.5C0 .1 1.4 0 1.4 0z"
      transform="rotate(90 45.378 628.012)"
    />
    <path
      fill="url(#r)"
      d="M0 0h4.1v6.4s-.2.4-2 .4C.2 6.8 0 6.4 0 6.4V0z"
      transform="rotate(90 45.611 633.137)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h1.6c.2 0 .5.2.5.5v11.2c0 .2-.3.4-.5.4H.5c-.3 0-.5-.2-.5-.4V.5C0 .2.2 0 .5 0z"
      transform="rotate(90 46.77 624.186)"
    />
    <path
      fill="url(#s)"
      d="M1.1 1.6C1.1.9 1.7.4 2.4.4c.7 0 1.3.5 1.3 1.2s-.6 1.2-1.3 1.2c-.7 0-1.3-.5-1.3-1.2zM.7 0S0 0 0 .6v2s0 .6.7.6c.6 0 .8.8.8.8v1.7h1.8V4s.2-.8.8-.8c.7 0 .7-.6.7-.6v-2c0-.5-.7-.6-.7-.6H.7z"
      transform="rotate(90 46.718 623.014)"
    />
    <path
      fill="url(#t)"
      d="M1.6 0v2.8c0 .2-.1.3-.2.3H.3C.1 3.1 0 3 0 2.8V0h1.6z"
      transform="rotate(90 43.096 620.984)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 43.455 620.593)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 42.676 619.815)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 42.292 621.756)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 41.513 620.977)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h1.6c.2 0 .5.2.5.5v11.2c0 .2-.3.4-.5.4H.5c-.3 0-.5-.2-.5-.4V.5C0 .2.2 0 .5 0z"
      transform="rotate(90 35.979 634.977)"
    />
    <path
      fill="url(#s)"
      d="M1.1 1.6C1.1.9 1.7.4 2.4.4c.7 0 1.3.5 1.3 1.2s-.6 1.2-1.3 1.2c-.7 0-1.3-.5-1.3-1.2zM.7 0S0 0 0 .6v2s0 .6.7.6c.6 0 .8.8.8.8v1.7h1.8V4s.2-.8.8-.8c.7 0 .7-.6.7-.6v-2c0-.5-.7-.6-.7-.6H.7z"
      transform="rotate(90 35.926 633.806)"
    />
    <path
      fill="url(#t)"
      d="M1.6 0v2.8c0 .2-.1.3-.2.3H.3C.1 3.1 0 3 0 2.8V0h1.6z"
      transform="rotate(90 32.305 631.775)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 32.663 631.385)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 31.884 630.606)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 31.5 632.548)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 30.722 631.769)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h.4c.2 0 .5.2.5.5v8.8c0 .3-.3.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
      transform="rotate(90 31.605 638.237)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h.4c.2 0 .5.2.5.5v8.8c0 .3-.3.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
      transform="rotate(90 49.494 620.298)"
    />
    <path
      fill="url(#r)"
      d="M0 0h7.3v1.2H0V0z"
      transform="rotate(90 46.977 632.88)"
    />
    <path
      fill="url(#u)"
      d="M0 0h15v6.3H0V0z"
      transform="rotate(90 51.97 634.042)"
    />
    <path
      fill="url(#v)"
      d="M0 1.5h15V0H0v1.5z"
      transform="rotate(90 52.666 634.739)"
    />
    <path
      fill="#757263"
      d="M682.868 590.458c1 0 1.8.8 1.8 1.9 0 1-.8 1.9-1.8 1.9s-1.8-.9-1.8-1.9c0-1.1.8-1.9 1.8-1.9z"
    />
    <path
      fill="#edebdf"
      d="M682.933 590.6c.9 0 1.6.8 1.6 1.7 0 1-.7 1.8-1.6 1.8-1 0-1.7-.8-1.7-1.8 0-.9.7-1.7 1.7-1.7z"
    />
    <path
      fill="#635d4f"
      d="M682.872 590.876c.8 0 1.4.7 1.4 1.5s-.6 1.4-1.4 1.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.5 1.4-1.5z"
    />
    <path
      stroke="#000"
      d="M682.836 591.125c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2c-.6 0-1.1-.5-1.1-1.2s.5-1.2 1.1-1.2z"
    />
    <path
      fill="#fff"
      fillOpacity={0.22}
      d="M683.63 591.419c.536.45.597 1.154.147 1.69-.385.46-.33-.538-.867-.988-.46-.386-1.357-.094-.971-.554.45-.536 1.23-.534 1.69-.148z"
    />
    <path
      fill="#757263"
      d="M682.867 585.123c1 0 1.8.8 1.8 1.9 0 1-.8 1.9-1.8 1.9s-1.8-.9-1.8-1.9c0-1.1.8-1.9 1.8-1.9z"
    />
    <path
      fill="#edebdf"
      d="M682.932 585.265c.9 0 1.6.8 1.6 1.7 0 1-.7 1.8-1.6 1.8-1 0-1.7-.8-1.7-1.8 0-.9.7-1.7 1.7-1.7z"
    />
    <path
      fill="#635d4f"
      d="M682.87 585.541c.8 0 1.4.7 1.4 1.5s-.6 1.4-1.4 1.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.5 1.4-1.5z"
    />
    <path
      stroke="#000"
      d="M682.835 585.79c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2c-.6 0-1.1-.5-1.1-1.2s.5-1.2 1.1-1.2z"
    />
    <path
      fill="#fff"
      fillOpacity={0.22}
      d="M683.628 586.084c.537.45.598 1.154.148 1.69-.385.46-.33-.538-.867-.988-.46-.386-1.357-.094-.971-.554.45-.536 1.23-.534 1.69-.148z"
    />
    <path fill="#ffc000" d="M583.179 716.558h82.1v4.4h-82.1v-4.4z" />
    <path
      fill="url(#B)"
      d="M0 0h26.3v8.1H0V0z"
      transform="rotate(90 9.156 659.894)"
    />
    <path
      fill="url(#C)"
      d="M.2 0h15.7c.1 0 .2.1.2.2v10.9c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 15.76 671.612)"
    />
    <path
      fill="#92d050"
      d="M686.752 656.636v14.5c0 .1-.1.2-.2.2h-9.6c-.1 0-.2-.1-.2-.2v-14.5c0-.1.1-.2.2-.2h9.6c.1 0 .2.1.2.2z"
    />
    <path fill="#92d050" d="M686.238 656.9v14h-9v-14h9z" />
    <path
      fill="url(#D)"
      d="M0 0h3.8v7.3s-.1.5-1.9.5C.1 7.8 0 7.3 0 7.3V0z"
      transform="rotate(90 7.094 669.088)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(90 9.087 661.806)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(90 -1.274 672.166)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(90 7.354 661.685)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(90 -2.017 671.056)"
    />
    <path
      fill="url(#H)"
      d="M0 0h17.5v2.1H0V0z"
      transform="rotate(90 13.82 668.97)"
    />
    <path
      fill="url(#D)"
      d="M0 0h1.8v.8H0V0z"
      transform="rotate(90 15.313 672.898)"
    />
    <path
      fill="url(#D)"
      d="M0 0h.9v.8H0V0z"
      transform="rotate(90 15.486 673.528)"
    />
    <path
      fill="url(#B)"
      d="M0 0h.7v2.1H0V0z"
      transform="rotate(90 12.096 667.247)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7.3v.7H0V0z"
      transform="rotate(90 15.36 663.296)"
    />
    <path
      fill="url(#B)"
      d="M0 0h6.8v.7H0V0z"
      transform="matrix(1 0 0 -1 670.804 647.649)"
    />
    <path
      fill="url(#G)"
      d="M0 0s.5 0 .8.3c.3.3.2.8.2.8H.3S.3.8 0 .7V0z"
      transform="matrix(0 -1 -1 0 678.656 647.938)"
    />
    <path fill="none" stroke="#7e7e7e" d="M693.646 655.2h73.4v34h-73.4v-34z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M696.147 672.648h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(696.147 672.648)"
    >
      <tspan
        x={19.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"18.5%"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M696.367 657.913h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(696.367 657.913)"
    >
      <tspan
        x={20.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FV201"}
      </tspan>
    </text>
    <path fill="#ffc000" d="M666.547 608.16v42.8h-4.2v-42.8h4.2z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M697.563 607.286h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(697.563 607.286)"
    >
      <tspan
        x={25.4}
        y={11.5}
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
      d="M697.563 592.088h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(697.563 592.088)"
    >
      <tspan
        x={27.4}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"51840.9 ton"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M697.563 576.899h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(697.563 576.899)"
    >
      <tspan
        x={27.9}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FIRCQ201"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#7e7e7e"
      d="M693.646 573.767h110.1v49.7h-110.1v-49.7z"
    />
    <path fill="#fff" d="M574.63 609.999h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(574.63 609.999)"
    >
      <tspan
        x={16.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LAH201"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M574.63 647.444h73.4v34h-73.4v-34z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M577.132 664.892h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(577.132 664.892)"
    >
      <tspan
        x={19.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"42.0%"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M577.353 650.157h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(577.353 650.157)"
    >
      <tspan
        x={18.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LIC201"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#ff0"
      strokeDasharray="2.66666,6.66665"
      strokeWidth={1.333}
      d="M505.79 577.623h101.1"
    />
    <path
      fill="none"
      stroke="#ff0"
      strokeDasharray="2,5"
      d="M608.817 578.495v31.5M608.817 623.085v20"
    />
    <path
      fill="#92d050"
      stroke="#000"
      d="M553.566 620.6c0-3.7 3.5-6.7 7.7-6.7 4.3 0 7.7 3 7.7 6.7s-3.4 6.8-7.7 6.8c-4.2 0-7.7-3.1-7.7-6.8z"
    />
    <path
      fill="url(#k)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 551.598 830.194)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 551.878 838.057)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 694.753 143.27)"
    />
    <path
      fill="#92d050"
      d="M550.942 837.807v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#n)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(559.803 840.26)"
    />
    <path
      fill="url(#n)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(560.614 835.605)"
    />
    <path
      fill="url(#k)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 567.397 820.625)"
    />
    <path
      fill="url(#o)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 575.056 837.594)"
    />
    <path
      fill="#92d050"
      d="M566.994 836.158c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#92d050"
      stroke="#595959"
      strokeWidth={0.25}
      d="M566.997 826.543c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#p)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 -129.117 697.983)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 581.863 819.24)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 -118.509 700.767)"
    />
    <path
      fill="#92d050"
      d="M582.799 819.49v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path
      fill="url(#I)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 550.764 880.22)"
    />
    <path
      fill="url(#J)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 551.044 888.083)"
    />
    <path
      fill="url(#K)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 719.348 168.7)"
    />
    <path
      fill="#c2c2c2"
      d="M550.108 887.832v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#L)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(558.969 890.285)"
    />
    <path
      fill="url(#L)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(559.78 885.63)"
    />
    <path
      fill="url(#I)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 566.563 870.65)"
    />
    <path
      fill="url(#M)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 574.223 887.62)"
    />
    <path
      fill="#c2c2c2"
      d="M566.16 886.183c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#c2c2c2"
      stroke="#595959"
      strokeWidth={0.25}
      d="M566.163 876.568c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#N)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 -154.546 722.579)"
    />
    <path
      fill="url(#J)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 581.03 869.265)"
    />
    <path
      fill="url(#K)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 -143.938 725.362)"
    />
    <path
      fill="#c2c2c2"
      d="M581.965 869.516v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path fill="#dd7195" d="M581.51 871.886h158v4.4h-158v-4.4z" />
    <path fill="#fff" d="M543.988 799.479h68.4v16h-68.4v-16z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(543.988 799.479)"
    >
      <tspan
        x={22.7}
        y={13}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G206"}
      </tspan>
    </text>
    <path fill="#fff" d="M542.32 894.334h68.4v16.8h-68.4v-16.8z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(542.32 894.334)"
    >
      <tspan
        x={22.7}
        y={13.4}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G313"}
      </tspan>
    </text>
    <path fill="#dd7195" d="M581.916 821.791h159v4.4h-159v-4.4z" />
    <path
      fill="url(#a)"
      stroke="#696969"
      d="M0 0h34.1v20.9H0V0z"
      transform="translate(550.626 843.567)"
    />
    <path
      fill="none"
      stroke="#ff0"
      strokeDasharray="5.33334,13.3334"
      strokeWidth={2.667}
      d="M531.886 792.242h100.9v132.6h-100.9v-132.6z"
    />
    <path
      fill="#dd7195"
      d="M742.424 693.657v182.3h-4.2v-182.3h4.2zM742.424 627.352v23.6h-4.2v-23.6h4.2zM742.424 547.088v23.6h-4.2v-23.6h4.2z"
    />
    <path
      fill="url(#D)"
      d="M0 0h97.8v62.9H0V0z"
      transform="translate(1102.6 479.954)"
    />
    <path
      fill="url(#D)"
      d="M0 15.1h93.2S84.2 0 61.8 0H31.1C9.7 0 0 15.1 0 15.1z"
      transform="translate(1104.866 461.74)"
    />
    <path
      fill="url(#D)"
      d="M0 0h97.8s-2.5 9.7-49 9.7C2.2 9.7 0 0 0 0z"
      transform="translate(1102.586 542.465)"
    />
    <path
      fill="url(#D)"
      d="M1 0h33.6c.5 0 1 .4 1 .8v1.6c0 .5-.5.8-1 .8H1c-.5 0-1-.3-1-.8V.8C0 .4.5 0 1 0z"
      transform="translate(1133.678 458.669)"
    />
    <path fill="#868686" d="M1117.62 482.425h67.7v60.5h-67.7v-60.5z" />
    <path
      fill="url(#D)"
      d="M1.8 0h96.6c1 0 1.8 3.3 1.8 7.5v8c0 4.2-.8 7.6-1.8 7.6H1.8c-1 0-1.8-3.4-1.8-7.6v-8C0 3.3.8 0 1.8 0z"
      transform="translate(1101.38 476.62)"
    />
    <path
      fill="url(#O)"
      d="M0 1.5h90.5V0H0v1.5z"
      transform="translate(1106.366 475.28)"
    />
    <path
      fill="url(#P)"
      d="M0 0h100.2v1.1H0V0z"
      transform="translate(1101.38 478.156)"
    />
    <path
      fill="url(#O)"
      d="M0 0h97.8v1.7H0V0z"
      transform="translate(1102.6 480.945)"
    />
    <path
      fill="url(#D)"
      d="M0 0h5.8v64.3H0V0z"
      transform="translate(1149.636 453.295)"
    />
    <path
      fill="url(#D)"
      d="M0 0h7.7v7.1H0V0z"
      transform="translate(1148.677 515.963)"
    />
    <path
      fill="url(#Q)"
      d="M2.5 0h26.2l-2.5 4.7H0L2.5 0z"
      transform="translate(1153.825 517.259)"
    />
    <path
      fill="url(#Q)"
      d="M2.5 0h26.2l-2.5 4.7H0L2.5 0z"
      transform="translate(1122.546 517.259)"
    />
    <path
      fill="url(#D)"
      d="M0 0h8.5v8.9H0V0z"
      transform="translate(1148.384 453.597)"
    />
    <path
      fill="url(#R)"
      d="M0 12.6V0h22v12.6H0z"
      transform="matrix(-1 0 0 1 1163.505 421.231)"
    />
    <path
      fill="url(#S)"
      d="M0 0h19v2.4H0V0z"
      transform="translate(1143.03 451.737)"
    />
    <path
      fill="url(#T)"
      d="M0 0h22v14.4H0V0z"
      transform="translate(1141.527 437.381)"
    />
    <path
      fill="url(#R)"
      d="M0 5.1v-4S.1.6 1 .5C1 .5 4.2 0 8 0c3.9 0 7 .5 7 .5 1 .1 1 .6 1 .6v4H0z"
      transform="matrix(-1 0 0 1 1160.54 416.416)"
    />
    <path
      fill="url(#U)"
      d="M15.2 0s-.5 1.6-2.2 2.8H2.1C.4 1.4 0 0 0 0h15.2z"
      transform="translate(1144.933 433.881)"
    />
    <path
      fill="url(#S)"
      d="M0 0h19v2.4H0V0z"
      transform="translate(1143.03 436.166)"
    />
    <g fillOpacity={0.78}>
      <path d="M1150.288 432.937v-9.6c0-.1-.1-.1-.3-.1h-.4c-.2 0-.3 0-.3.1v9.6c0 .1.1.1.3.1h.4c.2 0 .3 0 .3-.1zM1147.059 432.937v-9.6c0-.1-.1-.1-.3-.1h-.4c-.2 0-.3 0-.3.1v9.6c0 .1.1.1.3.1h.4c.2 0 .3 0 .3-.1zM1158.93 432.937v-9.6c0-.1-.1-.1-.3-.1h-.4c-.2 0-.3 0-.3.1v9.6c0 .1.1.1.3.1h.4c.2 0 .3 0 .3-.1zM1155.97 432.937v-9.6c0-.1-.1-.1-.3-.1h-.4c-.2 0-.3 0-.3.1v9.6c0 .1.1.1.3.1h.4c.2 0 .3 0 .3-.1zM1152.989 432.937v-9.6c0-.1-.1-.1-.3-.1h-.4c-.2 0-.3 0-.3.1v9.6c0 .1.1.1.3.1h.4c.2 0 .3 0 .3-.1z" />
    </g>
    <path
      fill="url(#V)"
      d="M0 .8V0h15.9v.8H0z"
      transform="matrix(-1 0 0 1 1160.477 420.388)"
    />
    <path
      fill="url(#W)"
      d="M16.9.3v.2H0V.3C0 .1.1 0 .2 0h16.5c.1 0 .2.1.2.3z"
      transform="translate(1144.07 433.204)"
    />
    <path
      fill="url(#X)"
      d="M16.9.3v.2c0 .1-.1.3-.2.3H.2C.1.8 0 .6 0 .5V.3C0 .1.1 0 .2 0h16.5c.1 0 .2.1.2.3z"
      transform="translate(1144.07 433.463)"
    />
    <path
      fill="url(#D)"
      d="M0 0h22.6v1.8H0V0z"
      transform="translate(1141.231 462.048)"
    />
    <path fill="#ffc000" d="M666.547 495.614v75h-4.2v-75h4.2z" />
    <path fill="#dd7195" d="M666.964 547.088h73.6v4.4h-73.6v-4.4z" />
    <path
      fill="url(#Y)"
      d="M4 0H0v9.3h4V0z"
      transform="translate(646.572 484)"
    />
    <path
      fill="url(#Y)"
      d="M5 0H0v18.2h5V0z"
      transform="translate(641.547 479.553)"
    />
    <path
      fill="url(#Y)"
      d="M1 0H0v11.5h1V0z"
      transform="translate(650.207 482.895)"
    />
    <path
      fill="url(#Y)"
      d="M0 0h85.8v20.4H0V0z"
      transform="translate(653.86 478.445)"
    />
    <path
      fill="url(#Y)"
      d="M.6 0h.6v20.5l-.6-.1c-.3 0-.6-.3-.6-.6V.7C0 .3.3 0 .6 0z"
      transform="translate(651.188 478.4)"
    />
    <path
      fill="url(#Z)"
      d="M0 0h1.9v20.5L0 20.4V0z"
      transform="translate(652.181 478.399)"
    />
    <path
      fill="url(#Y)"
      d="M.7 0c.4 0 .7.3.7.7v20.4c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7V.7C0 .3.3 0 .7 0z"
      transform="translate(652.465 477.738)"
    />
    <path
      fill="url(#R)"
      d="M0 15V0h22.1v15H0z"
      transform="matrix(0 1 1 0 623.264 477.459)"
    />
    <path
      fill="url(#R)"
      d="M0 8V1.7S.2 1 1.4.8c0 0 4.4-.8 9.7-.8 5.2 0 9.6.8 9.6.8 1.4.2 1.4.9 1.4.9V8H0z"
      transform="matrix(0 1 1 0 615.263 477.451)"
    />
    <path
      fill="url(#aa)"
      d="M0 .2V0h22.1v.2H0z"
      transform="matrix(0 1 1 0 623.127 477.459)"
    />
    <g fill="url(#ab)" transform="translate(623.34 478.96)">
      <path d="M13.704 9.32H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 10.872H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 12.425H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 13.978H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 15.63H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 17.134H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 7.766H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 18.638H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 1.553H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 3.106H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 4.66H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 6.213H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2v-.2l-.1-.1zM13.704 0H.104l-.1.1v.2c0 .1.1.2.1.2h13.6s.1-.1.1-.2V.1l-.1-.1z" />
    </g>
    <path
      fill="url(#U)"
      d="M20.9 0s-.6 1-2.9 1.9H2.9C.5.9 0 0 0 0h20.9z"
      transform="rotate(-90 568.933 -69.968)"
    />
    <path
      fill="url(#ac)"
      d="M23.3.3v.3H0V.3C0 .1.1 0 .2 0H23c.2 0 .3.1.3.3z"
      transform="rotate(-90 569.149 -69.003)"
    />
    <path
      fill="url(#U)"
      d="M23.3.2v.2c0 .1-.1.2-.3.2H.2C.1.6 0 .5 0 .4V.2C0 .1.1 0 .2 0H23c.2 0 .3.1.3.2z"
      transform="rotate(-90 569.292 -69.146)"
    />
    <path
      fill="url(#ad)"
      d="M.2 0v14.8H0V0h.2z"
      transform="translate(640.578 481.205)"
    />
    <path
      fill="url(#ab)"
      d="M.3 0h.1c.2 0 .4.2.4.5v14.4c0 .3-.2.5-.4.5H.3c-.1 0-.3-.2-.3-.5V.5C0 .2.2 0 .3 0z"
      transform="translate(640.767 480.79)"
    />
    <path
      fill="url(#Y)"
      d="M.6 0h.6v20.5l-.6-.1c-.3 0-.6-.3-.6-.6V.7C0 .3.3 0 .6 0z"
      transform="matrix(-1 0 0 1 742.41 478.4)"
    />
    <path
      fill="url(#Z)"
      d="M0 0h1.9v20.5L0 20.4V0z"
      transform="translate(739.484 478.398)"
    />
    <path
      fill="url(#Y)"
      d="M.7 0c.4 0 .7.3.7.7v20.4c0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7V.7C0 .3.3 0 .7 0z"
      transform="matrix(-1 0 0 1 741.134 477.738)"
    />
    <path
      fill="url(#ae)"
      d="M0 0h76.1v15.9H0V0z"
      transform="translate(654.114 480.69)"
    />
    <path
      fill="url(#ae)"
      d="M0 0h76v2.7H0V0z"
      transform="translate(654.118 487.299)"
    />
    <path
      fill="url(#ae)"
      d="M0 0h2v12.9H0V0z"
      transform="translate(654.113 482.18)"
    />
    <path
      fill="url(#af)"
      d="M0 4.1h4.8S4.1 0 2.5 0C.8 0 0 3.9 0 4.1z"
      transform="matrix(1 0 0 -1 699.877 494.106)"
    />
    <g fill="url(#af)" transform="translate(661.678 489.92)">
      <path d="M-.002-.037h4.8s-.7 4.1-2.3 4.1c-1.7 0-2.5-3.9-2.5-4.1zM9.646-.037h4.8s-.7 4.1-2.3 4.1c-1.7 0-2.5-3.9-2.5-4.1zM19.171-.037h4.8s-.7 4.1-2.3 4.1c-1.7 0-2.5-3.9-2.5-4.1zM28.686-.037h4.8s-.7 4.1-2.3 4.1c-1.7 0-2.5-3.9-2.5-4.1zM38.174-.024h4.8s-.7 4.1-2.3 4.1c-1.7 0-2.5-3.9-2.5-4.1zM47.847.087h4.8s-.7 4.1-2.3 4.1c-1.7 0-2.5-3.9-2.5-4.1zM57.372.087h4.8s-.7 4.1-2.3 4.1c-1.7 0-2.5-3.9-2.5-4.1z" />
    </g>
    <g fill="url(#ag)" transform="translate(657.072 482.65)">
      <path d="M0 4.706h4.8s-.7-4.7-2.3-4.7c-1.7 0-2.5 4.5-2.5 4.7zM9.647 4.706h4.8s-.7-4.7-2.3-4.7c-1.7 0-2.5 4.5-2.5 4.7zM19.172 4.706h4.8s-.7-4.7-2.3-4.7c-1.7 0-2.5 4.5-2.5 4.7zM28.685 4.706h4.8s-.7-4.7-2.3-4.7c-1.7 0-2.5 4.5-2.5 4.7zM38.301 4.985h4.8s-.7-4.7-2.3-4.7c-1.7 0-2.5 4.5-2.5 4.7zM47.826 4.985h4.8s-.7-4.7-2.3-4.7c-1.7 0-2.5 4.5-2.5 4.7zM57.398 4.934h4.8s-.7-4.7-2.3-4.7c-1.7 0-2.5 4.5-2.5 4.7zM66.923 4.934h4.8s-.7-4.7-2.3-4.7c-1.7 0-2.5 4.5-2.5 4.7z" />
    </g>
    <path fill="#ffc000" d="M740.56 448.502v31.4h-4.2v-31.4h4.2z" />
    <path fill="#ffc000" d="M736.389 448.502h370v4.4h-370v-4.4z" />
    <g stroke="#ffc000">
      <path fill="none" strokeWidth={5.333} d="M1104.506 450.998v15.3" />
      <path
        fill="#ffc000"
        strokeLinecap="round"
        d="m1104.506 476.398 6.9-12a13.476 13.476 0 0 1-13.8 0l6.9 12"
      />
    </g>
    <path fill="#fff" d="M609.431 457.493h38v18.5h-38v-18.5z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(609.431 457.493)"
    >
      <tspan
        x={7.5}
        y={14.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G207"}
      </tspan>
    </text>
    <path fill="#fff" d="M1134.934 399.908h38v14.1h-38v-14.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1134.934 399.908)"
    >
      <tspan
        x={7.5}
        y={12.1}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G210"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1117.222 527.467)"
    >
      <tspan
        x={23.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"D204"}
      </tspan>
    </text>
    <path
      fill="url(#q)"
      d="M0 0h10.7v7.6H0V0z"
      transform="rotate(90 -12.136 757.425)"
    />
    <path
      fill="url(#q)"
      d="M0 0h10.7v7.6H0V0z"
      transform="rotate(90 -24.126 769.416)"
    />
    <path
      fill="url(#q)"
      d="M1.4 0h10.7s1.4.1 1.4 8.5c.1 8.3-1.4 8.3-1.4 8.3H1.4S0 16.8 0 8.5C0 .1 1.4 0 1.4 0z"
      transform="rotate(90 -15.107 765.011)"
    />
    <path
      fill="url(#r)"
      d="M0 0h4.1v6.4s-.2.4-2 .4C.2 6.8 0 6.4 0 6.4V0z"
      transform="rotate(90 -14.874 770.136)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h1.6c.2 0 .5.2.5.5v11.2c0 .2-.3.4-.5.4H.5c-.3 0-.5-.2-.5-.4V.5C0 .2.2 0 .5 0z"
      transform="rotate(90 -13.715 761.185)"
    />
    <path
      fill="url(#s)"
      d="M1.1 1.6C1.1.9 1.7.4 2.4.4c.7 0 1.3.5 1.3 1.2s-.6 1.2-1.3 1.2c-.7 0-1.3-.5-1.3-1.2zM.7 0S0 0 0 .6v2s0 .6.7.6c.6 0 .8.8.8.8v1.7h1.8V4s.2-.8.8-.8c.7 0 .7-.6.7-.6v-2c0-.5-.7-.6-.7-.6H.7z"
      transform="rotate(90 -13.767 760.013)"
    />
    <path
      fill="url(#t)"
      d="M1.6 0v2.8c0 .2-.1.3-.2.3H.3C.1 3.1 0 3 0 2.8V0h1.6z"
      transform="rotate(90 -17.39 757.983)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 -17.03 757.593)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 -17.81 756.814)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 -18.193 758.755)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 -18.972 757.976)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h1.6c.2 0 .5.2.5.5v11.2c0 .2-.3.4-.5.4H.5c-.3 0-.5-.2-.5-.4V.5C0 .2.2 0 .5 0z"
      transform="rotate(90 -24.506 771.976)"
    />
    <path
      fill="url(#s)"
      d="M1.1 1.6C1.1.9 1.7.4 2.4.4c.7 0 1.3.5 1.3 1.2s-.6 1.2-1.3 1.2c-.7 0-1.3-.5-1.3-1.2zM.7 0S0 0 0 .6v2s0 .6.7.6c.6 0 .8.8.8.8v1.7h1.8V4s.2-.8.8-.8c.7 0 .7-.6.7-.6v-2c0-.5-.7-.6-.7-.6H.7z"
      transform="rotate(90 -24.559 770.805)"
    />
    <path
      fill="url(#t)"
      d="M1.6 0v2.8c0 .2-.1.3-.2.3H.3C.1 3.1 0 3 0 2.8V0h1.6z"
      transform="rotate(90 -28.18 768.774)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 -27.822 768.384)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 -28.6 767.605)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 -28.985 769.547)"
    />
    <path
      fill="url(#q)"
      d="M.2 0h.4c.1 0 .2.1.2.2v.9c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 -29.764 768.768)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h.4c.2 0 .5.2.5.5v8.8c0 .3-.3.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
      transform="rotate(90 -28.88 775.236)"
    />
    <path
      fill="url(#q)"
      d="M.5 0h.4c.2 0 .5.2.5.5v8.8c0 .3-.3.5-.5.5H.5c-.3 0-.5-.2-.5-.5V.5C0 .2.2 0 .5 0z"
      transform="rotate(90 -10.991 757.297)"
    />
    <path
      fill="url(#r)"
      d="M0 0h7.3v1.2H0V0z"
      transform="rotate(90 -13.508 769.878)"
    />
    <path
      fill="url(#u)"
      d="M0 0h15v6.3H0V0z"
      transform="rotate(90 -8.516 771.041)"
    />
    <path
      fill="url(#v)"
      d="M0 1.5h15V0H0v1.5z"
      transform="rotate(90 -7.82 771.738)"
    />
    <path
      fill="#757263"
      d="M759.382 787.942c1 0 1.8.8 1.8 1.9 0 1-.8 1.9-1.8 1.9s-1.8-.9-1.8-1.9c0-1.1.8-1.9 1.8-1.9z"
    />
    <path
      fill="#edebdf"
      d="M759.447 788.084c.9 0 1.6.8 1.6 1.7 0 1-.7 1.8-1.6 1.8-1 0-1.7-.8-1.7-1.8 0-.9.7-1.7 1.7-1.7z"
    />
    <path
      fill="#635d4f"
      d="M759.385 788.36c.8 0 1.4.7 1.4 1.5s-.6 1.4-1.4 1.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.5 1.4-1.5z"
    />
    <path
      stroke="#000"
      d="M759.35 788.609c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2c-.6 0-1.1-.5-1.1-1.2s.5-1.2 1.1-1.2z"
    />
    <path
      fill="#fff"
      fillOpacity={0.22}
      d="M760.143 788.903c.536.45.598 1.155.148 1.691-.386.46-.331-.539-.867-.989-.46-.386-1.357-.094-.971-.554.45-.536 1.23-.533 1.69-.148z"
    />
    <path
      fill="#757263"
      d="M759.381 782.607c1 0 1.8.8 1.8 1.9 0 1-.8 1.9-1.8 1.9s-1.8-.9-1.8-1.9c0-1.1.8-1.9 1.8-1.9z"
    />
    <path
      fill="#edebdf"
      d="M759.446 782.75c.9 0 1.6.8 1.6 1.7 0 1-.7 1.8-1.6 1.8-1 0-1.7-.8-1.7-1.8 0-.9.7-1.7 1.7-1.7z"
    />
    <path
      fill="#635d4f"
      d="M759.384 783.025c.8 0 1.4.7 1.4 1.5s-.6 1.4-1.4 1.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.5 1.4-1.5z"
    />
    <path
      stroke="#000"
      d="M759.35 783.274c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2c-.6 0-1.1-.5-1.1-1.2s.5-1.2 1.1-1.2z"
    />
    <path
      fill="#fff"
      fillOpacity={0.22}
      d="M760.142 783.568c.536.45.598 1.155.148 1.691-.386.46-.331-.539-.867-.989-.46-.385-1.357-.094-.971-.554.45-.536 1.23-.533 1.69-.148z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M785.75 797.79h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(785.75 797.79)"
    >
      <tspan
        x={29.4}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"3.235kg/hr"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M785.75 782.593h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(785.75 782.593)"
    >
      <tspan
        x={23.4}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"2196638.0m3"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M785.75 767.395h102.8v13.1h-102.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(785.75 767.395)"
    >
      <tspan
        x={39.4}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FI206"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#7e7e7e"
      d="M781.828 764.778h110.1v49.7h-110.1v-49.7zM794.34 663.924h73.4v34h-73.4v-34z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M796.842 681.373h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(796.842 681.373)"
    >
      <tspan
        x={17.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"0.055%"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M797.062 666.637h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(797.062 666.637)"
    >
      <tspan
        x={19.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"RATIO"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#ff0"
      strokeDasharray="2,5"
      d="M803.709 599.067h26.7M833.726 599.434v57.6M835.394 702.381v57.6"
    />
    <path
      fill="#92d050"
      stroke="#000"
      d="M1183.093 491.436c0-4.2 3.5-7.6 7.9-7.6s7.9 3.4 7.9 7.6c0 4.2-3.5 7.7-7.9 7.7s-7.9-3.5-7.9-7.7z"
    />
    <path fill="#fff" d="M1202.27 482.091h68.4v16.4h-68.4v-16.4z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1202.27 482.091)"
    >
      <tspan
        x={13.2}
        y={13.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LSAH204"}
      </tspan>
    </text>
    <path
      fill="url(#h)"
      d="M0 11.8h71.5V0H0v11.8z"
      transform="translate(1247.82 645.739)"
    />
    <path
      fill="url(#i)"
      d="M0 2.7h71.5V0H0v2.7z"
      transform="translate(1247.82 653.755)"
    />
    <path
      fill="url(#h)"
      d="M0 10.7h71.5V0H0v10.7z"
      transform="translate(1247.82 801.27)"
    />
    <path
      fill="url(#i)"
      d="M0 3.1h71.5V0H0v3.1z"
      transform="translate(1247.82 801.063)"
    />
    <path
      fill="url(#h)"
      d="M6.9 0H79c3.8 0 6.9 4.7 6.9 10.5v124.1c0 5.8-3.1 10.5-6.9 10.5H6.9c-3.8 0-6.9-4.7-6.9-10.5V10.5C0 4.7 3.1 0 6.9 0z"
      transform="translate(1240.626 656.3)"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1249.381 664.89)"
    >
      <tspan
        x={23.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"D202"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={5.333}
      d="M1195.6 476.42v-34M1193.933 444.141h88.4"
    />
    <g stroke="#ffc000">
      <path fill="none" strokeWidth={5.333} d="M1282.317 442.396v190.5" />
      <path
        fill="#ffc000"
        strokeLinecap="round"
        d="m1282.317 643.096 6.9-12c-2 1.1-4.4 1.8-6.9 1.8s-4.9-.7-6.9-1.8l6.9 12"
      />
    </g>
    <path
      fill="red"
      stroke="red"
      d="M1186.697 909.983v-6.6h-4.4l8.7-9.9 8.7 9.9h-4.3v6.6h-8.7z"
    />
    <path fill="#fff" d="M1144.533 917.964h93.2v17.6h-93.2v-17.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1144.533 917.964)"
    >
      <tspan
        x={33.1}
        y={13.8}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Steam"}
      </tspan>
    </text>
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1190.73 699.836h43.8" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1240.73 699.836-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
      />
    </g>
    <path fill="none" stroke="red" strokeWidth={2} d="M1190.73 699.836v13.1" />
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1190.73 712.923h43.8" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1240.73 712.923-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
      />
    </g>
    <path fill="none" stroke="red" strokeWidth={2} d="M1190.73 712.85v13.1" />
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1190.73 725.937h43.8" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1240.73 725.937-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
      />
    </g>
    <path fill="none" stroke="red" strokeWidth={2} d="M1190.73 726.01v13.1" />
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1190.73 739.096h43.8" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1240.73 739.096-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
      />
    </g>
    <path fill="none" stroke="red" strokeWidth={2} d="M1190.73 739.023v145.7" />
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1073.03 752.11h161.5" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1240.73 752.11-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
      />
    </g>
    <path
      fill="none"
      stroke="red"
      strokeWidth={2}
      d="M1073.03 753.427v-224.7"
    />
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1073.03 528.766h23.8" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1103.03 528.766-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
      />
    </g>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1440.74 666.637)"
    >
      <tspan
        x={23.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"D203"}
      </tspan>
    </text>
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1382.024 729.086h43.8" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1432.024 729.086-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
      />
    </g>
    <path
      fill="none"
      stroke="red"
      strokeWidth={2}
      d="M1382.024 729.086v13.1M1382.024 742.094v13.1"
    />
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1382.024 755.18h43.8" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1432.024 755.18-7.3-4.2c.7 1.2 1.1 2.7 1.1 4.2s-.4 3-1.1 4.2l7.3-4.2"
      />
    </g>
    <path
      fill="none"
      stroke="red"
      strokeWidth={2}
      d="M1382.024 755.26v13.1M1382.024 768.267v83.3"
    />
    <g stroke="red">
      <path fill="none" strokeWidth={2} d="M1382.374 779.609h43.5" />
      <path
        fill="red"
        strokeLinecap="round"
        d="m1432.074 779.609-7.4-4.2c.8 1.2 1.2 2.7 1.2 4.2s-.4 3-1.2 4.2l7.4-4.2"
      />
    </g>
    <path
      fill="none"
      stroke="red"
      strokeWidth={2}
      d="M1382.024 850.695h-191.4"
    />
    <path
      fill="#92d050"
      stroke="#000"
      d="M1303.162 671.894c0-4.4 3.8-7.9 8.5-7.9 4.8 0 8.6 3.5 8.6 7.9 0 4.3-3.8 7.8-8.6 7.8-4.7 0-8.5-3.5-8.5-7.8zM1305.663 785.71c0-4.6 3.8-8.3 8.5-8.3 4.8 0 8.6 3.7 8.6 8.3 0 4.6-3.8 8.3-8.6 8.3-4.7 0-8.5-3.7-8.5-8.3zM1498.274 670.078c0-4.4 3.5-7.9 7.9-7.9s7.9 3.5 7.9 7.9c0 4.3-3.5 7.9-7.9 7.9s-7.9-3.6-7.9-7.9zM1498.274 785.71c0-4.6 3.5-8.3 7.9-8.3s7.9 3.7 7.9 8.3c0 4.6-3.5 8.3-7.9 8.3s-7.9-3.7-7.9-8.3z"
    />
    <path fill="#ffc000" d="M1283.15 812.308v22.7h-4.2v-22.7h4.2z" />
    <path fill="#ffc000" d="M1278.983 830.926h84.8v4.4h-84.8v-4.4z" />
    <path fill="#ffc000" d="M1363.813 694.53v137.5h-4.2v-137.5h4.2z" />
    <g stroke="#ffc000">
      <path fill="none" strokeWidth={5.333} d="M1326.509 694.53h95.8" />
      <path
        fill="#ffc000"
        strokeLinecap="round"
        d="m1432.409 694.53-12-6.9a13.476 13.476 0 0 1 0 13.8l12-6.9"
      />
    </g>
    <g fill="url(#ah)" stroke="#868686" transform="rotate(90 308.334 886.9)">
      <path d="M0 10.367h21.4v6.6H0v-6.6zM8.086 0h5.2v5.2h-5.2V0z" />
      <path d="M18.434 10.375h.3v6.6h-.3v-6.6z" />
      <path d="M2.955 9.336h15.5v8.6h-15.5v-8.6zM2.625 10.367h.3v6.6h-.3v-6.6z" />
      <path d="M14.241 4.634h-7.1v4.8s.1.6 3.6.6c3.4.1 3.5-.6 3.5-.6v-4.8zM0 1.19h8.1s.5 0 .5 1.4-.5 1.4-.5 1.4H0v-2.8zM8.086 4.378h5.2v.2h-5.2v-.2z" />
    </g>
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={4}
      d="M1181.425 565.409v13.1M1200.603 538.363h18.3M1151.408 552.322v13.1M1150.574 565.409h67.5M1217.28 538.363v27M1218.113 553.195h39.2"
    />
    <g stroke="#ffc000">
      <path fill="none" strokeWidth={4} d="M1255.635 553.195v79.3" />
      <path
        fill="#ffc000"
        strokeLinecap="round"
        d="m1255.635 641.295 6-10.4c-1.8 1-3.8 1.6-6 1.6s-4.2-.6-6-1.6l6 10.4"
      />
    </g>
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={4}
      d="M1181.425 600.306v16.6"
    />
    <g stroke="#ffc000">
      <path fill="none" strokeWidth={4} d="M1180.592 616.882h65.4" />
      <path
        fill="#ffc000"
        strokeLinecap="round"
        d="m1254.792 616.882-10.4-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.4-6"
      />
    </g>
    <path fill="#fff" d="M1187.695 597.074h46.9v16.2h-46.9v-16.2z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1187.695 597.074)"
    >
      <tspan
        x={8.4}
        y={13.1}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"HS204"}
      </tspan>
    </text>
    <path fill="#fff" d="M1327.54 659.893h54v18.4h-54v-18.4z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1327.54 659.893)"
    >
      <tspan
        x={6}
        y={14.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LSAH202"}
      </tspan>
    </text>
    <path fill="#fff" d="M1328.375 775.055h42.3v18.1h-42.3v-18.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1328.375 775.055)"
    >
      <tspan
        x={5.2}
        y={14}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LAL202"}
      </tspan>
    </text>
    <path
      fill="url(#w)"
      d="M.2 0h11.6c.1 0 .2.1.2.2v12.2c0 .1-.1.2-.2.2H.2c-.1 0-.2-.1-.2-.2V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 392.716 1153.501)"
    />
    <path
      fill="url(#x)"
      d="M0 0h.8v13.6H0V0z"
      transform="rotate(90 375.81 1142.18)"
    />
    <path
      fill="url(#y)"
      d="M0 0h3.4v.8H0V0z"
      transform="rotate(90 384.296 1149.391)"
    />
    <path
      fill="url(#x)"
      d="M0 0h2.5v14.9H0V0z"
      transform="rotate(90 383.66 1149.196)"
    />
    <path
      fill="url(#y)"
      d="M.2 0h11.7c.1 0 .2.1.2.2v.3c0 .1-.1.2-.2.2H.2C.1.7 0 .6 0 .5V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 392.908 1153.586)"
    />
    <path
      fill="url(#z)"
      d="M.2 0h8.4c.1 0 .2.1.2.2v4.2c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 389.896 1152.298)"
    />
    <path fill="#3e3938" d="M1541.777 762.844v7.9h-3.7v-7.9h3.7z" />
    <path
      fill="url(#A)"
      d="M.1 0H12c.1 0 .1 0 .1.1v1.3H0V.1C0 0 0 0 .1 0z"
      transform="rotate(90 387.158 1147.902)"
    />
    <path
      fill="none"
      stroke="#7e7e7e"
      d="M1551.638 750.618h73.4v34h-73.4v-34z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1554.14 768.067h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "red",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1554.14 768.067)"
    >
      <tspan
        x={9.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"120.6 degC"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1554.356 753.331h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1554.356 753.331)"
    >
      <tspan
        x={20.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TR203"}
      </tspan>
    </text>
    <path fill="#fff" d="M1518.285 790.445h43.4v21.3h-43.4v-21.3z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1518.285 790.445)"
    >
      <tspan
        x={5.7}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LAL203"}
      </tspan>
    </text>
    <path fill="#fff" d="M1518.285 655.531h49.2v19.7h-49.2v-19.7z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1518.285 655.531)"
    >
      <tspan
        x={7.1}
        y={14.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LAH203"}
      </tspan>
    </text>
    <path fill="#ffc000" d="M1478.68 809.462v134.6h-4.2v-134.6h4.2z" />
    <path
      fill="url(#b)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1491.304 846.752)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 1491.583 854.616)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 1172.885 -318.304)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M1490.647 854.365v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#e)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(1499.508 856.818)"
    />
    <path
      fill="url(#e)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(1500.32 852.164)"
    />
    <path
      fill="url(#b)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1507.102 837.184)"
    />
    <path
      fill="url(#f)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 1514.762 854.153)"
    />
    <path
      fill="#fff"
      fillOpacity={0.27}
      d="M1506.7 852.717c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#9da6b0"
      stroke="#595959"
      strokeWidth={0.25}
      d="M1506.702 843.102c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#g)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 332.457 1176.115)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 1521.568 835.799)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 343.065 1178.899)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M1522.504 836.05v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path
      fill="url(#k)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1490.47 876.712)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 1490.75 884.576)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 1187.447 -302.907)"
    />
    <path
      fill="#92d050"
      d="M1489.814 884.325v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#n)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(1498.674 886.777)"
    />
    <path
      fill="url(#n)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(1499.486 882.123)"
    />
    <path
      fill="url(#k)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1506.269 867.143)"
    />
    <path
      fill="url(#o)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 1513.928 884.112)"
    />
    <path
      fill="#92d050"
      d="M1505.866 882.676c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#92d050"
      stroke="#595959"
      strokeWidth={0.25}
      d="M1505.868 873.061c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#p)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 317.06 1190.678)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 1520.734 865.758)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 327.668 1193.461)"
    />
    <path
      fill="#92d050"
      d="M1521.67 866.009v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path
      fill="#ffc000"
      d="M1521.218 868.388h178.8v4.4h-178.8v-4.4zM1474.51 847.85h15.4v4.4h-15.4v-4.4zM1474.51 878.386h15.4v4.4h-15.4v-4.4z"
    />
    <path fill="#fff" d="M1530.384 822.437h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1530.384 822.437)"
    >
      <tspan
        x={19.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G202A"}
      </tspan>
    </text>
    <path fill="#ffc000" d="M1521.218 838.036h178.8v4.4h-178.8v-4.4z" />
    <path
      fill="url(#k)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1490.47 909.262)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 1490.75 917.126)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 1203.723 -286.632)"
    />
    <path
      fill="#92d050"
      d="M1489.814 916.875v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#n)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(1498.674 919.328)"
    />
    <path
      fill="url(#n)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(1499.486 914.674)"
    />
    <path
      fill="url(#k)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1506.269 899.694)"
    />
    <path
      fill="url(#o)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 1513.928 916.663)"
    />
    <path
      fill="#92d050"
      d="M1505.866 915.226c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#92d050"
      stroke="#595959"
      strokeWidth={0.25}
      d="M1505.868 905.612c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#p)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 300.785 1206.953)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 1520.734 898.309)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 311.393 1209.737)"
    />
    <path
      fill="#92d050"
      d="M1521.67 898.56v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path
      fill="#ffc000"
      d="M1521.218 900.938h178.8v4.4h-178.8v-4.4zM1474.51 910.936h15.4v4.4h-15.4v-4.4z"
    />
    <path
      fill="url(#k)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1491.304 940.722)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 1491.583 948.586)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 1219.87 -271.319)"
    />
    <path
      fill="#92d050"
      d="M1490.647 948.335v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#n)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(1499.508 950.788)"
    />
    <path
      fill="url(#n)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(1500.32 946.134)"
    />
    <path
      fill="url(#k)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1507.102 931.154)"
    />
    <path
      fill="url(#o)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 1514.762 948.123)"
    />
    <path
      fill="#92d050"
      d="M1506.7 946.686c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#92d050"
      stroke="#595959"
      strokeWidth={0.25}
      d="M1506.702 937.072c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#p)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 285.472 1223.1)"
    />
    <path
      fill="url(#l)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 1521.568 929.769)"
    />
    <path
      fill="url(#m)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 296.08 1225.884)"
    />
    <path
      fill="#92d050"
      d="M1522.504 930.02v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path
      fill="#ffc000"
      d="M1522.052 932.39h178v4.4h-178v-4.4zM1475.344 942.396h15.4v4.4h-15.4v-4.4z"
    />
    <path fill="#fff" d="M1530.792 852.004h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1530.792 852.004)"
    >
      <tspan
        x={19.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G202A"}
      </tspan>
    </text>
    <path fill="#fff" d="M1532.051 886.124h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1532.051 886.124)"
    >
      <tspan
        x={19.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G202A"}
      </tspan>
    </text>
    <path fill="#fff" d="M1532.885 917.532h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1532.885 917.532)"
    >
      <tspan
        x={19.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G202A"}
      </tspan>
    </text>
    <path
      fill="#ff0"
      stroke="#7e7e7e"
      d="M1709.184 930.349h15.4v-4.5l23 9.1-23 9.1v-4.6h-15.4v-9.1zM1709.184 898.836h15.4v-4.5l23 9.1-23 9.1v-4.6h-15.4v-9.1zM1709.184 864.916h15.4v-4.5l23 9.1-23 9.1v-4.6h-15.4v-9.1zM1709.184 833.508h15.4v-4.5l23 9.1-23 9.1v-4.6h-15.4v-9.1z"
    />
    <path fill="#fff" d="M1750.068 828.273h68.4v16.6h-68.4v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1750.068 828.273)"
    >
      <tspan
        x={15.2}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TO D206"}
      </tspan>
    </text>
    <path fill="#fff" d="M1750.068 859.664h68.4v18.3h-68.4v-18.3z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1750.068 859.664)"
    >
      <tspan
        x={15.2}
        y={14.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TO D207"}
      </tspan>
    </text>
    <path fill="#fff" d="M1750.902 892.833h68.4v20.9h-68.4v-20.9z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1750.902 892.833)"
    >
      <tspan
        x={15.2}
        y={15.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TO D208"}
      </tspan>
    </text>
    <path fill="#fff" d="M1750.902 925.986h68.4v18.9h-68.4v-18.9z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1750.902 925.986)"
    >
      <tspan
        x={15.2}
        y={14.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TO D209"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#7e7e7e"
      d="M1550.804 711.323h73.4v34h-73.4v-34z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1553.305 728.772h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1553.305 728.772)"
    >
      <tspan
        x={19.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"42.0%"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1553.522 714.037h68.4v13.1h-68.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1553.522 714.037)"
    >
      <tspan
        x={12.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LIAHL203"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#ff0"
      strokeDasharray="2,5"
      d="M1550.804 728.772h-29.2"
    />
    <g stroke="#236ea1">
      <path fill="none" strokeWidth={4} d="M1691.718 702.381h-162.1" />
      <path
        fill="#236ea1"
        strokeLinecap="round"
        d="m1520.818 702.381 10.4 6c-1.1-1.8-1.6-3.8-1.6-6s.5-4.2 1.6-6l-10.4 6"
      />
    </g>
    <path
      fill="#0070c0"
      stroke="#0070c0"
      d="M1740.106 705.443h-15.4v4.5l-23-9.1 23-9.1v4.6h15.4v9.1z"
    />
    <path fill="#fff" d="M1743.398 692.797h68.4v18.6h-68.4v-18.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1743.398 692.797)"
    >
      <tspan
        x={12.2}
        y={14.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Splash Oil"}
      </tspan>
    </text>
    <path
      fill="url(#h)"
      d="M0 6h55.5V0H0v6z"
      transform="translate(1511.366 477.738)"
    />
    <path
      fill="url(#i)"
      d="M0 1.4h55.5V0H0v1.4z"
      transform="translate(1511.366 481.86)"
    />
    <path
      fill="url(#h)"
      d="M0 5.5h55.5V0H0v5.5z"
      transform="translate(1511.366 557.728)"
    />
    <path
      fill="url(#i)"
      d="M0 1.6h55.5V0H0v1.6z"
      transform="translate(1511.366 557.622)"
    />
    <path
      fill="url(#h)"
      d="M5.4 0h55.9c3 0 5.4 2.4 5.4 5.4v63.8c0 3-2.4 5.4-5.4 5.4H5.4c-3 0-5.4-2.4-5.4-5.4V5.4C0 2.4 2.4 0 5.4 0z"
      transform="translate(1505.778 483.17)"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1504.11 495.614)"
    >
      <tspan
        x={23.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"F207"}
      </tspan>
    </text>
    <g stroke="#00b0f0">
      <path
        fill="none"
        strokeWidth={4}
        d="M1574.15 540.108h55.9M1630.016 540.108v148.3M1630.016 688.422h-98.8"
      />
      <path
        fill="#00b0f0"
        strokeLinecap="round"
        d="m1522.416 688.422 10.4 6c-1-1.8-1.6-3.8-1.6-6s.6-4.2 1.6-6l-10.4 6"
      />
    </g>
    <path
      fill="none"
      stroke="#00b0f0"
      strokeWidth={4}
      d="M1490.77 643.055v-102.9"
    />
    <g stroke="#00b0f0">
      <path fill="none" strokeWidth={4} d="M1490.77 541.853h7.1" />
      <path
        fill="#00b0f0"
        strokeLinecap="round"
        d="m1506.57 541.853-10.3-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.3-6"
      />
    </g>
    <g fill="none" stroke="#00b0f0" strokeWidth={4}>
      <path d="M1558.308 479.039v-26.2M1545.8 479.039v-46.2M1519.119 479.039v-89M1532.46 477.294v-68.9M1558.308 452.866h173.4M1545.8 432.8h185.9M1532.46 408.371h199.3M1519.119 390.05h212.6" />
    </g>
    <path
      fill="#0070c0"
      stroke="#0070c0"
      d="M1742.536 383.905h15.4v-4.5l23 9.1-23 9.1v-4.6h-15.4v-9.1z"
    />
    <path fill="#fff" d="M1783.42 383.07h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1783.42 383.07)"
    >
      <tspan
        x={16.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"To E200"}
      </tspan>
    </text>
    <path
      fill="#0070c0"
      stroke="#0070c0"
      d="M1781.797 415.528h-15.4v4.5l-23-9.1 23-9.1v4.6h15.4v9.1z"
    />
    <path fill="#fff" d="M1784.254 405.5h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1784.254 405.5)"
    >
      <tspan
        x={10.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"From D200"}
      </tspan>
    </text>
    <path
      fill="#0070c0"
      stroke="#0070c0"
      d="M1781.797 438.397h-15.4v4.5l-23-9.1 23-9.1v4.6h15.4v9.1z"
    />
    <path fill="#fff" d="M1784.254 428.368h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1784.254 428.368)"
    >
      <tspan
        x={10.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"From D200"}
      </tspan>
    </text>
    <path
      fill="#0070c0"
      stroke="#0070c0"
      d="M1782.63 460.83h-15.4v4.5l-23-9.1 23-9.1v4.6h15.4v9.1z"
    />
    <path fill="#fff" d="M1785.088 450.797h68.4v13.1h-68.4v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1785.088 450.797)"
    >
      <tspan
        x={11.2}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"From F200"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={4}
      d="M1825.962 349.918h-370.2"
    />
    <g stroke="#ffc000">
      <path fill="none" strokeWidth={4} d="M1455.75 349.918v280" />
      <path
        fill="#ffc000"
        strokeLinecap="round"
        d="m1455.75 638.718 6-10.4c-1.8 1-3.8 1.6-6 1.6s-4.2-.6-6-1.6l6 10.4"
      />
    </g>
    <path fill="#fff" d="M1458.668 325.751h313.1v21.1h-313.1v-21.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1458.668 325.751)"
    >
      <tspan
        x={95.5}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"From D206 / 207 / 208 / 209 "}
      </tspan>
    </text>
    <path fill="#a1a9b3" d="M841.12 269.488h25.7l16.6 30.3-42.3-30.3z" />
    <path
      fill="url(#ai)"
      d="M66.6 0H0l26.7 45.2H40L66.6 0z"
      transform="translate(853.741 269.527)"
    />
    <path
      fill="url(#ai)"
      d="M.8 0h13.6c.4 0 .7.3.7.8v1.4c0 .4-.3.7-.7.7H.8c-.5 0-.8-.3-.8-.7V.8C0 .3.3 0 .8 0z"
      transform="translate(879.894 309.321)"
    />
    <path
      fill="#a2afbd"
      d="M833.974 266.435h87.3c.2 0 .3.1.3.3v2.9c0 .2-.1.3-.3.3h-87.3c-.2 0-.3-.1-.3-.3v-2.9c0-.2.1-.3.3-.3z"
    />
    <path
      fill="url(#aj)"
      d="M0 0h82.8v39.1H0V0z"
      transform="translate(836.603 223.602)"
    />
    <path
      fill="url(#aj)"
      d="M.4 0h90.8c.2 0 .4.1.4.2v1.6c0 .1-.2.2-.4.2H.4C.2 2 0 1.9 0 1.8V.2C0 .1.2 0 .4 0z"
      transform="translate(832.192 221.958)"
    />
    <path
      fill="url(#aj)"
      d="M.4 0h88.1c.2 0 .4.1.4.1v1.4c0 .1-.2.2-.4.2H.4c-.2 0-.4-.1-.4-.2V.1S.2 0 .4 0z"
      transform="translate(833.538 262.29)"
    />
    <path
      fill="url(#aj)"
      d="M.4 0h88.1c.2 0 .4.1.4.1v1.4c0 .1-.2.2-.4.2H.4c-.2 0-.4-.1-.4-.2V.1S.2 0 .4 0z"
      transform="translate(833.538 263.963)"
    />
    <path
      fill="url(#ak)"
      d="M.4 0h88.5v.5H0V0h.4z"
      transform="translate(833.538 263.729)"
    />
    <path
      fill="url(#ak)"
      d="M0 0h82.8v.8H0V0z"
      transform="translate(836.603 223.964)"
    />
    <path
      fill="url(#ak)"
      d="M0 0h82.8v.5H0V0z"
      transform="translate(836.603 261.676)"
    />
    <path
      fill="url(#ak)"
      d="M0 0h83l-.8.5H1L0 0z"
      transform="translate(835.974 265.603)"
    />
    <path
      fill="url(#R)"
      d="M0 15.5V0h19.2v15.5H0z"
      transform="matrix(0 1 1 0 860.795 294.93)"
    />
    <path
      fill="url(#R)"
      d="M0 8.3V1.8S.1 1 1.2.8C1.2.8 5 0 9.6 0c4.6 0 8.4.8 8.4.8 1.3.2 1.3 1 1.3 1v6.5H0z"
      transform="matrix(0 1 1 0 852.54 294.923)"
    />
    <path
      fill="url(#aa)"
      d="M0 .2V0h19.2v.2H0z"
      transform="matrix(0 1 1 0 860.653 294.93)"
    />
    <g fill="url(#ab)" transform="translate(860.874 296.236)">
      <path d="M14.142 8.113h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 9.463h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 10.815h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 12.167h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 13.605h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 14.914h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 6.76h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 16.223h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 1.352h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 2.704h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 4.056h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 5.408h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 0h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1V.1l-.1-.1z" />
    </g>
    <path
      fill="url(#U)"
      d="M18.2 0s-.6 1.1-2.6 1.9h-13C.4.9 0 0 0 0h18.2z"
      transform="rotate(-90 595.289 -281.64)"
    />
    <path
      fill="url(#ac)"
      d="M20.3.3v.3H0V.3C0 .2.1 0 .2 0H20c.2 0 .3.2.3.3z"
      transform="rotate(-90 595.417 -280.739)"
    />
    <path
      fill="url(#U)"
      d="M20.3.2v.2c0 .1-.1.2-.3.2H.2C.1.6 0 .5 0 .4V.2C0 .1.1 0 .2 0H20c.2 0 .3.1.3.2z"
      transform="rotate(-90 595.565 -280.887)"
    />
    <path
      fill="url(#ad)"
      d="M.2 0v12.9H0V0h.2z"
      transform="translate(878.66 298.191)"
    />
    <path
      fill="url(#ab)"
      d="M.4 0c.2 0 .4.2.4.4V13c0 .2-.2.4-.4.4S0 13.2 0 13V.4C0 .2.2 0 .4 0z"
      transform="translate(878.855 297.83)"
    />
    <path
      fill="url(#al)"
      d="M0 4.1h17V0H0v4.1z"
      transform="translate(870.145 185.29)"
    />
    <path fill="#92d050" d="M865.516 189.94h25.8v31.3h-25.8v-31.3z" />
    <path
      fill="url(#am)"
      d="M0 0h1.8v29H0V0z"
      transform="translate(865.115 191.124)"
    />
    <path
      fill="url(#am)"
      d="M0 0h1.8v29H0V0z"
      transform="translate(913.567 191.105)"
    />
    <path
      fill="url(#an)"
      d="M0 0h50.3v1.9H0V0z"
      transform="translate(865.115 189.24)"
    />
    <path
      fill="url(#an)"
      d="M0 0h50.3v1.9H0V0z"
      transform="translate(865.115 220.096)"
    />
    <path
      fill="url(#C)"
      d="M21.7 0H0v29h21.7V0z"
      transform="translate(891.858 191.175)"
    />
    <path
      fill="url(#am)"
      d="M1.3 0H0v29h1.3V0z"
      transform="translate(890.6 191.131)"
    />
    <g fill="url(#ao)" transform="translate(866.945 193.059)">
      <path d="M0 0h23.7v.4H0V0zM0 2.57h23.7v.4H0v-.4zM0 4.934h23.7v.4H0v-.4zM0 7.401h23.7v.4H0v-.4zM0 9.868h23.7v.4H0v-.4zM0 12.335h23.7v.4H0v-.4zM0 14.803h23.7v.4H0v-.4zM0 17.27h23.7v.4H0v-.4zM0 19.737h23.7v.4H0v-.4zM0 22.204h23.7v.4H0v-.4zM0 24.67h23.7v.4H0v-.4z" />
    </g>
    <g fill="url(#ap)" transform="translate(890.944 196.1)">
      <path d="M.496 0h1.5c.3 0 .6.2.6.5s-.3.6-.6.6h-1.5c-.3 0-.5-.3-.5-.6s.2-.5.5-.5zM.496 18.76h1.5c.3 0 .6.2.6.5s-.3.6-.6.6h-1.5c-.3 0-.5-.3-.5-.6s.2-.5.5-.5z" />
    </g>
    <g fill="url(#ap)" transform="translate(911.996 196.1)">
      <path d="M.496 0h1.5c.3 0 .6.2.6.5s-.3.6-.6.6h-1.5c-.3 0-.5-.3-.5-.6s.2-.5.5-.5zM.496 18.76h1.5c.3 0 .6.2.6.5s-.3.6-.6.6h-1.5c-.3 0-.5-.3-.5-.6s.2-.5.5-.5z" />
    </g>
    <g fill="url(#ao)" transform="translate(868.983 191.108)">
      <path d="M19.58 0v29h-.4V0h.4zM17.185 0v29h-.4V0h.4zM14.79 0v29h-.4V0h.4zM12.394 0v29h-.4V0h.4zM10 0v29h-.4V0h.4zM7.604 0v29h-.4V0h.4zM5.21 0v29h-.4V0h.4zM2.814 0v29h-.4V0h.4zM.419 0v29h-.4V0h.4z" />
    </g>
    <g fill="url(#aq)" transform="translate(895.822 202.083)">
      <path d="M0 3.111h1.1v.8H0v-.8zM0 0h1.1v.8H0V0z" />
      <path d="M.244.41h.6v3.1h-.6V.41z" />
    </g>
    <g fill="url(#aq)" transform="translate(908.275 202.083)">
      <path d="M0 3.111h1.1v.8H0v-.8zM0 0h1.1v.8H0V0z" />
      <path d="M.244.41h.6v3.1h-.6V.41z" />
    </g>
    <path fill="#a1a9b3" d="M1265.462 269.488h25.7l16.6 30.3-42.3-30.3z" />
    <path
      fill="url(#ai)"
      d="M66.6 0H0l26.7 45.2H40L66.6 0z"
      transform="translate(1278.084 269.527)"
    />
    <path
      fill="url(#ai)"
      d="M.8 0h13.6c.4 0 .7.3.7.8v1.4c0 .4-.3.7-.7.7H.8c-.5 0-.8-.3-.8-.7V.8C0 .3.3 0 .8 0z"
      transform="translate(1304.238 309.321)"
    />
    <path
      fill="#a2afbd"
      d="M1258.317 266.435h87.3c.2 0 .3.1.3.3v2.9c0 .2-.1.3-.3.3h-87.3c-.2 0-.3-.1-.3-.3v-2.9c0-.2.1-.3.3-.3z"
    />
    <path
      fill="url(#aj)"
      d="M0 0h82.8v39.1H0V0z"
      transform="translate(1260.946 223.602)"
    />
    <path
      fill="url(#aj)"
      d="M.4 0h90.8c.2 0 .4.1.4.2v1.6c0 .1-.2.2-.4.2H.4C.2 2 0 1.9 0 1.8V.2C0 .1.2 0 .4 0z"
      transform="translate(1256.535 221.958)"
    />
    <path
      fill="url(#aj)"
      d="M.4 0h88.1c.2 0 .4.1.4.1v1.4c0 .1-.2.2-.4.2H.4c-.2 0-.4-.1-.4-.2V.1S.2 0 .4 0z"
      transform="translate(1257.88 262.29)"
    />
    <path
      fill="url(#aj)"
      d="M.4 0h88.1c.2 0 .4.1.4.1v1.4c0 .1-.2.2-.4.2H.4c-.2 0-.4-.1-.4-.2V.1S.2 0 .4 0z"
      transform="translate(1257.88 263.963)"
    />
    <path
      fill="url(#ak)"
      d="M.4 0h88.5v.5H0V0h.4z"
      transform="translate(1257.88 263.729)"
    />
    <path
      fill="url(#ak)"
      d="M0 0h82.8v.8H0V0z"
      transform="translate(1260.946 223.964)"
    />
    <path
      fill="url(#ak)"
      d="M0 0h82.8v.5H0V0z"
      transform="translate(1260.946 261.676)"
    />
    <path
      fill="url(#ak)"
      d="M0 0h83l-.8.5H1L0 0z"
      transform="translate(1260.318 265.603)"
    />
    <path
      fill="url(#R)"
      d="M0 15.5V0h19.2v15.5H0z"
      transform="matrix(0 1 1 0 1285.138 294.93)"
    />
    <path
      fill="url(#R)"
      d="M0 8.3V1.8S.1 1 1.2.8C1.2.8 5 0 9.6 0c4.6 0 8.4.8 8.4.8 1.3.2 1.3 1 1.3 1v6.5H0z"
      transform="matrix(0 1 1 0 1276.883 294.923)"
    />
    <path
      fill="url(#aa)"
      d="M0 .2V0h19.2v.2H0z"
      transform="matrix(0 1 1 0 1284.997 294.93)"
    />
    <g fill="url(#ab)" transform="translate(1285.217 296.236)">
      <path d="M14.142 8.113h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 9.463h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 10.815h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 12.167h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 13.605h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 14.914h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 6.76h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 16.223h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 1.352h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 2.704h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 4.056h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 5.408h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1v-.2l-.1-.1zM14.142 0h-14c-.1 0-.1.1-.1.1v.2s0 .1.1.1h14l.1-.1V.1l-.1-.1z" />
    </g>
    <path
      fill="url(#U)"
      d="M18.2 0s-.6 1.1-2.6 1.9h-13C.4.9 0 0 0 0h18.2z"
      transform="rotate(-90 807.46 -493.811)"
    />
    <path
      fill="url(#ac)"
      d="M20.3.3v.3H0V.3C0 .2.1 0 .2 0H20c.2 0 .3.2.3.3z"
      transform="rotate(-90 807.588 -492.91)"
    />
    <path
      fill="url(#U)"
      d="M20.3.2v.2c0 .1-.1.2-.3.2H.2C.1.6 0 .5 0 .4V.2C0 .1.1 0 .2 0H20c.2 0 .3.1.3.2z"
      transform="rotate(-90 807.736 -493.059)"
    />
    <path
      fill="url(#ad)"
      d="M.2 0v12.9H0V0h.2z"
      transform="translate(1303.002 298.191)"
    />
    <path
      fill="url(#ab)"
      d="M.4 0c.2 0 .4.2.4.4V13c0 .2-.2.4-.4.4S0 13.2 0 13V.4C0 .2.2 0 .4 0z"
      transform="translate(1303.198 297.83)"
    />
    <path
      fill="url(#al)"
      d="M0 4.1h17V0H0v4.1z"
      transform="translate(1294.488 185.29)"
    />
    <path fill="red" d="M1289.86 189.94h25.8v31.3h-25.8v-31.3z" />
    <path
      fill="url(#am)"
      d="M0 0h1.8v29H0V0z"
      transform="translate(1289.458 191.124)"
    />
    <path
      fill="url(#am)"
      d="M0 0h1.8v29H0V0z"
      transform="translate(1337.91 191.105)"
    />
    <path
      fill="url(#an)"
      d="M0 0h50.3v1.9H0V0z"
      transform="translate(1289.458 189.24)"
    />
    <path
      fill="url(#an)"
      d="M0 0h50.3v1.9H0V0z"
      transform="translate(1289.458 220.096)"
    />
    <path
      fill="url(#C)"
      d="M21.7 0H0v29h21.7V0z"
      transform="translate(1316.201 191.175)"
    />
    <path
      fill="url(#am)"
      d="M1.3 0H0v29h1.3V0z"
      transform="translate(1314.944 191.131)"
    />
    <g fill="url(#ao)" transform="translate(1291.288 193.059)">
      <path d="M0 0h23.7v.4H0V0zM0 2.57h23.7v.4H0v-.4zM0 4.934h23.7v.4H0v-.4zM0 7.401h23.7v.4H0v-.4zM0 9.868h23.7v.4H0v-.4zM0 12.335h23.7v.4H0v-.4zM0 14.803h23.7v.4H0v-.4zM0 17.27h23.7v.4H0v-.4zM0 19.737h23.7v.4H0v-.4zM0 22.204h23.7v.4H0v-.4zM0 24.67h23.7v.4H0v-.4z" />
    </g>
    <g fill="url(#ap)" transform="translate(1315.287 196.1)">
      <path d="M.496 0h1.5c.3 0 .6.2.6.5s-.3.6-.6.6h-1.5c-.3 0-.5-.3-.5-.6s.2-.5.5-.5zM.496 18.76h1.5c.3 0 .6.2.6.5s-.3.6-.6.6h-1.5c-.3 0-.5-.3-.5-.6s.2-.5.5-.5z" />
    </g>
    <g fill="url(#ap)" transform="translate(1336.34 196.1)">
      <path d="M.496 0h1.5c.3 0 .6.2.6.5s-.3.6-.6.6h-1.5c-.3 0-.5-.3-.5-.6s.2-.5.5-.5zM.496 18.76h1.5c.3 0 .6.2.6.5s-.3.6-.6.6h-1.5c-.3 0-.5-.3-.5-.6s.2-.5.5-.5z" />
    </g>
    <g fill="url(#ao)" transform="translate(1293.326 191.108)">
      <path d="M19.58 0v29h-.4V0h.4zM17.185 0v29h-.4V0h.4zM14.79 0v29h-.4V0h.4zM12.394 0v29h-.4V0h.4zM10 0v29h-.4V0h.4zM7.604 0v29h-.4V0h.4zM5.21 0v29h-.4V0h.4zM2.814 0v29h-.4V0h.4zM.419 0v29h-.4V0h.4z" />
    </g>
    <g fill="url(#aq)" transform="translate(1320.166 202.083)">
      <path d="M0 3.111h1.1v.8H0v-.8zM0 0h1.1v.8H0V0z" />
      <path d="M.244.41h.6v3.1h-.6V.41z" />
    </g>
    <g fill="url(#aq)" transform="translate(1332.619 202.083)">
      <path d="M0 3.111h1.1v.8H0v-.8zM0 0h1.1v.8H0V0z" />
      <path d="M.244.41h.6v3.1h-.6V.41z" />
    </g>
    <path
      fill="url(#B)"
      d="M0 0h26.3v8.1H0V0z"
      transform="rotate(-90 741.933 -371.929)"
    />
    <path
      fill="url(#C)"
      d="M.2 0h15.7c.1 0 .2.1.2.2v10.9c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
      transform="rotate(-90 730.214 -365.324)"
    />
    <path
      fill="#b4b5b5"
      d="M1096.16 364.106v-14.5c0-.1.1-.2.2-.2h9.6c.1 0 .2.1.2.2v14.5c0 .1-.1.2-.2.2h-9.6c-.1 0-.2-.1-.2-.2z"
    />
    <path fill="#92d050" d="M1096.673 363.842v-14h9v14h-9z" />
    <path
      fill="url(#D)"
      d="M0 0h3.8v7.3s-.1.5-1.9.5C.1 7.8 0 7.3 0 7.3V0z"
      transform="rotate(-90 732.738 -373.99)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(-90 740.021 -371.998)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(-90 729.66 -382.359)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(-90 740.141 -373.73)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(-90 730.77 -383.1)"
    />
    <path
      fill="url(#H)"
      d="M0 0h17.5v2.1H0V0z"
      transform="rotate(-90 732.856 -367.265)"
    />
    <path
      fill="url(#D)"
      d="M0 0h1.8v.8H0V0z"
      transform="rotate(-90 728.929 -365.772)"
    />
    <path
      fill="url(#D)"
      d="M0 0h.9v.8H0V0z"
      transform="rotate(-90 728.299 -365.599)"
    />
    <path
      fill="url(#B)"
      d="M0 0h.7v2.1H0V0z"
      transform="rotate(-90 734.58 -368.988)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7.3v.7H0V0z"
      transform="rotate(-90 738.53 -365.724)"
    />
    <path
      fill="url(#B)"
      d="M0 0h6.8v.7H0V0z"
      transform="matrix(-1 0 0 1 1112.107 373.094)"
    />
    <path
      fill="url(#G)"
      d="M0 0s.5 0 .8.3c.3.3.2.8.2.8H.3S.3.8 0 .7V0z"
      transform="matrix(0 1 1 0 1104.255 372.805)"
    />
    <path
      fill="url(#B)"
      d="M0 0h26.3v8.1H0V0z"
      transform="rotate(-90 764.642 -349.628)"
    />
    <path
      fill="url(#C)"
      d="M.2 0h15.7c.1 0 .2.1.2.2v10.9c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
      transform="rotate(-90 752.923 -343.023)"
    />
    <path
      fill="#b4b5b5"
      d="M1096.568 409.115v-14.5c0-.1.1-.2.2-.2h9.6c.1 0 .2.1.2.2v14.5c0 .1-.1.2-.2.2h-9.6c-.1 0-.2-.1-.2-.2z"
    />
    <path fill="red" d="M1097.082 408.85v-14h9v14h-9z" />
    <path
      fill="url(#D)"
      d="M0 0h3.8v7.3s-.1.5-1.9.5C.1 7.8 0 7.3 0 7.3V0z"
      transform="rotate(-90 755.447 -351.69)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(-90 762.73 -349.698)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(-90 752.37 -360.058)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(-90 762.85 -351.43)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(-90 753.48 -360.8)"
    />
    <path
      fill="url(#F)"
      d="M0 0h17.5v2.1H0V0z"
      transform="rotate(-90 755.565 -344.965)"
    />
    <path
      fill="url(#D)"
      d="M0 0h1.8v.8H0V0z"
      transform="rotate(-90 751.637 -343.471)"
    />
    <path
      fill="url(#D)"
      d="M0 0h.9v.8H0V0z"
      transform="rotate(-90 751.008 -343.298)"
    />
    <path
      fill="url(#B)"
      d="M0 0h.7v2.1H0V0z"
      transform="rotate(-90 757.289 -346.688)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7.3v.7H0V0z"
      transform="rotate(-90 761.24 -343.424)"
    />
    <path
      fill="url(#B)"
      d="M0 0h6.8v.7H0V0z"
      transform="matrix(-1 0 0 1 1112.516 418.103)"
    />
    <path
      fill="url(#G)"
      d="M0 0s.5 0 .8.3c.3.3.2.8.2.8H.3S.3.8 0 .7V0z"
      transform="matrix(0 1 1 0 1104.663 417.814)"
    />
    <path
      fill="url(#B)"
      d="M0 0h26.3v8.1H0V0z"
      transform="rotate(90 402.103 788.678)"
    />
    <path
      fill="url(#C)"
      d="M.2 0h15.7c.1 0 .2.1.2.2v10.9c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 408.708 800.396)"
    />
    <path
      fill="#b4b5b5"
      d="M1208.483 392.473v14.5c0 .1-.1.2-.2.2h-9.6c-.1 0-.2-.1-.2-.2v-14.5c0-.1.1-.2.2-.2h9.6c.1 0 .2.1.2.2z"
    />
    <path fill="red" d="M1207.97 392.737v14h-9v-14h9z" />
    <path
      fill="url(#D)"
      d="M0 0h3.8v7.3s-.1.5-1.9.5C.1 7.8 0 7.3 0 7.3V0z"
      transform="rotate(90 400.041 797.872)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(90 402.034 790.59)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(90 391.673 800.95)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(90 400.302 790.47)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(90 390.931 799.84)"
    />
    <path
      fill="url(#F)"
      d="M0 0h17.5v2.1H0V0z"
      transform="rotate(90 406.767 797.754)"
    />
    <path
      fill="url(#D)"
      d="M0 0h1.8v.8H0V0z"
      transform="rotate(90 408.26 801.682)"
    />
    <path
      fill="url(#D)"
      d="M0 0h.9v.8H0V0z"
      transform="rotate(90 408.433 802.312)"
    />
    <path
      fill="url(#B)"
      d="M0 0h.7v2.1H0V0z"
      transform="rotate(90 405.043 796.03)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7.3v.7H0V0z"
      transform="rotate(90 408.308 792.08)"
    />
    <path
      fill="url(#B)"
      d="M0 0h6.8v.7H0V0z"
      transform="matrix(1 0 0 -1 1192.535 383.485)"
    />
    <path
      fill="url(#G)"
      d="M0 0s.5 0 .8.3c.3.3.2.8.2.8H.3S.3.8 0 .7V0z"
      transform="matrix(0 -1 -1 0 1200.388 383.774)"
    />
    <path
      fill="url(#B)"
      d="M0 0h26.3v8.1H0V0z"
      transform="rotate(90 424.403 765.97)"
    />
    <path
      fill="url(#C)"
      d="M.2 0h15.7c.1 0 .2.1.2.2v10.9c0 .1-.1.1-.2.1H.2c-.1 0-.2 0-.2-.1V.2C0 .1.1 0 .2 0z"
      transform="rotate(90 431.008 777.688)"
    />
    <path
      fill="#b4b5b5"
      d="M1208.075 347.465v14.5c0 .1-.1.2-.2.2h-9.6c-.1 0-.2-.1-.2-.2v-14.5c0-.1.1-.2.2-.2h9.6c.1 0 .2.1.2.2z"
    />
    <path fill="red" d="M1207.56 347.73v14h-9v-14h9z" />
    <path
      fill="url(#D)"
      d="M0 0h3.8v7.3s-.1.5-1.9.5C.1 7.8 0 7.3 0 7.3V0z"
      transform="rotate(90 422.341 775.164)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(90 424.334 767.881)"
    />
    <path
      fill="url(#B)"
      d="M.4 0h.9c.2 0 .3.1.3.3v11.2c0 .2-.1.3-.3.3H.4c-.2 0-.4-.1-.4-.3V.3C0 .1.2 0 .4 0z"
      transform="rotate(90 413.973 778.242)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(90 422.602 767.761)"
    />
    <path
      fill="url(#E)"
      d="M0 0h.4v8.1H0V0z"
      transform="rotate(90 413.23 777.132)"
    />
    <path
      fill="url(#F)"
      d="M0 0h17.5v2.1H0V0z"
      transform="rotate(90 429.067 775.046)"
    />
    <path
      fill="url(#D)"
      d="M0 0h1.8v.8H0V0z"
      transform="rotate(90 430.56 778.974)"
    />
    <path
      fill="url(#D)"
      d="M0 0h.9v.8H0V0z"
      transform="rotate(90 430.733 779.603)"
    />
    <path
      fill="url(#B)"
      d="M0 0h.7v2.1H0V0z"
      transform="rotate(90 427.343 773.322)"
    />
    <path
      fill="url(#B)"
      d="M0 0h7.3v.7H0V0z"
      transform="rotate(90 430.608 769.372)"
    />
    <path
      fill="url(#B)"
      d="M0 0h6.8v.7H0V0z"
      transform="matrix(1 0 0 -1 1192.127 338.477)"
    />
    <path
      fill="url(#G)"
      d="M0 0s.5 0 .8.3c.3.3.2.8.2.8H.3S.3.8 0 .7V0z"
      transform="matrix(0 -1 -1 0 1199.98 338.766)"
    />
    <path
      fill="none"
      stroke="#ffc000"
      strokeWidth={4}
      d="M1184.76 333.603h128.4M1311.5 333.603v-16.6"
    />
    <path fill="#fff" d="M1210.609 347.127h44.2v13.5h-44.2v-13.5z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1210.609 347.127)"
    >
      <tspan
        x={4.1}
        y={11.8}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV211B"}
      </tspan>
    </text>
    <path fill="#fff" d="M1211.86 393.082h44.2v16.4h-44.2v-16.4z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1211.86 393.082)"
    >
      <tspan
        x={4.1}
        y={13.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV212B"}
      </tspan>
    </text>
    <path fill="#fff" d="M1036.134 349.745h44.2v17h-44.2v-17z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1036.134 349.745)"
    >
      <tspan
        x={4.1}
        y={13.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV211A"}
      </tspan>
    </text>
    <path fill="#fff" d="M1037.385 395.7h44.2V413h-44.2v-17.3z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1037.385 395.7)"
    >
      <tspan
        x={4.1}
        y={13.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV211B"}
      </tspan>
    </text>
    <path fill="#fff" d="M1241.46 189.651h44.2v16.6h-44.2v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1241.46 189.651)"
    >
      <tspan
        x={8.1}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"F202B"}
      </tspan>
    </text>
    <path fill="#fff" d="M816.216 192.268h44.2v14h-44.2v-14z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(816.216 192.268)"
    >
      <tspan
        x={8.1}
        y={12}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"F202A"}
      </tspan>
    </text>
    <path fill="#fff" d="M838.729 243.44h44.2v13.1h-44.2v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(838.729 243.44)"
    >
      <tspan
        x={15.1}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"BE"}
      </tspan>
    </text>
    <path fill="#fff" d="M1264.5 243.44h54v13.1h-54v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1264.5 243.44)"
    >
      <tspan
        x={4.5}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CARBON"}
      </tspan>
    </text>
    <path fill="#fff" d="M808.92 301.591h38v15.4h-38v-15.4z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(808.92 301.591)"
    >
      <tspan
        x={7.5}
        y={4.7}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G213"}
      </tspan>
      <tspan
        x={15.5}
        y={20.7}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"A"}
      </tspan>
    </text>
    <path fill="#fff" d="M1230.62 301.591h40v15.4h-40v-15.4z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1230.62 301.591)"
    >
      <tspan
        x={5}
        y={12.7}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G213B"}
      </tspan>
    </text>
    <path
      fill="#92d050"
      stroke="#000"
      d="M899.472 250.688c0-4.2 3.5-7.6 7.9-7.6s7.9 3.4 7.9 7.6c0 4.2-3.5 7.7-7.9 7.7s-7.9-3.5-7.9-7.7zM897.805 283.186c0-4.2 3.5-7.6 7.9-7.6s7.9 3.4 7.9 7.6c0 4.2-3.5 7.7-7.9 7.7s-7.9-3.5-7.9-7.7zM1325.675 249.815c0-4.2 3.5-7.6 7.9-7.6s7.9 3.4 7.9 7.6c0 4.2-3.5 7.7-7.9 7.7s-7.9-3.5-7.9-7.7z"
    />
    <path
      fill="red"
      stroke="#000"
      d="M1326.509 283.186c0-4.2 3.5-7.6 7.9-7.6s7.9 3.4 7.9 7.6c0 4.2-3.5 7.7-7.9 7.7s-7.9-3.5-7.9-7.7z"
    />
    <path fill="#fff" d="M924.195 245.269h59.6v15.9h-59.6v-15.9z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(924.195 245.269)"
    >
      <tspan
        x={16.3}
        y={5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LSAH "}
      </tspan>
      <tspan
        x={18.8}
        y={21}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"205A"}
      </tspan>
    </text>
    <path fill="#fff" d="M924.195 277.767h56.3v16.6h-56.3v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(924.195 277.767)"
    >
      <tspan
        x={7.1}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LAL 205A"}
      </tspan>
    </text>
    <path fill="#fff" d="M1348.396 244.396h59.6v16.8h-59.6v-16.8z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1348.396 244.396)"
    >
      <tspan
        x={16.3}
        y={5.4}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LSAH "}
      </tspan>
      <tspan
        x={18.8}
        y={21.4}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"205B"}
      </tspan>
    </text>
    <path fill="#fff" d="M1348.396 277.767h56.3v14.8h-56.3v-14.8z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1348.396 277.767)"
    >
      <tspan
        x={7.1}
        y={12.4}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"LAL 205B"}
      </tspan>
    </text>
    <path
      fill="url(#b)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 732.556 237.237)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 732.836 245.101)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 488.753 -243.687)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M731.9 244.85v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#e)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(740.76 247.303)"
    />
    <path
      fill="url(#e)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(741.572 242.648)"
    />
    <path
      fill="url(#b)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 748.355 227.669)"
    />
    <path
      fill="url(#f)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 756.014 244.638)"
    />
    <path
      fill="#fff"
      fillOpacity={0.27}
      d="M747.952 243.201c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#9da6b0"
      stroke="#595959"
      strokeWidth={0.25}
      d="M747.954 233.587c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#g)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 257.84 491.984)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 762.82 226.284)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 268.449 494.767)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M763.757 226.534v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path
      fill="url(#b)"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1434.646 229.385)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 -1 -1 0 1434.926 237.25)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(-90 835.872 -598.658)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M1433.99 236.998v-8.7c0-.1-.1-.1-.1-.1-.1 0-.1 0-.1.1v8.7s0 .1.1.1l.1-.1z"
    />
    <path
      fill="url(#e)"
      d="M0 0h14.3v2H0V0z"
      transform="translate(1442.85 247.303)"
    />
    <path
      fill="url(#e)"
      stroke="#595959"
      d="M3.2 0h6.3l3.2 4.8H0L3.2 0z"
      transform="translate(1443.662 242.648)"
    />
    <path
      fill="url(#b)"
      stroke="#595959"
      d="M0 0h6.5v14.6H0V0z"
      transform="matrix(0 1 1 0 1450.445 236.393)"
    />
    <path
      fill="url(#f)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 8.1C0 3.6 3.8 0 8.5 0S17 3.6 17 8.1c0 4.4-3.8 8.1-8.5 8.1S0 12.5 0 8.1z"
      transform="matrix(0 -1 -1 0 1458.104 244.638)"
    />
    <path
      fill="#fff"
      fillOpacity={0.27}
      d="M1450.042 243.201c3.7 0 6.7-3.2 6.7-7.1 0-3.9-3-7-6.7-7s-6.7 3.1-6.7 7 3 7.1 6.7 7.1z"
    />
    <path
      fill="#9da6b0"
      stroke="#595959"
      strokeWidth={0.25}
      d="M1450.044 233.587c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.6-2.4 2.6c-1.3 0-2.4-1.2-2.4-2.6 0-1.4 1.1-2.5 2.4-2.5z"
    />
    <path
      fill="url(#g)"
      stroke="#595959"
      strokeWidth={0.25}
      d="M0 1.9C0 .8.9 0 2 0s2 .8 2 1.9c0 1-.9 1.9-2 1.9s-2-.9-2-1.9z"
      transform="rotate(90 608.885 843.029)"
    />
    <path
      fill="url(#c)"
      d="M.3 0h8.6c.2 0 .3.3.3.6 0 .4-.1.6-.3.6H.3C.1 1.2 0 1 0 .6 0 .3.1 0 .3 0z"
      transform="matrix(0 1 1 0 1464.91 235.008)"
    />
    <path
      fill="url(#d)"
      d="M9.2 0c0 .2-.2.4-.3.4H.3C.1.4 0 .2 0 0h9.2z"
      transform="rotate(90 615.131 850.175)"
    />
    <path
      fill="#fff"
      fillOpacity={0.35}
      d="M1465.847 235.259v8.7c0 .1.1.1.1.1.1 0 .1 0 .1-.1v-8.7s0-.1-.1-.1l-.1.1z"
    />
    <path fill="#fff" d="M1422.397 255.258h56.3v16.4h-56.3v-16.4z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1422.397 255.258)"
    >
      <tspan
        x={13.1}
        y={13.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G209B"}
      </tspan>
    </text>
    <path fill="#fff" d="M718.661 255.258h56.3v15.5h-56.3v-15.5z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(718.661 255.258)"
    >
      <tspan
        x={13.1}
        y={12.8}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"G209A"}
      </tspan>
    </text>
    <g stroke="#92d050">
      <path fill="none" strokeWidth={4} d="M766.187 230.656h57.9" />
      <path
        fill="#92d050"
        strokeLinecap="round"
        d="m832.887 230.656-10.4-6c1 1.8 1.6 3.8 1.6 6s-.6 4.2-1.6 6l10.4-6"
      />
    </g>
    <path
      fill="none"
      stroke="#ff0"
      strokeDasharray="2,5"
      d="M805.377 165.223v119.5"
    />
    <path fill="#fff" d="M760.975 190.087h38v15.3h-38v-15.3z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(760.975 190.087)"
    >
      <tspan
        x={13}
        y={12.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"BL"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#92d050"
      strokeWidth={4}
      d="M702.818 239.38h27.5M703.652 237.635v58.5"
    />
    <path
      fill="#92d050"
      stroke="#92d050"
      d="M700.038 317.799v-6.6h-4.4l8.7-9.9 8.7 9.9h-4.3v6.6h-8.7z"
    />
    <path fill="#fff" d="M658.705 325.775h93.2v16.6h-93.2v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(658.705 325.775)"
    >
      <tspan
        x={13.6}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Bleaching Earth"}
      </tspan>
    </text>
    <g stroke="#92d050">
      <path fill="none" strokeWidth={4} d="M1433.236 232.4h-78.8" />
      <path
        fill="#92d050"
        strokeLinecap="round"
        d="m1345.636 232.4 10.4 6c-1-1.8-1.6-3.8-1.6-6s.6-4.2 1.6-6l-10.4 6"
      />
    </g>
    <path
      fill="none"
      stroke="#92d050"
      strokeWidth={4}
      d="M1467.423 240.252h56.7"
    />
    <path
      fill="#92d050"
      stroke="#92d050"
      d="M1543.236 244.807h-6.3v4.5l-9.5-9.1 9.5-9.1v4.6h6.3v9.1z"
    />
    <path fill="#fff" d="M1550.124 231.528h93.2v20.9h-93.2v-20.9z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1550.124 231.528)"
    >
      <tspan
        x={10.1}
        y={15.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Activated Carbon"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M159.444 319.014h51.2v13.1h-51.2v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(159.444 319.014)"
    >
      <tspan
        x={11.6}
        y={11.5}
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
      d="M159.664 304.279h51v13.1h-51v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(159.664 304.279)"
    >
      <tspan
        x={11.5}
        y={11.5}
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
      d="M159.444 349.55h51.2v13.1h-51.2v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(159.444 349.55)"
    >
      <tspan
        x={14.1}
        y={11.5}
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
      d="M159.664 333.941h51v13.1h-51v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(159.664 333.941)"
    >
      <tspan
        x={11.5}
        y={11.5}
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
      d="M212.414 319.838h51.6v13.1h-51.6v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(212.414 319.838)"
    >
      <tspan
        x={11.8}
        y={11.5}
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
      d="M212.635 304.23h51.4v13.1h-51.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(212.635 304.23)"
    >
      <tspan
        x={13.2}
        y={11.5}
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
      d="M212.414 350.374h52.4v13.1h-52.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(212.414 350.374)"
    >
      <tspan
        x={14.7}
        y={11.5}
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
      d="M212.635 334.766h52.2v13.1h-52.2v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(212.635 334.766)"
    >
      <tspan
        x={12.1}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"12 sec"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M63.78 319.014h93v13.1h-93v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(63.78 319.014)"
    >
      <tspan
        x={13}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV211A  Close"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M64.079 304.279h93v13.1h-93v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(64.079 304.279)"
    >
      <tspan
        x={14}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV211A  Open"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M63.78 349.55h93v13.1h-93v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(63.78 349.55)"
    >
      <tspan
        x={13}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV212A  Close"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M64.079 333.941h93v13.1h-93v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(64.079 333.941)"
    >
      <tspan
        x={14}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV212A  Open"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#3498db"
      d="M284.244 296.985h208.4v72.4h-208.4v-72.4z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M159.365 281.087h50.4v13.1h-50.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(159.365 281.087)"
    >
      <tspan
        x={15.7}
        y={11.5}
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
      d="M212.336 281.039h50.8v13.1h-50.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(212.336 281.039)"
    >
      <tspan
        x={16.9}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Acc"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M63.78 281.087h93v13.1h-93v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(63.78 281.087)"
    >
      <tspan
        x={30}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"STEPS"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M64.079 237.441h74v16.6h-74v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(64.079 237.441)"
    >
      <tspan
        x={23}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"AUTO"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M64.079 256.635h74v16.6h-74v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(64.079 256.635)"
    >
      <tspan
        x={15}
        y={13.3}
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
      d="M145.19 240.059h12.3v13.1h-12.3v-13.1z"
    />
    <path fill="#fff" stroke="#000" d="M145.19 258.38h12.3v13.1h-12.3v-13.1z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M167.775 237.441h67.9v16.6h-67.9v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(167.775 237.441)"
    >
      <tspan
        x={17.4}
        y={13.3}
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
      d="M167.775 256.635h67.9v16.6h-67.9v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(167.775 256.635)"
    >
      <tspan
        x={20.4}
        y={13.3}
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
      d="M242.216 240.059h12.3v13.1h-12.3v-13.1z"
    />
    <path
      fill="#92d050"
      stroke="#000"
      d="M242.216 258.38h12.3v13.1h-12.3v-13.1z"
    />
    <path fill="#fff" stroke="#afafaf" d="M63.245 374.85h93v16.6h-93v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(63.245 374.85)"
    >
      <tspan
        x={4.5}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"BE Density"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M63.245 394.043h93v16.6h-93v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(63.245 394.043)"
    >
      <tspan
        x={4.5}
        y={13.3}
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
      d="M158.193 374.85h106.6v16.6h-106.6v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(158.193 374.85)"
    >
      <tspan
        x={25.8}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"720.0 kg/ m3"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M158.193 394.043h106.6v16.6h-106.6v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(158.193 394.043)"
    >
      <tspan
        x={39.8}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"0.9 %"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M62.411 413.237h93v42.3h-93v-42.3z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(62.411 413.237)"
    >
      <tspan
        x={4.5}
        y={17}
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
      d="M157.36 413.237h107.5v42.3h-107.5v-42.3z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(157.36 413.237)"
    >
      <tspan
        x={28.2}
        y={27.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"299.5 kg"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M83.15 434.612h57.5v16.6h-57.5v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(83.15 434.612)"
    >
      <tspan
        x={12.3}
        y={13.3}
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
      strokeWidth={2}
      d="M281.743 203.853h214.3v256.9h-214.3v-256.9z"
    />
    <path
      fill="none"
      stroke="#3498db"
      d="M59.308 371.36h208v87.2h-208v-87.2z"
    />
    <path
      fill="#527294"
      stroke="#527294"
      d="M58.97 209.523h208.4v24H58.97v-24z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(58.97 209.523)"
    >
      <tspan
        x={25.2}
        y={17}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Bleaching Earth Dosage Timer"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M384.613 319.014h51.2v13.1h-51.2v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(384.613 319.014)"
    >
      <tspan
        x={11.6}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"26 sec"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M384.833 304.279h51v13.1h-51v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(384.833 304.279)"
    >
      <tspan
        x={11.5}
        y={11.5}
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
      d="M384.613 349.55h51.2v13.1h-51.2v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(384.613 349.55)"
    >
      <tspan
        x={11.6}
        y={11.5}
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
      d="M384.833 333.941h51v13.1h-51v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(384.833 333.941)"
    >
      <tspan
        x={11.5}
        y={11.5}
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
      d="M437.583 319.838h51.6v13.1h-51.6v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(437.583 319.838)"
    >
      <tspan
        x={11.8}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"26 sec"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M437.803 304.23h51.4v13.1h-51.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(437.803 304.23)"
    >
      <tspan
        x={13.2}
        y={11.5}
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
      d="M437.583 350.374h52.4v13.1h-52.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(437.583 350.374)"
    >
      <tspan
        x={14.7}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"0 sec"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M437.803 334.766h52.2v13.1h-52.2v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(437.803 334.766)"
    >
      <tspan
        x={14.6}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"0 sec"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M288.948 319.014h93v13.1h-93v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(288.948 319.014)"
    >
      <tspan
        x={13}
        y={11.5}
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
      d="M289.247 304.279h93v13.1h-93v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(289.247 304.279)"
    >
      <tspan
        x={14}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV211B  Open"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M288.948 349.55h93v13.1h-93v-13.1z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(288.948 349.55)"
    >
      <tspan
        x={13}
        y={11.5}
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
      d="M289.247 333.941h93v13.1h-93v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(289.247 333.941)"
    >
      <tspan
        x={14}
        y={11.5}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"KV212B  Open"}
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#3498db"
      d="M59.347 296.985h208.4v72.4h-208.4v-72.4z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M384.534 281.088h50.4v13.1h-50.4v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(384.534 281.088)"
    >
      <tspan
        x={15.7}
        y={11.5}
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
      d="M437.504 281.04h50.8v13.1h-50.8v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(437.504 281.04)"
    >
      <tspan
        x={16.9}
        y={11.5}
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
      d="M288.948 281.088h93v13.1h-93v-13.1z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(288.948 281.088)"
    >
      <tspan
        x={30}
        y={11.5}
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
      d="M289.247 237.441h74v16.6h-74v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(289.247 237.441)"
    >
      <tspan
        x={23}
        y={13.3}
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
      d="M289.247 256.635h74v16.6h-74v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(289.247 256.635)"
    >
      <tspan
        x={15}
        y={13.3}
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
      d="M370.359 240.059h12.3v13.1h-12.3v-13.1z"
    />
    <path
      fill="#fff"
      stroke="#000"
      d="M370.359 258.38h12.3v13.1h-12.3v-13.1z"
    />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M392.943 237.441h67.9v16.6h-67.9v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(392.943 237.441)"
    >
      <tspan
        x={17.4}
        y={13.3}
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
      d="M392.943 256.635h67.9v16.6h-67.9v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(392.943 256.635)"
    >
      <tspan
        x={20.4}
        y={13.3}
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
      d="M467.384 240.059h12.3v13.1h-12.3v-13.1z"
    />
    <path
      fill="#92d050"
      stroke="#000"
      d="M467.384 258.38h12.3v13.1h-12.3v-13.1z"
    />
    <path fill="#fff" stroke="#afafaf" d="M288.413 374.85h93v16.6h-93v-16.6z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(288.413 374.85)"
    >
      <tspan
        x={4.5}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"AC Density"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M288.413 394.043h93v16.6h-93v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(288.413 394.043)"
    >
      <tspan
        x={4.5}
        y={13.3}
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
      d="M383.363 374.85h106.6v16.6h-106.6v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(383.363 374.85)"
    >
      <tspan
        x={25.8}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"720.0 kg/ m3"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M383.363 394.043h106.6v16.6h-106.6v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(383.363 394.043)"
    >
      <tspan
        x={39.8}
        y={13.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"0.9 %"}
      </tspan>
    </text>
    <path fill="#fff" stroke="#afafaf" d="M287.58 413.237h93v42.3h-93v-42.3z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(287.58 413.237)"
    >
      <tspan
        x={4.5}
        y={17}
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
      d="M382.529 413.237h107.5v42.3h-107.5v-42.3z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(382.529 413.237)"
    >
      <tspan
        x={28.2}
        y={27.2}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"299.5 kg"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M308.32 434.612h57.5v16.6h-57.5v-16.6z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(308.32 434.612)"
    >
      <tspan
        x={12.3}
        y={13.3}
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
      strokeWidth={2}
      d="M56.39 203.853h214.3v256.9H56.39v-256.9z"
    />
    <path
      fill="none"
      stroke="#3498db"
      d="M284.476 371.36h208v87.2h-208v-87.2z"
    />
    <path
      fill="#527294"
      stroke="#527294"
      d="M284.139 209.523h208.4v24h-208.4v-24z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(284.139 209.523)"
    >
      <tspan
        x={21.7}
        y={17}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Activated Carbon Dosage Timer"}
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
      transform="translate(49.422 71)"
    >
      <tspan
        x={632.5}
        y={55.3}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
          textDecoration: "underline",
        }}
      >
        {"L1500 - BLEACHING SECTION"}
      </tspan>
    </text>
    <path
      fill="#92d050"
      stroke="#000"
      d="M1303.996 609.079c0-4.4 3.8-7.9 8.5-7.9 4.8 0 8.6 3.5 8.6 7.9 0 4.3-3.8 7.8-8.6 7.8-4.7 0-8.5-3.5-8.5-7.8z"
    />
    <g stroke="#236ea1">
      <path fill="none" strokeWidth={4} d="M1312.334 646.807v-17.4" />
      <path
        fill="#236ea1"
        strokeLinecap="round"
        d="m1312.334 620.607-6 10.4c1.8-1 3.8-1.6 6-1.6s4.2.6 6 1.6l-6-10.4"
      />
    </g>
    <path fill="#fff" d="M1287.32 540.108h68.4v26.8h-68.4v-26.8z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1287.32 540.108)"
    >
      <tspan
        x={17.2}
        y={10.4}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"To F207"}
      </tspan>
      <tspan
        x={16.7}
        y={26.4}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"Vacuum"}
      </tspan>
    </text>
    <path
      fill="#0070c0"
      stroke="#0070c0"
      d="M1308.092 594.197v-6.6h-4.4l8.7-9.9 8.7 9.9h-4.3v6.6h-8.7z"
    />
    <path fill="#fff" d="M1325.673 602.487h54v19.9h-54v-19.9z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "9pt",
      }}
      transform="translate(1325.673 602.487)"
    >
      <tspan
        x={10}
        y={14.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"PAL201"}
      </tspan>
    </text>
  </svg>
)
export default Bleaching_HMI
