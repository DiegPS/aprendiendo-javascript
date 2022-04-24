
const html = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hola</title>
  <style>
    body {
      background-color: #0C0E14;
      color: aliceblue;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    nav {
      display: flex;
      justify-content: center;
      background-color: #161925;
      margin-top: 0;
      padding: 10px;
    }

    h1 {
      margin: 0;
      padding: 0;
    }

    section {
      margin: 10px;
      display: grid;
      grid-auto-rows: 20rem;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 15rem), 1fr));
      gap: 1rem;
    }

    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background-color: #161925;
      border-radius: 10px;
    }

    .card:hover {
      cursor: pointer;
      background-color: #282d42;
    }
  </style>
</head>

<body>
  <nav>
    <h1>Bienvenido a esta muestra de HTML</h1>
  </nav>
  <section>
    <div class="card">
      <img src="" alt="">
      <h2>Card 1</h2>
    </div>
    <div class="card">
      <img src="" alt="">
      <h2>Card 2</h2>
    </div>
    <div class="card">
      <img src="" alt="">
      <h2>Card 3</h2>
    </div>
    <div class="card">
      <img src="" alt="">
      <h2>Card 4</h2>
    </div>
    <div class="card">
      <img src="" alt="">
      <h2>Card 5</h2>
    </div>
    <div class="card">
      <img src="" alt="">
      <h2>Card 6</h2>
    </div>
  </section>
</body>

</html>
`


export default html
