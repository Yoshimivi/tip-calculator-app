import React, { useEffect, useState } from "react";
import { InputBox, Container, FirstBox, SecondBox, TipBox } from "./styles";

export function Home () {
  const [billValue, setBillValue] = useState({
    billTotalNoTip: '',
    tipPercentageButton: '',
    tipPercentageCustom: '',
    numberOfPeople: '',
  })

  const [tipValue, setTipValue] = useState({
    tipAmoutPerPerson: 0,
    totalValuePerPerson: 0,
  })


useEffect(() => {
  setTipValue(prevTipValue => ({prevTipValue, 
    tipAmoutPerPerson: billValue.billTotalNoTip * (billValue.tipPercentageButton === '' ? (billValue.tipPercentageCustom/100) : billValue.tipPercentageButton) / billValue.numberOfPeople, 
    totalValuePerPerson: (billValue.billTotalNoTip + billValue.billTotalNoTip * (billValue.tipPercentageButton === '' ? (billValue.tipPercentageCustom/100) : billValue.tipPercentageButton)) / billValue.numberOfPeople}))
}, [billValue])

  function handleSetPercentage(value) {
    setBillValue(prevBillValue => ({...prevBillValue, tipPercentageButton: Number(value), tipPercentageCustom: ''}))
  }

  const handleBillNoTipAndCurrencyMask = (e) => {
    setBillValue(prevBillValue => ({...prevBillValue, billTotalNoTip: Number(e.target.value)}))
    let value = e.target.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d)(\d{2})$/, "$1.$2")
    value = value.replace(/\b0/, "")
    // value = value.replace(/(?=(\d{3})+(\D))\B/g, ",")
    e.target.value = value
    return e
  }

  const handleTipCustomAndMask = (e) => {
    setBillValue(prevBillValue => ({...prevBillValue, tipPercentageCustom: Number(e.target.value)}))
    let value = e.target.value
    value = value.replace(/\b0/, "")
    e.target.value = value
    return e
  }

  const handlePeopleNumberAndMask = (e) => {
    setBillValue(prevBillValue => ({...prevBillValue, numberOfPeople: Number(e.target.value)}))
    let value = e.target.value
    value = value.replace(/\b0/, "")
    e.target.value = value
    return e
  }

  return (
    <Container>
      <FirstBox>
        <InputBox>
          <p>Bill</p>
          {billValue.billTotalNoTip === 0 && <p className="errorText">Can't be zero</p>}
          <span>
            <input type="number" step={0.01} placeholder="0" value={billValue.billTotalNoTip}
            className={billValue.billTotalNoTip === 0 && "valueError"}
            onChange={(e) => handleBillNoTipAndCurrencyMask(e)}
            />
            <img src="/icon-dollar.svg" alt="currency dolar icon" /> 
          </span>
        </InputBox>
        <TipBox>
          <p>Select Tip %</p>
          <div>
            <button className={billValue.tipPercentageButton === 0.05 ? "active" : undefined} 
            onClick={e => handleSetPercentage(0.05)}
            >5%</button>
            <button className={billValue.tipPercentageButton === 0.1 ? "active" : undefined}
            onClick={e => handleSetPercentage(0.1)}
            >10%</button>
            <button className={billValue.tipPercentageButton === 0.15 ? "active" : undefined}
            onClick={e => handleSetPercentage(0.15)}
            >15%</button>
            <button className={billValue.tipPercentageButton === 0.25 ? "active" : undefined}
            onClick={e => handleSetPercentage(0.25)}
            >25%</button>
            <button className={billValue.tipPercentageButton === 0.5 ? "active" : undefined}
            onClick={e => handleSetPercentage(0.5)}
            >50%</button>
            <input type="number" id="customInput" placeholder="Custom"  
            value={billValue.tipPercentageCustom??''}
            // value={billValue.tipPercentageCustom === '' ? '' : billValue.tipPercentageCustom}
            onClick={e => setBillValue(prevBillValue => ({...prevBillValue, tipPercentageButton: ''}))}
            onChange={e => handleTipCustomAndMask(e)}
            />
          </div>
        </TipBox>
        <InputBox>
          <div className="peopleBox">
            <p>Number of People</p>
            {billValue.numberOfPeople === 0 && <p className="errorText">Can't be zero</p>}
            <span>
              <input type="number" placeholder="0" value={billValue.numberOfPeople}
              className={billValue.numberOfPeople === 0 && "valueError"}
              onChange={e => handlePeopleNumberAndMask(e)}
              />
              <img src="/icon-person.svg" alt="person icon" />
            </span>
          </div>
        </InputBox>
      </FirstBox>
      <SecondBox>
        <div>
          <h3>Tip Amount</h3>
          <p>/ person</p>
          <span>
            ${tipValue.tipAmoutPerPerson > 0 && tipValue.tipAmoutPerPerson < Infinity ? tipValue.tipAmoutPerPerson.toFixed(2) : '0.00'}
          </span>
        </div>
        <div>
          <h3>Total</h3>
          <p>/ person</p>
          <span>
            ${tipValue.totalValuePerPerson > 0 && tipValue.totalValuePerPerson < Infinity ? tipValue.totalValuePerPerson.toFixed(2) : '0.00'}
          </span>
        </div>
        <button disabled=
        {billValue.billTotalNoTip === '' ? true 
        : (billValue.tipPercentageButton === '' && billValue.tipPercentageCustom === '') ? true 
        : billValue.numberOfPeople === '' ? true : undefined} 
        onClick={e => setBillValue(prevBillValue => (
          {...prevBillValue, 
            billTotalNoTip: '', 
            tipPercentageButton: '', 
            tipPercentageCustom: '', 
            numberOfPeople: ''}))}
        >RESET</button>
      </SecondBox>
    </Container>
  )
}