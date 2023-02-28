import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

function StyledForms() {
  const ThemeProviderStyle = {
    Responsive:{
      featuremobile:'475px',
      mobile:'768px',
      tablet:'1024px',
      desktop:'1200px'
    }
  };

  const Shadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
  const PrimaryColor = "#0F2456";

  const FormElement = styled.div`
    padding: 100px;

    @media (max-width:${({theme}) => ThemeProviderStyle.Responsive.mobile}){
      padding: 0;
    }

  `;
  const FormContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  `;

  const FormDiv = styled.form`
    box-shadow: ${Shadow};
    padding: 1rem 4rem 4rem 4rem;
    border-radius: 1rem;
    background: url(https://i.ibb.co/4sVS609/Color.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 114%;

    @media (max-width:${({theme}) => ThemeProviderStyle.Responsive.desktop}){
      background: none;
    }

    @media (max-width:${({theme}) => ThemeProviderStyle.Responsive.mobile}){
      padding: 1rem 1rem;
    }
  `;

  const DisplaFlex = styled.div`
    display: flex;

    .w-50 {
      width: 50%;
    }

    .w-80 {
      width: 70%;
    }

    .w-20 {
      width: 20%;
    }

    span {
      font-weight: 400;
      font-size: 16px;
      display: block;
      margin-top: 5px;
    }

    @media (max-width:${({theme}) => ThemeProviderStyle.Responsive.desktop}){
      display: block;

      .w-50 {
      width: 100%;
    }

    .w-80 {
      width: 100%;
    }

    .w-20 {
      width: 100%;
    }
    }
  `;

  const Heading = styled.h1`
    color: #fff;
    font-size: 36px;
    letter-spacing: 0.1rem;
  `;

  const MarginTwenty = styled.div``;

  const Button = styled.button`
    margin-top: 30px;
    background: #ffffff;
    box-sizing: border-box;
    letter-spacing: 1px;
    padding: 7px 15px;
    position: relative;
    height: 46px;
    border: none;
    color: #0f2456;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.2s ease;
    border: 1px solid transparent;
    min-width:150px;

    &:hover {
      border: 1px solid #ffffff;
      color: #ffffff;
      background:transparent;
    }
  `;

  const Role = "Front End Developer";

  return (
    <ThemeProvider theme={ThemeProviderStyle}>
      <GlobalStyle />
      <FormElement>
        <FormContainer style={{ backgroundColor: PrimaryColor }}>
          <FormDiv action="">
            <DisplaFlex>
              <div className="w-80">
                <MarginTwenty>
                  <Heading>
                    Apply Jobs <span>{Role}</span>
                  </Heading>
                  <InputFieldBox
                    InputLabelTitle="First Name"
                    InputType="text"
                    InputPlaceholder="First Name"
                    margintop="30px"
                    InputName="Firstname"
                  />

                  <InputFieldBox
                    InputLabelTitle="Last Name"
                    InputType="text"
                    InputPlaceholder="Last Name"
                    margintop="30px"
                    InputName="Lastname"
                  />

                  <InputFieldBox
                    InputLabelTitle="Email Address"
                    InputType="email"
                    InputPlaceholder="Email Address"
                    margintop="30px"
                    InputName="Email"
                  />

                  <InputFieldBox
                    InputLabelTitle="Phone Number"
                    InputType="text"
                    InputPlaceholder="Phone Number"
                    margintop="30px"
                    InputName="Phonenumber"
                  />

                  <DisplaFlex style={{ columnGap: "20px" }}>
                    <div className="w-50">
                      <InputFieldBox
                        InputLabelTitle="Current Salary"
                        InputType="text"
                        InputPlaceholder="Current Salary"
                        margintop="30px"
                        InputName="CurrentSalary"
                      />
                    </div>
                    <div className="w-50">
                      <InputFieldBox
                        InputLabelTitle="Expected Salary"
                        InputType="text"
                        InputPlaceholder="Expected Salary"
                        margintop="30px"
                        InputName="ExpectedSalary"
                      />
                    </div>
                  </DisplaFlex>

                  <Selectbox margintop="30px" />

                  <Button type="submit">Submit</Button>
                </MarginTwenty>
              </div>
              <div className="w-20"></div>
            </DisplaFlex>
          </FormDiv>
        </FormContainer>
      </FormElement>
    </ThemeProvider>
  );
}

export default StyledForms;

const InputFieldBox = (Props) => {
  const MarginTwenty = styled.div`
    ${"" /* margin-top: ${(Props) => Props.margintop}; */}
  `;

  const ColumnThree = styled.div`
    position: relative;

    .effect-24 ~ .focus-bg:before,
    .effect-24 ~ .focus-bg:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 0;
      height: 0;
      background-color: #ededed;
      transition: 0.3s;
      z-index: -1;
    }
    .effect-24:focus ~ .focus-bg:before,
    .has-content.effect-24 ~ .focus-bg:before {
      transition: 0.3s;
      width: 50%;
      left: 0;
      top: 0;
      height: 100%;
    }
    .effect-24 ~ .focus-bg:after {
      left: auto;
      right: 50%;
      top: auto;
      bottom: 50%;
    }
    .effect-24:focus ~ .focus-bg:after,
    .has-content.effect-24 ~ .focus-bg:after {
      transition: 0.3s;
      width: 50%;
      height: 100%;
      bottom: 0;
      right: 0;
    }
    .effect-24 ~ label {
      position: absolute;
      left: 14px;
      width: 100%;
      top: 10px;
      color: #ffffff;
      transition: 0.3s;
      letter-spacing: 0.5px;
      z-index: -1;
    }
    .effect-24:focus ~ label,
    .has-content.effect-24 ~ label {
      top: -18px;
      left: 0;
      font-size: 12px;
      color: #fff;
      transition: 0.3s;
      z-index: 1;
    }

    .effect-24::placeholder {
      opacity: 1;
      color: #fff;
    }

    .effect-24:focus::placeholder {
      display: none;
      opacity: 0;
    }
  `;

  const InputType = styled.input`
    font: 15px/24px "Poppins", Arial, sans-serif;
    color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    padding: 7px 15px;
    border: 1px solid #ccc;
    position: relative;
    background: transparent;
    line-height: 2;

    &:focus {
      outline: none;
    }
  `;
  return (
    <>
      <MarginTwenty className="" style={{ marginTop: `${Props.margintop}` }}>
        <ColumnThree className="input-effect">
          <InputType
            className="effect-24"
            type={Props.InputType}
            placeholder={Props.InputPlaceholder}
            name={Props.InputName}
          />
          <label>{Props.InputLabelTitle}</label>
          <span className="focus-bg"></span>
        </ColumnThree>
      </MarginTwenty>
    </>
  );
};

function Selectbox(Props) {
  const MarginTwenty = styled.div``;
  const ColumnThree = styled.div`
    position: relative;
  `;

  const InputSelect = styled.select`
    font: 15px/24px "Poppins", Arial, sans-serif;
    color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    padding: 7px 15px;
    border: 1px solid #ccc;
    position: relative;
    background: transparent;
    line-height: 2;
    height: 46px;

    &:focus {
      outline: none;
    }

    option {
      color: #000;
    }
  `;

  const NoticePeriod = [
    "Select Notice Period",
    "Immediate",
    "1 Week",
    "2 Weeks",
    "3 Weeks",
    "1 Month",
    "2 Months",
    "3 Months",
  ];
  return (
    <>
      <MarginTwenty className="" style={{ marginTop: `${Props.margintop}` }}>
        <ColumnThree className="input-effect">
          <InputSelect>
            {NoticePeriod.map((value, index) => (
                <option value={value} key={index}>{value}</option>
            ))}
          </InputSelect>
        </ColumnThree>
      </MarginTwenty>
    </>
  );
}
