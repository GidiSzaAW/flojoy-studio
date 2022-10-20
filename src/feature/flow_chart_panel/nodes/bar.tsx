import React, { CSSProperties, Fragment } from "react";
interface SvgProps {
  style?: CSSProperties;
  theme?: "light" | "dark";
}
const BarChartIcon = ({ style }: SvgProps) => {
  return (
    <svg
      width="112"
      height="105"
      style={style}
      viewBox="0 0 81 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5_181)">
        <path d="M10.4212 43.7522H0V58.9191H10.4212V43.7522Z" fill="#99F5FF" />
        <path d="M24.5665 0H14.1453V58.8693H24.5665V0Z" fill="#99F5FF" />
        <path
          d="M38.7118 31.1116H28.2906V58.86H38.7118V31.1116Z"
          fill="#99F5FF"
        />
        <path
          d="M52.8571 52.507H42.4359V58.9969H52.8571V52.507Z"
          fill="#99F5FF"
        />
        <path
          d="M67.0024 43.7522H56.5812V58.9658H67.0024V43.7522Z"
          fill="#99F5FF"
        />
        <path
          d="M81.1477 24.6061H70.7266V58.8569H81.1477V24.6061Z"
          fill="#99F5FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_181">
          <rect width="81" height="59" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const BarChartTitle = ({ style }: SvgProps) => (
  <svg
    width="120"
    height="21"
    style={style}
    viewBox="0 0 30 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.420918 1.03709H3.53127C4.94859 1.03709 5.97626 1.23989 6.61428 1.64549C7.25686 2.04653 7.57814 2.68683 7.57814 3.56639C7.57814 4.1634 7.43687 4.65331 7.15432 5.03612C6.87632 5.41893 6.5049 5.64907 6.04006 5.72655V5.79491C6.67352 5.93618 7.12925 6.20051 7.40725 6.58788C7.6898 6.97525 7.83107 7.49022 7.83107 8.1328C7.83107 9.04426 7.50067 9.75519 6.83986 10.2656C6.18361 10.776 5.29038 11.0312 4.16018 11.0312H0.420918V1.03709ZM2.54006 4.9951H3.77053C4.34475 4.9951 4.75946 4.90623 5.01467 4.7285C5.27443 4.55077 5.40432 4.25682 5.40432 3.84666C5.40432 3.46385 5.26304 3.19041 4.98049 3.02635C4.70249 2.85773 4.26044 2.77342 3.65432 2.77342H2.54006V4.9951ZM2.54006 6.67674V9.28123H3.92092C4.50425 9.28123 4.93491 9.16958 5.21291 8.94627C5.4909 8.72297 5.6299 8.38117 5.6299 7.92088C5.6299 7.09146 5.03745 6.67674 3.85256 6.67674H2.54006ZM16.9253 11.0312L16.2007 8.65233H12.5572L11.8326 11.0312H9.54935L13.0767 0.996078H15.6675L19.2085 11.0312H16.9253ZM15.6949 6.87498C15.0249 4.71939 14.6467 3.50031 14.5601 3.21776C14.4781 2.93521 14.4188 2.7119 14.3824 2.54784C14.232 3.13117 13.8013 4.57355 13.0904 6.87498H15.6949ZM23.5723 5.47362H24.2559C24.9258 5.47362 25.4203 5.36196 25.7393 5.13866C26.0583 4.91535 26.2178 4.56444 26.2178 4.08592C26.2178 3.61196 26.0538 3.27472 25.7256 3.0742C25.4021 2.87368 24.8985 2.77342 24.2149 2.77342H23.5723V5.47362ZM23.5723 7.19627V11.0312H21.4532V1.03709H24.3653C25.7234 1.03709 26.7282 1.28547 27.3799 1.78221C28.0316 2.2744 28.3575 3.02407 28.3575 4.03123C28.3575 4.61913 28.1957 5.14321 27.8721 5.6035C27.5486 6.05923 27.0906 6.41698 26.4981 6.67674C28.002 8.92349 28.9818 10.375 29.4376 11.0312H27.086L24.7003 7.19627H23.5723Z"
      fill="#99F5FF"
    />
  </svg>
);
const BarChart = ({ theme }: SvgProps) => {
  return (
    <Fragment>
      <BarChartTitle
        theme={theme}
        style={{
          position: "absolute",
          top: 21,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <BarChartIcon
        theme={theme}
        style={{
          position: "absolute",
          bottom: 5,
          left: "50%",
          transform: "translateX(-50%)",
          height: 105,
        }}
      />
    </Fragment>
  );
};

export default BarChart;
