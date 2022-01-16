async function accountFormHandler(event) {
    event.preventDefault();
  
    const stock_name = document.querySelector('input[name="stock-name"]').value.trim();
    const stock_price = document.querySelector('input[name="stock-price"]').value.trim();
    const shares = document.querySelector('input[name="share-no"]').value.trim();
    const user_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(stock_name, stock_price, shares, user_id);
    
    if (comment_text) {
        const response = await fetch('/api/accounts', {
          method: 'POST',
          body: JSON.stringify({
            user_id,
            stock_name,
            stock_price,
            shares
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.account-form').addEventListener('submit', commentFormHandler);