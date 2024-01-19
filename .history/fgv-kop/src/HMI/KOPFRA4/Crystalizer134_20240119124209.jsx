import React from 'react'



const Crystalizer134 = (props) => {

    if (!props.data) {
        console.error("Data is undefined or null");
        return null; // or handle accordingly
    }

    let c1 = props.data['CRYSTALLIZER 1'];
    let c2 = props.data['CRYSTALLIZER 2'];
    let c3 = props.data['CRYSTALLIZER 3'];

    console.log(c2);
    // Continue with the rest of your code


    return (
    <svg xmlns="http://www.w3.org/2000/svg" width='100%' height='100%' viewBox="1 1 1919 1079">
    <defs>
      <linearGradient id="b" x1="0%" x2="0%" y1="0%" y2="100%">
        <stop offset={0} stopColor="#6f9f3b" />
        <stop offset={0.15} stopColor="#9cd367" />
        <stop offset={0.25} stopColor="#cde7bb" />
        <stop offset={0.44} stopColor="#7fb645" />
        <stop offset={0.6} stopColor="#71a23c" />
        <stop offset={0.8} stopColor="#5e8831" />
        <stop offset={0.97} stopColor="#567c2c" />
        <stop offset={1} stopColor="#73a53e" />
      </linearGradient>
      <filter id="a" width="300%" height="300%" x="-100%" y="-100%">
        <feGaussianBlur stdDeviation={5} />
      </filter>
    </defs>
    <path fill="#000030" stroke="#3498db" d="M1921 1081V1H1v1080h1920z" />
    <path
      fill="#000043"
      stroke="#ffc000"
      d="M25.252 215.174h491v657h-491v-657z"
    />
    <path fill="none" stroke="#7e7e7e" d="M39.252 420.175h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M324.774 446.469h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(324.774 446.469)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['WATER TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(43.456 420.174)"
    >
      <tspan
        x={12.9}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER TEMPERATURE "}
      </tspan>
      <tspan
        x={79.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"SET POINT"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M39.252 508.175h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M324.774 534.469h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(324.774 534.469)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['WATER INLET TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(43.456 508.174)"
    >
      <tspan
        x={63.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER INLET "}
      </tspan>
      <tspan
        x={11.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TEMPERATURE (STIC3)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M39.252 596.176h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M324.774 622.47h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(324.774 622.47)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['WATER OUTLET TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(43.456 596.175)"
    >
      <tspan
        x={51.9}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER OUTLET "}
      </tspan>
      <tspan
        x={11.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TEMPERATURE (STIC1)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M39.252 684.176h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M324.774 710.47h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(324.774 710.47)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['OIL TEMPERATURE']} \xB0C`}

      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(43.456 684.175)"
    >
      <tspan
        x={33.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"OIL TEMPERATURE "}
      </tspan>
      <tspan
        x={98.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"(STIC2)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M39.252 772.177h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M324.774 798.471h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(324.774 798.471)"
    >
      <tspan
        x={70.1}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['CONTROL VALVE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(43.456 772.176)"
    >
      <tspan
        x={44.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CONTROL VALVE "}
      </tspan>
      <tspan
        x={95.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"(V10C1)"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M92.29 382.426h35.8v19.2h-35.8v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(92.29 382.426)"
    >
      <tspan
        x={14.4}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['HR']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(130.064 369.674)"
    >
      <tspan
        x={5.6}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"HR"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(39.252 369.674)"
    >
      <tspan
        x={7.1}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"PV"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M188.514 382.426h46.3v19.2h-46.3v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(188.514 382.426)"
    >
      <tspan
        x={19.6}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['MIN']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(237.268 369.674)"
    >
      <tspan
        x={6.5}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"MIN"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M303.253 382.426h46.3v19.2h-46.3v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(303.253 382.426)"
    >
      <tspan
        x={19.6}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['SEC']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(352.007 369.674)"
    >
      <tspan
        x={6.5}
        y={30.5}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"SEC"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(39.252 254.325)"
    />
    <path
      fill={c1['AUTO'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M130.552 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(39.252 254.325)"
    >
      <tspan
        x={30.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"AUTO"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(219.41 254.325)"
    />
    <path
      fill={c1['AUTO'] ==="False" ? "#00B050" : "#87a1ac"}
      stroke="#00b050"
      d="M310.71 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(219.41 254.325)"
    >
      <tspan
        x={19.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"MANUAL"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(399.569 254.325)"
    />
    <path
      fill={c1['FEED'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M490.869 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(399.569 254.325)"
    >
      <tspan
        x={32.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FEED"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(39.252 304.482)"
    />
    <path
      fill={c1['REHEAT'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M130.552 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(39.252 304.482)"
    >
      <tspan
        x={22.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"REHEAT"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(219.41 304.482)"
    />
    <path
      fill={c1['JOG'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M310.71 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(219.41 304.482)"
    >
      <tspan
        x={35.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"JOG"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(399.57 304.482)"
    />
    <path
      fill={c1['DRAIN'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M490.87 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(399.57 304.482)"
    >
      <tspan
        x={28.3}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"DRAIN"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M237.622 350.8h105.1V370h-105.1v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(237.622 350.8)"
    >
      <tspan
        x={49.1}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c1['SEQ STEP']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(39.252 338.174)"
    >
      <tspan
        x={10}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CURRENT STEP"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(163.252 209.825)"
    >
      <tspan
        x={9.5}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CRYTALLIZER 1"}
      </tspan>
    </text>
    <path
      fill="url(#b)"
      d="M0 0h36.6v38.1H0V0z"
      transform="matrix(0 1 1 0 561.926 286.554)"
    />
    <path
      fill="url(#b)"
      d="M0 0h9.4v38.2H0V0z"
      transform="matrix(0 1 1 0 561.926 277.144)"
    />
    <path
      fill="url(#b)"
      d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
      transform="matrix(0 1 1 0 561.926 269.825)"
    />
    <path
      fill="url(#b)"
      d="M0 0h.8v38.2H0V0z"
      transform="matrix(0 1 1 0 561.926 277.4)"
    />
    <path
      fill="url(#b)"
      d="M0 0h.8v37.5H0V0z"
      transform="matrix(0 1 1 0 561.907 321.816)"
    />
    <path
      fill="url(#b)"
      d="M0 0h15.8v8.3H0V0z"
      transform="matrix(0 1 1 0 576.518 326.161)"
    />
    <g fill="url(#b)" transform="matrix(0 1 1 0 563.07 286.555)">
      <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
    </g>
    <path
      fill="url(#b)"
      d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
      transform="matrix(0 1 1 0 561.926 322.417)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.9v17.5H0V0z"
      transform="matrix(0 1 1 0 571.894 326.161)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 563.069 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 574.25 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 585.43 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 596.611 326.058)"
    />
    <path
      fill="#92d050"
      d="M597.378 287.728v31.5h2.5v-31.5h-2.5zM600.115 287.728v31.5h5.5v-31.5h-5.5z"
    />
    <path fill="#92d050" d="M604.549 287.728v31.5h2v-31.5h-2z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(528.916 209.825)"
    >
      <tspan
        x={5.8}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FT2/1 AG"}
      </tspan>
    </text>
    <path
      fill="#000043"
      stroke="#ffc000"
      d="M653.832 215.174h491v657h-491v-657z"
    />
    <path fill="none" stroke="#7e7e7e" d="M667.832 420.175h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M953.354 446.469h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(953.354 446.469)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['WATER TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(672.036 420.174)"
    >
      <tspan
        x={12.9}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER TEMPERATURE "}
      </tspan>
      <tspan
        x={79.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"SET POINT"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M667.832 508.175h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M953.354 534.469h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(953.354 534.469)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['WATER INLET TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(672.036 508.174)"
    >
      <tspan
        x={63.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER INLET "}
      </tspan>
      <tspan
        x={11.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TEMPERATURE (STIC6)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M667.832 596.176h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M953.354 622.47h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(953.354 622.47)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['WATER OUTLET TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(672.036 596.175)"
    >
      <tspan
        x={51.9}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER OUTLET "}
      </tspan>
      <tspan
        x={11.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TEMPERATURE (STIC4)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M667.832 684.176h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M953.354 710.47h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(953.354 710.47)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['OIL TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(672.036 684.175)"
    >
      <tspan
        x={33.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"OIL TEMPERATURE "}
      </tspan>
      <tspan
        x={98.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"(STIC5)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M667.832 772.177h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M953.354 798.471h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(953.354 798.471)"
    >
      <tspan
        x={70.1}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['CONTROL VALVE']} %`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(672.036 772.176)"
    >
      <tspan
        x={44.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CONTROL VALVE "}
      </tspan>
      <tspan
        x={95.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"(V10C2)"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M720.87 382.426h35.8v19.2h-35.8v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(720.87 382.426)"
    >
      <tspan
        x={14.4}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['HR']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(758.644 369.674)"
    >
      <tspan
        x={5.6}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"HR"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(667.832 369.674)"
    >
      <tspan
        x={7.1}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"PV"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M817.094 382.426h46.3v19.2h-46.3v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(817.094 382.426)"
    >
      <tspan
        x={19.6}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['MIN']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(865.848 369.674)"
    >
      <tspan
        x={6.5}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"MIN"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M931.833 382.426h46.3v19.2h-46.3v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(931.833 382.426)"
    >
      <tspan
        x={19.6}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['SEC']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(980.587 369.674)"
    >
      <tspan
        x={6.5}
        y={30.5}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"SEC"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(667.832 254.325)"
    />
    <path
      fill={c2['AUTO'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M759.132 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(667.832 254.325)"
    >
      <tspan
        x={30.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"AUTO"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(847.99 254.325)"
    />
    <path
      fill={c2['AUTO'] ==="False" ? "#00B050" : "#87a1ac"}
      stroke="#00b050"
      d="M939.29 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(847.99 254.325)"
    >
      <tspan
        x={19.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"MANUAL"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(1028.149 254.325)"
    />
    <path
      fill={c2['FEED'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M1119.449 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(1028.149 254.325)"
    >
      <tspan
        x={32.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FEED"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(667.832 304.482)"
    />
    <path
      fill={c2['REHEAT'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M759.132 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(667.832 304.482)"
    >
      <tspan
        x={22.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"REHEAT"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(847.99 304.482)"
    />
    <path
      fill={c2['JOG'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M939.29 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(847.99 304.482)"
    >
      <tspan
        x={35.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"JOG"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(1028.15 304.482)"
    />
    <path
      fill={c2['DRAIN'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M1119.45 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(1028.15 304.482)"
    >
      <tspan
        x={28.3}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"DRAIN"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M866.202 350.8h105.1V370h-105.1v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(866.202 350.8)"
    >
      <tspan
        x={49.1}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c2['SEQ STEP']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(667.832 338.174)"
    >
      <tspan
        x={10}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CURRENT STEP"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(791.832 209.825)"
    >
      <tspan
        x={9.5}
        y={30.5}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CRYTALLIZER 2"}
      </tspan>
    </text>
    <path
      fill="url(#b)"
      d="M0 0h36.6v38.1H0V0z"
      transform="matrix(0 1 1 0 1190.506 286.554)"
    />
    <path
      fill="url(#b)"
      d="M0 0h9.4v38.2H0V0z"
      transform="matrix(0 1 1 0 1190.506 277.144)"
    />
    <path
      fill="url(#b)"
      d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
      transform="matrix(0 1 1 0 1190.506 269.825)"
    />
    <path
      fill="url(#b)"
      d="M0 0h.8v38.2H0V0z"
      transform="matrix(0 1 1 0 1190.506 277.4)"
    />
    <path
      fill="url(#b)"
      d="M0 0h.8v37.5H0V0z"
      transform="matrix(0 1 1 0 1190.487 321.816)"
    />
    <path
      fill="url(#b)"
      d="M0 0h15.8v8.3H0V0z"
      transform="matrix(0 1 1 0 1205.098 326.161)"
    />
    <g fill="url(#b)" transform="matrix(0 1 1 0 1191.65 286.555)">
      <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
    </g>
    <path
      fill="url(#b)"
      d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
      transform="matrix(0 1 1 0 1190.506 322.417)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.9v17.5H0V0z"
      transform="matrix(0 1 1 0 1200.474 326.161)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 1191.649 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 1202.83 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 1214.01 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 1225.191 326.058)"
    />
    <path
      fill="#92d050"
      d="M1225.958 287.728v31.5h2.5v-31.5h-2.5zM1228.695 287.728v31.5h5.5v-31.5h-5.5z"
    />
    <path fill="#92d050" d="M1233.129 287.728v31.5h2v-31.5h-2z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(1157.496 209.825)"
    >
      <tspan
        x={5.8}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FT2/2 AG"}
      </tspan>
    </text>
    <path
      fill="#000043"
      stroke="#ffc000"
      d="M1282.412 215.174h491v657h-491v-657z"
    />
    <path fill="none" stroke="#7e7e7e" d="M1296.412 420.175h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1581.934 446.469h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1581.934 446.469)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['WATER TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(1300.616 420.174)"
    >
      <tspan
        x={12.9}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER TEMPERATURE "}
      </tspan>
      <tspan
        x={79.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"SET POINT"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M1296.412 508.175h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1581.934 534.469h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1581.934 534.469)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['WATER INLET TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(1300.616 508.174)"
    >
      <tspan
        x={63.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER INLET "}
      </tspan>
      <tspan
        x={11.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TEMPERATURE (STIC9)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M1296.412 596.176h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1581.934 622.47h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1581.934 622.47)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['WATER OUTLET TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(1300.616 596.175)"
    >
      <tspan
        x={51.9}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"WATER OUTLET "}
      </tspan>
      <tspan
        x={11.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"TEMPERATURE (STIC7)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M1296.412 684.176h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1581.934 710.47h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1581.934 710.47)"
    >
      <tspan
        x={68.6}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['OIL TEMPERATURE']} \xB0C`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(1300.616 684.175)"
    >
      <tspan
        x={33.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"OIL TEMPERATURE "}
      </tspan>
      <tspan
        x={98.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"(STIC8)"}
      </tspan>
    </text>
    <path fill="none" stroke="#7e7e7e" d="M1296.412 772.177h463v88h-463v-88z" />
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1581.934 798.471h163.1v33.9h-163.1v-33.9z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1581.934 798.471)"
    >
      <tspan
        x={70.1}
        y={22.9}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['CONTROL VALVE']} %`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
      }}
      transform="translate(1300.616 772.176)"
    >
      <tspan
        x={44.4}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CONTROL VALVE "}
      </tspan>
      <tspan
        x={95.9}
        y={66}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"(V10C3)"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1349.45 382.426h35.8v19.2h-35.8v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1349.45 382.426)"
    >
      <tspan
        x={14.4}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['HR']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(1387.224 369.674)"
    >
      <tspan
        x={5.6}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"HR"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(1296.412 369.674)"
    >
      <tspan
        x={7.1}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"PV"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1445.674 382.426h46.3v19.2h-46.3v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1445.674 382.426)"
    >
      <tspan
        x={19.6}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['MIN']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(1494.428 369.674)"
    >
      <tspan
        x={6.5}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"MIN"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1560.412 382.426h46.3v19.2h-46.3v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1560.412 382.426)"
    >
      <tspan
        x={19.6}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['SEC']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(1609.167 369.674)"
    >
      <tspan
        x={6.5}
        y={30.5}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"SEC"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(1296.412 254.325)"
    />
    <path
      fill={c3['AUTO'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M1387.712 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(1296.412 254.325)"
    >
      <tspan
        x={30.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"AUTO"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(1476.57 254.325)"
    />
    <path
      fill={c3['AUTO'] ==="False" ? "#00B050" : "#87a1ac"}
      stroke="#00b050"
      d="M1567.87 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(1476.57 254.325)"
    >
      <tspan
        x={19.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"MANUAL"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(1656.729 254.325)"
    />
    <path
      fill={c3['FEED'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M1748.029 288.025c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(1656.729 254.325)"
    >
      <tspan
        x={32.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FEED"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(1296.412 304.482)"
    />
    <path
      fill={c3['REHEAT'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M1387.712 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(1296.412 304.482)"
    >
      <tspan
        x={22.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"REHEAT"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(1476.57 304.482)"
    />
    <path
      fill={c3['JOG'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M1567.87 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(1476.57 304.482)"
    >
      <tspan
        x={35.8}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"JOG"}
      </tspan>
    </text>
    <path
      fillOpacity={0.68}
      stroke="#000"
      strokeOpacity={0.68}
      d="M95.3 36.4c6.3 0 11.4-5.1 11.4-11.4V14c0-6.3-5.1-11.3-11.4-11.3h-80C9.1 2.7 4 7.7 4 14v11c0 6.3 5.1 11.4 11.3 11.4h80z"
      filter="url(#a)"
      transform="translate(1656.73 304.482)"
    />
    <path
      fill={c3['DRAIN'] ==="True" ? "#00B050" : "#87a1ac"}
      stroke="#87a1ac"
      d="M1748.03 338.182c6.3 0 11.4-5.1 11.4-11.3v-11.1c0-6.2-5.1-11.3-11.4-11.3h-80c-6.2 0-11.3 5.1-11.3 11.3v11.1c0 6.2 5.1 11.3 11.3 11.3h80z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#fff",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "10pt",
        fontWeight: 700,
      }}
      transform="translate(1656.73 304.482)"
    >
      <tspan
        x={28.3}
        y={21.8}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"DRAIN"}
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#afafaf"
      d="M1494.782 350.8h105.1V370h-105.1v-19.2z"
    />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#000",
        fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "12pt",
      }}
      transform="translate(1494.782 350.8)"
    >
      <tspan
        x={49.1}
        y={15.6}
        style={{
          fontFamily: "Arial,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {`${c3['SEQ STEP']}`}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(1296.412 338.174)"
    >
      <tspan
        x={10}
        y={30.3}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CURRENT STEP"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(1420.412 209.825)"
    >
      <tspan
        x={9.5}
        y={30.5}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CRYTALLIZER 3"}
      </tspan>
    </text>
    <path
      fill="url(#b)"
      d="M0 0h36.6v38.1H0V0z"
      transform="matrix(0 1 1 0 1819.086 286.554)"
    />
    <path
      fill="url(#b)"
      d="M0 0h9.4v38.2H0V0z"
      transform="matrix(0 1 1 0 1819.086 277.144)"
    />
    <path
      fill="url(#b)"
      d="M7.4 0v38.2s-7.4 0-7.4-19S7.4 0 7.4 0z"
      transform="matrix(0 1 1 0 1819.086 269.825)"
    />
    <path
      fill="url(#b)"
      d="M0 0h.8v38.2H0V0z"
      transform="matrix(0 1 1 0 1819.086 277.4)"
    />
    <path
      fill="url(#b)"
      d="M0 0h.8v37.5H0V0z"
      transform="matrix(0 1 1 0 1819.067 321.816)"
    />
    <path
      fill="url(#b)"
      d="M0 0h15.8v8.3H0V0z"
      transform="matrix(0 1 1 0 1833.678 326.161)"
    />
    <g fill="url(#b)" transform="matrix(0 1 1 0 1820.23 286.555)">
      <path d="M0 2.692h32.9v1.1H0v-1.1zM0 8.075h32.9v1.1H0v-1.1zM0 10.767h32.9v1.1H0v-1.1zM0 13.459h32.9v1.1H0v-1.1zM0 16.15h32.9v1.1H0v-1.1zM0 19.212h32.9v1.1H0v-1.1zM0 21.682h32.9v1.1H0v-1.1zM0 24.152h32.9v1.1H0v-1.1zM0 26.622h32.9v1.1H0v-1.1zM0 29.61h32.9v1.1H0v-1.1zM0 32.3h32.9v1.1H0v-1.1zM0 34.993h32.9v1.1H0v-1.1zM0 0h32.9v1.1H0V0zM0 5.383h32.9v1.1H0v-1.1z" />
    </g>
    <path
      fill="url(#b)"
      d="M0 0h2.8c.5 0 .9.4.9.9v36.3c0 .5-.4.9-.9.9H0V0z"
      transform="matrix(0 1 1 0 1819.086 322.417)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.9v17.5H0V0z"
      transform="matrix(0 1 1 0 1829.054 326.161)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 1820.229 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 1831.41 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 1842.59 326.058)"
    />
    <path
      fill="url(#b)"
      d="M0 0h1.5v2.6H0V0z"
      transform="matrix(0 1 1 0 1853.771 326.058)"
    />
    <path
      fill="#92d050"
      d="M1854.538 287.728v31.5h2.5v-31.5h-2.5zM1857.275 287.728v31.5h5.5v-31.5h-5.5z"
    />
    <path fill="#92d050" d="M1861.709 287.728v31.5h2v-31.5h-2z" />
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "15pt",
        fontWeight: 700,
      }}
      transform="translate(1786.076 209.825)"
    >
      <tspan
        x={5.8}
        y={38}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"FT2/3 AG"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      style={{
        fill: "#ffc000",
        fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        fontSize: "39pt",
      }}
      transform="translate(383 59.001)"
    >
      <tspan
        x={206.5}
        y={65}
        style={{
          fontFamily: "Arial Black,PingFang SC,Mircrosoft YaHei,Arial",
        }}
      >
        {"CRYTALLIZER TABLE (1/3)"}
      </tspan>
    </text>
  </svg>
)

}
export default Crystalizer134


