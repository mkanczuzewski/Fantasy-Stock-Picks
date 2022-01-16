async function newFormHandler2(event) {
    event.preventDefault();
  
    const stock_name = document.querySelector('input[name="stock-name"]').value;
    const stock_price = document.querySelector('input[name="stock-price"]').value;
    const shares = document.querySelector('input[name="shares"]').value;

    const response = await fetch(`/createaccount`, {
      method: 'POST',
      body: JSON.stringify({
        stock_name,
        stock_price,
        shares
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/leaderboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-stock-form').addEventListener('submit', newFormHandler2);