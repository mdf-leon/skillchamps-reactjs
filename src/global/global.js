import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root{
    height: 100%;
    width: 100%;
}

button{
    cursor: pointer;
}
.d-flex{
    display: flex;
}
.flex-center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-space-between{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-column-center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fullwidth{
  width:100%;
}
/* -------------------Padding------------------- */
.p-0{
  padding: 0px;
}
.p-2{
  padding: 2px;
}
.p-4{
  padding: 4px;
}
.p-8{
  padding: 8px;
}
.p-10{
  padding: 10px;
}
.p-20{
  padding: 20px;
}
.p-40{
  padding: 40px;
}
/* ---Top--- */
.pt-0{
  padding-top: 0px;
}
.pt-2{
  padding-top: 2px;
}
.pt-4{
  padding-top: 4px;
}
.pt-8{
  padding-top: 8px;
}
.pt-10{
  padding-top: 10px;
}
.pt-20{
  padding-top: 20px;
}
.pt-40{
  padding-top: 40px;
}
/* ---Right--- */
.pr-0{
  padding-right: 0px;
}
.pr-2{
  padding-right: 2px;
}
.pr-4{
  padding-right: 4px;
}
.pr-8{
  padding-right: 8px;
}
.pr-10{
  padding-right: 10px;
}
.pr-20{
  padding-right: 20px;
}
.pr-40{
  padding-right: 40px;
}
/* ---Bottom--- */
.pb-0{
  padding-bottom: 0px;
}
.pb-2{
  padding-bottom: 2px;
}
.pb-4{
  padding-bottom: 4px;
}
.pb-8{
  padding-bottom: 8px;
}
.pb-10{
  padding-bottom: 10px;
}
.pb-20{
  padding-bottom: 20px;
}
.pb-40{
  padding-bottom: 40px;
}
/* ---Left--- */
.pl-0{
  padding-left: 0px;
}
.pl-2{
  padding-left: 2px;
}
.pl-4{
  padding-left: 4px;
}
.pl-8{
  padding-left: 8px;
}
.pl-10{
  padding-left: 10px;
}
.pl-20{
  padding-left: 20px;
}
.pl-40{
  padding-left: 40px;
}

/* -------------------Margin------------------- */
.m-0{
  margin: 0px;
}
.m-2{
  margin: 2px;
}
.m-4{
  margin: 4px;
}
.m-8{
  margin: 8px;
}
.m-10{
  margin: 10px;
}
.m-20{
  margin: 20px;
}
.m-40{
  margin: 40px;
}
/* ---Top--- */
.mt-0{
  margin-top: 0px;
}
.mt-2{
  margin-top: 2px;
}
.mt-4{
  margin-top: 4px;
}
.mt-8{
  margin-top: 8px;
}
.mt-10{
  margin-top: 10px;
}
.mt-20{
  margin-top: 20px;
}
.mt-40{
  margin-top: 40px;
}
/* ---Right--- */
.mr-0{
  margin-right: 0px;
}
.mr-2{
  margin-right: 2px;
}
.mr-4{
  margin-right: 4px;
}
.mr-8{
  margin-right: 8px;
}
.mr-10{
  margin-right: 10px;
}
.mr-20{
  margin-right: 20px;
}
.mr-40{
  margin-right: 40px;
}
.mr-auto{
  margin-right: auto;
}
/* ---Bottom--- */
.mb-0{
  margin-bottom: 0px;
}
.mb-2{
  margin-bottom: 2px;
}
.mb-4{
  margin-bottom: 4px;
}
.mb-8{
  margin-bottom: 8px;
}
.mb-10{
  margin-bottom: 10px;
}
.mb-20{
  margin-bottom: 20px;
}
.mb-40{
  margin-bottom: 40px;
}
/* ---Left--- */
.ml-0{
  margin-left: 0px;
}
.ml-2{
  margin-left: 2px;
}
.ml-4{
  margin-left: 4px;
}
.ml-8{
  margin-left: 8px;
}
.ml-10{
  margin-left: 10px;
}
.ml-20{
  margin-left: 20px;
}
.ml-40{
  margin-left: 40px;
}
.ml-auto{
  margin-left: auto;
}
/* ---X axis--- */
.mx-auto{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.uppercase {
  text-transform: uppercase
}

`;
