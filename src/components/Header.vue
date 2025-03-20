<script setup>

</script>

<template>
  <header>

    <div class="portal-menu-wrap">
      <div class="portal-menu">

        <div class="left">
          <ul>
            <li class="active">Občané</li>
            <li>Živnostníci a malé firmy</li>
            <li>Střední a velké firmy, instituce</li>
          </ul>
        </div>

        <div class="right">
          <ul>
            <li>Kontakt</li>
            <li>Podpora</li>
            <li>English</li>
            <li>
              <svg viewBox="0 0 17 16">
                <path fill="white" d="M3.02865 7.3335C3.02865 4.75617 5.11798 2.66683 7.69531 2.66683C10.2726 2.66683 12.362 4.75617 12.362 7.3335C12.362 9.91083 10.2726 12.0002 7.69531 12.0002C5.11798 12.0002 3.02865 9.91083 3.02865 7.3335ZM7.69531 1.3335C4.3816 1.3335 1.69531 4.01979 1.69531 7.3335C1.69531 10.6472 4.3816 13.3335 7.69531 13.3335C9.18243 13.3335 10.5432 12.7925 11.5915 11.8965L14.3619 14.6669L15.3047 13.7241L12.5036 10.923C13.2521 9.92204 13.6953 8.67953 13.6953 7.3335C13.6953 4.01979 11.009 1.3335 7.69531 1.3335Z"></path>
              </svg>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="web-menu">
       <div class="left">

          <a href="/cs/obcane" class="logo" aria-label="Logo komerční banky">
            <svg role="img" viewBox="0 0 97 32" alt="Logo Komerční banky">
              <path d="M0.19043 16H32.1904V0H0.19043V16Z" fill="#E60028"></path>
              <path d="M0.19043 32H32.1904V16H0.19043V32Z" fill="black"></path>
              <path d="M5.75977 16.9757H26.6214V15.0243H5.75977V16.9757Z" fill="#FFFFFE"></path>
              <path d="M41.9424 25.6559V6.52063H45.4889V15.4508L55.108 6.52063H59.4701L49.5716 15.7314L59.8785 25.6559H55.108L45.4889 16.3694V25.6559H41.9424Z" fill="black"></path>
              <path d="M78.2549 20.0426C78.2549 18.4351 77.4132 17.5685 75.6021 17.5685H66.0859V22.4918H75.1688C77.2865 22.4918 78.2549 21.5743 78.2549 20.0426ZM75.3724 14.4044C76.98 14.4044 77.7198 13.2822 77.7198 12.083C77.7198 10.7561 76.8782 9.68477 75.1688 9.68477H66.0859V14.4044H75.3724ZM79.2764 15.7314C80.9597 16.5979 81.9292 18.2054 81.9292 20.0426C81.9292 23.2067 79.6339 25.6559 75.2446 25.6559H62.5654V6.52063H75.1688C78.6893 6.52063 81.2403 8.66437 81.2403 11.9043C81.2403 13.5627 80.5265 14.7619 79.2764 15.7314Z" fill="black"></path>
            </svg>
          </a>

          <ul class="menu main-menu">
            <li>
              <a href="#">Občan</a>
            </li>
            <li><a href="#">Miki</a></li>
            <li><a href="#">Má narozeniny</a></li>
          </ul>

       </div>

       <div class="right">
        <ul class="menu bank-menu">

            <li class="sm-hide"> 
              <a class="narrow"  href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M11.5 2.75C9.15279 2.75 7.25 4.65279 7.25 7C7.25 9.34721 9.15279 11.25 11.5 11.25C13.8472 11.25 15.75 9.34721 15.75 7C15.75 4.65279 13.8472 2.75 11.5 2.75ZM5.75 7C5.75 3.82436 8.32436 1.25 11.5 1.25C14.6756 1.25 17.25 3.82436 17.25 7C17.25 10.1756 14.6756 12.75 11.5 12.75C8.32436 12.75 5.75 10.1756 5.75 7Z"></path>
                  <path d="M8.5 15.75C6.15279 15.75 4.25 17.6528 4.25 20V22H2.75V20C2.75 16.8244 5.32436 14.25 8.5 14.25H14.5V15.75H8.5Z"></path>
                  <path d="M18.25 15.25V22.75H16.75V15.25H18.25Z"></path>
                  <path d="M21.25 19.75H13.75V18.25H21.25V19.75Z"></path>
                </svg>
                <span class="sm-hide">Stát se bohémem</span>
              </a>
            </li>

            <li class="sm-hide">
              <a class="narrow" href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M2.25 12.5C2.25 10.9812 3.48122 9.75 5 9.75H19C20.5188 9.75 21.75 10.9812 21.75 12.5V19.5C21.75 21.0188 20.5188 22.25 19 22.25H5C3.48122 22.25 2.25 21.0188 2.25 19.5V12.5ZM5 11.25C4.30964 11.25 3.75 11.8096 3.75 12.5V19.5C3.75 20.1904 4.30964 20.75 5 20.75H19C19.6904 20.75 20.25 20.1904 20.25 19.5V12.5C20.25 11.8096 19.6904 11.25 19 11.25H5Z"></path>
                  <path d="M6.25 7.5C6.25 4.32436 8.82436 1.75 12 1.75C15.1756 1.75 17.75 4.32436 17.75 7.5V11.25H6.25V7.5ZM12 3.25C9.65279 3.25 7.75 5.15279 7.75 7.5V9.75H16.25V7.5C16.25 5.15279 14.3472 3.25 12 3.25Z"></path>
                  <path d="M12.75 13.75V18.75H11.25V13.75H12.75Z"></path>
                </svg>
                <span>Přihlásit</span>
              </a>
            </li>

            <li class="sm-show"> 
              <a class="narrow" href="#">
                <svg viewBox="0 0 24 24" style="width: 1.5rem; fill: black;"><path d="M11.5 2.75C9.15279 2.75 7.25 4.65279 7.25 7C7.25 9.34721 9.15279 11.25 11.5 11.25C13.8472 11.25 15.75 9.34721 15.75 7C15.75 4.65279 13.8472 2.75 11.5 2.75ZM5.75 7C5.75 3.82436 8.32436 1.25 11.5 1.25C14.6756 1.25 17.25 3.82436 17.25 7C17.25 10.1756 14.6756 12.75 11.5 12.75C8.32436 12.75 5.75 10.1756 5.75 7Z"></path>
                  <path d="M8.5 15.75C6.15279 15.75 4.25 17.6528 4.25 20V22H2.75V20C2.75 16.8244 5.32436 14.25 8.5 14.25H14.5V15.75H8.5Z"></path>
                  <path d="M18.25 15.25V22.75H16.75V15.25H18.25Z"></path>
                  <path d="M21.25 19.75H13.75V18.25H21.25V19.75Z"></path>
                </svg>
              </a>
            </li>

            <li class="sm-show">
              <a class="narrow" href="#" style="padding: 0;">
                <svg viewBox="0 0 24 24" style="width: 1.5rem; margin: 0">
                  <path d="M3 6H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M3 12H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="square"></path>
                  <path d="M3 18H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="square"></path>
                </svg>
              </a>
            </li>

          </ul>
        </div>
      </div>

  </header>
