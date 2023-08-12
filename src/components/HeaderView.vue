<template>
    <!-- <div class="umum">
        <img src="../assets/logo.png" alt="yuklay olmadik, uzr endi...">
        <div class="nav">
            <ul>
                <li><a href="#">Asosiy</a></li>
                <li><a href="#">Shkaflar</a></li>
                <li><a href="#">Krovatlar</a></li>
                <li><a href="#">Boshqalar</a></li>
                <li><a href="#">Xizmatlar</a></li>
                <li><a href="#">Bog'lanish</a></li>
            </ul>
        </div>
    </div> -->
    <nav class="umum navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Asosiy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shkaflar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Krovatlar</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Boshqalar
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Tumbochka</a></li>
            <li><a class="dropdown-item" href="#">Ko'zgu</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Xizmatlar</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/about">Bog'lanish</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Kiriting" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Izlash</button>
      </form>
    </div>
  </div>
</nav>
</template>

<script>

</script>

<style scoped>
    .umum{
        padding: 1rem;
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: space-evenly;
        height: auto;
        width: 100%;
    }

    img{
        width: 100px;
    }


    a{
        font-size: 20px;
        padding: 1rem;
        font-weight: 600;
    }

    a:hover{
        text-decoration: underline;
    }

    /* Smartfon uchun stil */
    @media only screen and (max-width: 600px) {
        .umum{
            padding: 1rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
        }
        img{
            width: 70px;
        }

        a{
            font-size: 18px;
            padding: 0.8rem;
        }
        a:active{
            text-decoration: underline;
        }
        
    }
</style>