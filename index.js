

class Calculator extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <form id="loan-form">
          <label>Сумма кредита:</label>
          <input type="number" id="count" placeholder="Введите сумму кредита"/>
          <label>Процентная ставка:</label>
          <input type="number" id="pers" placeholder="Введите процентную ставку"/>
          <label>Срок погашения:</label>
          <input type="number" id="term" placeholder="Введите срок погашения в годах"/>
          <input type="submit" value="Рассчитать" />
        </form>
        <div id="results" class="result">
          <h2>Результаты</h2>
          <p>Ежемесячный платеж: <span class='monthlyPayment'></span></p>
          <p>Общая сумма платежа: <span class='totalPayment'></span></p>
          <p>Общее количество процентов: <span class='sum'></span></p>
        </div>
        `
    }
}
window.customElements.define('my-calculator', Calculator)




function calculatePayment() {
    let count = document.getElementById("count").value
    let pers = document.getElementById("pers").value
    let term = document.getElementById("term").value
    let monthlypers = pers / 100 / 12
    let payments = term * 12
    let x = Math.pow(1 + monthlypers, payments)
    let monthlyPayment = (count * x * monthlypers) / (x - 1)
    monthlyPayment = monthlyPayment
    let totalPayment = (monthlyPayment * payments)
    let sumFirst = document.querySelector('.monthlyPayment')
    let sumSecond = document.querySelector('.totalPayment')
    let sumThird = document.querySelector('.sum')
    sumFirst.innerHTML = monthlyPayment
    sumSecond.innerHTML = totalPayment
    sumThird.innerHTML = totalPayment/count * 100
}
  
    const countInp = document.getElementById("count")
    const persInp = document.getElementById("pers")
    const termInp = document.getElementById("term")

    countInp.addEventListener('change', e => {
      e.preventDefault();
      calculatePayment()
    })
    persInp.addEventListener('change', e => {
      e.preventDefault();
      calculatePayment()
    })
    termInp.addEventListener('change', e => {
      e.preventDefault();
      calculatePayment()
    })