</template>

<style lang="scss" scoped>


  .sm-hide {
    display: inline-block;
  }

  .sm-show {
    display: none !important;
  }

.portal-menu-wrap {
  height: 3rem;
  background: #020203;
  display: flex;
  justify-content: center;
  align-self: stretch;
  padding: 0 1.5rem;

  .portal-menu {
    display: flex;
    max-width: 1440px;
    justify-content: space-between;
    align-items: flex-end;
    flex: 1 0 0;

    .left, .right {
      display: flex;
      height: 2.75rem;
      align-items: flex-end;

      ul {
        padding: 0;
        margin: 0;

        li {
          list-style: none;
          margin: 0;
          display: inline-block;
          background: #020203;
          color: white;
          padding: .6rem 1.5rem;
          border-radius: .25rem .25rem 0 0;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 500;
          line-height: 1.5rem; /* 171.429% */
          letter-spacing: -0.003rem;

          &.active {
            background: #F8F8F8;
            color: #020203;
          }

          svg {
            width: 1rem;
            fill: white;
            transform: translateY(3px);
          }
        }
      }
    }

    .right ul li {
      padding: .6rem 1rem
    }

    .right {

    }
  }
}

.web-menu {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  height: 6rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 0 1.5rem;

  .left {
    display: flex;

    .logo {
      margin-right: 1.5rem;

      svg {
        width: 7.5rem;
      }
    }
  }



  ul {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;

        li {
          list-style: none;
          margin: 0;
          display: inline-block;
          
          a {
            color: black;
            padding: .6rem 1.5rem;
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: 1.5rem; 
            letter-spacing: -0.003rem;
            text-decoration: none;

            &.narrow {
              padding: .6rem 1rem;
            }

            svg {
              width: 1.25rem;
              transform: translateY(3px);
              fill: rgb(224, 0, 0);
              margin-right: .5rem;
            }
          }

          &.active {
            background: #F8F8F8;
            color: #020203;
          }

        }
      }

}



/* Use a media query to add a breakpoint at 800px: */
@media screen and (max-width: 890px) {

  .sm-hide {
    display: none !important;
  }

  .sm-show {
    display: inline-block !important;
  }

  .portal-menu-wrap {
    display: none;
  }

  .web-menu  {
    .left .logo svg {
      width: 4.5rem;
    }

    .main-menu {
      display: none;
    }

    .bank-menu {

    }
  }
}

</style>
