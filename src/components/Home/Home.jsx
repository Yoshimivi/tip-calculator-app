import React, { useEffect, useState } from "react";
import { InputBox, Container, FirstBox, SecondBox, TipBox } from "./styles";

export function Home () {
  const [billValue, setBillValue] = useState({
    billTotalNoTip: '',
    tipPercentage: '',
    numberOfPeople: '',
  })

  const [tipValue, setTipValue] = useState({
    tipAmoutPerPerson: 0,
    totalValuePerPerson: 0,
  })

  useEffect(() => {
    setTipValue(prevTipValue => ({prevTipValue, 
      tipAmoutPerPerson: billValue.billTotalNoTip * billValue.tipPercentage / billValue.numberOfPeople, 
      totalValuePerPerson: (billValue.billTotalNoTip + billValue.billTotalNoTip * billValue.tipPercentage) / billValue.numberOfPeople}))
  }, [billValue])

  function handleSetPercentage(value) {
    setBillValue(prevBillValue => ({...prevBillValue, tipPercentage: Number(value)}))
  }

  const currencyMask = (e) => {
    setBillValue(prevBillValue => ({...prevBillValue, billTotalNoTip: Number(e.target.value)}))
    let value = e.target.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d)(\d{2})$/, "$1.$2")
    // value = value.replace(/(?=(\d{3})+(\D))\B/g, ",")
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
            <input type="number" pattern="" placeholder="0" value={billValue.billTotalNoTip}
            className={billValue.billTotalNoTip === 0 && "valueError"}
            // onChange={e => setBillValue(prevBillValue => ({...prevBillValue, billTotalNoTip: Number(e.target.value)}))}
            onChange={(e) => currencyMask(e)}
            />
            <img src="/icon-dollar.svg" alt="" /> 
          </span>
        </InputBox>
        <TipBox>
          <p>Select Tip %</p>
          <div>
            <button className={billValue.tipPercentage === 0.05 ? "active" : undefined} 
            onClick={e => handleSetPercentage(0.05)}
            >5%</button>
            <button className={billValue.tipPercentage === 0.1 ? "active" : undefined}
            onClick={e => handleSetPercentage(0.1)}
            >10%</button>
            <button className={billValue.tipPercentage === 0.15 ? "active" : undefined}
            onClick={e => handleSetPercentage(0.15)}
            >15%</button>
            <button className={billValue.tipPercentage === 0.25 ? "active" : undefined}
            onClick={e => handleSetPercentage(0.25)}
            >25%</button>
            <button className={billValue.tipPercentage === 0.5 ? "active" : undefined}
            onClick={e => handleSetPercentage(0.5)}
            >50%</button>
            <input type="number" name="" id="customInput" placeholder="Custom"  
            value={billValue.tipPercentage === '' ? '' : 
            billValue.tipPercentage === 0.05 ? '' : 
            billValue.tipPercentage === 0.1 ? '' : 
            billValue.tipPercentage === 0.15 ? '' : 
            billValue.tipPercentage === 0.25 ? '' : 
            billValue.tipPercentage === 0.5 ? '' : billValue.tipPercentage * 100}
            onClick={e => setBillValue(prevBillValue => ({...prevBillValue, tipPercentage: ''}))}
            onChange={e => setBillValue(prevBillValue => ({...prevBillValue, tipPercentage: Number(e.target.value)*0.01}))}
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
              onChange={e => setBillValue(prevBillValue => ({...prevBillValue, numberOfPeople: Number(e.target.value)}))}
              />
              <img src="/icon-person.svg" alt="" />
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
        {billValue.billTotalNoTip === '' ? true : 
        billValue.tipPercentage === '' ? true : 
        billValue.numberOfPeople === '' ? true : undefined} 
        onClick={e => setBillValue(prevBillValue => ({...prevBillValue, billTotalNoTip: '', tipPercentage: '', numberOfPeople: ''}))}
        >RESET</button>
      </SecondBox>
    </Container>
  )
}